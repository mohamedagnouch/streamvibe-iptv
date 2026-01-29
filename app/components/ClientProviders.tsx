'use client';

import { ReactNode } from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function ClientProviders({ children }: { children: ReactNode }) {
    return (
        <LanguageProvider>
            {children}
            <LanguageSelector />
        </LanguageProvider>
    );
}
