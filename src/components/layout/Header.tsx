import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import navigationData from '../../content/config/navigation.json';
import siteConfig from '../../content/config/site.json';
import { NavigationLink } from '../../types/content';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
  onOpenInquiry: () => void;
  isTransparentHero?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenSearch,
  onOpenInquiry,
  isTransparentHero = false,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = navigationData as NavigationLink[];

  const isLightMode = isTransparentHero && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/60 py-4'
          : isTransparentHero
          ? 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 sm:py-6'
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Minimalist Brand Wordmark inspired by Arvind */}
          <button
            onClick={() => {
              onNavigate('/');
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 text-left group shrink-0 focus:outline-none"
            aria-label="Arvion Global Home"
          >
            <div className="flex items-center gap-1.5">
              <span
                className={`text-xl sm:text-2xl font-bold tracking-[0.08em] transition-colors ${
                  isLightMode ? 'text-white' : 'text-slate-950'
                }`}
              >
                ARVION
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#9b111e] mb-2 shrink-0" />
            </div>
            <span
              className={`hidden sm:inline-block text-[10px] uppercase tracking-[0.2em] font-medium border-l pl-2 transition-colors ${
                isLightMode ? 'border-white/30 text-white/70' : 'border-slate-300 text-slate-500'
              }`}
            >
              Enterprises
            </span>
          </button>

          {/* Zone 2: Minimalist Navigation Links (xl+ screen ensures zero text crowding) */}
          <nav className="hidden xl:flex items-center gap-7 2xl:gap-8">
            {links.map((link) => {
              const hasDropdown = Boolean(link.dropdown && link.dropdown.length > 0);
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));

              return (
                <div
                  key={link.id}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(link.id)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <button
                    onClick={() => onNavigate(link.path)}
                    className={`flex items-center gap-1 text-[12px] uppercase tracking-[0.14em] font-medium whitespace-nowrap transition-colors py-1 group focus:outline-none ${
                      isLightMode
                        ? isActive
                          ? 'text-white font-semibold border-b-2 border-white'
                          : 'text-white/85 hover:text-white'
                        : isActive
                        ? 'text-[#9b111e] font-semibold border-b-2 border-[#9b111e]'
                        : 'text-slate-700 hover:text-slate-950'
                    }`}
                  >
                    <span>{link.label}</span>
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === link.id ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Minimalist Dropdown Menu */}
                  {hasDropdown && activeDropdown === link.id && (
                    <div className="absolute top-full left-0 pt-3 w-72 animate-fade-in z-50">
                      <div className="bg-white rounded-lg shadow-xl border border-slate-100 p-2 overflow-hidden">
                        {link.dropdown!.map((sub, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              onNavigate(sub.path);
                              setActiveDropdown(null);
                            }}
                            className="w-full text-left p-3 rounded-md hover:bg-slate-50 transition-colors group/item block"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-slate-900 group-hover/item:text-[#9b111e]">
                                {sub.title}
                              </span>
                              <ArrowRight className="w-3 h-3 text-slate-400 group-hover/item:text-[#9b111e] group-hover/item:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                              {sub.description}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Zone 3: Minimalist Actions (Search & Quick Inquiry) */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenSearch}
              className={`p-2 rounded-full transition-colors focus:outline-none ${
                isLightMode
                  ? 'text-white/80 hover:text-white hover:bg-white/10'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
              }`}
              title="Search (Cmd+K)"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenInquiry}
              className={`hidden md:inline-flex items-center justify-center px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all whitespace-nowrap shrink-0 border ${
                isLightMode
                  ? 'border-white/50 text-white hover:bg-white hover:text-slate-950'
                  : 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
              }`}
            >
              Contact
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden p-2 rounded-md transition-colors ${
                isLightMode
                  ? 'text-white hover:bg-white/10'
                  : 'text-slate-800 hover:bg-slate-100'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[65px] bg-slate-950/70 backdrop-blur-sm z-30 animate-fade-in">
          <div className="bg-white h-full max-w-sm ml-auto p-6 overflow-y-auto shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Navigation
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="divide-y divide-slate-100">
                {links.map((link) => {
                  const hasDropdown = Boolean(link.dropdown && link.dropdown.length > 0);
                  const isExpanded = mobileExpanded === link.id;

                  return (
                    <div key={link.id} className="py-2.5">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => {
                            onNavigate(link.path);
                            setIsMobileMenuOpen(false);
                          }}
                          className="text-sm uppercase tracking-wider font-medium text-slate-900 hover:text-[#9b111e] text-left"
                        >
                          {link.label}
                        </button>
                        {hasDropdown && (
                          <button
                            onClick={() => setMobileExpanded(isExpanded ? null : link.id)}
                            className="p-1.5 text-slate-400 hover:text-slate-700"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {hasDropdown && isExpanded && (
                        <div className="mt-2 pl-3 border-l-2 border-[#9b111e]/40 space-y-2 py-1">
                          {link.dropdown!.map((sub, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={() => {
                                onNavigate(sub.path);
                                setIsMobileMenuOpen(false);
                              }}
                              className="block text-left text-xs text-slate-600 hover:text-[#9b111e] py-1"
                            >
                              {sub.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-[0.2em] bg-slate-900 text-white text-center hover:bg-[#9b111e] transition-colors"
              >
                Inquire / Partner
              </button>
              <p className="text-[11px] text-center text-slate-400">
                Arvion Global Industries · Est. 1938
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
