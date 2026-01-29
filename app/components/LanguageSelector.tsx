'use client';

import { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { languages, Language } from '../i18n';

export default function LanguageSelector() {
    const { t, language, setLanguage } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
        setIsOpen(false);
    };

    const currentLanguage = languages[language];

    return (
        <div ref={dropdownRef} className="fixed bottom-6 left-6 z-[60]">
            {/* Language Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center gap-2.5 bg-[#0a0e1a]/60 backdrop-blur-2xl border border-white/10 hover:border-orange-500/40 hover:bg-white/10 transition-all duration-500 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/20"
                aria-label="Select language"
            >
                <div className="relative flex items-center justify-center">
                    <Globe className={`w-3.5 h-3.5 text-gray-400 group-hover:text-orange-400 transition-all duration-700 ${isOpen ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`} />
                    {isOpen && (
                        <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(249,115,22,1)]"></span>
                    )}
                </div>

                <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-gray-300 group-hover:text-white transition-colors">
                    {currentLanguage.code}
                </span>

                <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-2.5 h-2.5 text-gray-500 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                    </svg>
                </div>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute bottom-full mb-4 left-0 min-w-[200px] bg-[#0d121f]/90 backdrop-blur-3xl border border-white/10 rounded-[28px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] overflow-hidden z-[61] animate-fade-in-up">
                    <div className="px-6 py-5 border-b border-white/5 bg-white/[0.02]">
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500 block mb-1">Language</span>
                        <span className="text-[12px] text-gray-300 font-semibold">Select Preference</span>
                    </div>
                    <div className="p-2">
                        {Object.values(languages).map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-[20px] transition-all duration-300 group/item ${language === lang.code
                                        ? 'bg-orange-500/10 text-orange-400 shadow-inner'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <span className={`text-2xl transition-all duration-500 ${language === lang.code ? 'scale-110' : 'grayscale group-hover/item:grayscale-0 group-hover/item:scale-110'
                                    }`}>
                                    {lang.flag}
                                </span>

                                <div className="flex-1 text-left">
                                    <div className="font-bold text-xs tracking-wide">{lang.nativeName}</div>
                                    <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-tight">{lang.name}</div>
                                </div>

                                {language === lang.code && (
                                    <div className="relative flex h-1.5 w-1.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
