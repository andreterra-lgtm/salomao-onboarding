import { useRef } from 'react';

export default function TiltCard({ children, className = '', style = {}, onClick }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = 'transform 0.1s ease';

    const shine = card.querySelector('.tilt-shine');
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08), transparent 60%)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    card.style.transition = 'transform 0.5s ease';
    const shine = card.querySelector('.tilt-shine');
    if (shine) shine.style.background = 'transparent';
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ ...style, transformStyle: 'preserve-3d', position: 'relative' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      <div className="tilt-shine" style={{
        position: 'absolute', inset: 0, borderRadius: 'inherit',
        pointerEvents: 'none', zIndex: 1, transition: 'background 0.1s ease'
      }} />
      {children}
    </div>
  );
}
