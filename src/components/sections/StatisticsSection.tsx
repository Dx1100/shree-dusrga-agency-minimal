import React from 'react';
import { StatItem } from '../../types/content';
import { StatCounter } from '../ui/StatCounter';
import { SectionHeading } from '../ui/SectionHeading';

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
    <section className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 sm:mb-16 max-w-3xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9b111e] block mb-2">
            At A Glance
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-slate-950 leading-snug">
            {heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Minimalist Arvind-style Statistics Grid with subtle hairlines */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-8 lg:gap-x-12 divide-y md:divide-y-0 divide-slate-200/60">
          {items.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col justify-between ${
                idx > 1 ? 'pt-6 md:pt-0' : ''
              } ${idx > 0 ? 'lg:border-l lg:border-slate-200 lg:pl-8' : ''}`}
            >
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-950 tracking-tight mb-2">
                  <StatCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-slate-800 leading-snug">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-2 font-normal leading-relaxed">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
