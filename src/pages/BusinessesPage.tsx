import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import businessesData from '../content/config/businesses.json';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-400 block mb-3">
            What We Source
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight max-w-3xl leading-tight text-stone-100">
            Comprehensive Textile Sourcing Across Five Core Categories
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed font-light">
            Helping retailers, showrooms, boutiques, and wholesalers source high-quality sarees, suit sets, bridal lehengas, running fabrics, and traditional handlooms directly from specialized production clusters.
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
                {b.title.split('&')[0]}
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
              className="card-3d rounded-3xl p-8 sm:p-12 relative overflow-hidden group grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Subtle 3D Top Bevel Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-600/50 to-transparent" />

              <div className="lg:col-span-6 space-y-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-800 block px-3 py-1 bg-emerald-50 rounded-md border border-emerald-100/60 w-fit">
                  {biz.category}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-950 group-hover:text-emerald-900 transition-colors tracking-tight leading-snug">
                  {biz.title}
                </h2>
                <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                  {biz.fullDescription}
                </p>

                {/* Mild color highlighted metrics strip */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/70 shadow-xs">
                  {biz.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="text-[10px] uppercase text-stone-500 block font-light">
                        {m.label}
                      </span>
                      <span className="text-base sm:text-lg font-serif font-normal text-slate-950">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Offerings list */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider block">
                    Product Range & Fabrics:
                  </span>
                  <ul className="space-y-1.5 text-xs text-stone-600 font-light">
                    {biz.keyOfferings.map((offering, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{offering}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate(`/businesses/${biz.slug}`)}
                    className="px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl shadow-xs transition-colors inline-flex items-center gap-2 group/btn"
                  >
                    <span>Category Guide & Case Study</span>
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

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-stone-200/80">
                  <ImageWithFallback
                    src={biz.image}
                    alt={biz.title}
                    fallbackTitle={biz.title}
                    className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
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
