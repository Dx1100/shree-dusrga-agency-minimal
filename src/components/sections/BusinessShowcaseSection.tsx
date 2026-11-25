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

const categoryMeta: Record<
  string,
  { displayTitle?: string; subtitle: string }
> = {
  menswear: {
    subtitle: 'Sherwanis · Kurtas · Suits · Denim',
  },
  womenswear: {
    subtitle: 'Sarees · Lehengas · Suits · Kurtis',
  },
  kidswear: {
    subtitle: 'Ethnic Sets · Frocks · Daily Casuals',
  },
  'home-textiles': {
    subtitle: 'Bedsheets · Towels · Comforters',
  },
  'fabrics-fashion-accessories': {
    displayTitle: 'Fabrics & Accessories',
    subtitle: 'Prints · Wallets · Belts · Luggage',
  },
};

export const BusinessShowcaseSection: React.FC<BusinessShowcaseSectionProps> = ({
  kicker,
  heading,
  subheading,
  viewAllText,
  onNavigate,
}) => {
  return (
    <section className="py-14 sm:py-18 bg-[#F5F0E6] border-b border-[#173D35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <SectionHeading
            kicker={kicker}
            heading={heading}
            lead={subheading}
            className="mb-0"
          />
          <button
            onClick={() => onNavigate('/what-we-source')}
            className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#173D35] hover:text-[#D97845] transition-colors pb-1 group whitespace-nowrap shrink-0 border-b border-transparent hover:border-[#D97845]"
          >
            <span>{viewAllText}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D97845] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 5-Column Luxury Editorial Square Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
          {businessesData.map((biz) => {
            const meta = categoryMeta[biz.slug] || {
              subtitle: biz.metrics[0]?.value || '',
            };
            const title = meta.displayTitle || biz.title;

            return (
              <div
                key={biz.id}
                onClick={() => onNavigate(`/what-we-source/${biz.slug}`)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 bg-[#173D35] flex flex-col justify-end p-4 sm:p-5 last:col-span-2 sm:last:col-span-1 lg:last:col-span-1 border border-[#173D35]/10"
              >
                {/* Full-Bleed Background Image with Micro Zoom */}
                <ImageWithFallback
                  src={biz.image}
                  alt={biz.title}
                  fallbackTitle={biz.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Deep Forest Scrim Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102B25] via-[#102B25]/50 to-black/25 group-hover:via-[#102B25]/60 transition-colors duration-500" />

                {/* Terracotta Top Accent Glow */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Bottom Content: Title & Curated 1-Line Items */}
                <div className="relative z-10 space-y-1">
                  <h3 className="font-serif text-lg sm:text-xl lg:text-xl text-white font-normal tracking-wide group-hover:text-[#E89A6F] transition-colors leading-snug">
                    {title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#F5F0E6]/75 font-normal line-clamp-1 leading-normal">
                    {meta.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
          <button
            onClick={() => onNavigate('/what-we-source')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D97845]"
          >
            <span>{viewAllText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
