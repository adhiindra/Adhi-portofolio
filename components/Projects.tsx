"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "acCEss",
    category: "Progressive Web App & Kiosk",
    year: "2023",
  },
  {
    id: 2,
    title: "Woodland Transport Solutions",
    category: "Web Application",
    year: "2022",
  },
  {
    id: 3,
    title: "SiPanduBeradat",
    category: "Security System",
    year: "2021",
  },
  {
    id: 4,
    title: "Motorcycle Security",
    category: "IoT & Android App",
    year: "2020",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-sm md:text-base font-mono uppercase tracking-widest text-accent mb-16 border-b border-white/10 pb-4">
          02 / Projects
        </h3>

        <div className="flex flex-col border-t border-white/10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative border-b border-white/10 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-10" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                <h4 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter group-hover:text-accent transition-colors duration-500">
                  {project.title}
                </h4>
                <span className="text-sm font-mono text-foreground/50 uppercase tracking-widest">
                  {project.category}
                </span>
              </div>
              <div className="flex items-center gap-6 text-foreground/50 font-mono">
                <span>{project.year}</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
