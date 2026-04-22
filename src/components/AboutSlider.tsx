import { useState, useEffect } from 'react';

const SLIDES = [
  {
    tag: '● About',
    title: '專注於空間與人的對話',
    body: '我們深信，空間不僅是視覺上的美感，更是生活品質的延伸。MJ CASA 致力於將自然元素與現代設計完美融合，為每個家庭打造獨一無二的專屬空間。透過細膩的材質選擇與專業的空間規劃，我們幫助客戶找回生活的平靜與舒適。',
    link: 'About us →',
    image: '/assets/hero-small/12.jpeg',
  },
  {
    tag: '● History',
    title: '傳承與創新的工藝旅程',
    body: '自成立以來，MJ CASA 始終堅持對工藝的極致追求。我們從一個專注於木作工藝的小型工作室，逐步成長為全方位的室內設計與家具品牌。多年的經驗累積，讓我們在每一次的專案中，都能精準捕捉客戶的需求，並將其轉化為令人驚豔的空間作品。',
    link: 'Our story →',
    image: '/assets/hero-small/1679401452959.jpg',
  },
  {
    tag: '● Philosophy',
    title: '材質與光線的哲思',
    body: '我們相信每一種材質都有其生命力。從台灣老木的溫潤紋路，到手工石材的自然肌理，MJ CASA 的每一件作品都是一部關於時間與土地的詩篇。光線是我們最重要的設計語言，它讓靜止的空間有了呼吸。',
    link: 'Our philosophy →',
    image: '/assets/hero-small/SiTaQB7mt_qvxJX02iNtgEaHQrrbea8kOgT9rToE_a0.jpg',
  },
  {
    tag: '● Process',
    title: '嚴謹而細緻的設計流程',
    body: '每一個 MJ CASA 的專案，都從深入的對話開始。我們傾聽您的生活方式、習慣與夢想，再由我們的設計師團隊將其轉化為詳盡的空間提案。從概念草圖到材料採樣，從施工監督到最終佈置，全程陪伴您走過每一個決策時刻。',
    link: 'Our process →',
    image: '/assets/hero-small/19.jpeg',
  },
  {
    tag: '● Vision',
    title: '以設計重新定義生活',
    body: '在 MJ CASA，我們的目標從不只是美麗的空間，而是能真正改變人們生活方式的設計。我們期望每一位走進我們所設計空間的人，都能感受到那份被細心對待的幸福感——那是專屬於您的、獨一無二的家。',
    link: 'Initiate vision →',
    image: '/assets/hero-small/21.2.jpeg',
  },
];

export default function AboutSlider() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const TOTAL = SLIDES.length;

  const goTo = (idx: number) => {
    if (idx === current) return;
    setVisible(false);
    setTimeout(() => {
      setCurrent(idx);
      setVisible(true);
    }, 320);
  };

  const prev = () => goTo((current - 1 + TOTAL) % TOTAL);
  const next = () => goTo((current + 1) % TOTAL);

  const slide = SLIDES[current];

  return (
    <section className="relative bg-[var(--dark)] text-[#E7DFD3] overflow-hidden min-h-[560px] grid grid-cols-[540px_1fr] max-lg:grid-cols-1">

      {/* LEFT: text panel — background stays fixed */}
      <div className="px-[var(--px)] pt-[80px] pb-[100px] flex flex-col justify-center relative max-lg:px-[var(--px)] max-lg:pt-[60px] max-lg:pb-[120px]">
        <div
          className="about-slide-text"
          style={{ opacity: visible ? 1 : 0, filter: visible ? 'blur(0px)' : 'blur(8px)', transform: visible ? 'translateY(0)' : 'translateY(10px)' }}
        >
          <div className="text-[11px] tracking-[0.22em] uppercase text-[#A89A88] mb-6">{slide.tag}</div>
          <h3 className="font-normal text-[clamp(28px,3vw,36px)] m-0 mb-5 text-white -tracking-[0.01em]">{slide.title}</h3>
          <p className="text-[13.5px] leading-[1.7] max-w-[420px] text-[#D5CBBC] m-0 mb-10">{slide.body}</p>
          <a className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white pb-1 transition-colors duration-300 cursor-pointer w-fit hover-line">{slide.link}</a>
        </div>

        {/* Controls */}
        <div className="absolute bottom-10 left-[var(--px)] flex items-center gap-4">
          <button
            className="w-10 h-10 rounded-full border border-white/20 bg-transparent text-white grid place-items-center cursor-pointer transition-all duration-300 p-0 outline-none hover:bg-white/10 hover:border-white/50"
            onClick={prev} aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>

          {/* Page indicators */}
          <div className="flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="relative outline-none border-none bg-transparent cursor-pointer p-0 flex items-center"
              >
                <span
                  className="block transition-all duration-300"
                  style={{
                    width: i === current ? '20px' : '6px',
                    height: '2px',
                    borderRadius: '2px',
                    backgroundColor: i === current ? '#fff' : 'rgba(255,255,255,0.3)',
                  }}
                />
              </button>
            ))}
            <span className="text-[10px] text-white/40 tracking-[0.1em] ml-1 tabular-nums">
              {String(current + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
            </span>
          </div>

          <button
            className="w-10 h-10 rounded-full border border-white/20 bg-transparent text-white grid place-items-center cursor-pointer transition-all duration-300 p-0 outline-none hover:bg-white/10 hover:border-white/50"
            onClick={next} aria-label="Next"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      {/* RIGHT: image — crossfade on top of fixed dark bg */}
      <div className="relative overflow-hidden min-h-[300px] h-full max-lg:min-h-[400px]">
        {SLIDES.map((s, i) => (
          <img
            key={i}
            src={s.image}
            alt={s.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}
      </div>
    </section>
  );
}
