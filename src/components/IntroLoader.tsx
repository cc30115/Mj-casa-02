import { useEffect, useState, useRef } from 'react';

interface IntroLoaderProps {
  onComplete: () => void;
}

const PREVIEW_IMAGES = [
  '/assets/hero-small/12.jpeg',
  '/assets/hero-small/19.jpeg',
];

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  // step 0 = loading bar filling
  // step 1 = cards + tagline appear
  // step 2 = brand text slides up from bottom
  // step 3 = exit (curtain lifts)
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const DURATION = 2000;

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
        // sequence of reveals
        setTimeout(() => setStep(1), 200);   // cards fade in
        setTimeout(() => setStep(2), 500);   // big brand text slides up
        setTimeout(() => setStep(3), 1400);  // exit
        setTimeout(onComplete, 2050);
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
        background: '#EDE8E1',          // warm off-white like reference
        overflow: 'hidden',
        pointerEvents: 'all',
        // curtain lifts up on exit
        transform: exiting ? 'translateY(-100%)' : 'translateY(0)',
        transition: exiting
          ? 'transform 0.65s cubic-bezier(0.76,0,0.24,1)'
          : 'none',
      }}
    >
      {/* ─── Top bar: progress ─── */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'rgba(0,0,0,0.08)',
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: '#1A1613',
          transition: 'width 0.08s linear',
        }} />
      </div>

      {/* ─── Logo top-left ─── */}
      <div style={{
        position: 'absolute',
        top: '32px',
        left: '48px',
        fontFamily: 'Cabinet Grotesk, system-ui, sans-serif',
        fontSize: '13px',
        letterSpacing: '0.06em',
        color: '#1A1613',
        fontWeight: 500,
        opacity: step >= 1 ? 1 : 0,
        transition: 'opacity 0.5s cubic-bezier(0.25,1,0.5,1)',
      }}>
        MJ CASA
      </div>

      {/* ─── Percentage top-right ─── */}
      <div style={{
        position: 'absolute',
        top: '32px',
        right: '48px',
        fontFamily: 'Cabinet Grotesk, system-ui, sans-serif',
        fontSize: '11px',
        letterSpacing: '0.1em',
        color: '#7A7066',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {String(progress).padStart(2, '0')}%
      </div>

      {/* ─── Floating left image card ─── */}
      <div style={{
        position: 'absolute',
        bottom: 'clamp(160px, 20vw, 220px)',
        left: 'clamp(24px, 5vw, 64px)',
        width: 'clamp(100px, 12vw, 160px)',
        opacity: step >= 1 ? 1 : 0,
        transform: step >= 1 ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s 0.1s cubic-bezier(0.25,1,0.5,1), transform 0.6s 0.1s cubic-bezier(0.25,1,0.5,1)',
      }}>
        <img
          src={PREVIEW_IMAGES[0]}
          alt="preview"
          style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: '4px' }}
        />
        <div style={{
          marginTop: '8px',
          fontFamily: 'Cabinet Grotesk, system-ui, sans-serif',
          fontSize: '9px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#7A7066',
        }}>
          Interior · 台中
        </div>
      </div>

      {/* ─── Floating right image card ─── */}
      <div style={{
        position: 'absolute',
        top: 'clamp(80px, 12vw, 120px)',
        right: 'clamp(24px, 5vw, 64px)',
        width: 'clamp(80px, 10vw, 130px)',
        opacity: step >= 1 ? 1 : 0,
        transform: step >= 1 ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'opacity 0.6s 0.22s cubic-bezier(0.25,1,0.5,1), transform 0.6s 0.22s cubic-bezier(0.25,1,0.5,1)',
      }}>
        <img
          src={PREVIEW_IMAGES[1]}
          alt="preview"
          style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: '4px' }}
        />
        <div style={{
          marginTop: '8px',
          fontFamily: 'Cabinet Grotesk, system-ui, sans-serif',
          fontSize: '9px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#7A7066',
          textAlign: 'right',
        }}>
          Space →
        </div>
      </div>

      {/* ─── Center tagline ─── */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        opacity: step >= 1 ? 1 : 0,
        transition: 'opacity 0.6s 0.15s cubic-bezier(0.25,1,0.5,1)',
        zIndex: 2,
      }}>
        <div style={{
          fontFamily: 'Cabinet Grotesk, system-ui, sans-serif',
          fontSize: 'clamp(14px, 1.8vw, 22px)',
          letterSpacing: '0.05em',
          color: '#1A1613',
          fontWeight: 400,
        }}>
          Natural. Refined. Yours.
        </div>
        <div style={{
          marginTop: '10px',
          height: '1px',
          width: '40px',
          background: '#C9A97A',
          margin: '10px auto 0',
        }} />
      </div>

      {/* ─── Big brand wordmark — slides up from bottom ─── */}
      <div style={{
        position: 'absolute',
        bottom: '-0.12em',      // slightly crop the bottom like reference
        left: 0,
        right: 0,
        paddingLeft: 'clamp(16px, 3vw, 48px)',
        paddingRight: 'clamp(16px, 3vw, 48px)',
        lineHeight: 0.85,
        overflow: 'hidden',
        zIndex: 1,
      }}>
        <div
          style={{
            fontFamily: 'Cabinet Grotesk, system-ui, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(72px, 14vw, 220px)',
            letterSpacing: '-0.02em',
            color: '#1A1613',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.05em',
            transform: step >= 2 ? 'translateY(0)' : 'translateY(110%)',
            opacity: step >= 2 ? 1 : 0,
            transition: step >= 2
              ? 'transform 0.75s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease-out'
              : 'none',
          }}
        >
          <span>MJ</span>
          <span style={{ color: '#C9A97A', letterSpacing: '0' }}>&nbsp;</span>
          <span>CASA</span>
        </div>
      </div>
    </div>
  );
}
