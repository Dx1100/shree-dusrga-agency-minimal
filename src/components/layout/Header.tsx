import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Search, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import navigationData from '../../content/config/navigation.json';
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const links = navigationData as NavigationLink[];
  const isLightMode = isTransparentHero && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200/60 py-4'
          : isTransparentHero
          ? 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 sm:py-6'
          : 'bg-white border-b border-stone-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Clean Editorial Brand Wordmark (No dots, no subtitle clutter) */}
          <button
            onClick={() => {
              onNavigate('/');
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center text-left group shrink-0 focus:outline-none"
            aria-label="Shree Durga Agency Home"
          >
            <span
              className={`font-serif text-lg sm:text-xl font-normal tracking-[0.14em] uppercase transition-colors ${
                isLightMode ? 'text-white' : 'text-slate-950'
              }`}
            >
              Shree Durga Agency
            </span>
          </button>

          {/* Zone 2: Navigation Links */}
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
                    className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-medium whitespace-nowrap transition-colors py-1 group focus:outline-none ${
                      isLightMode
                        ? isActive
                          ? 'text-white font-semibold border-b border-white'
                          : 'text-white/85 hover:text-white'
                        : isActive
                        ? 'text-emerald-900 font-semibold border-b border-emerald-800'
                        : 'text-stone-700 hover:text-slate-950'
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

                  {/* Dropdown Menu */}
                  {hasDropdown && activeDropdown === link.id && (
                    <div className="absolute top-full left-0 pt-3 w-80 animate-fade-in z-50">
                      <div className="card-3d rounded-xl p-2.5 overflow-hidden relative shadow-2xl">
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
                        {link.dropdown!.map((sub, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              onNavigate(sub.path);
                              setActiveDropdown(null);
                            }}
                            className="w-full text-left p-3 rounded-lg hover:bg-emerald-50/50 transition-all group/item block"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-serif text-sm font-normal text-slate-900 group-hover/item:text-emerald-900">
                                {sub.title}
                              </span>
                              <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover/item:text-emerald-700 group-hover/item:translate-x-1 transition-all" />
                            </div>
                            <p className="text-[11px] text-stone-500 mt-1 line-clamp-2 font-light">
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

          {/* Zone 3: Actions (Search & Quick Consultation) */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenSearch}
              className={`p-2 rounded-full transition-colors focus:outline-none ${
                isLightMode
                  ? 'text-white/80 hover:text-white hover:bg-white/10'
                  : 'text-stone-600 hover:text-slate-950 hover:bg-stone-100'
              }`}
              title="Search (Cmd+K)"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenInquiry}
              className={`hidden md:inline-flex items-center justify-center px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] transition-all whitespace-nowrap shrink-0 border ${
                isLightMode
                  ? 'border-white/60 text-white hover:bg-white hover:text-slate-950'
                  : 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
              }`}
            >
              Consultation
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden p-2 rounded-md transition-colors ${
                isLightMode
                  ? 'text-white hover:bg-white/10'
                  : 'text-slate-800 hover:bg-stone-100'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu rendered via createPortal directly into document.body */}
      {isMobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] xl:hidden flex justify-end animate-fade-in" role="dialog" aria-modal="true">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Full-Height Drawer Box */}
          <div className="relative w-full max-w-sm bg-white h-screen max-h-[100dvh] shadow-2xl flex flex-col z-10 overflow-hidden">
            {/* Drawer Top Header */}
            <div className="p-5 border-b border-stone-200/80 bg-[#FAF8F5] flex items-center justify-between shrink-0">
              <div>
                <span className="font-serif text-base font-normal tracking-[0.14em] uppercase text-slate-950 block">
                  Shree Durga Agency
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-800 block mt-0.5">
                  Textile Sourcing Partner
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-1.5 text-stone-500 hover:text-slate-950 rounded-lg hover:bg-stone-200/60 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Navigation Link Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-400 block pb-1 border-b border-stone-100">
                Menu Directory
              </span>

              <div className="divide-y divide-stone-100">
                {links.map((link) => {
                  const hasDropdown = Boolean(link.dropdown && link.dropdown.length > 0);
                  const isExpanded = mobileExpanded === link.id;
                  const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));

                  return (
                    <div key={link.id} className="py-3">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            onNavigate(link.path);
                          }}
                          className={`font-serif text-base tracking-wide text-left font-normal transition-colors ${
                            isActive ? 'text-emerald-900 font-semibold' : 'text-slate-900 hover:text-emerald-800'
                          }`}
                        >
                          {link.label}
                        </button>
                        {hasDropdown && (
                          <button
                            onClick={() => setMobileExpanded(isExpanded ? null : link.id)}
                            className="p-1.5 text-stone-400 hover:text-slate-700 transition-colors"
                            aria-label={`Toggle ${link.label} categories`}
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isExpanded ? 'rotate-180 text-emerald-800' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {hasDropdown && isExpanded && (
                        <div className="mt-2 pl-3 border-l-2 border-emerald-800/40 space-y-1.5 py-1 bg-stone-50/70 rounded-r-lg">
                          {link.dropdown!.map((sub, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                onNavigate(sub.path);
                              }}
                              className="block text-left text-xs text-stone-700 hover:text-emerald-800 py-1.5 font-light transition-colors w-full"
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

            {/* Pinned Bottom Consultation Action */}
            <div className="p-5 border-t border-stone-200/80 bg-white space-y-3 shrink-0 shadow-lg">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-[0.2em] bg-[#0B132B] hover:bg-emerald-800 text-white text-center rounded-lg transition-all shadow-md hover:shadow-lg active:scale-[0.99]"
              >
                Sourcing Consultation
              </button>
              <div className="flex items-center justify-between text-[10px] text-stone-400 font-light">
                <span>Shree Durga Agency</span>
                <span className="font-mono">Est. 1998 · India</span>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};
