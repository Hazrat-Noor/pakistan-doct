import React, { useState } from 'react';
import { 
  BookOpen, Calculator, Sun, Layers, Sprout, FlaskConical, Droplets, Bug, 
  ShieldAlert, Leaf, Recycle, Cpu, Zap, Lightbulb, Award, Calendar, 
  HelpCircle, ChevronDown, ChevronUp, Sparkles, Check 
} from 'lucide-react';
import { EDU_ARTICLES, FAQS_DATA } from '../data/educationData';
import { EduArticle } from '../types';
import { motion } from 'motion/react';

interface EducationalSectionProps {
  showUrdu: boolean;
}

export const EducationalSection: React.FC<EducationalSectionProps> = ({ showUrdu }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>('crop-seasons');
  const [activeTab, setActiveTab] = useState<'guides' | 'calculators' | 'faqs'>('guides');

  // Calculator states
  const [calcCrop, setCalcCrop] = useState('wheat');
  const [calcAcres, setCalcAcres] = useState<number>(5);

  const categories = [
    'All', 'Crop Seasons', 'Soil Health', 'Seed Information', 
    'Fertilizers', 'Irrigation', 'Pest Control', 'Organic Farming', 
    'Modern Farming', 'Smart Agriculture'
  ];

  const filteredArticles = selectedCategory === 'All'
    ? EDU_ARTICLES
    : EDU_ARTICLES.filter(a => a.category === selectedCategory);

  // Calculator logic
  const getSeedCalcResult = () => {
    switch (calcCrop) {
      case 'wheat':
        return { seedKg: calcAcres * 50, dapBags: calcAcres * 1.5, ureaBags: calcAcres * 2 };
      case 'rice':
        return { seedKg: calcAcres * 6, dapBags: calcAcres * 1, ureaBags: calcAcres * 2 };
      case 'cotton':
        return { seedKg: calcAcres * 7, dapBags: calcAcres * 1.5, ureaBags: calcAcres * 2.5 };
      case 'maize':
        return { seedKg: calcAcres * 9, dapBags: calcAcres * 1.5, ureaBags: calcAcres * 3 };
      case 'potato':
        return { seedKg: calcAcres * 900, dapBags: calcAcres * 2, ureaBags: calcAcres * 3 };
      default:
        return { seedKg: calcAcres * 50, dapBags: calcAcres * 1.5, ureaBags: calcAcres * 2 };
    }
  };

  const calcResult = getSeedCalcResult();

  return (
    <div className="pb-24 space-y-6 animate-fadeIn">
      
      {/* Title Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-emerald-600" /> Agriculture Learning Hub
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {showUrdu 
            ? 'زرعی سائنس، زمین کی دیکھ بھال، اور جدید تکنیک کی مکمل تعلیم' 
            : 'Scientific farming guides, soil health, fertilizer scheduling & smart tools'
          }
        </p>
      </div>

      {/* Main Mode Toggle Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl">
        {[
          { id: 'guides', label: 'Educational Guides', icon: BookOpen },
          { id: 'calculators', label: 'Farm Calculators', icon: Calculator },
          { id: 'faqs', label: 'Agriculture FAQs', icon: HelpCircle },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
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

      {/* 1. EDUCATIONAL GUIDES TAB */}
      {activeTab === 'guides' && (
        <div className="space-y-4">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Accordion Stack */}
          <div className="space-y-3">
            {filteredArticles.map((article) => {
              const isExpanded = expandedArticleId === article.id;

              return (
                <div
                  key={article.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedArticleId(isExpanded ? null : article.id)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                            {article.category}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium">{article.readTime}</span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                          {article.title}
                        </h3>
                        <p className="text-xs font-urdu text-amber-600 dark:text-amber-400">
                          {article.urduTitle}
                        </p>
                      </div>
                    </div>

                    <div className="p-2 text-slate-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Expanded Article Body */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-4 sm:p-5 pt-0 border-t border-slate-100 dark:border-slate-800 space-y-4"
                    >
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl">
                        {article.summary}
                      </p>

                      {article.content.map((sec, i) => (
                        <div key={i} className="space-y-2">
                          <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
                            {sec.heading}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                            {sec.body}
                          </p>
                          {sec.bulletPoints && (
                            <ul className="space-y-1.5 pl-2 pt-1">
                              {sec.bulletPoints.map((bp, bidx) => (
                                <li key={bidx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                                  <span>{bp}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* 2. FARM CALCULATORS TAB */}
      {activeTab === 'calculators' && (
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-600" /> Seed Rate & Fertilizer Calculator
            </h3>
            <p className="text-xs text-slate-500">Calculate exact seed & NPK fertilizer requirements per acre for your farm</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Crop Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Select Target Crop</label>
              <select
                value={calcCrop}
                onChange={(e) => setCalcCrop(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-semibold border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="wheat">Wheat (گندم)</option>
                <option value="rice">Rice (چاول)</option>
                <option value="cotton">Cotton (کپاس)</option>
                <option value="maize">Maize / Corn (مکئی)</option>
                <option value="potato">Potato (آلو)</option>
              </select>
            </div>

            {/* Acres Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Land Size (Acres / ایکڑ)</label>
              <input
                type="number"
                min="1"
                max="500"
                value={calcAcres}
                onChange={(e) => setCalcAcres(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-semibold border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Calculator Output Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white space-y-4 shadow-lg">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Recommended Inputs for {calcAcres} Acres
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                <span className="text-[11px] text-emerald-100 block">Total Seed Quantity</span>
                <span className="text-xl font-extrabold text-white">{calcResult.seedKg} kg</span>
                <span className="text-[10px] text-emerald-200 block">Certified seed</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                <span className="text-[11px] text-emerald-100 block">DAP Fertilizer (Phosphorus)</span>
                <span className="text-xl font-extrabold text-amber-300">{calcResult.dapBags} Bags</span>
                <span className="text-[10px] text-emerald-200 block">Apply 100% at sowing</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                <span className="text-[11px] text-emerald-100 block">Urea Fertilizer (Nitrogen)</span>
                <span className="text-xl font-extrabold text-white">{calcResult.ureaBags} Bags</span>
                <span className="text-[10px] text-emerald-200 block">Apply in split doses</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. FAQS TAB */}
      {activeTab === 'faqs' && (
        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
            <h3 className="text-base font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-600" /> Frequently Asked Agriculture Questions
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Verified solutions based on PARC & Agriculture Extension guidelines</p>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq) => (
              <div
                key={faq.id}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-[10px] font-bold">
                    {faq.category}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Q: {faq.question}
                </h4>
                <p className="text-xs font-urdu text-amber-600 dark:text-amber-400">
                  س: {faq.urduQuestion}
                </p>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800 leading-relaxed">
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">Answer:</span> {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
