import React, { useEffect, useState, useRef } from 'react';
import { StatItem } from '../../types/content';
import { StatCounter } from '../ui/StatCounter';

interface StatisticsSectionProps {
  heading: string;
  subheading: string;
  items: StatItem[];
}

// Visual meter completion percentage for each stat metric
const metricRatios: Record<string, number> = {
  'stat-1': 98.4,
  'stat-2': 100,
  'stat-3': 92,
  'stat-4': 96,
};

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  heading,
  subheading,
  items,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-[#173D35]/10 overflow-hidden"
    >
      {/* Subtle Ambient Light Orbs */}
      <div
        className="pointer-events-none absolute -top-32 right-0 w-96 h-96 rounded-full bg-[#D97845]/[0.04] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-0 w-96 h-96 rounded-full bg-[#173D35]/[0.04] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Section Header */}
        <div
          className={`mb-12 sm:mb-16 max-w-3xl transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Live Radar Beacon Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#173D35]/5 border border-[#173D35]/10 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97845] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D97845]" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#173D35]">
              Proven Track Record · Real-Time Metrics
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#173D35] leading-[1.16]">
            {heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#173D35]/75 font-normal leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* 4-Column Staggered Kinetic Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {items.map((stat, idx) => {
            const fillPercent = metricRatios[stat.id] || 90;
            // Stagger transition delays
            const delayStyle = {
              transitionDelay: `${idx * 120}ms`,
            };

            return (
              <div
                key={stat.id}
                style={delayStyle}
                className={`card-3d-emerald rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(23,61,53,0.15)] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Kinetic Top Hairline Glow that Sweeps on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845]/60 to-transparent group-hover:via-[#D97845] transition-all duration-500" />

                {/* Subtle Luxury Number Watermark in Background */}
                <span
                  className="font-serif text-7xl font-normal text-[#173D35]/[0.035] group-hover:text-[#D97845]/[0.08] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 pointer-events-none select-none absolute bottom-3 right-4 leading-none"
                  aria-hidden="true"
                >
                  0{idx + 1}
                </span>

                <div className="relative z-10">
                  {/* Metric Value */}
                  <div className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#173D35] tracking-tight mb-2 group-hover:text-[#D97845] transition-colors whitespace-nowrap leading-none">
                    <StatCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      durationMs={1800}
                    />
                  </div>

                  {/* Kinetic Fill Meter Rail */}
                  <div className="w-full h-[3px] bg-[#173D35]/10 rounded-full my-3.5 relative overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#173D35] via-[#D97845] to-[#D97845] rounded-full transition-all duration-[1800ms] ease-out relative"
                      style={{
                        width: isVisible ? `${fillPercent}%` : '0%',
                        transitionDelay: `${idx * 150 + 200}ms`,
                      }}
                    >
                      {/* Glowing dot on leading edge */}
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#D97845] shadow-[0_0_6px_#D97845]" />
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="font-sans text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] text-[#D97845] leading-snug">
                    {stat.label}
                  </h3>
                </div>

                {/* Sublabel with Divider */}
                <div className="relative z-10 pt-4 mt-5 border-t border-[#173D35]/10">
                  <p className="text-xs sm:text-[13px] text-[#173D35]/75 font-normal leading-relaxed">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
