"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-primary text-foreground mt-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase tracking-tighter max-w-4xl leading-[0.9]">
            Let's work <br/>
            <span className="text-accent">together.</span>
          </h2>
          <a href="mailto:hello@adhiindra.com" className="group font-mono text-sm md:text-lg lg:text-xl flex items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-black rotate-45 group-hover:rotate-0 transition-transform duration-500">↗</span>
            </div>
            hello@adhiindra.com
          </a>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs md:text-sm font-mono text-foreground/50 uppercase tracking-widest">
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://linkedin.com/in/adhi-indra-7092a222b" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-accent transition-colors">GitHub</a>
            <a href="#" className="hover:text-accent transition-colors">Twitter</a>
          </div>
          <p>© {new Date().getFullYear()} Adhi Indra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
