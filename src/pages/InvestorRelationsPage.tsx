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
    <div className="pt-20 pb-24 bg-[#F5F0E6]">
      {/* Hero Header */}
      <div className="bg-[#173D35] text-[#F5F0E6] py-14 sm:py-18 relative overflow-hidden border-b border-[#F5F0E6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-7 bg-[#D97845]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E89A6F]">
              Trade Financing & Working Capital
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight max-w-3xl leading-[1.15] text-[#F5F0E6]">
            Capital Support
          </h1>
          <p className="mt-4 text-[#E89A6F] font-serif text-lg sm:text-xl font-normal">
            ThreadLinc Financing & Inventory Credit for Textile Buyers
          </p>
          <p className="mt-4 text-base sm:text-lg text-[#F5F0E6]/80 max-w-2xl leading-relaxed">
            Helping verified retailers, showrooms, and wholesalers manage peak seasonal inventory procurement directly from textile manufacturing hubs without straining day-to-day liquidity.
          </p>

          {/* Trade Credit Banner */}
          <div className="mt-12 bg-[#102B25] border border-[#F5F0E6]/15 p-8 rounded-2xl relative overflow-hidden max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-6 shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845] to-transparent" />
            <div>
              <span className="text-xs text-[#F5F0E6]/65 block">Program</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-xl sm:text-2xl font-serif font-medium text-[#F5F0E6]">
                  {stock.symbol}
                </span>
                <span className="text-[#E89A6F] text-xs font-semibold">
                  Active
                </span>
              </div>
            </div>
            <div>
              <span className="text-xs text-[#F5F0E6]/65 block">Assistance Model</span>
              <span className="text-base sm:text-lg font-serif font-medium text-[#F5F0E6] mt-1 block">
                {stock.marketCap}
              </span>
            </div>
            <div>
              <span className="text-xs text-[#F5F0E6]/65 block">Target Audience</span>
              <span className="text-base sm:text-lg font-serif font-medium text-[#F5F0E6] mt-1 block">
                Retail & Wholesale
              </span>
            </div>
            <div>
              <span className="text-xs text-[#F5F0E6]/65 block">Billing Terms</span>
              <span className="text-base sm:text-lg font-serif font-medium text-[#F5F0E6] mt-1 block">
                Transparent & Direct
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Buyer Segments Table Band */}
      <div className="bg-white border-b border-[#173D35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <SectionHeading
            kicker="Financing by Segment"
            heading="ThreadLinc Support Across Business Tiers"
            lead="Explore how working capital support aligns with showroom stocking, bulk distribution, and boutique curation cycles."
          />

          <div className="mt-8 card-3d rounded-2xl overflow-x-auto relative">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845]/70 to-transparent z-10" />
            <table className="w-full text-left text-sm text-[#173D35] divide-y divide-[#173D35]/10">
              <thead className="bg-[#F5F0E6] text-[11px] uppercase font-semibold text-[#173D35]/75 tracking-wider">
                <tr>
                  <th className="py-4 px-6 font-semibold">Buyer Segment</th>
                  <th className="py-4 px-6 font-semibold">Procurement Need</th>
                  <th className="py-4 px-6 font-semibold">Credit Support</th>
                  <th className="py-4 px-6 font-semibold">Settlement Flow</th>
                  <th className="py-4 px-6 font-semibold">Order Validation</th>
                  <th className="py-4 px-6 text-right font-semibold">Program Info</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#173D35]/10 bg-white">
                {investorsData.quarterlyResults.map((q, idx) => (
                  <tr key={idx} className="hover:bg-[#F5F0E6]/50 transition-colors">
                    <td className="py-4 px-6 font-serif font-medium text-[#173D35] text-base">{q.quarter}</td>
                    <td className="py-4 px-6 text-[#173D35]/75">{q.fiscalYear}</td>
                    <td className="py-4 px-6 font-serif font-medium text-[#173D35]">{q.revenue}</td>
                    <td className="py-4 px-6 text-[#D97845] font-semibold">{q.ebitda}</td>
                    <td className="py-4 px-6 text-[#173D35]/75">{q.pat}</td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => onDownloadReport(`${q.quarter} Financing Guide`)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#D97845] bg-[#D97845]/10 hover:bg-[#D97845] hover:text-white border border-[#D97845]/25 rounded-md transition-all"
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
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
                className="card-3d p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between group"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845]/70 to-transparent" />
                <div>
                  <span className="text-[11px] font-semibold text-[#D97845] uppercase tracking-wider block mb-1">
                    {rep.year}
                  </span>
                  <h3 className="text-xl font-serif font-medium text-[#173D35] mb-2 group-hover:text-[#D97845] transition-colors">
                    {rep.title}
                  </h3>
                  <p className="text-sm text-[#173D35]/75 leading-relaxed mb-4">
                    {rep.theme}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#173D35]/10 flex items-center justify-between">
                  <span className="text-xs text-[#173D35]/60">{rep.fileSize}</span>
                  <button
                    onClick={() => onDownloadReport(rep.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D97845] hover:text-[#C26534]"
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
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845]/50 to-transparent" />
                <div className="w-10 h-10 rounded-lg bg-[#F5F0E6] border border-[#D97845]/20 flex items-center justify-center mb-4 text-[#D97845]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif font-medium text-[#173D35] mb-1 group-hover:text-[#D97845] transition-colors">
                  {comm.name}
                </h4>
                <p className="text-xs text-[#173D35]/70 mb-2">
                  Desk: <span className="text-[#173D35] font-semibold">{comm.chair}</span>
                </p>
                <span className="text-[11px] font-semibold text-[#D97845] uppercase tracking-wider">
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
