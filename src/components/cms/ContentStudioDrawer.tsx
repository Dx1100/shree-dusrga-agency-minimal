import React, { useState, useEffect } from 'react';
import {
  Settings,
  X,
  Eye,
  EyeOff,
  ArrowUp,
  ArrowDown,
  Download,
  Copy,
  Check,
  RefreshCw,
  FileCode,
  Sliders,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Compass,
} from 'lucide-react';
import { HomepageConfig } from '../../types/content';

interface ContentStudioDrawerProps {
  homepageConfig: HomepageConfig;
  onUpdateHomepageConfig: (newConfig: HomepageConfig) => void;
  onResetDefaults: () => void;
}

export const ContentStudioDrawer: React.FC<ContentStudioDrawerProps> = ({
  homepageConfig,
  onUpdateHomepageConfig,
  onResetDefaults,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'sections' | 'visual' | 'export'>('sections');
  const [selectedSectionKey, setSelectedSectionKey] = useState<string>('hero');
  const [copied, setCopied] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [environmentLabel, setEnvironmentLabel] = useState('Preview Environment');

  // Domain & Environment Gate:
  // Shows only on Vercel preview (*.vercel.app), localhost, AI Studio preview (*.run.app),
  // OR when ?edit=true or ?studio=true is present in the URL.
  // Completely hidden on live custom domains by default.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hostname = window.location.hostname;
    const searchParams = new URLSearchParams(window.location.search);
    const hasQueryOverride =
      searchParams.get('edit') === 'true' || searchParams.get('studio') === 'true';

    const isLocal =
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.');

    const isVercel = hostname.endsWith('.vercel.app');
    const isCloudRun = hostname.endsWith('.run.app');
    const isDev = Boolean(import.meta.env?.DEV);

    if (hasQueryOverride) {
      setIsAuthorized(true);
      setEnvironmentLabel('Admin Access (?edit=true)');
    } else if (isLocal || isDev) {
      setIsAuthorized(true);
      setEnvironmentLabel('Local Dev Environment');
    } else if (isVercel) {
      setIsAuthorized(true);
      setEnvironmentLabel('Vercel Sample / Staging');
    } else if (isCloudRun) {
      setIsAuthorized(true);
      setEnvironmentLabel('AI Studio Preview');
    } else {
      // Production custom domain: hidden by default
      setIsAuthorized(false);
      setEnvironmentLabel('Live Production Domain');
    }

    // Secret keyboard shortcut to toggle editor on any domain: Ctrl+Shift+E or Cmd+Shift+E
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'E' || e.key === 'e')) {
        e.preventDefault();
        setIsAuthorized(true);
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  const labelMap: Record<string, string> = {
    hero: '01. Textile Hero Showcase',
    customersMarquee: '02. Our Customers Marquee Loop',
    intro: '03. Sourcing Agency Intro',
    stats: '04. Operational Highlights & Hubs',
    businesses: '05. What We Source Categories',
    capabilities: '06. Sourcing & Quality Protocol',
    innovation: '07. Our Process',
    sustainability: '08. Our Sourcing Ecosystem',
    csr: '09. Artisan & Weaver Clusters (CSR)',
    investors: '10. Capital Support (ThreadLinc)',
    testimonials: '11. Buyer Reviews & Testimonials',
    newsroom: '12. Market Advisories & Updates',
    careers: '13. Who We Serve',
    contactCta: '14. Sourcing Consultation CTA',
  };

  // Scroll to section on page
  const scrollToSection = (secKey: string) => {
    const el = document.getElementById(`section-${secKey}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Add brief highlight flash
      el.classList.add('ring-4', 'ring-emerald-500/40', 'rounded-2xl');
      setTimeout(() => {
        el.classList.remove('ring-4', 'ring-emerald-500/40', 'rounded-2xl');
      }, 1800);
    }
  };

  // Toggle section enabled
  const toggleSection = (sectionKey: keyof HomepageConfig['sections']) => {
    const currentSection = homepageConfig.sections[sectionKey];
    const isCurrentlyEnabled = currentSection ? currentSection.enabled : true;

    const updated: HomepageConfig = {
      ...homepageConfig,
      sections: {
        ...homepageConfig.sections,
        [sectionKey]: {
          ...(currentSection || {}),
          enabled: !isCurrentlyEnabled,
        },
      },
    };
    onUpdateHomepageConfig(updated);
  };

  // Reorder section
  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newOrder = [...homepageConfig.sectionsOrder];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newOrder.length) return;

    const temp = newOrder[index];
    newOrder[index] = newOrder[targetIndex];
    newOrder[targetIndex] = temp;

    onUpdateHomepageConfig({
      ...homepageConfig,
      sectionsOrder: newOrder,
    });
  };

  // Generic section field updater
  const updateSectionField = (
    sectionKey: keyof HomepageConfig['sections'],
    field: string,
    value: unknown
  ) => {
    const currentSection = homepageConfig.sections[sectionKey] || {};
    const updated: HomepageConfig = {
      ...homepageConfig,
      sections: {
        ...homepageConfig.sections,
        [sectionKey]: {
          ...currentSection,
          [field]: value,
        },
      },
    };
    onUpdateHomepageConfig(updated);
  };

  // Update hero slide fields
  const updateHeroField = (field: string, val: string) => {
    const updatedSlides = [...homepageConfig.sections.hero.slides];
    if (updatedSlides.length > 0) {
      updatedSlides[0] = {
        ...updatedSlides[0],
        [field]: val,
      };
      onUpdateHomepageConfig({
        ...homepageConfig,
        sections: {
          ...homepageConfig.sections,
          hero: {
            ...homepageConfig.sections.hero,
            slides: updatedSlides,
          },
        },
      });
    }
  };

  const copyConfigJSON = () => {
    const jsonStr = JSON.stringify(homepageConfig, null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const downloadConfigJSON = () => {
    const jsonStr = JSON.stringify(homepageConfig, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'homepage.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Do not render floating trigger if not in authorized preview / domain
  if (!isAuthorized && !isOpen) {
    return null;
  }

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-900/95 backdrop-blur-md text-white font-medium text-[11px] uppercase tracking-[0.16em] rounded-full shadow-2xl hover:bg-emerald-900 transition-all border border-emerald-500/40 hover:scale-105 focus:outline-none group"
          title="Open Section Studio (Visible in Preview Mode only)"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <Settings className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
          <span className="font-semibold">Section Studio</span>
        </button>
      </div>

      {/* Slide-out Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/65 backdrop-blur-xs flex justify-end animate-fade-in">
          <div
            className="fixed inset-0"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-lg bg-white h-full shadow-2xl border-l border-slate-200 flex flex-col z-10">
            {/* Header */}
            <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-emerald-800" />
                  <h3 className="text-base font-bold text-slate-900">
                    Content & Section Studio
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold">
                    Live
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5 font-light">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{environmentLabel}</span>
                  <span className="text-stone-300">·</span>
                  <span className="text-[11px] text-stone-400">Ctrl+Shift+E</span>
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200"
                aria-label="Close studio"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-200 bg-white px-5 pt-3">
              <button
                onClick={() => setActiveTab('sections')}
                className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
                  activeTab === 'sections'
                    ? 'border-emerald-800 text-emerald-900'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Reorder & Toggle</span>
              </button>
              <button
                onClick={() => setActiveTab('visual')}
                className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
                  activeTab === 'visual'
                    ? 'border-emerald-800 text-emerald-900'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Visual Section Editor</span>
              </button>
              <button
                onClick={() => setActiveTab('export')}
                className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
                  activeTab === 'export'
                    ? 'border-emerald-800 text-emerald-900'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>GitHub JSON</span>
              </button>
            </div>

            {/* Tab 1: Section Order & Toggle */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {activeTab === 'sections' && (
                <div className="space-y-3">
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-600 leading-relaxed">
                    Toggle visibility or use <ArrowUp className="w-3 h-3 inline mx-0.5" />
                    <ArrowDown className="w-3 h-3 inline mx-0.5" /> arrows to rearrange homepage sections in real-time.
                  </div>

                  <div className="space-y-2 pt-1">
                    {homepageConfig.sectionsOrder.map((secKey, idx) => {
                      const section = homepageConfig.sections[secKey as keyof HomepageConfig['sections']];
                      const isEnabled = section ? section.enabled : true;

                      return (
                        <div
                          key={secKey}
                          className={`p-3 rounded-xl border transition-all flex items-center justify-between ${
                            isEnabled
                              ? 'bg-white border-slate-200 shadow-xs'
                              : 'bg-slate-50 border-slate-200/60 opacity-60'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => toggleSection(secKey as keyof HomepageConfig['sections'])}
                              className={`p-1.5 rounded-md transition-colors ${
                                isEnabled
                                  ? 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                                  : 'bg-slate-200 text-slate-500 hover:bg-slate-300'
                              }`}
                              title={isEnabled ? 'Disable Section' : 'Enable Section'}
                            >
                              {isEnabled ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                            </button>
                            <span className="text-xs font-semibold text-slate-800">
                              {labelMap[secKey] || secKey}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => {
                                setSelectedSectionKey(secKey);
                                setActiveTab('visual');
                                scrollToSection(secKey);
                              }}
                              className="px-2 py-1 text-[11px] font-medium text-emerald-800 hover:bg-emerald-50 rounded transition-colors"
                              title="Edit this section in Visual Editor"
                            >
                              Edit
                            </button>
                            <button
                              disabled={idx === 0}
                              onClick={() => moveSection(idx, 'up')}
                              className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-20 rounded"
                              title="Move Section Up"
                            >
                              <ArrowUp className="w-3.5 h-3.5" />
                            </button>
                            <button
                              disabled={idx === homepageConfig.sectionsOrder.length - 1}
                              onClick={() => moveSection(idx, 'down')}
                              className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-20 rounded"
                              title="Move Section Down"
                            >
                              <ArrowDown className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tab 2: Universal Visual Section Editor */}
              {activeTab === 'visual' && (
                <div className="space-y-5">
                  {/* Section Selector */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Select Section to Edit
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={selectedSectionKey}
                        onChange={(e) => {
                          setSelectedSectionKey(e.target.value);
                          scrollToSection(e.target.value);
                        }}
                        className="flex-1 text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:outline-none focus:border-emerald-700"
                      >
                        {homepageConfig.sectionsOrder.map((key) => (
                          <option key={key} value={key}>
                            {labelMap[key] || key}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => scrollToSection(selectedSectionKey)}
                        className="px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors border border-emerald-200"
                        title="Scroll to section on page"
                      >
                        <Compass className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Locate</span>
                      </button>
                    </div>
                  </div>

                  {/* Section-Specific Form Fields */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                        {labelMap[selectedSectionKey] || selectedSectionKey}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        Live preview active
                      </span>
                    </div>

                    {/* HERO SECTION */}
                    {selectedSectionKey === 'hero' && (
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Kicker Tag
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.hero.slides[0]?.kicker || ''}
                            onChange={(e) => updateHeroField('kicker', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Main Headline
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.hero.slides[0]?.heading || ''}
                            onChange={(e) => updateHeroField('heading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Subheading
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.hero.slides[0]?.subheading || ''}
                            onChange={(e) => updateHeroField('subheading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Description Paragraph
                          </label>
                          <textarea
                            rows={3}
                            value={homepageConfig.sections.hero.slides[0]?.description || ''}
                            onChange={(e) => updateHeroField('description', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-semibold text-slate-700 block mb-1">
                              Primary CTA Button
                            </label>
                            <input
                              type="text"
                              value={homepageConfig.sections.hero.slides[0]?.ctaText || ''}
                              onChange={(e) => updateHeroField('ctaText', e.target.value)}
                              className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-semibold text-slate-700 block mb-1">
                              Secondary CTA Button
                            </label>
                            <input
                              type="text"
                              value={homepageConfig.sections.hero.slides[0]?.secondaryCtaText || ''}
                              onChange={(e) => updateHeroField('secondaryCtaText', e.target.value)}
                              className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CUSTOMERS MARQUEE */}
                    {selectedSectionKey === 'customersMarquee' && (
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Kicker Tag
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.customersMarquee?.kicker || ''}
                            onChange={(e) => updateSectionField('customersMarquee', 'kicker', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Headline
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.customersMarquee?.heading || ''}
                            onChange={(e) => updateSectionField('customersMarquee', 'heading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Sourcing Context & Stats Subtext
                          </label>
                          <textarea
                            rows={3}
                            value={homepageConfig.sections.customersMarquee?.statsText || ''}
                            onChange={(e) => updateSectionField('customersMarquee', 'statsText', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                      </div>
                    )}

                    {/* INTRO SECTION */}
                    {selectedSectionKey === 'intro' && (
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Kicker Tag
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.intro?.kicker || ''}
                            onChange={(e) => updateSectionField('intro', 'kicker', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Headline
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.intro?.heading || ''}
                            onChange={(e) => updateSectionField('intro', 'heading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Lead Paragraph
                          </label>
                          <textarea
                            rows={3}
                            value={homepageConfig.sections.intro?.leadParagraph || ''}
                            onChange={(e) => updateSectionField('intro', 'leadParagraph', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Agency Philosophy Quote
                          </label>
                          <textarea
                            rows={2}
                            value={homepageConfig.sections.intro?.quote || ''}
                            onChange={(e) => updateSectionField('intro', 'quote', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                      </div>
                    )}

                    {/* STATS SECTION */}
                    {selectedSectionKey === 'stats' && (
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Headline
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.stats?.heading || ''}
                            onChange={(e) => updateSectionField('stats', 'heading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Subheading
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.stats?.subheading || ''}
                            onChange={(e) => updateSectionField('stats', 'subheading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                      </div>
                    )}

                    {/* BUSINESSES / WHAT WE SOURCE */}
                    {selectedSectionKey === 'businesses' && (
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Kicker Tag
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.businesses?.kicker || ''}
                            onChange={(e) => updateSectionField('businesses', 'kicker', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Headline
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.businesses?.heading || ''}
                            onChange={(e) => updateSectionField('businesses', 'heading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Subheading
                          </label>
                          <textarea
                            rows={3}
                            value={homepageConfig.sections.businesses?.subheading || ''}
                            onChange={(e) => updateSectionField('businesses', 'subheading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            View All Button Text
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.businesses?.viewAllText || ''}
                            onChange={(e) => updateSectionField('businesses', 'viewAllText', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                      </div>
                    )}

                    {/* CAPABILITIES SECTION */}
                    {selectedSectionKey === 'capabilities' && (
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Kicker Tag
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.capabilities?.kicker || ''}
                            onChange={(e) => updateSectionField('capabilities', 'kicker', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Headline
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.capabilities?.heading || ''}
                            onChange={(e) => updateSectionField('capabilities', 'heading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Description
                          </label>
                          <textarea
                            rows={3}
                            value={homepageConfig.sections.capabilities?.description || ''}
                            onChange={(e) => updateSectionField('capabilities', 'description', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                      </div>
                    )}

                    {/* OUR PROCESS (INNOVATION) */}
                    {selectedSectionKey === 'innovation' && (
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Kicker Tag
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.innovation?.kicker || ''}
                            onChange={(e) => updateSectionField('innovation', 'kicker', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Headline
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.innovation?.heading || ''}
                            onChange={(e) => updateSectionField('innovation', 'heading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Description
                          </label>
                          <textarea
                            rows={3}
                            value={homepageConfig.sections.innovation?.description || ''}
                            onChange={(e) => updateSectionField('innovation', 'description', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-semibold text-slate-700 block mb-1">
                              Cluster Stat
                            </label>
                            <input
                              type="text"
                              value={homepageConfig.sections.innovation?.patentsCount || ''}
                              onChange={(e) => updateSectionField('innovation', 'patentsCount', e.target.value)}
                              className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-semibold text-slate-700 block mb-1">
                              Model Stat
                            </label>
                            <input
                              type="text"
                              value={homepageConfig.sections.innovation?.rdSpendPercent || ''}
                              onChange={(e) => updateSectionField('innovation', 'rdSpendPercent', e.target.value)}
                              className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* OUR SOURCING ECOSYSTEM (SUSTAINABILITY) */}
                    {selectedSectionKey === 'sustainability' && (
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Kicker Tag
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.sustainability?.kicker || ''}
                            onChange={(e) => updateSectionField('sustainability', 'kicker', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Headline
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.sustainability?.heading || ''}
                            onChange={(e) => updateSectionField('sustainability', 'heading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Description
                          </label>
                          <textarea
                            rows={3}
                            value={homepageConfig.sections.sustainability?.description || ''}
                            onChange={(e) => updateSectionField('sustainability', 'description', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            CTA Button Text
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.sustainability?.ctaText || ''}
                            onChange={(e) => updateSectionField('sustainability', 'ctaText', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                      </div>
                    )}

                    {/* ARTISAN & WEAVER CLUSTERS (CSR) */}
                    {selectedSectionKey === 'csr' && (
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Kicker Tag
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.csr?.kicker || ''}
                            onChange={(e) => updateSectionField('csr', 'kicker', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Headline
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.csr?.heading || ''}
                            onChange={(e) => updateSectionField('csr', 'heading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Description
                          </label>
                          <textarea
                            rows={3}
                            value={homepageConfig.sections.csr?.description || ''}
                            onChange={(e) => updateSectionField('csr', 'description', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                      </div>
                    )}

                    {/* CAPITAL SUPPORT (INVESTORS) */}
                    {selectedSectionKey === 'investors' && (
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Kicker Tag
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.investors?.kicker || ''}
                            onChange={(e) => updateSectionField('investors', 'kicker', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Headline
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.investors?.heading || ''}
                            onChange={(e) => updateSectionField('investors', 'heading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Subheading
                          </label>
                          <textarea
                            rows={3}
                            value={homepageConfig.sections.investors?.subheading || ''}
                            onChange={(e) => updateSectionField('investors', 'subheading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                      </div>
                    )}

                    {/* WHO WE SERVE (CAREERS) */}
                    {selectedSectionKey === 'careers' && (
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Kicker Tag
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.careers?.kicker || ''}
                            onChange={(e) => updateSectionField('careers', 'kicker', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Headline
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.careers?.heading || ''}
                            onChange={(e) => updateSectionField('careers', 'heading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Description
                          </label>
                          <textarea
                            rows={3}
                            value={homepageConfig.sections.careers?.description || ''}
                            onChange={(e) => updateSectionField('careers', 'description', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                      </div>
                    )}

                    {/* CONTACT CTA */}
                    {selectedSectionKey === 'contactCta' && (
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Headline
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.contactCta?.heading || ''}
                            onChange={(e) => updateSectionField('contactCta', 'heading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Description
                          </label>
                          <textarea
                            rows={3}
                            value={homepageConfig.sections.contactCta?.description || ''}
                            onChange={(e) => updateSectionField('contactCta', 'description', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-semibold text-slate-700 block mb-1">
                              Primary Button
                            </label>
                            <input
                              type="text"
                              value={homepageConfig.sections.contactCta?.primaryButtonText || ''}
                              onChange={(e) => updateSectionField('contactCta', 'primaryButtonText', e.target.value)}
                              className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-semibold text-slate-700 block mb-1">
                              Secondary Button
                            </label>
                            <input
                              type="text"
                              value={homepageConfig.sections.contactCta?.secondaryButtonText || ''}
                              onChange={(e) => updateSectionField('contactCta', 'secondaryButtonText', e.target.value)}
                              className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* TESTIMONIALS */}
                    {selectedSectionKey === 'testimonials' && (
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Kicker Tag
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.testimonials?.kicker || ''}
                            onChange={(e) => updateSectionField('testimonials', 'kicker', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Headline
                          </label>
                          <input
                            type="text"
                            value={homepageConfig.sections.testimonials?.heading || ''}
                            onChange={(e) => updateSectionField('testimonials', 'heading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-700 block mb-1">
                            Subheading
                          </label>
                          <textarea
                            rows={3}
                            value={homepageConfig.sections.testimonials?.subheading || ''}
                            onChange={(e) => updateSectionField('testimonials', 'subheading', e.target.value)}
                            className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Tab 3: GitHub JSON Export */}
              {activeTab === 'export' && (
                <div className="space-y-4">
                  <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 leading-relaxed space-y-2">
                    <p className="font-semibold flex items-center gap-1.5 text-emerald-900">
                      <Check className="w-4 h-4 text-emerald-700" />
                      <span>Decoupled GitHub Content Workflow</span>
                    </p>
                    <ol className="list-decimal list-inside space-y-1 text-emerald-900/90 pl-1 font-light">
                      <li>Make your live adjustments in the visual tabs.</li>
                      <li>Click <strong>Download File</strong> (or Copy JSON).</li>
                      <li>
                        Replace the file at <code className="bg-emerald-100 text-emerald-900 px-1 py-0.5 rounded font-mono">src/content/config/homepage.json</code> in your local repository.
                      </li>
                      <li>Commit and push to GitHub — Vercel updates the production website automatically!</li>
                    </ol>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={copyConfigJSON}
                      className="flex-1 py-2.5 px-3 text-xs font-semibold bg-emerald-800 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied to Clipboard' : 'Copy JSON'}</span>
                    </button>
                    <button
                      onClick={downloadConfigJSON}
                      className="py-2.5 px-4 text-xs font-semibold bg-slate-100 text-slate-800 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5 border border-slate-300"
                    >
                      <Download className="w-4 h-4 text-slate-700" />
                      <span>Download File</span>
                    </button>
                  </div>

                  <pre className="text-[11px] font-mono bg-slate-900 text-slate-200 p-3.5 rounded-xl overflow-x-auto max-h-72 leading-relaxed border border-slate-800 shadow-inner">
                    {JSON.stringify(homepageConfig, null, 2)}
                  </pre>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
              <button
                onClick={onResetDefaults}
                className="text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors"
                title="Revert back to default configuration"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 font-bold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
