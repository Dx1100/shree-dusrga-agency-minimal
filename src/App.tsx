/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import initialHomepageConfig from './content/config/homepage.json';
import newsData from './content/config/news.json';
import siteConfig from './content/config/site.json';
import { HomepageConfig, NewsItem, JobOpening } from './types/content';

// Layout Components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/layout/SearchModal';
import { Modal } from './components/ui/Modal';
import { ContentStudioDrawer } from './components/cms/ContentStudioDrawer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BusinessesPage } from './pages/BusinessesPage';
import { BusinessDetailPage } from './pages/BusinessDetailPage';
import { InnovationPage } from './pages/InnovationPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { CSRPage } from './pages/CSRPage';
import { InvestorRelationsPage } from './pages/InvestorRelationsPage';
import { NewsroomPage } from './pages/NewsroomPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

import { CheckCircle2, Download, Send } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [homepageConfig, setHomepageConfig] = useState<HomepageConfig>(initialHomepageConfig as HomepageConfig);

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  // Inquiry form inside modal
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    division: 'Advanced Materials & Composites',
    message: '',
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Job application form inside modal
  const [jobFormData, setJobFormData] = useState({
    candidateName: '',
    candidateEmail: '',
    candidatePhone: '',
    experienceYears: '5',
    resumeNotice: 'Resume Attached',
  });
  const [jobSubmitted, setJobSubmitted] = useState(false);

  // Navigation handler
  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenArticle = (articleId: string) => {
    const found = newsData.find((n) => n.id === articleId);
    if (found) {
      setSelectedArticle(found as NewsItem);
    }
  };

  const handleDownloadReport = (title: string) => {
    setDownloadNotice(title);
    setTimeout(() => {
      setDownloadNotice(null);
    }, 4500);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inquiryData.name && inquiryData.email) {
      setInquirySubmitted(true);
      setTimeout(() => {
        setInquirySubmitted(false);
        setIsInquiryOpen(false);
        setInquiryData({
          name: '',
          email: '',
          division: 'Advanced Materials & Composites',
          message: '',
        });
      }, 2500);
    }
  };

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (jobFormData.candidateName && jobFormData.candidateEmail) {
      setJobSubmitted(true);
      setTimeout(() => {
        setJobSubmitted(false);
        setSelectedJob(null);
        setJobFormData({
          candidateName: '',
          candidateEmail: '',
          candidatePhone: '',
          experienceYears: '5',
          resumeNotice: 'Resume Attached',
        });
      }, 2500);
    }
  };

  // Route resolver
  const renderCurrentView = () => {
    if (currentPath === '/') {
      return (
        <HomePage
          config={homepageConfig}
          onNavigate={handleNavigate}
          onOpenInquiry={() => setIsInquiryOpen(true)}
          onOpenArticle={handleOpenArticle}
          onDownloadReport={handleDownloadReport}
        />
      );
    }

    if (currentPath === '/about') {
      return (
        <AboutPage
          onNavigate={handleNavigate}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />
      );
    }

    if (currentPath === '/businesses') {
      return (
        <BusinessesPage
          onNavigate={handleNavigate}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />
      );
    }

    if (currentPath.startsWith('/businesses/')) {
      const slug = currentPath.replace('/businesses/', '');
      return (
        <BusinessDetailPage
          slug={slug}
          onNavigate={handleNavigate}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />
      );
    }

    if (currentPath === '/innovation') {
      return (
        <InnovationPage
          onNavigate={handleNavigate}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />
      );
    }

    if (currentPath === '/sustainability') {
      return (
        <SustainabilityPage
          onNavigate={handleNavigate}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />
      );
    }

    if (currentPath === '/csr') {
      return (
        <CSRPage
          onNavigate={handleNavigate}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />
      );
    }

    if (currentPath === '/investors') {
      return (
        <InvestorRelationsPage
          onNavigate={handleNavigate}
          onDownloadReport={handleDownloadReport}
        />
      );
    }

    if (currentPath === '/newsroom') {
      return <NewsroomPage onOpenArticle={handleOpenArticle} />;
    }

    if (currentPath === '/careers') {
      return (
        <CareersPage
          onApplyJob={(job) => setSelectedJob(job)}
        />
      );
    }

    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    // Default fallback to HomePage
    return (
      <HomePage
        config={homepageConfig}
        onNavigate={handleNavigate}
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onOpenArticle={handleOpenArticle}
        onDownloadReport={handleDownloadReport}
      />
    );
  };

  const isHome = currentPath === '/';

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-slate-950 selection:text-white">
      {/* Top Header */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenInquiry={() => setIsInquiryOpen(true)}
        isTransparentHero={isHome}
      />

      {/* Main Viewport */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Multi-column Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* Interactive Content & Section Manager Studio */}
      <ContentStudioDrawer
        homepageConfig={homepageConfig}
        onUpdateHomepageConfig={setHomepageConfig}
        onResetDefaults={() => setHomepageConfig(initialHomepageConfig as HomepageConfig)}
      />

      {/* Site-wide Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Global Inquiry Modal */}
      <Modal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        title="Global Industrial & Commercial Inquiry"
        subtitle="Connect with technical metallurgy and materials science division directors."
      >
        {inquirySubmitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-base font-bold text-slate-900">
              Inquiry Dispatched Successfully
            </h4>
            <p className="text-xs text-slate-500">
              A designated technical representative from {inquiryData.division} will review your specifications.
            </p>
          </div>
        ) : (
          <form onSubmit={handleInquirySubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={inquiryData.name}
                onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                placeholder="Dr. / Eng. Jane Doe"
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-900"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Corporate Email Address *
              </label>
              <input
                type="email"
                required
                value={inquiryData.email}
                onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                placeholder="j.doe@aerospace-oem.com"
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-900"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Target Business Division
              </label>
              <select
                value={inquiryData.division}
                onChange={(e) => setInquiryData({ ...inquiryData, division: e.target.value })}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-900"
              >
                <option>Advanced Materials & Composites</option>
                <option>Heavy Precision Process Engineering</option>
                <option>Environmental Solutions (ZLD Water)</option>
                <option>Textiles & Smart Sustainable Fabrics</option>
                <option>Industrial IoT & Connected Enterprise</option>
                <option>Investor Relations / Corporate Office</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Project Summary / Requirements
              </label>
              <textarea
                rows={3}
                value={inquiryData.message}
                onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                placeholder="Include pressure parameters, volume requirements, or commercial timeline..."
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-900"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-[0.16em] bg-slate-900 text-white hover:bg-[#9b111e] transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Commercial Inquiry</span>
            </button>
          </form>
        )}
      </Modal>

      {/* Article Detail Reading Modal */}
      {selectedArticle && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedArticle(null)}
          title={selectedArticle.title}
          subtitle={`${selectedArticle.category} · ${selectedArticle.date} · ${selectedArticle.readTime}`}
          maxWidth="2xl"
        >
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden max-h-72">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-semibold text-slate-800 leading-relaxed">
              {selectedArticle.summary}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedArticle.content}
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>Arvion Global Press Office</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="font-bold text-blue-900 hover:text-blue-950"
              >
                Close Statement
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Job Application Modal */}
      {selectedJob && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedJob(null)}
          title={`Apply: ${selectedJob.title}`}
          subtitle={`${selectedJob.department} · ${selectedJob.location} · ${selectedJob.type}`}
        >
          {jobSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-base font-bold text-slate-900">
                Application Received
              </h4>
              <p className="text-xs text-slate-500">
                Our talent acquisition committee will review your credentials for the {selectedJob.title} role.
              </p>
            </div>
          ) : (
            <form onSubmit={handleJobSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={jobFormData.candidateName}
                  onChange={(e) => setJobFormData({ ...jobFormData, candidateName: e.target.value })}
                  placeholder="e.g. Johnathan Smith"
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={jobFormData.candidateEmail}
                  onChange={(e) => setJobFormData({ ...jobFormData, candidateEmail: e.target.value })}
                  placeholder="name@domain.com"
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={jobFormData.candidatePhone}
                    onChange={(e) => setJobFormData({ ...jobFormData, candidatePhone: e.target.value })}
                    placeholder="+1 555-0192"
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Relevant Experience
                  </label>
                  <select
                    value={jobFormData.experienceYears}
                    onChange={(e) => setJobFormData({ ...jobFormData, experienceYears: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-900"
                  >
                    <option value="1-3">1 - 3 Years</option>
                    <option value="4-7">4 - 7 Years</option>
                    <option value="8-12">8 - 12 Years</option>
                    <option value="12+">12+ Years</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-[0.16em] bg-slate-900 text-white hover:bg-[#9b111e] transition-colors"
              >
                Submit Professional Candidacy
              </button>
            </form>
          )}
        </Modal>
      )}

      {/* Floating Download Notification */}
      {downloadNotice && (
        <div className="fixed bottom-6 left-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-fade-in">
          <Download className="w-5 h-5 text-cyan-400 shrink-0" />
          <div>
            <p className="text-xs font-bold">Download Initiated</p>
            <p className="text-[11px] text-slate-300">
              Generating secure PDF: <span className="text-cyan-300 font-semibold">{downloadNotice}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
