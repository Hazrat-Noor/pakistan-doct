import React, { useState } from 'react';
import { Search, Filter, Heart, Wheat, Calendar, ChevronRight, Check } from 'lucide-react';
import { CROPS_DATA } from '../data/cropsData';
import { Crop, CategoryType, SeasonType } from '../types';
import { motion } from 'motion/react';

interface CropLibraryProps {
  onSelectCrop: (crop: Crop) => void;
  favorites: string[];
  onToggleFavorite: (cropId: string) => void;
  showUrdu: boolean;
}

export const CropLibrary: React.FC<CropLibraryProps> = ({
  onSelectCrop,
  favorites,
  onToggleFavorite,
  showUrdu,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSeason, setSelectedSeason] = useState<string>('All');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const categories = ['All', 'Cereals', 'Vegetables', 'Pulses', 'Oilseed Crops', 'Cash Crops'];
  const seasons = ['All', 'Rabi (Winter)', 'Kharif (Summer)', 'Zaid (Spring/Autumn)'];

  // Filter logic
  const filteredCrops = CROPS_DATA.filter((crop) => {
    const matchesSearch =
      crop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crop.urduName.includes(searchQuery) ||
      crop.scientificName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || crop.category === selectedCategory;
    const matchesSeason = selectedSeason === 'All' || crop.season === selectedSeason || crop.season === 'All Seasons';
    const matchesFavorite = !showOnlyFavorites || favorites.includes(crop.id);

    return matchesSearch && matchesCategory && matchesSeason && matchesFavorite;
  });

  return (
    <div className="pb-24 space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Wheat className="w-6 h-6 text-emerald-600" /> Complete Crop Library
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {showUrdu 
                ? 'پاکستان کی ۲۳ اہم فصلوں کی تفصیلی کاشت کی معلومات' 
                : 'Comprehensive guides for 23 major Pakistani crops'
              }
            </p>
          </div>

          <button
            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
              showOnlyFavorites
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <Heart className={`w-4 h-4 ${showOnlyFavorites ? 'fill-current' : ''}`} />
            <span>Saved ({favorites.length})</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search wheat, rice, potato, cotton, tomato..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase text-slate-500">Categories</span>
          <span className="text-xs text-slate-400">Showing {filteredCrops.length} of {CROPS_DATA.length} Crops</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Season Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        <span className="text-xs font-bold text-slate-400 shrink-0">Season:</span>
        {seasons.map((season) => (
          <button
            key={season}
            onClick={() => setSelectedSeason(season)}
            className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedSeason === season
                ? 'bg-amber-500 text-white font-bold'
                : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400'
            }`}
          >
            {season}
          </button>
        ))}
      </div>

      {/* Crop Cards Grid */}
      {filteredCrops.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCrops.map((crop) => {
            const isFav = favorites.includes(crop.id);

            return (
              <motion.div
                key={crop.id}
                whileHover={{ y: -3 }}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                {/* Image Banner */}
                <div 
                  onClick={() => onSelectCrop(crop)}
                  className="relative h-44 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden cursor-pointer"
                >
                  <img
                    src={crop.imageUrl}
                    alt={crop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-600/90 text-white text-[10px] font-bold">
                      {crop.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/90 text-white text-[10px] font-bold">
                      {crop.season}
                    </span>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(crop.id);
                    }}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-transform active:scale-90 ${
                      isFav ? 'bg-rose-500 text-white' : 'bg-black/30 text-white hover:bg-black/50'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                  </button>

                  {/* Crop Title on Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-lg font-extrabold tracking-tight">
                        {crop.name}
                      </h3>
                      <span className="text-sm font-bold font-urdu text-amber-300">
                        {crop.urduName}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 italic font-medium">
                      {crop.scientificName}
                    </p>
                  </div>
                </div>

                {/* Card Bottom Details */}
                <div 
                  onClick={() => onSelectCrop(crop)}
                  className="p-3.5 space-y-2 cursor-pointer"
                >
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-xl">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Sowing</span>
                      <span className="font-semibold text-slate-900 dark:text-white truncate block">{crop.sowingTime}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Harvesting</span>
                      <span className="font-semibold text-slate-900 dark:text-white truncate block">{crop.harvestingTime}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <span>View Complete Guide</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
          <p className="text-sm font-bold text-slate-700 dark:text-slate-300">No crops found matching your filters.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedSeason('All');
              setShowOnlyFavorites(false);
            }}
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
};
