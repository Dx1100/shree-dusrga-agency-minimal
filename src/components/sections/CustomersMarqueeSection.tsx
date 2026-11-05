import React from 'react';
import { Building2, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

interface CustomerItem {
  name: string;
  city: string;
  segment: string;
  hubFocus: string;
}

interface CustomersMarqueeSectionProps {
  kicker?: string;
  heading?: string;
  statsText?: string;
  customers?: CustomerItem[];
}

const defaultCustomers: CustomerItem[] = [
  { name: 'Nalli Silk Heritage', city: 'Chennai', segment: 'Retail Showroom', hubFocus: 'Katan & South Silks' },
  { name: 'Kala Niketan Emporium', city: 'Mumbai', segment: 'Bridal Couture', hubFocus: 'Zari & Designer Sarees' },
  { name: 'Meena Bazaar Partners', city: 'Delhi NCR', segment: 'Ethnic Showroom', hubFocus: 'Bridal Sets & Lehengas' },
  { name: 'Pothys Retail Network', city: 'Tamil Nadu', segment: 'Multi-store Retail', hubFocus: 'Silks & Cotton Prints' },
  { name: 'Sai Silks Kalamandir', city: 'Hyderabad', segment: 'Showroom Chain', hubFocus: 'Kanchipuram & Brocades' },
  { name: 'Singhania Bridal Studio', city: 'Jaipur', segment: 'Boutique Atelier', hubFocus: 'Gotapatti & Bandhani' },
  { name: 'Roopam Ethnic Couture', city: 'Kolkata', segment: 'Heritage Boutique', hubFocus: 'Tussar & Jamdani Weaves' },
  { name: 'Radha Krishna Wholesale', city: 'Surat', segment: 'Wholesale Mart', hubFocus: 'Georgette & Crepe Bulk' },
  { name: 'Kalyan Silks Partner Group', city: 'Kochi', segment: 'Retail Network', hubFocus: 'Bridal Trousseau & Kasavu' },
  { name: 'Neeru\'s Ensembles', city: 'Bengaluru', segment: 'Showroom Chain', hubFocus: 'Festive & Indo-Western' },
  { name: 'Vandana Sarees Group', city: 'Varanasi', segment: 'Trade Wholesaler', hubFocus: 'Pure Katan & Tanchoi' },
  { name: 'Shringaar Ethnic Hub', city: 'Ahmedabad', segment: 'Showroom & Studio', hubFocus: 'Chaniya Choli & Dupattas' },
];

export const CustomersMarqueeSection: React.FC<CustomersMarqueeSectionProps> = ({
  kicker = 'Our Customers',
  heading = 'Trusted by 250+ Textile Showrooms, Wholesalers & Boutiques Across India',
  statsText = 'Direct mill procurement & sourcing advisory across Surat, Varanasi, Jaipur, Kolkata, and Delhi.',
  customers = defaultCustomers,
}) => {
  // Double list for continuous seamless infinite loop
  const marqueeList = [...customers, ...customers];
  const reversedList = [...customers.slice().reverse(), ...customers.slice().reverse()];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF9F6] border-y border-stone-200/80 relative overflow-hidden">
      {/* Decorative subtle ambient backdrop */}
      <div className="absolute inset-0 bg-radial from-emerald-900/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-900/10 text-emerald-800 text-[11px] font-semibold uppercase tracking-[0.2em] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          <span>{kicker}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-slate-950 tracking-tight max-w-3xl mx-auto leading-tight">
          {heading}
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-stone-600 font-light max-w-2xl mx-auto leading-relaxed">
          {statsText}
        </p>
      </div>

      {/* Marquee Row 1: Left to Right Loop */}
      <div className="relative w-full overflow-hidden mb-5">
        {/* Left and Right Edge Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent z-20" />

        <div className="animate-marquee py-2 flex items-center gap-5">
          {marqueeList.map((cust, idx) => (
            <div
              key={`m1-${cust.name}-${idx}`}
              className="card-3d px-6 py-4 rounded-xl flex items-center gap-4 min-w-[270px] sm:min-w-[310px] shrink-0 relative overflow-hidden group select-none cursor-default"
            >
              {/* Top Specular Bevel Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/35 to-transparent" />

              {/* Monogram Badge */}
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#0B132B] to-[#162244] text-emerald-300 font-serif font-bold text-sm flex items-center justify-center shrink-0 shadow-xs border border-white/10 group-hover:from-emerald-900 group-hover:to-[#0B132B] transition-colors">
                {cust.name
                  .split(' ')
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join('')}
              </div>

              {/* Brand Meta */}
              <div className="space-y-0.5 text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-sm sm:text-base font-normal text-slate-950 group-hover:text-emerald-900 transition-colors">
                    {cust.name}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                </div>
                <div className="flex items-center gap-2 text-[11px] text-stone-500 font-light">
                  <span className="flex items-center gap-0.5 text-stone-600">
                    <MapPin className="w-3 h-3 text-emerald-700" />
                    {cust.city}
                  </span>
                  <span>·</span>
                  <span className="font-mono text-emerald-800 font-medium text-[10px] uppercase tracking-wider bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-900/10">
                    {cust.segment}
                  </span>
                </div>
                <span className="text-[10px] text-stone-400 block font-light truncate max-w-[200px]">
                  {cust.hubFocus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2: Reverse Loop for Visual Richness */}
      <div className="relative w-full overflow-hidden">
        {/* Left and Right Edge Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent z-20" />

        <div className="animate-marquee-reverse py-2 flex items-center gap-5">
          {reversedList.map((cust, idx) => (
            <div
              key={`m2-${cust.name}-${idx}`}
              className="card-3d-emerald px-6 py-4 rounded-xl flex items-center gap-4 min-w-[270px] sm:min-w-[310px] shrink-0 relative overflow-hidden group select-none cursor-default"
            >
              {/* Top Specular Bevel Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />

              {/* Monogram Badge */}
              <div className="w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-900/15 text-emerald-900 font-serif font-bold text-sm flex items-center justify-center shrink-0 shadow-xs group-hover:bg-emerald-900 group-hover:text-emerald-100 transition-colors">
                {cust.name
                  .split(' ')
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join('')}
              </div>

              {/* Brand Meta */}
              <div className="space-y-0.5 text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-sm sm:text-base font-normal text-slate-950 group-hover:text-emerald-900 transition-colors">
                    {cust.name}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                </div>
                <div className="flex items-center gap-2 text-[11px] text-stone-500 font-light">
                  <span className="flex items-center gap-0.5 text-stone-600">
                    <MapPin className="w-3 h-3 text-emerald-700" />
                    {cust.city}
                  </span>
                  <span>·</span>
                  <span className="font-mono text-emerald-900 font-medium text-[10px] uppercase tracking-wider bg-white px-1.5 py-0.5 rounded border border-emerald-900/10">
                    {cust.hubFocus}
                  </span>
                </div>
                <span className="text-[10px] text-stone-500 block font-light truncate max-w-[200px]">
                  {cust.segment} Partner
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Cluster Footer Tag */}
      <div className="mt-8 text-center text-[11px] text-stone-500 font-light uppercase tracking-wider flex items-center justify-center gap-4 flex-wrap px-4">
        <span className="inline-flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5 text-emerald-700" />
          <span>Surat Georgettes & Crepes</span>
        </span>
        <span className="text-stone-300">·</span>
        <span>Varanasi Pure Katan Silks</span>
        <span className="text-stone-300">·</span>
        <span>Jaipur Sanganeri & Bagru Prints</span>
        <span className="text-stone-300">·</span>
        <span>Kolkata Handlooms & Jamdani</span>
        <span className="text-stone-300">·</span>
        <span>Delhi Bridal Ensembles</span>
      </div>
    </section>
  );
};
