"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Search, Tag, User, Heart, MessageCircle, Bookmark, Share2 } from "lucide-react";
import { useState } from "react";

// Sample blog data
const featuredPost = {
  title: "The Future of Web Development: What to Expect in 2025",
  excerpt: "Explore the latest trends and technologies shaping the future of web development, from AI-powered tools to new frameworks.",
  author: "Alex Chen",
  date: "Jan 8, 2025",
  readTime: "8 min read",
  category: "Technology",
  image: null,
};

const posts = [
  {
    id: 1,
    title: "Building Beautiful UIs with Glassmorphism",
    excerpt: "Learn how to create stunning glass-effect interfaces that captivate users.",
    author: "Sarah Johnson",
    date: "Jan 7, 2025",
    readTime: "5 min read",
    category: "Design",
  },
  {
    id: 2,
    title: "React Server Components: A Deep Dive",
    excerpt: "Understanding the power of RSC and how to use them effectively.",
    author: "Mike Rivera",
    date: "Jan 6, 2025",
    readTime: "12 min read",
    category: "React",
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS v4",
    excerpt: "Everything you need to know about the latest Tailwind CSS release.",
    author: "Emma Wilson",
    date: "Jan 5, 2025",
    readTime: "7 min read",
    category: "CSS",
  },
  {
    id: 4,
    title: "The Art of Micro-animations",
    excerpt: "How subtle animations can dramatically improve user experience.",
    author: "James Lee",
    date: "Jan 4, 2025",
    readTime: "6 min read",
    category: "Animation",
  },
  {
    id: 5,
    title: "TypeScript Best Practices 2025",
    excerpt: "Write cleaner, safer TypeScript code with these proven patterns.",
    author: "Lisa Park",
    date: "Jan 3, 2025",
    readTime: "10 min read",
    category: "TypeScript",
  },
  {
    id: 6,
    title: "Next.js 15 Performance Tips",
    excerpt: "Optimize your Next.js applications for maximum performance.",
    author: "David Kim",
    date: "Jan 2, 2025",
    readTime: "9 min read",
    category: "Next.js",
  },
];

const categories = ["All", "Technology", "Design", "React", "CSS", "Animation", "TypeScript", "Next.js"];

export default function BlogTemplatePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white selection:bg-purple-500/30 font-sans overflow-hidden">
      
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-indigo-600/5 blur-[150px]" />
      </div>

      {/* Header / Navbar */}
      <header className="relative z-10 border-b border-white/5 backdrop-blur-md bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight">BlogUI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <Link href="#" className="hover:text-white transition-colors">Home</Link>
            <Link href="#" className="hover:text-white transition-colors">Categories</Link>
            <Link href="#" className="hover:text-white transition-colors">About</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 w-48 pl-10 pr-4 rounded-full bg-white/5 border border-white/10 text-sm focus:outline-none focus:bg-white/10 focus:border-purple-500/50 transition-all placeholder:text-white/30"
              />
            </div>
            <button className="h-10 px-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-semibold hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        
        {/* Featured Post */}
        <section className="mb-16">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl group cursor-pointer hover:border-purple-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-10 md:p-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium border border-purple-500/20">
                  Featured
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs font-medium">
                  {featuredPost.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {featuredPost.title}
              </h1>

              <p className="text-lg text-white/60 mb-8 max-w-2xl leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-6 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-400" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors group/btn">
                Read Article
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="mb-10">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Posts Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group relative rounded-[2rem] overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-md p-6 hover:bg-white/[0.06] hover:border-purple-500/20 transition-all duration-300 cursor-pointer"
            >
              {/* Post Image Placeholder */}
              <div className="h-40 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] mb-5 flex items-center justify-center overflow-hidden">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center">
                  <Tag className="h-8 w-8 text-white/40" />
                </div>
              </div>

              <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs font-medium mb-3 border border-white/10">
                {post.category}
              </span>

              <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-purple-300 transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-white/50 mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-xs text-white/40">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-gray-600 to-gray-700" />
                  <span>{post.author}</span>
                </div>
                <span>{post.readTime}</span>
              </div>

              {/* Hover Actions */}
              <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Bookmark className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 font-medium hover:bg-white/10 hover:text-white transition-all">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Section */}
        <section className="mt-24 relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-purple-600/20 via-indigo-600/10 to-blue-600/20 border border-white/10 p-12 text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-5" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Subscribe to our newsletter and never miss the latest articles and tutorials.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 px-5 rounded-full bg-white/10 border border-white/10 text-sm focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-white/40"
            />
            <button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center text-white/40 text-sm">
          <p>© 2025 BlogUI Template. Built with Auralix UI.</p>
        </div>
      </footer>
    </div>
  );
}
