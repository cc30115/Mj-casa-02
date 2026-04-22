export default function Projects() {
  return (
    <section className="px-[var(--px)] pt-[100px] pb-[60px] bg-[var(--bg)]">
      <div className="mb-[80px]">
        <h2 className="font-light text-[clamp(32px,4vw,48px)] leading-[1.05] -tracking-[0.02em] text-[var(--ink)] m-0">Explore our selection of<br/>completed architectural projects</h2>
      </div>
      
      <div className="border-t border-[var(--rule)]">
        <div className="grid grid-cols-[240px_1fr] py-[40px] border-b border-[var(--rule)] gap-[40px] max-[1024px]:grid-cols-[200px_1fr] max-[768px]:grid-cols-1 max-[768px]:gap-6 max-[768px]:py-8">
          <div className="text-[11px] text-[var(--ink)] flex items-start gap-2 tracking-[0.02em] pt-1.5">
            <span className="w-2.5 h-2.5 rounded-full border border-[var(--ink)] inline-block mt-0.5 bg-[var(--ink)]"></span> Open Plan Offices
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start gap-5">
              <a className="text-[clamp(20px,2.2vw,24px)] font-normal text-[var(--ink)] leading-[1.3] cursor-pointer hover:text-[var(--muted)]">Hotel Ponsonby:<br/>transforming a heritage building<br/>into a chic gastropub</a>
              <div className="flex gap-10 text-[11px] mt-1.5 max-[480px]:gap-5">
                <a className="text-[var(--ink)] cursor-pointer hover-line">View case</a>
                <span className="text-[#B3AAA0] cursor-pointer hover-line">Hide</span>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap mb-3">
              <span className="text-[10px] px-4 py-1.5 border border-[var(--rule)] rounded-[4px] text-[var(--ink)] bg-transparent">Cube™</span>
              <span className="text-[10px] px-4 py-1.5 border border-[var(--rule)] rounded-[4px] text-[var(--ink)] bg-transparent">Etch™</span>
              <span className="text-[10px] px-4 py-1.5 border border-[var(--rule)] rounded-[4px] text-[var(--ink)] bg-transparent">Frontier™</span>
              <span className="text-[10px] px-4 py-1.5 border border-[var(--rule)] rounded-[4px] text-[var(--ink)] bg-transparent">Symphony®</span>
            </div>
            <div className="grid grid-cols-[1.8fr_1fr] gap-5 max-[768px]:grid-cols-1">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-[4px] cursor-pointer group">
                <img src="/assets/hero-small/19.jpeg" className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" alt="Project 1" />
              </div>
              <div className="w-full aspect-square relative bg-gradient-to-b from-[#D5C8B5] to-[#C4B29A] grid place-items-center overflow-hidden rounded-[4px] cursor-pointer group max-[768px]:aspect-[16/9]">
                <svg className="w-[80%] h-[80%] opacity-50 transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="0.5">
                  <polygon points="10,25 90,20 90,30 10,40" /><polygon points="10,45 90,35 90,45 10,55" /><polygon points="10,60 90,50 90,60 10,70" /><polygon points="10,75 90,65 90,75 10,85" />
                </svg>
                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-[var(--ink)] text-[11px] px-9 py-3 rounded-[4px] border-none font-medium cursor-pointer shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] transition-transform duration-200 whitespace-nowrap group-hover:-translate-x-1/2 group-hover:scale-105">Explore</button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[240px_1fr] py-[40px] border-b border-[var(--rule)] gap-[40px] max-[1024px]:grid-cols-[200px_1fr] max-[768px]:grid-cols-1 max-[768px]:gap-6 max-[768px]:py-8">
          <div className="text-[11px] text-[var(--ink)] flex items-start gap-2 tracking-[0.02em] pt-1.5">
            <span className="w-2.5 h-2.5 rounded-full border border-[var(--ink)] inline-block mt-0.5"></span> Recording Studios and Radio
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start gap-5">
              <a className="text-[clamp(20px,2.2vw,24px)] font-normal text-[var(--ink)] leading-[1.3] cursor-pointer hover:text-[var(--muted)]">Mediaworks:<br/>Capturing the rebellious<br/>soul of radio</a>
              <div className="flex gap-10 text-[11px] mt-1.5 max-[480px]:gap-5">
                <a className="text-[var(--ink)] cursor-pointer hover-line">View case</a>
                <span className="text-[#B3AAA0] cursor-pointer hover-line">Hide</span>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap mb-3">
              <span className="text-[10px] px-4 py-1.5 border border-[var(--rule)] rounded-[4px] text-[var(--ink)] bg-transparent">Cube™</span>
              <span className="text-[10px] px-4 py-1.5 border border-[var(--rule)] rounded-[4px] text-[var(--ink)] bg-transparent">Quietspace® Panel</span>
            </div>
            <div className="grid grid-cols-[1.8fr_1fr] gap-5 max-[768px]:grid-cols-1">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-[4px] cursor-pointer group">
                <img src="/assets/hero-small/21.2.jpeg" className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" alt="Project 2" />
              </div>
              <div className="w-full aspect-square overflow-hidden rounded-[4px] cursor-pointer group max-[768px]:aspect-[16/9]">
                <img src="/assets/hero-small/6.jpeg" className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" alt="Project 3" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[240px_1fr] py-[40px] border-b border-[var(--rule)] gap-[40px] max-[1024px]:grid-cols-[200px_1fr] max-[768px]:grid-cols-1 max-[768px]:gap-6 max-[768px]:py-8">
          <div className="text-[11px] text-[var(--ink)] flex items-start gap-2 tracking-[0.02em] pt-1.5">
            <span className="w-2.5 h-2.5 rounded-full border border-[var(--ink)] inline-block mt-0.5"></span> Retail &amp; Concept Stores
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start gap-5">
              <a className="text-[clamp(20px,2.2vw,24px)] font-normal text-[var(--ink)] leading-[1.3] cursor-pointer hover:text-[var(--muted)]">Auckland Concept Store:<br/>Minimalism meets natural warmth</a>
              <div className="flex gap-10 text-[11px] mt-1.5 max-[480px]:gap-5">
                <a className="text-[var(--ink)] cursor-pointer hover-line">View case</a>
                <span className="text-[#B3AAA0] cursor-pointer hover-line">Hide</span>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap mb-3">
              <span className="text-[10px] px-4 py-1.5 border border-[var(--rule)] rounded-[4px] text-[var(--ink)] bg-transparent">Etch™</span>
              <span className="text-[10px] px-4 py-1.5 border border-[var(--rule)] rounded-[4px] text-[var(--ink)] bg-transparent">Timber</span>
              <span className="text-[10px] px-4 py-1.5 border border-[var(--rule)] rounded-[4px] text-[var(--ink)] bg-transparent">Custom Lighting</span>
            </div>
            <div className="grid grid-cols-[1.8fr_1fr] gap-5 max-[768px]:grid-cols-1">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-[4px] cursor-pointer group">
                <img src="/assets/hero-small/SiTaQB7mt_qvxJX02iNtgEaHQrrbea8kOgT9rToE_a0.jpg" className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" alt="Project 4" />
              </div>
              <div className="w-full aspect-square relative grid place-items-center overflow-hidden rounded-[4px] cursor-pointer group max-[768px]:aspect-[16/9]">
                <img src="/assets/hero-small/12.jpeg" className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" alt="Project 5" />
                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-[var(--ink)] text-[11px] px-9 py-3 rounded-[4px] border-none font-medium cursor-pointer shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] transition-transform duration-200 whitespace-nowrap group-hover:-translate-x-1/2 group-hover:scale-105">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-[60px] border-t border-[var(--rule)] pt-[60px]">
        <a href="#category" className="inline-flex items-center justify-center py-4 px-10 border border-[var(--ink)] rounded-[4px] text-[13px] font-medium text-[var(--ink)] transition-colors duration-300 tracking-[0.05em] cursor-pointer no-underline hover:bg-[var(--ink)] hover:text-[var(--bg)]">探索更多空間作品 Explore More →</a>
      </div>
    </section>
  );
}
