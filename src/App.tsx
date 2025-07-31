/**
 * Main App component for MLHub platform
 * Orchestrates all components and manages global state
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import SearchResults from './components/SearchResults';
import About from './components/About';
import Footer from './components/Footer';
import { SearchResult, SearchFilters } from './types';
import { mockSearchResults } from './data/mockData';

function App() {
  // State management for search functionality
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearched, setIsSearched] = useState(false);
  const [currentQuery, setCurrentQuery] = useState('');
  const [currentFilters, setCurrentFilters] = useState<SearchFilters>({
    category: 'All Categories',
    type: 'All Types',
    sortBy: 'Relevance'
  });

  /**
   * Main search handler - filters and sorts results based on query and filters
   */
  const handleSearch = (query: string, filters: SearchFilters) => {
    let filteredResults = [...mockSearchResults];

    // Filter by search query (title, description, category, author)
    if (query.trim()) {
      const searchTerm = query.toLowerCase();
      filteredResults = filteredResults.filter(result =>
        result.title.toLowerCase().includes(searchTerm) ||
        result.description.toLowerCase().includes(searchTerm) ||
        result.category.toLowerCase().includes(searchTerm) ||
        result.author?.toLowerCase().includes(searchTerm)
      );
    }

    // Filter by category
    if (filters.category !== 'All Categories') {
      filteredResults = filteredResults.filter(result =>
        result.category === filters.category
      );
    }

    // Filter by content type
    if (filters.type !== 'All Types') {
      const typeMap: { [key: string]: string } = {
        'PDF': 'pdf',
        'YouTube': 'youtube',
        'Web Links': 'web'
      };
      const filterType = typeMap[filters.type];
      if (filterType) {
        filteredResults = filteredResults.filter(result =>
          result.type === filterType
        );
      }
    }

    // Sort results based on selected option
    switch (filters.sortBy) {
      case 'Most Recent':
        filteredResults.sort((a, b) => {
          const dateA = new Date(a.publishedDate || '2024-01-01').getTime();
          const dateB = new Date(b.publishedDate || '2024-01-01').getTime();
          return dateB - dateA;
        });
        break;
      case 'Highest Rated':
        filteredResults.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'Most Popular':
        filteredResults.sort((a, b) => {
          const viewsA = parseInt(a.views?.replace(/[^\d]/g, '') || '0');
          const viewsB = parseInt(b.views?.replace(/[^\d]/g, '') || '0');
          return viewsB - viewsA;
        });
        break;
      default:
        // Keep original order for relevance
        break;
    }

    // Update state
    setSearchResults(filteredResults);
    setIsSearched(true);
    setCurrentQuery(query);
    setCurrentFilters(filters);
  };

  /**
   * Handle filter changes from SearchResults component
   */
  const handleFiltersChange = (newFilters: SearchFilters) => {
    handleSearch(currentQuery, newFilters);
  };

  /**
   * Smooth scroll effect for navigation links
   */
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with navigation */}
      <Header />
      
      {/* Hero section with main search */}
      <Hero onSearch={handleSearch} />
      
      {/* Category browsing section */}
      <CategorySection onCategorySelect={handleSearch} />
      
      {/* Search results (only shown after search) */}
      {isSearched && (
        <SearchResults 
          results={searchResults} 
          query={currentQuery}
          filters={currentFilters}
          onFiltersChange={handleFiltersChange}
        />
      )}
      
      {/* About section */}
      <About />
      
      {/* Footer with bottom search bar */}
      <Footer onSearch={handleSearch} />
    </div>
  );
}

export default App;