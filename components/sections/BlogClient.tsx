"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { SiMedium } from "react-icons/si";
import type { BlogPost } from "@/data/portfolio";

const categories = ["All", "Tech", "AI/ML", "Projects", "Growth", "Life"] as const;
const PAGE_SIZE = 9;

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [page, setPage] = useState(1);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const filtered = useMemo(() => {
    return activeCategory === "All" ? posts : posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pagePosts = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const hero = pagePosts[0];
  const remaining = pagePosts.slice(1);

  useEffect(() => {
    const slug = searchParams.get("post");
    if (!slug) {
      setActivePost(null);
      return;
    }
    const match = posts.find((post) => post.slug === slug) ?? null;
    setActivePost(match);
  }, [posts, searchParams]);

  const openPost = (post: BlogPost) => {
    setActivePost(post);
    router.replace(`/blog?post=${post.slug}`, { scroll: false });
  };

  const closePost = () => {
    setActivePost(null);
    router.replace("/blog", { scroll: false });
  };

  return (
    <div className="space-y-8">
      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setActiveCategory(category);
              setPage(1);
            }}
            className={`neo-interactive neo-border neo-shadow-sm whitespace-nowrap px-4 py-2 text-xs font-bold uppercase tracking-[2px] ${
              activeCategory === category ? "bg-steel text-white" : "bg-white text-charcoal"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory}-${page}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-6"
        >
          {hero ? (
            <article
              role="button"
              tabIndex={0}
              onClick={() => openPost(hero)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openPost(hero);
                }
              }}
              className="neo-border clay-surface cursor-pointer overflow-hidden transition-transform duration-brutal ease-brutal hover:-translate-x-[3px] hover:-translate-y-[3px]"
            >
              <div className="h-3 bg-steel" />
              <div className="p-6">
                <p className="text-[0.64rem] font-bold uppercase tracking-[2px] text-steel">{hero.category}</p>
                <h2 className="section-title mt-2 text-3xl md:text-4xl">{hero.title}</h2>
                <p className="mt-3 max-w-4xl text-sm leading-relaxed text-gray-800">{hero.excerpt}</p>
                <p className="mt-4 text-[0.65rem] font-bold uppercase tracking-[1.6px] text-gray-600">
                  {hero.date} | {hero.readTime}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {hero.tags.map((tag) => (
                    <span key={tag} className="neo-border bg-midgrey px-2 py-1 text-[0.62rem] font-bold uppercase tracking-[1.4px]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5">
                  {hero.mediumUrl ? (
                    <Link
                      href={hero.mediumUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="neo-interactive neo-border neo-shadow-sm inline-flex items-center gap-2 bg-charcoal px-4 py-3 text-xs font-bold uppercase tracking-[2px] text-white"
                    >
                      <SiMedium /> Read on Medium
                    </Link>
                  ) : (
                    <span
                      title="Medium link not added yet"
                      className="neo-border inline-flex items-center gap-2 bg-midgrey px-4 py-3 text-xs font-bold uppercase tracking-[2px] text-gray-600"
                    >
                      <SiMedium /> Coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ) : null}

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {remaining.map((post) => (
              <article
                key={post.slug}
                role="button"
                tabIndex={0}
                onClick={() => openPost(post)}
                onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openPost(post);
                }
              }}
                className="neo-border clay-surface cursor-pointer overflow-hidden transition-transform duration-brutal ease-brutal hover:-translate-x-[3px] hover:-translate-y-[3px]"
              >
                <div className="h-3 bg-steel" />
                <div className="p-5">
                  <p className="text-[0.63rem] font-bold uppercase tracking-[2px] text-steel">{post.category}</p>
                  <h3 className="section-title mt-2 text-2xl">{post.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-800">{post.excerpt}</p>
                  <p className="mt-4 text-[0.64rem] font-bold uppercase tracking-[1.5px] text-gray-600">
                    {post.readTime}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="neo-border bg-midgrey px-2 py-1 text-[0.6rem] font-bold uppercase tracking-[1.4px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    {post.mediumUrl ? (
                      <Link
                        href={post.mediumUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="neo-interactive neo-border neo-shadow-sm inline-flex items-center gap-2 bg-charcoal px-4 py-2 text-[0.64rem] font-bold uppercase tracking-[1.8px] text-white"
                      >
                        <SiMedium /> Read on Medium
                      </Link>
                    ) : (
                      <span
                        title="Medium link not added yet"
                        className="neo-border inline-flex items-center gap-2 bg-midgrey px-4 py-2 text-[0.64rem] font-bold uppercase tracking-[1.8px] text-gray-600"
                      >
                        <SiMedium /> Coming soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {activePost ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePost}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4 py-8"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="neo-border clay-surface w-full max-w-3xl"
            >
              <div className="flex items-center justify-between border-b-2 border-charcoal px-6 py-4">
                <div>
                  <p className="text-[0.64rem] font-bold uppercase tracking-[2px] text-steel">{activePost.category}</p>
                  <h2 className="section-title mt-1 text-2xl md:text-3xl">{activePost.title}</h2>
                </div>
                <button
                  type="button"
                  onClick={closePost}
                  className="neo-interactive neo-border bg-offwhite px-3 py-2 text-xs font-bold uppercase tracking-[2px] text-charcoal"
                >
                  Close
                </button>
              </div>
              <div className="max-h-[70vh] overflow-y-auto px-6 py-5">
                <div
                  className="space-y-4 text-sm leading-relaxed text-gray-800"
                  dangerouslySetInnerHTML={{ __html: activePost.contentHtml ?? "" }}
                />
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {activePost.mediumUrl ? (
                    <Link
                      href={activePost.mediumUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="neo-interactive neo-border neo-shadow-sm inline-flex items-center gap-2 bg-charcoal px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-white"
                    >
                      <SiMedium /> Read on Medium
                    </Link>
                  ) : (
                    <span className="neo-border inline-flex items-center gap-2 bg-midgrey px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-gray-600">
                      <SiMedium /> Coming soon
                    </span>
                  )}
                  <span className="text-[0.62rem] font-bold uppercase tracking-[1.6px] text-gray-600">
                    {activePost.date} | {activePost.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          className="neo-interactive neo-border neo-shadow-sm bg-white px-4 py-2 text-xs font-bold uppercase tracking-[2px] disabled:opacity-50"
        >
          Prev
        </button>
        <p className="text-[0.65rem] font-bold uppercase tracking-[1.8px]">
          Page {page} of {totalPages}
        </p>
        <button
          type="button"
          disabled={page >= totalPages}
          onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
          className="neo-interactive neo-border neo-shadow-sm bg-white px-4 py-2 text-xs font-bold uppercase tracking-[2px] disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
