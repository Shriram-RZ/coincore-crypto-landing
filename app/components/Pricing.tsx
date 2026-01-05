'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-heading', {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: '.pricing-heading',
          start: 'top 80%',
        },
      });

      gsap.from('.pricing-card', {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.pricing-grid',
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const plans = [
    {
      name: 'Basic',
      price: '$19,500',
      period: '/month',
      features: [
        'Basic trading features',
        'Up to $50k monthly volume',
        'Email support',
        '2FA Authentication',
        'Mobile app access',
      ],
      highlighted: false,
    },
    {
      name: 'Business',
      price: '$14,500',
      period: '/month',
      features: [
        'Advanced trading tools',
        'Unlimited trading volume',
        'Priority 24/7 support',
        'API access',
        'Advanced analytics',
        'Custom integrations',
      ],
      highlighted: true,
    },
    {
      name: 'Premium',
      price: '$18,500',
      period: '/month',
      features: [
        'All Business features',
        'Dedicated account manager',
        'Custom fee structure',
        'OTC trading desk',
        'White-label solution',
      ],
      highlighted: false,
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="pricing-heading text-4xl md:text-5xl font-bold text-center mb-16">
          Our Exclusive Plan
        </h2>

        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card glass-card p-8 ${
                plan.highlighted
                  ? 'orange-glow scale-105 md:scale-110'
                  : 'glass-card-hover'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-textMuted text-sm">{plan.period}</span>
                </div>
              </div>

              <button className="w-full btn-primary text-white mb-8">
                Get Started
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-textMuted text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}