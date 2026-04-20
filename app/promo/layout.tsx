import { Metadata } from 'next';
import { generatePageMetadata } from '../../lib/metadata';

export const metadata: Metadata = generatePageMetadata({
    title: 'Cloud Media Server | Enterprise Quality Infrastructure',
    description: 'Deploy your own high-performance cloud media server in seconds. Enjoy global CDN delivery and blazing fast streaming capabilities.',
    keywords: 'cloud server, media server, streaming infrastructure, global cdn',
    canonical: 'https://streamvibe.com/promo',
});

export default function PromoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
