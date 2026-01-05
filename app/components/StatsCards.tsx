'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StatsCards() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stats-heading', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.stats-heading',
          start: 'top 80%',
        },
      });

      gsap.from('.partner-logo', {
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.partner-logos',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const partners = ['Binance', 'Coinbase', 'Kraken', 'Gemini', 'OKX'];

  return (
    <section ref={sectionRef} className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="stats-heading text-center text-textMuted text-sm uppercase tracking-wider mb-12">
          Trusted by 250M+ investors globally
        </h3>

        <div className="partner-logos flex flex-wrap items-center justify-center gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="partner-logo text-2xl font-bold text-textMuted hover:text-primary transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}