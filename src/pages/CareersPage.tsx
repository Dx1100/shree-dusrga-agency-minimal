import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import careersData from '../content/config/careers.json';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { JobOpening } from '../types/content';

interface CareersPageProps {
  onApplyJob: (job: JobOpening) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onApplyJob }) => {
  const [selectedDept, setSelectedDept] = useState<string>('all');

  const departments = ['all', ...Array.from(new Set(careersData.jobOpenings.map((j) => j.department)))];

  const filteredJobs = selectedDept === 'all'
    ? careersData.jobOpenings
    : careersData.jobOpenings.filter((j) => j.department === selectedDept);

  return (
    <div className="pt-24 pb-24 bg-[#FAF9F6]">
      {/* Hero Header */}
      <div className="bg-[#0B132B] text-white py-20 lg:py-28 relative overflow-hidden border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400 block mb-3 font-mono">
            Customer Segments & Trade Partnerships
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight max-w-3xl leading-[1.15] text-stone-100">
            Who We Serve
          </h1>
          <p className="mt-4 text-emerald-300 font-serif text-lg sm:text-xl font-normal">
            {careersData.heading}
          </p>
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-light max-w-2xl leading-relaxed">
            {careersData.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Value Propositions */}
        <div className="mb-20">
          <SectionHeading
            kicker="Our Partner Advantage"
            heading="Why Retailers & Trade Buyers Partner With Shree Durga Agency"
            lead="We provide hands-on coordination across India's largest textile clusters, delivering price transparency and dependable quality."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {careersData.perks.map((perk, idx) => (
              <div key={idx} className="card-3d-emerald p-7 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/35 to-transparent" />
                <h4 className="text-lg font-serif font-normal text-slate-950 mb-2 group-hover:text-emerald-900 transition-colors">
                  {perk.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Segments Board */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <SectionHeading
              kicker="Customer Segments"
              heading="Explore Sourcing Channels by Business Scale"
              lead="Find the engagement structure tailored to your showroom volume, boutique curation, or wholesale distribution."
              className="mb-0"
            />
            {/* Department filters */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg capitalize transition-all ${
                    selectedDept === dept
                      ? 'bg-[#0B132B] text-white shadow-md'
                      : 'card-3d text-stone-700 hover:text-stone-950 hover:bg-stone-50'
                  }`}
                >
                  {dept === 'all' ? 'All Segments' : dept}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="card-3d p-7 rounded-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/30 to-transparent" />
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-light">
                    <span className="font-semibold text-emerald-800 uppercase tracking-wider text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-900/10 font-mono">
                      {job.department}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-emerald-700" />{job.location}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-stone-400" />{job.experience}</span>
                  </div>
                  <h3 className="text-xl font-serif font-normal text-slate-950 group-hover:text-emerald-900 transition-colors">{job.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-light max-w-2xl leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => onApplyJob(job)}
                    className="px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] bg-[#0B132B] hover:bg-emerald-800 text-white rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
                  >
                    Inquire for Segment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
