import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRight, Check } from 'lucide-react';
import careersData from '../../content/config/careers.json';

interface CareersSectionProps {
  kicker: string;
  heading: string;
  description: string;
  culturePoints: string[];
  onNavigate: (path: string) => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({
  kicker,
  heading,
  description,
  culturePoints,
  onNavigate,
}) => {
  return (
    <section className="py-24 sm:py-28 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              kicker={kicker}
              heading={heading}
              lead={description}
              className="mb-6"
            />

            <div className="space-y-3 pt-2">
              {culturePoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                  </span>
                  <span className="text-sm text-slate-700 leading-relaxed font-normal break-normal">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('/careers')}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
              >
                Explore Open Positions ({careersData.jobOpenings.length})
              </button>
            </div>
          </div>

          {/* Right Highlights: Minimal Opportunities List */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-slate-200/80">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b111e] block mb-4">
              Featured Opportunities
            </span>
            <div className="space-y-4 divide-y divide-slate-100">
              {careersData.jobOpenings.slice(0, 3).map((job, idx) => (
                <div
                  key={job.id}
                  onClick={() => onNavigate('/careers')}
                  className={`cursor-pointer group ${idx > 0 ? 'pt-4' : ''}`}
                >
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                    {job.department} · {job.type}
                  </span>
                  <h4 className="text-sm font-semibold text-slate-950 group-hover:text-[#9b111e] transition-colors break-normal leading-snug">
                    {job.title}
                  </h4>
                  <span className="text-xs text-slate-500 block mt-1 font-normal">
                    {job.location}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
