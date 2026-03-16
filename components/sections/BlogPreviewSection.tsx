import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { getBlogPostSummaries } from "@/lib/blog";

export default async function BlogPreviewSection() {
  const posts = await getBlogPostSummaries();
  const preview = posts.slice(0, 3);

  return (
    <section id="blog" className="relative z-20 bg-gray-100 px-4 py-20">
      <div className="mx-auto w-full max-w-page">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="section-title text-4xl uppercase md:text-5xl">Blog</h2>
          <Link
            href="/blog"
            prefetch
            className="neo-interactive neo-border neo-shadow-sm inline-flex items-center gap-2 bg-steel px-4 py-3 text-xs font-bold uppercase tracking-[2px] text-white"
          >
            Visit Blog <ArrowRight size={16} weight="bold" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {preview.map((post, idx) => (
            <Link
              key={post.slug}
              href={`/blog?post=${post.slug}`}
              className={`neo-border block p-5 ${idx === 1 ? "clay-muted" : "clay-surface"} transition-transform duration-brutal ease-brutal hover:-translate-x-[3px] hover:-translate-y-[3px]`}
            >
              <p className="text-[0.62rem] font-bold uppercase tracking-[2px] text-steel">{post.category}</p>
              <h3 className="section-title mt-2 text-2xl">{post.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-800">{post.excerpt}</p>
              <p className="mt-4 text-[0.65rem] font-bold uppercase tracking-[1.6px] text-gray-600">
                {post.date} | {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
