export default function Stats() {
  return (
    <section className="px-[var(--px)] py-[100px] bg-[var(--bg)]">
      <div className="grid grid-cols-4 gap-[18px] mb-[50px] max-lg:grid-cols-1 max-lg:gap-5">
        <div className="text-[11.5px] tracking-[0.02em] text-[var(--muted)] m-0 pt-2.5">● about us</div>
        <div className="col-start-2 col-end-5 max-lg:col-start-1 max-lg:col-end-auto">
          <h2 className="font-light text-[clamp(28px,3.5vw,52px)] leading-[1.05] -tracking-[0.02em] max-w-[900px] m-0 mb-7 uppercase text-[var(--ink)]">INTERIOR DESIGN THAT PERFECTLY REFLECTS YOUR UNIQUE PERSONALITY AND VISION</h2>
          <p className="max-w-[460px] text-[13px] text-[var(--ink-2)] leading-[1.6] m-0">We believe your space should be as unique as you are. Our team combines creativity, functionality, and attention to detail to craft interiors that align with your personality and vision.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1">
        <div className="bg-[#EAE3D7] rounded-[4px] p-6 aspect-square flex flex-col justify-between relative lg:col-start-1 lg:row-start-1 max-md:aspect-square max-md:min-h-auto">
          <span className="font-light text-[clamp(50px,6vw,92px)] leading-none -tracking-[0.02em] text-[var(--ink)]">5+</span>
          <span className="text-[9px] tracking-[0.15em] uppercase text-[var(--ink-2)] self-end text-right max-w-[100px]">Years of experience</span>
        </div>
        <div className="aspect-square overflow-hidden rounded-[4px] lg:col-start-2 lg:row-start-2 max-md:aspect-square max-md:min-h-auto">
          <img src="/assets/hero-small/SiTaQB7mt_qvxJX02iNtgEaHQrrbea8kOgT9rToE_a0.jpg" className="w-full h-full object-cover" alt="Stats Image 1" />
        </div>
        <div className="bg-[#EAE3D7] rounded-[4px] p-6 aspect-square flex flex-col justify-between relative lg:col-start-3 lg:row-start-1 max-md:aspect-square max-md:min-h-auto">
          <span className="font-light text-[clamp(50px,6vw,92px)] leading-none -tracking-[0.02em] text-[var(--ink)]">100+</span>
          <span className="text-[9px] tracking-[0.15em] uppercase text-[var(--ink-2)] self-end text-right max-w-[100px]">Completed projects</span>
        </div>
        <div className="aspect-square overflow-hidden rounded-[4px] lg:col-start-4 lg:row-start-1 max-md:aspect-square max-md:min-h-auto">
          <img src="/assets/hero-small/12.jpeg" className="w-full h-full object-cover" alt="Stats Image 2" />
        </div>
        <div className="bg-[#EAE3D7] rounded-[4px] p-6 aspect-square flex flex-col justify-between relative lg:col-start-4 lg:row-start-2 max-md:aspect-square max-md:min-h-auto">
          <span className="font-light text-[clamp(50px,6vw,92px)] leading-none -tracking-[0.02em] text-[var(--ink)]">98%</span>
          <span className="text-[9px] tracking-[0.15em] uppercase text-[var(--ink-2)] self-end text-right max-w-[100px]">Satisfied clients</span>
        </div>
      </div>
    </section>
  );
}
