"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-white">
      <Link href="/" className="text-xl md:text-2xl font-bold uppercase tracking-widest font-mono hover:text-accent transition-colors">
        AI.
      </Link>
      <nav className="hidden md:flex gap-10 text-xs md:text-sm uppercase tracking-widest font-mono">
        <Link href="#experience" className="hover:text-accent transition-colors">01/ Experience</Link>
        <Link href="#projects" className="hover:text-accent transition-colors">02/ Projects</Link>
        <Link href="#contact" className="hover:text-accent transition-colors">03/ Contact</Link>
      </nav>
      <button className="md:hidden text-sm uppercase tracking-widest font-mono">Menu</button>
    </header>
  );
}
