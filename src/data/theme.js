import {
  logoPrincipal, logoAmarelo, logoAzul, logoLaranja, logoRosa, logoRoxo, logoVerde, logoVermelho
} from './assets';

// Lista de cores predefinidas exibida no seletor de paleta (ColorTester).
export const CORES_PREDEFINIDAS = [
  { nome: 'Azul', hex: '#0e52c2' }, { nome: 'Roxo', hex: '#511576' }, { nome: 'Rosa', hex: '#db2777' },
  { nome: 'Vermelho', hex: '#dc2626' }, { nome: 'Laranja', hex: '#ea580c' }, { nome: 'Amarelo', hex: '#ca8a04' },
  { nome: 'Verde', hex: '#1a8441' }
];

// Paletas de tema completas para cada cor predefinida do site.
const TEMAS_PREDEFINIDOS = {
  '#0e52c2': { cabecalho: '#ffffff', abaNormal: '#0e52c2', abaAtiva: '#0a3d91', fundoPrincipal: '#869fd8', btnVisualizar: '#0e52c2', btnBaixar: '#059669', fundoCaixa: '#ffffff', fundoSubCaixa: '#f8fafc', textoAba: '#ffffff', textoAbaNormal: 'rgba(255,255,255,0.7)', textoBtnVis: '#ffffff', borderBtnVis: 'transparent', textoBtnBaixar: '#ffffff', borderBtnBaixar: 'transparent', bordaGeral: '#0e52c2', logo: logoAzul, textoSubCaixa: '#1e293b' },
  '#1a8441': { cabecalho: '#ffffff', abaNormal: '#1a8441', abaAtiva: '#1c6030', fundoPrincipal: '#87a194', btnVisualizar: '#1c6030', btnBaixar: '#066a63', fundoCaixa: '#eaf6f0', fundoSubCaixa: '#c3e4d3', textoAba: '#ffffff', textoAbaNormal: 'rgba(255,255,255,0.7)', textoBtnVis: '#ffffff', borderBtnVis: 'transparent', textoBtnBaixar: '#ffffff', borderBtnBaixar: 'transparent', bordaGeral: '#1a8441', logo: logoVerde, textoSubCaixa: '#1e293b' },
  '#511576': { cabecalho: '#d8cff6', abaNormal: '#511576', abaAtiva: '#380d60', fundoPrincipal: '#87a2da', btnVisualizar: '#591884', btnBaixar: '#93e450', fundoCaixa: '#ede9fe', fundoSubCaixa: '#e8dafd', textoAba: '#a0f658', textoAbaNormal: 'rgba(160,246,88,0.6)', textoBtnVis: '#a0f658', borderBtnVis: '#a0f658', textoBtnBaixar: '#591884', borderBtnBaixar: '#591884', bordaGeral: '#cdc7f3', logo: logoRoxo, textoSubCaixa: '#000000' },
  '#db2777': { cabecalho: '#ffffff', abaNormal: '#db2777', abaAtiva: '#be185d', fundoPrincipal: '#f4a6c8', btnVisualizar: '#db2777', btnBaixar: '#059669', fundoCaixa: '#fdf2f8', fundoSubCaixa: '#fce7f3', textoAba: '#ffffff', textoAbaNormal: 'rgba(255,255,255,0.7)', textoBtnVis: '#ffffff', borderBtnVis: 'transparent', textoBtnBaixar: '#ffffff', borderBtnBaixar: 'transparent', bordaGeral: '#db2777', logo: logoRosa, textoSubCaixa: '#1e293b' },
  '#dc2626': { cabecalho: '#ffffff', abaNormal: '#dc2626', abaAtiva: '#b91c1c', fundoPrincipal: '#f19e9e', btnVisualizar: '#dc2626', btnBaixar: '#059669', fundoCaixa: '#fef2f2', fundoSubCaixa: '#fee2e2', textoAba: '#ffffff', textoAbaNormal: 'rgba(255,255,255,0.7)', textoBtnVis: '#ffffff', borderBtnVis: 'transparent', textoBtnBaixar: '#ffffff', borderBtnBaixar: 'transparent', bordaGeral: '#dc2626', logo: logoVermelho, textoSubCaixa: '#1e293b' },
  '#ea580c': { cabecalho: '#ffffff', abaNormal: '#ea580c', abaAtiva: '#c2410c', fundoPrincipal: '#f8bd9d', btnVisualizar: '#ea580c', btnBaixar: '#059669', fundoCaixa: '#fff7ed', fundoSubCaixa: '#ffedd5', textoAba: '#ffffff', textoAbaNormal: 'rgba(255,255,255,0.7)', textoBtnVis: '#ffffff', borderBtnVis: 'transparent', textoBtnBaixar: '#ffffff', borderBtnBaixar: 'transparent', bordaGeral: '#ea580c', logo: logoLaranja, textoSubCaixa: '#1e293b' },
  '#ca8a04': { cabecalho: '#ffffff', abaNormal: '#ca8a04', abaAtiva: '#a16207', fundoPrincipal: '#f7dfa4', btnVisualizar: '#ca8a04', btnBaixar: '#059669', fundoCaixa: '#fefce8', fundoSubCaixa: '#fef9c3', textoAba: '#ffffff', textoAbaNormal: 'rgba(255,255,255,0.7)', textoBtnVis: '#ffffff', borderBtnVis: 'transparent', textoBtnBaixar: '#ffffff', borderBtnBaixar: 'transparent', bordaGeral: '#ca8a04', logo: logoAmarelo, textoSubCaixa: '#1e293b' }
};

/**
 * Retorna o objeto de tema (cores derivadas) para uma cor principal.
 * Se a cor for uma das predefinidas, usa a paleta cuidadosamente ajustada.
 * Caso contrário (cor livre via input RGB), gera um tema genérico.
 */
export const getTheme = (idOrHex) => {
  if (TEMAS_PREDEFINIDOS[idOrHex]) return { corPrincipal: idOrHex, ...TEMAS_PREDEFINIDOS[idOrHex] };
  return {
    corPrincipal: idOrHex, cabecalho: '#ffffff', abaNormal: idOrHex, abaAtiva: 'rgba(0,0,0,0.25)',
    fundoPrincipal: `${idOrHex}20`, btnVisualizar: idOrHex, btnBaixar: '#059669', fundoCaixa: '#ffffff',
    fundoSubCaixa: '#f8fafc', textoAba: '#ffffff', textoAbaNormal: 'rgba(255,255,255,0.7)', textoBtnVis: '#ffffff',
    borderBtnVis: 'transparent', textoBtnBaixar: '#ffffff', borderBtnBaixar: 'transparent', bordaGeral: idOrHex,
    logo: logoPrincipal, textoSubCaixa: '#1e293b'
  };
};

// Mapeamento de cor do tema principal -> cor sugerida para cátions/ânions (aba Blocos Iônicos)
const MAPA_COR_ION = {
  '#0e52c2': { cation: '#0e52c2', anion: '#dc2626' },
  '#511576': { cation: '#1a8441', anion: '#511576' },
  '#1a8441': { cation: '#1a8441', anion: '#ea580c' },
  '#dc2626': { cation: '#0e52c2', anion: '#dc2626' },
  '#ea580c': { cation: '#1a8441', anion: '#ea580c' },
  '#ca8a04': { cation: '#ca8a04', anion: '#ff4500' },
  '#db2777': { cation: '#db2777', anion: '#a855f7' }
};

export const getIonColorBasedOnTheme = (themeHex, ionType) => {
  if (MAPA_COR_ION[themeHex]) return MAPA_COR_ION[themeHex][ionType];
  return ionType === 'cation' ? '#0e52c2' : '#dc2626';
};
