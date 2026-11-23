import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
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
      className="relative h-screen min-h-[660px] max-h-[1080px] flex flex-col justify-between pt-28 pb-10 sm:pb-14 bg-[#102B25] text-[#F5F0E6] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Cinematic Corporate Showcase"
    >
      {/* Background Slides with subtle Ken Burns zoom */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlideIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
            }`}
          >
            <ImageWithFallback
              src={slide.desktopImage}
              alt={slide.heading}
              fallbackTitle={slide.heading}
              className="w-full h-full object-cover transition-transform duration-[9000ms] ease-out"
              style={{
                transform: isActive ? 'scale(1.05)' : 'scale(1.0)',
              }}
            />
            {/* Deep forest editorial wash for warm, high-contrast legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#102B25]/90 via-[#173D35]/65 to-[#102B25]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102B25]/80 via-transparent to-[#102B25]/35" />
          </div>
        );
      })}

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-3xl lg:max-w-4xl space-y-5 sm:space-y-6">
          {currentSlide.kicker && (
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#D97845]" />
              <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#F5F0E6]/90">
                {currentSlide.kicker}
              </span>
            </div>
          )}

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.14] sm:leading-[1.1] break-normal">
            {currentSlide.heading}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#F5F0E6]/90 font-normal leading-relaxed max-w-2xl sm:max-w-3xl break-normal">
            {currentSlide.description}
          </p>

          {/* Editorial CTAs */}
          <div className="pt-4 sm:pt-6 flex flex-wrap items-center gap-5 sm:gap-6">
            <button
              onClick={() => {
                if (currentSlide.ctaLink.startsWith('/')) {
                  onNavigate(currentSlide.ctaLink);
                } else {
                  onOpenInquiry();
                }
              }}
              className="px-6 sm:px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] bg-[#D97845] hover:bg-[#C26534] text-white rounded-md transition-all duration-300 inline-flex items-center gap-2 group shadow-lg"
            >
              <span>{currentSlide.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            {currentSlide.secondaryCtaText && (
              <button
                onClick={() => {
                  if (currentSlide.secondaryCtaLink) {
                    onNavigate(currentSlide.secondaryCtaLink);
                  }
                }}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F0E6]/90 hover:text-white underline decoration-[#D97845] decoration-2 underline-offset-8 transition-colors py-2"
              >
                {currentSlide.secondaryCtaText}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Minimal Bottom Bar: Slide Counter & Progress */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-end justify-between">
        {/* Left: Clean slide number & progress indicator */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold tracking-widest text-[#F5F0E6]/85">
            0{currentSlideIndex + 1} <span className="text-[#F5F0E6]/45">/ 0{slides.length}</span>
          </span>

          <div className="w-20 sm:w-36 h-[2px] bg-[#F5F0E6]/20 relative overflow-hidden">
            <div
              className="absolute top-0 bottom-0 left-0 bg-[#D97845] transition-all duration-500 ease-out"
              style={{
                width: `${((currentSlideIndex + 1) / slides.length) * 100}%`,
              }}
            />
          </div>

          {/* Quick Dots */}
          <div className="hidden sm:flex items-center gap-1.5 ml-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentSlideIndex
                    ? 'w-6 bg-[#D97845]'
                    : 'w-1.5 bg-[#F5F0E6]/35 hover:bg-[#F5F0E6]/70'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Controls & Scroll prompt */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-center gap-1 mr-4 text-[#F5F0E6]/60">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
            <span className="w-[1px] h-6 bg-gradient-to-b from-[#D97845] to-transparent" />
          </div>

          <div className="flex items-center gap-1 border border-[#F5F0E6]/25 rounded-md p-1">
            <button
              onClick={() =>
                setCurrentSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
              }
              className="p-1.5 text-[#F5F0E6]/80 hover:text-white hover:bg-[#D97845]/30 rounded transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="w-[1px] h-3 bg-[#F5F0E6]/25" />
            <button
              onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % slides.length)}
              className="p-1.5 text-[#F5F0E6]/80 hover:text-white hover:bg-[#D97845]/30 rounded transition-colors"
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
