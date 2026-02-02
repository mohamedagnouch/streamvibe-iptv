'use client';

import Script from 'next/script';

export default function OrganizationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'StreamVibe',
        url: 'https://streamvibe.com',
        logo: 'https://streamvibe.com/logo.png',
        description: 'Premium IPTV streaming platform with 96,000+ VOD titles and live channels in 4K quality',
        foundingDate: '2024',

        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '+1-562-638-0287',
                contactType: 'Customer Service',
                availableLanguage: ['English', 'German'],
                areaServed: 'Worldwide',
                contactOption: 'TollFree',
                hoursAvailable: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: [
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                        'Sunday',
                    ],
                    opens: '00:00',
                    closes: '23:59',
                },
            },
        ],

        sameAs: [
            'https://wa.me/15626380287',
        ],

        address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
        },

        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '2847',
            bestRating: '5',
            worstRating: '1',
        },

        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'USD',
            lowPrice: '18.00',
            highPrice: '108.00',
            offerCount: '4',
        },
    };

    return (
        <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
