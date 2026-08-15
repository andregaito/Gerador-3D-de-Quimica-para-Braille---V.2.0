import { Palette } from 'lucide-react';

const SaibaMaisTab = ({ theme, corPrincipal, setCorPrincipal }) => (
  <div id="painel-saiba-mais" role="tabpanel" aria-label="Saiba Mais" className="p-12 rounded-xl shadow-sm transition-colors duration-500 text-center text-slate-500 fade-in" style={{ backgroundColor: theme.fundoCaixa, border: `2px solid ${theme.bordaGeral}` }}>
    <h2 className="text-2xl font-bold text-slate-700 mb-4">Saiba Mais</h2>
    <p className="text-justify mb-4">O projeto Química ao Alcance das Mãos é uma iniciativa em contínua expansão e aprimoramento científico. Atualmente, nosso foco está na criação e consolidação de redes de colaboração com instituições de referência no ensino e pesquisa, como: o Instituto Benjamin Constant (IBC), a UFRJ, o IFRJ e o Colégio Pedro II. Estamos preparando novos recursos, dinâmicas interativas e formações didáticas que serão disponibilizadas em breve aqui na plataforma. Para acompanhar em tempo real nossas próximas atualizações, aprovações, agendas de aplicação nas escolas e parcerias firmadas, siga nossos canais oficiais de comunicação no Instagram: @quimicaaoalcancedasmaos e @projetoatomizando</p>
    <p className="text-justify">É com grande satisfação que celebramos a estreita parceria com o Projeto Atomizando (@projetoatomizando), uma brilhante iniciativa de extensão e divulgação científica da Universidade Federal do Rio de Janeiro (UFRJ). O Atomizando se destaca por aproximar a química do dia a dia e das escolas através de dinâmicas lúdicas, metodologias ativas e experimentação, tornando a aprendizagem muito mais interativa e estimulante. Esta aliança estratégica representa uma verdadeira "força-tarefa" que soma conhecimentos teóricos, práticos e metodológicos para enriquecer e consolidar ambos os projetos. O traço de união dessa parceria é a Profa. Dra. Fernanda das Neves Costa (IPPN/UFRJ), coordenadora do Atomizando e peça fundamental na equipe do Química ao Alcance das Mãos. Sua liderança é indispensável na condução da articulação institucional do nosso projeto, especialmente nos trâmites acadêmicos e nas submissões ao Comitê de Ética em Pesquisa (CEP) em colaboração com o Instituto Benjamin Constant (IBC).</p>

    <div className="flex justify-center mt-6">
      <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full border border-slate-300">
        <Palette className="w-4 h-4 text-slate-600" />
        <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Personalizar Cores:</span>
        <input type="color" value={corPrincipal} onChange={(e) => setCorPrincipal(e.target.value)} className="w-6 h-6 rounded border-0 cursor-pointer p-0" title="Mudar paleta livremente" />
      </div>
    </div>
  </div>
);

export default SaibaMaisTab;
