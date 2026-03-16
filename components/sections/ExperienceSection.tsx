"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="diagonal-bg relative z-20 bg-offwhite px-4 py-20">
      <div className="mx-auto w-full max-w-page">
        <h2 className="section-title mb-10 text-4xl uppercase md:text-5xl">Experience</h2>

        <div className="relative pl-6 md:pl-10">
          <div className="absolute left-2 top-0 h-full w-px bg-steel/35 md:left-4" />
          <div className="space-y-6">
            {experiences.map((item, idx) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.05, ease: "easeOut" }}
                className="neo-border clay-surface relative p-5"
              >
                <span className="absolute -left-[1.15rem] top-6 h-4 w-4 border-2 border-charcoal bg-steel md:-left-[1.62rem]" />

                <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="section-title text-2xl text-charcoal">{item.company}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[1.7px] text-steel">{item.role}</p>
                  </div>
                  <span className="neo-border bg-midgrey px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[1.4px] text-gray-700">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-gray-700">{item.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="neo-border bg-offwhite px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[1.3px] text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
