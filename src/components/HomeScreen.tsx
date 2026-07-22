import React, { useState } from 'react';
import { 
  Search, Sprout, Sun, ThermometerSun, Droplets, Calendar, BookOpen, 
  Lightbulb, Mic, ChevronRight, Sparkles, Award, ArrowRight, ShieldCheck, 
  Wind, CloudRain, Heart 
} from 'lucide-react';
import { CROPS_DATA } from '../data/cropsData';
import { PAKISTAN_CITIES_WEATHER } from '../data/weatherData';
import { FARMING_TIPS, AGRI_FACTS } from '../data/educationData';
import { Crop, SeasonType } from '../types';
import { motion } from 'motion/react';

interface HomeScreenProps {
  onSelectCrop: (crop: Crop) => void;
  onNavigateTab: (tab: 'crops' | 'learn' | 'tips' | 'about') => void;
  onOpenVoiceAssistant: () => void;
  favorites: string[];
  recentlyViewed: string[];
  showUrdu: boolean;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectCrop,
  onNavigateTab,
  onOpenVoiceAssistant,
  favorites,
  recentlyViewed,
  showUrdu,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCityId, setSelectedCityId] = useState('faisalabad');
  const [activeSeason, setActiveSeason] = useState<SeasonType>('Rabi (Winter)');
  const [tipIndex, setTipIndex] = useState(0);

  const selectedCity = PAKISTAN_CITIES_WEATHER.find(c => c.id === selectedCityId) || PAKISTAN_CITIES_WEATHER[0];

  // Filter crops for seasonal carousel
  const seasonalCrops = CROPS_DATA.filter(c => c.season === activeSeason || c.season === 'All Seasons');

  // Search results
  const searchResults = searchQuery.trim()
    ? CROPS_DATA.filter(c => 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.urduName.includes(searchQuery) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const recentCropObjects = CROPS_DATA.filter(c => recentlyViewed.includes(c.id));

  return (
    <div className="pb-24 space-y-8 animate-fadeIn">
      
      {/* 1. HERO WELCOME BANNER */}
      <section className="relative rounded-3xl bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 text-white overflow-hidden p-6 sm:p-8 shadow-xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/30 backdrop-blur-md border border-emerald-400/30 text-emerald-200 text-xs font-semibold">
            <span>🇵🇰 Certified Pakistani Agriculture Knowledge</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Kisan Dost Pakistan
          </h1>

          <p className="text-sm sm:text-base text-emerald-100 font-medium leading-relaxed">
            {showUrdu 
              ? 'پاکستان کے کسانوں اور طالب علموں کے لیے جدید زرعی رہنمائی اور فصلوں کی مکمل معلومات۔' 
              : 'Learn Smart. Farm Better. Explore 23+ major Pakistani crops, soil management, seasonal calendars, and pest remedies.'
            }
          </p>

          {/* Search Bar */}
          <div className="relative pt-2">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search crops (e.g. Wheat, Rice, Potato, 棉花)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white placeholder-slate-400 text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            {/* Live Search Dropdown */}
            {searchQuery.trim() !== '' && (
              <div className="absolute top-full left-0 right-0 mt-2 z-30 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 max-h-60 overflow-y-auto p-2">
                {searchResults.length > 0 ? (
                  searchResults.map(crop => (
                    <button
                      key={crop.id}
                      onClick={() => {
                        setSearchQuery('');
                        onSelectCrop(crop);
                      }}
                      className="w-full flex items-center gap-3 p-2.5 hover:bg-emerald-50 dark:hover:bg-slate-800 rounded-xl transition-colors text-left"
                    >
                      <img src={crop.imageUrl} alt={crop.name} className="w-10 h-10 rounded-lg object-cover" />
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          {crop.name} <span className="text-emerald-600 dark:text-emerald-400 font-urdu">({crop.urduName})</span>
                        </div>
                        <div className="text-xs text-slate-500">{crop.category} • {crop.season}</div>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="p-3 text-xs text-slate-500 text-center">No crops matching "{searchQuery}"</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. WEATHER & SOIL ADVISORY CARD */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sun className="w-5 h-5 text-amber-500" /> Agri Weather & Soil Moisture
            </h3>
            <p className="text-xs text-slate-500">Agricultural advisory tailored for major Pakistani regions</p>
          </div>

          {/* City Selector */}
          <select
            value={selectedCityId}
            onChange={(e) => setSelectedCityId(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {PAKISTAN_CITIES_WEATHER.map(city => (
              <option key={city.id} value={city.id}>{city.name}</option>
            ))}
          </select>
        </div>

        {/* Selected Weather Details */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30">
            <span className="text-[11px] text-amber-800 dark:text-amber-400 font-medium block">Temperature</span>
            <span className="text-lg font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1 mt-0.5">
              <ThermometerSun className="w-4 h-4 text-amber-600" /> {selectedCity.temp}°C
            </span>
            <span className="text-[10px] text-slate-500 block">{selectedCity.condition}</span>
          </div>

          <div className="p-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
            <span className="text-[11px] text-blue-800 dark:text-blue-400 font-medium block">Humidity</span>
            <span className="text-lg font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1 mt-0.5">
              <Droplets className="w-4 h-4 text-blue-600" /> {selectedCity.humidity}%
            </span>
            <span className="text-[10px] text-slate-500 block">Relative Air Moisture</span>
          </div>

          <div className="p-3 rounded-2xl bg-teal-50/70 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/30">
            <span className="text-[11px] text-teal-800 dark:text-teal-400 font-medium block">Monsoon Rain</span>
            <span className="text-lg font-bold text-teal-900 dark:text-teal-200 flex items-center gap-1 mt-0.5">
              <CloudRain className="w-4 h-4 text-teal-600" /> {selectedCity.rainfall}
            </span>
            <span className="text-[10px] text-slate-500 block">Forecast</span>
          </div>

          <div className="p-3 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30">
            <span className="text-[11px] text-emerald-800 dark:text-emerald-400 font-medium block">Soil Moisture</span>
            <span className="text-lg font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-1 mt-0.5">
              <Sprout className="w-4 h-4 text-emerald-600" /> {selectedCity.soilMoisture}
            </span>
            <span className="text-[10px] text-slate-500 block">{selectedCity.province}</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-900 dark:text-white">Advisory for {selectedCity.name}:</span>{' '}
            {selectedCity.recommendation}
          </div>
        </div>
      </section>

      {/* 3. QUICK ACCESS SHORTCUT CARDS */}
      <section className="space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">Quick Access Shortcuts</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          
          <button
            onClick={() => onNavigateTab('tips')}
            className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-md hover:scale-[1.02] transition-transform text-left space-y-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-sm font-bold">Crop Calendar</h4>
              <p className="text-[11px] text-emerald-100">Monthly Sowing Guide</p>
            </div>
          </button>

          <button
            onClick={() => onNavigateTab('learn')}
            className="p-4 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-700 text-white shadow-md hover:scale-[1.02] transition-transform text-left space-y-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-sm font-bold">Soil & Fertilizers</h4>
              <p className="text-[11px] text-teal-100">pH & NPK Guides</p>
            </div>
          </button>

          <button
            onClick={onOpenVoiceAssistant}
            className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md hover:scale-[1.02] transition-transform text-left space-y-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <Mic className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-bold">Voice Assistant</h4>
              <p className="text-[11px] text-amber-100">Ask Questions</p>
            </div>
          </button>

          <button
            onClick={() => onNavigateTab('crops')}
            className="p-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-md hover:scale-[1.02] transition-transform text-left space-y-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <Sprout className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h4 className="text-sm font-bold">23+ Crops Library</h4>
              <p className="text-[11px] text-indigo-100">Full Crop Guides</p>
            </div>
          </button>

        </div>
      </section>

      {/* 4. SEASONAL CROPS CAROUSEL */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Seasonal Crops Carousel</h3>
            <p className="text-xs text-slate-500">Explore crops suited for Pakistan's agricultural seasons</p>
          </div>

          <button
            onClick={() => onNavigateTab('crops')}
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Season Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {(['Rabi (Winter)', 'Kharif (Summer)', 'Zaid (Spring/Autumn)'] as SeasonType[]).map((season) => (
            <button
              key={season}
              onClick={() => setActiveSeason(season)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeSeason === season
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              {season}
            </button>
          ))}
        </div>

        {/* Crops Horizontal Scroll Cards */}
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-2">
          {seasonalCrops.map((crop) => (
            <motion.div
              key={crop.id}
              whileHover={{ y: -4 }}
              onClick={() => onSelectCrop(crop)}
              className="w-60 shrink-0 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer group"
            >
              <div className="relative h-36 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={crop.imageUrl}
                  alt={crop.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-lg bg-slate-950/70 backdrop-blur-md text-white text-[10px] font-semibold">
                  {crop.category}
                </span>
              </div>

              <div className="p-3.5 space-y-1.5">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {crop.name}
                  </h4>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-urdu">
                    {crop.urduName}
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                  Sowing: {crop.sowingTime}
                </p>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. FARMING TIP OF THE DAY CARD */}
      <section className="p-6 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-700 text-white shadow-lg space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-300" /> Farming Tip of the Day
          </span>
          <button
            onClick={() => setTipIndex((prev) => (prev + 1) % FARMING_TIPS.length)}
            className="text-xs text-emerald-100 hover:text-white underline font-semibold"
          >
            Next Tip →
          </button>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white">
            {FARMING_TIPS[tipIndex].title} <span className="font-urdu text-amber-200">({FARMING_TIPS[tipIndex].urduTitle})</span>
          </h4>
          <p className="text-sm text-emerald-50 mt-1 leading-relaxed">
            "{FARMING_TIPS[tipIndex].tip}"
          </p>
          <p className="text-xs font-urdu text-amber-100 mt-2 bg-black/10 p-2.5 rounded-xl border border-white/10">
            "{FARMING_TIPS[tipIndex].urduTip}"
          </p>
        </div>
      </section>

      {/* 6. RECENTLY VIEWED CROPS (IF ANY) */}
      {recentCropObjects.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Recently Viewed Crops</h3>
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
            {recentCropObjects.map((crop) => (
              <button
                key={crop.id}
                onClick={() => onSelectCrop(crop)}
                className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500 transition-colors shrink-0"
              >
                <img src={crop.imageUrl} alt={crop.name} className="w-8 h-8 rounded-lg object-cover" />
                <div className="text-left">
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">{crop.name}</span>
                  <span className="text-[10px] text-slate-500 block">{crop.category}</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* 7. PAKISTANI AGRICULTURE FACTS HIGHLIGHTS */}
      <section className="space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" /> Did You Know? (Pakistani Agriculture Facts)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {AGRI_FACTS.map((fact) => (
            <div
              key={fact.id}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1.5"
            >
              <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-400">{fact.title}</h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{fact.fact}</p>
              <p className="text-[11px] font-urdu text-amber-800 dark:text-amber-300 pt-1">{fact.urduFact}</p>
              <span className="text-[10px] text-slate-400 block pt-1">Source: {fact.source}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
