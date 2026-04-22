import { useState, useEffect } from 'react';

const HERO_IMAGES = [
  "/assets/hero-slide/39.jpeg",
  "/assets/hero-slide/IMG_7064.JPG",
  "/assets/hero-slide/IMG_2841.JPG",
  "/assets/hero-slide/IMG_7066.JPG",
  "/assets/hero-slide/IMG_2843.JPG"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 8000); // 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[900px] h-screen flex justify-start items-end px-[var(--px)] pt-[100px] pb-16 overflow-hidden max-md:min-h-[80vh] max-md:pt-10 max-md:pb-10 max-md:items-end">
      <div className="absolute inset-0">
        {HERO_IMAGES.map((img, index) => (
          <div 
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img} 
              alt={`Hero background ${index + 1}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>
      <div className="relative z-10 w-full max-w-[480px] flex flex-col gap-[18px]">
        <div className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-[4px] py-[34px] px-[36px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] max-[480px]:px-5 max-[480px]:py-6">
          <div className="text-[10px] tracking-[0.22em] uppercase text-white/50 mb-3.5">Framing nature, inside your home</div>
          <h1 className="font-medium text-[clamp(32px,4vw,44px)] leading-[1.08] -tracking-[0.01em] m-0 mb-8 text-white">Panels and floors<br/>shaped by nature<br/>and refined for you</h1>
          <div className="flex gap-3 flex-wrap">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white rounded-[4px] py-3 px-5 text-[12.5px] tracking-[0.02em] font-medium cursor-pointer transition-all duration-200 hover:bg-white/25">
              Furniture <span className="w-5 h-5 rounded-full bg-white/20 text-white grid place-items-center text-[11px] leading-none">→</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white rounded-[4px] py-3 px-5 text-[12.5px] tracking-[0.02em] font-medium cursor-pointer transition-all duration-200 hover:bg-white/25">
              Space <span className="w-5 h-5 rounded-full bg-white/20 text-white grid place-items-center text-[11px] leading-none">→</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white text-[#1A1613] rounded-[4px] py-3 px-5 text-[12.5px] tracking-[0.02em] font-medium cursor-pointer transition-all duration-200 hover:bg-white/90">
              Booking <span className="w-5 h-5 rounded-full bg-[#1A1613] text-white grid place-items-center text-[11px] leading-none">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
