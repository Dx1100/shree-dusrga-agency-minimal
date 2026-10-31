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
    <div className="pt-24 pb-20 bg-white">
      {/* Top Breadcrumb Header */}
      <div className="bg-slate-900 text-white py-16 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('/businesses')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Business Portfolios</span>
          </button>

          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
            {business.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            {business.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {business.summary}
          </p>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <ImageWithFallback
                src={business.image}
                alt={business.title}
                fallbackTitle={business.title}
                className="w-full h-80 sm:h-[420px] object-cover"
              />
            </div>

            {/* In-depth Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">
                Division Capabilities & Technical Scope
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                {business.fullDescription}
              </p>
            </div>

            {/* Key Offerings Grid */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
              <h3 className="text-lg font-bold text-slate-900">
                Core Products & Engineering Offerings
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {business.keyOfferings.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study Section */}
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white shadow-xl space-y-6">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <FileSpreadsheet className="w-4 h-4" />
                <span>Featured Technical Case Study</span>
              </div>
              <h3 className="text-2xl font-bold">
                {business.caseStudy.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {business.caseStudy.description}
              </p>
              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs uppercase font-semibold text-slate-400 block mb-0.5">
                    Client Profile
                  </span>
                  <span className="text-sm font-semibold text-slate-200">
                    {business.caseStudy.clientType}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-cyan-400 block mb-0.5">
                    Quantified Outcome
                  </span>
                  <span className="text-sm font-bold text-cyan-300 font-mono">
                    {business.caseStudy.impact}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Metrics Widget */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Operational Benchmarks
              </h4>
              <div className="space-y-4 divide-y divide-slate-200/80">
                {business.metrics.map((m, idx) => (
                  <div key={idx} className={idx > 0 ? 'pt-4' : ''}>
                    <span className="text-xs text-slate-500 block mb-0.5 font-medium">
                      {m.label}
                    </span>
                    <span className="text-xl font-bold text-slate-900 font-mono">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Widget */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  Accreditations & Codes
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {business.certifications.map((cert, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-2.5 py-1 text-xs font-semibold bg-slate-100 text-slate-800 rounded-md border border-slate-200"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* RFQ Box */}
            <div className="p-6 rounded-2xl bg-blue-900 text-white space-y-4">
              <Mail className="w-6 h-6 text-cyan-300" />
              <h4 className="text-lg font-bold">
                Request Specifications or Technical Consultation
              </h4>
              <p className="text-xs text-blue-100 leading-relaxed">
                Connect directly with lead metallurgists and product development directors for this division.
              </p>
              <button
                onClick={onOpenInquiry}
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider bg-white text-blue-950 rounded-lg hover:bg-slate-100 transition-colors text-center"
              >
                Initiate Division RFQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
