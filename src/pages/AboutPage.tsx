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
    { year: 'Phase 1', title: 'Textile Market Grounding', desc: 'Established direct relationships with primary weaving looms and karkhanas in Surat and Varanasi.' },
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
      title: 'Lead Production & Weaver Liaison',
      bio: 'Coordinates directly with weaving units, master artisans, and dye houses for timely production and shade lot consistency.',
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
    <div className="pt-20 pb-24 bg-[#F5F0E6]">
      {/* Hero Header */}
      <div className="bg-[#173D35] text-[#F5F0E6] py-14 sm:py-18 relative overflow-hidden border-b border-[#F5F0E6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-7 bg-[#D97845]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E89A6F]">
              About Shree Durga Agency
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight max-w-3xl leading-tight text-[#F5F0E6]">
            Your Trusted Textile Sourcing and Consulting Partner
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#F5F0E6]/80 max-w-2xl leading-relaxed">
            Helping retailers, wholesalers, boutiques and other textile businesses source products from relevant textile markets and production centres with transparent rates, strict quality checks, and reliable logistics.
          </p>
        </div>
      </div>

      {/* Main Philosophy */}
      <div className="bg-white border-b border-[#173D35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-6 bg-[#D97845]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D97845]">
                  Our Value Proposition
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#173D35] leading-tight">
                Bridging Retail Buyers Directly with India's Premier Textile Hubs
              </h2>
              <p className="text-[#173D35]/75 leading-relaxed">
                Navigating fragmented textile markets can be challenging for growing businesses. Shree Durga Agency serves as your dedicated on-the-ground sourcing extension—gathering your requirements, identifying vetted weavers and manufacturers, verifying quality, and managing end-to-end dispatch.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="card-3d-emerald rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845]/60 to-transparent" />
                  <Shield className="w-6 h-6 text-[#D97845] mb-2.5" />
                  <h4 className="font-serif text-base font-medium text-[#173D35]">Direct Factory Rates</h4>
                  <p className="text-xs text-[#173D35]/75 mt-1 leading-relaxed">Access genuine factory wholesale prices without redundant middleman markups.</p>
                </div>
                <div className="card-3d-emerald rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845]/60 to-transparent" />
                  <Target className="w-6 h-6 text-[#D97845] mb-2.5" />
                  <h4 className="font-serif text-base font-medium text-[#173D35]">Batch Inspection</h4>
                  <p className="text-xs text-[#173D35]/75 mt-1 leading-relaxed">Pre-dispatch fabric inspection covering weave consistency, colorfastness, and defects.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#173D35]/15 group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80"
                  alt="Shree Durga Agency Textile Sourcing"
                  fallbackTitle="Shree Durga Agency Sourcing Desk"
                  className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Timeline */}
        <div>
          <SectionHeading
            kicker="Our Journey"
            heading="Evolving with India's Textile Trade Ecosystem"
            lead="Building dependable bridgeheads across primary regional manufacturing centers."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="card-3d rounded-2xl p-7 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845]/50 to-transparent" />
                <span className="text-lg font-serif font-medium text-[#D97845] block mb-2">
                  {m.year}
                </span>
                <h3 className="font-serif text-lg font-medium text-[#173D35] mb-2 group-hover:text-[#D97845] transition-colors">
                  {m.title}
                </h3>
                <p className="text-sm text-[#173D35]/75 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div id="leadership" className="mt-24">
          <SectionHeading
            kicker="Sourcing Advisory"
            heading="Specialized Trade Coordination Team"
            lead="Experienced consultants guiding buyer procurement across every textile category."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {leaders.map((ldr, idx) => (
              <div key={idx} className="card-3d rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845]/60 to-transparent" />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F5F0E6] text-[#D97845] border border-[#D97845]/20 flex items-center justify-center font-serif text-lg font-medium mb-4 shadow-xs">
                    {ldr.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#173D35] group-hover:text-[#D97845] transition-colors">
                    {ldr.name}
                  </h3>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D97845] block mb-3 mt-1">
                    {ldr.title}
                  </span>
                  <p className="text-sm text-[#173D35]/75 leading-relaxed">
                    {ldr.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sourcing Hubs Footprint CTA */}
        <div id="footprint" className="mt-24 card-3d-dark rounded-3xl p-10 sm:p-12 text-[#F5F0E6] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845] to-transparent" />
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E89A6F] block mb-1">
              Multi-Market Access
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#F5F0E6]">Connected to Major Textile Hubs Across India</h3>
            <p className="text-sm text-[#F5F0E6]/80 mt-2 max-w-xl leading-relaxed">
              Accessing Surat, Varanasi, Jaipur, Delhi NCR, Kolkata, and Panipat for comprehensive retail and wholesale requirements.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] bg-[#D97845] hover:bg-[#C26534] text-white rounded-xl shadow-lg transition-all whitespace-nowrap shrink-0 hover:scale-105"
          >
            Start Sourcing Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
