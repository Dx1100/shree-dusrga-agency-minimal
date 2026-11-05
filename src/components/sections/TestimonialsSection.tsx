import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Star, Quote, CheckCircle2, ShieldCheck, MapPin, Building, ArrowUpRight } from 'lucide-react';

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  city: string;
  segment: string;
  rating: number;
  hubSource: string;
  verified: boolean;
}

interface TestimonialsSectionProps {
  kicker?: string;
  heading?: string;
  subheading?: string;
  items?: TestimonialItem[];
  onOpenInquiry?: () => void;
}

const defaultTestimonials: TestimonialItem[] = [
  {
    id: 't1',
    quote: 'Shree Durga Agency transformed our seasonal bridal procurement. Instead of spending weeks navigating unverified brokers in congested markets, we receive curated swatches with guaranteed mill-direct pricing and strict QA before dispatch.',
    author: 'Vikram Singhania',
    role: 'Managing Partner',
    company: 'Singhania Sarees & Bridal Studio',
    city: 'Jaipur, Rajasthan',
    segment: 'Bridal & Showroom',
    rating: 5,
    hubSource: 'Varanasi & Surat Hubs',
    verified: true,
  },
  {
    id: 't2',
    quote: 'ThreadLinc Financing combined with Shree Durga Agency\'s direct Surat polyester and georgette manufacturer connections allowed our wholesale business to scale inventory 40% ahead of Diwali season with absolute liquidity ease.',
    author: 'Harish Patel',
    role: 'Procurement Director',
    company: 'Patel Textile Distributors',
    city: 'Ahmedabad, Gujarat',
    segment: 'Wholesale Distributor',
    rating: 5,
    hubSource: 'Surat Textile Hub',
    verified: true,
  },
  {
    id: 't3',
    quote: 'Finding authentic chanderi, tussar silk, and hand-block artisans used to be hit-or-miss. With Shree Durga Agency\'s artisan cluster linkage, our boutique has established direct provenance with master weavers at fair market rates.',
    author: 'Ananya Sen',
    role: 'Creative Founder & Curator',
    company: 'Paromita Ethnic Couture',
    city: 'Kolkata, West Bengal',
    segment: 'Boutique Curator',
    rating: 5,
    hubSource: 'Kolkata & Varanasi Clusters',
    verified: true,
  },
  {
    id: 't4',
    quote: 'Their on-the-ground inspection team in Surat and Varanasi catches shade variances and weave flaws before lots are packed. That level of operational rigor and transparent invoicing is rare in Indian textile trade.',
    author: 'R. Sundaram',
    role: 'Head of Sourcing',
    company: 'Sri Meenakshi Silks & Sarees',
    city: 'Madurai, Tamil Nadu',
    segment: 'Retail Chain',
    rating: 5,
    hubSource: 'Surat & Katan Centers',
    verified: true,
  },
  {
    id: 't5',
    quote: 'We source over 3,000 meters of unstitched salwar suit fabrics every quarter. Shree Durga Agency coordinates sampling, mill price lock-in, and consolidated transport directly to our wholesale hub in Delhi.',
    author: 'Gaurav Malhotra',
    role: 'General Partner',
    company: 'Malhotra Textiles & Fabrics',
    city: 'Chandni Chowk, Delhi',
    segment: 'Wholesale Distributor',
    rating: 5,
    hubSource: 'Jaipur & Surat Markets',
    verified: true,
  },
  {
    id: 't6',
    quote: 'For our high-ticket lehenga collection, we needed dependable zari embroidery suppliers who deliver on agreed delivery calendars. Shree Durga Agency has been an indispensable partner for our bridal flagship.',
    author: 'Meenakshi Kothari',
    role: 'Design Director',
    company: 'Kothari Heritage Ensembles',
    city: 'Hyderabad, Telangana',
    segment: 'Bridal & Showroom',
    rating: 5,
    hubSource: 'Varanasi & Jaipur Hubs',
    verified: true,
  },
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  kicker = 'Buyer Testimonials',
  heading = 'What Textile Retailers & Wholesalers Say About Sourcing With Us',
  subheading = 'Verified experiences from showroom owners, wholesale distributors, and boutique curators who rely on Shree Durga Agency for transparent pricing, on-ground inspection, and ThreadLinc financing.',
  items = defaultTestimonials,
  onOpenInquiry,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Reviews' },
    { id: 'Bridal & Showroom', label: 'Bridal & Showrooms' },
    { id: 'Wholesale Distributor', label: 'Wholesale Distributors' },
    { id: 'Boutique Curator', label: 'Boutique Curators' },
    { id: 'Retail Chain', label: 'Retail Chains' },
  ];

  const filteredItems = selectedFilter === 'all'
    ? items
    : items.filter((item) => item.segment === selectedFilter);

  const featured = items[0];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            kicker={kicker}
            heading={heading}
            lead={subheading}
            className="mb-0"
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all ${
                  selectedFilter === f.id
                    ? 'bg-[#0B132B] text-white shadow-md'
                    : 'card-3d text-stone-700 hover:text-slate-950 hover:bg-stone-50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Spotlight Testimonial */}
        {featured && selectedFilter === 'all' && (
          <div className="mb-10 card-3d-dark rounded-3xl p-8 sm:p-12 relative overflow-hidden text-white group">
            {/* Top Specular Bevel Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/30">
                    Spotlight Partner Story
                  </span>
                </div>

                <blockquote className="text-xl sm:text-2xl font-serif font-normal text-stone-100 leading-snug">
                  "{featured.quote}"
                </blockquote>

                <div className="flex flex-wrap items-center gap-3 text-xs text-stone-300 font-light pt-2">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Verified Sourcing Account
                  </span>
                  <span>·</span>
                  <span className="text-stone-400">{featured.hubSource}</span>
                </div>
              </div>

              <div className="lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-8 space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-950 text-white font-serif text-xl font-bold flex items-center justify-center shadow-md border border-white/20">
                  {featured.author.split(' ').map(w => w[0]).join('')}
                </div>
                <div>
                  <h4 className="text-lg font-serif font-normal text-white">{featured.author}</h4>
                  <p className="text-xs text-emerald-300 font-medium">{featured.role}</p>
                  <p className="text-xs text-stone-300 font-light mt-0.5">{featured.company}</p>
                  <p className="text-[11px] text-stone-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {featured.city}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card-3d p-7 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between group"
            >
              {/* Top Specular Bevel Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/35 to-transparent" />

              <div>
                {/* Rating & Hub Source */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-900/10 font-medium">
                    {item.segment}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-stone-700 font-light leading-relaxed mb-6 line-clamp-4 group-hover:text-slate-950 transition-colors">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Provenance Info */}
              <div className="pt-4 border-t border-stone-200/60 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B132B] to-[#1E293B] text-emerald-300 font-serif font-bold text-sm flex items-center justify-center shrink-0 shadow-xs border border-stone-200">
                  {item.author.split(' ').map(w => w[0]).slice(0, 2).join('')}
                </div>
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-1">
                    <h4 className="text-sm font-serif font-normal text-slate-950 truncate">
                      {item.author}
                    </h4>
                    {item.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-emerald-800 font-medium truncate">
                    {item.role} · {item.company}
                  </p>
                  <p className="text-[10px] text-stone-500 flex items-center gap-1 font-light">
                    <MapPin className="w-3 h-3 text-stone-400" />
                    {item.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Indicators Strip */}
        <div className="mt-14 card-3d-emerald rounded-2xl p-6 sm:p-8 relative overflow-hidden grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
          
          <div className="space-y-1">
            <span className="font-serif text-2xl sm:text-3xl font-normal text-emerald-900 block">
              98.4%
            </span>
            <span className="text-[11px] uppercase tracking-wider text-stone-600 font-light block">
              On-Time Dispatch Rate
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-serif text-2xl sm:text-3xl font-normal text-emerald-900 block">
              ₹0 Hidden
            </span>
            <span className="text-[11px] uppercase tracking-wider text-stone-600 font-light block">
              Direct Mill Invoices
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-serif text-2xl sm:text-3xl font-normal text-emerald-900 block">
              100% QA
            </span>
            <span className="text-[11px] uppercase tracking-wider text-stone-600 font-light block">
              Pre-Dispatch Inspection
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-serif text-2xl sm:text-3xl font-normal text-emerald-900 block">
              250+ Stores
            </span>
            <span className="text-[11px] uppercase tracking-wider text-stone-600 font-light block">
              Partner Accounts Across India
            </span>
          </div>
        </div>

        {/* CTA prompt */}
        {onOpenInquiry && (
          <div className="mt-8 text-center">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] bg-[#0B132B] hover:bg-emerald-800 text-white rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Connect with a Sourcing Advisor</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
