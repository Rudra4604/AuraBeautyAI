"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Wand2 } from "lucide-react";

interface MagicWipeRevealProps {
  beforeImage: string;
  afterImage: string;
}

export default function MagicWipeReveal({ beforeImage, afterImage }: MagicWipeRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-border dark:border-white/10 bg-surface-alt dark:bg-navy-light aspect-[4/5] sm:aspect-[16/9] group cursor-pointer" onClick={() => setIsRevealed(!isRevealed)}>
      
      {/* Before Image (Base Layer) */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage}
          alt="Before Transformation"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* After Image (Top Layer with Circular Clip Path Reveal) */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={false}
        animate={{
          clipPath: isRevealed 
            ? "circle(150% at 50% 50%)" 
            : "circle(0% at 50% 85%)"
        }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={afterImage}
          alt="After Transformation"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Interactive Button */}
      <div className="absolute inset-x-0 bottom-8 flex justify-center z-30 pointer-events-none">
        <button
          className={`pointer-events-auto relative px-8 py-4 backdrop-blur-md rounded-full border font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)] ${
            isRevealed 
              ? "bg-black/40 border-white/20 text-white" 
              : "bg-black/60 border-gold/50 text-white"
          }`}
        >
          <span className="relative flex items-center gap-2">
            {isRevealed ? (
              <>
                <Wand2 className="w-5 h-5 text-gray-300" />
                View Before
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 text-gold animate-pulse" />
                Tap to Reveal Magic
              </>
            )}
          </span>
        </button>
      </div>

      {/* Status Badges */}
      <motion.div 
        animate={{ opacity: isRevealed ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute top-6 left-6 z-20 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white text-sm font-medium uppercase tracking-wider"
      >
        Before
      </motion.div>

      <motion.div 
        animate={{ opacity: isRevealed ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-6 right-6 z-20 px-4 py-1.5 rounded-full bg-gold/20 backdrop-blur-md border border-gold/50 text-gold text-sm font-medium uppercase tracking-wider"
      >
        After
      </motion.div>
    </div>
  );
}
