import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const logGroups = [
  ['1_001'],
  ['2_001', '2_002'],
  ['3_001', '3_002'],
  ['4_001', '4_002'],
  ['5_001', '5_002'],
  ['6_001', '6_002', '6_003'],
  ['7_001', '7_002', '7_003'],
  ['8_001', '8_002', '8_003'],
  ['9_001', '9_002'],
  ['10_001', '10_002'],
  ['11_001', '11_002'],
];

export default function PlayLog() {
  const [selectedGroup, setSelectedGroup] = useState<string[] | null>(null);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-8 border-b border-navy-light pb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            테스트 플레이 로그
          </h1>
          <p className="text-cyan-neon/80 mt-2 text-xs font-bold tracking-widest uppercase">
            📝 플레이 로그 (Play Log)
          </p>
        </div>

        <div className="space-y-12 flex flex-col items-center">
          {logGroups.map((group, groupIndex) => (
            <div 
              key={groupIndex} 
              onClick={() => setSelectedGroup(group)}
              className="w-full max-w-2xl flex flex-col shadow-2xl border border-navy-light/50 rounded-xl overflow-hidden bg-navy-dark cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {group.map((id) => (
                <img 
                  key={id}
                  src={`https://gbe88.uk/2/G/${id}.webp`} 
                  alt={`Play Log ${id}`} 
                  className="w-full h-auto block m-0 p-0" 
                  referrerPolicy="no-referrer" 
                />
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedGroup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex flex-col overflow-y-auto"
            onClick={() => setSelectedGroup(null)}
          >
            <button 
              onClick={() => setSelectedGroup(null)}
              className="fixed top-4 right-4 z-[110] p-2 bg-navy-dark/80 rounded-full text-white hover:text-cyan-neon transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full max-w-4xl mx-auto my-auto py-12 flex flex-col items-center px-2" onClick={(e) => e.stopPropagation()}>
              {selectedGroup.map((id) => (
                <img 
                  key={id}
                  src={`https://gbe88.uk/2/G/${id}.webp`} 
                  alt={`Play Log ${id} Zoomed`} 
                  className="w-full h-auto block m-0 p-0 shadow-2xl" 
                  referrerPolicy="no-referrer" 
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
