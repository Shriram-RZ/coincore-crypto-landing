'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-heading', {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: '.faq-heading',
          start: 'top 80%',
        },
      });

      gsap.from('.faq-item', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.faq-list',
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: 'What is CoinCore?',
      answer:
        'CoinCore is a next-generation cryptocurrency trading platform that offers lightning-fast transactions, multi-chain support, and institutional-grade security for traders of all levels.',
    },
    {
      question: 'How do I get started with cryptocurrency trading?',
      answer:
        'Simply create an account, complete the verification process, deposit funds, and start trading. Our intuitive interface makes it easy for beginners while offering advanced features for experienced traders.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept bank transfers, credit/debit cards, and various cryptocurrencies for deposits. Withdrawals can be made to your bank account or crypto wallet.',
    },
    {
      question: 'How secure is the platform?',
      answer:
        'We employ bank-grade security measures including multi-signature wallets, cold storage for the majority of funds, 2FA authentication, and regular security audits by third-party firms.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="faq-heading text-4xl md:text-5xl font-bold text-center mb-16">
          Frequently Asked
          <br />
          questions
        </h2>

        <div className="faq-list space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item glass-card transition-all duration-300 ${
                openIndex === index ? 'orange-glow' : ''
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-textMuted leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}