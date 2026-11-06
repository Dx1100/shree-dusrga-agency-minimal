import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CheckCircle2, ArrowRight, ShieldCheck, Truck, Layers } from 'lucide-react';

interface InnovationPageProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
}

export const InnovationPage: React.FC<InnovationPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [selectedDomain, setSelectedDomain] = useState<'all' | 'curation' | 'quality' | 'logistics'>('all');

  const steps = [
    {
      title: '1. Requirement Gathering & Catalog Selection',
      domain: 'curation',
      number: 'Step 01',
      year: 'Planning Phase',
      impact: 'We analyze your target price bands, seasonal retail requirements, fabric specifications, and design aesthetics.',
    },
    {
      title: '2. Physical Swatch & Sample Review',
      domain: 'curation',
      number: 'Step 02',
      year: 'Validation Phase',
      impact: 'Couriered fabric swatches, border samples, and shade cards allow you to verify drape and finish before production.',
    },
    {
      title: '3. Direct Mill & Weaver Price Negotiation',
      domain: 'quality',
      number: 'Step 03',
      year: 'Execution Phase',
      impact: 'Leveraging on-the-ground cluster relationships to secure genuine wholesale rates directly from production looms.',
    },
    {
      title: '4. Batch Inspection & Pre-Shipment Audit',
      domain: 'quality',
      number: 'Step 04',
      year: 'Verification Phase',
      impact: 'On-site lot checking for GSM consistency, color bleeding, print sharpness, and packaging integrity before release.',
    },
    {
      title: '5. Consolidated Logistics & ThreadLinc Settlement',
      domain: 'logistics',
      number: 'Step 05',
      year: 'Fulfillment Phase',
      impact: 'Multi-hub parcel consolidation under single billing, doorstep transport tracking, and structured credit support.',
    },
  ];

  const filteredSteps = selectedDomain === 'all'
    ? steps
    : steps.filter((s) => s.domain === selectedDomain);

  return (
    <div className="pt-24 pb-24 bg-[#FAF9F6]">
      {/* Hero Header */}
      <div className="bg-[#0B132B] text-white py-20 lg:py-28 relative overflow-hidden border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400 block mb-3 font-mono">
            Sourcing Lifecycle & Methodology
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight max-w-3xl leading-[1.15] text-stone-100">
            Our Process
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-300 font-light max-w-2xl leading-relaxed">
            Eliminate sourcing uncertainty. Our end-to-end consulting framework guides your procurement from initial requirement mapping to sample approval, factory audit, and secured doorstep dispatch.
          </p>
        </div>
      </div>

      {/* Sourcing Strategy Showcase with 3D tactile elevation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="card-3d-emerald rounded-3xl p-8 sm:p-9 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-600/50 to-transparent" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-800 block mb-2 px-3 py-1 bg-emerald-50 rounded-md border border-emerald-100/60 w-fit font-mono">Direct Mill Access</span>
            <h3 className="text-2xl font-serif font-normal text-slate-950 mb-3 group-hover:text-emerald-900 transition-colors">Cluster-Direct Access</h3>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-6">
              Direct integration with Surat mills, Varanasi karkhanas, Jaipur block printers, and Kolkata handlooms.
            </p>
            <span className="text-[11px] font-medium text-stone-500 uppercase tracking-wider block pt-4 border-t border-stone-200/60">Verified Mill & Weaver Base</span>
          </div>

          <div className="card-3d-emerald rounded-3xl p-8 sm:p-9 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-600/50 to-transparent" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-800 block mb-2 px-3 py-1 bg-emerald-50 rounded-md border border-emerald-100/60 w-fit font-mono">Quality Assurance</span>
            <h3 className="text-2xl font-serif font-normal text-slate-950 mb-3 group-hover:text-emerald-900 transition-colors">Rigorous Quality Checks</h3>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-6">
              Lot-wise checking for yarn count, weight consistency, border alignment, and colorfastness standards.
            </p>
            <span className="text-[11px] font-medium text-stone-500 uppercase tracking-wider block pt-4 border-t border-stone-200/60">Pre-Dispatch Inspection Reports</span>
          </div>

          <div className="card-3d-emerald rounded-3xl p-8 sm:p-9 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-600/50 to-transparent" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-800 block mb-2 px-3 py-1 bg-emerald-50 rounded-md border border-emerald-100/60 w-fit font-mono">Consolidated Logistics</span>
            <h3 className="text-2xl font-serif font-normal text-slate-950 mb-3 group-hover:text-emerald-900 transition-colors">Consolidated Logistics & Credit</h3>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-6">
              Multi-supplier consignment consolidation with single billing and ThreadLinc working capital financing options.
            </p>
            <span className="text-[11px] font-medium text-stone-500 uppercase tracking-wider block pt-4 border-t border-stone-200/60">Doorstep Freight Tracking</span>
          </div>
        </div>

        {/* Workflow Registry */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <SectionHeading
              kicker="Sourcing Lifecycle"
              heading="The 5-Step Sourcing Workflow"
              lead="How we coordinate every order from requirement scoping to final store delivery."
              className="mb-0"
            />
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => setSelectedDomain('all')}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  selectedDomain === 'all' ? 'bg-[#0B132B] text-white shadow-sm' : 'bg-white text-stone-700 border border-stone-200/80 hover:bg-stone-50'
                }`}
              >
                All Steps
              </button>
              <button
                onClick={() => setSelectedDomain('curation')}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  selectedDomain === 'curation' ? 'bg-[#0B132B] text-white shadow-sm' : 'bg-white text-stone-700 border border-stone-200/80 hover:bg-stone-50'
                }`}
              >
                Curation & Swatches
              </button>
              <button
                onClick={() => setSelectedDomain('quality')}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  selectedDomain === 'quality' ? 'bg-[#0B132B] text-white shadow-sm' : 'bg-white text-stone-700 border border-stone-200/80 hover:bg-stone-50'
                }`}
              >
                Pricing & Quality
              </button>
              <button
                onClick={() => setSelectedDomain('logistics')}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  selectedDomain === 'logistics' ? 'bg-[#0B132B] text-white shadow-sm' : 'bg-white text-stone-700 border border-stone-200/80 hover:bg-stone-50'
                }`}
              >
                Logistics & Credit
              </button>
            </div>
          </div>

          <div className="space-y-5">
            {filteredSteps.map((st, idx) => (
              <div
                key={idx}
                className="card-3d rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-emerald-500 to-emerald-800" />
                <div className="space-y-1.5 pl-2">
                  <div className="flex items-center gap-2 text-xs text-stone-500 font-light">
                    <span className="font-mono font-semibold text-emerald-800 uppercase tracking-wider">{st.number}</span>
                    <span>·</span>
                    <span className="text-stone-400">{st.year}</span>
                  </div>
                  <h4 className="text-xl font-serif font-normal text-slate-950 group-hover:text-emerald-900 transition-colors">{st.title}</h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-3xl">{st.impact}</p>
                </div>
                <button
                  onClick={onOpenInquiry}
                  className="px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-slate-900 bg-white border border-stone-300 rounded-xl hover:bg-emerald-700 hover:text-white hover:border-emerald-700 transition-all shadow-xs whitespace-nowrap self-start sm:self-center"
                >
                  Consult on Process
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
