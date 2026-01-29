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
                className="group flex items-center gap-2 bg-[#0a0e1a]/80 backdrop-blur-xl border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all px-4 py-2 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                aria-label="Select language"
            >
                <div className="relative">
                    <Globe className={`w-4 h-4 text-gray-300 group-hover:text-orange-400 transition-all duration-500 ${isOpen ? 'rotate-[360deg]' : ''}`} />
                    {isOpen && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
                    )}
                </div>
                <span className="font-bold text-xs uppercase tracking-widest text-gray-200 group-hover:text-white">{currentLanguage.code}</span>
                <svg
                    className={`w-3 h-3 transition-transform duration-500 text-gray-500 group-hover:text-white ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute bottom-full mb-3 left-0 min-w-[200px] bg-[#0a0e1a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden z-[61] animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="px-4 py-3 border-b border-white/5 bg-white/5">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">{t('header.selectLanguage') || 'Select Language'}</span>
                    </div>
                    <div className="py-1">
                        {Object.values(languages).map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={`w-full flex items-center gap-4 px-4 py-3.5 transition-all group/item ${language === lang.code
                                    ? 'bg-orange-500/10 text-orange-400'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <span className={`text-2xl transition-transform duration-300 group-hover/item:scale-110 ${language === lang.code ? 'scale-110' : 'grayscale group-hover/item:grayscale-0'}`}>
                                    {lang.flag}
                                </span>
                                <div className="flex-1 text-left">
                                    <div className="font-bold text-sm tracking-wide">{lang.nativeName}</div>
                                    <div className="text-[10px] text-gray-500 font-medium uppercase tracking-tight">{lang.name}</div>
                                </div>
                                {language === lang.code && (
                                    <div className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
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
