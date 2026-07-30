// ============================================================================
// TABELA DE ÍONS DO ENSINO MÉDIO — SÓ DADOS, NENHUMA LÓGICA MORA AQUI
// ============================================================================
// COMO ADICIONAR UM ÍON NOVO (leva 10 segundos):
//
//   1. Escolha a lista certa: CATIONS (carga positiva) ou ANIONS (carga negativa).
//   2. Escreva mais uma linha, no mesmo formato das outras:
//
//        { simbolo: 'Ti', cargas: [3, 4], nome: 'titânio' }
//
//      simbolo -> exatamente como se escreve na fórmula: primeira letra
//                 maiúscula e o resto minúsculo (Na, Fe, NH4, SO4).
//      cargas  -> só o número, SEM o sinal. O sinal já vem da lista onde você
//                 colocou o íon. Se o elemento tem mais de um NOX, escreva
//                 todos: [2, 3]. A ordem daqui é a ordem em que as sugestões
//                 aparecem na tela do aluno.
//      nome    -> só para gente ler depois; o programa não usa.
//
//   3. Salvar. Acabou. NÃO existe lista de "fórmulas erradas" para atualizar:
//      o corretor.js monta as fórmulas certas a partir destas duas listas,
//      cruzando as cargas. Um íon novo aqui = todas as combinações dele já
//      passam a ser corrigidas.
// ============================================================================

// ----------------------------------------------------------------------------
// CÁTIONS (carga positiva) — o pedaço que vem na FRENTE da fórmula
// ----------------------------------------------------------------------------
export const CATIONS = [
  // Carga fixa 1+: hidrogênio, metais alcalinos, prata e o amônio
  { simbolo: 'H', cargas: [1], nome: 'hidrogênio' },
  { simbolo: 'Li', cargas: [1], nome: 'lítio' },
  { simbolo: 'Na', cargas: [1], nome: 'sódio' },
  { simbolo: 'K', cargas: [1], nome: 'potássio' },
  { simbolo: 'Rb', cargas: [1], nome: 'rubídio' },
  { simbolo: 'Cs', cargas: [1], nome: 'césio' },
  { simbolo: 'Fr', cargas: [1], nome: 'frâncio' },
  { simbolo: 'Ag', cargas: [1], nome: 'prata' },
  { simbolo: 'NH4', cargas: [1], nome: 'amônio' },

  // Carga fixa 2+: metais alcalinoterrosos e companhia
  { simbolo: 'Be', cargas: [2], nome: 'berílio' },
  { simbolo: 'Mg', cargas: [2], nome: 'magnésio' },
  { simbolo: 'Ca', cargas: [2], nome: 'cálcio' },
  { simbolo: 'Sr', cargas: [2], nome: 'estrôncio' },
  { simbolo: 'Ba', cargas: [2], nome: 'bário' },
  { simbolo: 'Ra', cargas: [2], nome: 'rádio' },
  { simbolo: 'Zn', cargas: [2], nome: 'zinco' },
  { simbolo: 'Ni', cargas: [2], nome: 'níquel' },
  { simbolo: 'Cd', cargas: [2], nome: 'cádmio' },
  { simbolo: 'Pd', cargas: [2], nome: 'paládio' },

  // Carga fixa 3+
  { simbolo: 'Al', cargas: [3], nome: 'alumínio' },
  { simbolo: 'Bi', cargas: [3], nome: 'bismuto' },
  { simbolo: 'Sc', cargas: [3], nome: 'escândio' },
  { simbolo: 'Y', cargas: [3], nome: 'ítrio' },
  { simbolo: 'La', cargas: [3], nome: 'lantânio' },
  { simbolo: 'Ga', cargas: [3], nome: 'gálio' },
  { simbolo: 'In', cargas: [3], nome: 'índio' },

  // Carga fixa 4+
  { simbolo: 'Ti', cargas: [4], nome: 'titânio' },

  // NOX variável: aqui é onde o aluno mais erra, porque a mesma fórmula muda
  // de índice dependendo da carga que o metal está usando
  { simbolo: 'Cu', cargas: [1, 2], nome: 'cobre' },
  { simbolo: 'Hg', cargas: [1, 2], nome: 'mercúrio' },
  { simbolo: 'Au', cargas: [1, 3], nome: 'ouro' },
  { simbolo: 'Tl', cargas: [1, 3], nome: 'tálio' },
  { simbolo: 'Fe', cargas: [2, 3], nome: 'ferro' },
  { simbolo: 'Co', cargas: [2, 3], nome: 'cobalto' },
  { simbolo: 'Cr', cargas: [2, 3], nome: 'cromo' },
  { simbolo: 'Sn', cargas: [2, 4], nome: 'estanho' },
  { simbolo: 'Pb', cargas: [2, 4], nome: 'chumbo' },
  { simbolo: 'Pt', cargas: [2, 4], nome: 'platina' },
  { simbolo: 'Sb', cargas: [3, 5], nome: 'antimônio' },
  { simbolo: 'Mn', cargas: [2, 3, 4, 7], nome: 'manganês' }
];

// ----------------------------------------------------------------------------
// ÂNIONS (carga negativa) — o pedaço que vem ATRÁS da fórmula
// ----------------------------------------------------------------------------
export const ANIONS = [
  // Carga 1-
  { simbolo: 'H', cargas: [1], nome: 'hidreto' },
  { simbolo: 'F', cargas: [1], nome: 'fluoreto' },
  { simbolo: 'Cl', cargas: [1], nome: 'cloreto' },
  { simbolo: 'Br', cargas: [1], nome: 'brometo' },
  { simbolo: 'I', cargas: [1], nome: 'iodeto' },
  { simbolo: 'OH', cargas: [1], nome: 'hidróxido' },
  { simbolo: 'NO3', cargas: [1], nome: 'nitrato' },
  { simbolo: 'NO2', cargas: [1], nome: 'nitrito' },
  { simbolo: 'CN', cargas: [1], nome: 'cianeto' },
  { simbolo: 'ClO', cargas: [1], nome: 'hipoclorito' },
  { simbolo: 'ClO2', cargas: [1], nome: 'clorito' },
  { simbolo: 'ClO3', cargas: [1], nome: 'clorato' },
  { simbolo: 'ClO4', cargas: [1], nome: 'perclorato' },
  { simbolo: 'BrO3', cargas: [1], nome: 'bromato' },
  { simbolo: 'IO3', cargas: [1], nome: 'iodato' },
  { simbolo: 'MnO4', cargas: [1], nome: 'permanganato' },
  { simbolo: 'HCO3', cargas: [1], nome: 'bicarbonato' },
  { simbolo: 'HSO4', cargas: [1], nome: 'bissulfato' },
  { simbolo: 'HSO3', cargas: [1], nome: 'bissulfito' },
  { simbolo: 'HS', cargas: [1], nome: 'bissulfeto' },
  { simbolo: 'H2PO4', cargas: [1], nome: 'di-hidrogenofosfato' },
  { simbolo: 'C2H3O2', cargas: [1], nome: 'acetato' },

  // Carga 2-
  { simbolo: 'O', cargas: [2], nome: 'óxido' },
  { simbolo: 'O2', cargas: [2], nome: 'peróxido' },
  { simbolo: 'S', cargas: [2], nome: 'sulfeto' },
  { simbolo: 'SO4', cargas: [2], nome: 'sulfato' },
  { simbolo: 'SO3', cargas: [2], nome: 'sulfito' },
  { simbolo: 'S2O3', cargas: [2], nome: 'tiossulfato' },
  { simbolo: 'CO3', cargas: [2], nome: 'carbonato' },
  { simbolo: 'CrO4', cargas: [2], nome: 'cromato' },
  { simbolo: 'Cr2O7', cargas: [2], nome: 'dicromato' },
  { simbolo: 'SiO3', cargas: [2], nome: 'metassilicato' },
  { simbolo: 'HPO4', cargas: [2], nome: 'hidrogenofosfato' },

  // Carga 3-
  { simbolo: 'N', cargas: [3], nome: 'nitreto' },
  { simbolo: 'P', cargas: [3], nome: 'fosfeto' },
  { simbolo: 'PO4', cargas: [3], nome: 'fosfato' },
  { simbolo: 'PO3', cargas: [3], nome: 'metafosfato' },
  { simbolo: 'BO3', cargas: [3], nome: 'borato' },

  // Carga 4-
  { simbolo: 'C', cargas: [4], nome: 'carbeto' },
  { simbolo: 'SiO4', cargas: [4], nome: 'ortossilicato' }
];
