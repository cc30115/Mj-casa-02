export default function Blog() {
  return (
    <section className="px-[var(--px)] pt-[120px] pb-10 bg-[var(--bg)]">
      <div className="flex justify-between text-[10px] tracking-[0.12em] uppercase text-[var(--ink)] mb-10 max-md:flex-col max-md:gap-6">
        <div className="flex flex-col gap-2.5">
          <span className="text-[var(--muted)] mb-1 block font-semibold">Filter +</span>
          <div><a className="active underline underline-offset-4 cursor-pointer hover:text-[var(--muted)]">Show All</a> / <a className="cursor-pointer hover:text-[var(--muted)] hover-line">Creative</a></div>
        </div>
        <div className="flex flex-col gap-2.5 text-right max-md:text-left">
          <span className="text-[var(--muted)] mb-1 block font-semibold">Sort By +</span>
          <div><a className="active underline underline-offset-4 cursor-pointer hover:text-[var(--muted)]">Latest Added</a> / <a className="cursor-pointer hover:text-[var(--muted)] hover-line">Popularity</a> / <a className="cursor-pointer hover:text-[var(--muted)] hover-line">Most Comments</a></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[1px] bg-[var(--rule)] border border-[var(--rule)] rounded-[4px] overflow-hidden max-lg:grid-cols-2 max-md:grid-cols-1">
        <div className="bg-[var(--bg)] p-6 flex flex-col col-span-2 row-span-2 max-lg:col-span-2 max-lg:row-auto max-md:col-start-1">
          <div className="w-full mb-6 overflow-hidden rounded-[4px] aspect-auto flex-1 min-h-[400px] max-lg:aspect-[16/9] max-lg:min-h-[300px]"><img src="/assets/hero-slide/39.jpeg" className="w-full h-full object-cover" alt="Blog 1" /></div>
          <div className="text-[10px] text-[var(--muted)] mb-3.5 flex items-center gap-1.5 tracking-[0.05em]"><svg viewBox="0 0 24 24" className="w-3 h-3 stroke-current fill-none stroke-[1.5]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>2026年6月16日</div>
          <h4 className="font-medium text-[clamp(28px,3.5vw,44px)] leading-[1.25] m-0 mb-8 text-[var(--ink)] -tracking-[0.01em]">第一屆設計節精選</h4>
          <a className="text-[9px] uppercase tracking-[0.15em] text-[var(--ink)] mt-auto cursor-pointer w-fit self-start hover-line">建築 / 設計</a>
        </div>

        <div className="bg-[var(--bg)] p-6 flex flex-col">
          <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-[4px]"><img src="/assets/hero-small/12.jpeg" className="w-full h-full object-cover" alt="Blog 2" /></div>
          <div className="text-[10px] text-[var(--muted)] mb-3.5 flex items-center gap-1.5 tracking-[0.05em]"><svg viewBox="0 0 24 24" className="w-3 h-3 stroke-current fill-none stroke-[1.5]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>2026年6月16日</div>
          <h4 className="font-medium text-[clamp(18px,2vw,24px)] leading-[1.25] m-0 mb-5 text-[var(--ink)] -tracking-[0.01em]">探索不同風格的領域</h4>
          <a className="text-[9px] uppercase tracking-[0.15em] text-[var(--ink)] mt-auto cursor-pointer w-fit self-start hover-line">建築 / 設計</a>
        </div>

        <div className="bg-[var(--bg)] p-6 flex flex-col">
          <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-[4px]"><img src="/assets/hero-small/6.jpeg" className="w-full h-full object-cover" alt="Blog 3" /></div>
          <div className="text-[10px] text-[var(--muted)] mb-3.5 flex items-center gap-1.5 tracking-[0.05em]"><svg viewBox="0 0 24 24" className="w-3 h-3 stroke-current fill-none stroke-[1.5]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>2026年6月16日</div>
          <h4 className="font-medium text-[clamp(18px,2vw,24px)] leading-[1.25] m-0 mb-5 text-[var(--ink)] -tracking-[0.01em]">為您量身打造的手工作品</h4>
          <a className="text-[9px] uppercase tracking-[0.15em] text-[var(--ink)] mt-auto cursor-pointer w-fit self-start hover-line">建築 / 設計</a>
        </div>

        <div className="bg-[var(--bg)] p-6 flex flex-col">
          <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-[4px]"><img src="/assets/hero-small/1679401452959.jpg" className="w-full h-full object-cover" alt="Blog 4" /></div>
          <div className="text-[10px] text-[var(--muted)] mb-3.5 flex items-center gap-1.5 tracking-[0.05em]"><svg viewBox="0 0 24 24" className="w-3 h-3 stroke-current fill-none stroke-[1.5]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>2026年6月21日</div>
          <h4 className="font-medium text-[clamp(18px,2vw,24px)] leading-[1.25] m-0 mb-5 text-[var(--ink)] -tracking-[0.01em]">回顧：相隔千里的距離</h4>
          <a className="text-[9px] uppercase tracking-[0.15em] text-[var(--ink)] mt-auto cursor-pointer w-fit self-start hover-line">建築 / 設計</a>
        </div>

        <div className="bg-[var(--bg)] p-6 flex flex-col">
          <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-[4px]"><img src="/assets/hero-small/19.jpeg" className="w-full h-full object-cover" alt="Blog 5" /></div>
          <div className="text-[10px] text-[var(--muted)] mb-3.5 flex items-center gap-1.5 tracking-[0.05em]"><svg viewBox="0 0 24 24" className="w-3 h-3 stroke-current fill-none stroke-[1.5]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>2026年6月21日</div>
          <h4 className="font-medium text-[clamp(18px,2vw,24px)] leading-[1.25] m-0 mb-5 text-[var(--ink)] -tracking-[0.01em]">尋找最佳的解決方案</h4>
          <a className="text-[9px] uppercase tracking-[0.15em] text-[var(--ink)] mt-auto cursor-pointer w-fit self-start hover-line">建築 / 設計</a>
        </div>

        <div className="bg-[var(--bg)] p-6 flex flex-col">
          <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-[4px]"><img src="/assets/hero-small/21.2.jpeg" className="w-full h-full object-cover" alt="Blog 6" /></div>
          <div className="text-[10px] text-[var(--muted)] mb-3.5 flex items-center gap-1.5 tracking-[0.05em]"><svg viewBox="0 0 24 24" className="w-3 h-3 stroke-current fill-none stroke-[1.5]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>2026年6月16日</div>
          <h4 className="font-medium text-[clamp(18px,2vw,24px)] leading-[1.25] m-0 mb-5 text-[var(--ink)] -tracking-[0.01em]">最佳設計專案大獎</h4>
          <a className="text-[9px] uppercase tracking-[0.15em] text-[var(--ink)] mt-auto cursor-pointer w-fit self-start hover-line">建築 / 設計</a>
        </div>
      </div>

      <div className="text-center pt-[100px] pb-10">
        <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--muted)] mb-4 block">+ Newsletter</span>
        <h3 className="font-medium text-[clamp(22px,3vw,28px)] m-0 mb-10 leading-[1.3] text-[var(--ink)] -tracking-[0.01em]">Be up to date with<br/>the newest articles</h3>
        <div className="flex max-w-[400px] mx-auto border-b border-[var(--ink)] pb-2.5">
          <input type="email" placeholder="Type your email..." className="flex-1 border-none bg-transparent outline-none text-[12px] font-[inherit] text-[var(--ink)] tracking-[0.05em] placeholder:text-[var(--muted)] placeholder:uppercase placeholder:tracking-[0.1em] placeholder:text-[10px]" />
          <button className="bg-transparent border-none text-[10px] font-semibold tracking-[0.2em] uppercase cursor-pointer pl-4 outline-none text-[var(--ink)] rounded-[4px]">Subscribe</button>
        </div>
      </div>
    </section>
  );
}
