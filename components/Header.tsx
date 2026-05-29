"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-white">
        <Link href="/" onClick={() => setIsOpen(false)} className="text-xl md:text-2xl font-bold uppercase tracking-widest font-mono hover:text-accent transition-colors">
          AI.
        </Link>
        <nav className="hidden md:flex gap-10 text-xs md:text-sm uppercase tracking-widest font-mono">
          <Link href="#experience" className="hover:text-accent transition-colors">01/ Experience</Link>
          <Link href="#projects" className="hover:text-accent transition-colors">02/ Projects</Link>
          <Link href="#contact" className="hover:text-accent transition-colors">03/ Contact</Link>
        </nav>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-sm uppercase tracking-widest font-mono hover:text-accent transition-colors"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center text-foreground"
          >
            <nav className="flex flex-col items-center gap-12 text-2xl uppercase tracking-widest font-mono">
              <Link href="#experience" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">01/ Experience</Link>
              <Link href="#projects" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">02/ Projects</Link>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">03/ Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
