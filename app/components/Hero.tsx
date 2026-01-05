'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.from('.hero-badge', {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Heading animation
      gsap.from('.hero-heading', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Subtitle animation
      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      });

      // Buttons animation
      gsap.from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
      });

      // Floating cards animation
      gsap.from('.hero-card', {
        opacity: 0,
        y: 80,
        stagger: 0.15,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
      });

      // Glow pulse animation
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] radial-glow-strong pointer-events-none"
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 glass-card px-6 py-3 mb-6">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-textMuted text-sm">Trusted by 250M+ investors</span>
        </div>

        {/* Heading */}
        <h1 className="hero-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Step Into The Future
          <br />
          Of Crypto Trading
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-textMuted text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Experience seamless trading with lightning-fast transactions,
          multi-chain support, and institutional-grade security
        </p>

        {/* Buttons */}
        <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-primary text-white px-8 py-4">
            Download App
          </button>
          <button className="btn-outline text-white px-8 py-4">
            Get Started
          </button>
        </div>

        {/* Floating Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
          <div className="hero-card glass-card p-6 orange-glow">
            <div className="text-3xl font-bold text-gradient mb-2">$ 3,196,465.50</div>
            <div className="text-textMuted text-sm">Total Trading Volume</div>
          </div>
          <div className="hero-card glass-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-primary rounded-full" />
              <div>
                <div className="text-xs text-textMuted">BTC/USDT</div>
                <div className="text-sm font-semibold">Bitcoin</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-green-400">+5.67%</div>
          </div>
          <div className="hero-card glass-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full" />
              <div>
                <div className="text-xs text-textMuted">ETH/USDT</div>
                <div className="text-sm font-semibold">Ethereum</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-green-400">+3.24%</div>
          </div>
        </div>
      </div>
    </section>
  );
}