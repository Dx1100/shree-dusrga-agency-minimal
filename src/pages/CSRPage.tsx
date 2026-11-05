import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import csrData from '../content/config/csr.json';
import { Heart, Sparkles, Feather, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';

interface CSRPageProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
}

export const CSRPage: React.FC<CSRPageProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <div className="pt-24 pb-24 bg-[#FAF9F6]">
      {/* Hero Header */}
      <div className="bg-[#0B132B] text-white py-20 lg:py-28 relative overflow-hidden border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400 block mb-3">
            Artisan & Handloom Cluster Initiatives
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight max-w-3xl leading-[1.15] text-stone-100">
            {csrData.headline}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-300 font-light max-w-2xl leading-relaxed">
            {csrData.description}
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl pt-8 border-t border-stone-800">
            <div>
              <span className="text-3xl sm:text-4xl font-serif font-normal text-emerald-400 block mb-1">
                {csrData.livesImpacted}
              </span>
              <span className="text-xs text-stone-400 font-light uppercase tracking-wider">Artisan Looms Linked</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-serif font-normal text-emerald-400 block mb-1">
                {csrData.villagesCovered}
              </span>
              <span className="text-xs text-stone-400 font-light uppercase tracking-wider">Cluster Villages Engaged</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-serif font-normal text-emerald-400 block mb-1">
                {csrData.schoolsSupported}
              </span>
              <span className="text-xs text-stone-400 font-light uppercase tracking-wider">Weaver Collectives Supported</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          kicker="Core Initiatives"
          heading="Sustaining Heritage Crafts Through Transparent Market Linkages"
          lead="Direct collaboration with master weavers, block carvers, and embroidery units across India."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {csrData.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="card-3d-emerald p-8 sm:p-9 rounded-2xl flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Top Specular Bevel Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-800 block mb-2 font-mono">
                  {pillar.impact}
                </span>
                <h3 className="text-xl font-serif font-normal text-slate-950 mb-3 group-hover:text-emerald-900 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-6">
                  {pillar.summary}
                </p>
                <div className="space-y-2 pt-4 border-t border-emerald-950/10">
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">Key Actions:</span>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-600 font-light">
                    {pillar.programs.map((prog, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{prog}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 card-3d-dark p-8 sm:p-12 rounded-3xl text-white relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
          <div className="relative z-10">
            <h3 className="text-2xl font-serif font-normal text-stone-100">Partner With Our Artisan Cluster Network</h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light mt-2 max-w-xl leading-relaxed">
              We collaborate with boutique owners, showroom buyers, and ethical craft foundations to bring authentic handlooms to organized retail.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="relative z-10 px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            Inquire About Cluster Initiatives
          </button>
        </div>
      </div>
    </div>
  );
};
