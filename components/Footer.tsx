"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const headingScale = useTransform(scrollYProgress, [0, 0.6], [0.8, 1]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const orbY = useTransform(scrollYProgress, [0, 1], [100, -50]);

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/adhi-indra-7092a222b",
    },
    { name: "GitHub", href: "#" },
    { name: "Twitter", href: "#" },
  ];

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background gradient orb with parallax */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full pointer-events-none parallax-layer"
        style={{
          y: orbY,
          background:
            "radial-gradient(circle, rgba(194, 167, 125, 0.1) 0%, rgba(194, 167, 125, 0.03) 40%, transparent 60%)",
        }}
      />

      {/* Top border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
        className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
      />

      <div className="max-w-7xl mx-auto relative">
        {/* CTA heading with scale */}
        <motion.div
          className="mb-16 md:mb-24"
          style={{ scale: headingScale, opacity: headingOpacity }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold uppercase tracking-tighter leading-[0.85]">
            Let&apos;s work
            <br />
            <span className="text-gradient">together.</span>
          </h2>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24 md:mb-32"
        >
          <a
            href="mailto:adhiindrarog@gmail.com"
            className="group inline-flex items-center gap-5 text-lg md:text-xl font-mono hover:text-accent transition-colors duration-500"
          >
            <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-500 glow-accent">
              <span className="text-black text-xl rotate-45 group-hover:rotate-0 transition-transform duration-500">
                ↗
              </span>
            </div>
            <span className="border-b border-transparent group-hover:border-accent transition-colors duration-500">
              adhiindrarog@gmail.com
            </span>
          </a>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/[0.06]">
          {/* Social links — staggered */}
          <div className="flex flex-wrap justify-center gap-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-xs md:text-sm font-mono uppercase tracking-widest text-muted hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs font-mono text-foreground/30 uppercase tracking-widest"
          >
            © {new Date().getFullYear()} Adhi Indra
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
