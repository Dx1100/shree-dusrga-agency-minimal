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
    <section className="py-24 sm:py-32 bg-white border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <SectionHeading
            kicker={kicker}
            heading={heading}
            lead={subheading}
            className="mb-0"
          />
          <button
            onClick={() => onNavigate('/businesses')}
            className="hidden md:inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 hover:text-emerald-800 transition-colors pb-2 group whitespace-nowrap"
          >
            <span>{viewAllText}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3D Highlighted Editorial Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {businessesData.map((biz) => (
            <div
              key={biz.id}
              onClick={() => onNavigate(`/businesses/${biz.slug}`)}
              className="card-3d rounded-2xl p-6 sm:p-7 group cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle 3D Top Bevel Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />

              <div>
                {/* Image Container with 3D inset shadow */}
                <div className="relative aspect-[16/11] overflow-hidden rounded-xl bg-stone-100 mb-6 border border-stone-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                  <ImageWithFallback
                    src={biz.image}
                    alt={biz.title}
                    fallbackTitle={biz.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-md text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-950 shadow-sm border border-stone-200/60">
                    {biz.category}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-normal text-slate-950 tracking-tight leading-snug group-hover:text-emerald-900 transition-colors break-normal">
                    {biz.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed break-normal">
                    {biz.summary}
                  </p>

                  {/* Mild color highlighted provenance strip */}
                  <div className="mt-4 p-3 rounded-xl bg-[#FAF8F5] border border-stone-200/70 flex items-center justify-between text-xs text-stone-600 font-light shadow-xs">
                    <span>{biz.metrics[0]?.label}: <strong className="font-medium text-slate-900">{biz.metrics[0]?.value}</strong></span>
                    <span>·</span>
                    <span>{biz.metrics[1]?.label}: <strong className="font-medium text-slate-900">{biz.metrics[1]?.value}</strong></span>
                  </div>
                </div>
              </div>

              {/* Action button styled with 3D tactile feel */}
              <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 group-hover:text-emerald-800 transition-colors">
                <span>View Category & Swatches</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-emerald-800" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center md:hidden">
          <button
            onClick={() => onNavigate('/businesses')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800"
          >
            <span>{viewAllText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
