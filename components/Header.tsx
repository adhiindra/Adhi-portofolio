"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  // Scroll progress bar width
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-background/70 backdrop-blur-xl border-b border-white/[0.06] text-foreground"
            : "py-6 md:py-8 mix-blend-difference text-white"
        }`}
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-xl md:text-2xl font-bold uppercase tracking-widest font-mono text-accent hover:text-accent-light transition-colors duration-300"
        >
          AI.
        </Link>
        <nav className="hidden md:flex gap-10 text-xs md:text-sm uppercase tracking-widest font-mono">
          <Link
            href="#experience"
            className="hover:text-accent transition-colors duration-300 relative group"
          >
            01/ Experience
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="#projects"
            className="hover:text-accent transition-colors duration-300 relative group"
          >
            02/ Projects
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="#contact"
            className="hover:text-accent transition-colors duration-300 relative group"
          >
            03/ Contact
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
          </Link>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-sm uppercase tracking-widest font-mono hover:text-accent transition-colors"
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] bg-accent origin-left"
          style={{ width: progressWidth }}
        />
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center text-foreground"
          >
            <nav className="flex flex-col items-center gap-12 text-2xl uppercase tracking-widest font-mono">
              <Link
                href="#experience"
                onClick={() => setIsOpen(false)}
                className="hover:text-accent transition-colors"
              >
                01/ Experience
              </Link>
              <Link
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="hover:text-accent transition-colors"
              >
                02/ Projects
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-accent transition-colors"
              >
                03/ Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
