// ============================================================================
// CORRETOR DE FÓRMULAS POR REGRA (100% offline, sem internet e sem IA)
// ============================================================================
// A ideia aqui é o contrário do dicionário escrito à mão: fórmula errada existe
// infinita, não dá para cadastrar todas. Fórmula CERTA, não — ela nasce de duas
// regrinhas de sala de aula, e essas a gente sabe escrever:
//
//   Regra 1 - Eletroneutralidade: a soma das cargas do cátion e do ânion tem
//             que dar zero. Isso já determina os índices, não sobra escolha.
//   Regra 2 - Caixa do símbolo: NA não existe, Na sim. cO não existe, Co sim.
//   Regra 3 - Distância de edição: se nada acima bateu, procura a fórmula certa
//             mais parecida, tipo HNO -> HNO3.
//
// Tudo roda na máquina do aluno, na hora, sem chamar servidor nenhum: o valor
// disso é responder enquanto ele digita, e uma sugestão errada aqui viraria
// plástico na mão de alguém que não pode conferir com o olho.
// ============================================================================

import { CATIONS, ANIONS } from './dados.js';

// Lista única, sem repetir. O 'H' está nas duas tabelas (é cátion no HCl e
// ânion no NaH), por isso a checagem antes de empurrar.
const TODOS_OS_IONS = [];
CATIONS.concat(ANIONS).forEach(ion => {
  if (!TODOS_OS_IONS.some(guardado => guardado.simbolo === ion.simbolo)) TODOS_OS_IONS.push(ion);
});

// Só os símbolos de UM elemento (fora os poliatômicos tipo SO4). Serve para a
// regra 2 não estragar CO (monóxido de carbono) trocando por Co (cobalto).
const SIMBOLOS_SIMPLES = TODOS_OS_IONS
  .map(ion => ion.simbolo)
  .filter(simbolo => /^[A-Z][a-z]?$/.test(simbolo));

// ----------------------------------------------------------------------------
// FERRAMENTAS PEQUENAS
// ----------------------------------------------------------------------------

// MDC pelo método de Euclides. É ele que simplifica o índice: Ca com 2+ e SO4
// com 2- dariam Ca2(SO4)2, e o MDC corta os dois pela metade -> CaSO4.
const calcularMDC = (a, b) => (b === 0 ? a : calcularMDC(b, a % b));

// Poliatômico = tem mais de uma letra maiúscula (OH, SO4, NH4) ou tem número
// dentro do próprio íon (O2 do peróxido). Esses são os que pedem parênteses.
const ehPoliatomico = (simbolo) => /[A-Z].*[A-Z]/.test(simbolo) || /[0-9]/.test(simbolo);

// Escreve um pedaço da fórmula já com as convenções da IUPAC: índice 1 não se
// escreve, e parêntese só entra em íon poliatômico com índice maior que 1.
const escreverPedaco = (simbolo, indice) => {
  if (indice === 1) return simbolo;
  if (ehPoliatomico(simbolo)) return '(' + simbolo + ')' + indice;
  return simbolo + indice;
};

// Distância de edição: quantas letras é preciso trocar, tirar ou colocar para
// um texto virar o outro. "HNO" e "HNO3" estão a uma distância de 1.
const calcularDistancia = (a, b) => {
  const linha = [];
  for (let j = 0; j <= b.length; j++) linha[j] = j;
  for (let i = 1; i <= a.length; i++) {
    let diagonal = linha[0];
    linha[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const guardado = linha[j];
      const custo = a[i - 1] === b[j - 1] ? 0 : 1;
      linha[j] = Math.min(linha[j] + 1, linha[j - 1] + 1, diagonal + custo);
      diagonal = guardado;
    }
  }
  return linha[b.length];
};

// ----------------------------------------------------------------------------
// REGRA 1 — ELETRONEUTRALIDADE (é esta que gera todo o resto)
// ----------------------------------------------------------------------------

// Cruza as cargas e devolve as fórmulas certas daquele par de íons. Metal de
// NOX variável devolve mais de uma: Fe + OH devolve Fe(OH)2 e Fe(OH)3.
const gerarFormulasCorretas = (cation, anion) => {
  const formulas = [];
  cation.cargas.forEach(cargaCation => {
    anion.cargas.forEach(cargaAnion => {
      const mdc = calcularMDC(cargaCation, cargaAnion);
      const indiceCation = cargaAnion / mdc;
      const indiceAnion = cargaCation / mdc;
      const formula = escreverPedaco(cation.simbolo, indiceCation) + escreverPedaco(anion.simbolo, indiceAnion);
      if (!formulas.includes(formula)) formulas.push(formula);
    });
  });
  return formulas;
};

// Quebra "Ca(OH)2" em cátion Ca + ânion OH. Os índices e os parênteses que o
// aluno digitou são jogados fora de propósito: quem manda neles é a regra 1,
// não o teclado. Devolve todas as leituras possíveis do texto.
const separarEmIons = (formula, ignorarCaixa) => {
  const marca = ignorarCaixa ? 'i' : '';
  const pares = [];
  CATIONS.forEach(cation => {
    // Aceita "Na...", "Na2..." e "(NH4)2..."
    const inicio = formula.match(new RegExp('^\\(?' + cation.simbolo + '\\)?[0-9]*', marca));
    if (!inicio) return;
    const resto = formula.slice(inicio[0].length);
    if (!resto) return;
    ANIONS.forEach(anion => {
      // O que sobrou tem que ser o ânion inteiro, com ou sem parênteses/índice
      if (new RegExp('^\\(?' + anion.simbolo + '\\)?[0-9]*$', marca).test(resto)) {
        pares.push({ cation, anion });
      }
    });
  });
  return pares;
};

const analisarPorEletroneutralidade = (formula) => {
  // Primeira tentativa respeitando maiúscula/minúscula; se não achar nada,
  // tenta de novo relevando a caixa (o aluno escreveu "naoh" ou "CASO4").
  let pares = separarEmIons(formula, false);
  let veioDeCaixaErrada = false;
  if (pares.length === 0) {
    pares = separarEmIons(formula, true);
    veioDeCaixaErrada = true;
  }
  if (pares.length === 0) return null;

  const corretas = [];
  pares.forEach(par => {
    gerarFormulasCorretas(par.cation, par.anion).forEach(certa => {
      if (!corretas.includes(certa)) corretas.push(certa);
    });
  });

  // Bateu com uma das fórmulas certas: está tudo bem, não enche o saco do aluno.
  if (corretas.includes(formula)) return { jaEstaCorreta: true, sugestoes: [] };

  // Trava anti-palavra: quando o casamento só aconteceu relevando a caixa E o
  // aluno não escreveu nenhum número nem parêntese, a única correção aceita é a
  // de maiúscula/minúscula. Senão "nao" viraria Na2O no meio de um texto comum.
  let sugestoes = corretas;
  if (veioDeCaixaErrada && !/[0-9()]/.test(formula)) {
    sugestoes = corretas.filter(certa => certa.toLowerCase() === formula.toLowerCase());
  }
  if (sugestoes.length === 0) return null;

  return { jaEstaCorreta: false, sugestoes, cation: pares[0].cation, anion: pares[0].anion };
};

// ----------------------------------------------------------------------------
// REGRA 2 — CAIXA DO SÍMBOLO (NA -> Na, cO -> Co, hg -> Hg)
// ----------------------------------------------------------------------------

// "CO" pode ser carbono + oxigênio (monóxido), então não é erro de caixa e não
// se mexe. Já "NA" não dá para ler como símbolo nenhum, aí sim é o Na torto.
const ehSequenciaDeSimbolosValidos = (texto) => {
  const pedacos = texto.match(/[A-Z][a-z]?[0-9]*/g);
  if (!pedacos || pedacos.join('') !== texto) return false;
  return pedacos.every(pedaco => SIMBOLOS_SIMPLES.includes(pedaco.replace(/[0-9]+$/, '')));
};

const corrigirCaixaDoSimbolo = (formula) => {
  if (ehSequenciaDeSimbolosValidos(formula)) return null;
  const achados = [];
  TODOS_OS_IONS.forEach(ion => {
    if (ion.simbolo !== formula && ion.simbolo.toLowerCase() === formula.toLowerCase()) {
      achados.push(ion.simbolo);
    }
  });
  if (achados.length === 0) return null;
  return {
    mensagem: `Símbolo químico se escreve com a primeira letra maiúscula e a segunda minúscula.`,
    sugestoes: achados
  };
};

// ----------------------------------------------------------------------------
// REGRA 3 — FÓRMULA MAIS PARECIDA (é a última tentativa)
// ----------------------------------------------------------------------------
// Aqui só entra erro de ÍNDICE, nunca erro de letra: as letras digitadas têm que
// ser exatamente as mesmas da fórmula sugerida, na mesma ordem. Sem essa trava,
// CO (monóxido de carbono) ficaria a uma letra de CaO, CuO e CdO, e o aluno cego
// imprimiria um óxido de cálcio achando que pediu monóxido de carbono.

// Todas as fórmulas que a tabela de íons consegue gerar, separadas pela letra
// inicial. Isso é montado UMA vez, quando o arquivo carrega. A cada tecla a
// regra 3 olha só o balde da letra certa, e ainda filtra por tamanho.
const FORMULAS_POR_LETRA = {};
CATIONS.forEach(cation => {
  ANIONS.forEach(anion => {
    gerarFormulasCorretas(cation, anion).forEach(formula => {
      const letra = formula[0];
      if (!FORMULAS_POR_LETRA[letra]) FORMULAS_POR_LETRA[letra] = [];
      FORMULAS_POR_LETRA[letra].push(formula);
    });
  });
});

// Tira números e parênteses e deixa só as letras: "Fe(OH)3" vira "FeOH".
const soAsLetras = (texto) => texto.replace(/[^A-Za-z]/g, '');

const procurarFormulaParecida = (formula) => {
  const balde = FORMULAS_POR_LETRA[formula[0]];
  if (!balde) return null;

  const candidatas = [];
  balde.forEach(certa => {
    if (Math.abs(certa.length - formula.length) > 1) return;
    if (soAsLetras(certa) !== soAsLetras(formula)) return;
    if (calcularDistancia(formula, certa) !== 1) return;
    if (!candidatas.includes(certa)) candidatas.push(certa);
  });
  if (candidatas.length === 0) return null;

  // Quem começa igual ao que foi digitado vem primeiro: é o caso do aluno que
  // parou antes do índice (HNO -> HNO2, HNO3).
  candidatas.sort((a, b) => {
    const pesoA = a.startsWith(formula) ? 0 : 1;
    const pesoB = b.startsWith(formula) ? 0 : 1;
    if (pesoA !== pesoB) return pesoA - pesoB;
    return a.length - b.length;
  });

  return {
    mensagem: `Não encontrei essa fórmula na tabela de íons, mas ela está a uma letra de distância destas:`,
    sugestoes: candidatas.slice(0, 3)
  };
};

// ----------------------------------------------------------------------------
// PORTA DE ENTRADA — é só esta função que o App.jsx chama
// ----------------------------------------------------------------------------
// Devolve { mensagem, sugestoes: [...] } (o formato que o AlertaSugestao espera)
// ou null quando não há nada a dizer.
export function corrigirFormula(texto) {
  const limpo = texto.trim();
  if (limpo.length < 2) return null;
  // Íon solto (Na+, Fe3+) e texto livre continuam no caminho antigo do App.
  if (!/^[A-Za-z0-9()]+$/.test(limpo)) return null;

  const analise = analisarPorEletroneutralidade(limpo);
  if (analise && analise.jaEstaCorreta) return null;
  if (analise) {
    const cargaCation = analise.cation.cargas.join('+ ou ') + '+';
    const cargaAnion = analise.anion.cargas.join('- ou ') + '-';
    return {
      mensagem: `A soma das cargas precisa dar zero: ${analise.cation.simbolo} é ${cargaCation} e ${analise.anion.simbolo} é ${cargaAnion}, então os índices digitados não fecham a conta.`,
      sugestoes: analise.sugestoes
    };
  }

  const porCaixa = corrigirCaixaDoSimbolo(limpo);
  if (porCaixa) return porCaixa;

  return procurarFormulaParecida(limpo);
}
