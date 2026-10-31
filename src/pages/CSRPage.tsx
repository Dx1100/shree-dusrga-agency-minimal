import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import csrData from '../content/config/csr.json';
import { Heart, GraduationCap, Stethoscope, Scissors, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';

interface CSRPageProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
}

export const CSRPage: React.FC<CSRPageProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">
            Arvion Foundation (CSR)
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            {csrData.headline}
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            {csrData.description}
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-2xl pt-8 border-t border-slate-800">
            <div>
              <span className="text-3xl font-extrabold text-cyan-400 font-mono block">
                {csrData.livesImpacted}
              </span>
              <span className="text-xs text-slate-300">Lives Directly Touched</span>
            </div>
            <div>
              <span className="text-3xl font-extrabold text-cyan-400 font-mono block">
                {csrData.villagesCovered}
              </span>
              <span className="text-xs text-slate-300">Rural Villages Covered</span>
            </div>
            <div>
              <span className="text-3xl font-extrabold text-cyan-400 font-mono block">
                {csrData.schoolsSupported}
              </span>
              <span className="text-xs text-slate-300">Schools Modernized</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          kicker="Core Initiatives"
          heading="Grassroots Programs With Enduring Generational Impact"
          lead="Direct community collaboration ensuring long-term self-reliance."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {csrData.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-2 font-mono">
                  {pillar.impact}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {pillar.summary}
                </p>
                <div className="space-y-2 pt-4 border-t border-slate-200">
                  <span className="text-xs font-semibold text-slate-700 block">Key Actions:</span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {pillar.programs.map((prog, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-900 shrink-0 mt-0.5" />
                        <span>{prog}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-2xl bg-blue-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Partner With The Arvion Foundation</h3>
            <p className="text-xs text-blue-100 mt-1">
              We collaborate with multilateral institutions, NGOs, and university research fellows.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-white text-blue-950 rounded-md hover:bg-slate-100 transition-colors whitespace-nowrap"
          >
            Inquire About CSR Partnerships
          </button>
        </div>
      </div>
    </div>
  );
};
