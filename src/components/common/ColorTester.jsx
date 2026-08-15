import { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';
import { CORES_PREDEFINIDAS } from '../../data/theme';

const ColorTester = ({ corPrincipal, setCorPrincipal }) => {
  const [menuAberto, setMenuAberto] = useState(false);
  const isRoxo = corPrincipal === '#511576';

  useEffect(() => {
    const handleScroll = () => { if (menuAberto) setMenuAberto(false); };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuAberto]);

  return (
    <div className="relative flex items-center space-x-2 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full border shadow-sm flex-shrink-0 z-10 transition-colors duration-500" style={{ borderColor: `${corPrincipal}40` }}>
      <button type="button" onClick={() => { setCorPrincipal(isRoxo ? '#0e52c2' : '#511576'); setMenuAberto(false); }} className="w-11 h-6 rounded-full p-0.5 transition-colors duration-300 relative focus:outline-none cursor-pointer flex-shrink-0" style={{ backgroundColor: isRoxo ? '#511576' : '#0e52c2' }}>
        <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isRoxo ? 'translate-x-5' : 'translate-x-0'}`} />
      </button>
      <div className="relative">
        <button onClick={() => setMenuAberto(!menuAberto)} className="cursor-pointer text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center p-1">
          <Palette className="w-5 h-5 transition-colors" style={{ color: (!isRoxo && corPrincipal !== '#0e52c2') ? corPrincipal : undefined }} />
        </button>
        {menuAberto && (
          <div className="absolute top-full right-0 mt-2 p-3 bg-white rounded-xl shadow-xl border-2 flex flex-col gap-3 w-max z-50 animate-fadeIn transition-colors duration-500" style={{ borderColor: corPrincipal }}>
            <span className="text-[11px] font-bold text-slate-500 uppercase px-1">Cores Predefinidas</span>
            <div className="flex flex-nowrap items-center gap-2 px-1">
              {CORES_PREDEFINIDAS.map(c => (
                <button key={c.nome} type="button" onClick={() => { setCorPrincipal(c.hex); setMenuAberto(false); }} className={`w-7 h-7 rounded-full shadow-sm hover:scale-110 transition-transform flex-shrink-0 ${corPrincipal === c.hex ? 'ring-2 ring-offset-2 ring-slate-400' : ''}`} style={{ backgroundColor: c.hex }} title={c.nome} />
              ))}
            </div>
            <div className="border-t border-slate-100 my-1"></div>
            <label className="flex items-center justify-between px-1 cursor-pointer hover:bg-slate-50 rounded p-1.5 transition-colors">
              <span className="text-xs font-semibold text-slate-600">Cor Livre (RGB)</span>
              <input type="color" value={corPrincipal} onChange={(e) => setCorPrincipal(e.target.value)} className="w-7 h-7 rounded cursor-pointer border-0 p-0 shadow-sm" />
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorTester;
