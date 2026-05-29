"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const lines = [
    "I Gede", "Adhi Indra", "Jaya"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 md:px-12 overflow-hidden">
      <div className="z-10 flex flex-col items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="mb-8 overflow-hidden rounded-2xl md:rounded-[2rem] w-48 h-48 md:w-64 md:h-64 border border-white/10 relative shadow-2xl"
        >
          <Image
            src="/profile.jpeg"
            alt="Adhi Indra"
            fill
            sizes="(max-width: 768px) 192px, 256px"
            className="object-cover"
          />
        </motion.div>
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
