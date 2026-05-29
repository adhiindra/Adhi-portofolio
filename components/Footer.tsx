"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/adhi-indra-7092a222b",
    handle: "@adhi-indra",
  },
  {
    name: "GitHub",
    href: "#",
    handle: "@adhiindra",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/adhiindra",
    handle: "@adhiindra",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@adhiindra_",
    handle: "@adhiindra_",
  },
];

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const headingRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: headingProgress } = useScroll({
    target: headingRef,
    offset: ["start 90%", "start 40%"],
  });

  const headingScale = useTransform(headingProgress, [0, 1], [0.75, 1]);
  const headingOpacity = useTransform(headingProgress, [0, 1], [0, 1]);

  const orbY = useTransform(scrollYProgress, [0, 1], [250, -120]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [160, -80]);

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative pb-12 md:pb-16 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background gradient orbs with parallax */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[60vw] h-[60vw] rounded-full pointer-events-none parallax-layer"
        style={{
          y: orbY,
          background:
            "radial-gradient(circle, rgba(194, 167, 125, 0.1) 0%, rgba(194, 167, 125, 0.03) 40%, transparent 60%)",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full pointer-events-none parallax-layer"
        style={{
          y: orb2Y,
          background:
            "radial-gradient(circle, rgba(194, 167, 125, 0.06) 0%, transparent 50%)",
        }}
      />

      {/* Top border animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
        className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-accent">
            03 / Contact
          </span>
        </motion.div>

        {/* CTA heading with scale animation */}
        <motion.div
          ref={headingRef}
          className="mb-16 md:mb-20"
          style={{ scale: headingScale, opacity: headingOpacity }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold uppercase tracking-tighter leading-[0.85]">
            Let&apos;s work
            <br />
            <span className="text-gradient">together.</span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-foreground/50 text-base md:text-lg max-w-xl leading-relaxed mb-16 md:mb-24"
        >
          Have a project in mind or just want to say hello? I&apos;m always open
          to discussing new opportunities, creative ideas, or partnerships.
        </motion.p>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-2xl md:rounded-3xl p-8 md:p-12 mb-16 md:mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Email block */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-muted block mb-4">
                Email
              </span>
              <a
                href="mailto:adhiindrarog@gmail.com"
                className="group inline-flex items-center gap-4 text-lg md:text-xl hover:text-accent transition-colors duration-500"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-500 glow-accent shrink-0">
                  <span className="text-black text-lg rotate-45 group-hover:rotate-0 transition-transform duration-500">
                    ↗
                  </span>
                </div>
                <span className="text-sm md:text-lg border-b border-transparent group-hover:border-accent transition-colors duration-500 font-mono">
                  adhiindrarog@gmail.com
                </span>
              </a>
            </div>

            {/* Location block */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-muted block mb-4">
                Based In
              </span>
              <p className="text-lg md:text-xl">
                Bali, Indonesia
              </p>
              <p className="text-sm text-muted mt-1 font-mono">
                Open to remote & relocation
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social links grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20 md:mb-28"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-muted block mb-8">
            Find Me On
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                className="group glass-card rounded-xl p-5 md:p-6 flex flex-col gap-3 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(194,167,125,0.05)] transition-all duration-500"
              >
                <span className="text-sm md:text-base font-bold uppercase tracking-tight group-hover:text-accent transition-colors duration-300">
                  {link.name}
                </span>
                <span className="text-xs font-mono text-muted group-hover:text-foreground/60 transition-colors duration-300">
                  {link.handle}
                </span>
                <div className="mt-auto pt-2">
                  <span className="text-xs font-mono text-accent/0 group-hover:text-accent transition-colors duration-500 inline-flex items-center gap-1">
                    Visit ↗
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/[0.06]">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs font-mono text-foreground/30 uppercase tracking-widest"
          >
            © {new Date().getFullYear()} Adhi Indra. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xs font-mono text-foreground/20 tracking-widest"
          >
            Crafted with care in Bali
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
