import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import sustainabilityData from '../content/config/sustainability.json';
import { MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';

interface SustainabilityPageProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <div className="pt-20 pb-24 bg-[#F5F0E6]">
      {/* Hero Header */}
      <div className="bg-[#173D35] text-[#F5F0E6] py-14 sm:py-18 relative overflow-hidden border-b border-[#F5F0E6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-7 bg-[#D97845]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E89A6F]">
              Production Clusters & Regional Hubs
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight max-w-3xl leading-[1.15] text-[#F5F0E6]">
            Our Sourcing Ecosystem
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#F5F0E6]/80 max-w-2xl leading-relaxed">
            {sustainabilityData.heroSummary}
          </p>
        </div>
      </div>

      {/* Sourcing Hubs Highlight */}
      <div className="bg-white border-b border-[#173D35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#173D35] text-[#F5F0E6] border border-[#173D35] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845] to-transparent" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-[#E89A6F] text-[11px] font-semibold tracking-[0.18em] uppercase">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Multi-Market Cluster Network</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-serif font-medium leading-[1.2] text-[#F5F0E6]">
                  Consolidated Sourcing Across Surat, Varanasi, Jaipur & Beyond
                </h2>
                <p className="text-sm sm:text-base text-[#F5F0E6]/80 leading-relaxed">
                  {sustainabilityData.waterStewardship.summary}
                </p>
                <div className="grid grid-cols-2 gap-6 pt-5 border-t border-[#F5F0E6]/15">
                  <div>
                    <span className="text-xs text-[#F5F0E6]/65 block mb-1">Primary Regional Hubs</span>
                    <span className="text-3xl font-serif font-medium text-[#E89A6F]">
                      6+ Centres
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-[#F5F0E6]/65 block mb-1">Supplier Coordination</span>
                    <span className="text-3xl font-serif font-medium text-[#E89A6F]">
                      Direct Factory Link
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-[#F5F0E6]/15 shadow-md">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80"
                    alt="Textile Sourcing Hubs"
                    fallbackTitle="Regional Textile Production Market"
                    className="w-full h-72 sm:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Specializations Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <SectionHeading
          kicker="Regional Specializations"
          heading="Distinct Craft, Weaving & Manufacturing Strengths by Hub"
          lead="Every regional production market offers unique category advantages, specialized fabrics, and competitive volume pricing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {sustainabilityData.keyPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="card-3d rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845]/70 to-transparent" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D97845] px-3 py-1 bg-[#D97845]/10 rounded-md border border-[#D97845]/20">
                    {pillar.targetYear}
                  </span>
                  <span className="text-2xl sm:text-3xl font-serif font-medium text-[#173D35] group-hover:text-[#D97845] transition-colors">
                    {pillar.metric}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-medium text-[#173D35] mb-3 group-hover:text-[#D97845] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#173D35]/75 leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <div className="space-y-2 pt-5 border-t border-[#173D35]/10">
                  <span className="text-[10px] font-semibold text-[#173D35]/60 uppercase tracking-wider block">Sourcing Services:</span>
                  <ul className="space-y-2 text-sm text-[#173D35]/80">
                    {pillar.initiatives.map((init, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D97845] shrink-0 mt-1" />
                        <span>{init}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
