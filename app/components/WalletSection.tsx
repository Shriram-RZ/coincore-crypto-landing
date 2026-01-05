'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WalletSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.wallet-content', {
        opacity: 0,
        x: -60,
        duration: 1,
        scrollTrigger: {
          trigger: '.wallet-content',
          start: 'top 70%',
        },
      });

      gsap.from('.wallet-card', {
        opacity: 0,
        x: 60,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.wallet-cards',
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="wallet-content space-y-6">
            <div className="inline-block glass-card px-4 py-2 text-primary text-sm font-semibold">
              Web3 Integration
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Encryptation build
              <br />
              on web3 wallet for
              <br />
              crypto
            </h2>
            <p className="text-textMuted text-lg">
              Connect your favorite Web3 wallet and start trading instantly.
              Support for MetaMask, WalletConnect, Coinbase Wallet, and more.
            </p>
            <button className="btn-primary text-white flex items-center gap-2">
              Learn More
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Cards */}
          <div className="wallet-cards space-y-6">
            <div className="wallet-card glass-card p-6 orange-glow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-textMuted mb-1">Total Balance</div>
                  <div className="text-3xl font-bold">$ 3,533,653.50</div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full" />
              </div>
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <span>+8.2%</span>
                <span className="text-textMuted">from last week</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="wallet-card glass-card p-6">
                <div className="text-sm text-textMuted mb-2">Deposited</div>
                <div className="text-2xl font-bold">$ 24,350</div>
                <div className="text-green-400 text-sm mt-2">+12.5%</div>
              </div>
              <div className="wallet-card glass-card p-6">
                <div className="text-sm text-textMuted mb-2">Withdrawn</div>
                <div className="text-2xl font-bold">$ 8,920</div>
                <div className="text-red-400 text-sm mt-2">-3.2%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}