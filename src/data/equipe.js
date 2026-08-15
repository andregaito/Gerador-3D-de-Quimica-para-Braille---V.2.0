import {
  fotoAndreGaito,
  fotoRicardoMichel,
  fotoFernandaNeves,
  fotoHugoReis,
  fotoRaissaEcard,
  fotoPedroXavier
} from './assets';

// Para editar a equipe do projeto (aba "Equipe"), basta alterar este array.
export const EQUIPE = [
  { nome: "André Vinnicios S. Gaito", titulo: "Graduando em Licenciatura em Química", descricao: "Criador do Projeto Química ao Alcance das Mãos, responsável pela idealização, programação, modelagem, impressão 3D e aplicação/validação dos materiais didáticos produzidos.", email: "andre.gaito@gradu.iq.ufrj.br", lattes: "http://lattes.cnpq.br/9008126975057063", foto: fotoAndreGaito },
  { nome: "Ricardo Cunha Michel", titulo: "Professor Doutor em Química", descricao: "Apoio à concepção dos materiais, orientação quanto à correção dos conceitos químicos e normas Braille, produção de recursos e estratégias de aplicação e coleta de dados.", email: "michel@iq.ufrj.br", lattes: "http://lattes.cnpq.br/7631294110820860", foto: fotoRicardoMichel },
  { nome: "Fernanda Das Neves Costa", titulo: "Professora Doutora em Química", descricao: "Coordenação geral, tramitação institucional e ética, supervisão metodológica, articulação com o Instituto Benjamin Costant (IBC) e validação educacional dos instrumentos.", email: "FNCosta@IPPN.UFRJ.br", lattes: "http://lattes.cnpq.br/4349970710727785", foto: fotoFernandaNeves },
  { nome: "Raíssa Ecard da Costa Cruz", titulo: "Doutoranda em Química", descricao: "Validação técnica e conceitual dos kits pedagógicos, planejamento das atividades de campo, co-mediação nas intervenções educacionais e suporte metodológico.", email: "raissaecard@pos.iq.ufrj.br", lattes: "http://lattes.cnpq.br/5822903514342446", foto: fotoRaissaEcard },
  { nome: "Hugo Costa Reis", titulo: "Doutorando em Química", descricao: "Avaliação de usabilidade e ergonomia dos protótipos em impressão 3D, estruturação logística para a execução das dinâmicas, co-moderação na aplicação dos materiais.", email: "hugo.reis@eq.frj.br", lattes: "http://lattes.cnpq.br/3500602218294576", foto: fotoHugoReis },
  { nome: "Pedro Xavier", titulo: "Mestrando em Química", descricao: "Assistência técnica e pedagógica para implementação da tecnologia assistiva, impressão 3D e Modelagem dos materiais.", email: "pedrofariax@ima.ufrj.br", lattes: "http://lattes.cnpq.br/3367215215251168", foto: fotoPedroXavier }
];

// Emails usados nos links "mailto:" (Parcerias, Bug, Rodapé...)
export const CONTATOS_EMAILS = "andrevinniciosgaito@gmail.com,quimicaaoalcancedasmaos@gmail.com,FNCosta@IPPN.UFRJ.br";

// Chave PIX usada no botão de doação da aba "Parcerias"
export const CHAVE_PIX = "andrevinniciosgaito@gmail.com";
