'use client';

import Script from 'next/script';

interface ArticleSchemaProps {
    title: string;
    description: string;
    author?: string;
    publishedTime: string;
    modifiedTime?: string;
    image?: string;
    url: string;
    tags?: string[];
}

export default function ArticleSchema({
    title,
    description,
    author = 'StreamVibe Team',
    publishedTime,
    modifiedTime,
    image = 'https://streamvibe.com/og-blog.jpg',
    url,
    tags = [],
}: ArticleSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image,
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        author: {
            '@type': 'Person',
            name: author,
        },
        publisher: {
            '@type': 'Organization',
            name: 'StreamVibe',
            logo: {
                '@type': 'ImageObject',
                url: 'https://streamvibe.com/logo.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://streamvibe.com${url}`,
        },
        keywords: tags.join(', '),
    };

    return (
        <Script
            id="article-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
