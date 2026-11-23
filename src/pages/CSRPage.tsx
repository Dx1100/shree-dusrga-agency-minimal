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
    <div className="pt-20 pb-24 bg-[#F5F0E6]">
      {/* Hero Header */}
      <div className="bg-[#173D35] text-[#F5F0E6] py-14 sm:py-18 relative overflow-hidden border-b border-[#F5F0E6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-7 bg-[#D97845]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E89A6F]">
              Artisan & Handloom Cluster Initiatives
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight max-w-3xl leading-[1.15] text-[#F5F0E6]">
            {csrData.headline}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#F5F0E6]/80 max-w-2xl leading-relaxed">
            {csrData.description}
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl pt-8 border-t border-[#F5F0E6]/15">
            <div>
              <span className="text-3xl sm:text-4xl font-serif font-medium text-[#E89A6F] block mb-1">
                {csrData.livesImpacted}
              </span>
              <span className="text-xs text-[#F5F0E6]/70 font-semibold uppercase tracking-wider">Artisan Looms Linked</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-serif font-medium text-[#E89A6F] block mb-1">
                {csrData.villagesCovered}
              </span>
              <span className="text-xs text-[#F5F0E6]/70 font-semibold uppercase tracking-wider">Cluster Villages Engaged</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-serif font-medium text-[#E89A6F] block mb-1">
                {csrData.schoolsSupported}
              </span>
              <span className="text-xs text-[#F5F0E6]/70 font-semibold uppercase tracking-wider">Weaver Collectives Supported</span>
            </div>
          </div>
        </div>
      </div>

      {/* Initiatives */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <SectionHeading
          kicker="Core Initiatives"
          heading="Sustaining Heritage Crafts Through Transparent Market Linkages"
          lead="Direct collaboration with master weavers, block carvers, and embroidery units across India."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {csrData.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="card-3d p-8 sm:p-9 rounded-2xl flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Top Specular Bevel Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845]/70 to-transparent" />
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D97845] block mb-2">
                  {pillar.impact}
                </span>
                <h3 className="text-xl font-serif font-medium text-[#173D35] mb-3 group-hover:text-[#D97845] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#173D35]/75 leading-relaxed mb-6">
                  {pillar.summary}
                </p>
                <div className="space-y-2 pt-4 border-t border-[#173D35]/10">
                  <span className="text-[11px] font-semibold text-[#173D35]/60 uppercase tracking-wider block">Key Actions:</span>
                  <ul className="space-y-2 text-sm text-[#173D35]/80">
                    {pillar.programs.map((prog, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D97845] shrink-0 mt-1" />
                        <span>{prog}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 card-3d-dark p-8 sm:p-12 rounded-3xl text-[#F5F0E6] relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845] to-transparent" />
          <div className="relative z-10">
            <h3 className="text-2xl font-serif font-medium text-[#F5F0E6]">Partner With Our Artisan Cluster Network</h3>
            <p className="text-sm text-[#F5F0E6]/80 mt-2 max-w-xl leading-relaxed">
              We collaborate with boutique owners, showroom buyers, and ethical craft foundations to bring authentic handlooms to organized retail.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="relative z-10 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] bg-[#D97845] hover:bg-[#C26534] text-white rounded-xl transition-all shadow-lg hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            Inquire About Cluster Initiatives
          </button>
        </div>
      </div>
    </div>
  );
};
