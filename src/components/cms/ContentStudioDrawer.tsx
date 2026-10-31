import React, { useState } from 'react';
import { Settings, X, Eye, EyeOff, ArrowUp, ArrowDown, Download, Copy, Check, RefreshCw, FileCode } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState<'sections' | 'hero' | 'export'>('sections');
  const [copied, setCopied] = useState(false);

  // Toggle section enabled
  const toggleSection = (sectionKey: keyof HomepageConfig['sections']) => {
    const updated = {
      ...homepageConfig,
      sections: {
        ...homepageConfig.sections,
        [sectionKey]: {
          ...homepageConfig.sections[sectionKey],
          enabled: !homepageConfig.sections[sectionKey].enabled,
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

  // Update Hero text
  const updateHeroField = (field: 'heading' | 'subheading' | 'kicker' | 'description', val: string) => {
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

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 bg-slate-900/90 backdrop-blur-md text-white font-medium text-[11px] uppercase tracking-[0.16em] rounded-full shadow-xl hover:bg-[#9b111e] transition-all border border-slate-700/60 focus:outline-none"
          title="Open CMS & GitHub Section Manager"
        >
          <Settings className="w-3.5 h-3.5" />
          <span>Section Studio</span>
        </button>
      </div>

      {/* Slide-out Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end animate-fade-in">
          <div
            className="fixed inset-0"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl border-l border-slate-200 flex flex-col z-10">
            {/* Header */}
            <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-blue-900" />
                  <span>Content & Section Studio</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Manage sections & export GitHub-ready JSON
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-200 bg-white px-5 pt-3">
              <button
                onClick={() => setActiveTab('sections')}
                className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
                  activeTab === 'sections'
                    ? 'border-blue-900 text-blue-900'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Section Registry ({homepageConfig.sectionsOrder.length})
              </button>
              <button
                onClick={() => setActiveTab('hero')}
                className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
                  activeTab === 'hero'
                    ? 'border-blue-900 text-blue-900'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Live Hero Editor
              </button>
              <button
                onClick={() => setActiveTab('export')}
                className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
                  activeTab === 'export'
                    ? 'border-blue-900 text-blue-900'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                GitHub JSON Export
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {activeTab === 'sections' && (
                <div className="space-y-3">
                  <p className="text-xs text-slate-500">
                    Enable or disable sections and use the arrows to reorder them live on the homepage:
                  </p>

                  <div className="space-y-2">
                    {homepageConfig.sectionsOrder.map((secKey, idx) => {
                      const section = homepageConfig.sections[secKey as keyof HomepageConfig['sections']];
                      const isEnabled = section ? section.enabled : true;

                      const labelMap: Record<string, string> = {
                        hero: '01. Cinematic Hero Slider',
                        intro: '02. Company Heritage Intro',
                        stats: '03. Operational Highlights & KPIs',
                        businesses: '04. Five Business Verticals',
                        capabilities: '05. Infrastructure & Logistics',
                        innovation: '06. R&D & Technical Patents',
                        sustainability: '07. ESG & Water Neutrality (ZLD)',
                        csr: '08. Arvion Foundation (CSR)',
                        investors: '09. Investor Relations & Filings',
                        newsroom: '10. Corporate Announcements',
                        careers: '11. Careers & Culture',
                        contactCta: '12. Global Inquiry CTA',
                      };

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
                                  ? 'bg-blue-50 text-blue-900 hover:bg-blue-100'
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

                          <div className="flex items-center gap-1">
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

              {activeTab === 'hero' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-500">
                    Live edit the primary hero banner copy. Changes reflect immediately on screen:
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Hero Kicker Tag
                      </label>
                      <input
                        type="text"
                        value={homepageConfig.sections.hero.slides[0]?.kicker || ''}
                        onChange={(e) => updateHeroField('kicker', e.target.value)}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-900"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Primary Headline
                      </label>
                      <input
                        type="text"
                        value={homepageConfig.sections.hero.slides[0]?.heading || ''}
                        onChange={(e) => updateHeroField('heading', e.target.value)}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-900"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Lead Description
                      </label>
                      <textarea
                        rows={3}
                        value={homepageConfig.sections.hero.slides[0]?.description || ''}
                        onChange={(e) => updateHeroField('description', e.target.value)}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-900"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'export' && (
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 leading-relaxed">
                    <strong>GitHub-Ready Content Workflow:</strong> Copy or download this configuration and commit it directly to <code className="bg-blue-100 px-1 py-0.5 rounded">src/content/config/homepage.json</code> on GitHub.
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={copyConfigJSON}
                      className="flex-1 py-2 px-3 text-xs font-semibold bg-blue-900 text-white rounded-lg hover:bg-blue-950 transition-colors flex items-center justify-center gap-1.5"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied to Clipboard' : 'Copy JSON'}</span>
                    </button>
                    <button
                      onClick={downloadConfigJSON}
                      className="py-2 px-3 text-xs font-semibold bg-slate-100 text-slate-800 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download File</span>
                    </button>
                  </div>

                  <pre className="text-[11px] font-mono bg-slate-900 text-slate-200 p-3 rounded-lg overflow-x-auto max-h-64 leading-tight">
                    {JSON.stringify(homepageConfig, null, 2)}
                  </pre>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
              <button
                onClick={onResetDefaults}
                className="text-slate-500 hover:text-slate-800 flex items-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset to Original Config</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-1.5 font-bold text-white bg-blue-900 rounded-md hover:bg-blue-950"
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
