import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Atom, Lightbulb, Compass, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';

interface InnovationPageProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
}

export const InnovationPage: React.FC<InnovationPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [selectedDomain, setSelectedDomain] = useState<'all' | 'materials' | 'water' | 'metallurgy'>('all');

  const patents = [
    {
      title: 'HydroVortex™ Multi-Chamber Forward Osmosis Architecture',
      domain: 'water',
      number: 'IN-PAT-2024-88419',
      year: '2024',
      impact: 'Reduces energy consumption in industrial brine concentration by 38% vs thermal evaporation.',
    },
    {
      title: 'PyroShield™ Self-Extinguishing Carbon-Aramid Hybrid Fiber',
      domain: 'materials',
      number: 'EP-PAT-3940182',
      year: '2023',
      impact: 'Zero char flammability under direct 1,200°C flame exposure for aerospace interior bulkheads.',
    },
    {
      title: 'HelixCore™ Helical Baffle Heat Transfer Matrix',
      domain: 'metallurgy',
      number: 'US-PAT-11849201',
      year: '2023',
      impact: 'Increases thermal coefficient by 34% while lowering pressure drop across viscous hydrocarbon flows.',
    },
    {
      title: 'NanoShield Anti-Biofouling Polysulfone Membrane Coating',
      domain: 'water',
      number: 'IN-PAT-2022-77192',
      year: '2022',
      impact: 'Extends ultrafiltration cartridge operating lifespan by 2.4x in high-COD effluent plants.',
    },
    {
      title: 'CryoWeld Cr-Mo-V Multi-Layer Submerged Arc Protocol',
      domain: 'metallurgy',
      number: 'EP-PAT-3829104',
      year: '2021',
      impact: 'Achieves sub-zero -104°C Charpy V-notch toughness without post-weld micro-fissuring.',
    },
  ];

  const filteredPatents = selectedDomain === 'all'
    ? patents
    : patents.filter((p) => p.domain === selectedDomain);

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">
            Research & Material Physics
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Synthesizing Fundamental Chemistry into Applied Industrial Miracles
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Operating three world-class innovation campuses with over 240 research scientists and metallurgists, Arvion pioneers proprietary intellectual property shaping tomorrow's materials.
          </p>
        </div>
      </div>

      {/* R&D Centers Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-2">Center 01</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Bengaluru Innovation Hub</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Advanced polymers, carbon composite pre-pregs, and nanofiber cleanroom synthesis.
            </p>
            <span className="text-xs font-semibold text-slate-500 font-mono">82 Full-Time Scientists · ISO Class 5</span>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-2">Center 02</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Frankfurt Materials Lab</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Cryogenic metallurgy testing, stress-corrosion modeling, and aerospace certification.
            </p>
            <span className="text-xs font-semibold text-slate-500 font-mono">48 Research Fellows · DIN/EN Accreditations</span>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-2">Center 03</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ahmedabad Process Institute</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Thermodynamic CFD modeling, Zero Liquid Discharge forward osmosis, and bio-scouring.
            </p>
            <span className="text-xs font-semibold text-slate-500 font-mono">110 Engineers · Pilot ZLD Testing Rig</span>
          </div>
        </div>

        {/* Patents Registry */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <SectionHeading
              kicker="Intellectual Property"
              heading="Selected Patents & Granted Claims"
              lead="Explore our proprietary patents deployed across industrial customer complexes."
              className="mb-0"
            />
            {/* Filter buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedDomain('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md ${
                  selectedDomain === 'all' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                All Patents
              </button>
              <button
                onClick={() => setSelectedDomain('water')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md ${
                  selectedDomain === 'water' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                Water (ZLD)
              </button>
              <button
                onClick={() => setSelectedDomain('materials')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md ${
                  selectedDomain === 'materials' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                Composites
              </button>
              <button
                onClick={() => setSelectedDomain('metallurgy')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md ${
                  selectedDomain === 'metallurgy' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                Metallurgy
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredPatents.map((pat, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-blue-900/40 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-mono font-semibold text-blue-900">{pat.number}</span>
                    <span>·</span>
                    <span>Granted {pat.year}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{pat.title}</h4>
                  <p className="text-xs text-slate-600">{pat.impact}</p>
                </div>
                <button
                  onClick={onOpenInquiry}
                  className="px-4 py-2 text-xs font-semibold text-blue-900 border border-blue-900/40 rounded-md hover:bg-blue-900 hover:text-white transition-colors whitespace-nowrap self-start sm:self-center"
                >
                  License / Consult
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
