import React, { useState } from 'react';
import { 
  X, Heart, Share2, Calendar, Thermometer, Droplets, FlaskConical, Bug, 
  Leaf, Award, Volume2, Sparkles, CheckCircle2, AlertTriangle, ShieldCheck 
} from 'lucide-react';
import { Crop } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface CropDetailModalProps {
  crop: Crop | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (cropId: string) => void;
  showUrdu: boolean;
}

export const CropDetailModal: React.FC<CropDetailModalProps> = ({
  crop,
  onClose,
  isFavorite,
  onToggleFavorite,
  showUrdu,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'soil' | 'fertilizer' | 'pests' | 'organic' | 'facts'>('overview');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!crop) return null;

  const handleSpeakSummary = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
        return;
      }

      const text = `${crop.name}, ${crop.urduName}. Category: ${crop.category}. Growing season: ${crop.season}. Sowing time: ${crop.sowingTime}. Harvesting: ${crop.harvestingTime}. Soil required: ${crop.soilType}. ${crop.description}`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      setIsPlayingAudio(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto border border-slate-200 dark:border-slate-800"
        >
          {/* Header Banner Image */}
          <div className="relative h-56 sm:h-72 w-full bg-slate-800 overflow-hidden shrink-0">
            <img
              src={crop.heroImage || crop.imageUrl}
              alt={crop.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

            {/* Top Action Buttons */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={() => onToggleFavorite(crop.id)}
                className={`p-2.5 rounded-full backdrop-blur-md transition-transform active:scale-90 ${
                  isFavorite 
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30' 
                    : 'bg-white/30 text-white hover:bg-white/40'
                }`}
                title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>

              <button
                onClick={handleSpeakSummary}
                className={`p-2.5 rounded-full backdrop-blur-md transition-all ${
                  isPlayingAudio 
                    ? 'bg-emerald-500 text-white animate-pulse' 
                    : 'bg-white/30 text-white hover:bg-white/40'
                }`}
                title="Listen to Crop Summary"
              >
                <Volume2 className="w-5 h-5" />
              </button>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white/30 hover:bg-white/40 text-white backdrop-blur-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Crop Titles on Banner */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/90 text-white border border-emerald-400/30">
                  {crop.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/90 text-white border border-amber-400/30">
                  {crop.season}
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {crop.name} <span className="text-amber-300 font-urdu">({crop.urduName})</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 italic font-medium">
                    {crop.scientificName} • Family: {crop.family}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Navigation Tabs */}
          <div className="flex items-center gap-1 p-2 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar shrink-0">
            {[
              { id: 'overview', label: 'Overview', icon: Calendar },
              { id: 'soil', label: 'Soil & Water', icon: Droplets },
              { id: 'fertilizer', label: 'Fertilizers', icon: FlaskConical },
              { id: 'pests', label: 'Pests & Diseases', icon: Bug },
              { id: 'organic', label: 'Organic & Tips', icon: Leaf },
              { id: 'facts', label: 'Economics & Facts', icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-sm border border-slate-200 dark:border-slate-700'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Modal Tab Content Area */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
            
            {/* 1. OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal bg-emerald-50/50 dark:bg-emerald-950/20 p-3.5 rounded-2xl border border-emerald-100 dark:border-emerald-900/40">
                  {crop.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Sowing Time</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      {crop.sowingTime}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Harvesting Time</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-600" />
                      {crop.harvestingTime}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Recommended Seed Rate</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                      <Sparkles className="w-4 h-4 text-teal-600" />
                      {crop.seedRate}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800">
                  <h4 className="text-xs font-bold uppercase text-emerald-800 dark:text-emerald-300 tracking-wider mb-2">
                    Suitable Climate & Growing Conditions
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {crop.suitableClimate}
                  </p>
                </div>
              </div>
            )}

            {/* 2. SOIL & WATER TAB */}
            {activeTab === 'soil' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40">
                    <h4 className="text-xs font-bold uppercase text-amber-800 dark:text-amber-300 mb-1 flex items-center gap-1.5">
                      <Leaf className="w-4 h-4" /> Soil Requirements
                    </h4>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mt-1">{crop.soilType}</p>
                    <div className="mt-2 inline-block px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-xs font-medium text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                      Optimal Soil pH: <span className="font-bold">{crop.soilPh}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40">
                    <h4 className="text-xs font-bold uppercase text-blue-800 dark:text-blue-300 mb-1 flex items-center gap-1.5">
                      <Droplets className="w-4 h-4" /> Water & Irrigation
                    </h4>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mt-1">{crop.waterRequirements}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
                      <span className="font-semibold text-blue-900 dark:text-blue-300">Method:</span> {crop.irrigationMethod}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <h4 className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
                    <Thermometer className="w-4 h-4 text-rose-500" /> Temperature Range
                  </h4>
                  <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">
                    {crop.temperatureRange}
                  </p>
                </div>
              </div>
            )}

            {/* 3. FERTILIZER TAB */}
            {activeTab === 'fertilizer' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                  <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2 mb-2">
                    <FlaskConical className="w-5 h-5 text-emerald-600" /> Recommended Fertilizer Plan (Per Acre)
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/50">
                    {crop.fertilizerRecommendation}
                  </p>
                  <p className="text-xs text-emerald-800 dark:text-emerald-400 mt-2 italic">
                    *Tip: Always apply 100% of DAP (Phosphorus) at sowing time. Apply Urea in 2-3 split doses during early irrigation stages.
                  </p>
                </div>
              </div>
            )}

            {/* 4. PESTS & DISEASES TAB */}
            {activeTab === 'pests' && (
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                  Common Pests & Disease Management
                </h4>
                {crop.commonPests.map((pest, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        {pest.type === 'Pest' ? <Bug className="w-4 h-4 text-amber-500" /> : <AlertTriangle className="w-4 h-4 text-rose-500" />}
                        {pest.name}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${pest.type === 'Pest' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'}`}>
                        {pest.type}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      <span className="font-semibold text-slate-900 dark:text-white">Symptoms:</span> {pest.symptoms}
                    </p>
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      <span className="font-semibold text-emerald-700 dark:text-emerald-400">Prevention:</span> {pest.prevention}
                    </p>
                    <p className="text-xs text-slate-700 dark:text-slate-300 bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                      <span className="font-semibold text-emerald-800 dark:text-emerald-300">Organic Remedy:</span> {pest.organicTreatment}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* 5. ORGANIC & TIPS TAB */}
            {activeTab === 'organic' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40">
                  <h4 className="text-sm font-bold text-teal-900 dark:text-teal-300 flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-5 h-5 text-teal-600" /> Recommended Organic Practices
                  </h4>
                  <ul className="space-y-1.5">
                    {crop.organicPractices.map((practice, i) => (
                      <li key={i} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40">
                  <h4 className="text-sm font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-amber-600" /> Key Farming Tips for High Yield
                  </h4>
                  <ul className="space-y-1.5">
                    {crop.farmingTips.map((tip, i) => (
                      <li key={i} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 6. ECONOMICS & FACTS TAB */}
            {activeTab === 'facts' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <h4 className="text-xs font-bold uppercase text-slate-500 mb-1">Economic Importance in Pakistan</h4>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                    {crop.economicImportance}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <h4 className="text-xs font-bold uppercase text-slate-500 mb-1">Nutritional Value</h4>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {crop.nutritionalValue}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">Did You Know?</h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-50">
                    {crop.interestingFacts.map((fact, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-300 font-bold">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

          </div>

          {/* Footer Close */}
          <div className="p-3 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
            >
              Close Guide
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
