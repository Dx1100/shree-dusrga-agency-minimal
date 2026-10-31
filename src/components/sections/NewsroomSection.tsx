import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRight } from 'lucide-react';
import newsData from '../../content/config/news.json';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface NewsroomSectionProps {
  kicker: string;
  heading: string;
  subheading: string;
  onNavigate: (path: string) => void;
  onOpenArticle: (articleId: string) => void;
}

export const NewsroomSection: React.FC<NewsroomSectionProps> = ({
  kicker,
  heading,
  subheading,
  onNavigate,
  onOpenArticle,
}) => {
  const featuredNews = newsData[0];
  const secondaryNews = newsData.slice(1, 3);

  return (
    <section className="py-24 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeading
            kicker={kicker}
            heading={heading}
            lead={subheading}
            className="mb-0"
          />
          <button
            onClick={() => onNavigate('/newsroom')}
            className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 hover:text-[#9b111e] transition-colors pb-2 group whitespace-nowrap"
          >
            <span>All Press Releases</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch">
          {/* Featured Article Card */}
          {featuredNews && (
            <div
              onClick={() => onOpenArticle(featuredNews.id)}
              className="lg:col-span-7 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 mb-5">
                  <ImageWithFallback
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    fallbackTitle={featuredNews.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b111e] shadow-xs">
                    {featuredNews.category}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>{featuredNews.date}</span>
                    <span>·</span>
                    <span>{featuredNews.readTime}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal text-slate-950 group-hover:text-[#9b111e] transition-colors leading-snug break-normal">
                    {featuredNews.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal break-normal">
                    {featuredNews.summary}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 group-hover:text-[#9b111e] transition-colors">
                <span>Read Official Statement</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          )}

          {/* Secondary News List */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {secondaryNews.map((news) => (
              <div
                key={news.id}
                onClick={() => onOpenArticle(news.id)}
                className="p-6 sm:p-7 bg-slate-50/70 border border-slate-200/60 hover:bg-white hover:border-slate-300 transition-all cursor-pointer group flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                    <span className="font-semibold text-[#9b111e] uppercase tracking-wider">{news.category}</span>
                    <span>·</span>
                    <span>{news.date}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-normal text-slate-950 group-hover:text-[#9b111e] transition-colors leading-snug break-normal">
                    {news.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal break-normal line-clamp-3">
                    {news.summary}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/50 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 group-hover:text-[#9b111e]">
                  <span>Read Statement</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
