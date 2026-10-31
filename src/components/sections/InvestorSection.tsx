import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TrendingUp, Download, ArrowRight } from 'lucide-react';
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
    <section className="py-24 sm:py-28 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeading
            kicker={kicker}
            heading={heading}
            lead={subheading}
            className="mb-0"
          />
          <button
            onClick={() => onNavigate('/investors')}
            className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 hover:text-[#9b111e] transition-colors pb-2 group whitespace-nowrap"
          >
            <span>Investor Center</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Minimal Stock & Earnings Snapshot */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 block mb-1">
                    NSE / BSE Stock Snapshot
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl sm:text-4xl font-light text-slate-950 font-mono">
                      ₹{stock.price.toFixed(2)}
                    </span>
                    <span className="text-emerald-700 text-xs font-semibold font-mono flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      +{stock.change} (+{stock.changePercent}%)
                    </span>
                  </div>
                </div>
                <div className="text-right text-xs text-slate-500 font-normal">
                  <span className="block font-medium text-slate-800">MCap: {stock.marketCap}</span>
                  <span>PE Ratio: {stock.peRatio}</span>
                </div>
              </div>

              {/* Latest Quarter Financials */}
              <div className="mt-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9b111e] block mb-4">
                  Latest Earnings ({latestQuarter.quarter})
                </span>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50/70 border border-slate-100">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">Quarterly Revenue</span>
                    <span className="text-base sm:text-lg font-light text-slate-950 font-mono">
                      {latestQuarter.revenue}
                    </span>
                  </div>
                  <div className="p-4 bg-slate-50/70 border border-slate-100">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">EBITDA Margin</span>
                    <span className="text-base sm:text-lg font-light text-slate-950 font-mono">
                      {latestQuarter.ebitda}
                    </span>
                  </div>
                  <div className="p-4 bg-slate-50/70 border border-slate-100">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">Net Profit (PAT)</span>
                    <span className="text-base sm:text-lg font-light text-slate-950 font-mono">
                      {latestQuarter.pat}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Audited Ind AS and IFRS compliant filings.
              </span>
              <button
                onClick={() => onNavigate('/investors')}
                className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 hover:text-[#9b111e] inline-flex items-center gap-1 transition-colors"
              >
                <span>Historical Filings</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Right Column: Integrated Reports Download */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b111e] block mb-2">
                Annual Reports & Governance
              </span>
              <h3 className="text-xl font-normal text-slate-950 mb-2">
                Integrated Corporate Disclosures
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal mb-6">
                Comprehensive reporting covering financial performance, carbon accounting, and executive remuneration.
              </p>

              <div className="space-y-3">
                {investorsData.annualReports.map((report, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 border border-slate-100 flex items-center justify-between hover:bg-slate-100/70 transition-colors"
                  >
                    <div>
                      <h4 className="text-xs font-semibold text-slate-900">
                        {report.title}
                      </h4>
                      <span className="text-[11px] text-slate-400 block mt-0.5 font-normal">
                        {report.theme} · {report.fileSize}
                      </span>
                    </div>
                    <button
                      onClick={() => onDownloadReport(report.title)}
                      className="p-2 text-slate-600 hover:text-[#9b111e] transition-colors"
                      title={`Download ${report.title}`}
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => onNavigate('/investors')}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-[0.16em] border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors text-center"
              >
                Access Investor Deck & Audio Webcast
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
