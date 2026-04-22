export default function Nav({ onOpenLogin }: { onOpenLogin: () => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[var(--px)] py-5 text-white bg-black/10 backdrop-blur-lg border-b border-white/[0.05] flex-wrap gap-[15px] transition-all duration-300 max-md:relative max-md:bg-[var(--dark-2)] max-md:backdrop-blur-none max-md:border-none max-md:flex-col max-md:justify-center max-md:py-7">
      <div className="text-[20px] tracking-[0.01em] font-medium text-left max-md:ml-0 max-md:text-center">MJ&nbsp;CASA</div>
      <div className="flex items-center gap-10 flex-wrap ml-auto max-md:ml-0 max-md:flex-col max-md:gap-4 max-md:items-center">
        <div className="flex gap-8 text-[13px] tracking-[0.02em] max-md:gap-5 max-[480px]:gap-3 max-[480px]:flex-wrap max-[480px]:justify-center">
          <a className="hover-line">About</a>
          <a className="hover-line">Furniture</a>
          <a className="hover-line">Space</a>
          <a className="hover-line">Blog</a>
        </div>
        <div className="flex gap-5 text-[11px] items-center border-l border-white/30 pl-8 max-md:border-l-0 max-md:pl-0">
          
          <div className="lang-wrapper">
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-current fill-none stroke-[1.5] cursor-pointer transition-opacity duration-200 hover:opacity-70"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            <div className="lang-dropdown">
              <a className="hover-line">繁體中文 (CH)</a>
              <a className="hover-line">English (ENG)</a>
            </div>
          </div>

          <div onClick={onOpenLogin} className="cursor-pointer">
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-current fill-none stroke-[1.5] cursor-pointer transition-opacity duration-200 hover:opacity-70"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>

        </div>
        <a className="nav-booking">Booking</a>
      </div>
    </nav>
  );
}
