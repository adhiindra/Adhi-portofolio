"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "acCEss",
    category: "Progressive Web App & Kiosk",
    year: "2023",
    color: "rgba(194, 167, 125, 0.08)",
  },
  {
    id: 2,
    title: "Woodland Transport",
    category: "Web Application",
    year: "2022",
    color: "rgba(194, 167, 125, 0.06)",
  },
  {
    id: 3,
    title: "SiPanduBeradat",
    category: "Security System",
    year: "2021",
    color: "rgba(194, 167, 125, 0.04)",
  },
  {
    id: 4,
    title: "Motorcycle Security",
    category: "IoT & Android App",
    year: "2020",
    color: "rgba(194, 167, 125, 0.05)",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24"
    >
      {/* Background accent orb */}
      <motion.div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full pointer-events-none parallax-layer"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [200, -200]),
          background:
            "radial-gradient(circle, rgba(194, 167, 125, 0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section heading */}
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
              02 / Projects
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
              Selected
              <br />
              <span className="text-gradient">Work</span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Project cards */}
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const bgX = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale: cardScale, opacity: cardOpacity }}
      className="group relative border-b border-white/[0.06] first:border-t"
    >
      {/* Hover background with parallax shift */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 overflow-hidden rounded-xl"
        style={{ x: bgX }}
      >
        <div
          className="absolute inset-0"
          style={{ background: project.color }}
        />
      </motion.div>

      <div className="py-8 md:py-14 px-2 md:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer">
        <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8">
          {/* Index number */}
          <motion.span
            className="text-xs font-mono text-accent/40 tracking-widest parallax-layer"
            style={{
              y: useTransform(scrollYProgress, [0, 1], [20, -20]),
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>

          {/* Title */}
          <h3 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tighter group-hover:text-accent transition-colors duration-500">
            {project.title}
          </h3>

          {/* Category */}
          <span className="text-xs md:text-sm font-mono text-muted uppercase tracking-widest">
            {project.category}
          </span>
        </div>

        <div className="flex items-center gap-6">
          {/* Year */}
          <span className="text-sm font-mono text-muted">{project.year}</span>

          {/* Arrow button */}
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-0">
            <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:rotate-[-45deg]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
