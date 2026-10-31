import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, FileText, Briefcase, Newspaper, Leaf } from 'lucide-react';
import businessesData from '../../content/config/businesses.json';
import newsData from '../../content/config/news.json';
import investorsData from '../../content/config/investors.json';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const matches: {
      type: 'business' | 'news' | 'report' | 'sustainability';
      title: string;
      desc: string;
      path: string;
    }[] = [];

    // Search businesses
    businessesData.forEach((biz) => {
      if (
        biz.title.toLowerCase().includes(q) ||
        biz.summary.toLowerCase().includes(q) ||
        biz.category.toLowerCase().includes(q)
      ) {
        matches.push({
          type: 'business',
          title: biz.title,
          desc: biz.summary,
          path: `/businesses/${biz.slug}`,
        });
      }
    });

    // Search news
    newsData.forEach((news) => {
      if (
        news.title.toLowerCase().includes(q) ||
        news.summary.toLowerCase().includes(q)
      ) {
        matches.push({
          type: 'news',
          title: news.title,
          desc: `${news.date} · ${news.category}`,
          path: `/newsroom`,
        });
      }
    });

    // Search reports
    investorsData.annualReports.forEach((rep) => {
      if (
        rep.title.toLowerCase().includes(q) ||
        rep.theme.toLowerCase().includes(q)
      ) {
        matches.push({
          type: 'report',
          title: rep.title,
          desc: `Integrated Annual Report · ${rep.theme}`,
          path: `/investors`,
        });
      }
    });

    return matches.slice(0, 8);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col">
        {/* Input bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search businesses, advanced materials, ESG, investor reports..."
            className="w-full text-base bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 rounded bg-slate-200 text-slate-600 hover:bg-slate-300"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-4 divide-y divide-slate-100">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-sm text-slate-400">
              Type keywords such as "advanced materials", "water", "reactors", "Q3 results"
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500">
              No results found for "{query}". Try checking another term.
            </div>
          ) : (
            results.map((res, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onNavigate(res.path);
                  onClose();
                }}
                className="w-full text-left py-3 px-3 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between group"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-md bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-900 transition-colors shrink-0">
                    {res.type === 'business' && <Briefcase className="w-4 h-4" />}
                    {res.type === 'news' && <Newspaper className="w-4 h-4" />}
                    {res.type === 'report' && <FileText className="w-4 h-4" />}
                    {res.type === 'sustainability' && <Leaf className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {res.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {res.desc}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-900 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
