import { useRef } from 'react';

export default function Customise() {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return (
    <section className="px-[var(--px)] pt-[120px] pb-[80px] bg-[var(--bg)] border-t border-[var(--rule)] overflow-hidden">
      <div className="flex justify-between items-end mb-[60px] flex-wrap gap-[30px]">
        <div className="max-w-[600px]">
          <span className="block text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-6">● 3D Configuration</span>
          <h2 className="font-light text-[clamp(32px,4vw,48px)] leading-[1.05] -tracking-[0.02em] text-[var(--ink)] m-0 mb-5">訂製你的家具<br/>Customise your furniture</h2>
          <p className="text-[13.5px] text-[var(--ink-2)] leading-[1.6] m-0">探索我們的精選單品，並依照您的空間需求，為每一件家具客製專屬的色彩與面料。透過互動式 3D 檢視，您可以 360 度無死角體驗完美的材質細節。</p>
        </div>
        <div className="flex gap-3">
          <button className="w-11 h-11 rounded-full border border-[var(--rule)] bg-transparent text-[var(--ink)] grid place-items-center cursor-pointer transition-all duration-200 p-0 outline-none hover:bg-[#E8E1D4] hover:border-[var(--muted)]" onClick={handlePrev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <button className="w-11 h-11 rounded-full border border-[var(--rule)] bg-transparent text-[var(--ink)] grid place-items-center cursor-pointer transition-all duration-200 p-0 outline-none hover:bg-[#E8E1D4] hover:border-[var(--muted)]" onClick={handleNext} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
      
      <div ref={rowRef} className="flex gap-8 overflow-x-auto scroll-smooth pr-[var(--px)] pb-5 hide-scrollbar">
        <div className="flex-none basis-[calc(33.333%-24px)] min-w-[280px] flex flex-col group max-[1024px]:basis-[calc(45%-24px)] max-[768px]:basis-[calc(65%-24px)] max-[768px]:min-w-[260px] max-[480px]:basis-[calc(85%-24px)] max-[480px]:min-w-[240px]">
          <div className="aspect-square bg-[#ECE6DB] rounded-[4px] relative overflow-hidden grid place-items-center mb-3.5">
            <model-viewer src="https://modelviewer.dev/assets/ShopifyModels/Chair.glb" camera-controls auto-rotate shadow-intensity="1" disable-zoom className="w-full h-full bg-transparent transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"></model-viewer>
          </div>
          <div className="flex justify-between items-start text-[12px]">
            <div><span className="block text-[13px] tracking-[0.02em] mb-2">Modern Armchair</span><div className="inline-flex gap-1"><i className="w-2.5 h-2.5 rounded-full bg-[#3C342E] border border-black/10"></i><i className="w-2.5 h-2.5 rounded-full bg-[#C9B89A] border border-black/10"></i></div></div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--ink)] cursor-pointer hover-line"><b>Customize →</b></div>
          </div>
        </div>
        
        <div className="flex-none basis-[calc(33.333%-24px)] min-w-[280px] flex flex-col group max-[1024px]:basis-[calc(45%-24px)] max-[768px]:basis-[calc(65%-24px)] max-[768px]:min-w-[260px] max-[480px]:basis-[calc(85%-24px)] max-[480px]:min-w-[240px]">
          <div className="aspect-square bg-[#ECE6DB] rounded-[4px] relative overflow-hidden grid place-items-center mb-3.5">
            <model-viewer src="https://modelviewer.dev/assets/ShopifyModels/Mixer.glb" camera-controls auto-rotate shadow-intensity="1" disable-zoom className="w-full h-full bg-transparent transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"></model-viewer>
          </div>
          <div className="flex justify-between items-start text-[12px]">
            <div><span className="block text-[13px] tracking-[0.02em] mb-2">Kitchen Mixer</span><div className="inline-flex gap-1"><i className="w-2.5 h-2.5 rounded-full bg-[#3C342E] border border-black/10"></i><i className="w-2.5 h-2.5 rounded-full bg-[#8A6A4A] border border-black/10"></i></div></div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--ink)] cursor-pointer hover-line"><b>Customize →</b></div>
          </div>
        </div>
        
        <div className="flex-none basis-[calc(33.333%-24px)] min-w-[280px] flex flex-col group max-[1024px]:basis-[calc(45%-24px)] max-[768px]:basis-[calc(65%-24px)] max-[768px]:min-w-[260px] max-[480px]:basis-[calc(85%-24px)] max-[480px]:min-w-[240px]">
          <div className="aspect-square bg-[#ECE6DB] rounded-[4px] relative overflow-hidden grid place-items-center mb-3.5">
            <model-viewer src="https://modelviewer.dev/assets/ShopifyModels/GeoPlanter.glb" camera-controls auto-rotate shadow-intensity="1" disable-zoom className="w-full h-full bg-transparent transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"></model-viewer>
          </div>
          <div className="flex justify-between items-start text-[12px]">
            <div><span className="block text-[13px] tracking-[0.02em] mb-2">Geo Ceramic Planter</span><div className="inline-flex gap-1"><i className="w-2.5 h-2.5 rounded-full bg-[#C9B89A] border border-black/10"></i><i className="w-2.5 h-2.5 rounded-full bg-[#8A6A4A] border border-black/10"></i></div></div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--ink)] cursor-pointer hover-line"><b>Customize →</b></div>
          </div>
        </div>
        
        <div className="flex-none basis-[calc(33.333%-24px)] min-w-[280px] flex flex-col group max-[1024px]:basis-[calc(45%-24px)] max-[768px]:basis-[calc(65%-24px)] max-[768px]:min-w-[260px] max-[480px]:basis-[calc(85%-24px)] max-[480px]:min-w-[240px]">
          <div className="aspect-square bg-[#ECE6DB] rounded-[4px] relative overflow-hidden grid place-items-center mb-3.5">
            <model-viewer src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb" camera-controls auto-rotate shadow-intensity="1" disable-zoom className="w-full h-full bg-transparent transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"></model-viewer>
          </div>
          <div className="flex justify-between items-start text-[12px]">
            <div><span className="block text-[13px] tracking-[0.02em] mb-2">Desk Robot</span><div className="inline-flex gap-1"><i className="w-2.5 h-2.5 rounded-full bg-[#3C342E] border border-black/10"></i><i className="w-2.5 h-2.5 rounded-full bg-[#C9B89A] border border-black/10"></i><i className="w-2.5 h-2.5 rounded-full bg-[#8A6A4A] border border-black/10"></i></div></div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--ink)] cursor-pointer hover-line"><b>Customize →</b></div>
          </div>
        </div>
      </div>
    </section>
  );
}
