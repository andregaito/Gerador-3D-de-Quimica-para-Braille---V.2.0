// Worker do STL: roda o cálculo pesado da malha fora da thread principal,
// assim a aba não congela enquanto o modelo é gerado.
import { serialize } from '@jscad/stl-serializer';
import { gerarModeloJSCAD, geradorBlocoIonicoJSCAD } from './braille3d';

self.onmessage = (evento) => {
  const { tipo, cells, config, params } = evento.data;

  try {
    const modelo3D = tipo === 'ionico'
      ? geradorBlocoIonicoJSCAD(params)
      : gerarModeloJSCAD(cells, config);

    if (!modelo3D) { self.postMessage({ dadosSTL: null }); return; }

    // Devolve só os dados já serializados (ArrayBuffers). Quem monta a Blob e a
    // object URL é a página: URL criada aqui dentro é mais imprevisível de revogar.
    const dadosSTL = serialize({ binary: true }, modelo3D);
    self.postMessage({ dadosSTL }, dadosSTL); // transfere os buffers, não copia
  } catch (erro) {
    // Objeto Error não atravessa a fronteira do worker; mandamos só a mensagem.
    self.postMessage({ erro: erro.message || 'Falha ao gerar a malha' });
  }
};
