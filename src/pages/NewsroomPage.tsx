import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import newsData from '../content/config/news.json';
import { Search, ArrowRight, Calendar, Tag } from 'lucide-react';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';

interface NewsroomPageProps {
  onOpenArticle: (articleId: string) => void;
}

export const NewsroomPage: React.FC<NewsroomPageProps> = ({ onOpenArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredNews = newsData.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="pt-24 pb-24 bg-[#FAF9F6]">
      {/* Hero Header */}
      <div className="bg-[#0B132B] text-white py-20 lg:py-28 relative overflow-hidden border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400 block mb-3">
            Market Intelligence & Trade Advisories
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight max-w-3xl leading-[1.15] text-stone-100">
            Textile Sourcing Insights & Buying Guides
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-300 font-light max-w-2xl leading-relaxed">
            Stay informed on seasonal procurement timelines, Surat and Varanasi fabric trends, ThreadLinc credit support, and on-the-ground quality inspection guidelines.
          </p>

          {/* Search & Category Filter */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 max-w-3xl">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles and advisories..."
                className="w-full pl-11 pr-4 py-3 text-xs bg-stone-900/90 border border-stone-800 rounded-lg text-white placeholder:text-stone-400 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {['all', 'Sourcing Advisory', 'Market Intelligence', 'Financing & Credit', 'Quality Protocol'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2.5 text-xs font-medium rounded-lg capitalize transition-colors ${
                    selectedCategory === cat
                      ? 'bg-white text-stone-900 font-semibold'
                      : 'bg-stone-900/90 text-stone-300 border border-stone-800 hover:bg-stone-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {filteredNews.length === 0 ? (
          <div className="text-center py-20 text-stone-500 font-light">
            No articles match your search filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenArticle(item.id)}
                className="card-3d rounded-2xl overflow-hidden relative cursor-pointer flex flex-col justify-between group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/35 to-transparent z-10" />
                <div>
                  <div className="relative h-60 overflow-hidden bg-stone-100">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      fallbackTitle={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#0B132B]/85 backdrop-blur-md text-emerald-300 text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded shadow-xs border border-white/10 font-mono">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-2 text-xs text-stone-400 font-light mb-3">
                      <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{item.date}</span>
                      <span>·</span>
                      <span>{item.readTime}</span>
                    </div>
                    <h3 className="text-xl font-serif font-normal text-slate-950 group-hover:text-emerald-900 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 font-light mt-3 line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-emerald-800">
                  <span className="group-hover:translate-x-0.5 transition-transform">Read Full Advisory</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
