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
            onClick={() => onNavigate('/newsroom')}
            className="hidden md:inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 hover:text-emerald-800 transition-colors pb-2 group whitespace-nowrap"
          >
            <span>All Market Advisories</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch">
          {/* Featured Article 3D Card */}
          {featuredNews && (
            <div
              onClick={() => onOpenArticle(featuredNews.id)}
              className="lg:col-span-7 card-3d rounded-3xl p-7 sm:p-8 cursor-pointer group flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
              <div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-stone-100 mb-6 border border-stone-200/80 shadow-[0_4px_14px_rgba(0,0,0,0.06)]">
                  <ImageWithFallback
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    fallbackTitle={featuredNews.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-md text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-950 shadow-xs border border-stone-200/60">
                    {featuredNews.category}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-stone-400 font-light">
                    <span>{featuredNews.date}</span>
                    <span>·</span>
                    <span>{featuredNews.readTime}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-slate-950 group-hover:text-emerald-900 transition-colors leading-snug tracking-tight break-normal">
                    {featuredNews.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed break-normal">
                    {featuredNews.summary}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 group-hover:text-emerald-800 transition-colors">
                <span>Read Full Advisory</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-emerald-800" />
              </div>
            </div>
          )}

          {/* Secondary News 3D Cards List */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {secondaryNews.map((news) => (
              <div
                key={news.id}
                onClick={() => onOpenArticle(news.id)}
                className="card-3d rounded-2xl p-7 sm:p-8 cursor-pointer group flex-1 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/30 to-transparent" />
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-stone-400 font-light mb-2.5">
                    <span className="font-semibold text-emerald-800 uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 border border-emerald-100/60">{news.category}</span>
                    <span>·</span>
                    <span>{news.date}</span>
                  </div>
                  <h4 className="font-serif text-xl font-normal text-slate-950 group-hover:text-emerald-900 transition-colors leading-snug tracking-tight break-normal">
                    {news.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-light mt-2.5 leading-relaxed break-normal line-clamp-3">
                    {news.summary}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-stone-200/60 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 group-hover:text-emerald-800">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-emerald-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
