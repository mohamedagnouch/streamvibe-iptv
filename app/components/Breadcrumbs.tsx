'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    name: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    // Add home as first item
    const allItems = [{ name: 'Home', href: '/' }, ...items];

    // Generate BreadcrumbList schema
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: allItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `https://streamvibe.com${item.href}`,
        })),
    };

    return (
        <>
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Visual Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center gap-2 text-sm">
                    {allItems.map((item, index) => {
                        const isLast = index === allItems.length - 1;
                        const isFirst = index === 0;

                        return (
                            <li key={item.href} className="flex items-center gap-2">
                                {!isFirst && (
                                    <ChevronRight className="w-4 h-4 text-gray-500" />
                                )}

                                {isLast ? (
                                    <span className="text-orange-400 font-medium flex items-center gap-1">
                                        {isFirst && <Home className="w-4 h-4" />}
                                        {item.name}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                                    >
                                        {isFirst && <Home className="w-4 h-4" />}
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}
