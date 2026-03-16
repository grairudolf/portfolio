"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowSquareOut, ImageSquare } from "@phosphor-icons/react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  const orderedProjects = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <section id="projects" className="material-dark relative z-20 bg-charcoal px-4 py-20 text-gray-100">
      <div className="mx-auto w-full max-w-page">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <h2 className="section-title text-4xl uppercase md:text-5xl">Projects</h2>
          <Link
            href="/projects"
            prefetch
            className="neo-interactive neo-border clay-dark inline-flex items-center gap-2 bg-steel px-4 py-3 text-xs font-bold uppercase tracking-[2px] text-white"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {orderedProjects.map((project) => (
            <article key={project.title} className="neo-border clay-dark flex h-full flex-col overflow-hidden bg-[#222236]">
              <div className="relative h-48 w-full border-b border-charcoal/40 bg-[#2c2c42]">
                {project.imagePath ? (
                  <Image src={project.imagePath} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <ImageSquare size={36} className="text-white/70" weight="bold" />
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-[0.65rem] font-bold uppercase tracking-[1.6px] text-gray-400">{project.date}</p>
                <h3 className="section-title mt-2 text-2xl text-white">{project.title}</h3>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-gray-300">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="neo-border bg-white/10 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[1.3px] text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`neo-interactive neo-border neo-shadow-dark inline-flex items-center justify-center gap-2 bg-steel px-3 py-2.5 text-xs font-bold uppercase tracking-[1.6px] text-white ${
                      !project.liveUrl ? "sm:col-span-2" : ""
                    }`}
                  >
                    <SiGithub className="text-sm" /> GitHub
                  </Link>

                  {project.liveUrl ? (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="neo-interactive neo-border neo-shadow-dark inline-flex items-center justify-center gap-2 bg-charcoal px-3 py-2.5 text-xs font-bold uppercase tracking-[1.6px] text-white"
                    >
                      <ArrowSquareOut size={14} weight="bold" /> Live
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
