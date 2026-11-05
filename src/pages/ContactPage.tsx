import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import siteConfig from '../content/config/site.json';
import { MapPin, Phone, Mail, Building, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    organization: '',
    department: 'Sarees (Silk, Georgette & Synthetics)',
    country: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const hubs = [
    {
      city: 'Surat Sourcing Hub',
      address: 'Ring Road & Textile Market Zone',
      region: 'Gujarat, India',
      phone: '+91 98765 43210',
      email: 'surat@shreedurgaagency.com',
      scope: 'Synthetic Sarees, Digital Prints, Jacquards & High-Volume Catalog drapes',
    },
    {
      city: 'Varanasi Heritage Cluster',
      address: 'Chowk & Karkhana Coordination Zone',
      region: 'Uttar Pradesh, India',
      phone: '+91 98765 43211',
      email: 'varanasi@shreedurgaagency.com',
      scope: 'Katan Silk Sarees, Banarasi Brocades, Bridal Dupattas & Zari Weaves',
    },
    {
      city: 'Jaipur & Sanganer Hub',
      address: 'Sanganer & Sitapura Craft Belt',
      region: 'Rajasthan, India',
      phone: '+91 98765 43212',
      email: 'jaipur@shreedurgaagency.com',
      scope: 'Hand Block Prints, Mulmul Cottons, Suit Sets & Natural Dyes',
    },
    {
      city: 'Delhi, Kolkata & Panipat Markets',
      address: 'Wholesale & Handloom Consolidation Desks',
      region: 'Pan-India Coordination',
      phone: '+91 98765 43213',
      email: 'sourcing@shreedurgaagency.com',
      scope: 'Fancy Embroideries, Jamdani Handlooms, Linens & Running Materials',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.workEmail && formData.message) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="pt-24 pb-24 bg-[#FAF9F6]">
      {/* Hero Header */}
      <div className="bg-[#0B132B] text-white py-20 lg:py-28 relative overflow-hidden border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400 block mb-3">
            Sourcing Consultation & Trade Enquiries
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight max-w-3xl leading-[1.15] text-stone-100">
            Connect With Our Sourcing and Consulting Team
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-300 font-light max-w-2xl leading-relaxed">
            Reach out to our sourcing consultants for product curations, swatch requests, wholesale volume quotations, or ThreadLinc credit assistance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Sourcing Inquiry Form 3D Box */}
          <div className="lg:col-span-7 card-3d rounded-3xl p-8 sm:p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-600/50 to-transparent" />
            <SectionHeading
              kicker="Sourcing Enquiry"
              heading="Initiate a Sourcing Dialogue"
              lead="Tell us about your retail or wholesale procurement needs. Our sourcing team will contact you with relevant catalogs and price guidelines within 24 business hours."
              className="mb-8"
            />

            {isSubmitted ? (
              <div className="p-8 sm:p-10 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center space-y-4 shadow-xs">
                <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto" />
                <h3 className="text-2xl font-serif font-normal text-slate-950">
                  Enquiry Registered Successfully
                </h3>
                <p className="text-sm text-stone-600 font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-medium text-slate-950">{formData.fullName}</span>. Your enquiry for <span className="font-medium text-slate-950">{formData.department}</span> has been routed to our sourcing desk. Reference ID: <span className="font-mono text-xs font-semibold text-emerald-800">SDA-INQ-{Math.floor(100000 + Math.random() * 900000)}</span>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      workEmail: '',
                      organization: '',
                      department: 'Sarees (Silk, Georgette & Synthetics)',
                      country: '',
                      message: '',
                    });
                  }}
                  className="mt-4 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.15em] bg-[#0B132B] text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-stone-700 block mb-1.5">
                      Full Name / Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full text-xs sm:text-sm p-3.5 bg-[#FAF9F6] border border-stone-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-stone-700 block mb-1.5">
                      Email Address or Phone *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="buyer@showroom.com / +91 98..."
                      className="w-full text-xs sm:text-sm p-3.5 bg-[#FAF9F6] border border-stone-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-stone-700 block mb-1.5">
                      Business / Showroom Name
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Shree Laxmi Silks"
                      className="w-full text-xs sm:text-sm p-3.5 bg-[#FAF9F6] border border-stone-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-stone-700 block mb-1.5">
                      City / State
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. Hyderabad, Telangana"
                      className="w-full text-xs sm:text-sm p-3.5 bg-[#FAF9F6] border border-stone-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-stone-700 block mb-1.5">
                    Primary Sourcing Category *
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3.5 bg-[#FAF9F6] border border-stone-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700 transition-colors"
                  >
                    <option>Sarees (Silk, Georgette & Synthetics)</option>
                    <option>Suit Sets & Dress Materials</option>
                    <option>Lehengas & Bridal Wear</option>
                    <option>Fabrics & Running Material</option>
                    <option>Traditional Brocades & Handlooms</option>
                    <option>ThreadLinc Trade Financing</option>
                    <option>General Sourcing Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-stone-700 block mb-1.5">
                    Requirements / Target Sourcing Hub *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention target price ranges, fabric types, required batch volume, target market hub (Surat, Varanasi, Jaipur, etc.), or swatch requests..."
                    className="w-full text-xs sm:text-sm p-3.5 bg-[#FAF9F6] border border-stone-200 rounded-lg text-slate-900 focus:outline-none focus:border-emerald-700 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 text-xs font-medium uppercase tracking-[0.16em] bg-emerald-700 text-white rounded-xl hover:bg-emerald-600 transition-all shadow-[0_4px_14px_rgba(6,78,59,0.3)] flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Sourcing Enquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Sourcing Hub Desks 3D Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-serif font-normal text-slate-950">
              Textile Sourcing Hubs
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
              We coordinate buyer requirements across these specialized regional production markets, connecting you directly with verified looms and manufacturers.
            </p>

            <div className="space-y-4">
              {hubs.map((hub, idx) => (
                <div
                  key={idx}
                  className="card-3d-emerald rounded-2xl p-6 sm:p-7 relative overflow-hidden group space-y-2.5"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
                  <h4 className="text-lg font-serif font-normal text-slate-950 group-hover:text-emerald-900 transition-colors">
                    {hub.city}
                  </h4>
                  <p className="text-xs text-stone-600 font-light">
                    {hub.address}, {hub.region}
                  </p>
                  <div className="pt-2 text-xs text-stone-500 font-light space-y-1">
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-emerald-800" />
                      <span>{hub.phone}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-emerald-800" />
                      <span>{hub.email}</span>
                    </p>
                  </div>
                  <div className="pt-3 border-t border-stone-200/60 text-[11px] font-semibold text-emerald-800">
                    Specialization: {hub.scope}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
