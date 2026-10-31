import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import investorsData from '../content/config/investors.json';
import { TrendingUp, FileText, Download, ShieldCheck, ExternalLink, Calendar, Users } from 'lucide-react';

interface InvestorRelationsPageProps {
  onNavigate: (path: string) => void;
  onDownloadReport: (title: string) => void;
}

export const InvestorRelationsPage: React.FC<InvestorRelationsPageProps> = ({
  onNavigate,
  onDownloadReport,
}) => {
  const stock = investorsData.stockInfo;
  const [selectedQuarter, setSelectedQuarter] = useState<string>('Q3 FY26');

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">
            Investor Center & Filings
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Transparent Governance, Disciplined Capital Allocation
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Delivering sustained shareholder returns through operational discipline, multi-cycle financial strength, and market-leading positions across high-entry-barrier engineering domains.
          </p>

          {/* Stock Ticker Banner */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <span className="text-xs text-slate-400 block">Stock Price ({stock.exchange})</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  ₹{stock.price.toFixed(2)}
                </span>
                <span className="text-emerald-400 text-xs font-bold font-mono">
                  +{stock.change} (+{stock.changePercent}%)
                </span>
              </div>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Market Capitalization</span>
              <span className="text-lg sm:text-xl font-bold text-white font-mono mt-1 block">
                {stock.marketCap}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">P/E Ratio</span>
              <span className="text-lg sm:text-xl font-bold text-white font-mono mt-1 block">
                {stock.peRatio}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Dividend Yield</span>
              <span className="text-lg sm:text-xl font-bold text-white font-mono mt-1 block">
                {stock.dividendYield}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Quarterly Results Table */}
        <div className="mb-20">
          <SectionHeading
            kicker="Earnings Disclosures"
            heading="Quarterly Financial Performance"
            lead="Unaudited consolidated quarterly results as filed with the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE)."
          />

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm text-slate-700 divide-y divide-slate-200">
              <thead className="bg-slate-50 text-xs uppercase font-bold text-slate-500 tracking-wider">
                <tr>
                  <th className="py-4 px-6">Reporting Period</th>
                  <th className="py-4 px-6">Fiscal Year</th>
                  <th className="py-4 px-6">Consolidated Revenue</th>
                  <th className="py-4 px-6">EBITDA (Margin)</th>
                  <th className="py-4 px-6">Net Profit (PAT)</th>
                  <th className="py-4 px-6 text-right">Downloads</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {investorsData.quarterlyResults.map((q, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">{q.quarter}</td>
                    <td className="py-4 px-6 text-slate-500">{q.fiscalYear}</td>
                    <td className="py-4 px-6 font-mono font-semibold text-slate-900">{q.revenue}</td>
                    <td className="py-4 px-6 font-mono font-semibold text-blue-900">{q.ebitda}</td>
                    <td className="py-4 px-6 font-mono font-semibold text-emerald-800">{q.pat}</td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => onDownloadReport(`${q.quarter} Earnings Report`)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>PDF Report</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Integrated Annual Reports */}
        <div className="mb-20">
          <SectionHeading
            kicker="Annual Publications"
            heading="Integrated Annual Reports"
            lead="Comprehensive disclosures detailing value creation across financial, manufactured, intellectual, and natural capitals."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {investorsData.annualReports.map((rep, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-900/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-blue-900 font-mono block mb-1">
                    {rep.year}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {rep.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Theme: "{rep.theme}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{rep.fileSize}</span>
                  <button
                    onClick={() => onDownloadReport(rep.title)}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-900 hover:text-blue-950"
                  >
                    <span>Download</span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Governance Committees */}
        <div>
          <SectionHeading
            kicker="Leadership Oversight"
            heading="Board Committees & Corporate Governance"
            lead="Independent director oversight upholding strict regulatory compliance."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {investorsData.governanceCommittees.map((comm, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-blue-900 mb-3" />
                <h4 className="text-sm font-bold text-slate-900 mb-2">
                  {comm.name}
                </h4>
                <p className="text-xs text-slate-500 mb-2">
                  Chair: <span className="text-slate-800 font-medium">{comm.chair}</span>
                </p>
                <span className="text-[11px] font-semibold text-blue-900">
                  {comm.membersCount} Board Committee Members
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
