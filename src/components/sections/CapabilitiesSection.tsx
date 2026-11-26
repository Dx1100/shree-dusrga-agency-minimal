import React, { useEffect, useState, useRef } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Layers, ShieldCheck, CheckCircle2, Globe2, ArrowRight } from 'lucide-react';

interface CapabilitiesSectionProps {
  kicker: string;
  heading: string;
  description: string;
  pillars: {
    title: string;
    description: string;
    stat: string;
  }[];
  onNavigate: (path: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  kicker,
  heading,
  description,
  pillars,
  onNavigate,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const icons = [Layers, ShieldCheck, CheckCircle2, Globe2];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25, rootMargin: '0px 0px -40px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-[#173D35] text-[#F5F0E6] relative overflow-hidden"
    >
      {/* Ambient background illumination orbs */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D97845]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#102B25]/80 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Section Header */}
        <div
          className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Live Pipeline Kicker Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97845] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D97845]" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E89A6F]">
              {kicker || 'Our Process'} · 4-Stage Sourcing Pipeline
            </span>
          </div>

          <SectionHeading
            heading={heading}
            lead={description}
            light={true}
            className="mb-8 sm:mb-12"
          />
        </div>

        {/* 4-Stage Kinetic Process Container */}
        <div className="relative pt-2">
          {/* Desktop Horizontal Loom Conduit Rail (Behind Cards) */}
          <div
            className="hidden lg:block absolute top-[52px] left-8 right-8 h-[3px] bg-white/10 z-0 pointer-events-none rounded-full overflow-hidden"
            aria-hidden="true"
          >
            {/* Glowing Terracotta Energy Beam with Continuous Moving Power Gradient & Traveling Laser Sweep */}
            <div
              className="h-full rounded-full transition-all duration-[1400ms] ease-out relative overflow-hidden"
              style={{
                width: isVisible ? '100%' : '0%',
              }}
            >
              {/* Base Continuous Live Gradient Flow & Pulsing Glow */}
              <div className="w-full h-full animate-live-power-rail" />

              {/* Sweeping High-Intensity Laser Pulse Packet */}
              <div
                className="absolute inset-y-0 w-36 bg-gradient-to-r from-transparent via-white to-transparent animate-laser-sweep opacity-95"
                style={{
                  boxShadow: '0 0 16px rgba(255, 255, 255, 0.9), 0 0 28px rgba(217, 120, 69, 0.9)',
                }}
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10">
            {pillars.map((pillar, idx) => {
              const Icon = icons[idx % icons.length];
              const delayStyle = {
                transitionDelay: `${idx * 140 + 80}ms`,
              };

              return (
                <div
                  key={idx}
                  style={delayStyle}
                  className={`card-3d-dark rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_22px_45px_-10px_rgba(10,28,24,0.7),0_0_24px_rgba(217,120,69,0.22)] ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }`}
                >
                  {/* Top Specular Hairline Light Catch */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845]/75 to-transparent group-hover:via-[#D97845] transition-all duration-500" />

                  <div>
                    {/* Header: Icon & Pulse Step Node */}
                    <div className="flex items-center justify-between mb-5">
                      {/* Icon with Hover Scale */}
                      <div className="w-12 h-12 rounded-xl bg-[#D97845]/15 border border-[#D97845]/35 flex items-center justify-center text-[#E89A6F] group-hover:scale-110 group-hover:bg-[#D97845]/25 group-hover:border-[#D97845] transition-all duration-300 shadow-sm">
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>

                      {/* Step Node with Pulsing Beacon */}
                      <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 group-hover:border-[#D97845]/45 group-hover:bg-[#D97845]/15 transition-all duration-300 shadow-xs">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97845] opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D97845]" />
                        </span>
                        <span className="text-[10.5px] font-mono font-semibold tracking-wider text-[#F5F0E6]/85 group-hover:text-white transition-colors">
                          STEP 0{idx + 1}
                        </span>
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F5F0E6] mb-2.5 tracking-tight group-hover:text-[#E89A6F] transition-colors leading-snug">
                      {pillar.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-[#F5F0E6]/80 font-normal leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom Protocol Strip */}
                  <div className="pt-3.5 border-t border-[#F5F0E6]/10 bg-[#F5F0E6]/[0.025] -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 px-6 sm:px-7 py-3 rounded-b-2xl flex items-center justify-between">
                    <span className="font-serif text-base sm:text-lg font-normal text-[#E89A6F] tracking-tight">
                      {pillar.stat}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#F5F0E6]/40 group-hover:text-[#D97845] transition-colors inline-flex items-center gap-1">
                      <span>Phase 0{idx + 1}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3D Elevated Quality Assurance Banner */}
        <div
          className={`mt-14 sm:mt-18 p-8 sm:p-10 rounded-2xl bg-[#102B25]/90 border border-[#F5F0E6]/15 shadow-[0_18px_40px_rgba(10,28,24,0.55),inset_0_1px_0_rgba(245,240,230,0.14)] flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-700 ease-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E89A6F]">
              End-to-End Sourcing Assurance
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#F5F0E6]">
              Seasonal Planning, Physical Sampling & Pre-Dispatch Lot Inspection
            </h4>
            <p className="text-xs sm:text-sm text-[#F5F0E6]/80 font-normal leading-relaxed">
              Every consignment is checked against approved physical swatches for fabric weight, finish, colour fastness, and stitching quality before release.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/our-process')}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] bg-[#D97845] hover:bg-[#C26534] text-white rounded-lg shadow-lg transition-all whitespace-nowrap shrink-0 hover:scale-105 active:scale-95"
          >
            <span>Explore Full Protocol</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
