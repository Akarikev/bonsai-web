"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function AnimatedBonsai() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative h-[500px] w-full overflow-hidden"
    >
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-64 h-64">
          {/* Trunk */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-32 bg-amber-800 rounded-t-full" />

          {/* Branches */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-32 h-32">
            <div className="absolute top-0 left-0 w-16 h-16 bg-emerald-600 rounded-full" />
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-600 rounded-full" />
          </div>

          {/* Top foliage */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-24 h-24 bg-emerald-500 rounded-full" />

          {/* Pot */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-amber-900 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
