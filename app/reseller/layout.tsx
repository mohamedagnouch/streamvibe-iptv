import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'IPTV Reseller Program — Start Your Streaming Business | StreamVibe',
    description: "Join StreamVibe's IPTV reseller program. Get wholesale pricing, a full management panel, and competitive profit margins. Start your own IPTV business today with instant setup and 24/7 support.",
    keywords: 'iptv reseller program, iptv wholesale, iptv reseller panel, iptv business opportunity, streaming reseller, iptv credits wholesale',
    alternates: {
        canonical: 'https://streamvibe.shop/reseller',
    },
    openGraph: {
        title: 'IPTV Reseller Program — Start Your Streaming Business | StreamVibe',
        description: 'Launch your own IPTV business with StreamVibe. Wholesale pricing, full management panel, and 24/7 reseller support.',
        url: 'https://streamvibe.shop/reseller',
        type: 'website',
    },
};

export default function ResellerLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
