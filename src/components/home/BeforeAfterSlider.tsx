"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const [halfRatio, setHalfRatio] = useState<number>(0.8); // Default fallback 4/5
  const scalingContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!scalingContainerRef.current) return;
      const rect = scalingContainerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setPosition(percentage);
    },
    []
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", () => setIsDragging(false));
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", () => setIsDragging(false));
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", () => setIsDragging(false));
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <section className="py-20 bg-surface-alt dark:bg-navy-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {/* Section Header */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold tracking-wide uppercase mb-4">
              BEFORE & AFTER
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-white mb-4">
              See the <span className="text-gold">Difference</span>
            </h2>
            <p className="text-text-secondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the transformation with our premium services. Drag the slider to compare the results.
            </p>
          </motion.div>

          {/* Slider Container */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl border border-border dark:border-white/10 group cursor-ew-resize select-none touch-none bg-surface dark:bg-navy"
            style={{
              width: "100%",
              maxWidth: `min(900px, calc(600px * ${halfRatio}))`,
              maxHeight: "600px",
              aspectRatio: `${halfRatio}`,
            }}
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
          >
            {/* Single Scaling Container ensures perfectly synced hover zoom and mouse tracking */}
            <div 
              ref={scalingContainerRef}
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03] origin-center"
            >
              {/* Base Layer: After (Right Half of the Image) */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-[-100%] w-[200%] h-full">
                  <Image
                    src="/beforeafter.jpeg"
                    alt="After Transformation"
                    fill
                    className="object-cover"
                    priority
                    onLoad={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (img.naturalWidth && img.naturalHeight) {
                        setHalfRatio((img.naturalWidth / 2) / img.naturalHeight);
                      }
                    }}
                  />
                </div>
                {/* Top Right Label */}
                <div className="absolute top-6 right-6 z-20 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white text-sm font-medium uppercase tracking-wider shadow-lg">
                  After
                </div>
              </div>

              {/* Top Layer: Before (Left Half of the Image) */}
              <div 
                className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              >
                <div className="absolute top-0 left-0 w-[200%] h-full">
                  <Image
                    src="/beforeafter.jpeg"
                    alt="Before Transformation"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Top Left Label */}
                <div className="absolute top-6 left-6 z-20 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white text-sm font-medium uppercase tracking-wider shadow-lg">
                  Before
                </div>
              </div>

              {/* Draggable Divider */}
              <div 
                className="absolute top-0 bottom-0 z-30 flex flex-col items-center justify-center w-8 -ml-4 pointer-events-none will-change-transform"
                style={{ left: `${position}%` }}
              >
                {/* Divider Line */}
                <div className="absolute w-[2px] h-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                
                {/* Slider Handle */}
                <div className="relative w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border-[1.5px] border-white/80 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="transition-colors duration-300 group-hover:stroke-gold"
                  >
                    <path d="m9 18-6-6 6-6"/>
                    <path d="m15 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
