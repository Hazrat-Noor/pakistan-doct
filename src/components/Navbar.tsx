import React from 'react';
import { Sprout, Mic, Moon, Sun, Search, Sparkles } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  onOpenVoiceAssistant: () => void;
  onSearchClick: () => void;
  showUrdu: boolean;
  setShowUrdu: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  setIsDarkMode,
  onOpenVoiceAssistant,
  onSearchClick,
  showUrdu,
  setShowUrdu,
}) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-emerald-100 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo & Brand Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
            <Sprout className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                Kisan Dost
              </h1>
              <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 rounded-md border border-amber-200 dark:border-amber-800">
                Pakistan 🇵🇰
              </span>
            </div>
            <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              {showUrdu ? 'کسان دوست پاکستان • زراعت کی مکمل رہنمائی' : 'Learn Smart. Farm Better.'}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          
          {/* Language Toggle Button */}
          <button
            onClick={() => setShowUrdu(!showUrdu)}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
            title="Toggle Urdu Subtitles"
          >
            <span className="text-emerald-600 dark:text-emerald-400">اردو</span>
            <span className="text-slate-400">/</span>
            <span>ENG</span>
          </button>

          {/* Quick Search Button */}
          <button
            onClick={onSearchClick}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 transition-colors"
            title="Search Crops & Topics"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Voice Assistant Button */}
          <button
            onClick={onOpenVoiceAssistant}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-semibold shadow-sm hover:opacity-95 transition-all group overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <Mic className="w-4 h-4 animate-pulse text-amber-300" />
            <span className="hidden md:inline">Voice Assistant</span>
            <Sparkles className="w-3 h-3 text-amber-300" />
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>

        </div>

      </div>
    </header>
  );
};
