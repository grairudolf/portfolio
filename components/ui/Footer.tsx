import Image from "next/image";
import Link from "next/link";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="material-dark relative z-20 border-t border-steel/70 bg-charcoal px-4 py-8 text-gray-100">
      <div className="mx-auto grid w-full max-w-page items-center gap-6 md:grid-cols-3">
        <div className="flex justify-center md:justify-start">
          <Image src="/logo.png" alt="Grai Rudolf logo" width={140} height={44} className="h-10 w-auto" />
        </div>
        <p className="text-center text-[0.66rem] uppercase tracking-[2px] text-gray-300">
          Copyright 2026 Grai Rudolf. All rights reserved.
        </p>
        <div className="flex justify-center md:justify-end">
          <Link
            href="https://drive.google.com/file/d/1mTekKfo1YcxbCS5sY6aUFWgul6ZjAmg4/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="neo-interactive neo-border neo-shadow-sm inline-flex items-center gap-2 bg-steel px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[2px] text-white"
          >
            View CV <ArrowSquareOut size={16} weight="bold" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
