import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRight } from 'lucide-react';

interface InnovationSectionProps {
  kicker: string;
  heading: string;
  description: string;
  patentsCount: string;
  rdSpendPercent: string;
  innovations: {
    title: string;
    category: string;
    description: string;
  }[];
  onNavigate: (path: string) => void;
}

export const InnovationSection: React.FC<InnovationSectionProps> = ({
  kicker,
  heading,
  description,
  patentsCount,
  rdSpendPercent,
  innovations,
  onNavigate,
}) => {
  return (
    <section className="py-24 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <SectionHeading
              kicker={kicker}
              heading={heading}
              lead={description}
              className="mb-0"
            />
          </div>
          <div className="lg:col-span-4 flex gap-6 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-8">
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 block mb-1">
                Intellectual Property
              </span>
              <div className="text-xl sm:text-2xl font-light text-slate-950 font-mono">
                {patentsCount}
              </div>
            </div>
            <div className="border-l border-slate-200 pl-6">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 block mb-1">
                R&D Reinvestment
              </span>
              <div className="text-xl sm:text-2xl font-light text-slate-950 font-mono">
                {rdSpendPercent}
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Innovations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {innovations.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-slate-50/70 border border-slate-200/60 hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b111e] block mb-3">
                  {item.category}
                </span>
                <h3 className="text-lg sm:text-xl font-normal text-slate-950 mb-3 leading-snug break-normal">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal break-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60">
                <button
                  onClick={() => onNavigate('/innovation')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 hover:text-[#9b111e] transition-colors"
                >
                  <span>Technical Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
