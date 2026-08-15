import { TABS } from '../../data/tabs';

const Navigation = ({ activeTab, setActiveTab, theme }) => (
  <nav aria-label="Navegação Principal do Projeto" className="shadow-md sticky top-0 z-30 transition-colors duration-500" style={{ backgroundColor: theme.abaNormal }}>
    <div role="tablist" className="max-w-5xl mx-auto flex flex-nowrap overflow-x-auto justify-start sm:justify-start w-full px-2 sm:px-0 scrollbar-hide">
      {TABS.map((tab) => (
        <button
          key={tab.id} role="tab" aria-selected={activeTab === tab.id} aria-controls={`painel-${tab.id}`}
          onClick={() => setActiveTab(tab.id)}
          className="whitespace-nowrap flex-1 sm:flex-none px-3 sm:px-5 py-3 sm:py-4 text-[12px] sm:text-[14px] font-semibold transition-all duration-300 border-b-4"
          style={{ backgroundColor: activeTab === tab.id ? theme.abaAtiva : 'transparent', color: activeTab === tab.id ? theme.textoAba : theme.textoAbaNormal, borderColor: activeTab === tab.id ? theme.textoAba : 'transparent' }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  </nav>
);

export default Navigation;
