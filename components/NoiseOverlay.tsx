"use client";

import { useEffect, useRef } from "react";

export default function NoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let wWidth: number, wHeight: number;
    let noiseData: ImageData[];
    let frame = 0;
    let loopTimeout: number;

    const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;
      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
          buffer32[i] = 0xff000000;
        }
      }
      noiseData.push(idata);
    };

    const play = () => {
      ctx.putImageData(noiseData[frame], 0, 0);
      frame++;
      if (frame === noiseData.length) frame = 0;
      loopTimeout = window.setTimeout(() => {
        requestAnimationFrame(play);
      }, 1000 / 25);
    };

    const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;
      canvas.width = wWidth;
      canvas.height = wHeight;
      noiseData = [];
      for (let i = 0; i < 10; i++) {
        createNoise();
      }
      play();
    };

    setup();

    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      clearTimeout(loopTimeout);
      resizeTimer = window.setTimeout(() => {
        setup();
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(loopTimeout);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none opacity-[0.04]"
    />
  );
}
