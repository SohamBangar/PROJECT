/**
 * Reusable search bar component for footer and other sections
 * Provides consistent search functionality across the platform
 */

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SearchFilters } from '../types';

interface SearchBarProps {
  onSearch: (query: string, filters: SearchFilters) => void;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Search ML resources...",
  size = 'medium',
  className = ''
}) => {
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

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'pl-10 pr-4 py-2 text-sm';
      case 'large':
        return 'pl-14 pr-6 py-4 text-lg';
      default:
        return 'pl-12 pr-4 py-3 text-base';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'small':
        return 'h-4 w-4';
      case 'large':
        return 'h-6 w-6';
      default:
        return 'h-5 w-5';
    }
  };

  const getIconPosition = () => {
    switch (size) {
      case 'small':
        return 'pl-3';
      case 'large':
        return 'pl-5';
      default:
        return 'pl-4';
    }
  };

  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <div className="relative group">
        <div className={`absolute inset-y-0 left-0 ${getIconPosition()} flex items-center pointer-events-none`}>
          <Search className={`${getIconSize()} text-gray-400 group-focus-within:text-blue-500 transition-colors`} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`w-full ${getSizeClasses()} border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200`}
        />
        <button
          type="submit"
          className={`absolute right-1 top-1 bottom-1 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium rounded-md hover:from-blue-700 hover:to-teal-700 transition-all duration-200 ${
            size === 'small' ? 'text-xs' : size === 'large' ? 'text-base' : 'text-sm'
          }`}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;