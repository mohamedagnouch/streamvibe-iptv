'use client';

import Script from 'next/script';

interface PricingPlan {
    name: string;
    price: string;
    duration: string;
    features: string[];
}

interface ProductSchemaProps {
    plans?: PricingPlan[];
}

export default function ProductSchema({ plans }: ProductSchemaProps) {
    const defaultPlans = [
        {
            name: '1 Month Plan',
            price: '18.00',
            duration: 'P1M',
            features: ['96,000+ VOD', 'Live Channels', '4K Quality', '24/7 Support'],
        },
        {
            name: '3 Months Plan',
            price: '38.00',
            duration: 'P3M',
            features: ['96,000+ VOD', 'Live Channels', '4K Quality', '24/7 Support', 'Best Value'],
        },
        {
            name: '6 Months Plan',
            price: '58.00',
            duration: 'P6M',
            features: ['96,000+ VOD', 'Live Channels', '4K Quality', '24/7 Support', 'Popular'],
        },
        {
            name: '12 Months Plan',
            price: '108.00',
            duration: 'P12M',
            features: ['96,000+ VOD', 'Live Channels', '4K Quality', '24/7 Support', 'Maximum Savings'],
        },
    ];

    const pricingPlans = plans || defaultPlans;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'StreamVibe Premium IPTV Subscription',
        description: 'Premium IPTV streaming service with 96,000+ VOD titles, live TV channels, and 4K quality streaming',
        brand: {
            '@type': 'Brand',
            name: 'StreamVibe',
        },
        image: 'https://streamvibe.com/og-image.jpg',

        offers: pricingPlans.map((plan) => ({
            '@type': 'Offer',
            name: plan.name,
            price: plan.price,
            priceCurrency: 'USD',
            priceValidUntil: '2026-12-31',
            availability: 'https://schema.org/InStock',
            url: 'https://streamvibe.com/#pricing',
            seller: {
                '@type': 'Organization',
                name: 'StreamVibe',
            },
            validFrom: new Date().toISOString().split('T')[0],
            itemOffered: {
                '@type': 'Service',
                name: `StreamVibe ${plan.name}`,
                description: plan.features.join(', '),
            },
        })),

        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '2847',
            bestRating: '5',
            worstRating: '1',
        },

        review: [
            {
                '@type': 'Review',
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5',
                },
                author: {
                    '@type': 'Person',
                    name: 'John Smith',
                },
                reviewBody: 'Excellent IPTV service with great channel selection and reliable streaming quality.',
                datePublished: '2026-01-15',
            },
            {
                '@type': 'Review',
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5',
                },
                author: {
                    '@type': 'Person',
                    name: 'Maria Garcia',
                },
                reviewBody: 'Best IPTV provider I have used. Customer support is responsive and helpful.',
                datePublished: '2026-01-20',
            },
        ],
    };

    return (
        <Script
            id="product-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
