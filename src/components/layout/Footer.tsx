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
    <footer className="bg-[#102B25] text-[#F5F0E6]/85 border-t border-[#D97845]/30">
      {/* Top Banner: Trade Financing Bar */}
      <div className="border-b border-[#F5F0E6]/10 bg-[#173D35]/70 py-3.5 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#F5F0E6]/65 uppercase tracking-widest text-[11px]">
              {investorsData.stockInfo.symbol}
            </span>
            <span className="font-semibold text-white text-xs">
              {investorsData.stockInfo.exchange}
            </span>
            <span className="text-[#E89A6F] font-semibold flex items-center gap-0.5">
              {investorsData.stockInfo.lastUpdated}
            </span>
            <span className="text-[#F5F0E6]/55 hidden sm:inline text-xs">
              · {investorsData.stockInfo.marketCap}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#F5F0E6]/75 text-xs">
            <button
              onClick={() => onNavigate('/capital-support')}
              className="hover:text-white transition-colors flex items-center gap-1 font-semibold uppercase tracking-wider"
            >
              <span>Capital Support (ThreadLinc)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D97845]" />
            </button>
            <span className="hidden sm:inline text-[#F5F0E6]/30">·</span>
            <button
              onClick={onOpenInquiry}
              className="text-[#E89A6F] hover:text-white transition-colors font-semibold uppercase tracking-wider"
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
            <span className="font-serif text-2xl font-normal tracking-[0.12em] uppercase text-[#F5F0E6] block">
              Shree Durga Agency
            </span>
            <p className="text-xs sm:text-sm text-[#F5F0E6]/75 leading-relaxed max-w-sm font-normal break-normal">
              A textile sourcing and consulting partner helping retailers, wholesalers, boutiques and other textile businesses source products from relevant textile markets and production centres.
            </p>
            <div className="text-xs text-[#F5F0E6]/60 space-y-1 font-normal pt-2">
              <p>{siteConfig.legalEntity}</p>
              <p>{siteConfig.headquarters.address}</p>
              <p>{siteConfig.headquarters.city}, {siteConfig.headquarters.country}</p>
              <p className="pt-2 text-[#F5F0E6]/80">Contact: {siteConfig.headquarters.phone}</p>
            </div>
          </div>

          {/* Column 2: What We Source */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E89A6F] mb-4">
              What We Source
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F5F0E6]/75">
              <li>
                <button
                  onClick={() => onNavigate('/what-we-source/menswear')}
                  className="hover:text-white transition-colors text-left"
                >
                  Menswear (Sherwani, Kurta, Suits)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/what-we-source/womenswear')}
                  className="hover:text-white transition-colors text-left"
                >
                  Womenswear (Sarees, Suits, Lehengas)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/what-we-source/kidswear')}
                  className="hover:text-white transition-colors text-left"
                >
                  Kidswear (Children's Apparel)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/what-we-source/home-textiles')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home Textiles (Bedsheets, Towels)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/what-we-source/fabrics-fashion-accessories')}
                  className="hover:text-white transition-colors text-left"
                >
                  Fabrics & Fashion Accessories
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Network */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E89A6F] mb-4">
              Sourcing Network
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F5F0E6]/75">
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
                  onClick={() => onNavigate('/our-process')}
                  className="hover:text-white transition-colors text-left"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/sourcing-ecosystem')}
                  className="hover:text-white transition-colors text-left"
                >
                  Our Sourcing Ecosystem
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
                  onClick={() => onNavigate('/capital-support')}
                  className="hover:text-white transition-colors text-left"
                >
                  Capital Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/who-we-serve')}
                  className="hover:text-white transition-colors text-left"
                >
                  Who We Serve
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Sourcing Updates & Newsletter */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E89A6F] mb-4">
              Trade Updates
            </h4>
            <p className="text-xs text-[#F5F0E6]/75 mb-4 leading-relaxed font-normal">
              Receive seasonal market advisories, cluster price movements, and new catalog previews.
            </p>
            {isSubscribed ? (
              <div className="p-3 bg-[#173D35] border border-[#D97845]/50 rounded-md text-[#F5F0E6] text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#D97845]" />
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
                  className="w-full px-3 py-2 text-xs bg-[#173D35] border border-[#F5F0E6]/20 rounded text-white placeholder:text-[#F5F0E6]/45 focus:outline-none focus:border-[#D97845]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider bg-[#D97845] hover:bg-[#C26534] text-white rounded transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
            <div className="mt-6 pt-4 border-t border-[#F5F0E6]/10 flex items-center gap-3 text-xs text-[#F5F0E6]/65">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E89A6F] transition-colors font-medium"
              >
                LinkedIn
              </a>
              <span>·</span>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E89A6F] transition-colors font-medium"
              >
                WhatsApp Business
              </a>
              <span>·</span>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E89A6F] transition-colors font-medium"
              >
                Catalog Channel
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-14 pt-8 border-t border-[#F5F0E6]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F0E6]/55">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalEntity}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => onNavigate('/about')} className="hover:text-[#F5F0E6] transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('/about')} className="hover:text-[#F5F0E6] transition-colors">
              Terms of Engagement
            </button>
            <button onClick={() => onNavigate('/capital-support')} className="hover:text-[#F5F0E6] transition-colors">
              Trade Credit Terms
            </button>
            <button onClick={() => onNavigate('/contact')} className="hover:text-[#F5F0E6] transition-colors">
              Sourcing Hub Directory
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
