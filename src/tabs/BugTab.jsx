import { Bug, Mail } from 'lucide-react';
import ColorTester from '../components/common/ColorTester';

// E-mails específicos para a equipe de suporte/desenvolvimento
const BUG_EMAILS = "andrevinniciosgaito@gmail.com,quimicaaoalcancedasmaos@gmail.com,davidfiocchi.automacao@gmail.com";
const BUG_EMAILS_DISPLAY = "andrevinniciosgaito@gmail.com; quimicaaoalcancedasmaos@gmail.com; davidfiocchi.automacao@gmail.com";

const BugTab = ({ theme, corPrincipal, setCorPrincipal }) => (
  <div id="painel-bug" role="tabpanel" aria-label="Reporte de Bug" className="relative p-8 sm:p-12 rounded-xl shadow-sm transition-colors duration-500 fade-in" style={{ backgroundColor: theme.fundoCaixa, border: `2px solid ${theme.bordaGeral}` }}>
    
    {/* Ícone com posicionamento absoluto no canto direito */}
    <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-10">
      <ColorTester corPrincipal={corPrincipal} setCorPrincipal={setCorPrincipal} />
    </div>

    {/* Contêiner alinhado à esquerda com a margem de segurança para o ícone */}
    <div className="pr-16 sm:pr-[260px] text-left">
      
      {/* Ícone do Bug agora alinhado à esquerda */}
      <div className="flex justify-start mb-6">
        <div className="p-4 bg-red-100 rounded-full text-red-600 inline-block" aria-hidden="true">
          <Bug className="w-12 h-12" />
        </div>
      </div>
      
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Achou um Bug ou Tem uma Sugestão?</h2>
      
      <p className="text-slate-600 leading-relaxed mb-8 text-justify">
        O "Gerador 3D de Química para Braille" é um projeto de código aberto em constante evolução. Caso você encontre algum erro na geração dos caracteres, formatações inconsistentes, problemas na malha 3D ou qualquer outra falha técnica, por favor, nos avise! Suas sugestões de melhorias também são sempre bem-vindas, e essenciais para continuarmos aprimorando as ferramentas e funcionalidades do site.
      </p>
      
      <div className="flex flex-col items-start">
        <a href={`mailto:${BUG_EMAILS}?subject=Reporte%20de%20Bug%20/%20Sugestão%20-%20Gerador%20Braille`} className="inline-flex items-center px-6 py-3 text-white font-bold rounded-lg shadow-sm transition-all hover:opacity-90" style={{ backgroundColor: theme.corPrincipal }}>
          <Mail className="w-5 h-5 mr-2" />Reportar para a Equipe
        </a>
        
        <p className="mt-4 text-sm text-slate-500 text-justify">
          Ou envie um e-mail para: <strong>{BUG_EMAILS_DISPLAY}</strong>
        </p>
      </div>
      
    </div>
  </div>
);

export default BugTab;
