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
    <section className="py-14 sm:py-20 bg-white border-b border-[#173D35]/10">
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
                  <span className="w-2 h-2 rounded-full bg-[#D97845] shrink-0 mt-2" />
                  <span className="text-sm sm:text-[15px] text-[#173D35]/85 font-normal leading-relaxed break-normal">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate('/who-we-serve')}
                className="px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] bg-[#D97845] hover:bg-[#C26534] text-white rounded-lg shadow-xs transition-colors"
              >
                Explore Customer Segments ({careersData.jobOpenings.length})
              </button>
            </div>
          </div>

          {/* Right Highlights: Customer Segments 3D Card */}
          <div className="lg:col-span-5 card-3d-emerald rounded-3xl p-8 sm:p-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845]/75 to-transparent" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D97845] block mb-6 px-3 py-1 bg-[#F5F0E6] rounded-md border border-[#D97845]/25 w-fit">
              Who We Partner With
            </span>
            <div className="space-y-4">
              {careersData.jobOpenings.slice(0, 3).map((job) => (
                <div
                  key={job.id}
                  onClick={() => onNavigate('/who-we-serve')}
                  className="p-4 rounded-xl bg-white border border-[#173D35]/12 shadow-xs hover:border-[#D97845]/60 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group/item"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D97845] font-semibold block mb-1">
                    {job.department} · {job.type}
                  </span>
                  <h4 className="font-serif text-lg font-normal text-[#173D35] group-hover/item:text-[#D97845] transition-colors break-normal leading-snug">
                    {job.title}
                  </h4>
                  <span className="text-xs text-[#173D35]/65 block mt-1 font-normal">
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
