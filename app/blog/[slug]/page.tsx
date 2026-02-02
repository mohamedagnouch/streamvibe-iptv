'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ArticleSchema from '../../components/schema/ArticleSchema';
import { Calendar, Clock, Tag, ArrowLeft, Share2, ArrowRight } from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '../../../lib/blog';

interface PageProps {
    params: { slug: string };
}

export default function BlogPostPage({ params }: PageProps) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(params.slug);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.title,
                    text: post.description,
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#1a1f35] to-[#0a0e1a]">
            <ArticleSchema
                title={post.title}
                description={post.description}
                author={post.author}
                publishedTime={post.publishedAt}
                modifiedTime={post.updatedAt}
                url={`/blog/${post.slug}`}
                tags={post.tags}
            />

            <Header />

            {/* Article Header */}
            <article className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-4xl">
                    {/* Back Button */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readingTime} min read
                        </span>
                        <span className="text-gray-500">•</span>
                        <span>{post.author}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        {post.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {post.tags.map((tag, index) => (
                            <span key={index} className="flex items-center gap-1 text-sm bg-white/5 text-gray-400 px-3 py-1 rounded-full border border-white/10">
                                <Tag className="w-3 h-3" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Share Button */}
                    <button
                        onClick={handleShare}
                        className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-xl transition-all mb-12"
                    >
                        <Share2 className="w-4 h-4" />
                        Share Article
                    </button>

                    {/* Article Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <div
                            className="text-gray-300 leading-relaxed space-y-6"
                            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
                        />
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-3xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to Experience Premium IPTV?
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Join thousands of satisfied customers streaming with StreamVibe
                        </p>
                        <Link
                            href="/#pricing"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
                        >
                            View Pricing Plans
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 px-6 border-t border-white/10">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((relatedPost) => (
                                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-500/30 transition-all group h-full">
                                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(relatedPost.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                        </div>

                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                                            {relatedPost.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                                            {relatedPost.description}
                                        </p>

                                        <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold">
                                            Read More
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </main>
    );
}
