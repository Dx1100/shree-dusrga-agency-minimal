import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Truck,
  Layers,
  Sparkles,
  ClipboardCheck,
  PackageCheck,
  Coins,
  BadgeCheck,
  FileCheck2,
} from 'lucide-react';

interface InnovationPageProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
}

export const InnovationPage: React.FC<InnovationPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [selectedDomain, setSelectedDomain] = useState<'all' | 'curation' | 'quality' | 'logistics'>('all');
  const [isVisible, setIsVisible] = useState(false);
  const workflowSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.12 }
    );

    if (workflowSectionRef.current) {
      observer.observe(workflowSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      id: 'step-1',
      title: 'Requirement Gathering & Catalog Selection',
      domain: 'curation',
      number: '01',
      phase: 'Phase 01 · Planning',
      icon: Layers,
      impact: 'We analyze your target price bands, seasonal retail requirements, fabric specifications, and design aesthetics across relevant textile hubs.',
      deliverables: ['Target Price Band Scoping', 'Fabric GSM & Fiber Specs', 'Curated Manufacturer Catalogs'],
      turnaround: '1–2 Working Days',
    },
    {
      id: 'step-2',
      title: 'Physical Swatch & Sample Review',
      domain: 'curation',
      number: '02',
      phase: 'Phase 02 · Validation',
      icon: Sparkles,
      impact: 'Couriered fabric swatches, border samples, and shade cards allow your merchandising team to verify hand-feel, drape, and color accuracy before bulk production.',
      deliverables: ['Couriers from Weaving Hubs', 'Lab-Dipped Shade Cards', 'Physical Hand-Feel Verification'],
      turnaround: '3–5 Working Days',
    },
    {
      id: 'step-3',
      title: 'Direct Factory & Weaver Price Negotiation',
      domain: 'quality',
      number: '03',
      phase: 'Phase 03 · Execution',
      icon: Coins,
      impact: 'Leveraging on-the-ground cluster relationships to secure genuine wholesale rates directly from production looms, completely bypassing intermediary broker commissions.',
      deliverables: ['Factory-Gate Commercials', 'Zero Intermediary Margins', 'MoQ & Delivery Timeline Lock'],
      turnaround: '1–2 Working Days',
    },
    {
      id: 'step-4',
      title: 'Batch Inspection & Pre-Shipment Audit',
      domain: 'quality',
      number: '04',
      phase: 'Phase 04 · Verification',
      icon: ClipboardCheck,
      impact: 'Our on-ground procurement officers conduct rigorous on-site lot audits for GSM consistency, color bleeding, print sharpness, measurement tolerance, and export packing standards.',
      deliverables: ['On-Site Piece-by-Piece Audit', 'Colorfastness & Shrinkage Test', 'Pre-Dispatch Photo & Video Reports'],
      turnaround: 'On Production Completion',
    },
    {
      id: 'step-5',
      title: 'Consolidated Logistics & Settlement',
      domain: 'logistics',
      number: '05',
      phase: 'Phase 05 · Fulfillment',
      icon: PackageCheck,
      impact: 'Multi-hub parcel consolidation under single invoicing, direct door-to-door freight tracking, and ThreadLinc working capital settlement support for seamless replenishment.',
      deliverables: ['Multi-Supplier Single Invoicing', 'Doorstep Freight Tracking', 'Working Capital Financing Support'],
      turnaround: 'Dispatched via Direct Surface/Air',
    },
  ];

  const filteredSteps = selectedDomain === 'all'
    ? steps
    : steps.filter((s) => s.domain === selectedDomain);

  return (
    <div className="pt-20 bg-[#F5F0E6]">
      {/* ──────────────────────────────────────────────────────────
          SECTION 1: HERO HEADER (Luxury Dark Emerald #102B25)
      ────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B25] text-[#F5F0E6] py-16 sm:py-20 lg:py-24 relative overflow-hidden border-b border-white/10">
        {/* Ambient atmospheric illumination orbs */}
        <div
          className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-[#D97845]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 left-10 w-[450px] h-[450px] bg-[#173D35]/80 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97845] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D97845]" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E89A6F]">
              End-to-End Methodology
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight max-w-4xl leading-[1.12] text-white">
            Our Sourcing Process
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#F5F0E6]/85 max-w-2xl leading-relaxed font-normal">
            Eliminate procurement uncertainty. Our disciplined 5-stage framework connects your business directly to verified Indian textile manufacturing hubs with zero broker inflation, on-ground swatch validation, and pre-shipment quality audits.
          </p>

          {/* Quick Pillar Highlights Pill Strip */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center gap-2.5 text-xs text-[#F5F0E6]/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#D97845] shrink-0" />
              <span>5 Verified Phases</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#F5F0E6]/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#D97845] shrink-0" />
              <span>100% Pre-Dispatch Audits</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#F5F0E6]/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#D97845] shrink-0" />
              <span>Direct Factory Commercials</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#F5F0E6]/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#D97845] shrink-0" />
              <span>Consolidated Logistics</span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 2: STRATEGIC PILLARS (Crisp High-Contrast White #FFFFFF)
      ────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-[#173D35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D97845] mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Sourcing Advantage</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-medium text-[#173D35] tracking-tight leading-tight">
              Three Structural Pillars of Our Methodology
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#173D35]/75 leading-relaxed">
              Designed specifically for retailers, wholesalers, and garment brands seeking dependable manufacturing connections without managing remote field teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Cluster-Direct Access */}
            <div className="card-3d rounded-3xl p-8 sm:p-9 relative overflow-hidden group flex flex-col justify-between border border-[#173D35]/12 hover:border-[#D97845] bg-gradient-to-b from-white to-[#FBF8F2]">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845] to-transparent" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#D97845]/10 border border-[#D97845]/20 flex items-center justify-center text-[#D97845] mb-5 group-hover:scale-105 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D97845] block mb-2">
                  Direct Factory Access
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#173D35] mb-3 group-hover:text-[#D97845] transition-colors">
                  Cluster-Direct Procurement
                </h3>
                <p className="text-sm text-[#173D35]/75 leading-relaxed">
                  Direct commercial access across Surat weaving houses, Varanasi karkhanas, Jaipur block-printing studios, Ludhiana knitwear units, and Kolkata handlooms.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#173D35]/10 flex items-center justify-between text-xs font-semibold text-[#173D35]/80">
                <span>Verified Manufacturing Network</span>
                <span className="text-[#D97845]">Surat · Varanasi · Jaipur</span>
              </div>
            </div>

            {/* Pillar 2: Quality Assurance */}
            <div className="card-3d rounded-3xl p-8 sm:p-9 relative overflow-hidden group flex flex-col justify-between border border-[#173D35]/12 hover:border-[#173D35] bg-gradient-to-b from-white to-[#F2F7F5]">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#173D35] to-transparent" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#173D35]/10 border border-[#173D35]/20 flex items-center justify-center text-[#173D35] mb-5 group-hover:scale-105 transition-transform">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#173D35] block mb-2">
                  Quality Assurance
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#173D35] mb-3 group-hover:text-[#D97845] transition-colors">
                  On-Site Quality Audits
                </h3>
                <p className="text-sm text-[#173D35]/75 leading-relaxed">
                  Every lot is physically verified on-site for yarn counts, weave density, GSM tolerances, dye bleed resistance, border symmetry, and packing accuracy.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#173D35]/10 flex items-center justify-between text-xs font-semibold text-[#173D35]/80">
                <span>Pre-Dispatch Verification</span>
                <span className="text-[#173D35]">Zero Flaw Tolerance</span>
              </div>
            </div>

            {/* Pillar 3: Logistics & Capital */}
            <div className="card-3d rounded-3xl p-8 sm:p-9 relative overflow-hidden group flex flex-col justify-between border border-[#173D35]/12 hover:border-[#2C5E55] bg-gradient-to-b from-white to-[#F0F5F4]">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#2C5E55] to-transparent" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2C5E55]/10 border border-[#2C5E55]/20 flex items-center justify-center text-[#2C5E55] mb-5 group-hover:scale-105 transition-transform">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2C5E55] block mb-2">
                  Consolidated Logistics
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#173D35] mb-3 group-hover:text-[#D97845] transition-colors">
                  Consolidation & Financing
                </h3>
                <p className="text-sm text-[#173D35]/75 leading-relaxed">
                  Shipments from multiple distinct weavers and factories are combined under a single unified invoice, with doorstep transit insurance and structured working capital support.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#173D35]/10 flex items-center justify-between text-xs font-semibold text-[#173D35]/80">
                <span>Unified Invoicing</span>
                <span className="text-[#2C5E55]">Doorstep Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 3: 5-STEP KINETIC WORKFLOW JOURNEY WITH VERTICAL CONDUIT RAIL
          (Luxury Deep Forest #102B25 with Illuminated Terracotta Beam)
      ────────────────────────────────────────────────────────── */}
      <section
        ref={workflowSectionRef}
        className="bg-[#102B25] text-[#F5F0E6] py-20 sm:py-24 lg:py-28 relative overflow-hidden border-b border-white/10"
      >
        {/* Ambient atmospheric lighting */}
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#D97845]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#173D35]/90 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header with live status pill */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97845] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D97845]" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E89A6F]">
                  The 5-Step Sourcing Workflow
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-medium text-white tracking-tight leading-tight">
                From Specification to Doorstep Delivery
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#F5F0E6]/80 max-w-2xl leading-relaxed">
                Step-by-step transparency at every milestone. Track your order through physical swatch sampling, factory commercial lock, and on-ground audits.
              </p>
            </div>

            {/* Filter Domain Selector Tabs */}
            <div className="flex flex-wrap gap-2 shrink-0">
              <button
                onClick={() => setSelectedDomain('all')}
                className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
                  selectedDomain === 'all'
                    ? 'bg-[#D97845] text-white shadow-md'
                    : 'bg-white/5 text-[#F5F0E6]/80 border border-white/15 hover:border-[#D97845] hover:text-white'
                }`}
              >
                All Steps
              </button>
              <button
                onClick={() => setSelectedDomain('curation')}
                className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
                  selectedDomain === 'curation'
                    ? 'bg-[#D97845] text-white shadow-md'
                    : 'bg-white/5 text-[#F5F0E6]/80 border border-white/15 hover:border-[#D97845] hover:text-white'
                }`}
              >
                Curation & Swatches
              </button>
              <button
                onClick={() => setSelectedDomain('quality')}
                className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
                  selectedDomain === 'quality'
                    ? 'bg-[#D97845] text-white shadow-md'
                    : 'bg-white/5 text-[#F5F0E6]/80 border border-white/15 hover:border-[#D97845] hover:text-white'
                }`}
              >
                Pricing & Quality
              </button>
              <button
                onClick={() => setSelectedDomain('logistics')}
                className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
                  selectedDomain === 'logistics'
                    ? 'bg-[#D97845] text-white shadow-md'
                    : 'bg-white/5 text-[#F5F0E6]/80 border border-white/15 hover:border-[#D97845] hover:text-white'
                }`}
              >
                Logistics & Credit
              </button>
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────
              VERTICAL KINETIC CONDUIT RAIL CONTAINER
          ──────────────────────────────────────────────────────── */}
          <div className="relative pl-4 sm:pl-12 lg:pl-16">
            {/* The Continuous Vertical Conduit Rail Backbone */}
            <div
              className="absolute left-[23px] sm:left-[39px] lg:left-[47px] top-6 bottom-6 w-[3px] bg-white/15 rounded-full overflow-hidden pointer-events-none"
              aria-hidden="true"
            >
              {/* Dynamic illuminated terracotta energy beam filling as user scrolls */}
              <div
                className="w-full bg-gradient-to-b from-[#D97845] via-[#E89A6F] to-[#D97845] transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(217,120,69,0.7)]"
                style={{
                  height: isVisible ? '100%' : '0%',
                }}
              />
            </div>

            {/* Step Cards Stack */}
            <div className="space-y-10 sm:space-y-12">
              {filteredSteps.map((st, idx) => {
                const StepIcon = st.icon;
                return (
                  <div
                    key={st.id}
                    className={`relative flex flex-col md:flex-row items-start gap-6 sm:gap-8 transition-all duration-700 ease-out ${
                      isVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-8'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${idx * 140}ms` : '0ms',
                    }}
                  >
                    {/* Node on the rail with live beacon */}
                    <div className="relative z-10 shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#173D35] border-2 border-[#D97845] flex items-center justify-center font-serif text-base sm:text-lg font-bold text-white shadow-[0_0_24px_rgba(217,120,69,0.35)] relative group-hover:scale-105 transition-transform">
                        {/* Live pulsating radar ring */}
                        <span className="animate-ping absolute inset-0 rounded-2xl bg-[#D97845] opacity-25" />
                        <span>{st.number}</span>
                      </div>
                    </div>

                    {/* Step Content Card */}
                    <div className="flex-1 w-full rounded-3xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/12 hover:border-[#D97845]/60 backdrop-blur-md p-6 sm:p-9 relative overflow-hidden group shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {/* Top Terracotta Accent Line */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845]/70 to-transparent" />

                      {/* Card Content Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2.5">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E89A6F] bg-[#D97845]/15 border border-[#D97845]/25 px-3 py-1 rounded-full">
                            {st.phase}
                          </span>
                        </div>
                        <span className="text-xs text-[#F5F0E6]/60 font-medium">
                          Expected Timeline: <strong className="text-white">{st.turnaround}</strong>
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-xl sm:text-2xl font-serif font-medium text-white group-hover:text-[#E89A6F] transition-colors mb-3">
                        {st.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#F5F0E6]/85 leading-relaxed font-normal mb-6">
                        {st.impact}
                      </p>

                      {/* Deliverables Checklist Chips */}
                      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                          {st.deliverables.map((del, dIdx) => (
                            <span
                              key={dIdx}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-[#F5F0E6]/90"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#D97845] shrink-0" />
                              <span>{del}</span>
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={onOpenInquiry}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#E89A6F] hover:text-white transition-colors group/cta"
                        >
                          <span>Consult on Step {st.number}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 4: SOURCING ASSURANCE & NEXT STEPS (Warm Sand #F5F0E6)
      ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F0E6] text-[#173D35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-3d rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#173D35]/12 bg-white relative overflow-hidden shadow-xl">
            {/* Top decorative gradient border */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D97845] via-[#E89A6F] to-[#173D35]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D97845] block">
                  Begin Your Procurement Cycle
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif font-medium text-[#173D35] tracking-tight leading-snug">
                  Ready to Source Directly from India's Premier Textile Corridors?
                </h3>
                <p className="text-sm sm:text-base text-[#173D35]/75 leading-relaxed max-w-2xl font-normal">
                  Share your target categories, required quantities, and fabric requirements. Our procurement desk will map certified manufacturers, arrange swatch dispatches, and coordinate verified factory-gate pricing.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#173D35]/75">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97845]" />
                    Zero Upfront Broker Markups
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97845]" />
                    On-Site Lot Audits Included
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97845]" />
                    Pan-India Consolidated Dispatch
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3.5">
                <button
                  onClick={onOpenInquiry}
                  className="w-full py-4 px-6 text-xs font-semibold uppercase tracking-[0.18em] bg-[#D97845] hover:bg-[#C26534] text-white text-center rounded-xl transition-all shadow-md active:scale-[0.99] inline-flex items-center justify-center gap-2"
                >
                  <span>Initiate Sourcing Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('/what-we-source')}
                  className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-[0.16em] bg-white hover:bg-[#F5F0E6] text-[#173D35] border border-[#173D35]/20 text-center rounded-xl transition-all"
                >
                  Explore What We Source
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
