import React from 'react';
import { motion } from 'motion/react';

export default function Gallery() {
  // Generate image URLs from 1 to 21
  const images = Array.from({ length: 21 }, (_, i) => `https://gbe88.uk/G/${i + 1}.webp`);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8 border-b border-navy-light pb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          수록 이미지 모음
        </h1>
        <p className="text-cyan-neon/80 mt-2 text-xs font-bold tracking-widest uppercase">
          🖼️ 갤러리 (Gallery)
        </p>
      </div>

      <div className="space-y-8 flex flex-col items-center">
        {images.map((src, index) => (
          <div key={index} className="w-full max-w-2xl bg-navy-light/20 p-2 rounded-xl border border-navy-light">
            <img 
              src={src} 
              alt={`Gallery Image ${index + 1}`} 
              className="w-full h-auto rounded-lg shadow-md" 
              referrerPolicy="no-referrer" 
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
