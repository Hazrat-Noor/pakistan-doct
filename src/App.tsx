/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BottomNav, TabType } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { CropLibrary } from './components/CropLibrary';
import { EducationalSection } from './components/EducationalSection';
import { TipsAndCalendarSection } from './components/TipsAndCalendarSection';
import { AboutScreen } from './components/AboutScreen';
import { CropDetailModal } from './components/CropDetailModal';
import { VoiceAssistantModal } from './components/VoiceAssistantModal';
import { Crop } from './types';
import { CROPS_DATA } from './data/cropsData';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [showUrdu, setShowUrdu] = useState<boolean>(true);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('kisan_dost_theme') === 'dark';
  });

  const [selectedCropModal, setSelectedCropModal] = useState<Crop | null>(null);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState<boolean>(false);

  // Local storage state for favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('kisan_dost_favorites');
    return saved ? JSON.parse(saved) : ['wheat', 'rice', 'cotton'];
  });

  // Local storage state for recently viewed crops
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>(() => {
    const saved = localStorage.getItem('kisan_dost_recent');
    return saved ? JSON.parse(saved) : ['wheat', 'rice', 'potato'];
  });

  // Effect for dark mode class on <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('kisan_dost_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('kisan_dost_theme', 'light');
    }
  }, [isDarkMode]);

  // Effect for saving favorites
  useEffect(() => {
    localStorage.setItem('kisan_dost_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Effect for saving recently viewed
  useEffect(() => {
    localStorage.setItem('kisan_dost_recent', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const handleToggleFavorite = (cropId: string) => {
    setFavorites(prev => 
      prev.includes(cropId) ? prev.filter(id => id !== cropId) : [...prev, cropId]
    );
  };

  const handleSelectCrop = (crop: Crop) => {
    // Add to recently viewed
    setRecentlyViewed(prev => {
      const filtered = prev.filter(id => id !== crop.id);
      return [crop.id, ...filtered].slice(0, 8);
    });

    setSelectedCropModal(crop);
  };

  const handleSelectCropById = (cropId: string) => {
    const found = CROPS_DATA.find(c => c.id === cropId);
    if (found) {
      handleSelectCrop(found);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      
      {/* Top Sticky Navigation */}
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenVoiceAssistant={() => setIsVoiceModalOpen(true)}
        onSearchClick={() => setActiveTab('crops')}
        showUrdu={showUrdu}
        setShowUrdu={setShowUrdu}
      />

      {/* Main Screen Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {activeTab === 'home' && (
          <HomeScreen
            onSelectCrop={handleSelectCrop}
            onNavigateTab={(tab) => setActiveTab(tab as TabType)}
            onOpenVoiceAssistant={() => setIsVoiceModalOpen(true)}
            favorites={favorites}
            recentlyViewed={recentlyViewed}
            showUrdu={showUrdu}
          />
        )}

        {activeTab === 'crops' && (
          <CropLibrary
            onSelectCrop={handleSelectCrop}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            showUrdu={showUrdu}
          />
        )}

        {activeTab === 'learn' && (
          <EducationalSection showUrdu={showUrdu} />
        )}

        {activeTab === 'tips' && (
          <TipsAndCalendarSection showUrdu={showUrdu} />
        )}

        {activeTab === 'about' && (
          <AboutScreen showUrdu={showUrdu} />
        )}
      </main>

      {/* Material 3 Bottom Navigation Bar */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showUrdu={showUrdu}
      />

      {/* Crop Detail Modal */}
      <CropDetailModal
        crop={selectedCropModal}
        onClose={() => setSelectedCropModal(null)}
        isFavorite={selectedCropModal ? favorites.includes(selectedCropModal.id) : false}
        onToggleFavorite={handleToggleFavorite}
        showUrdu={showUrdu}
      />

      {/* Voice Assistant Modal (Frontend UI) */}
      <VoiceAssistantModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        onSelectCrop={handleSelectCropById}
        showUrdu={showUrdu}
      />

    </div>
  );
}
