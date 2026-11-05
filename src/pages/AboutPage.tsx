import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { Shield, Target, Users, Award, Globe, Building2, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const milestones = [
    { year: 'Phase 1', title: 'Textile Market Grounding', desc: 'Established direct relationships with primary weaving mills and karkhanas in Surat and Varanasi.' },
    { year: 'Phase 2', title: 'Regional Cluster Expansion', desc: 'Extended sourcing access to Jaipur block-print artisans, Kolkata handlooms, and Delhi wholesale markets.' },
    { year: 'Phase 3', title: 'Standardized Quality Protocols', desc: 'Instituted pre-dispatch inspection protocols covering fabric GSM, yarn counts, and colorfastness verification.' },
    { year: 'Phase 4', title: 'Digital Catalog & Swatch Access', desc: 'Introduced digital catalog updates and rapid physical swatch courier dispatch for outstation retail buyers.' },
    { year: 'Phase 5', title: 'ThreadLinc Financing Integration', desc: 'Facilitated working capital and trade credit coordination for verified retail showroom buyers during peak seasons.' },
    { year: 'Current', title: 'Full-Spectrum Sourcing Partner', desc: 'Supporting retail showrooms, boutiques, and wholesalers across India with multi-hub sourcing and consolidated logistics.' },
  ];

  const leaders = [
    {
      name: 'Textile Advisory Desk',
      title: 'Senior Sourcing Consultant',
      bio: 'Over two decades of on-the-ground experience across Surat, Varanasi, and Jaipur primary manufacturing markets.',
    },
    {
      name: 'Cluster Coordination Team',
      title: 'Lead Mill & Weaver Liaison',
      bio: 'Coordinates directly with weaving units, master artisans, and dye mills for timely production and shade lot consistency.',
    },
    {
      name: 'Quality Assurance Cell',
      title: 'Technical Fabric Inspector',
      bio: 'Specializes in fabric count verification, shrink testing, border alignment, and pre-shipment lot audits.',
    },
    {
      name: 'Trade Support & Logistics',
      title: 'Operations & Dispatch Manager',
      bio: 'Manages multi-supplier parcel consolidation, freight forwarding, and doorstep delivery tracking for pan-India buyers.',
    },
  ];

  return (
    <div className="pt-24 pb-24 bg-[#FAF9F6]">
      {/* Hero Header */}
      <div className="bg-[#0B132B] text-white py-20 lg:py-28 relative overflow-hidden border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-400 block mb-3">
            About Shree Durga Agency
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight max-w-3xl leading-tight text-stone-100">
            Your Trusted Textile Sourcing and Consulting Partner
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed font-light">
            Helping retailers, wholesalers, boutiques and other textile businesses source products from relevant textile markets and production centres with transparent rates, strict quality checks, and reliable logistics.
          </p>
        </div>
      </div>

      {/* Main Philosophy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-800 block">
              Our Value Proposition
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-950 leading-tight">
              Bridging Retail Buyers Directly with India's Premier Textile Hubs
            </h2>
            <p className="text-stone-600 font-light leading-relaxed">
              Navigating fragmented textile markets can be challenging for growing businesses. Shree Durga Agency serves as your dedicated on-the-ground sourcing extension—gathering your requirements, identifying vetted weavers and mills, verifying quality, and managing end-to-end dispatch.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="card-3d-emerald rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
                <Shield className="w-6 h-6 text-emerald-800 mb-2.5" />
                <h4 className="font-serif text-base font-normal text-slate-950">Direct Mill Rates</h4>
                <p className="text-xs text-stone-600 font-light mt-1 leading-relaxed">Access genuine factory wholesale prices without redundant middleman markups.</p>
              </div>
              <div className="card-3d-emerald rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
                <Target className="w-6 h-6 text-emerald-800 mb-2.5" />
                <h4 className="font-serif text-base font-normal text-slate-950">Batch Inspection</h4>
                <p className="text-xs text-stone-600 font-light mt-1 leading-relaxed">Pre-dispatch fabric inspection covering weave consistency, colorfastness, and defects.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-200/90 group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80"
                alt="Shree Durga Agency Textile Sourcing"
                fallbackTitle="Shree Durga Agency Sourcing Desk"
                className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-28">
          <SectionHeading
            kicker="Our Journey"
            heading="Evolving with India's Textile Trade Ecosystem"
            lead="Building dependable bridgeheads across primary regional manufacturing centers."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="card-3d rounded-2xl p-7 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/30 to-transparent" />
                <span className="text-xl font-serif font-normal text-emerald-800 block mb-2">
                  {m.year}
                </span>
                <h3 className="font-serif text-lg font-normal text-slate-950 mb-2 group-hover:text-emerald-900 transition-colors">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div id="leadership" className="mt-28">
          <SectionHeading
            kicker="Sourcing Advisory"
            heading="Specialized Trade Coordination Team"
            lead="Experienced consultants guiding buyer procurement across every textile category."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {leaders.map((ldr, idx) => (
              <div key={idx} className="card-3d-emerald rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200/60 flex items-center justify-center font-serif text-lg mb-4 shadow-xs">
                    {ldr.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-serif text-lg font-normal text-slate-950 group-hover:text-emerald-900 transition-colors">
                    {ldr.name}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 block mb-3 mt-1">
                    {ldr.title}
                  </span>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {ldr.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sourcing Hubs Footprint CTA */}
        <div id="footprint" className="mt-28 card-3d-dark rounded-3xl p-10 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
              Multi-Market Access
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-100">Connected to Major Textile Hubs Across India</h3>
            <p className="text-sm text-stone-300 font-light mt-2 max-w-xl leading-relaxed">
              Accessing Surat, Varanasi, Jaipur, Delhi NCR, Kolkata, and Panipat for comprehensive retail and wholesale requirements.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl shadow-[0_4px_14px_rgba(6,78,59,0.4)] transition-all whitespace-nowrap shrink-0 hover:scale-105"
          >
            Start Sourcing Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
