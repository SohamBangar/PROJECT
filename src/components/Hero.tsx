/**
 * Hero section component with main search functionality
 * Features gradient background and central search bar
 */

import React, { useState } from 'react';
import { Search, Sparkles, TrendingUp, BookOpen, Video } from 'lucide-react';
import { SearchFilters } from '../types';

interface HeroProps {
  onSearch: (query: string, filters: SearchFilters) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query, {
        category: 'All Categories',
        type: 'All Types',
        sortBy: 'Relevance'
      });
      // Smooth scroll to results
      setTimeout(() => {
        const resultsSection = document.getElementById('search-results');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const popularSearches = [
    'Neural Networks',
    'Linear Regression',
    'Deep Learning',
    'K-Means Clustering',
    'TensorFlow Tutorial'
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-teal-800 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Hero Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 shadow-2xl">
              <Sparkles className="h-16 w-16 text-yellow-400" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              MLHub
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-blue-100 font-medium">
              Machine Learning Resource Platform
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Your comprehensive hub for machine learning resources. Find PDFs, videos, and web content 
            all in one place to accelerate your ML journey.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for ML topics, algorithms, tutorials..."
                className="w-full pl-16 pr-6 py-6 text-lg text-gray-800 bg-white/95 backdrop-blur-sm border-2 border-white/20 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 outline-none transition-all duration-300 shadow-2xl"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Search
              </button>
            </div>
          </form>

          {/* Popular Searches */}
          <div className="mb-12">
            <p className="text-blue-200 mb-4 font-medium">Popular Searches:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setQuery(search);
                    onSearch(search, {
                      category: 'All Categories',
                      type: 'All Types',
                      sortBy: 'Relevance'
                    });
                  }}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <BookOpen className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">📄 PDF Resources</h3>
              <p className="text-blue-200 text-sm">View inline or download ML papers and guides</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Video className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">🎥 Video Tutorials</h3>
              <p className="text-blue-200 text-sm">Watch embedded YouTube ML tutorials</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <TrendingUp className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">🌐 Web Resources</h3>
              <p className="text-blue-200 text-sm">Access curated ML websites and tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;