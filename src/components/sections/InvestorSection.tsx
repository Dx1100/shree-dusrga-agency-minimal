import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Download, ArrowRight, ShieldCheck } from 'lucide-react';
import investorsData from '../../content/config/investors.json';

interface InvestorSectionProps {
  kicker: string;
  heading: string;
  subheading: string;
  onNavigate: (path: string) => void;
  onDownloadReport: (title: string) => void;
}

export const InvestorSection: React.FC<InvestorSectionProps> = ({
  kicker,
  heading,
  subheading,
  onNavigate,
  onDownloadReport,
}) => {
  const stock = investorsData.stockInfo;
  const latestQuarter = investorsData.quarterlyResults[0];

  return (
    <section className="py-24 sm:py-32 bg-white border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <SectionHeading
            kicker={kicker}
            heading={heading}
            lead={subheading}
            className="mb-0"
          />
          <button
            onClick={() => onNavigate('/capital-support')}
            className="hidden md:inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 hover:text-emerald-800 transition-colors pb-2 group whitespace-nowrap"
          >
            <span>Capital Support Overview</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Financing Snapshot 3D Box */}
          <div className="lg:col-span-7 card-3d rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-stone-200/60">
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-emerald-800 block mb-1">
                    Trade Credit & Working Capital Program
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-3xl sm:text-4xl font-normal text-slate-950 group-hover:text-emerald-900 transition-colors">
                      {stock.symbol}
                    </span>
                    <span className="text-emerald-800 text-xs font-semibold font-mono flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/60 shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                      {stock.exchange}
                    </span>
                  </div>
                </div>
                <div className="text-right text-xs text-stone-500 font-light">
                  <span className="block font-medium text-slate-900">{stock.marketCap}</span>
                  <span>Model: {stock.peRatio}</span>
                </div>
              </div>

              {/* Segment Support with 3D inner cards */}
              <div className="mt-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-800 block mb-4">
                  Featured Support Tier: {latestQuarter.quarter}
                </span>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block mb-0.5 font-light">Focus Cycle</span>
                    <span className="text-sm sm:text-base font-serif font-normal text-slate-950">
                      {latestQuarter.fiscalYear}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block mb-0.5 font-light">Assistance Type</span>
                    <span className="text-sm sm:text-base font-serif font-normal text-slate-950">
                      {latestQuarter.revenue}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block mb-0.5 font-light">Settlement</span>
                    <span className="text-sm sm:text-base font-serif font-normal text-slate-950">
                      {latestQuarter.ebitda}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-stone-200/60 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-stone-500 font-light">
                Transparent credit facilitation for verified retail and wholesale buyers.
              </span>
              <button
                onClick={() => onNavigate('/capital-support')}
                className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 hover:text-emerald-800 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Financing Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Handbooks Download 3D Box */}
          <div className="lg:col-span-5 card-3d rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-800 block mb-2 px-2.5 py-0.5 bg-emerald-50 rounded border border-emerald-100/60 w-fit">
                Sourcing Handbooks & Guides
              </span>
              <h3 className="font-serif text-2xl font-normal text-slate-950 mb-2.5 tracking-tight group-hover:text-emerald-900 transition-colors">
                Textile Procurement Handbooks
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-6">
                Informational resources explaining seasonal procurement cycles, order consolidation, and working capital solutions.
              </p>

              <div className="space-y-3">
                {investorsData.annualReports.map((report, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-stone-200/80 flex items-center justify-between hover:border-emerald-800/40 transition-colors shadow-xs"
                  >
                    <div>
                      <h4 className="text-xs font-semibold text-slate-900">
                        {report.title}
                      </h4>
                      <span className="text-[11px] text-stone-400 block mt-0.5 font-light">
                        {report.theme} · {report.fileSize}
                      </span>
                    </div>
                    <button
                      onClick={() => onDownloadReport(report.title)}
                      className="p-2 text-stone-500 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors"
                      title={`Download ${report.title}`}
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-200/60">
              <button
                onClick={() => onNavigate('/capital-support')}
                className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-[0.16em] bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl shadow-xs transition-colors text-center"
              >
                Explore Capital Support & ThreadLinc Options
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
