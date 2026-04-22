export default function Footer() {
  return (
    <footer className="bg-[var(--dark-2)] text-[#D5CBBC] px-[var(--px)] pt-[64px] pb-[32px] overflow-hidden">
      <div className="grid grid-cols-[1fr_1fr_1fr] gap-[40px] pb-[48px] border-b border-white/5 max-lg:grid-cols-[1fr_1fr] max-md:grid-cols-1">
        <div className="flex flex-col">
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8A7E6E] mb-4">Social</div>
          <a className="block text-[12.5px] mb-2 text-[#D5CBBC] w-fit hover:text-white cursor-pointer hover-line">Facebook</a>
          <a className="block text-[12.5px] mb-2 text-[#D5CBBC] w-fit hover:text-white cursor-pointer hover-line">Instagram</a>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          <div className="aspect-square overflow-hidden rounded-[4px]"><img src="/assets/hero-small/6.jpeg" className="w-full h-full object-cover" alt="Footer 1" /></div>
          <div className="aspect-square overflow-hidden rounded-[4px]"><img src="/assets/hero-small/12.jpeg" className="w-full h-full object-cover" alt="Footer 2" /></div>
          <div className="aspect-square overflow-hidden rounded-[4px]"><img src="/assets/hero-small/1679401452959.jpg" className="w-full h-full object-cover" alt="Footer 3" /></div>
        </div>
        <div className="text-right flex flex-col items-end max-md:text-left max-md:items-start">
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8A7E6E] mb-4">Contacts</div>
          <span className="block text-[12.5px] mb-2 text-[#D5CBBC]">台中市西屯區台灣大道三段266號</span>
          <span className="block text-[12.5px] mb-2 text-[#D5CBBC]">預約制聯絡⼈：Yuzu</span>
          <span className="block text-[12.5px] mb-2 text-[#D5CBBC]">電話 / Line：0988795925</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-y-5 gap-x-10 py-[28px] pb-3 text-[11px] tracking-[0.12em] uppercase">
        <span className="text-[#8A7E6E] cursor-pointer hover:text-[#D5CBBC] hover-line mt-[-2px]">About</span>
        <span className="text-[#8A7E6E] cursor-pointer hover:text-[#D5CBBC] hover-line mt-[-2px]">Furniture</span>
        <span className="text-[#8A7E6E] cursor-pointer hover:text-[#D5CBBC] hover-line mt-[-2px]">Space</span>
        <span className="text-[#8A7E6E] cursor-pointer hover:text-[#D5CBBC] hover-line mt-[-2px]">Blog</span>
        <span className="text-[#8A7E6E] cursor-pointer hover:text-[#D5CBBC] hover-line mt-[-2px]">Contact</span>
        <span className="text-[#8A7E6E] cursor-pointer hover:text-[#D5CBBC] hover-line mt-[-2px]">Booking</span>
      </div>
      <h1 className="font-bold text-[clamp(50px,12vw,180px)] -tracking-[0.01em] leading-[0.92] text-[#F5EBDC]/10 pt-2.5 m-0 whitespace-nowrap">MJ CASA</h1>
      <div className="flex flex-wrap justify-between gap-2.5 text-[10px] text-[#6D6253] tracking-[0.06em] pt-3">
        <span>© 2026 MJ CASA</span>
        <span>Design &amp; code by Studio/Field</span>
        <span className="text-right max-md:text-left">hello@mjcasa.com</span>
      </div>
    </footer>
  );
}
