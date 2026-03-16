"use client";

import { motion } from "framer-motion";
import { communityEntries } from "@/data/portfolio";

export default function CommunitiesSection() {
  return (
    <section id="communities" className="relative z-20 bg-white px-4 py-20">
      <div className="mx-auto w-full max-w-page">
        <h2 className="section-title mb-10 text-4xl uppercase md:text-5xl">Communities &amp; Volunteering</h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {communityEntries.map((entry, idx) => {
            const Icon = entry.icon;
            return (
              <motion.article
                key={entry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: idx * 0.05, ease: "easeOut" }}
                className={`neo-border p-5 ${idx % 2 ? "clay-muted" : "clay-surface"}`}
              >
                <div className="neo-border mb-4 inline-flex h-11 w-11 items-center justify-center bg-offwhite text-steel">
                  <Icon size={22} weight="bold" />
                </div>
                <h3 className="section-title text-2xl text-charcoal">{entry.title}</h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-[1.7px] text-steel">{entry.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">{entry.description}</p>
                <span className="neo-border mt-4 inline-flex bg-offwhite px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[1.3px] text-gray-700">
                  {entry.period}
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
