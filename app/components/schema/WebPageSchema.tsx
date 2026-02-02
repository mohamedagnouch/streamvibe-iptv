'use client';

import Script from 'next/script';

interface WebPageSchemaProps {
    name: string;
    description: string;
    url: string;
    breadcrumbs?: { name: string; url: string }[];
}

export default function WebPageSchema({
    name,
    description,
    url,
    breadcrumbs,
}: WebPageSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name,
        description,
        url: `https://streamvibe.com${url}`,
        inLanguage: 'en-US',
        isPartOf: {
            '@type': 'WebSite',
            name: 'StreamVibe',
            url: 'https://streamvibe.com',
        },
        publisher: {
            '@type': 'Organization',
            name: 'StreamVibe',
            logo: {
                '@type': 'ImageObject',
                url: 'https://streamvibe.com/logo.png',
            },
        },
        ...(breadcrumbs && {
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: breadcrumbs.map((item, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    name: item.name,
                    item: `https://streamvibe.com${item.url}`,
                })),
            },
        }),
    };

    return (
        <Script
            id="webpage-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
