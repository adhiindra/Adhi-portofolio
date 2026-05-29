"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: string;
  y: string;
  size: number;
  speed: number;
  opacity: number;
  delay: number;
}

function ParticleOrb({ particle }: { particle: Particle }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -particle.speed * 400]
  );

  return (
    <motion.div
      className="absolute rounded-full parallax-layer"
      style={{
        left: particle.x,
        top: particle.y,
        width: particle.size,
        height: particle.size,
        y,
        background: `radial-gradient(circle, rgba(194, 167, 125, ${particle.opacity}) 0%, transparent 70%)`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: particle.opacity,
        scale: [1, 1.2, 1],
      }}
      transition={{
        opacity: { duration: 2, delay: particle.delay },
        scale: {
          duration: 8 + particle.delay * 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
    />
  );
}

export default function ParallaxParticles() {
  const particles = useMemo<Particle[]>(() => {
    // Deterministic particles — no random on server/client mismatch
    const configs = [
      { x: "10%", y: "15%", size: 200, speed: 0.3, opacity: 0.06, delay: 0 },
      { x: "80%", y: "25%", size: 150, speed: 0.5, opacity: 0.04, delay: 0.5 },
      { x: "50%", y: "45%", size: 300, speed: 0.2, opacity: 0.03, delay: 1 },
      { x: "20%", y: "65%", size: 100, speed: 0.7, opacity: 0.05, delay: 0.3 },
      { x: "70%", y: "75%", size: 250, speed: 0.4, opacity: 0.04, delay: 0.8 },
      { x: "90%", y: "50%", size: 180, speed: 0.6, opacity: 0.03, delay: 1.2 },
      { x: "35%", y: "85%", size: 120, speed: 0.35, opacity: 0.05, delay: 0.6 },
      { x: "60%", y: "10%", size: 160, speed: 0.45, opacity: 0.04, delay: 0.9 },
    ];
    return configs.map((c, i) => ({ ...c, id: i }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {particles.map((p) => (
        <ParticleOrb key={p.id} particle={p} />
      ))}
    </div>
  );
}
