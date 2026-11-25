import React from 'react';
import { ArrowLeft, CheckCircle2, Award, FileSpreadsheet, ArrowRight, ShieldCheck, Mail, Tag, Layers } from 'lucide-react';
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
    <div className="pt-20 pb-24 bg-[#F5F0E6]">
      {/* Top Breadcrumb Header */}
      <div className="bg-[#173D35] text-[#F5F0E6] py-12 sm:py-16 relative overflow-hidden border-b border-[#F5F0E6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => onNavigate('/what-we-source')}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#E89A6F] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to What We Source</span>
          </button>

          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#F5F0E6]/70 block mb-2">
            {business.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight max-w-3xl leading-[1.15] text-[#F5F0E6]">
            {business.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#F5F0E6]/80 max-w-2xl leading-relaxed">
            {business.summary}
          </p>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden border border-[#173D35]/12 shadow-sm bg-white">
              <ImageWithFallback
                src={business.image}
                alt={business.title}
                fallbackTitle={business.title}
                className="w-full h-80 sm:h-[440px] object-cover"
              />
            </div>

            {/* Sourcing Support Offered Callout Banner */}
            <div className="card-3d rounded-3xl p-8 sm:p-9 relative overflow-hidden space-y-3">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845]/70 to-transparent" />
              <div className="flex items-center gap-2 text-[#D97845] text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5 text-[#D97845]" />
                <span>Sourcing Support Offered</span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#173D35]">
                End-to-End Buyer Assistance & Factory Coordination
              </h3>
              <p className="text-[#173D35]/80 leading-relaxed text-sm sm:text-base">
                {business.sourcingSupport || business.summary}
              </p>
            </div>

            {/* Subcategories Breakdown */}
            {business.subcategories && business.subcategories.length > 0 && (
              <div className="card-3d rounded-3xl p-8 sm:p-9 space-y-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845]/50 to-transparent" />
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173D35]">
                  <Tag className="w-4 h-4 text-[#D97845]" />
                  <span>Subcategories Included in {business.title}</span>
                </div>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {business.subcategories.map((sub, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-4 py-2 rounded-xl text-xs font-medium bg-[#F5F0E6] text-[#173D35] border border-[#173D35]/12 capitalize"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* In-depth Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#173D35]">
                Category Scope & Production Context
              </h2>
              <p className="text-[#173D35]/80 leading-relaxed text-base sm:text-lg">
                {business.fullDescription}
              </p>
            </div>

            {/* Relevant Product Types Highlight Card with Dynamic Category Background Image */}
            {business.productTypes && business.productTypes.length > 0 && (
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#173D35]/20 shadow-xl bg-[#102B25] p-5 sm:p-8 lg:p-10 text-[#F5F0E6] group/card">
                {/* Background Image Layer with Luxury Dark Gradient Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <img
                    src={business.image}
                    alt=""
                    className="w-full h-full object-cover object-center opacity-20 scale-105 group-hover/card:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#102B25]/95 via-[#102B25]/85 to-[#173D35]/90 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-radial from-transparent via-[#102B25]/50 to-[#102B25]/90" />
                </div>

                {/* Top Terracotta Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845] to-transparent" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97845] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D97845]" />
                      </span>
                      <h3 className="text-2xl font-serif font-medium text-white">
                        Relevant Product Types & Lines
                      </h3>
                    </div>
                    <span className="text-[11px] font-semibold text-[#E89A6F] uppercase tracking-wider bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-xs">
                      {business.productTypes.length} Verified Lines
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {business.productTypes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white/[0.08] hover:bg-white/[0.14] p-4 rounded-xl border border-white/10 hover:border-[#D97845]/40 hover:-translate-y-0.5 transition-all backdrop-blur-xs group/item">
                        <CheckCircle2 className="w-4 h-4 text-[#D97845] shrink-0 mt-0.5 group-hover/item:text-[#E89A6F] transition-colors" />
                        <span className="text-xs sm:text-sm text-[#F5F0E6] font-medium leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Key Offerings Grid */}
            <div className="card-3d rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845]/60 to-transparent" />
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#173D35]">
                Key Sourcing Services & Variety Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {business.keyOfferings.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#F5F0E6]/70 p-3.5 sm:p-4 rounded-xl border border-[#173D35]/10 hover:border-[#D97845]/40 hover:-translate-y-0.5 transition-all">
                    <CheckCircle2 className="w-4 h-4 text-[#D97845] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#173D35] font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study Section */}
            <div className="card-3d-dark rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 text-[#F5F0E6] space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845] to-transparent" />
              <div className="flex items-center gap-2 text-[#E89A6F] text-[11px] font-semibold uppercase tracking-[0.18em]">
                <FileSpreadsheet className="w-4 h-4" />
                <span>Trade Buyer Procurement Case Study</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#F5F0E6] group-hover:text-[#E89A6F] transition-colors">
                {business.caseStudy.title}
              </h3>
              <p className="text-sm sm:text-base text-[#F5F0E6]/80 leading-relaxed">
                {business.caseStudy.description}
              </p>
              <div className="pt-5 border-t border-[#F5F0E6]/15 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-[#102B25]/70 border border-[#F5F0E6]/10">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#F5F0E6]/65 block mb-1">
                    Buyer Profile
                  </span>
                  <span className="text-sm font-medium text-[#F5F0E6]">
                    {business.caseStudy.clientType}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-[#102B25]/70 border border-[#F5F0E6]/10">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#E89A6F] block mb-1">
                    Procurement Outcome
                  </span>
                  <span className="text-sm font-semibold text-[#F5F0E6]">
                    {business.caseStudy.impact}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Highlights Widget */}
            <div className="card-3d rounded-3xl p-6 sm:p-8 space-y-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845]/60 to-transparent" />
              <h4 className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#D97845]">
                Sourcing Benchmarks
              </h4>
              <div className="space-y-4 divide-y divide-[#173D35]/10">
                {business.metrics.map((m, idx) => (
                  <div key={idx} className={idx > 0 ? 'pt-4' : ''}>
                    <span className="text-xs text-[#173D35]/65 block mb-1">
                      {m.label}
                    </span>
                    <span className="text-base sm:text-lg font-serif font-medium text-[#173D35] block">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality & Craft Standards */}
            <div className="card-3d rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845]/50 to-transparent" />
              <div className="flex items-center gap-2 text-[#173D35]">
                <ShieldCheck className="w-5 h-5 text-[#D97845]" />
                <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#173D35]">
                  Quality & Finish Standards
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {business.certifications.map((cert, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1.5 text-xs text-[#173D35] bg-[#F5F0E6] rounded-lg border border-[#173D35]/12 font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Sourcing Inquiry Box */}
            <div className="card-3d-dark rounded-3xl p-8 text-[#F5F0E6] space-y-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845] to-transparent" />
              <Mail className="w-7 h-7 text-[#E89A6F]" />
              <h4 className="text-2xl font-serif font-medium text-[#F5F0E6]">
                Request Samples or Consultation for {business.title}
              </h4>
              <p className="text-sm text-[#F5F0E6]/80 leading-relaxed">
                Connect directly with our sourcing desk for this category to review shade cards, fabric swatches, and volume factory pricing.
              </p>
              <button
                onClick={onOpenInquiry}
                className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-[0.16em] bg-[#D97845] hover:bg-[#C26534] text-white rounded-xl shadow-lg transition-all text-center hover:scale-[1.02]"
              >
                Initiate {business.title} Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
