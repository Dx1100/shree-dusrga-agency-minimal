import React, { useEffect, useState, useRef } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRight, Store, Sparkles, Building2, Globe, CheckCircle2 } from 'lucide-react';
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-20 bg-white border-b border-[#173D35]/10 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Culture Points (Slides in from Left) */}
          <div
            className={`lg:col-span-7 space-y-6 transition-all duration-1100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8 sm:-translate-x-12'
            }`}
          >
            <SectionHeading
              kicker={kicker}
              heading={heading}
              lead={description}
              className="mb-8"
            />

            {/* 4 Pointers Highlighted Background Card */}
            <div className="relative rounded-2xl overflow-hidden p-5 sm:p-6 bg-gradient-to-br from-[#FCFAF6] via-[#F7F2E8] to-[#EFE7D8] border border-[#173D35]/14 shadow-[0_8px_25px_-5px_rgba(23,61,53,0.08)] group my-2">
              {/* Subtle Textile Texture Backdrop */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Terracotta Gradient Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#D97845] to-transparent" />

              {/* Card Header Strip */}
              <div className="relative z-10 flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#173D35]/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97845] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D97845]" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D97845]">
                    Core Partner Segments
                  </span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#173D35]/65 bg-[#173D35]/5 px-2.5 py-0.5 rounded-full border border-[#173D35]/10">
                  4 Business Categories
                </span>
              </div>

              {/* 4 Pointers Grid */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {culturePoints.map((point, idx) => {
                  const parts = point.split(':');
                  const title = parts.length > 1 ? parts[0].trim() : point;
                  const desc = parts.length > 1 ? parts.slice(1).join(':').trim() : '';
                  const Icon = [Store, Sparkles, Building2, Globe][idx % 4] || CheckCircle2;

                  return (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-xl bg-white/95 border border-[#173D35]/10 hover:border-[#D97845]/50 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group/item flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className="w-7 h-7 rounded-lg bg-[#D97845]/10 text-[#D97845] flex items-center justify-center shrink-0 group-hover/item:bg-[#D97845] group-hover/item:text-white transition-colors duration-200">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <h4 className="font-serif text-sm sm:text-[15px] font-semibold text-[#173D35] group-hover/item:text-[#D97845] transition-colors leading-snug">
                            {title}
                          </h4>
                        </div>
                        {desc && (
                          <p className="text-xs text-[#173D35]/75 font-normal leading-relaxed">
                            {desc}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
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

          {/* Right Highlights: Customer Segments 3D Card (Slides in from Right) */}
          <div
            className={`lg:col-span-5 card-3d-emerald rounded-3xl p-8 sm:p-10 relative overflow-hidden group transition-all duration-1100 ease-[cubic-bezier(0.22,1,0.36,1)] delay-150 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8 sm:translate-x-12'
            }`}
          >
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
