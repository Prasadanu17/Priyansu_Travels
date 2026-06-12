import { Plane, MapPin, Briefcase, Compass } from 'lucide-react';

export default function ThreeDAnimation({ className = '' }) {
  return (
    <div className={`three-d-scene ${className}`}>
      <div className="three-d-glow" />
      <div className="three-d-cube">
        <div className="three-d-face front">
          <Plane size={42} className="text-white/90" />
        </div>
        <div className="three-d-face back">
          <MapPin size={42} className="text-white/90" />
        </div>
        <div className="three-d-face right">
          <Briefcase size={42} className="text-white/90" />
        </div>
        <div className="three-d-face left">
          <Compass size={42} className="text-white/90" />
        </div>
        <div className="three-d-face top">
          <div className="three-d-badge">Travel</div>
        </div>
        <div className="three-d-face bottom" />
      </div>
    </div>
  );
}
