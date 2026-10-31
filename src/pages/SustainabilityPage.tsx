import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import sustainabilityData from '../content/config/sustainability.json';
import { Droplets, Sun, Shield, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';

interface SustainabilityPageProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">
            Environmental Stewardship & Circularity
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Engineering for Ecological Regeneration at Industrial Scale
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            {sustainabilityData.heroSummary}
          </p>
        </div>
      </div>

      {/* Water Neutrality Highlight */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden mb-24">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-400/20 text-cyan-300 rounded-full text-xs font-bold uppercase tracking-wider">
                <Droplets className="w-3.5 h-3.5" />
                <span>Zero Liquid Discharge (ZLD) Leadership</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                75 Million Liters of Industrial Wastewater Reclaimed Daily
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {sustainabilityData.waterStewardship.summary}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">Treated & Recycled</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono">
                    {sustainabilityData.waterStewardship.recyclingRate}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">Active Turnkey Plants</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono">
                    {sustainabilityData.waterStewardship.zeroLiquidDischargePlants} Installations
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
                  alt="Industrial Water Filtration"
                  fallbackTitle="ZLD Membrane Recovery Complex"
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars */}
        <SectionHeading
          kicker="Four Strategic Pillars"
          heading="Measurable Commitments Validated by Third Parties"
          lead="Aligning manufacturing operations with the Science Based Targets initiative (SBTi)."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {sustainabilityData.keyPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-900/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                    {pillar.targetYear}
                  </span>
                  <span className="text-2xl font-extrabold text-slate-900 font-mono">
                    {pillar.metric}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <div className="space-y-2 pt-4 border-t border-slate-200">
                  <span className="text-xs font-semibold text-slate-700 block">Key Initiatives:</span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {pillar.initiatives.map((init, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-900 shrink-0 mt-0.5" />
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
