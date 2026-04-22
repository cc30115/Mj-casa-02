import { useEffect, useState, useRef } from 'react';

interface IntroLoaderProps {
  onComplete: () => void;
}

const PREVIEW_IMAGES = [
  '/assets/hero-small/12.jpeg', // top right - 200%
  '/assets/hero-small/19.jpeg', // bottom left - 150%
  '/assets/hero-small/6.jpeg',  // center right huge - 300%
];

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  // step 0 = loading bar
  // step 1 = cards + tagline
  // step 2 = brand wordmark
  // step 3 = exit
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const DURATION = 4000;

  useEffect(() => {
    const animate = (now: number) => {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      const raw = Math.min(elapsed / DURATION, 1);
      const eased = Math.round(Math.pow(raw, 0.6) * 100);
      setProgress(eased);

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setProgress(100);
        setTimeout(() => setStep(1), 400);   // cards fade in
        setTimeout(() => setStep(2), 1000);  // big brand text
        setTimeout(() => setStep(3), 3000);  // exit (curtain lift)
        setTimeout(onComplete, 4200);        
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [onComplete]);

  const exiting = step === 3;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#EDE8E1',
        overflow: 'hidden',
        pointerEvents: 'all',
        transform: exiting ? 'translateY(-100%)' : 'translateY(0)',
        transition: exiting ? 'transform 1.2s cubic-bezier(0.76,0,0.24,1)' : 'none',
        fontFamily: "'Cabinet Grotesk', system-ui, sans-serif",
      }}
    >
      {/* ─── Top progress bar ─── */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'rgba(0,0,0,0.06)' }}>
        <div style={{ height: '100%', width: `${progress}%`, background: '#1A1613', transition: 'width 0.08s linear' }} />
      </div>

      {/* ─── Nav placeholders ─── */}
      <div style={{
        position: 'absolute', top: '32px', left: '48px', fontSize: '14px', 
        letterSpacing: '0.06em', color: '#1A1613', fontWeight: 600, opacity: step >= 1 ? 1 : 0, transition: 'opacity 0.5s'
      }}>
        MJ CASA
      </div>
      <div style={{
        position: 'absolute', top: '32px', right: '48px', fontSize: '13px', 
        letterSpacing: '0.1em', color: '#1A1613', fontWeight: 500, fontVariantNumeric: 'tabular-nums'
      }}>
        {String(progress).padStart(2, '0')}%
      </div>

      {/* ─── 1. Top Left: 150% Square ─── */}
      <div style={{
        position: 'absolute',
        top: '18%',
        left: '8%',
        width: 'clamp(120px, 15vw, 220px)', // 150% basis
        opacity: step >= 1 ? 1 : 0,
        transform: step >= 1 ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'opacity 0.8s 0.1s cubic-bezier(0.25,1,0.5,1), transform 0.8s 0.1s cubic-bezier(0.25,1,0.5,1)',
        zIndex: 2
      }}>
        <img src={PREVIEW_IMAGES[1]} alt="150%" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '2px' }} />
        <div style={{ marginTop: '10px', fontSize: '9px', letterSpacing: '0.1em', color: '#7A7066', fontWeight: 500 }}>
          01 / REFINE
        </div>
      </div>

      {/* ─── 2. Mid Left: 200% Portrait ─── */}
      <div style={{
        position: 'absolute',
        bottom: '32%',
        left: '15%',
        width: 'clamp(150px, 18vw, 280px)', // 200% basis
        opacity: step >= 1 ? 1 : 0,
        transform: step >= 1 ? 'translateX(0)' : 'translateX(-30px)',
        transition: 'opacity 0.8s 0.25s cubic-bezier(0.25,1,0.5,1), transform 0.8s 0.25s cubic-bezier(0.25,1,0.5,1)',
        zIndex: 2
      }}>
        <img src={PREVIEW_IMAGES[0]} alt="200%" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: '2px' }} />
        <div style={{ marginTop: '10px', fontSize: '10px', letterSpacing: '0.1em', color: '#7A7066', fontWeight: 500 }}>
          ESTABLISHED · 2024
        </div>
      </div>

      {/* ─── 3. Top Right: 300% Landscape ─── */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '8%',
        width: 'clamp(240px, 30vw, 450px)', // 300% basis
        opacity: step >= 1 ? 0.95 : 0,
        transform: step >= 1 ? 'scale(1) translateX(0)' : 'scale(1.05) translateX(20px)',
        transition: 'opacity 1s 0.4s cubic-bezier(0.25,1,0.5,1), transform 1.2s 0.4s cubic-bezier(0.25,1,0.5,1)',
        zIndex: 1
      }}>
        <img src={PREVIEW_IMAGES[2]} alt="300%" style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', borderRadius: '2px' }} />
        <div style={{ marginTop: '12px', fontSize: '11px', fontWeight: 600, color: '#1A1613', letterSpacing: '0.05em', textAlign: 'right' }}>
          CRAFTED BY NATURE
        </div>
      </div>

      {/* ─── Center tagline ─── */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        textAlign: 'center', opacity: step >= 1 ? 1 : 0, transition: 'opacity 0.8s 0.2s', zIndex: 10
      }}>
        <div style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', letterSpacing: '0.05em', color: '#1A1613', fontWeight: 500 }}>
          Living with Intent
        </div>
        <div style={{ marginTop: '12px', height: '1.5px', width: '48px', background: '#C9A97A', margin: '0 auto' }} />
      </div>

      {/* ─── Big brand wordmark ─── */}
      <div style={{
        position: 'absolute', bottom: '-0.12em', left: 0, right: 0, padding: '0 clamp(16px, 3vw, 48px)',
        lineHeight: 0.85, overflow: 'hidden', zIndex: 15, pointerEvents: 'none'
      }}>
        <div style={{
          fontWeight: 700, fontSize: 'clamp(72px, 14vw, 220px)',
          letterSpacing: '-0.02em', color: '#1A1613', whiteSpace: 'nowrap', display: 'flex', alignItems: 'baseline', gap: '0.05em',
          transform: step >= 2 ? 'translateY(0)' : 'translateY(110%)', opacity: step >= 2 ? 1 : 0,
          transition: step >= 2 ? 'transform 0.9s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease-out' : 'none',
        }}>
          <span>MJ</span>
          <span style={{ color: '#C9A97A', letterSpacing: '0' }}>&nbsp;</span>
          <span>CASA</span>
        </div>
      </div>
    </div>
  );
}
