"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    period: "2023 - Present",
    description: "Leading frontend architecture and building scalable web applications using Next.js and React."
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Digital Solutions LLC",
    period: "2020 - 2023",
    description: "Developed and maintained full-stack applications, improved performance by 40%, and mentored junior developers."
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Creative Agency",
    period: "2018 - 2020",
    description: "Crafted pixel-perfect user interfaces and implemented complex animations for high-profile clients."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-sm md:text-base font-mono uppercase tracking-widest text-accent mb-16 border-b border-white/10 pb-4">
          01 / Experience
        </h3>
        
        <div className="flex flex-col gap-12 md:gap-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 group"
            >
              <div className="text-foreground/50 font-mono text-sm tracking-widest uppercase flex flex-col justify-between">
                <span>{exp.period}</span>
                <span className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-accent">--&gt;</span>
              </div>
              <div>
                <h4 className="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-2">{exp.role}</h4>
                <p className="text-lg md:text-xl text-accent mb-4 font-mono">{exp.company}</p>
                <p className="text-foreground/70 leading-relaxed max-w-2xl">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
