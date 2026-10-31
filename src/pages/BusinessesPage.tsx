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
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">
            Diversified Industrial Portfolios
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Engineering Excellence Across Critical Global Sectors
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            From extreme heat-shielding aerospace composites to ASME-stamped petrochemical reactors and zero-liquid-discharge water systems, explore our five core business verticals.
          </p>

          {/* Filter Bar */}
          <div className="mt-10 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-white text-slate-900'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All Businesses ({businessesData.length})
            </button>
            {businessesData.map((b) => (
              <button
                key={b.slug}
                onClick={() => setSelectedFilter(b.slug)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  selectedFilter === b.slug
                    ? 'bg-white text-slate-900'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {b.title.split('&')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Listing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {filteredBusinesses.map((biz, idx) => (
            <div
              key={biz.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:shadow-md transition-shadow ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-900 block">
                  {biz.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {biz.title}
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  {biz.fullDescription}
                </p>

                {/* Metrics strip */}
                <div className="grid grid-cols-3 gap-3 py-4 border-y border-slate-100">
                  {biz.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="text-[11px] text-slate-400 block font-medium">
                        {m.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Offerings list */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-700 block">
                    Core Capabilities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {biz.keyOfferings.map((offering, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-900 shrink-0 mt-0.5" />
                        <span>{offering}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => onNavigate(`/businesses/${biz.slug}`)}
                    className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-blue-900 text-white rounded-md hover:bg-blue-950 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span>Division Detail & Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={onOpenInquiry}
                    className="text-xs font-bold text-slate-700 hover:text-blue-900"
                  >
                    Request Technical RFQ
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                  <ImageWithFallback
                    src={biz.image}
                    alt={biz.title}
                    fallbackTitle={biz.title}
                    className="w-full h-80 sm:h-96 object-cover"
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
