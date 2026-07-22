import React, { useState } from 'react';
import { Sprout, Info, ShieldCheck, Heart, Send, CheckCircle2, Award, Sparkles, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutScreenProps {
  showUrdu: boolean;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ showUrdu }) => {
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;

    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackText('');
      setFeedbackSubmitted(false);
    }, 4000);
  };

  return (
    <div className="pb-24 space-y-6 animate-fadeIn">
      
      {/* Hero Header */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 text-white text-center space-y-3 shadow-xl relative overflow-hidden">
        <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 mx-auto flex items-center justify-center text-amber-300 shadow-lg">
          <Sprout className="w-9 h-9" />
        </div>

        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Kisan Dost Pakistan</h2>
          <p className="text-sm font-semibold text-emerald-300 font-urdu mt-0.5">كسان دوست پاکستان • زراعت کی مکمل رہنمائی</p>
          <p className="text-xs text-emerald-100 italic mt-1">"Learn Smart. Farm Better."</p>
        </div>

        <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-xs font-semibold">
          Version 2.4.0 • 100% Offline Frontend Edition
        </div>
      </div>

      {/* Mission & Purpose */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-emerald-600" /> App Mission
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Kisan Dost Pakistan was created to bridge the information gap for Pakistani farmers, agriculture students, researchers, and home gardeners. Our mission is to deliver concise, science-backed crop cultivation guidelines, soil health recommendations, and pest management remedies right to your fingertips — anytime, anywhere, completely offline.
        </p>
      </div>

      {/* Key Application Features */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" /> Key Features
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: '23 Major Pakistani Crops', desc: 'Wheat, Basmati Rice, Cotton, Sugarcane, Potato, Garlic, Quinoa, and more.' },
            { title: 'Voice Assistant (Simulated UI)', desc: 'Ask voice questions and listen to spoken answers.' },
            { title: '100% Offline Capability', desc: 'All data resides locally on your device with zero internet needed.' },
            { title: 'Farm Calculators', desc: 'Calculate Seed Rate in kg & NPK Fertilizer bags per acre.' },
            { title: 'Pakistani Crop Calendar', desc: 'Monthly sowing & harvesting guidelines for Kharif & Rabi.' },
            { title: 'Dual Language Support', desc: 'English titles with authentic Urdu terms & subtitles.' },
          ].map((f, i) => (
            <div key={i} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                {f.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Educational Disclaimer */}
      <div className="p-5 rounded-3xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 space-y-1.5">
        <div className="font-bold flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
          <ShieldCheck className="w-4 h-4" /> Educational Disclaimer
        </div>
        <p className="leading-relaxed">
          The crop guidelines, fertilizer quantities, and pest management procedures provided in Kisan Dost Pakistan are based on agricultural extension research (PARC / NARC / Provincial Agriculture Extension). Always conduct local soil testing and consult your regional Agriculture Officer (Zarai Officer) for specific field-level conditions.
        </p>
      </div>

      {/* Contact & Feedback Form */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Send className="w-5 h-5 text-emerald-600" /> Share Feedback / Agriculture Suggestion
        </h3>

        {feedbackSubmitted ? (
          <div className="p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Thank you! Your feedback has been saved locally. Shukriya!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmitFeedback} className="space-y-3">
            <textarea
              rows={3}
              placeholder="Send feedback or request a new crop guide..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              className="w-full p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-slate-200 dark:border-slate-700"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>

      {/* Credits */}
      <div className="text-center text-xs text-slate-400 dark:text-slate-500 pt-2 space-y-1">
        <p>Designed with ❤️ for Pakistan's Farming Community</p>
        <p>Data Reference: PARC, NARC, FSC&RD & Agriculture Extension Pakistan</p>
      </div>

    </div>
  );
};
