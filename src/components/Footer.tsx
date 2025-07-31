/**
 * Footer component with quick links, search bar, and project credits
 * Includes bottom search functionality as requested
 */

import React from 'react';
import { Brain, Github, Mail, BookOpen, ExternalLink, Heart } from 'lucide-react';
import SearchBar from './SearchBar';
import { SearchFilters } from '../types';

interface FooterProps {
  onSearch: (query: string, filters: SearchFilters) => void;
}

const Footer: React.FC<FooterProps> = ({ onSearch }) => {
  const quickLinks = [
    { name: 'Fundamentals', href: '#fundamentals' },
    { name: 'Deep Learning', href: '#deep-learning' },
    { name: 'Algorithms', href: '#algorithms' },
    { name: 'Tools & Libraries', href: '#tools' }
  ];

  const resourceTypes = [
    { name: 'PDF Resources', href: '#pdf' },
    { name: 'Video Tutorials', href: '#videos' },
    { name: 'Web Links', href: '#web' },
    { name: 'Research Papers', href: '#papers' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Quick Search Section */}
      <div className="bg-gradient-to-r from-blue-800 to-teal-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Quick Search</h3>
            <p className="text-blue-100 mb-6">
              Need to find something specific? Search again from here!
            </p>
            <SearchBar 
              onSearch={onSearch}
              placeholder="Search for ML topics, algorithms, tutorials..."
              size="large"
              className="max-w-2xl mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <Brain className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                    MLHub
                  </h3>
                  <p className="text-gray-400 text-sm">Machine Learning Resource Platform</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Your comprehensive platform for discovering machine learning resources, 
                tutorials, and research materials. Built by students, for students.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:contact@mlhub.com"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="#about"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <BookOpen className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">ML Categories</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resource Types */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Resource Types</h4>
              <ul className="space-y-3">
                {resourceTypes.map((type, index) => (
                  <li key={index}>
                    <a 
                      href={type.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span>{type.name}</span>
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© 2024 MLHub - College Project</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500" />
                <span>for ML Students</span>
              </span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Built with React + TypeScript + Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;