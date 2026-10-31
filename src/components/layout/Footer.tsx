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
      {/* Top Banner: Financial Ticker Bar */}
      <div className="border-b border-white/10 bg-slate-900/40 py-3.5 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-400 uppercase tracking-widest text-[11px]">
              {investorsData.stockInfo.exchange}: {investorsData.stockInfo.symbol}
            </span>
            <span className="font-mono tabular-nums font-bold text-white text-sm">
              ₹{investorsData.stockInfo.price.toFixed(2)}
            </span>
            <span className="text-emerald-400 font-mono tabular-nums font-semibold flex items-center gap-0.5">
              +{investorsData.stockInfo.change} (+{investorsData.stockInfo.changePercent}%)
            </span>
            <span className="text-slate-500 hidden sm:inline text-xs">
              · MCap: {investorsData.stockInfo.marketCap}
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <button
              onClick={() => onNavigate('/investors')}
              className="hover:text-white transition-colors flex items-center gap-1 font-medium uppercase tracking-wider"
            >
              <span>Investor Center</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <span className="hidden sm:inline">·</span>
            <button
              onClick={onOpenInquiry}
              className="text-white hover:text-rose-400 transition-colors font-medium uppercase tracking-wider"
            >
              Partner Inquiry
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-bold tracking-[0.08em] text-white">
                ARVION
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#9b111e] mb-2 shrink-0" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-normal break-normal">
              Pioneering advanced materials, critical process metallurgy, and closed-loop environmental solutions since 1938.
            </p>
            <div className="text-xs text-slate-500 space-y-1 font-normal pt-2">
              <p>{siteConfig.legalEntity}</p>
              <p>{siteConfig.headquarters.address}</p>
              <p>{siteConfig.headquarters.city}, {siteConfig.headquarters.country}</p>
              <p className="pt-2 text-slate-400">Tel: {siteConfig.headquarters.phone}</p>
            </div>
          </div>

          {/* Column 2: Businesses */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-4">
              Our Businesses
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('/businesses/advanced-materials')}
                  className="hover:text-white transition-colors text-left"
                >
                  Advanced Materials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/businesses/heavy-engineering')}
                  className="hover:text-white transition-colors text-left"
                >
                  Heavy Engineering
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/businesses/environmental-solutions')}
                  className="hover:text-white transition-colors text-left"
                >
                  Environmental & ZLD
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/businesses/textiles-smart-fabrics')}
                  className="hover:text-white transition-colors text-left"
                >
                  Textiles & Smart Fabrics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/businesses/telecom-digital-iot')}
                  className="hover:text-white transition-colors text-left"
                >
                  Industrial IoT & Digital
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & ESG */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-4">
              Corporate & Impact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-white transition-colors text-left"
                >
                  Heritage & Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/innovation')}
                  className="hover:text-white transition-colors text-left"
                >
                  R&D & Patents
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/sustainability')}
                  className="hover:text-white transition-colors text-left"
                >
                  Sustainability & Net-Zero
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/csr')}
                  className="hover:text-white transition-colors text-left"
                >
                  Arvion Foundation (CSR)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/investors')}
                  className="hover:text-white transition-colors text-left"
                >
                  Investor Relations & Filings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/careers')}
                  className="hover:text-white transition-colors text-left"
                >
                  Careers & Culture
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Disclosures */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-4">
              Corporate Disclosures
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed font-normal">
              Subscribe to quarterly investor earnings notices and sustainability milestones.
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
                  placeholder="name@company.com"
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
                Twitter/X
              </a>
              <span>·</span>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                YouTube
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
              Terms of Use
            </button>
            <button onClick={() => onNavigate('/investors')} className="hover:text-slate-400 transition-colors">
              Whistleblower Policy
            </button>
            <button onClick={() => onNavigate('/contact')} className="hover:text-slate-400 transition-colors">
              Global Directory
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
