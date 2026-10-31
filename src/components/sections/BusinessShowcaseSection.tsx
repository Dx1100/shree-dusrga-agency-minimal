import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import businessesData from '../../content/config/businesses.json';

interface BusinessShowcaseSectionProps {
  kicker: string;
  heading: string;
  subheading: string;
  viewAllText: string;
  onNavigate: (path: string) => void;
}

export const BusinessShowcaseSection: React.FC<BusinessShowcaseSectionProps> = ({
  kicker,
  heading,
  subheading,
  viewAllText,
  onNavigate,
}) => {
  return (
    <section className="py-24 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeading
            kicker={kicker}
            heading={heading}
            lead={subheading}
            className="mb-0"
          />
          <button
            onClick={() => onNavigate('/businesses')}
            className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 hover:text-[#9b111e] transition-colors pb-2 group whitespace-nowrap"
          >
            <span>{viewAllText}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Minimalist Editorial Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {businessesData.map((biz) => (
            <div
              key={biz.id}
              onClick={() => onNavigate(`/businesses/${biz.slug}`)}
              className="group cursor-pointer flex flex-col justify-between transition-all"
            >
              <div>
                {/* Image Container with smooth hover zoom */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-100 mb-5">
                  <ImageWithFallback
                    src={biz.image}
                    alt={biz.title}
                    fallbackTitle={biz.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b111e] shadow-xs">
                    {biz.category}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-normal text-slate-950 tracking-tight leading-snug group-hover:text-[#9b111e] transition-colors break-normal">
                    {biz.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal break-normal">
                    {biz.summary}
                  </p>

                  {/* Benchmark Metrics Strip */}
                  <div className="pt-4 mt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                    {biz.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx}>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">
                          {m.label}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-900 font-mono">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Minimal text link */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 group-hover:text-[#9b111e] transition-colors">
                <span>View Portfolio & Specs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button
            onClick={() => onNavigate('/businesses')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9b111e]"
          >
            <span>{viewAllText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
