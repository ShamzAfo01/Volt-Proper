/// App.tsx
import React, { useEffect, useState } from 'react';
import { UnicornProject } from './components/UnicornProject';

// Pixel grid helper for CTA
type PixelGridIconProps = {
  variant?: 'default' | 'orange';
};

const PixelGridIcon: React.FC<PixelGridIconProps> = ({ variant = 'default' }) => {
  const isOrange = variant === 'orange';
  const color = isOrange ? 'bg-volt-orange' : 'bg-[#323232]';
  const highlight = isOrange ? 'bg-black' : 'bg-white';

  return (
    <div className="grid grid-cols-6 gap-[2px] w-[34px] h-[34px] p-[1px]">
      {/* Row 1 */}
      <div className={highlight} />
      <div className={color} />
      <div className={color} />
      <div className={color} />
      <div className={color} />
      <div className={color} />

      {/* Row 2 */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={`r2-${i}`} className={color} />
      ))}

      {/* Row 3 */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={`r3-${i}`} className={color} />
      ))}

      {/* Row 4 */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={`r4-${i}`} className={color} />
      ))}

      {/* Row 5 */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={`r5-${i}`} className={color} />
      ))}

      {/* Row 6 */}
      <div className={highlight} />
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={`r6-${i}`} className={color} />
      ))}
    </div>
  );
};

// Top nav / header
const Header: React.FC = () => (
  <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 max-w-[1440px] mx-auto">
    {/* Left Logo Section */}
    <div className="flex items-center gap-4">
      <div className="w-6 h-6 bg-black flex items-center justify-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M16.94 19.06C16.94 21.79 14.73 24 12 24C9.27 24 7.06 21.79 7.06 19.06C7.06 16.33 9.27 14.12 12 14.12C14.73 14.12 16.94 16.33 16.94 19.06Z"
            fill="white"
          />
          <path
            d="M9.88 4.94C9.88 7.67 7.67 9.88 4.94 9.88C2.21 9.88 0 7.67 0 4.94C0 2.21 2.21 0 4.94 0C7.67 0 9.88 2.21 9.88 4.94Z"
            fill="white"
          />
          <path
            d="M24 4.94C24 7.67 21.95 9.6 19.06 9.88C16.31 9.53 14.12 7.67 14.12 4.94C14.12 2.21 16.33 0 19.06 0C21.79 0 24 2.21 24 4.94Z"
            fill="white"
          />
          <path
            d="M5.68 9.85C3.63 10.2 1.88 8.82 1.88 8.82C1.88 8.82 4.64 10.87 5.68 12.99C6.76 15.17 7.13 19.55 7.13 19.55C7.13 19.55 6.74 17.51 8.34 15.74C9.57 14.38 10.8 14.26 10.8 14.26C10.8 14.26 9.49 14.19 8.16 12.11C7.34 10.84 7.91 8.86 7.91 8.86C7.91 8.86 7.02 9.62 5.68 9.85Z"
            fill="white"
          />
          <path
            d="M15.88 11.75C15.26 13.1 12.88 14.19 12.88 14.19C12.88 14.19 14.53 14.47 15.67 15.74C17.09 17.33 16.98 19.55 16.98 19.55C16.98 19.55 16.94 15.32 18.18 12.99C19.19 11.09 22.16 8.75 22.16 8.75C22.16 8.75 20.27 10.17 18.64 9.85C16.84 9.49 15.96 8.65 15.96 8.65C15.96 8.65 16.38 10.66 15.88 11.75Z"
            fill="white"
          />
          <path
            d="M16.24 10.24C16.24 12.57 14.34 14.47 12 14.47C9.66 14.47 7.69 12.54 7.69 10.2C7.69 7.86 9.59 5.96 11.93 5.96C14.27 5.96 16.24 7.9 16.24 10.24Z"
            fill="black"
          />
        </svg>
      </div>
      <span className="font-sans text-[22px] tracking-tighter text-white">VOLT</span>
    </div>

    {/* Center Nav */}
    <nav className="hidden md:flex items-center gap-12">
      {['Benefits', 'Features', 'Pricing'].map((item) => (
        <a
          key={item}
          href="#"
          className="font-mono text-[16px] font-light text-white hover:text-volt-orange transition-colors"
        >
          {item}
        </a>
      ))}
    </nav>

    {/* Right CTA (small button in header) */}
    <div className="flex items-center gap-4">
      <button className="group relative flex items-center justify-center gap-3 px-4 py-2 border border-volt-orange bg-white hover:bg-gray-100 w-[260px] transition-colors">
        <div className="w-[26px] h-[26px] relative">
          <div className="absolute top-0 left-0 w-[3px] h-[3px] bg-black" />
          <div className="absolute top-0 left-[4.5px] w-[3px] h-[3px] bg-volt-orange" />
          <div className="absolute top-0 left-[9px] w-[3px] h-[3px] bg-volt-orange" />
          <div className="absolute top-[4.5px] left-0 w-[3px] h-[3px] bg-volt-orange" />
          <div className="absolute top-[4.5px] left-[4.5px] w-[3px] h-[3px] bg-volt-orange" />
          <div className="absolute bottom-0 right-0 w-[3px] h-[3px] bg-volt-orange" />
        </div>
        <span className="font-mono text-[14px] text-black">START DASHBOARD</span>
      </button>
    </div>
  </header>
);

const App: React.FC = () => {
  // Optional: hide Unicorn Studio badge in embed
  useEffect(() => {
    const hideBadge = () => {
      const badge = document.querySelector<HTMLElement>('a[href*="unicorn.studio"]');
      if (badge) {
        badge.style.display = 'none';
        return true;
      }
      return false;
    };

    if (!hideBadge()) {
      const interval = setInterval(() => {
        if (hideBadge()) clearInterval(interval);
      }, 500);
      setTimeout(() => clearInterval(interval), 10000);
    }
  }, []);

  // bar heights for the chart in Frame 63
  const bars = [66, 97, 125, 112, 87, 81, 149, 174, 200, 230, 252, 210];
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden relative">
      <Header />

      {/* HERO */}
      <section className="relative w-full h-[900px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <UnicornProject />
        </div>

        <div className="relative z-20 max-w-[960px] px-6 text-center">
          <h1 className="font-mono font-semibold text-[48px] md:text-[60px] leading-[1.2] tracking-tighter text-white">
            High-Frequency Financial Analytics for Startups.
          </h1>
          {/* tighter line-height */}
          <p className="mt-6 font-mono text-[18px] md:text-[20px] leading-[1.1] tracking-tight text-gray-300">
            Volt aggregates your Stripe, PayPal, and bank data <br />
            into a single source of truth.
          </p>

          {/* Main CTA under hero */}
          <div className="mt-8 flex justify-center">
            <button
              aria-label="Start dashboard"
              className="group relative z-50 flex items-center justify-center gap-3 px-4 py-2 border border-volt-orange bg-white hover:bg-gray-100 w-[265px] transition-colors"
            >
              <PixelGridIcon />
              <div className="font-mono text-[14px] text-black">START DASHBOARD</div>
              <PixelGridIcon variant="orange" />
            </button>
          </div>
        </div>
      </section>

      {/* ========= FRAME 57 SECTION (AFTER HERO) ========= */}
      <section className="w-full bg-[#050505] py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8">
          {/* cashflow headline */}
          <p className="max-w-[746px] font-mono font-medium text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.05em] text-white">
            You need granular visibility into your cash flow the second a transaction clears.
          </p>

          {/* Cards row */}
          <div className="mt-16 grid gap-10 lg:grid-cols-[433px,minmax(0,1fr)]">
            {/* LEFT: bar chart card (Frame 63) */}
            <div className="group relative bg-[#050505] hover:bg-[#121212] rounded-[3px] p-8 border border-[#1b1b1b]/40 transition-colors">
              <p className="font-mono text-[18px] md:text-[20px] leading-[1.2] tracking-[-0.03em] text-white">
                Instant Reconciliation.
              </p>

              <div className="relative mt-10 h-[230px] flex items-end gap-3">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="relative flex-1 flex justify-center"
                    onMouseEnter={() => setHoverIndex(i)}
                    onMouseLeave={() =>
                      setHoverIndex((prev) => (prev === i ? null : prev))
                    }
                  >
                    {/* BAR */}
                    <div
                      className="w-4 rounded-[1px] bg-gradient-to-t from-[#FE4E1D] to-[#F26A45] transition-transform duration-150 group-hover:scale-y-[1.02]"
                      style={{ height: `${h}px` }}
                    />

                    {/* HOVER OVERLAY (Line 12 + Group 10) */}
                    {hoverIndex === i && (
                      <>
                        {/* dashed vertical line */}
                        <div className="pointer-events-none absolute bottom-0 top-[-80px] w-px border-l border-dashed border-[#FE4E1D]" />

                        {/* tooltip card with brackets */}
                        <div className="pointer-events-none absolute -top-[110px] left-1/2 -translate-x-1/2 flex items-center">
                          {/* left bracket */}
                          <div className="w-[10px] h-[28px] border border-[#FE4E1D] border-r-0" />

                          {/* card */}
                          <div className="bg-[#121212] px-[10px] py-[10px] flex flex-col gap-[8px] w-[103px]">
                            <div className="flex justify-between text-[10px] leading-[1.1] tracking-[-0.005em]">
                              <span className="text-[#666666]">Time</span>
                              <span className="text-[#B0B0B0]">02:00</span>
                            </div>
                            <div className="flex justify-between text-[10px] leading-[1.1] tracking-[-0.005em]">
                              <span className="text-[#666666]">Vel.</span>
                              <span className="text-[#B0B0B0]">1,024</span>
                            </div>
                          </div>

                          {/* right bracket */}
                          <div className="w-[10px] h-[28px] border border-[#FE4E1D] border-l-0" />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: stacked cards */}
            <div className="grid gap-10 lg:grid-rows-2">
              {/* Top: dense grid */}
              <div className="bg-[#050505] border border-[#1B1B1B] rounded-[3px] p-8 overflow-hidden">
                <p className="font-mono text-[18px] md:text-[20px] leading-[1.2] tracking-[-0.03em] text-[#e5e5e5] mb-8">
                  High-density transaction matrix.
                </p>
                <div className="grid grid-cols-12 gap-[4px]">
                  {Array.from({ length: 12 * 10 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-[16px] h-[16px] bg-[#232323] rounded-[2px]"
                    />
                  ))}
                </div>
              </div>

              {/* Bottom: diagonal stripes + crosshair */}
              <div className="bg-[#050505] border border-[#1B1B1B] rounded-[3px] p-8 relative overflow-hidden">
                <p className="relative z-10 font-mono text-[18px] md:text-[20px] leading-[1.2] tracking-[-0.03em] text-[#e5e5e5] mb-6">
                  Ledger rails in real time.
                </p>

                {/* diagonal background */}
                <div
                  className="absolute inset-x-[-80px] bottom-[-40px] top-[120px] opacity-90"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(36deg, #232323 0px, #232323 14px, transparent 14px, transparent 30px)',
                  }}
                />

                <div className="relative z-10 flex items-center justify-between mt-10">
                  <div className="relative w-[150px] h-[150px]">
                    <div className="absolute left-1/2 top-0 h-full w-px border border-white/60 -translate-x-1/2" />
                    <div className="absolute top-1/2 left-0 w-full border border-white/60 -translate-y-1/2" />
                    <div className="absolute w-[7px] h-[7px] rounded-full bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="relative w-[150px] h-[150px]">
                    <div className="absolute left-1/2 top-0 h-full w-px border border-white/40 -translate-x-1/2" />
                    <div className="absolute top-1/2 left-0 w-full border border-white/40 -translate-y-1/2" />
                    <div className="absolute w-[7px] h-[7px] rounded-full bg-white/80 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========= /FRAME 57 SECTION ========= */}
    </div>
  );
};

export default App;