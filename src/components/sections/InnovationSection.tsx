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
    <section className="py-24 sm:py-32 bg-[#FAF9F6] border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-8">
            <SectionHeading
              kicker={kicker}
              heading={heading}
              lead={description}
              className="mb-0"
            />
          </div>
          <div className="lg:col-span-4 flex gap-6 border-t lg:border-t-0 lg:border-l border-stone-200/80 pt-6 lg:pt-0 lg:pl-8">
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-stone-400 block mb-1">
                Cluster Network
              </span>
              <div className="font-serif text-2xl sm:text-3xl font-normal text-slate-950">
                {patentsCount}
              </div>
            </div>
            <div className="border-l border-stone-200/80 pl-6">
              <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-stone-400 block mb-1">
                Consulting Model
              </span>
              <div className="font-serif text-2xl sm:text-3xl font-normal text-slate-950">
                {rdSpendPercent}
              </div>
            </div>
          </div>
        </div>

        {/* 3D Highlighted Editorial Advisory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {innovations.map((item, idx) => (
            <div
              key={idx}
              className="card-3d-emerald rounded-2xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Subtle 3D Top Bevel Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-800 block mb-3.5 px-3 py-1 bg-emerald-50/80 rounded-md border border-emerald-100/60 w-fit">
                  {item.category}
                </span>
                <h3 className="font-serif text-2xl font-normal text-slate-950 mb-3.5 leading-snug tracking-tight group-hover:text-emerald-900 transition-colors break-normal">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed break-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200/60 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('/innovation')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 group-hover:text-emerald-800 transition-colors"
                >
                  <span>Process Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-emerald-800" />
                </button>
                <span className="text-xs font-mono text-stone-400">Step 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
