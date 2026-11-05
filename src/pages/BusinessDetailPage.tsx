import React from 'react';
import { ArrowLeft, CheckCircle2, Award, FileSpreadsheet, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import businessesData from '../content/config/businesses.json';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';

interface BusinessDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
}

export const BusinessDetailPage: React.FC<BusinessDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenInquiry,
}) => {
  const business = businessesData.find((b) => b.slug === slug) || businessesData[0];

  return (
    <div className="pt-24 pb-24 bg-[#FAF9F6]">
      {/* Top Breadcrumb Header */}
      <div className="bg-[#0B132B] text-white py-16 lg:py-24 relative overflow-hidden border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => onNavigate('/businesses')}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-wider text-emerald-400 hover:text-emerald-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Sourcing Categories</span>
          </button>

          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 block mb-2">
            {business.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight max-w-3xl leading-[1.15] text-stone-100">
            {business.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-light max-w-2xl leading-relaxed">
            {business.summary}
          </p>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm bg-white">
              <ImageWithFallback
                src={business.image}
                alt={business.title}
                fallbackTitle={business.title}
                className="w-full h-80 sm:h-[440px] object-cover"
              />
            </div>

            {/* In-depth Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-slate-950">
                Category Scope & Market Context
              </h2>
              <p className="text-stone-600 font-light leading-relaxed text-base sm:text-lg">
                {business.fullDescription}
              </p>
            </div>

            {/* Key Offerings Grid */}
            {/* Key Offerings Grid */}
            <div className="card-3d rounded-3xl p-8 sm:p-10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
              <h3 className="text-2xl font-serif font-normal text-slate-950">
                Featured Product Range & Fabric Types
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {business.keyOfferings.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#FAF8F5] p-4 rounded-xl border border-stone-200/80 shadow-xs hover:border-emerald-600/40 hover:-translate-y-0.5 transition-all">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-800 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study Section with 3D dark glassmorphic styling */}
            <div className="card-3d-dark rounded-3xl p-8 sm:p-10 text-white space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
              <div className="flex items-center gap-2 text-emerald-400 text-[11px] font-semibold uppercase tracking-[0.18em]">
                <FileSpreadsheet className="w-4 h-4" />
                <span>Retail Buyer Case Study</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-stone-100 group-hover:text-emerald-300 transition-colors">
                {business.caseStudy.title}
              </h3>
              <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
                {business.caseStudy.description}
              </p>
              <div className="pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 block mb-1">
                    Buyer Profile
                  </span>
                  <span className="text-sm font-medium text-stone-200">
                    {business.caseStudy.clientType}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-400 block mb-1">
                    Procurement Outcome
                  </span>
                  <span className="text-sm font-semibold text-emerald-300 font-mono">
                    {business.caseStudy.impact}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Metrics Widget with 3D elevation */}
            <div className="card-3d-emerald rounded-3xl p-6 sm:p-8 space-y-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
              <h4 className="text-[10px] font-semibold tracking-[0.24em] uppercase text-emerald-800">
                Sourcing Benchmarks
              </h4>
              <div className="space-y-4 divide-y divide-stone-100">
                {business.metrics.map((m, idx) => (
                  <div key={idx} className={idx > 0 ? 'pt-4' : ''}>
                    <span className="text-xs text-stone-500 block mb-1 font-light">
                      {m.label}
                    </span>
                    <span className="text-2xl font-serif font-normal text-slate-950">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality & Craft Standards */}
            <div className="card-3d rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/30 to-transparent" />
              <div className="flex items-center gap-2 text-[#0B132B]">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-900">
                  Quality & Finish Standards
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {business.certifications.map((cert, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1.5 text-xs text-stone-800 bg-[#FAF8F5] rounded-lg border border-stone-200 shadow-2xs font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Sourcing Inquiry Box 3D Card */}
            <div className="card-3d-dark rounded-3xl p-8 text-white space-y-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
              <Mail className="w-7 h-7 text-emerald-400" />
              <h4 className="text-2xl font-serif font-normal text-stone-100">
                Request Swatches or Price Consultation
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Connect directly with our sourcing desk for this category to review shade cards, fabric samples, and volume pricing.
              </p>
              <button
                onClick={onOpenInquiry}
                className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-[0.16em] bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl shadow-[0_4px_14px_rgba(6,78,59,0.4)] transition-all text-center hover:scale-[1.02]"
              >
                Initiate Category Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
