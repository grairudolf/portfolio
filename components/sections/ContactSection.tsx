"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "@phosphor-icons/react";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { contactInfo } from "@/data/portfolio";

const contactRows = [
  {
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: SiGmail
  },
  {
    label: "GitHub",
    value: "grairudolf",
    href: contactInfo.github,
    icon: SiGithub
  },
  {
    label: "LinkedIn",
    value: "grairudolf",
    href: contactInfo.linkedin,
    icon: FaLinkedin
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="material-dark relative z-20 overflow-hidden bg-charcoal px-4 py-20 text-gray-100">
      <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-steel/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
      <div className="mx-auto w-full max-w-page">
        <div className="mb-8">
          <h2 className="section-title text-4xl uppercase text-white md:text-5xl">Contact</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-300">
            Open to serious collaborations, internships, and product-focused engineering work.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactRows.map((row) => {
                const Icon = row.icon;
                return (
                  <Link
                    key={row.label}
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                    className="neo-interactive neo-border clay-dark flex items-center gap-4 bg-gradient-to-br from-[#262640] via-[#22223a] to-[#1c1c31] p-5"
                  >
                    <div className="neo-border bg-steel/15 p-3">
                      <Icon className="text-lg text-steel" />
                    </div>
                    <div>
                      <p className="text-[0.62rem] font-bold uppercase tracking-[1.6px] text-gray-400">{row.label}</p>
                      <p className="text-sm font-semibold text-gray-100">{row.value}</p>
                    </div>
                  </Link>
                );
              })}

              <div className="neo-border clay-dark flex items-center gap-4 bg-gradient-to-br from-[#262640] via-[#22223a] to-[#1c1c31] p-5">
                <div className="neo-border bg-steel/15 p-3">
                  <MapPin size={18} weight="bold" className="text-steel" />
                </div>
                <div>
                  <p className="text-[0.62rem] font-bold uppercase tracking-[1.6px] text-gray-400">Location</p>
                  <p className="text-sm font-semibold text-gray-100">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="neo-border clay-dark flex flex-col gap-4 bg-gradient-to-br from-[#262640] via-[#22223a] to-[#1c1c31] p-5 sm:flex-row sm:items-center lg:flex-col lg:items-start">
              <div>
                <p className="text-[0.62rem] font-bold uppercase tracking-[1.6px] text-gray-400">Find me everywhere</p>
                <p className="mt-2 text-[0.65rem] uppercase tracking-[1.2px] text-gray-400">{contactInfo.linktreeLabel}</p>
              </div>
              <Image
                src={contactInfo.qrCodePath}
                alt="Linktree QR code"
                width={170}
                height={170}
                className="neo-border bg-white p-2"
              />
            </div>
          </aside>

          <form className="neo-border clay-dark bg-gradient-to-br from-[#262640] via-[#22223a] to-[#1c1c31] p-5 md:p-6">
            <div className="neo-border mb-4 inline-flex items-center gap-2 bg-white/10 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[1.6px] text-gray-200">
              Let&apos;s build something impactful
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-[0.67rem] font-bold uppercase tracking-[1.7px] text-gray-300">
                Name
                <input
                  type="text"
                  name="name"
                  className="mt-2 w-full border border-gray-400/60 bg-charcoal/70 px-3 py-3 text-sm text-offwhite outline-none transition-all duration-brutal ease-brutal focus:border-steel focus:shadow-brutalDark"
                />
              </label>
              <label className="block text-[0.67rem] font-bold uppercase tracking-[1.7px] text-gray-300">
                Email
                <input
                  type="email"
                  name="email"
                  className="mt-2 w-full border border-gray-400/60 bg-charcoal/70 px-3 py-3 text-sm text-offwhite outline-none transition-all duration-brutal ease-brutal focus:border-steel focus:shadow-brutalDark"
                />
              </label>
            </div>

            <label className="mt-4 block text-[0.67rem] font-bold uppercase tracking-[1.7px] text-gray-300">
              Subject
              <input
                type="text"
                name="subject"
                className="mt-2 w-full border border-gray-400/60 bg-charcoal/70 px-3 py-3 text-sm text-offwhite outline-none transition-all duration-brutal ease-brutal focus:border-steel focus:shadow-brutalDark"
              />
            </label>

            <label className="mt-4 block text-[0.67rem] font-bold uppercase tracking-[1.7px] text-gray-300">
              Message
              <textarea
                name="message"
                rows={8}
                className="mt-2 w-full resize-y border border-gray-400/60 bg-charcoal/70 px-3 py-3 text-sm text-offwhite outline-none transition-all duration-brutal ease-brutal focus:border-steel focus:shadow-brutalDark"
              />
            </label>

            <button
              type="submit"
              className="neo-interactive neo-border neo-shadow-dark mt-5 w-full bg-steel px-5 py-3 text-xs font-bold uppercase tracking-[1.8px] text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
