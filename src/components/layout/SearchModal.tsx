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
      <div className="relative w-full max-w-2xl card-3d rounded-2xl shadow-2xl border border-stone-200/90 overflow-hidden z-10 flex flex-col">
        {/* Top Specular Bevel Line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-600/50 to-transparent z-20" />
        
        {/* Input bar */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-stone-200/60 bg-gradient-to-b from-[#FAF8F5] to-white relative z-10">
          <Search className="w-5 h-5 text-emerald-700 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sarees, dress materials, bridal lehengas, ThreadLinc..."
            className="w-full text-sm sm:text-base bg-transparent text-slate-900 placeholder:text-stone-400 focus:outline-none font-light"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-600 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-[11px] font-medium px-2.5 py-1 rounded bg-stone-200/70 text-stone-600 hover:bg-stone-300 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-4 divide-y divide-stone-100 relative z-10 bg-white/70">
          {query.trim() === '' ? (
            <div className="py-10 text-center text-xs sm:text-sm text-stone-400 font-light">
              Type search terms like "sarees", "banarasi", "surat", "jaipur", "threadlinc credit"
            </div>
          ) : results.length === 0 ? (
            <div className="py-10 text-center text-xs sm:text-sm text-stone-500 font-light">
              No results found for "{query}". Try checking another textile term.
            </div>
          ) : (
            results.map((res, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onNavigate(res.path);
                  onClose();
                }}
                className="w-full text-left py-3 px-3 hover:bg-emerald-50/50 rounded-xl transition-all flex items-center justify-between group"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-lg bg-[#FAF8F5] text-stone-600 group-hover:bg-emerald-100/70 group-hover:text-emerald-800 transition-colors shrink-0 border border-stone-200/60 shadow-xs">
                    {res.type === 'business' && <Briefcase className="w-4 h-4" />}
                    {res.type === 'news' && <Newspaper className="w-4 h-4" />}
                    {res.type === 'report' && <FileText className="w-4 h-4" />}
                    {res.type === 'sustainability' && <Leaf className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-normal text-slate-950 group-hover:text-emerald-800 transition-colors">
                      {res.title}
                    </h4>
                    <p className="text-xs text-stone-500 line-clamp-1 mt-0.5 font-light">
                      {res.desc}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-emerald-800 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
