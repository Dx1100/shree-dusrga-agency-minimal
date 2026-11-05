import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRight } from 'lucide-react';
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
    <section className="py-24 sm:py-32 bg-[#FAF9F6] border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              kicker={kicker}
              heading={heading}
              lead={description}
              className="mb-8"
            />

            <div className="space-y-4 pt-2">
              {culturePoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0 mt-2" />
                  <span className="text-sm sm:text-[15px] text-stone-700 font-light leading-relaxed break-normal">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate('/careers')}
                className="px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
              >
                Explore Customer Segments ({careersData.jobOpenings.length})
              </button>
            </div>
          </div>

          {/* Right Highlights: Customer Segments 3D Card */}
          <div className="lg:col-span-5 card-3d-emerald rounded-3xl p-8 sm:p-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-600/50 to-transparent" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-800 block mb-6 px-3 py-1 bg-emerald-50/80 rounded-md border border-emerald-100/60 w-fit">
              Who We Partner With
            </span>
            <div className="space-y-4">
              {careersData.jobOpenings.slice(0, 3).map((job) => (
                <div
                  key={job.id}
                  onClick={() => onNavigate('/careers')}
                  className="p-4 rounded-xl bg-white/90 border border-stone-200/80 shadow-xs hover:border-emerald-600/40 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group/item"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-800 font-semibold block mb-1">
                    {job.department} · {job.type}
                  </span>
                  <h4 className="font-serif text-lg font-normal text-slate-950 group-hover/item:text-emerald-900 transition-colors break-normal leading-snug">
                    {job.title}
                  </h4>
                  <span className="text-xs text-stone-500 block mt-1 font-light">
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
