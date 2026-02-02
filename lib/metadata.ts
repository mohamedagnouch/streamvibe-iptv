import { Metadata } from 'next';

export interface SEOMetadata {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    canonical?: string;
    noindex?: boolean;
}

const SITE_NAME = 'StreamVibe';
const SITE_URL = 'https://streamvibe.com';
const DEFAULT_OG_IMAGE = '/og-image.jpg';

/**
 * Generate comprehensive metadata for a page
 * Includes Open Graph, Twitter Cards, and canonical URLs
 */
export function generatePageMetadata({
    title,
    description,
    keywords,
    ogImage = DEFAULT_OG_IMAGE,
    canonical,
    noindex = false,
}: SEOMetadata): Metadata {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonicalUrl = canonical || SITE_URL;
    const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

    return {
        title: fullTitle,
        description,
        keywords,
        robots: noindex ? 'noindex, nofollow' : 'index, follow',

        // Canonical URL
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'en': `${canonicalUrl}?lang=en`,
                'de': `${canonicalUrl}?lang=de`,
                'x-default': canonicalUrl,
            },
        },

        // Open Graph
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: canonicalUrl,
            siteName: SITE_NAME,
            title: fullTitle,
            description,
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },

        // Twitter Cards
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [ogImageUrl],
            creator: '@StreamVibe',
        },

        // Additional meta tags
        other: {
            'og:phone_number': '+1-562-638-0287',
            'og:email': 'infos@streamvibe.shop',
        },
    };
}

/**
 * Generate metadata for blog posts
 */
export function generateBlogMetadata({
    title,
    description,
    author = 'StreamVibe Team',
    publishedTime,
    modifiedTime,
    tags = [],
    ogImage = DEFAULT_OG_IMAGE,
    slug,
}: {
    title: string;
    description: string;
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    tags?: string[];
    ogImage?: string;
    slug: string;
}): Metadata {
    const fullTitle = `${title} | ${SITE_NAME} Blog`;
    const canonicalUrl = `${SITE_URL}/blog/${slug}`;
    const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

    return {
        title: fullTitle,
        description,
        keywords: tags.join(', '),

        alternates: {
            canonical: canonicalUrl,
        },

        openGraph: {
            type: 'article',
            locale: 'en_US',
            url: canonicalUrl,
            siteName: SITE_NAME,
            title: fullTitle,
            description,
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            publishedTime,
            modifiedTime,
            authors: [author],
            tags,
        },

        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [ogImageUrl],
            creator: '@StreamVibe',
        },
    };
}

/**
 * Get the base URL for the site
 */
export function getBaseUrl(): string {
    return SITE_URL;
}

/**
 * Generate structured breadcrumb data
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.url}`,
        })),
    };
}
