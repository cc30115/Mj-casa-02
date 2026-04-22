export default function Vision() {
  return (
    <section className="relative min-h-[800px] flex items-center px-[var(--px)] overflow-hidden bg-[#2A2A2A] max-md:min-h-[600px] max-md:items-end max-md:p-10 max-md:px-5">
      <div className="absolute inset-0 z-0">
        <img src="/assets/hero-slide/IMG_7066.JPG" alt="Vision Setup" className="w-full h-full object-cover brightness-[0.4]" />
      </div>
      <div className="relative z-10 bg-white py-[60px] px-[50px] max-w-[480px] w-full shadow-[0_20px_40px_rgba(0,0,0,0.15)] ml-[10%] rounded-[4px] max-lg:ml-0 max-lg:p-10 max-lg:px-[30px] max-md:max-w-full max-md:mb-5">
        <h2 className="font-normal text-[clamp(36px,4vw,46px)] leading-[1.1] m-0 mb-5 text-[var(--ink)]">INITIATE YOUR<br/><span className="text-[#B3926F]">VISION</span></h2>
        <span className="text-[11px] tracking-[0.15em] text-[#B3926F] uppercase font-semibold mb-6 block">APPOINTMENT ONLY 預約制</span>
        <p className="text-[13px] text-[var(--ink-2)] leading-[1.7] mb-10">為確保最高品質的空間設計與客製體驗，我們採取嚴格預約制，專注於每一組貴賓的深度對話。啟程您的專屬空間，請與我們聯繫。</p>
        <div className="flex flex-col gap-3">
          <a className="block text-center p-[18px] text-[12px] font-medium tracking-[0.15em] cursor-pointer transition-all duration-300 border border-[#B3926F] rounded-[4px] no-underline bg-[#B3926F] text-white hover:bg-[#9A7B5B] hover:border-[#9A7B5B]">聯絡專員 - Contact Us</a>
          <a className="block text-center p-[18px] text-[12px] font-medium tracking-[0.15em] cursor-pointer transition-all duration-300 border border-[#B3926F] rounded-[4px] no-underline bg-transparent text-[#B3926F] hover:bg-[#FAF7F2]">客製家具 - Product Category</a>
          <a className="block text-center p-[18px] text-[12px] font-medium tracking-[0.15em] cursor-pointer transition-all duration-300 border border-[#B3926F] rounded-[4px] no-underline bg-transparent text-[#B3926F] hover:bg-[#FAF7F2]">空間作品 - Interior Design</a>
        </div>
      </div>
    </section>
  );
}
