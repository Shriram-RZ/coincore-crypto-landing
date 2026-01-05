'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-heading', {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: '.testimonial-heading',
          start: 'top 80%',
        },
      });

      gsap.from('.testimonial-card', {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.testimonial-grid',
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      name: 'David Martin',
      role: 'Crypto Trader',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'CoinCore has transformed my trading experience. The platform is intuitive and the execution speed is unmatched.',
    },
    {
      name: 'James Wilson',
      role: 'Investor',
      avatar: 'https://i.pravatar.cc/150?img=13',
      rating: 5,
      text: 'Best crypto platform I\'ve used. Low fees, great security, and excellent customer support.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Day Trader',
      avatar: 'https://i.pravatar.cc/150?img=45',
      rating: 5,
      text: 'The analytics tools are incredible. I can make better trading decisions with real-time data insights.',
    },
    {
      name: 'Robert Brown',
      role: 'Portfolio Manager',
      avatar: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      text: 'Professional-grade platform with institutional features. Perfect for managing large portfolios.',
    },
    {
      name: 'Michael Chen',
      role: 'Blockchain Dev',
      avatar: 'https://i.pravatar.cc/150?img=68',
      rating: 5,
      text: 'The API integration is seamless. Great for building automated trading strategies.',
    },
    {
      name: 'Alice Cooper',
      role: 'Crypto Enthusiast',
      avatar: 'https://i.pravatar.cc/150?img=47',
      rating: 5,
      text: 'User-friendly interface for beginners with advanced features for pros. Highly recommended!',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="testimonial-heading text-4xl md:text-5xl font-bold text-center mb-4">
          Our Client say
          <br />
          about us
        </h2>

        <div className="testimonial-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card glass-card glass-card-hover p-6 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-textMuted">{testimonial.role}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FF6A00" stroke="#FF6A00" />
                ))}
              </div>

              <p className="text-textMuted text-sm leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}