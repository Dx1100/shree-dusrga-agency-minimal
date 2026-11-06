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
    <div className="pt-24 pb-24 bg-[#FAF9F6]">
      {/* Hero Header */}
      <div className="bg-[#0B132B] text-white py-20 lg:py-28 relative overflow-hidden border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-400 block mb-3 font-mono">
            Sourcing Portfolio & Product Scope
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight max-w-3xl leading-tight text-stone-100">
            What We Source
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-300 max-w-3xl leading-relaxed font-light">
            Menswear, Womenswear, Kidswear, Home Textiles, Fabrics & Fashion Accessories. We connect retail showrooms, boutiques, wholesalers, and department chains directly with verified manufacturers across India's primary production corridors.
          </p>

          {/* Filter Bar with 3D buttons */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
                selectedFilter === 'all'
                  ? 'bg-white text-slate-950 shadow-md font-bold'
                  : 'bg-stone-900/90 text-stone-300 border border-stone-800 hover:bg-stone-800'
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
                    ? 'bg-white text-slate-950 shadow-md font-bold'
                    : 'bg-stone-900/90 text-stone-300 border border-stone-800 hover:bg-stone-800'
                }`}
              >
                {b.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Listing of 3D Highlighted Category Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {filteredBusinesses.map((biz) => (
            <div
              key={biz.id}
              className="card-3d rounded-3xl p-8 sm:p-12 relative overflow-hidden group grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Subtle 3D Top Bevel Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-600/50 to-transparent" />

              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-800 block px-3 py-1 bg-emerald-50 rounded-md border border-emerald-100/60 font-mono">
                    {biz.category}
                  </span>
                  <span className="text-xs text-stone-400 font-light">·</span>
                  <span className="text-xs text-stone-500 font-medium">
                    {biz.subcategories?.length || 0} Subcategories
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-950 group-hover:text-emerald-900 transition-colors tracking-tight leading-snug">
                  {biz.title}
                </h2>

                <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                  {biz.fullDescription}
                </p>

                {/* Sourcing Support Offered Callout (Highlighted with mild emerald wash) */}
                <div className="card-3d-emerald p-5 rounded-2xl relative overflow-hidden space-y-2">
                  <div className="flex items-center gap-2 text-emerald-900 text-xs font-semibold uppercase tracking-wider font-mono">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Sourcing Support Offered</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 font-light leading-relaxed">
                    {biz.sourcingSupport || biz.summary}
                  </p>
                </div>

                {/* Subcategories Tag Cloud */}
                {biz.subcategories && biz.subcategories.length > 0 && (
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 uppercase tracking-wider">
                      <Tag className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Subcategories Included:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {biz.subcategories.map((sub, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#FAF8F5] text-slate-800 border border-stone-200/80 shadow-xs"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Relevant Product Types */}
                {biz.productTypes && biz.productTypes.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider block">
                      Relevant Product Types:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600 font-light">
                      {biz.productTypes.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Mild color highlighted metrics strip */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/70 shadow-xs">
                  {biz.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="text-[10px] uppercase text-stone-500 block font-light">
                        {m.label}
                      </span>
                      <span className="text-sm sm:text-base font-serif font-normal text-slate-950 truncate block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate(`/what-we-source/${biz.slug}`)}
                    className="px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl shadow-xs transition-colors inline-flex items-center gap-2 group/btn"
                  >
                    <span>{biz.title} Sourcing Guide & Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={onOpenInquiry}
                    className="text-xs font-medium uppercase tracking-wider text-stone-700 hover:text-emerald-800 transition-colors"
                  >
                    Request Sourcing Enquiry
                  </button>
                </div>
              </div>

              {/* Right Column: High Quality Image */}
              <div className="lg:col-span-5 sticky top-28">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-100">
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
