"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const lines = [
    "Building robust",
    "software and",
    "crafting elegant",
    "digital experiences",
    "where logic meets",
    "creativity."
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 md:px-12 overflow-hidden">
      <div className="z-10 flex flex-col items-center justify-center w-full">
        {lines.map((line, index) => (
          <div key={index} className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase tracking-tighter text-foreground whitespace-nowrap text-center leading-[0.9]"
            >
              {line}
            </motion.h2>
          </div>
        ))}
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] md:text-xs uppercase tracking-[0.3em] font-mono opacity-50"
      >
        Scroll to Explore
      </motion.div>
    </section>
  );
}
