import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor, Check } from 'lucide-react';
import { useTheme, ThemePreference } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  compact?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', compact = false }) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getDisplayIcon = () => {
    if (theme === 'system') {
      return <Monitor className="w-4 h-4 text-[#115572] dark:text-[#2A88B0]" />;
    }
    if (theme === 'dark') {
      return <Moon className="w-4 h-4 text-[#2A88B0]" />;
    }
    return <Sun className="w-4 h-4 text-[#EF3236]" />;
  };

  const getLabel = () => {
    if (theme === 'system') return `System (${resolvedTheme === 'dark' ? 'Dark' : 'Light'})`;
    if (theme === 'dark') return 'Dark';
    return 'Light';
  };

  const options: { value: ThemePreference; label: string; icon: React.ReactNode }[] = [
    {
      value: 'light',
      label: 'Light',
      icon: <Sun className="w-3.5 h-3.5 text-[#EF3236]" />,
    },
    {
      value: 'dark',
      label: 'Dark',
      icon: <Moon className="w-3.5 h-3.5 text-[#2A88B0]" />,
    },
    {
      value: 'system',
      label: 'System (Auto)',
      icon: <Monitor className="w-3.5 h-3.5 text-[#115572] dark:text-[#2A88B0]" />,
    },
  ];

  return (
    <div ref={containerRef} className={`relative inline-flex items-center ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#DDE4E6] dark:border-[#263842] bg-[#FFFFFF] dark:bg-[#16232A] text-[#20282C] dark:text-[#EDF3F5] hover:border-[#115572] dark:hover:border-[#2A88B0] hover:bg-[#F7F8F8] dark:hover:bg-[#1E2E37] transition-all text-xs font-medium cursor-pointer shadow-2xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#115572] dark:focus-visible:ring-[#2A88B0]"
        aria-label={`Current theme: ${getLabel()}. Click to change theme`}
        title={`Current theme: ${getLabel()}. Click to change.`}
        aria-expanded={isOpen}
      >
        {getDisplayIcon()}
        {!compact && <span className="hidden xl:inline text-[11px] font-medium">{getLabel()}</span>}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1.5 w-36 py-1 bg-[#FFFFFF] dark:bg-[#16232A] rounded-xl border border-[#DDE4E6] dark:border-[#263842] shadow-md z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="px-3 py-1 text-[10px] font-semibold text-[#68757A] dark:text-[#96A5AB] uppercase tracking-wider border-b border-[#DDE4E6] dark:border-[#263842]">
            Theme Mode
          </div>
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                setTheme(opt.value);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors cursor-pointer ${
                theme === opt.value
                  ? 'bg-[#115572]/10 dark:bg-[#2A88B0]/20 text-[#115572] dark:text-[#2A88B0] font-semibold'
                  : 'text-[#20282C] dark:text-[#EDF3F5] hover:bg-[#F7F8F8] dark:hover:bg-[#1E2E37]'
              }`}
            >
              <span className="flex items-center gap-2">
                {opt.icon}
                <span>{opt.label}</span>
              </span>
              {theme === opt.value && <Check className="w-3 h-3 text-[#115572] dark:text-[#2A88B0]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
