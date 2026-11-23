import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
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
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#173D35]/10 py-4'
          : isTransparentHero
          ? 'bg-gradient-to-b from-[#102B25]/80 via-[#102B25]/35 to-transparent py-5 sm:py-6'
          : 'bg-white border-b border-[#173D35]/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Clean Editorial Brand Wordmark */}
          <button
            onClick={() => {
              onNavigate('/');
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center text-left group shrink-0 focus:outline-none"
            aria-label="Shree Durga Agency Home"
          >
            <span
              className={`font-serif text-lg sm:text-xl font-medium tracking-[0.12em] uppercase transition-colors ${
                isLightMode ? 'text-[#F5F0E6]' : 'text-[#173D35]'
              }`}
            >
              Shree Durga Agency
            </span>
          </button>

          {/* Actions: Search, Get In Touch & Hamburger Menu (All Devices) */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <button
              onClick={onOpenSearch}
              className={`p-2 rounded-full transition-colors focus:outline-none ${
                isLightMode
                  ? 'text-[#F5F0E6]/85 hover:text-white hover:bg-white/10'
                  : 'text-[#173D35]/75 hover:text-[#173D35] hover:bg-[#F5F0E6]'
              }`}
              title="Search (Cmd+K)"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenInquiry}
              className={`hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] rounded-md transition-all whitespace-nowrap shrink-0 ${
                isLightMode
                  ? 'bg-[#D97845] hover:bg-[#C26534] text-white shadow-sm'
                  : 'bg-[#D97845] hover:bg-[#C26534] text-white shadow-xs'
              }`}
            >
              Get In Touch
            </button>

            {/* Hamburger Menu Toggle Button (All Devices) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-md transition-all font-semibold uppercase tracking-[0.16em] text-[11px] focus:outline-none ${
                isLightMode
                  ? 'text-[#F5F0E6] hover:bg-white/10 border border-white/20'
                  : 'text-[#173D35] hover:bg-[#F5F0E6] border border-[#173D35]/20'
              }`}
              aria-label="Toggle navigation menu"
            >
              <span className="font-semibold tracking-[0.18em]">Menu</span>
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-Out Drawer Menu (All Devices) rendered via createPortal directly into document.body */}
      {isMobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] flex justify-end animate-fade-in" role="dialog" aria-modal="true">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-[#102B25]/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Full-Height Drawer Box */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-white h-screen max-h-[100dvh] shadow-2xl flex flex-col z-10 overflow-hidden">
            {/* Drawer Top Header */}
            <div className="p-5 border-b border-[#173D35]/10 bg-[#F5F0E6] flex items-center justify-between shrink-0">
              <div>
                <span className="font-serif text-base font-medium tracking-[0.12em] uppercase text-[#173D35] block">
                  Shree Durga Agency
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D97845] block mt-0.5">
                  Textile Sourcing Partner
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-1.5 text-[#173D35]/65 hover:text-[#173D35] rounded-lg hover:bg-white/70 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Navigation Link Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#173D35]/50 block pb-1 border-b border-[#173D35]/10">
                Menu Directory
              </span>

              <div className="divide-y divide-[#173D35]/10">
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
                            isActive ? 'text-[#D97845] font-semibold' : 'text-[#173D35] hover:text-[#D97845]'
                          }`}
                        >
                          {link.label}
                        </button>
                        {hasDropdown && (
                          <button
                            onClick={() => setMobileExpanded(isExpanded ? null : link.id)}
                            className="p-1.5 text-[#173D35]/50 hover:text-[#173D35] transition-colors"
                            aria-label={`Toggle ${link.label} categories`}
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isExpanded ? 'rotate-180 text-[#D97845]' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {hasDropdown && isExpanded && (
                        <div className="mt-2 pl-3 border-l-2 border-[#D97845]/70 space-y-1.5 py-1.5 bg-[#F5F0E6]/70 rounded-r-lg">
                          {link.dropdown!.map((sub, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                onNavigate(sub.path);
                              }}
                              className="block text-left text-xs font-medium text-[#173D35]/85 hover:text-[#D97845] py-1.5 transition-colors w-full"
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
            <div className="p-5 border-t border-[#173D35]/10 bg-[#F5F0E6] space-y-3 shrink-0 shadow-lg">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-[0.2em] bg-[#D97845] hover:bg-[#C26534] text-white text-center rounded-lg transition-all shadow-md active:scale-[0.99]"
              >
                Get In Touch
              </button>
              <div className="flex items-center justify-between text-[10px] text-[#173D35]/60 font-medium">
                <span>Shree Durga Agency</span>
                <span>Textile Sourcing · India</span>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};
