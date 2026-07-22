import React, { useState } from 'react';
import { Mic, X, Sparkles, Volume2, ArrowRight, RefreshCw, Send, CheckCircle2 } from 'lucide-react';
import { VOICE_QUESTIONS } from '../data/voiceAssistantData';
import { VoiceQuestion } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface VoiceAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCrop: (cropId: string) => void;
  showUrdu: boolean;
}

export const VoiceAssistantModal: React.FC<VoiceAssistantModalProps> = ({
  isOpen,
  onClose,
  onSelectCrop,
  showUrdu,
}) => {
  const [isListening, setIsListening] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState<VoiceQuestion | null>(null);
  const [customInput, setCustomInput] = useState('');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!isOpen) return null;

  const handleSimulatedListen = (questionObj?: VoiceQuestion) => {
    setIsListening(true);
    setSelectedResponse(null);

    setTimeout(() => {
      setIsListening(false);
      if (questionObj) {
        setSelectedResponse(questionObj);
      } else {
        // Find best match or default to wheat
        const matched = VOICE_QUESTIONS.find(q => 
          customInput.toLowerCase().includes(q.question.toLowerCase().slice(0, 5))
        ) || VOICE_QUESTIONS[0];
        setSelectedResponse(matched);
      }
    }, 1500);
  };

  const handleTextToSpeech = (text: string) => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
        return;
      }

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-emerald-100 dark:border-slate-800 p-6 flex flex-col my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/20">
                <Mic className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  Kisan Dost Voice Assistant <Sparkles className="w-4 h-4 text-amber-400" />
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {showUrdu ? 'آواز سے زرعی سوالات پوچھیں (Simulated Voice Assistant)' : 'Tap microphone or choose example question below'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Section */}
          <div className="py-6 flex flex-col items-center justify-center space-y-6">

            {/* Central Animated Mic Sphere */}
            <div className="relative flex items-center justify-center">
              {isListening && (
                <>
                  <motion.div
                    animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute inset-0 rounded-full bg-emerald-400/40 dark:bg-emerald-500/30"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.2, 0.8] }}
                    transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
                    className="absolute inset-0 rounded-full bg-teal-400/40 dark:bg-teal-500/30"
                  />
                </>
              )}

              <button
                onClick={() => handleSimulatedListen()}
                disabled={isListening}
                className={`relative z-10 w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-xl transition-all duration-300 ${
                  isListening
                    ? 'bg-rose-500 text-white scale-105'
                    : 'bg-gradient-to-tr from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white hover:scale-105 active:scale-95'
                }`}
              >
                <Mic className={`w-8 h-8 ${isListening ? 'animate-bounce' : ''}`} />
                <span className="text-[10px] font-bold tracking-wider uppercase mt-1">
                  {isListening ? 'Listening...' : 'Tap To Speak'}
                </span>
              </button>
            </div>

            {/* Listening Indicator */}
            {isListening && (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 animate-pulse">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Processing Pakistani Voice Audio Input...</span>
              </div>
            )}

            {/* Simulated Response Box */}
            {selectedResponse && !isListening && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full p-4 sm:p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Answer Received
                  </span>
                  <button
                    onClick={() => handleTextToSpeech(selectedResponse.answer)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-semibold transition-colors ${
                      isPlayingAudio
                        ? 'bg-emerald-600 text-white animate-pulse'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isPlayingAudio ? 'Speaking...' : 'Listen'}</span>
                  </button>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Question:</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    "{selectedResponse.question}" <span className="font-urdu text-emerald-600 dark:text-emerald-400">({selectedResponse.urduQuestion})</span>
                  </p>
                </div>

                <div className="pt-2 border-t border-emerald-200/60 dark:border-emerald-800/60">
                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    {selectedResponse.answer}
                  </p>
                  <p className="text-xs font-urdu text-emerald-800 dark:text-emerald-300 mt-2 p-2 bg-emerald-100/50 dark:bg-emerald-900/30 rounded-xl">
                    {selectedResponse.urduAnswer}
                  </p>
                </div>

                {selectedResponse.relatedCropId && (
                  <button
                    onClick={() => {
                      onClose();
                      onSelectCrop(selectedResponse.relatedCropId!);
                    }}
                    className="w-full mt-2 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>View Complete Crop Guide for {selectedResponse.category}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </motion.div>
            )}

            {/* Sample Question Chips */}
            <div className="w-full space-y-2">
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Or Tap Example Questions:
              </p>
              <div className="flex flex-wrap gap-2">
                {VOICE_QUESTIONS.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleSimulatedListen(q)}
                    className="text-left text-xs font-medium px-3 py-2 rounded-xl bg-slate-100 hover:bg-emerald-100 dark:bg-slate-800 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-300 hover:text-emerald-900 dark:hover:text-emerald-300 transition-colors border border-slate-200 dark:border-slate-700"
                  >
                    "{q.question}" <span className="font-urdu text-amber-600 dark:text-amber-400">({q.urduQuestion})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input Simulation */}
            <div className="w-full flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              <input
                type="text"
                placeholder="Or type a question (e.g., wheat sowing time...)"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && customInput && handleSimulatedListen()}
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                onClick={() => customInput && handleSimulatedListen()}
                className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
