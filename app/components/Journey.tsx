'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Trade', 'Earn', 'Stake', 'Learn'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.journey-heading', {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: '.journey-heading',
          start: 'top 80%',
        },
      });

      gsap.from('.journey-tabs', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: '.journey-tabs',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="journey-heading text-4xl md:text-5xl font-bold mb-12">
          Your Journey To Crypto
          <br />
          Starts Here
        </h2>

        <div className="journey-tabs flex flex-wrap items-center justify-center gap-6">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative px-8 py-3 text-lg font-semibold transition-all duration-300 ${
                activeTab === index ? 'text-primary' : 'text-textMuted hover:text-white'
              }`}
            >
              {tab}
              {activeTab === index && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}