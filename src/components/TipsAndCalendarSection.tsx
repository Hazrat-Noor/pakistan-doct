import React, { useState } from 'react';
import { Calendar, Lightbulb, Award, CheckCircle2, Search, Filter, Sparkles, ChevronRight } from 'lucide-react';
import { CROP_CALENDAR, FARMING_TIPS, AGRI_FACTS } from '../data/educationData';
import { SeasonType } from '../types';
import { motion } from 'motion/react';

interface TipsAndCalendarSectionProps {
  showUrdu: boolean;
}

export const TipsAndCalendarSection: React.FC<TipsAndCalendarSectionProps> = ({ showUrdu }) => {
  const [activeTab, setActiveTab] = useState<'calendar' | 'tips' | 'facts'>('calendar');
  const [selectedMonth, setSelectedMonth] = useState<string>('October');
  const [selectedSeason, setSelectedSeason] = useState<string>('All');

  const monthObj = CROP_CALENDAR.find(m => m.month === selectedMonth) || CROP_CALENDAR[9];

  const filteredTips = selectedSeason === 'All'
    ? FARMING_TIPS
    : FARMING_TIPS.filter(t => t.season === selectedSeason);

  return (
    <div className="pb-24 space-y-6 animate-fadeIn">
      
      {/* Title Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Calendar className="w-6 h-6 text-emerald-600" /> Pakistani Crop Calendar & Tips
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {showUrdu 
            ? 'پاکستان کےزرعی مہینوں کے مطابق بوائی، کٹائی اور اہم مشورے' 
            : 'Month-by-month agricultural sowing & harvesting schedules across Pakistan'
          }
        </p>
      </div>

      {/* Sub Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl">
        {[
          { id: 'calendar', label: 'Monthly Crop Calendar', icon: Calendar },
          { id: 'tips', label: 'Farming Tips', icon: Lightbulb },
          { id: 'facts', label: 'Pakistan Agri Facts', icon: Award },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 1. MONTHLY CROP CALENDAR TAB */}
      {activeTab === 'calendar' && (
        <div className="space-y-6">
          
          {/* Month Selector Pills */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase text-slate-500">Select Month:</span>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {CROP_CALENDAR.map((m) => (
                <button
                  key={m.month}
                  onClick={() => setSelectedMonth(m.month)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedMonth === m.month
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {m.month} <span className="font-urdu text-amber-300">({m.urduMonth})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Month Schedule Details Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-600" /> {monthObj.month} <span className="text-emerald-600 font-urdu">({monthObj.urduMonth})</span> Schedule
                </h3>
                <p className="text-xs text-slate-500">Sowing and harvesting operations in Pakistani fields</p>
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                Pakistan Agricultural Calendar
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Sowing Section */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-2">
                <h4 className="text-xs font-bold uppercase text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" /> Sowing Operations
                </h4>
                <ul className="space-y-1.5">
                  {monthObj.sowing.map((sow, idx) => (
                    <li key={idx} className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{sow}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Harvesting Section */}
              <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-2">
                <h4 className="text-xs font-bold uppercase text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-600" /> Harvesting Operations
                </h4>
                <ul className="space-y-1.5">
                  {monthObj.harvesting.map((harv, idx) => (
                    <li key={idx} className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                      <span>{harv}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Irrigation & Monthly Notes */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                <span className="font-bold text-blue-900 dark:text-blue-300 block mb-1">Water & Irrigation Priority:</span>
                {monthObj.irrigationFocus}
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Key Farmer Advisory:</span>
                {monthObj.notes}
              </div>
            </div>

          </div>

        </div>
      )}

      {/* 2. FARMING TIPS TAB */}
      {activeTab === 'tips' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {['All', 'Rabi (Winter)', 'Kharif (Summer)'].map((season) => (
              <button
                key={season}
                onClick={() => setSelectedSeason(season)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedSeason === season
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {season}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredTips.map((tip) => (
              <div
                key={tip.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                    {tip.category}
                  </span>
                  <span className="text-[10px] text-amber-600 font-bold">{tip.season}</span>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {tip.title} <span className="font-urdu text-emerald-600 dark:text-emerald-400">({tip.urduTitle})</span>
                </h4>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  "{tip.tip}"
                </p>

                <p className="text-xs font-urdu text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/30 p-2.5 rounded-xl border border-amber-100 dark:border-amber-900/30">
                  "{tip.urduTip}"
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. PAKISTAN AGRI FACTS TAB */}
      {activeTab === 'facts' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {AGRI_FACTS.map((fact) => (
            <div
              key={fact.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{fact.title}</h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
                  {fact.fact}
                </p>
                <p className="text-xs font-urdu text-emerald-700 dark:text-emerald-400 mt-2 font-semibold">
                  {fact.urduFact}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 font-medium">
                Verified Source: {fact.source}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
