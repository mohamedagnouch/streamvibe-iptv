import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'IPTV Setup Guide — Install on Smart TV, Android & Firestick | StreamVibe',
    description: 'Step-by-step IPTV setup guide for Smart TV, Android, Amazon Firestick, iOS, and PC. Get your StreamVibe subscription running in under 5 minutes. Beginner-friendly instructions with screenshots.',
    keywords: 'iptv setup guide, how to install iptv, iptv for smart tv setup, iptv firestick install, iptv android setup, iptv beginners guide, streamvibe setup',
    alternates: {
        canonical: 'https://streamvibe.shop/instructions',
    },
    openGraph: {
        title: 'IPTV Setup Guide — Smart TV, Android & Firestick | StreamVibe',
        description: 'Get IPTV running on Smart TV, Android, Firestick, and iOS in minutes. Complete setup guide with step-by-step instructions.',
        url: 'https://streamvibe.shop/instructions',
        type: 'website',
    },
};

export default function InstructionsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
