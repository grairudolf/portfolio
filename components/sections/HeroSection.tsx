"use client";

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, MapPin } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { contactInfo, educationInfo, heroHighlights } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section id="hero" className="relative z-20 px-4 pb-20 pt-32 md:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10 hero-texture" />
      <div className="pointer-events-none absolute inset-0 -z-10 crosshatch-bg opacity-60" />
      <div className="mx-auto grid w-full max-w-page items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="neo-border clay-surface mb-6 inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-[1.8px] text-charcoal">
            <MapPin size={16} weight="bold" />
            {contactInfo.location}
          </div>

          <h1 className="section-title text-[clamp(2.6rem,8vw,5rem)] leading-[0.92] text-charcoal">
            Grai Rudolf
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-700 md:text-base">
            Software engineer and AI/ML builder focused on practical products, robust engineering, and measurable
            outcomes.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div key={item.label} className="neo-border clay-surface p-4">
                <p className="text-[0.65rem] font-bold uppercase tracking-[1.6px] text-gray-600">{item.label}</p>
                <p className="mt-2 text-sm font-semibold text-charcoal">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#projects"
              className="neo-interactive neo-border neo-shadow-sm bg-charcoal px-5 py-3 text-xs font-bold uppercase tracking-[1.8px] text-white"
            >
              View Projects
            </Link>
            <Link
              href="/#contact"
              className="neo-interactive neo-border neo-shadow-sm bg-offwhite px-5 py-3 text-xs font-bold uppercase tracking-[1.8px] text-charcoal"
            >
              Contact
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="neo-border clay-surface p-4"
        >
          <Image
            src="/hero.png"
            alt="Grai Rudolf"
            width={620}
            height={720}
            className="h-[360px] w-full border border-charcoal/30 object-cover md:h-[500px]"
          />

          <div className="neo-border clay-muted mt-4 p-4">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[1.8px] text-steel">
              <GraduationCap size={16} weight="bold" />
              Education
            </div>
            <p className="text-base font-semibold text-charcoal">{educationInfo.institution}</p>
            <p className="mt-1 text-sm text-gray-700">{educationInfo.program}</p>
            <p className="mt-1 text-sm text-gray-700">
              {educationInfo.status} | Expected Graduation: {educationInfo.expectedGraduation}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
