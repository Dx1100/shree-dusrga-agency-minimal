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
    { year: '1938', title: 'Foundational Mill Established', desc: 'Commenced textile operations in Gujarat with 2,400 spindles, dedicated to domestic economic empowerment.' },
    { year: '1974', title: 'Pioneering Heavy Metallurgy', desc: 'Inaugurated dedicated fabrication facilities for ASME-certified heat exchangers and pressure vessels.' },
    { year: '1992', title: 'Global Denim & Technical Weaves', desc: 'Introduced high-speed projectile looms and sustainable indigo rope dyeing, supplying premier European fashion houses.' },
    { year: '2008', title: 'Advanced Materials & Composites', desc: 'Commissioned specialized cleanrooms for aerospace carbon fiber pre-pregs and flame-retardant meta-aramids.' },
    { year: '2016', title: 'Industrial Water Neutrality Breakthrough', desc: 'Achieved 98% Zero Liquid Discharge across all major wet processing complexes.' },
    { year: 'Present', title: 'Next-Gen Industrial Transformation', desc: '28,500+ employees across 54 nations engineering clean energy components, smart fabrics, and IoT systems.' },
  ];

  const leaders = [
    {
      name: 'Vikramaditya Singhania',
      title: 'Executive Chairman',
      bio: 'Over 35 years directing industrial conglomerate growth, materials innovation, and multi-billion-dollar global expansions.',
    },
    {
      name: 'Dr. Meera Nambiar',
      title: 'Managing Director & CEO',
      bio: 'Ph.D. in Chemical Metallurgy with leadership roles across aerospace engineering and sustainable manufacturing.',
    },
    {
      name: 'Rohan Mehta',
      title: 'Chief Technology Officer',
      bio: 'Directs Arvion Central R&D hubs across India and Europe, holding 28 granted patents in nanofiltration.',
    },
    {
      name: 'Elena Rostova',
      title: 'President – International Operations',
      bio: 'Oversees global supply chain hubs, European aerospace OEM partnerships, and North American distribution.',
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">
            Heritage & Corporate Vision
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Eight Decades of Industrial Ingenuity & Responsibility
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            From our founding conviction in self-reliance to our present leadership in advanced aerospace composites and zero-liquid-discharge engineering, Arvion transforms fundamental materials science into enduring societal progress.
          </p>
        </div>
      </div>

      {/* Main Philosophy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900 block">
              Core Principles
            </span>
            <h2 className="text-3xl font-bold text-slate-900 leading-tight">
              Materials Conceived for Extreme Demands, Manufactured with Planetary Reverence
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We operate at the convergence of heavy metallurgy, polymer synthesis, and closed-loop thermodynamics. Our engineers understand that true technological superiority cannot rely on resource depletion.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Shield className="w-6 h-6 text-blue-900 mb-2" />
                <h4 className="text-sm font-bold text-slate-900">Zero Compromise</h4>
                <p className="text-xs text-slate-500 mt-1">100% radiographic weld pass rates and zero toxic chemical effluents.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Target className="w-6 h-6 text-blue-900 mb-2" />
                <h4 className="text-sm font-bold text-slate-900">Proprietary Science</h4>
                <p className="text-xs text-slate-500 mt-1">Over 140 granted patents fueling advanced thermal barriers and water recovery.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Arvion Corporate Headquarters"
                fallbackTitle="Arvion Corporate Headquarters"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-28">
          <SectionHeading
            kicker="Our Chronology"
            heading="Milestones That Shaped an Industrial Powerhouse"
            lead="Explore key turning points in our 86-year history."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-900/40 transition-colors">
                <span className="text-2xl font-extrabold text-blue-900 font-mono block mb-2">
                  {m.year}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div id="leadership" className="mt-28">
          <SectionHeading
            kicker="Corporate Governance"
            heading="Executive Leadership & Board"
            lead="Stewarding long-term shareholder value and ethical corporate practices."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {leaders.map((ldr, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-blue-900/10 text-blue-900 flex items-center justify-center font-bold text-lg mb-4">
                    {ldr.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {ldr.name}
                  </h3>
                  <span className="text-xs font-semibold text-blue-900 block mb-3">
                    {ldr.title}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ldr.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Footprint CTA */}
        <div id="footprint" className="mt-28 p-10 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
              Global Scale
            </span>
            <h3 className="text-2xl font-bold">32 Advanced Manufacturing Facilities Across 54 Countries</h3>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Connecting primary raw materials, precision fabrication hubs, and worldwide client integration corridors.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider bg-white text-slate-900 rounded-md hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0"
          >
            Connect with Corporate Office
          </button>
        </div>
      </div>
    </div>
  );
};
