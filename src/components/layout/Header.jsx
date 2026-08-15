import { logoPrincipal } from '../../data/assets';

const Header = ({ theme }) => (
  <header className="pt-6 pb-6 sm:pt-10 sm:pb-8 px-4 sm:px-6 z-10 relative transition-colors duration-500 shadow-sm" style={{ backgroundColor: theme.cabecalho }}>
    <div className="max-w-5xl mx-auto flex flex-row items-center justify-start gap-3 sm:gap-6">
      <img src={theme.logo || logoPrincipal} alt="Logo" className="w-16 h-16 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain drop-shadow-sm flex-shrink-0 transition-all duration-300" />
      <div className="text-left flex flex-col justify-center">
        <h1 className="text-lg sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">Química ao Alcance das Mãos:</h1>
        <h2 className="text-[13px] sm:text-xl md:text-2xl font-medium text-slate-600 mt-0.5 sm:mt-2">Gerador 3D de Química para Braille</h2>
      </div>
    </div>
  </header>
);

export default Header;
