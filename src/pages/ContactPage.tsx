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
    <div className="pt-20 pb-24 bg-[#F5F0E6]">
      {/* Hero Header */}
      <div className="bg-[#173D35] text-[#F5F0E6] py-20 lg:py-28 relative overflow-hidden border-b border-[#F5F0E6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-7 bg-[#D97845]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E89A6F]">
              Sourcing Consultation & Trade Enquiries
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight max-w-3xl leading-[1.15] text-[#F5F0E6]">
            Connect With Our Sourcing and Consulting Team
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#F5F0E6]/80 max-w-2xl leading-relaxed">
            Reach out to our sourcing consultants for product curations, swatch requests, wholesale volume quotations, or ThreadLinc credit assistance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Sourcing Inquiry Form */}
          <div className="lg:col-span-7 card-3d rounded-3xl p-8 sm:p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845] to-transparent" />
            <SectionHeading
              kicker="Sourcing Enquiry"
              heading="Initiate a Sourcing Dialogue"
              lead="Tell us about your retail or wholesale procurement needs. Our sourcing team will contact you with relevant catalogs and price guidelines within 24 business hours."
              className="mb-8"
            />

            {isSubmitted ? (
              <div className="p-8 sm:p-10 rounded-2xl bg-[#F5F0E6] border border-[#D97845]/30 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#D97845] mx-auto" />
                <h3 className="text-2xl font-serif font-medium text-[#173D35]">
                  Enquiry Registered Successfully
                </h3>
                <p className="text-sm text-[#173D35]/75 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#173D35]">{formData.fullName}</span>. Your enquiry for <span className="font-semibold text-[#173D35]">{formData.department}</span> has been routed to our sourcing desk. Reference ID: <span className="font-mono text-xs font-semibold text-[#D97845]">SDA-INQ-{Math.floor(100000 + Math.random() * 900000)}</span>.
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
                  className="mt-4 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] bg-[#173D35] text-[#F5F0E6] rounded-lg hover:bg-[#102B25] transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#173D35] block mb-1.5">
                      Full Name / Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full text-sm p-3.5 bg-[#F5F0E6]/60 border border-[#173D35]/15 rounded-lg text-[#173D35] placeholder:text-[#173D35]/40 focus:outline-none focus:border-[#D97845] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#173D35] block mb-1.5">
                      Email Address or Phone *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="buyer@showroom.com / +91 98..."
                      className="w-full text-sm p-3.5 bg-[#F5F0E6]/60 border border-[#173D35]/15 rounded-lg text-[#173D35] placeholder:text-[#173D35]/40 focus:outline-none focus:border-[#D97845] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#173D35] block mb-1.5">
                      Business / Showroom Name
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Shree Laxmi Silks"
                      className="w-full text-sm p-3.5 bg-[#F5F0E6]/60 border border-[#173D35]/15 rounded-lg text-[#173D35] placeholder:text-[#173D35]/40 focus:outline-none focus:border-[#D97845] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#173D35] block mb-1.5">
                      City / State
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. Hyderabad, Telangana"
                      className="w-full text-sm p-3.5 bg-[#F5F0E6]/60 border border-[#173D35]/15 rounded-lg text-[#173D35] placeholder:text-[#173D35]/40 focus:outline-none focus:border-[#D97845] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#173D35] block mb-1.5">
                    Primary Sourcing Category *
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full text-sm p-3.5 bg-[#F5F0E6]/60 border border-[#173D35]/15 rounded-lg text-[#173D35] focus:outline-none focus:border-[#D97845] transition-colors"
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
                  <label className="text-xs font-semibold text-[#173D35] block mb-1.5">
                    Requirements / Target Sourcing Hub *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention target price ranges, fabric types, required batch volume, target market hub (Surat, Varanasi, Jaipur, etc.), or swatch requests..."
                    className="w-full text-sm p-3.5 bg-[#F5F0E6]/60 border border-[#173D35]/15 rounded-lg text-[#173D35] placeholder:text-[#173D35]/40 focus:outline-none focus:border-[#D97845] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 text-xs font-semibold uppercase tracking-[0.16em] bg-[#D97845] text-white rounded-xl hover:bg-[#C26534] transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Sourcing Enquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Sourcing Hub Desks */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-serif font-medium text-[#173D35]">
              Textile Sourcing Hubs
            </h3>
            <p className="text-sm text-[#173D35]/75 leading-relaxed">
              We coordinate buyer requirements across these specialized regional production markets, connecting you directly with verified looms and manufacturers.
            </p>

            <div className="space-y-4">
              {hubs.map((hub, idx) => (
                <div
                  key={idx}
                  className="card-3d rounded-2xl p-6 sm:p-7 relative overflow-hidden group space-y-2.5"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845]/60 to-transparent" />
                  <h4 className="text-lg font-serif font-medium text-[#173D35] group-hover:text-[#D97845] transition-colors">
                    {hub.city}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#173D35]/75">
                    {hub.address}, {hub.region}
                  </p>
                  <div className="pt-2 text-xs text-[#173D35]/70 space-y-1.5">
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#D97845]" />
                      <span>{hub.phone}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#D97845]" />
                      <span>{hub.email}</span>
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#173D35]/10 text-xs font-semibold text-[#D97845]">
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
