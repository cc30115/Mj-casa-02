import { useEffect, useRef } from 'react';

export default function Locator() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client-side and when L is defined
    if (typeof window !== 'undefined' && window.L && mapRef.current) {
      if ((mapRef.current as any)._leaflet_id) return; // Prevent re-initialization
      
      const map = window.L.map(mapRef.current, {
        center: [24.1652, 120.6435], // Taichung Taiwan Blvd Sec 3, 266
        zoom: 15,
        zoomControl: false,
        scrollWheelZoom: false
      });
      
      // Using CartoDB Positron (Light, minimal map tiles)
      window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap & CartoDB',
        maxZoom: 19
      }).addTo(map);

      // Custom Brand Marker
      const customIcon = window.L.divIcon({
        className: 'custom-map-marker',
        html: '<div style="width:18px;height:18px;background:var(--ink);border-radius:50%;border:3px solid var(--paper);box-shadow:0 4px 12px rgba(0,0,0,0.25);"></div>',
        iconSize: [18, 18],
        iconAnchor: [9, 9]
      });

      window.L.marker([24.1652, 120.6435], {icon: customIcon}).addTo(map);

      return () => {
        map.remove();
      };
    }
  }, []);

  return (
    <section className="grid grid-cols-2 bg-[var(--paper)] border-y border-[var(--rule)] max-lg:grid-cols-1">
      <div 
        ref={mapRef} 
        className="relative w-full min-h-[540px] bg-[var(--paper)] rounded-[4px] overflow-hidden z-[1] max-lg:min-h-[450px] max-lg:border-b max-lg:border-[var(--rule)] max-lg:rounded-t-[4px] max-lg:rounded-b-none"
      ></div>
      
      <div className="px-[var(--px)] py-[60px] flex flex-col gap-8 border-l border-[var(--rule)] max-lg:border-l-0 max-lg:py-10">
        <div className="text-[11px] tracking-[0.2em] uppercase text-[var(--ink)] flex items-center gap-2 before:content-[''] before:inline-block before:w-2 before:h-2 before:rounded-full before:bg-[var(--ink)]">
          Sales Locations
        </div>
        
        <div className="flex items-center justify-between pb-6 border-b border-[var(--rule)]">
          <h2 className="font-normal text-[clamp(36px,4vw,48px)] m-0 text-[var(--ink)] -tracking-[0.02em]">Taichung</h2>
          <div className="w-8 h-8 rounded-[4px] border border-[var(--rule)] grid place-items-center text-[var(--muted)] text-[16px] cursor-pointer transition-colors duration-200 hover:bg-[#E8E1D4]">×</div>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="bg-[#EAE3D7] rounded-[4px] py-7 px-6 flex flex-col gap-5 transition-colors duration-300">
            <div className="flex items-center justify-between font-medium text-[14px] text-[var(--ink)]">
              <span className="flex items-center gap-2.5 before:content-[''] before:inline-block before:w-2 before:h-2 before:rounded-full before:bg-[var(--ink)]">MJ CASA 展間</span>
              <span className="w-7 h-7 rounded-[4px] border border-black/10 grid place-items-center text-[14px] text-[var(--muted)] font-sans">∞</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-[24px_1fr] gap-3 text-[12.5px] text-[var(--ink-2)] leading-[1.6]">
                <b className="w-6 h-6 rounded-[4px] border border-black/10 grid place-items-center text-[9px] font-medium text-[var(--muted)] font-['system-ui',sans-serif]">P</b> <span>電話 / Line：0988795925</span>
              </div>
              <div className="grid grid-cols-[24px_1fr] gap-3 text-[12.5px] text-[var(--ink-2)] leading-[1.6]">
                <b className="w-6 h-6 rounded-[4px] border border-black/10 grid place-items-center text-[9px] font-medium text-[var(--muted)] font-['system-ui',sans-serif]">C</b> <span>預約制聯絡⼈：Yuzu</span>
              </div>
              <div className="grid grid-cols-[24px_1fr] gap-3 text-[12.5px] text-[var(--ink-2)] leading-[1.6]">
                <b className="w-6 h-6 rounded-[4px] border border-black/10 grid place-items-center text-[9px] font-medium text-[var(--muted)] font-['system-ui',sans-serif]">A</b> <span>台中市西屯區台灣大道三段266號</span>
              </div>
            </div>
          </div>
          
          <div className="bg-transparent border border-[var(--rule)] rounded-[4px] py-[27px] px-[23px] flex flex-col gap-5 transition-colors duration-300">
            <div className="flex items-center justify-between font-medium text-[14px] text-[var(--ink)]">
              <span className="flex items-center gap-2.5 before:content-[''] before:inline-block before:w-2 before:h-2 before:rounded-full before:bg-transparent before:border before:border-[var(--muted)]">02 Taichung Showroom</span>
              <span className="w-7 h-7 rounded-[4px] border border-transparent grid place-items-center text-[14px] text-[var(--muted)] font-sans"></span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-[10px] px-3 py-1.5 bg-black/5 rounded-[4px] w-fit text-[var(--ink)] tracking-[0.1em] uppercase mt-1">Coming soon in 2027</div>
            </div>
          </div>
          
          <div className="bg-transparent border border-[var(--rule)] rounded-[4px] py-[27px] px-[23px] flex flex-col gap-5 transition-colors duration-300">
            <div className="flex items-center justify-between font-medium text-[14px] text-[var(--ink)]">
              <span className="flex items-center gap-2.5 before:content-[''] before:inline-block before:w-2 before:h-2 before:rounded-full before:bg-transparent before:border before:border-[var(--muted)]">03 Taichung Concept Store</span>
              <span className="w-7 h-7 rounded-[4px] border border-transparent grid place-items-center text-[14px] text-[var(--muted)] font-sans"></span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-[10px] px-3 py-1.5 bg-black/5 rounded-[4px] w-fit text-[var(--ink)] tracking-[0.1em] uppercase mt-1">Coming soon in 2027</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
