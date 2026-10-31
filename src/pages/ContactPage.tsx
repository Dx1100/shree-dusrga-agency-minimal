import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import siteConfig from '../content/config/site.json';
import { MapPin, Phone, Mail, Building, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    organization: '',
    department: 'Technical RFQ / Engineering Consultation',
    country: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const offices = [
    {
      city: 'Ahmedabad (Global Headquarters)',
      address: 'Arvion House, Innovation Boulevard, Naroda Industrial Estate',
      region: 'India - 382330',
      phone: '+91 (79) 6820 4000',
      email: 'corporate@arvionglobal.com',
      scope: 'Executive Offices, Heavy Metallurgy, Pilot ZLD Labs',
    },
    {
      city: 'Frankfurt (European Technical Center)',
      address: 'Industriepark Höchst, Geb. C657',
      region: '65926 Frankfurt am Main, Germany',
      phone: '+49 (69) 305 8820',
      email: 'europe@arvionglobal.com',
      scope: 'Aerospace Composite Testing, DIN/EN Accreditations',
    },
    {
      city: 'Houston (Americas Energy Division)',
      address: '1200 Energy Corridor Parkway, Suite 1400',
      region: 'Houston, TX 77079, USA',
      phone: '+1 (713) 580 9400',
      email: 'americas@arvionglobal.com',
      scope: 'ASME Process Heat Exchangers & Cryogenic Equipment',
    },
    {
      city: 'Singapore (Asia-Pacific Commercial Hub)',
      address: 'Marina Bay Financial Centre, Tower 2, Level 28',
      region: 'Singapore 018983',
      phone: '+65 6818 2000',
      email: 'apac@arvionglobal.com',
      scope: 'Regional Logistics & Specialty Fiber Trade Finance',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.workEmail && formData.message) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">
            Worldwide Operations & Commercial Support
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Connect With Our Engineering and Commercial Teams
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Reach out to our global technical centers, request engineering quotations, or connect with corporate relations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            <SectionHeading
              kicker="Inquiry Form"
              heading="Initiate a Technical or Commercial Dialogue"
              lead="Please provide your organizational requirements. A designated lead engineer or commercial director will respond within 24 business hours."
              className="mb-8"
            />

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">
                  Inquiry Successfully Registered
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Your message has been routed to our <span className="font-semibold text-slate-900">{formData.department}</span> division. Reference ID: <span className="font-mono text-xs font-bold text-blue-900">ARV-INQ-{Math.floor(100000 + Math.random() * 900000)}</span>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      workEmail: '',
                      organization: '',
                      department: 'Technical RFQ / Engineering Consultation',
                      country: '',
                      message: '',
                    });
                  }}
                  className="mt-4 px-5 py-2 text-xs font-bold uppercase tracking-wider bg-slate-900 text-white rounded-md hover:bg-slate-800"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Dr. Arthur Vance"
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-900"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Professional Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="name@enterprise.com"
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Siemens Energy / Boeing"
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-900"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Country / Jurisdiction
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. United Kingdom"
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Inquiry Topic / Division *
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-900"
                  >
                    <option>Technical RFQ / Engineering Consultation</option>
                    <option>Advanced Materials & Composites</option>
                    <option>Heavy Engineering & Pressure Vessels</option>
                    <option>Zero Liquid Discharge (ZLD) Water Solutions</option>
                    <option>Sustainable Textiles & Circular Denim</option>
                    <option>Investor Relations & Financial Queries</option>
                    <option>Media & Corporate Communications</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Project Specifications or Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe operating pressure, composite thermal class, MLD water recycling requirements, or commercial timeline..."
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 text-xs font-bold uppercase tracking-wider bg-blue-900 text-white rounded-lg hover:bg-blue-950 transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Official Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Global Office Locations */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-slate-900">
              Global Operating Centers
            </h3>

            <div className="space-y-4">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 hover:border-slate-300 transition-colors"
                >
                  <h4 className="text-sm font-bold text-slate-900">
                    {office.city}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {office.address}, {office.region}
                  </p>
                  <div className="pt-2 text-xs text-slate-500 space-y-1">
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-blue-900" />
                      <span>{office.phone}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-blue-900" />
                      <span>{office.email}</span>
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-[11px] font-semibold text-blue-900">
                    Scope: {office.scope}
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
