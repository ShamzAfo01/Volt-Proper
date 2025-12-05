import React, { useEffect } from 'react';
import { UnicornProject } from './components/UnicornProject';

// Pixel grid helper
const PixelGridIcon = ({ variant = 'default' }: { variant?: 'default' | 'orange' }) => {
  const isOrange = variant === 'orange';
  const color = isOrange ? 'bg-volt-orange' : 'bg-[#323232]';
  const highlight = isOrange ? 'bg-black' : 'bg-white';

  return (
    <div className="grid grid-cols-6 gap-[2px] w-[34px] h-[34px] p-[1px]">
      {/* Row 1 */}
      <div className={highlight}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      {/* Row 2 */}
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      {/* Row 3 */}
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      {/* Row 4 */}
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      {/* Row 5 */}
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      {/* Row 6 */}
      <div className={highlight}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
    </div>
  );
};

const Header: React.FC = () => (
  <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 max-w-[1440px] mx-auto">
    {/* Left Logo Section */}
    <div className="flex items-center gap-4">
      <div className="w-6 h-6 bg-black flex items-center justify-center">
        <div className="flex items-center justify-center w-full h-full bg-black">
          <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M16.94 19.06C16.94 21.79 14.73 24 12 24C9.27 24 7.06 21.79 7.06 19.06C7.06 16.33 9.27 14.12 12 14.12C14.73 14.12 16.94 16.33 16.94 19.06Z" fill="white"/>
            <path d="M9.88 4.94C9.88 7.67 7.67 9.88 4.94 9.88C2.21 9.88 0 7.67 0 4.94C0 2.21 2.21 0 4.94 0C7.67 0 9.88 2.21 9.88 4.94Z" fill="white"/>
            <path d="M24 4.94C24 7.67 21.95 9.6 19.06 9.88C16.31 9.53 14.12 7.67 14.12 4.94C14.12 2.21 16.33 0 19.06 0C21.79 0 24 2.21 24 4.94Z" fill="white"/>
            <path d="M5.68 9.85C3.63 10.2 1.88 8.82 1.88 8.82C1.88 8.82 4.64 10.87 5.68 12.99C6.76 15.17 7.13 19.55 7.13 19.55C7.13 19.55 6.74 17.51 8.34 15.74C9.57 14.38 10.8 14.26 10.8 14.26C10.8 14.26 9.49 14.19 8.16 12.11C7.34 10.84 7.91 8.86 7.91 8.86C7.91 8.86 7.02 9.62 5.68 9.85Z" fill="white"/>
            <path d="M15.88 11.75C15.26 13.1 12.88 14.19 12.88 14.19C12.88 14.19 14.53 14.47 15.67 15.74C17.09 17.33 16.98 19.55 16.98 19.55C16.98 19.55 16.94 15.32 18.18 12.99C19.19 11.09 22.16 8.75 22.16 8.75C22.16 8.75 20.27 10.17 18.64 9.85C16.84 9.49 15.96 8.65 15.96 8.65C15.96 8.65 16.38 10.66 15.88 11.75Z" fill="white"/>
            <path d="M16.24 10.24C16.24 12.57 14.34 14.47 12 14.47C9.66 14.47 7.69 12.54 7.69 10.2C7.69 7.86 9.59 5.96 11.93 5.96C14.27 5.96 16.24 7.9 16.24 10.24Z" fill="black"/>
          </svg>
        </div>
      </div>
      <span className="font-sans text-[22px] tracking-tighter text-white">VOLT</span>
    </div>

    {/* Center Nav */}
    <nav className="hidden md:flex items-center gap-12">
      {['Benefits', 'Features', 'Pricing'].map((item) => (
        <a key={item} href="#" className="font-mono text-[16px] font-light text-white hover:text-volt-orange transition-colors">
          {item}
        </a>
      ))}
    </nav>

    {/* Right CTA */}
    <div className="flex items-center gap-4">
      <button className="group relative flex items-center justify-center gap-3 px-4 py-2 border border-volt-orange bg-white hover:bg-gray-100 transition-colors">
        <div className="w-[26px] h-[26px] relative">
          <div className="absolute top-0 left-0 w-[3px] h-[3px] bg-black"></div>
          <div className="absolute top-0 left-[4.5px] w-[3px] h-[3px] bg-volt-orange"></div>
          <div className="absolute top-0 left-[9px] w-[3px] h-[3px] bg-volt-orange"></div>
          <div className="absolute top-[4.5px] left-0 w-[3px] h-[3px] bg-volt-orange"></div>
          <div className="absolute top-[4.5px] left-[4.5px] w-[3px] h-[3px] bg-volt-orange"></div>
          <div className="absolute bottom-0 right-0 w-[3px] h-[3px] bg-volt-orange"></div>
        </div>

        <span className="font-mono text-[14px] text-black">START DASHBOARD</span>

        <div className="w-[26px] h-[26px] relative">
          <div className="absolute top-0 left-0 w-[3px] h-[3px] bg-volt-orange"></div>
          <div className="absolute top-0 left-[4.5px] w-[3px] h-[3px] bg-volt-orange"></div>
          <div className="absolute top-0 right-0 w-[3px] h-[3px] bg-black"></div>
          <div className="absolute bottom-0 left-0 w-[3px] h-[3px] bg-volt-orange"></div>
          <div className="absolute bottom-0 left-[4.5px] w-[3px] h-[3px] bg-volt-orange"></div>
          <div className="absolute bottom-0 right-0 w-[3px] h-[3px] bg-black"></div>
        </div>
      </button>
    </div>
  </header>
);

const App: React.FC = () => {
  // hide unicorn studio badge if it appears
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

  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden relative">
      <Header />

      {/* HERO: Unicorn project as background, text centred in the middle */}
      <section className="relative w-full h-[900px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <UnicornProject />
        </div>

        <div className="relative z-10 max-w-[960px] px-6 text-center">
          <h1 className="font-mono font-semibold text-[48px] md:text-[60px] leading-[1.4] tracking-tighter text-white">
            High-Frequency Financial Analytics for Startups.
          </h1>
          <p className="mt-6 font-mono text-[18px] md:text-[20px] leading-[1.1] tracking-tight text-gray-300">
            Volt aggregates your Stripe, PayPal, and bank data <br />
            into a single source of truth.
          </p>
        </div>
      </section>

      {/* BELOW THE FOLD – decorative bars */}
      <section className="relative w-full max-w-[1440px] mx-auto px-8 pt-16 pb-32">
        <div className="mt-32 space-y-4 opacity-50">
          <div className="w-[80%] h-1 bg-[#1a1a1a] rounded-full mx-auto"></div>
          <div className="w-[60%] h-1 bg-[#1a1a1a] rounded-full mx-auto"></div>
          <div className="w-[40%] h-1 bg-[#1a1a1a] rounded-full mx-auto"></div>
        </div>
      </section>

      {/* Pixel decoration overlay */}
      <div className="absolute top-[1031px] right-[120px] hidden xl:flex gap-4 p-2 bg-[#050505]">
        <div className="grid grid-cols-6 gap-1 w-[34px] h-[34px]">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className={`w-1 h-1 ${i === 0 ? 'bg-white' : 'bg-[#323232]'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;