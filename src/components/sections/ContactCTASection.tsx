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
    <section className="py-24 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <span className="w-6 h-[1px] bg-rose-500" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
              Global Collaboration
            </span>
            <span className="w-6 h-[1px] bg-rose-500" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-[1.15] break-normal">
            {heading}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-normal max-w-2xl mx-auto break-normal">
            {description}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] bg-white text-slate-950 hover:bg-slate-100 transition-colors inline-flex items-center gap-2 group"
            >
              <span>{primaryButtonText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('/contact')}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 hover:text-white underline underline-offset-8 transition-colors py-2"
            >
              {secondaryButtonText}
            </button>
          </div>

          {/* Minimalist contact strip */}
          <div className="pt-12 mt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-white/60">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-white/40" />
              <span className="break-normal">{siteConfig.headquarters.city}, {siteConfig.headquarters.country}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-3.5 h-3.5 text-white/40" />
              <span>{siteConfig.headquarters.phone}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-3.5 h-3.5 text-white/40" />
              <span>{siteConfig.headquarters.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
