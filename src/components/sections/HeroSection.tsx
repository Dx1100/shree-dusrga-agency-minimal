import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { HeroSlide } from '../../types/content';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface HeroSectionProps {
  slides: HeroSlide[];
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  slides,
  onNavigate,
  onOpenInquiry,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 7500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentSlideIndex];

  return (
    <section
      className="relative min-h-[700px] lg:h-screen lg:min-h-[740px] lg:max-h-[1100px] flex flex-col justify-between pt-32 pb-10 sm:pb-14 bg-[#0A1D19] text-[#F5F0E6] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Cinematic Corporate Showcase"
    >
      {/* =========================================================================
          LAYER 1: BACK (Recessed Atmosphere, Environmental Wash & Depth Vignette)
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
            >
              <ImageWithFallback
                src={slide.desktopImage}
                alt={slide.heading}
                fallbackTitle={slide.heading}
                className="w-full h-full object-cover transition-transform duration-[10000ms] ease-out brightness-[0.72] contrast-[1.08]"
                style={{
                  transform: isActive ? 'scale(1.06) translateZ(0)' : 'scale(1.0) translateZ(0)',
                }}
              />
              {/* Radial gradient vignette: Darkens edges to push background deep into z-plane */}
              <div className="absolute inset-0 bg-radial-vignette opacity-80" />
              {/* Deep emerald-slate directional shadows */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1D19]/95 via-[#0D241F]/80 to-[#0A1D19]/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D19] via-transparent to-[#0A1D19]/60" />
              {/* Subtle ambient light glow orb in upper center */}
              <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#D97845]/15 rounded-full blur-[140px] pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          LAYER 2: MIDDLE (The Floating Content Stage / Doppelrand Enclosure)
          ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6 sm:py-8">
        <div className="max-w-3xl lg:max-w-4xl">
          {/* Double-Bezel Nested Architecture */}
          <div className="relative p-1.5 sm:p-2.5 rounded-[1.75rem] sm:rounded-[2.25rem] bg-white/[0.05] border border-white/[0.14] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.65)] backdrop-blur-2xl ring-1 ring-black/30">
            {/* Inner Core: Frosted Platter with Top Hairline Specular Highlight */}
            <div className="relative px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14 rounded-[calc(1.75rem-0.375rem)] sm:rounded-[calc(2.25rem-0.625rem)] bg-gradient-to-br from-[#102B25]/90 via-[#143730]/85 to-[#0B1E19]/95 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)] space-y-5 sm:space-y-6">
              
              {/* Eyebrow / Kicker Badge */}
              {currentSlide.kicker && (
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.15] shadow-inner backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#D97845] animate-pulse" />
                  <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#F5F0E6]/95">
                    {currentSlide.kicker}
                  </span>
                </div>
              )}

              {/* Main Heading */}
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.14] sm:leading-[1.1] drop-shadow-sm">
                {currentSlide.heading}
              </h1>

              {/* Description Body */}
              <p className="text-sm sm:text-base md:text-lg text-[#F5F0E6]/90 font-normal leading-relaxed max-w-2xl sm:max-w-3xl">
                {currentSlide.description}
              </p>

              {/* =========================================================================
                  LAYER 3: FRONT (Elevated Interactive Action Island & Nested CTA)
                  ========================================================================= */}
              <div className="pt-4 sm:pt-6 flex flex-wrap items-center gap-4 sm:gap-6">
                {/* Primary CTA: High-Elevation Pill with Nested Icon Pod */}
                <button
                  onClick={() => {
                    if (currentSlide.ctaLink.startsWith('/')) {
                      onNavigate(currentSlide.ctaLink);
                    } else {
                      onOpenInquiry();
                    }
                  }}
                  className="group relative pl-6 pr-2.5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] bg-gradient-to-r from-[#D97845] to-[#E28856] hover:from-[#C46736] hover:to-[#D97845] text-white rounded-full transition-all duration-300 inline-flex items-center gap-3.5 shadow-[0_12px_28px_rgba(217,120,69,0.38)] hover:shadow-[0_16px_36px_rgba(217,120,69,0.55)] active:scale-[0.98] border border-amber-200/30"
                >
                  <span className="translate-y-[0.5px]">{currentSlide.ctaText}</span>
                  {/* Button-in-Button Nested Circular Trailing Icon Pod */}
                  <span className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-[#C46736] group-hover:translate-x-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
                    <ArrowRight className="w-3.5 h-3.5 transition-colors" />
                  </span>
                </button>

                {/* Secondary CTA: Frosted Glass Capsule */}
                {currentSlide.secondaryCtaText && (
                  <button
                    onClick={() => {
                      if (currentSlide.secondaryCtaLink) {
                        onNavigate(currentSlide.secondaryCtaLink);
                      }
                    }}
                    className="px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#F5F0E6]/90 hover:text-white rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.1] hover:border-white/30 backdrop-blur-md transition-all duration-300 shadow-sm active:scale-[0.98]"
                  >
                    {currentSlide.secondaryCtaText}
                  </button>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM BAR: Elevated Floating Glass Dock
          ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        {/* Floating Slide Counter Dock */}
        <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-black/30 border border-white/10 backdrop-blur-xl shadow-lg">
          <span className="text-xs font-semibold tracking-widest text-[#F5F0E6]/90">
            0{currentSlideIndex + 1} <span className="text-[#F5F0E6]/45">/ 0{slides.length}</span>
          </span>

          <div className="w-16 sm:w-28 h-[2px] bg-white/15 relative overflow-hidden rounded-full">
            <div
              className="absolute top-0 bottom-0 left-0 bg-[#D97845] transition-all duration-500 ease-out"
              style={{
                width: `${((currentSlideIndex + 1) / slides.length) * 100}%`,
              }}
            />
          </div>

          {/* Quick Dots */}
          <div className="hidden sm:flex items-center gap-1.5 ml-1">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlideIndex
                    ? 'w-5 bg-[#D97845]'
                    : 'w-1.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Dock: Controls */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/25 border border-white/10 text-[#F5F0E6]/70 text-[10px] uppercase tracking-[0.2em] font-semibold backdrop-blur-md">
            <span>Scroll</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97845] animate-ping" />
          </div>

          <div className="flex items-center gap-1 bg-black/30 border border-white/10 rounded-full p-1 backdrop-blur-xl shadow-lg">
            <button
              onClick={() =>
                setCurrentSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
              }
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="w-[1px] h-3 bg-white/15" />
            <button
              onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % slides.length)}
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
