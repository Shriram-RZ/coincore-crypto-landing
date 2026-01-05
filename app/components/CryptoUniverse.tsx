'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CryptoUniverse() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const coinRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from('.universe-heading', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: '.universe-heading',
          start: 'top 80%',
        },
      });

      // Coin rotation
      gsap.to(coinRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });

      // Coin scale on scroll
      gsap.from(coinRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: coinRef.current,
          start: 'top 70%',
        },
      });

      // Grid symbols animation
      gsap.from('.crypto-symbol', {
        opacity: 0,
        scale: 0,
        stagger: 0.05,
        duration: 0.6,
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cryptoSymbols = [
    '₿', 'Ξ', '◊', '₳', '⟠', '◈', 'Ł', 'Ð',
    '₿', 'Ξ', '◊', '₳', '⟠', '◈', 'Ł', 'Ð',
    '₿', 'Ξ', '◊', '₳', '⟠', '◈', 'Ł', 'Ð',
  ];

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background Grid */}
      <div ref={gridRef} className="absolute inset-0 grid grid-cols-8 gap-8 opacity-10 pointer-events-none">
        {cryptoSymbols.map((symbol, index) => (
          <div
            key={index}
            className="crypto-symbol text-4xl text-textMuted flex items-center justify-center"
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="universe-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-16">
          Entire Crypto Universe
        </h2>

        {/* Bitcoin Coin */}
        <div
          ref={coinRef}
          className="relative inline-block w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl"
          style={{
            boxShadow: '0 20px 80px rgba(255, 165, 0, 0.5)',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-7xl md:text-8xl font-bold text-white">
            ₿
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 blur-3xl opacity-50 -z-10" />
        </div>

        <p className="mt-12 text-textMuted text-lg max-w-2xl mx-auto">
          Access over 500+ cryptocurrencies and tokens across multiple blockchains.
          Trade, stake, and earn rewards all in one platform.
        </p>
      </div>
    </section>
  );
}