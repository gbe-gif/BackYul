import React from 'react';
import { Globe, User, Users, ImageIcon, MessageSquare } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'worldview' | 'characters' | 'sideCharacters' | 'gallery' | 'playLog';
  setActiveTab: (tab: 'worldview' | 'characters' | 'sideCharacters' | 'gallery' | 'playLog') => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-navy border-t border-navy-light pb-safe">
      <div className="max-w-3xl mx-auto flex bg-[#0f172a]">
        <button
          onClick={() => setActiveTab('worldview')}
          className={`flex-1 flex flex-col items-center justify-center py-4 px-2 transition-colors ${
            activeTab === 'worldview' ? 'text-cyan-neon' : 'text-silver hover:text-silver-light'
          }`}
        >
          <Globe className="w-5 h-5 mb-1.5" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider truncate max-w-full">세계관</span>
        </button>
        <button
          onClick={() => setActiveTab('characters')}
          className={`flex-1 flex flex-col items-center justify-center py-4 px-2 transition-colors ${
            activeTab === 'characters' ? 'text-cyan-neon' : 'text-silver hover:text-silver-light'
          }`}
        >
          <User className="w-5 h-5 mb-1.5" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider truncate max-w-full">백 율</span>
        </button>
        <button
          onClick={() => setActiveTab('sideCharacters')}
          className={`flex-1 flex flex-col items-center justify-center py-4 px-2 transition-colors ${
            activeTab === 'sideCharacters' ? 'text-cyan-neon' : 'text-silver hover:text-silver-light'
          }`}
        >
          <Users className="w-5 h-5 mb-1.5" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider truncate max-w-full">주변 인물</span>
        </button>
        <button
          onClick={() => setActiveTab('gallery')}
          className={`flex-1 flex flex-col items-center justify-center py-4 px-2 transition-colors ${
            activeTab === 'gallery' ? 'text-cyan-neon' : 'text-silver hover:text-silver-light'
          }`}
        >
          <ImageIcon className="w-5 h-5 mb-1.5" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider truncate max-w-full">갤러리</span>
        </button>
        <button
          onClick={() => setActiveTab('playLog')}
          className={`flex-1 flex flex-col items-center justify-center py-4 px-2 transition-colors ${
            activeTab === 'playLog' ? 'text-cyan-neon' : 'text-silver hover:text-silver-light'
          }`}
        >
          <MessageSquare className="w-5 h-5 mb-1.5" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider truncate max-w-full">플레이 로그</span>
        </button>
      </div>
    </nav>
  );
}
