export default function InSitu() {
  return (
    <section className="relative min-h-[620px] overflow-hidden flex items-end p-[var(--px)] max-[480px]:p-0">
      <div className="absolute inset-0 z-0"><img src="/assets/hero-slide/IMG_7064.JPG" alt="InSitu Background" className="w-full h-full object-cover" /></div>
      <span className="pin" style={{ top: '22%', left: '22%' }}><i></i> Lighting</span>
      <span className="pin" style={{ top: '18%', left: '38%' }}><i></i> Danish Cabinetmaker Sofa — Espresso</span>
      <span className="pin" style={{ top: '28%', left: '48%' }}><i></i> Vases &amp; Vessels</span>
      <span className="pin" style={{ top: '46%', left: '55%' }}><i></i> Dining Table</span>
      <span className="pin" style={{ top: '16%', left: '62%' }}><i></i> Alfred Hansen Chair — Floral</span>
      
      <div className="relative z-10 text-[#EADFCE] max-[480px]:absolute max-[480px]:bottom-5 max-[480px]:left-[var(--px)] max-[480px]:right-[var(--px)]">
        <h4 className="font-medium text-[clamp(26px,3vw,34px)] m-0 mb-1 -tracking-[0.005em]">Roweam In Situ</h4>
        <p className="text-[13px] leading-[1.3] m-0 mb-3 max-w-[420px] text-[#E0D4C1]">A curated collection of custom and vintage pieces, styled to shop.</p>
        <span className="text-[11px] tracking-[0.22em] uppercase pb-0.5 cursor-pointer hover-line">Shop in situ →</span>
      </div>
    </section>
  );
}
