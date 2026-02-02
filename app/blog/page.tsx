'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllPosts } from '../../lib/blog';
import { Calendar, Clock, Tag, ArrowRight, Search, TrendingUp } from 'lucide-react';

export default function BlogPage() {
    const posts = getAllPosts();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const featuredPost = posts[0];
    const regularPosts = posts.slice(1);

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#1a1f35] to-[#0a0e1a]">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-full px-6 py-2.5 mb-6">
                            <TrendingUp className="w-4 h-4 text-orange-500" />
                            <span className="text-orange-400 text-sm font-semibold">IPTV Knowledge Base</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                            <span className="text-white">StreamVibe </span>
                            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">Blog</span>
                        </h1>

                        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                            Expert guides, tutorials, and industry insights to help you get the most out of your IPTV experience
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="py-8 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <Link href={`/blog/${featuredPost.slug}`}>
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all group">
                                <div className="p-8 md:p-12">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            FEATURED
                                        </span>
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {featuredPost.readingTime} min read
                                            </span>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                                        {featuredPost.title}
                                    </h2>

                                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                        {featuredPost.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {featuredPost.tags.map((tag, index) => (
                                            <span key={index} className="flex items-center gap-1 text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full">
                                                <Tag className="w-3 h-3" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="inline-flex items-center gap-2 text-orange-400 font-semibold group-hover:gap-3 transition-all">
                                        Read Article
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* Regular Posts Grid */}
            <section className="py-12 px-6">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-orange-500/30 transition-all group h-full flex flex-col">
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readingTime} min
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                                            {post.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.slice(0, 2).map((tag, index) => (
                                                <span key={index} className="text-xs bg-white/5 text-gray-500 px-2 py-1 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold">
                                            Read More
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-400 text-lg">No articles found matching your search.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
