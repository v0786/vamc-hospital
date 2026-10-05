import React from 'react';
import logoSvg from '../assets/vamc_hospital_logo.svg';

interface VAMCLogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'full' | 'shield-only';
  textColor?: string;
  subtextColor?: string;
}

export const VAMCLogo: React.FC<VAMCLogoProps> = ({
  className = 'w-10 h-11',
  showText = false,
  textColor = 'text-[#20282C] dark:text-[#EDF3F5]',
  subtextColor = 'text-[#68757A] dark:text-[#96A5AB]',
}) => {
  return (
    <div className="inline-flex items-center gap-2.5">
      <div className={`relative shrink-0 ${className}`}>
        <img
          src={logoSvg}
          alt="VAMC Hospital Logo - Value Added Medical Care"
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`text-base sm:text-lg font-bold tracking-tight ${textColor}`}>
              VAMC HOSPITAL
            </span>
          </div>
          <span className={`text-[10px] sm:text-[11px] font-medium tracking-wider uppercase mt-0.5 ${subtextColor}`}>
            Value Added Medical Care · Kharghar
          </span>
        </div>
      )}
    </div>
  );
};
