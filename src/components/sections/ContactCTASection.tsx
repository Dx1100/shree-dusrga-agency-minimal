import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import siteConfig from '../../content/config/site.json';

interface ContactCTASectionProps {
  heading: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
}

export const ContactCTASection: React.FC<ContactCTASectionProps> = ({
  heading,
  description,
  primaryButtonText,
  secondaryButtonText,
  onNavigate,
  onOpenInquiry,
}) => {
  return (
    <section className="py-28 sm:py-36 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-950/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-7">
          <div className="flex items-center justify-center gap-3">
            <span className="w-6 h-[1px] bg-emerald-400/80" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-300">
              Sourcing Consultation
            </span>
            <span className="w-6 h-[1px] bg-emerald-400/80" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.15] break-normal">
            {heading}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-light max-w-2xl mx-auto break-normal">
            {description}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] bg-white text-slate-950 hover:bg-emerald-50 hover:text-emerald-950 transition-all inline-flex items-center gap-2 group shadow-xl"
            >
              <span>{primaryButtonText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('/contact')}
              className="text-xs font-medium uppercase tracking-[0.2em] text-white/80 hover:text-white underline underline-offset-8 transition-colors py-2"
            >
              {secondaryButtonText}
            </button>
          </div>

          {/* Minimalist contact strip */}
          <div className="pt-14 mt-14 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-400 font-light">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-400/80" />
              <span className="break-normal">{siteConfig.headquarters.city}, {siteConfig.headquarters.country}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-400/80" />
              <span>{siteConfig.headquarters.phone}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-3.5 h-3.5 text-emerald-400/80" />
              <span>{siteConfig.headquarters.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
