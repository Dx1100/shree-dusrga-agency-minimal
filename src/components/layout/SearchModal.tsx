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

    // Search what we source categories & subcategories
    businessesData.forEach((biz) => {
      const matchesSubcategory = biz.subcategories?.some((s) => s.toLowerCase().includes(q));
      if (
        biz.title.toLowerCase().includes(q) ||
        biz.summary.toLowerCase().includes(q) ||
        biz.category.toLowerCase().includes(q) ||
        matchesSubcategory
      ) {
        matches.push({
          type: 'business',
          title: biz.title,
          desc: biz.sourcingSupport || biz.summary,
          path: `/what-we-source/${biz.slug}`,
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#102B25]/75 backdrop-blur-sm animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl card-3d rounded-2xl shadow-2xl border border-[#173D35]/15 overflow-hidden z-10 flex flex-col">
        {/* Top Specular Bevel Line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845] to-transparent z-20" />
        
        {/* Input bar */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-[#173D35]/10 bg-[#F5F0E6]/70 relative z-10">
          <Search className="w-5 h-5 text-[#D97845] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sarees, dress materials, bridal lehengas, ThreadLinc..."
            className="w-full text-sm sm:text-base bg-transparent text-[#173D35] placeholder:text-[#173D35]/45 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#173D35]/50 hover:text-[#173D35] rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-[11px] font-semibold px-2.5 py-1 rounded bg-[#173D35]/10 text-[#173D35] hover:bg-[#173D35]/20 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-4 divide-y divide-[#173D35]/10 relative z-10 bg-white">
          {query.trim() === '' ? (
            <div className="py-10 text-center text-xs sm:text-sm text-[#173D35]/60">
              Type search terms like "sarees", "banarasi", "surat", "jaipur", "threadlinc credit"
            </div>
          ) : results.length === 0 ? (
            <div className="py-10 text-center text-xs sm:text-sm text-[#173D35]/70">
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
                className="w-full text-left py-3 px-3 hover:bg-[#F5F0E6]/70 rounded-xl transition-all flex items-center justify-between group"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-lg bg-[#F5F0E6] text-[#173D35] group-hover:bg-[#D97845]/15 group-hover:text-[#D97845] transition-colors shrink-0 border border-[#173D35]/10 shadow-xs">
                    {res.type === 'business' && <Briefcase className="w-4 h-4" />}
                    {res.type === 'news' && <Newspaper className="w-4 h-4" />}
                    {res.type === 'report' && <FileText className="w-4 h-4" />}
                    {res.type === 'sustainability' && <Leaf className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-medium text-[#173D35] group-hover:text-[#D97845] transition-colors">
                      {res.title}
                    </h4>
                    <p className="text-xs text-[#173D35]/70 line-clamp-1 mt-0.5">
                      {res.desc}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#173D35]/35 group-hover:text-[#D97845] group-hover:translate-x-1 transition-all shrink-0 ml-4" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
