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
            className={`w-6 h-[1.5px] ${
              light ? 'bg-[#D97845]' : 'bg-[#D97845]'
            }`}
          />
          <span
            className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${
              light ? 'text-[#E89A6F]' : 'text-[#D97845]'
            }`}
          >
            {kicker}
          </span>
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-normal tracking-tight leading-[1.16] break-normal ${
          light ? 'text-[#F5F0E6]' : 'text-[#173D35]'
        }`}
      >
        {heading}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-sm sm:text-base md:text-lg leading-relaxed font-normal ${
            light ? 'text-[#F5F0E6]/80' : 'text-[#173D35]/75'
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
};
