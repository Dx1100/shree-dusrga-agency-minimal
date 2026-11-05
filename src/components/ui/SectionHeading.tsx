import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  heading: string;
  lead?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  heading,
  lead,
  align = 'left',
  light = false,
  className = '',
}) => {
  return (
    <div
      className={`mb-12 sm:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      } ${className}`}
    >
      {kicker && (
        <div className={`flex items-center gap-2.5 mb-3.5 ${align === 'center' ? 'justify-center' : ''}`}>
          <span
            className={`w-5 h-[1px] ${
              light ? 'bg-emerald-400/80' : 'bg-emerald-700/70'
            }`}
          />
          <span
            className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.26em] ${
              light ? 'text-emerald-300' : 'text-emerald-800'
            }`}
          >
            {kicker}
          </span>
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-normal tracking-tight leading-[1.16] break-normal ${
          light ? 'text-white' : 'text-slate-950'
        }`}
      >
        {heading}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-sm sm:text-base md:text-lg leading-relaxed font-light ${
            light ? 'text-slate-300' : 'text-stone-600'
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
};
