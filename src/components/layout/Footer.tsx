import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import siteConfig from '../../content/config/site.json';
import investorsData from '../../content/config/investors.json';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquiry }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      {/* Top Banner: Trade Financing Bar */}
      <div className="border-b border-white/10 bg-slate-900/40 py-3.5 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-400 uppercase tracking-widest text-[11px]">
              {investorsData.stockInfo.symbol}
            </span>
            <span className="font-mono tabular-nums font-semibold text-white text-xs">
              {investorsData.stockInfo.exchange}
            </span>
            <span className="text-emerald-400 font-mono tabular-nums font-semibold flex items-center gap-0.5">
              {investorsData.stockInfo.lastUpdated}
            </span>
            <span className="text-slate-500 hidden sm:inline text-xs">
              · {investorsData.stockInfo.marketCap}
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <button
              onClick={() => onNavigate('/investors')}
              className="hover:text-white transition-colors flex items-center gap-1 font-medium uppercase tracking-wider"
            >
              <span>ThreadLinc Financing</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <span className="hidden sm:inline">·</span>
            <button
              onClick={onOpenInquiry}
              className="text-white hover:text-emerald-400 transition-colors font-medium uppercase tracking-wider"
            >
              Sourcing Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-2xl font-normal tracking-[0.14em] uppercase text-white block">
              Shree Durga Agency
            </span>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-light break-normal">
              A textile sourcing and consulting partner helping retailers, wholesalers, boutiques and other textile businesses source products from relevant textile markets and production centres.
            </p>
            <div className="text-xs text-slate-500 space-y-1 font-normal pt-2">
              <p>{siteConfig.legalEntity}</p>
              <p>{siteConfig.headquarters.address}</p>
              <p>{siteConfig.headquarters.city}, {siteConfig.headquarters.country}</p>
              <p className="pt-2 text-slate-400">Contact: {siteConfig.headquarters.phone}</p>
            </div>
          </div>

          {/* Column 2: What We Source */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-4">
              What We Source
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('/businesses/sarees')}
                  className="hover:text-white transition-colors text-left"
                >
                  Sarees (Silk, Chiffon, Georgette)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/businesses/suit-sets-dress-materials')}
                  className="hover:text-white transition-colors text-left"
                >
                  Suit Sets & Dress Materials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/businesses/lehengas-occasion-wear')}
                  className="hover:text-white transition-colors text-left"
                >
                  Lehengas & Occasion Wear
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/businesses/fabrics-running-material')}
                  className="hover:text-white transition-colors text-left"
                >
                  Fabrics & Running Material
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/businesses/traditional-textiles')}
                  className="hover:text-white transition-colors text-left"
                >
                  Traditional Brocades & Handlooms
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Network */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-4">
              Sourcing Network
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About the Agency
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/innovation')}
                  className="hover:text-white transition-colors text-left"
                >
                  Sourcing Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/sustainability')}
                  className="hover:text-white transition-colors text-left"
                >
                  Sourcing Hubs & Markets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/csr')}
                  className="hover:text-white transition-colors text-left"
                >
                  Artisan & Weaver Clusters
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/investors')}
                  className="hover:text-white transition-colors text-left"
                >
                  ThreadLinc Financing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/careers')}
                  className="hover:text-white transition-colors text-left"
                >
                  Who We Serve
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Sourcing Updates & Newsletter */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-4">
              Trade Updates
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed font-normal">
              Receive seasonal market advisories, cluster price movements, and new catalog previews.
            </p>
            {isSubscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800 rounded-md text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscription confirmed. Thank you.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@business.com"
                  className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-800 rounded text-white placeholder:text-slate-500 focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 text-xs font-semibold uppercase tracking-wider bg-white hover:bg-slate-200 text-slate-950 rounded transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-slate-500">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <span>·</span>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp Business
              </a>
              <span>·</span>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Catalog Channel
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalEntity}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => onNavigate('/about')} className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('/about')} className="hover:text-slate-400 transition-colors">
              Terms of Engagement
            </button>
            <button onClick={() => onNavigate('/investors')} className="hover:text-slate-400 transition-colors">
              Trade Credit Terms
            </button>
            <button onClick={() => onNavigate('/contact')} className="hover:text-slate-400 transition-colors">
              Sourcing Hub Directory
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
