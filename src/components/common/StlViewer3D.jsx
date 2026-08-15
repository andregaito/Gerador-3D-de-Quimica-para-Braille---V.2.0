import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Bounds, Environment } from '@react-three/drei';
import StlModel from './StlModel';
import DimensionsOverlay from './DimensionsOverlay';
import { iconeRotacao } from '../../data/assets';

/**
 * Visualizador 3D interativo compartilhado pelas abas "Gerador Braille" e
 * "Blocos Iônicos": renderiza o STL, o overlay de dimensões e o botão de
 * auto-rotação, com câmera/altura configuráveis por peça.
 */
const StlViewer3D = ({
  url, cor, dimensions, onDimensionsParsed, mostrarDimensoes, onToggleDimensoes,
  autoRotate, onToggleAutoRotate, height = 350, cameraPosition = [0, 50, 100],
  helpText = 'Arraste para girar • Role para aproximar • 2 cliques para ocultar dimensões'
}) => {
  return (
    <div
      aria-hidden="true"
      className="w-full bg-slate-900 rounded-lg overflow-hidden relative cursor-move"
      style={{ height }}
      onDoubleClick={onToggleDimensoes}
    >
      <DimensionsOverlay dimensions={dimensions} isVisible={mostrarDimensoes} />

      <button onClick={onToggleAutoRotate} className="absolute top-4 right-4 z-10 p-1 rounded-full shadow-lg transition-all" style={autoRotate ? { backgroundColor: cor, border: `2px solid ${cor}` } : { backgroundColor: 'rgba(51, 65, 85, 0.8)' }}>
        <img src={iconeRotacao} alt="" className="w-12 h-12 rounded-full object-cover" />
      </button>

      <Canvas shadows camera={{ position: cameraPosition, fov: 45 }}>
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 20, 10]} intensity={1.5} castShadow />
          <Bounds fit clip observe margin={1.2}>
            <StlModel url={url} cor={cor} onDimensionsParsed={onDimensionsParsed} />
          </Bounds>
        </Suspense>
        <axesHelper args={[30]} />
        <gridHelper args={[200, 20, '#94a3b8', '#475569']} position={[0, 0, 0]} />
        <OrbitControls autoRotate={autoRotate} autoRotateSpeed={2.0} makeDefault enablePan={true} enableZoom={true} />
      </Canvas>

      <p className="absolute bottom-3 left-0 w-full text-center text-xs text-slate-300 font-medium pointer-events-none drop-shadow-md">{helpText}</p>
    </div>
  );
};

export default StlViewer3D;
