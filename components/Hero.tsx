"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Multi-speed parallax layers — heavy offsets for dramatic depth
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[120vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Layer — slowest parallax */}
      <motion.div
        className="absolute inset-0 parallax-layer pointer-events-none"
        style={{ y: bgY }}
      >
        {/* Main gradient orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw]"
          style={{
            background:
              "radial-gradient(circle, rgba(194, 167, 125, 0.15) 0%, rgba(194, 167, 125, 0.05) 40%, transparent 70%)",
          }}
        />
        {/* Secondary orb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 3, delay: 0.5 }}
          className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(194, 167, 125, 0.08) 0%, transparent 60%)",
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(240, 236, 228, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(240, 236, 228, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Middle Layer — profile image */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center parallax-layer mb-[100px]"
        style={{ y: midY, opacity, scale }}
      >
        <div className="flex flex-col items-center z-10">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
            className="mb-10 relative"
          >
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 glow-accent">
              <Image
                src="/adhiindra.jpg"
                alt="Adhi Indra"
                fill
                loading="eager"
                sizes="(max-width: 768px) 160px, 224px"
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
              className="absolute -bottom-3 -right-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent flex items-center justify-center"
            >
              <span className="text-black text-xs md:text-sm font-bold">✦</span>
            </motion.div>
          </motion.div>

          {/* Name — big typography */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase tracking-tighter text-center leading-[0.9]"
            >
              <span className="text-gradient">Adhi Indra</span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.33, 1, 0.68, 1] }}
            className="mt-4 md:mt-6 text-sm md:text-base font-mono text-accent uppercase tracking-[0.3em] text-center"
          >
            Software Engineer
          </motion.p>

          {/* Full name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.33, 1, 0.68, 1] }}
            className="mt-2 text-xs md:text-sm font-mono text-muted tracking-widest text-center"
          >
            ( I Gede Adhi Indra Jaya, S.Kom )
          </motion.p>
        </div>
      </motion.div>

      {/* Foreground Layer — scroll hint */}
      <motion.div
        className="absolute bottom-[22vh] left-1/2 -translate-x-1/2 parallax-layer"
        style={{ y: fgY }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-mono text-muted">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Side decorative elements */}
      <motion.div
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 parallax-layer hidden md:block"
        style={{ y: textY }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col gap-4 items-center"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
          <span className="text-[10px] font-mono tracking-widest text-muted rotate-[-90deg]">
            2022—2026
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
