import { Suspense } from "react";
import type { Metadata } from "next";
import BlogClient from "@/components/sections/BlogClient";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Grai Rudolf",
  description: "Thoughts on software, AI/ML projects, growth, and life."
};

export const revalidate = 300;

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="relative">
      <Navbar />
      <main className="relative z-20 min-h-screen bg-gray-100 px-4 pb-20 pt-32">
        <div className="mx-auto w-full max-w-page">
          <h1 className="section-title text-4xl uppercase md:text-6xl">Blog</h1>
          <p className="mt-3 max-w-2xl text-sm text-gray-700">
            Writing about engineering execution, practical AI, project lessons, and personal growth.
          </p>
          <div className="mt-8">
            <Suspense fallback={<BlogLoadingState />}>
              <BlogClient posts={posts} />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function BlogLoadingState() {
  return (
    <div className="space-y-6">
      <div className="flex gap-3 overflow-x-auto pb-2">
        {["Loading", "Posts", "Please wait"].map((label) => (
          <div
            key={label}
            className="neo-border neo-shadow-sm whitespace-nowrap bg-white px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-charcoal/60"
          >
            {label}
          </div>
        ))}
      </div>
      <div className="neo-border clay-surface overflow-hidden">
        <div className="h-3 bg-steel" />
        <div className="space-y-4 p-6">
          <div className="h-4 w-24 animate-pulse bg-midgrey" />
          <div className="h-10 w-2/3 animate-pulse bg-midgrey" />
          <div className="h-4 w-full animate-pulse bg-midgrey" />
          <div className="h-4 w-5/6 animate-pulse bg-midgrey" />
        </div>
      </div>
    </div>
  );
}
