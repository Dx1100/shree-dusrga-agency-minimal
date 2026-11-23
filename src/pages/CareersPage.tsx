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
    <div className="pt-20 pb-24 bg-[#F5F0E6]">
      {/* Hero Header */}
      <div className="bg-[#173D35] text-[#F5F0E6] py-20 lg:py-28 relative overflow-hidden border-b border-[#F5F0E6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-7 bg-[#D97845]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E89A6F]">
              Customer Segments & Trade Partnerships
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight max-w-3xl leading-[1.15] text-[#F5F0E6]">
            Who We Serve
          </h1>
          <p className="mt-4 text-[#E89A6F] font-serif text-lg sm:text-xl font-normal">
            {careersData.heading}
          </p>
          <p className="mt-4 text-base sm:text-lg text-[#F5F0E6]/80 max-w-2xl leading-relaxed">
            {careersData.description}
          </p>
        </div>
      </div>

      {/* Value Propositions Band */}
      <div className="bg-white border-b border-[#173D35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading
            kicker="Our Partner Advantage"
            heading="Why Retailers & Trade Buyers Partner With Shree Durga Agency"
            lead="We provide hands-on coordination across India's largest textile clusters, delivering price transparency and dependable quality."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {careersData.perks.map((perk, idx) => (
              <div key={idx} className="card-3d-emerald p-7 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D97845]/60 to-transparent" />
                <h4 className="text-lg font-serif font-medium text-[#173D35] mb-2 group-hover:text-[#D97845] transition-colors">
                  {perk.title}
                </h4>
                <p className="text-sm text-[#173D35]/75 leading-relaxed">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Segments Board */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
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
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg capitalize transition-all ${
                  selectedDept === dept
                    ? 'bg-[#173D35] text-[#F5F0E6] shadow-sm'
                    : 'bg-white text-[#173D35] border border-[#173D35]/15 hover:border-[#D97845]'
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
              <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-[#D97845]" />
              <div className="space-y-2 pl-2">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#173D35]/65">
                  <span className="font-semibold text-[#D97845] uppercase tracking-wider text-[11px] bg-[#D97845]/10 px-2.5 py-0.5 rounded border border-[#D97845]/20">
                    {job.department}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#D97845]" />{job.location}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#173D35]/50" />{job.experience}</span>
                </div>
                <h3 className="text-xl font-serif font-medium text-[#173D35] group-hover:text-[#D97845] transition-colors">{job.title}</h3>
                <p className="text-sm text-[#173D35]/75 max-w-2xl leading-relaxed">
                  {job.description}
                </p>
              </div>

              <div className="shrink-0">
                <button
                  onClick={() => onApplyJob(job)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] bg-[#D97845] hover:bg-[#C26534] text-white rounded-lg transition-all shadow-sm hover:-translate-y-0.5 whitespace-nowrap"
                >
                  Inquire for Segment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
