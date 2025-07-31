/**
 * Header component for MLHub platform
 * Contains navigation and branding
 */

import React from 'react';
import { Brain, BookOpen, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <Brain className="h-8 w-8 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                MLHub
              </h1>
              <p className="text-blue-200 text-sm font-medium">Machine Learning Resource Platform</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-blue-200 hover:text-white transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#categories" className="text-blue-200 hover:text-white transition-colors duration-200 font-medium">
              Categories
            </a>
            <a href="#about" className="text-blue-200 hover:text-white transition-colors duration-200 font-medium">
              About
            </a>
            <div className="flex items-center space-x-2 text-blue-200">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm font-medium">College Project</span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;