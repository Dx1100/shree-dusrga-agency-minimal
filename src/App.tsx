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

    if (currentPath === '/what-we-source' || currentPath === '/businesses') {
      return (
        <BusinessesPage
          onNavigate={handleNavigate}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />
      );
    }

    if (currentPath.startsWith('/what-we-source/') || currentPath.startsWith('/businesses/')) {
      const slug = currentPath.replace('/what-we-source/', '').replace('/businesses/', '');
      return (
        <BusinessDetailPage
          slug={slug}
          onNavigate={handleNavigate}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />
      );
    }

    if (currentPath === '/our-process' || currentPath === '/innovation') {
      return (
        <InnovationPage
          onNavigate={handleNavigate}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />
      );
    }

    if (currentPath === '/sourcing-ecosystem' || currentPath === '/sustainability') {
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

    if (currentPath === '/capital-support' || currentPath === '/investors') {
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

    if (currentPath === '/who-we-serve' || currentPath === '/careers') {
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

      {/* Sourcing & Consultation Inquiry Modal */}
      <Modal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        title="Textile Sourcing & Consultation Inquiry"
        subtitle="Connect with our sourcing desk for product curations, wholesale pricing, or hub coordination."
      >
        {inquirySubmitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-base font-bold text-slate-900">
              Inquiry Dispatched Successfully
            </h4>
            <p className="text-xs text-slate-500">
              Our sourcing consultant for {inquiryData.division} will review your requirements and reach out promptly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleInquirySubmit} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-stone-700 block mb-1.5">
                Your Full Name / Business Name *
              </label>
              <input
                type="text"
                required
                value={inquiryData.name}
                onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                placeholder="Rajesh Kumar / Boutique Name"
                className="w-full text-xs p-3 bg-[#FAF9F6] border border-stone-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-stone-700 block mb-1.5">
                Email Address or Phone *
              </label>
              <input
                type="text"
                required
                value={inquiryData.email}
                onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                placeholder="buyer@showroom.com / +91 98..."
                className="w-full text-xs p-3 bg-[#FAF9F6] border border-stone-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-stone-700 block mb-1.5">
                Product Category / Service
              </label>
              <select
                value={inquiryData.division}
                onChange={(e) => setInquiryData({ ...inquiryData, division: e.target.value })}
                className="w-full text-xs p-3 bg-[#FAF9F6] border border-stone-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
              >
                <option>Sarees (Silk, Georgette, Synthetics)</option>
                <option>Suit Sets & Dress Materials</option>
                <option>Lehengas & Occasion Wear</option>
                <option>Fabrics & Running Material</option>
                <option>Traditional Brocades & Handlooms</option>
                <option>ThreadLinc Trade Financing</option>
                <option>General Sourcing Consultation</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-stone-700 block mb-1.5">
                Requirement Details
              </label>
              <textarea
                rows={3}
                value={inquiryData.message}
                onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                placeholder="Mention fabric preferences, quantity, target sourcing hub, or sample request..."
                className="w-full text-xs p-3 bg-[#FAF9F6] border border-stone-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 text-xs font-medium uppercase tracking-[0.15em] bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Sourcing Inquiry</span>
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
            <p className="text-base font-serif font-normal text-slate-950 leading-relaxed">
              {selectedArticle.summary}
            </p>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              {selectedArticle.content}
            </p>
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400 font-light">
              <span>Shree Durga Agency Sourcing Desk</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="font-medium uppercase tracking-wider text-emerald-800 hover:text-emerald-950"
              >
                Close Advisory
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
          title={`Inquire: ${selectedJob.title}`}
          subtitle={`${selectedJob.department} · ${selectedJob.location} · ${selectedJob.type}`}
        >
          {jobSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto" />
              <h4 className="text-xl font-serif font-normal text-slate-950">
                Inquiry Received
              </h4>
              <p className="text-xs sm:text-sm text-stone-500 font-light">
                Our sourcing advisory desk will contact you regarding engagement options for the {selectedJob.title} segment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleJobSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-stone-700 block mb-1.5">
                  Full Name / Contact Person *
                </label>
                <input
                  type="text"
                  required
                  value={jobFormData.candidateName}
                  onChange={(e) => setJobFormData({ ...jobFormData, candidateName: e.target.value })}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full text-xs p-3 bg-[#FAF9F6] border border-stone-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-stone-700 block mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={jobFormData.candidateEmail}
                  onChange={(e) => setJobFormData({ ...jobFormData, candidateEmail: e.target.value })}
                  placeholder="buyer@showroom.com"
                  className="w-full text-xs p-3 bg-[#FAF9F6] border border-stone-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-stone-700 block mb-1.5">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={jobFormData.candidatePhone}
                    onChange={(e) => setJobFormData({ ...jobFormData, candidatePhone: e.target.value })}
                    placeholder="+91 98..."
                    className="w-full text-xs p-3 bg-[#FAF9F6] border border-stone-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-stone-700 block mb-1.5">
                    Business Tier / Experience
                  </label>
                  <select
                    value={jobFormData.experienceYears}
                    onChange={(e) => setJobFormData({ ...jobFormData, experienceYears: e.target.value })}
                    className="w-full text-xs p-3 bg-[#FAF9F6] border border-stone-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                  >
                    <option value="1-3">Emerging Retailer (1-3 yrs)</option>
                    <option value="4-7">Established Showroom (4-7 yrs)</option>
                    <option value="8-12">Wholesale Distributor (8-12 yrs)</option>
                    <option value="12+">Large Retail Chain (12+ yrs)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-medium uppercase tracking-[0.15em] bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg transition-colors"
              >
                Submit Partnership Inquiry
              </button>
            </form>
          )}
        </Modal>
      )}

      {/* Floating Download Notification */}
      {downloadNotice && (
        <div className="fixed bottom-6 left-6 z-50 card-3d-dark text-white px-5 py-3.5 rounded-xl border border-stone-800 flex items-center gap-3 animate-fade-in shadow-2xl">
          <Download className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <p className="text-xs font-semibold">Download Initiated</p>
            <p className="text-[11px] text-stone-300 font-light">
              Generating secure PDF: <span className="text-emerald-300 font-mono font-medium">{downloadNotice}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
