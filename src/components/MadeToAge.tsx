import { useEffect, useRef, useState } from 'react';

const products = [
  { tag: 'New Vintage', name: 'Pavilion Chair', price: 'From $6,000', colors: ['b'] },
  { tag: 'New Vintage', name: 'Thrown Salad Bowl', price: '$295', colors: ['c'] },
  { tag: 'New Vintage', name: 'Nill Coffee Table', price: 'From $4,600', colors: ['b', 'c'] },
  { tag: 'New Vintage', name: 'Mt. Wolcott Counter Stool', price: 'From $1,775', colors: ['b', 'c'] },
  { tag: 'New Vintage', name: 'Walnut Console', price: 'From $3,200', colors: ['b'] },
  { tag: 'New Vintage', name: 'Desert Lounge Sofa', price: 'From $8,400', colors: ['c'] },
  { tag: 'New Vintage', name: 'Ceramic Vessel Set', price: '$450', colors: ['b', 'c'] },
  { tag: 'New Vintage', name: 'Oka Dining Table', price: 'From $5,500', colors: ['b', 'c'] },
  { tag: 'New Vintage', name: 'Linear Bookcase', price: 'From $4,100', colors: ['b'] },
  { tag: 'New Vintage', name: 'Linen Armchair', price: 'From $2,800', colors: ['c'] },
];

export default function MadeToAge() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // Implementation of simple click-to-drag, similar to original reference
  const handleMouseDown = (e: React.MouseEvent) => {
    if(!carouselRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  
  const handleMouseLeave = () => {
    setIsDown(false);
  };
  
  const handleMouseUp = () => {
    setIsDown(false);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="pb-[100px]">
      <div className="flex items-end justify-between border-b border-[var(--rule)] pb-4 flex-wrap gap-2.5 mx-[var(--px)] mb-[30px]">
        <h3 className="font-medium text-[clamp(26px,3vw,34px)] m-0 -tracking-[0.005em]">Made to Age</h3>
        <a className="text-[11px] tracking-[0.22em] uppercase pb-0.5 cursor-pointer hover-line">Shop all</a>
      </div>
      <div className="flex flex-wrap gap-8 text-[11px] tracking-[0.18em] uppercase text-[var(--muted)] mx-[var(--px)] mb-10">
        <span className="text-[var(--ink)] cursor-pointer hover-line"><span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--ink)] mr-2 align-middle"></span>New vintage</span>
        <span className="cursor-pointer hover-line"><span className="inline-block w-1.5 h-1.5 rounded-full bg-transparent border border-[var(--muted)] mr-2 align-middle"></span>True vintage</span>
        <span className="cursor-pointer hover-line"><span className="inline-block w-1.5 h-1.5 rounded-full bg-transparent border border-[var(--muted)] mr-2 align-middle"></span>New &amp; True vintage</span>
      </div>
      
      <div 
        ref={carouselRef}
        className="flex gap-8 overflow-x-auto px-[var(--px)] pb-10 cursor-grab hide-scrollbar active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {[...products, ...products].map((product, i) => (
          <div key={i} className="flex-none w-[280px] select-none flex flex-col group">
            <div className="relative w-full aspect-[3/4] rounded-[4px] overflow-hidden mb-3.5 bg-[#E8E1D4]">
              <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-[4px] text-[var(--ink)] text-[9px] px-3 py-1.5 rounded-[4px] tracking-[0.1em] uppercase z-10 font-medium shadow-[0_4px_12px_rgba(0,0,0,0.05)]">{product.tag}</span>
              <img src="/assets/hero-small/21.2.jpeg" className="w-full h-full object-cover pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" alt="Furniture" />
            </div>
            <div className="flex justify-between items-start text-[12px]">
              <div>
                <span className="block text-[13px] tracking-[0.02em] mb-2">{product.name}</span>
                <div className="inline-flex gap-1">
                  <i className="w-2.5 h-2.5 rounded-full bg-[#3C342E] border border-black/10"></i>
                  {product.colors.includes('b') && <i className="w-2.5 h-2.5 rounded-full bg-[#C9B89A] border border-black/10"></i>}
                  {product.colors.includes('c') && <i className="w-2.5 h-2.5 rounded-full bg-[#8A6A4A] border border-black/10"></i>}
                </div>
              </div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--muted)]">
                {product.price.startsWith('From') ? (
                  <>From <b className="text-[var(--ink)] font-semibold ml-1">{product.price.split(' ')[1]}</b></>
                ) : (
                  <b className="text-[var(--ink)] font-semibold ml-1">{product.price}</b>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
