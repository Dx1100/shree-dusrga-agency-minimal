import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import investorsData from '../content/config/investors.json';
import { TrendingUp, FileText, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface InvestorRelationsPageProps {
  onNavigate: (path: string) => void;
  onDownloadReport: (title: string) => void;
}

export const InvestorRelationsPage: React.FC<InvestorRelationsPageProps> = ({
  onNavigate,
  onDownloadReport,
}) => {
  const stock = investorsData.stockInfo;

  return (
    <div className="pt-24 pb-24 bg-[#FAF9F6]">
      {/* Hero Header */}
      <div className="bg-[#0B132B] text-white py-20 lg:py-28 relative overflow-hidden border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400 block mb-3">
            Trade Financing & Working Capital
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight max-w-3xl leading-[1.15] text-stone-100">
            ThreadLinc Financing for Textile Buyers
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-300 font-light max-w-2xl leading-relaxed">
            Helping verified retailers, showrooms, and wholesalers manage peak seasonal inventory procurement directly from textile manufacturing hubs without straining day-to-day liquidity.
          </p>

          {/* Trade Credit Banner */}
          <div className="mt-12 card-3d-dark p-8 rounded-2xl relative overflow-hidden max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
            <div>
              <span className="text-xs text-stone-400 block font-light">Program</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-xl sm:text-2xl font-serif font-normal text-stone-100">
                  {stock.symbol}
                </span>
                <span className="text-emerald-400 text-xs font-medium">
                  Active
                </span>
              </div>
            </div>
            <div>
              <span className="text-xs text-stone-400 block font-light">Assistance Model</span>
              <span className="text-base sm:text-lg font-serif font-normal text-stone-100 mt-1 block">
                {stock.marketCap}
              </span>
            </div>
            <div>
              <span className="text-xs text-stone-400 block font-light">Target Audience</span>
              <span className="text-base sm:text-lg font-serif font-normal text-stone-100 mt-1 block">
                Retail & Wholesale
              </span>
            </div>
            <div>
              <span className="text-xs text-stone-400 block font-light">Billing Terms</span>
              <span className="text-base sm:text-lg font-serif font-normal text-stone-100 mt-1 block">
                Transparent & Direct
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Buyer Segments Table */}
        <div className="mb-20">
          <SectionHeading
            kicker="Financing by Segment"
            heading="ThreadLinc Support Across Business Tiers"
            lead="Explore how working capital support aligns with showroom stocking, bulk distribution, and boutique curation cycles."
          />

          <div className="mt-8 card-3d rounded-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/35 to-transparent z-10" />
            <table className="w-full text-left text-sm text-stone-700 divide-y divide-stone-100">
              <thead className="bg-[#FAF8F5] text-[11px] uppercase font-semibold text-stone-600 tracking-wider">
                <tr>
                  <th className="py-4 px-6 font-medium">Buyer Segment</th>
                  <th className="py-4 px-6 font-medium">Procurement Need</th>
                  <th className="py-4 px-6 font-medium">Credit Support</th>
                  <th className="py-4 px-6 font-medium">Settlement Flow</th>
                  <th className="py-4 px-6 font-medium">Order Validation</th>
                  <th className="py-4 px-6 text-right font-medium">Program Info</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/80 bg-white/60">
                {investorsData.quarterlyResults.map((q, idx) => (
                  <tr key={idx} className="hover:bg-emerald-50/40 transition-colors">
                    <td className="py-4 px-6 font-serif font-normal text-slate-950 text-base">{q.quarter}</td>
                    <td className="py-4 px-6 text-stone-500 font-light">{q.fiscalYear}</td>
                    <td className="py-4 px-6 font-serif text-slate-900">{q.revenue}</td>
                    <td className="py-4 px-6 text-emerald-800 font-medium">{q.ebitda}</td>
                    <td className="py-4 px-6 text-stone-600 font-light">{q.pat}</td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => onDownloadReport(`${q.quarter} Financing Guide`)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-800 bg-emerald-50/80 hover:bg-emerald-100 border border-emerald-900/10 rounded-md transition-all shadow-xs"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Guide PDF</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Guides & Handbooks */}
        <div className="mb-20">
          <SectionHeading
            kicker="Sourcing Handbooks"
            heading="Trade Guides & Working Capital Handbooks"
            lead="Informational documentation explaining seasonal procurement cycles, inventory planning, and trade settlements."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {investorsData.annualReports.map((rep, idx) => (
              <div
                key={idx}
                className="card-3d-emerald p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/35 to-transparent" />
                <div>
                  <span className="text-[11px] font-semibold text-emerald-800 font-mono uppercase tracking-wider block mb-1">
                    {rep.year}
                  </span>
                  <h3 className="text-xl font-serif font-normal text-slate-950 mb-2 group-hover:text-emerald-900 transition-colors">
                    {rep.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-4">
                    {rep.theme}
                  </p>
                </div>
                <div className="pt-4 border-t border-emerald-950/10 flex items-center justify-between">
                  <span className="text-xs text-stone-400 font-light">{rep.fileSize}</span>
                  <button
                    onClick={() => onDownloadReport(rep.title)}
                    className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-emerald-800 hover:text-emerald-950"
                  >
                    <span>Download</span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Oversight Panels */}
        <div>
          <SectionHeading
            kicker="Trade Governance"
            heading="Coordination & Review Panels"
            lead="Dedicated teams ensuring transparent billing, supplier vetting, and prompt order fulfillment."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {investorsData.governanceCommittees.map((comm, idx) => (
              <div key={idx} className="card-3d p-7 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/30 to-transparent" />
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-900/10 flex items-center justify-center mb-4 text-emerald-700 shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif font-normal text-slate-950 mb-1 group-hover:text-emerald-900 transition-colors">
                  {comm.name}
                </h4>
                <p className="text-xs text-stone-500 font-light mb-2">
                  Desk: <span className="text-stone-800 font-medium">{comm.chair}</span>
                </p>
                <span className="text-[11px] font-medium text-emerald-800 uppercase tracking-wider">
                  {comm.membersCount} Panel Advisors
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
