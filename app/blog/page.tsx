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
            <BlogClient posts={posts} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
