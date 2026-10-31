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
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">
            Talent & Leadership
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            {careersData.heading}
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            {careersData.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Perks Grid */}
        <div className="mb-20">
          <SectionHeading
            kicker="Workplace Pillars"
            heading="Why Engineers and Scientists Choose Arvion"
            lead="We foster an environment of intellectual rigor, continuous learning, and long-term career fulfillment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {careersData.perks.map((perk, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {perk.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Board */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <SectionHeading
              kicker="Open Opportunities"
              heading="Explore Current Positions Across Global Hubs"
              lead="Find the role that matches your technical mastery and global ambitions."
              className="mb-0"
            />
            {/* Department filters */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize transition-colors ${
                    selectedDept === dept
                      ? 'bg-blue-900 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {dept === 'all' ? 'All Departments' : dept}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-blue-900/40 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-blue-900">{job.department}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.experience}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                  <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => onApplyJob(job)}
                    className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-blue-900 text-white rounded-lg hover:bg-blue-950 transition-colors whitespace-nowrap"
                  >
                    Apply for Position
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
