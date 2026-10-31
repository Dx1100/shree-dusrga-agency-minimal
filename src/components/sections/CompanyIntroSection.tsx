import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface CompanyIntroSectionProps {
  kicker: string;
  heading: string;
  leadParagraph: string;
  secondaryParagraph: string;
  quote: string;
  quoteAuthor: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  onNavigate: (path: string) => void;
}

export const CompanyIntroSection: React.FC<CompanyIntroSectionProps> = ({
  kicker,
  heading,
  leadParagraph,
  secondaryParagraph,
  quote,
  quoteAuthor,
  image,
  ctaText,
  ctaLink,
  onNavigate,
}) => {
  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Minimal Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#9b111e]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9b111e]">
                {kicker}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal tracking-tight text-slate-950 leading-[1.18] break-normal">
              {heading}
            </h2>

            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed break-normal">
              {leadParagraph}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal break-normal">
              {secondaryParagraph}
            </p>

            {/* Minimalist Editorial Pull Quote with thin accent */}
            <div className="pt-4 pb-2 border-l-2 border-[#9b111e] pl-6 my-6 space-y-2">
              <blockquote className="text-base sm:text-lg italic font-serif text-slate-900 leading-relaxed">
                "{quote}"
              </blockquote>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                — {quoteAuthor}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate(ctaLink)}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 hover:text-[#9b111e] transition-colors group"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Image */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden bg-slate-100">
              <ImageWithFallback
                src={image}
                alt="Arvion Industrial Heritage"
                fallbackTitle="Arvion Manufacturing Complex"
                className="w-full h-80 sm:h-[460px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-widest text-slate-400 font-medium">
              <span>Naroda Industrial Estate</span>
              <span>Est. 1938</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
