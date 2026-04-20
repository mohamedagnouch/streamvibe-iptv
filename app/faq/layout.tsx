import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'IPTV FAQ — Common Questions Answered | StreamVibe',
    description: 'Answers to the most common IPTV questions: setup, billing, compatible devices, content library, and troubleshooting. Everything you need to know about your StreamVibe subscription.',
    keywords: 'iptv faq, iptv questions, how does iptv work, iptv troubleshooting, iptv help, streamvibe support, iptv setup help',
    alternates: {
        canonical: 'https://streamvibe.shop/faq',
    },
    openGraph: {
        title: 'IPTV FAQ — Common Questions Answered | StreamVibe',
        description: 'Setup, billing, devices, troubleshooting — all your IPTV questions answered in one place.',
        url: 'https://streamvibe.shop/faq',
        type: 'website',
    },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
