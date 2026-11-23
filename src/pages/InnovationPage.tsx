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
    <div className="pt-20 pb-24 bg-[#F5F0E6]">
      {/* Hero Header */}
      <div className="bg-[#173D35] text-[#F5F0E6] py-14 sm:py-18 relative overflow-hidden border-b border-[#F5F0E6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-7 bg-[#D97845]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E89A6F]">
              Sourcing Lifecycle & Methodology
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight max-w-3xl leading-[1.15] text-[#F5F0E6]">
            Our Process
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#F5F0E6]/80 max-w-2xl leading-relaxed">
            Eliminate sourcing uncertainty. Our end-to-end consulting framework guides your procurement from initial requirement mapping to sample approval, factory audit, and secured doorstep dispatch.
          </p>
        </div>
      </div>

      {/* Sourcing Strategy Showcase */}
      <div className="bg-white border-b border-[#173D35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-3d-emerald rounded-3xl p-8 sm:p-9 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845]/70 to-transparent" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D97845] block mb-3 px-3 py-1 bg-[#D97845]/10 rounded-md border border-[#D97845]/20 w-fit">Direct Mill Access</span>
              <h3 className="text-2xl font-serif font-medium text-[#173D35] mb-3 group-hover:text-[#D97845] transition-colors">Cluster-Direct Access</h3>
              <p className="text-sm text-[#173D35]/75 leading-relaxed mb-6">
                Direct integration with Surat mills, Varanasi karkhanas, Jaipur block printers, and Kolkata handlooms.
              </p>
              <span className="text-[11px] font-semibold text-[#173D35]/65 uppercase tracking-wider block pt-4 border-t border-[#173D35]/10">Verified Mill & Weaver Base</span>
            </div>

            <div className="card-3d-emerald rounded-3xl p-8 sm:p-9 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845]/70 to-transparent" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D97845] block mb-3 px-3 py-1 bg-[#D97845]/10 rounded-md border border-[#D97845]/20 w-fit">Quality Assurance</span>
              <h3 className="text-2xl font-serif font-medium text-[#173D35] mb-3 group-hover:text-[#D97845] transition-colors">Rigorous Quality Checks</h3>
              <p className="text-sm text-[#173D35]/75 leading-relaxed mb-6">
                Lot-wise checking for yarn count, weight consistency, border alignment, and colorfastness standards.
              </p>
              <span className="text-[11px] font-semibold text-[#173D35]/65 uppercase tracking-wider block pt-4 border-t border-[#173D35]/10">Pre-Dispatch Inspection Reports</span>
            </div>

            <div className="card-3d-emerald rounded-3xl p-8 sm:p-9 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845]/70 to-transparent" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D97845] block mb-3 px-3 py-1 bg-[#D97845]/10 rounded-md border border-[#D97845]/20 w-fit">Consolidated Logistics</span>
              <h3 className="text-2xl font-serif font-medium text-[#173D35] mb-3 group-hover:text-[#D97845] transition-colors">Consolidated Logistics & Credit</h3>
              <p className="text-sm text-[#173D35]/75 leading-relaxed mb-6">
                Multi-supplier consignment consolidation with single billing and ThreadLinc working capital financing options.
              </p>
              <span className="text-[11px] font-semibold text-[#173D35]/65 uppercase tracking-wider block pt-4 border-t border-[#173D35]/10">Doorstep Freight Tracking</span>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Registry */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
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
                selectedDomain === 'all' ? 'bg-[#173D35] text-[#F5F0E6] shadow-sm' : 'bg-white text-[#173D35] border border-[#173D35]/15 hover:border-[#D97845]'
              }`}
            >
              All Steps
            </button>
            <button
              onClick={() => setSelectedDomain('curation')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                selectedDomain === 'curation' ? 'bg-[#173D35] text-[#F5F0E6] shadow-sm' : 'bg-white text-[#173D35] border border-[#173D35]/15 hover:border-[#D97845]'
              }`}
            >
              Curation & Swatches
            </button>
            <button
              onClick={() => setSelectedDomain('quality')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                selectedDomain === 'quality' ? 'bg-[#173D35] text-[#F5F0E6] shadow-sm' : 'bg-white text-[#173D35] border border-[#173D35]/15 hover:border-[#D97845]'
              }`}
            >
              Pricing & Quality
            </button>
            <button
              onClick={() => setSelectedDomain('logistics')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                selectedDomain === 'logistics' ? 'bg-[#173D35] text-[#F5F0E6] shadow-sm' : 'bg-white text-[#173D35] border border-[#173D35]/15 hover:border-[#D97845]'
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
              <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-[#D97845]" />
              <div className="space-y-1.5 pl-2">
                <div className="flex items-center gap-2 text-xs text-[#173D35]/65">
                  <span className="font-semibold text-[#D97845] uppercase tracking-wider">{st.number}</span>
                  <span>·</span>
                  <span>{st.year}</span>
                </div>
                <h4 className="text-xl font-serif font-medium text-[#173D35] group-hover:text-[#D97845] transition-colors">{st.title}</h4>
                <p className="text-sm text-[#173D35]/75 leading-relaxed max-w-3xl">{st.impact}</p>
              </div>
              <button
                onClick={onOpenInquiry}
                className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#173D35] bg-[#F5F0E6] border border-[#173D35]/15 rounded-xl hover:bg-[#D97845] hover:text-white hover:border-[#D97845] transition-all whitespace-nowrap self-start sm:self-center"
              >
                Consult on Process
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
