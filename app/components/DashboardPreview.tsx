'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DashboardPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.dashboard-content', {
        opacity: 0,
        x: -60,
        duration: 1,
        scrollTrigger: {
          trigger: '.dashboard-content',
          start: 'top 70%',
        },
      });

      gsap.from('.dashboard-card', {
        opacity: 0,
        x: 60,
        duration: 1,
        scrollTrigger: {
          trigger: '.dashboard-card',
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Portfolio Value',
        data: [30000, 35000, 32000, 42000, 45000, 48000],
        borderColor: '#FF6A00',
        backgroundColor: 'rgba(255, 106, 0, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#FF6A00',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(10, 10, 10, 0.9)',
        titleColor: '#FFFFFF',
        bodyColor: '#B5B5B5',
        borderColor: '#FF6A00',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: '#B5B5B5',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: '#B5B5B5',
        },
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="dashboard-content space-y-6">
            <div className="inline-block glass-card px-4 py-2 text-primary text-sm font-semibold">
              Analytics Dashboard
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Experience Crypto
              <br />
              Trade easy
            </h2>
            <p className="text-textMuted text-lg">
              Real-time analytics, advanced charting tools, and comprehensive market insights
              to help you make informed trading decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary text-white">Learn More</button>
              <button className="btn-outline text-white">View Demo</button>
            </div>
          </div>

          {/* Right Dashboard Card */}
          <div className="dashboard-card glass-card p-8 orange-glow">
            <div className="mb-6">
              <div className="text-3xl font-bold mb-2">$ 3,199,461.50</div>
              <div className="text-green-400 text-sm">+12.5% from last month</div>
            </div>
            <div className="h-64">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}