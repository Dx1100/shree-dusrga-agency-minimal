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
      className={`mb-10 sm:mb-14 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      } ${className}`}
    >
      {kicker && (
        <span
          className={`inline-block text-[11px] font-semibold uppercase tracking-[0.22em] mb-3 ${
            light ? 'text-rose-400' : 'text-[#9b111e]'
          }`}
        >
          {kicker}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal tracking-tight leading-[1.2] break-normal ${
          light ? 'text-white' : 'text-slate-950'
        }`}
      >
        {heading}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-sm sm:text-base md:text-lg leading-relaxed font-normal ${
            light ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
};
