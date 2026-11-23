import React from 'react';
import { StatItem } from '../../types/content';
import { StatCounter } from '../ui/StatCounter';

interface StatisticsSectionProps {
  heading: string;
  subheading: string;
  items: StatItem[];
}

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  heading,
  subheading,
  items,
}) => {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#173D35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="w-6 h-[1.5px] bg-[#D97845]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D97845]">
              Proven Track Record
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#173D35] leading-[1.16]">
            {heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#173D35]/75 font-normal leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* 3D Highlighted Authority Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {items.map((stat) => (
            <div
              key={stat.id}
              className="card-3d-emerald rounded-2xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle 3D Top Bevel Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845]/75 to-transparent" />

              <div>
                <div className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#173D35] tracking-tight mb-2.5 group-hover:text-[#D97845] transition-colors whitespace-nowrap">
                  <StatCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <h3 className="font-sans text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] text-[#D97845] leading-snug">
                  {stat.label}
                </h3>
              </div>

              <div className="pt-4 mt-5 border-t border-[#173D35]/10">
                <p className="text-xs sm:text-[13px] text-[#173D35]/75 font-normal leading-relaxed">
                  {stat.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
