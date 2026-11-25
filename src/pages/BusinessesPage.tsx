import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import businessesData from '../content/config/businesses.json';
import { ArrowRight, CheckCircle2, Layers, ShieldCheck, Tag } from 'lucide-react';

interface BusinessesPageProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
}

export const BusinessesPage: React.FC<BusinessesPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredBusinesses = selectedFilter === 'all'
    ? businessesData
    : businessesData.filter((b) => b.slug === selectedFilter);

  return (
    <div className="pt-20 pb-24 bg-[#F5F0E6]">
      {/* Hero Header */}
      <div className="bg-[#173D35] text-[#F5F0E6] py-14 sm:py-18 relative overflow-hidden border-b border-[#F5F0E6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-7 bg-[#D97845]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E89A6F]">
              Sourcing Portfolio & Product Scope
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight max-w-3xl leading-tight text-[#F5F0E6]">
            What We Source
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#F5F0E6]/80 max-w-3xl leading-relaxed">
            Menswear, Womenswear, Kidswear, Home Textiles, Fabrics & Fashion Accessories. We connect retail showrooms, boutiques, wholesalers, and department chains directly with verified manufacturers across India's primary production corridors.
          </p>

          {/* Filter Bar */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
                selectedFilter === 'all'
                  ? 'bg-[#D97845] text-white shadow-md'
                  : 'bg-[#102B25] text-[#F5F0E6]/85 border border-[#F5F0E6]/15 hover:border-[#D97845]/60'
              }`}
            >
              All Categories ({businessesData.length})
            </button>
            {businessesData.map((b) => (
              <button
                key={b.slug}
                onClick={() => setSelectedFilter(b.slug)}
                className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
                  selectedFilter === b.slug
                    ? 'bg-[#D97845] text-white shadow-md'
                    : 'bg-[#102B25] text-[#F5F0E6]/85 border border-[#F5F0E6]/15 hover:border-[#D97845]/60'
                }`}
              >
                {b.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Listing of Category Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-12">
          {filteredBusinesses.map((biz) => (
            <div
              key={biz.id}
              className="card-3d rounded-3xl p-8 sm:p-12 relative overflow-hidden group grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Subtle Top Bevel Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845]/70 to-transparent" />

              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D97845] block px-3 py-1 bg-[#D97845]/10 rounded-md border border-[#D97845]/20">
                    {biz.category}
                  </span>
                  <span className="text-xs text-[#173D35]/40">·</span>
                  <span className="text-xs text-[#173D35]/70 font-semibold">
                    {biz.subcategories?.length || 0} Subcategories
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#173D35] group-hover:text-[#D97845] transition-colors tracking-tight leading-snug">
                  {biz.title}
                </h2>

                <p className="text-sm sm:text-base text-[#173D35]/75 leading-relaxed">
                  {biz.fullDescription}
                </p>

                {/* Sourcing Support Offered Callout */}
                <div className="p-5 rounded-2xl bg-[#F5F0E6] border border-[#173D35]/10 relative overflow-hidden space-y-2">
                  <div className="flex items-center gap-2 text-[#173D35] text-xs font-semibold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-[#D97845]" />
                    <span>Sourcing Support Offered</span>
                  </div>
                  <p className="text-sm text-[#173D35]/80 leading-relaxed">
                    {biz.sourcingSupport || biz.summary}
                  </p>
                </div>

                {/* Subcategories Tag Cloud */}
                {biz.subcategories && biz.subcategories.length > 0 && (
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#173D35] uppercase tracking-wider">
                      <Tag className="w-3.5 h-3.5 text-[#D97845]" />
                      <span>Subcategories Included:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {biz.subcategories.map((sub, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#F5F0E6]/80 text-[#173D35] border border-[#173D35]/12"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Relevant Product Types Highlight Card with Dynamic Category Background Image */}
                {biz.productTypes && biz.productTypes.length > 0 && (
                  <div className="relative rounded-2xl overflow-hidden border border-[#173D35]/20 shadow-lg bg-[#102B25] p-5 sm:p-6 text-[#F5F0E6] group/card">
                    {/* Background Image Layer with Luxury Dark Gradient Overlay */}
                    <div className="absolute inset-0 pointer-events-none">
                      <img
                        src={biz.image}
                        alt=""
                        className="w-full h-full object-cover object-center opacity-20 scale-105 group-hover/card:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#102B25]/95 via-[#102B25]/85 to-[#173D35]/90 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-radial from-transparent via-[#102B25]/50 to-[#102B25]/90" />
                    </div>

                    {/* Top Terracotta Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845] to-transparent" />

                    {/* Card Content */}
                    <div className="relative z-10 space-y-4">
                      {/* Header with Beacon & Count Pill */}
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97845] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D97845]" />
                          </span>
                          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E89A6F]">
                            Relevant Product Types
                          </span>
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#F5F0E6]/75 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15 backdrop-blur-xs">
                          {biz.productTypes.length} Core Lines
                        </span>
                      </div>

                      {/* Product Types Grid of Glassmorphic Micro-Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {biz.productTypes.map((pt, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/[0.07] hover:bg-white/[0.13] border border-white/10 hover:border-[#D97845]/40 transition-all duration-200 backdrop-blur-xs group/item"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D97845] shrink-0 mt-0.5 group-hover/item:text-[#E89A6F] transition-colors" />
                            <span className="text-xs sm:text-[13px] text-[#F5F0E6]/95 font-medium leading-snug">
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Highlights strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 p-4 rounded-xl bg-[#F5F0E6]/70 border border-[#173D35]/10">
                  {biz.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="text-[10px] uppercase font-semibold text-[#173D35]/60 block mb-0.5">
                        {m.label}
                      </span>
                      <span className="text-sm sm:text-base font-serif font-medium text-[#173D35] break-words block leading-snug">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <button
                    onClick={() => onNavigate(`/what-we-source/${biz.slug}`)}
                    className="w-full sm:w-auto px-5 sm:px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.15em] bg-[#D97845] hover:bg-[#C26534] text-white rounded-xl shadow-sm transition-colors inline-flex items-center justify-center gap-2 group/btn text-center"
                  >
                    <span>{biz.title} Sourcing Guide & Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform shrink-0" />
                  </button>
                  <button
                    onClick={onOpenInquiry}
                    className="text-xs font-semibold uppercase tracking-wider text-[#173D35] hover:text-[#D97845] transition-colors text-center py-2 sm:py-0"
                  >
                    Request Sourcing Enquiry
                  </button>
                </div>
              </div>

              {/* Right Column: High Quality Image */}
              <div className="lg:col-span-5 sticky top-28">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#173D35]/12 bg-[#F5F0E6]">
                  <ImageWithFallback
                    src={biz.image}
                    alt={biz.title}
                    fallbackTitle={biz.title}
                    className="w-full h-80 sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
