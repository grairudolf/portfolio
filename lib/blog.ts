import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";
import type { BlogPost } from "@/data/portfolio";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

interface BlogFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  category: BlogPost["category"];
  tags: string[];
  readTime: string;
  mediumUrl?: string;
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatInline(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

function markdownToHtml(source: string) {
  const lines = source.split(/\r?\n/);
  const output: string[] = [];
  let paragraph: string[] = [];
  let inList = false;

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    const content = formatInline(escapeHtml(paragraph.join(" ").trim()));
    if (content) {
      output.push(`<p>${content}</p>`);
    }
    paragraph = [];
  };

  const closeList = () => {
    if (inList) {
      output.push("</ul>");
      inList = false;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      closeList();
      continue;
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.*)$/);
    if (headingMatch) {
      flushParagraph();
      closeList();
      const level = headingMatch[1].length;
      const headingText = formatInline(escapeHtml(headingMatch[2].trim()));
      output.push(`<h${level}>${headingText}</h${level}>`);
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      if (!inList) {
        output.push("<ul>");
        inList = true;
      }
      const itemText = formatInline(escapeHtml(line.slice(2).trim()));
      output.push(`<li>${itemText}</li>`);
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  closeList();

  return output.join("");
}

type BlogEntry = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
};

const getBlogEntries = cache(async (): Promise<BlogEntry[]> => {
  const entries = await fs.readdir(BLOG_DIR);
  const mdxFiles = entries.filter((entry) => entry.endsWith(".mdx"));

  return Promise.all(
    mdxFiles.map(async (fileName) => {
      const fullPath = path.join(BLOG_DIR, fileName);
      const source = await fs.readFile(fullPath, "utf8");
      const { data, content } = matter(source);
      const frontmatter = data as BlogFrontmatter;

      return {
        slug: fileName.replace(/\.mdx$/, ""),
        frontmatter,
        content
      };
    })
  );
});

const sortByDate = <T extends { date: string }>(posts: T[]) =>
  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

export const getAllBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const entries = await getBlogEntries();
  const posts = entries.map(({ slug, frontmatter, content }) => ({
    slug,
    ...frontmatter,
    contentHtml: markdownToHtml(content)
  }));

  return sortByDate(posts);
});

export const getBlogPostSummaries = cache(async (): Promise<BlogPost[]> => {
  const entries = await getBlogEntries();
  const posts = entries.map(({ slug, frontmatter }) => ({
    slug,
    ...frontmatter
  }));

  return sortByDate(posts);
});

export function getBlogCategories() {
  return ["All", "Tech", "AI/ML", "Projects", "Growth", "Life"] as const;
}
