"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    id: 1,
    role: "Software Developer",
    company: "Plotigo",
    period: "Apr 2025 — Present",
    location: "Singapore",
    description:
      "Developing web applications and software solutions in Singapore.",
  },
  {
    id: 2,
    role: "Software Developer",
    company: "CodeBros",
    period: "Apr 2025 — Present",
    location: "Remote",
    description:
      "Collaborating on software development projects and providing engineering solutions.",
  },
  {
    id: 3,
    role: "Software Developer",
    company: "Taksu Tech",
    period: "Mar 2022 — Mar 2025",
    location: "Bali, Indonesia",
    description:
      "Built and maintained software applications during a three-year tenure in Bali, Indonesia.",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24"
    >
      {/* Section heading with parallax */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="parallax-layer mb-20 md:mb-28"
          style={{ y: headingY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-accent block mb-4">
              01 / Experience
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
              Where I&apos;ve
              <br />
              <span className="text-gradient">Worked</span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-white/5">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent via-accent to-transparent origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Experience cards */}
          <div className="flex flex-col gap-8 md:gap-0">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -100 : 100, 0]
  );
  const cardOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      className="relative pl-8 md:pl-24 py-8 md:py-12 group"
      style={{ x, opacity: cardOpacity }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-8 top-12 md:top-16 -translate-x-1/2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_rgba(194,167,125,0.5)]"
        />
      </div>

      {/* Card */}
      <div className="glass-card rounded-2xl p-6 md:p-10 transition-all duration-500 group-hover:border-accent/20 group-hover:shadow-[0_0_40px_rgba(194,167,125,0.05)]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight group-hover:text-accent transition-colors duration-500">
              {exp.role}
            </h3>
            <p className="text-lg md:text-xl text-accent font-mono mt-1">
              {exp.company}
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1 text-sm font-mono text-muted tracking-widest shrink-0">
            <span>{exp.period}</span>
            <span className="text-xs text-foreground/30">{exp.location}</span>
          </div>
        </div>
        <p className="text-foreground/60 leading-relaxed max-w-2xl text-sm md:text-base">
          {exp.description}
        </p>

        {/* Hover arrow */}
        <motion.div
          className="absolute top-6 right-6 md:top-10 md:right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          whileHover={{ rotate: 45 }}
        >
          <span className="text-accent text-xl">↗</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
