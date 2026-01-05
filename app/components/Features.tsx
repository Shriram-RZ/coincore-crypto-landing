'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Shield, Layers, Lock } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-heading', {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: '.feature-heading',
          start: 'top 80%',
        },
      });

      gsap.from('.feature-card', {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.feature-grid',
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Zap size={32} />,
      title: 'Lightning Fast',
      description: 'Execute trades in milliseconds with our high-performance matching engine',
    },
    {
      icon: <Shield size={32} />,
      title: 'Low Fees',
      description: 'Enjoy industry-leading low trading fees and zero deposit charges',
    },
    {
      icon: <Layers size={32} />,
      title: 'Multi-Chain Support',
      description: 'Trade across multiple blockchains seamlessly from one platform',
    },
    {
      icon: <Lock size={32} />,
      title: 'Secure Transaction',
      description: 'Bank-grade security with multi-signature wallets and cold storage',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="feature-heading text-4xl md:text-5xl font-bold text-center mb-16">
          Setting A New Standard
          <br />
          In Digital Trading
        </h2>

        <div className="feature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card glass-card glass-card-hover p-8 text-center group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 group-hover:rotate-12 transition-transform duration-300">
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-textMuted text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}