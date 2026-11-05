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
    <section className="py-24 sm:py-28 bg-white border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 sm:mb-20 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="w-5 h-[1px] bg-emerald-700/70" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-800">
              Operational Benchmarks
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-slate-950 leading-[1.16]">
            {heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-stone-600 font-light leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* 3D Highlighted Statistics Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-7">
          {items.map((stat, idx) => (
            <div
              key={stat.id}
              className="card-3d-emerald rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle 3D Top Bevel Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
              
              <div>
                <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-emerald-800/80 block mb-2 font-mono">
                  Metric 0{idx + 1}
                </span>
                <div className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal text-slate-950 tracking-tight mb-2 group-hover:text-emerald-900 transition-colors">
                  <StatCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <h3 className="text-xs sm:text-[13px] font-medium uppercase tracking-[0.16em] text-slate-800 leading-snug">
                  {stat.label}
                </h3>
              </div>
              
              <div className="pt-4 mt-4 border-t border-stone-200/60">
                <p className="text-[11px] sm:text-xs text-stone-500 font-light leading-relaxed">
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
