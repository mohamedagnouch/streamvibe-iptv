import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'IPTV Blog — Setup Guides, App Reviews & Streaming Tips | StreamVibe',
    description: 'Expert IPTV guides and tutorials: how to install IPTV on Smart TV, best apps for Android and Firestick, affordable subscription guides, and beginner tutorials. Updated regularly.',
    keywords: 'iptv blog, iptv setup guides, iptv tutorials, how to install iptv, iptv for smart tv guide, best iptv apps android, iptv for beginners, iptv tips',
    alternates: {
        canonical: 'https://streamvibe.shop/blog',
    },
    openGraph: {
        title: 'IPTV Blog — Guides, Reviews & Tutorials | StreamVibe',
        description: 'Learn how to get the most from your IPTV subscription. Expert guides covering every device, beginner tutorials, and app reviews.',
        url: 'https://streamvibe.shop/blog',
        type: 'website',
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
