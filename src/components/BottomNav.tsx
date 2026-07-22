import React from 'react';
import { Home, Wheat, BookOpen, Lightbulb, Info } from 'lucide-react';
import { motion } from 'motion/react';

export type TabType = 'home' | 'crops' | 'learn' | 'tips' | 'about';

interface BottomNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  showUrdu: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab, showUrdu }) => {
  const tabs = [
    { id: 'home' as TabType, label: 'Home', urduLabel: 'ہوم', icon: Home },
    { id: 'crops' as TabType, label: 'Crops', urduLabel: 'فصلیں', icon: Wheat },
    { id: 'learn' as TabType, label: 'Learn', urduLabel: 'تعلیم', icon: BookOpen },
    { id: 'tips' as TabType, label: 'Tips & Calendar', urduLabel: 'رہنمائی', icon: Lightbulb },
    { id: 'about' as TabType, label: 'About', urduLabel: 'تعارف', icon: Info },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-lg px-2 py-1.5 transition-colors">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-200"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-emerald-100 dark:bg-emerald-900/40 rounded-2xl border border-emerald-200 dark:border-emerald-800"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <div className="relative z-10 flex flex-col items-center gap-0.5">
                <Icon
                  className={`w-5 h-5 transition-colors ${
                    isActive
                      ? 'text-emerald-700 dark:text-emerald-400 font-bold scale-110'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'
                  }`}
                />
                <span
                  className={`text-[11px] font-medium leading-none transition-colors ${
                    isActive
                      ? 'text-emerald-800 dark:text-emerald-300 font-semibold'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {showUrdu ? tab.urduLabel : tab.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
