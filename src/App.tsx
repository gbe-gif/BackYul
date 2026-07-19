import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Worldview from './pages/Worldview';
import Characters from './pages/Characters';
import SideCharacters from './pages/SideCharacters';
import Gallery from './pages/Gallery';
import BottomNav from './components/BottomNav';
import { Shield } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'worldview' | 'characters' | 'sideCharacters' | 'gallery'>('worldview');

  return (
    <div className="min-h-screen flex flex-col w-full bg-navy-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-navy-dark/90 backdrop-blur-md border-b border-navy-light px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-center relative">
          <Shield className="text-cyan-neon w-5 h-5 absolute left-0" />
          <span className="font-bold text-white tracking-widest text-sm md:text-base uppercase">
            WEA Database
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-5 py-8 pb-32 overflow-x-hidden">
        <AnimatePresence mode="wait">
          {activeTab === 'worldview' && <Worldview key="worldview" />}
          {activeTab === 'characters' && <Characters key="characters" />}
          {activeTab === 'sideCharacters' && <SideCharacters key="sideCharacters" />}
          {activeTab === 'gallery' && <Gallery key="gallery" />}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
