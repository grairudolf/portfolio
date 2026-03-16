"use client";

import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Communities", href: "/#communities" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact", highlight: true }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "neo-interactive font-bold uppercase tracking-[2px] text-[0.65rem] text-gray-200 hover:text-[#8ec0de]";

  return (
    <header className="material-dark fixed left-0 top-0 z-[45] w-full px-4 pt-4">
      <nav className="neo-border neo-shadow-md mx-auto flex w-full max-w-page items-center justify-between bg-charcoal px-4 py-3 md:px-6">
        <Link href="/" className="neo-interactive inline-flex items-center">
          <Image src="/logo.png" alt="Grai Rudolf logo" width={130} height={42} className="h-10 w-auto" />
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                linkClass,
                link.highlight &&
                  "neo-border rounded-sm bg-steel px-3 py-2 text-white shadow-[inset_0_0_0_1px_#ffffff] hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="neo-interactive neo-border flex h-11 w-11 items-center justify-center bg-steel text-white md:hidden"
        >
          {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </nav>

      {open && (
        <div className="neo-border neo-shadow-md mx-auto mt-2 flex w-full max-w-page flex-col bg-charcoal p-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "neo-interactive px-2 py-3 text-sm uppercase tracking-[2px] text-gray-100",
                link.highlight && "neo-border mt-2 rounded-sm bg-steel text-center text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
