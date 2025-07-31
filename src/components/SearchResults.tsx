/**
 * Search results component displaying filtered ML resources
 * Shows PDFs, YouTube videos, and web links in card format
 */

import React, { useState } from 'react';
import { SearchResult, SearchFilters } from '../types';
import { 
  FileText, 
  Youtube, 
  ExternalLink, 
  Download, 
  Eye, 
  Clock, 
  HardDrive, 
  User, 
  Star,
  Calendar,
  Play,
  Filter,
  X
} from 'lucide-react';
import { categories, contentTypes, sortOptions } from '../data/mockData';

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ 
  results, 
  query, 
  filters, 
  onFiltersChange 
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="h-5 w-5 text-red-500" />;
      case 'youtube':
        return <Youtube className="h-5 w-5 text-red-600" />;
      case 'web':
        return <ExternalLink className="h-5 w-5 text-blue-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'youtube':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'web':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handlePdfAction = (url: string, title: string, action: 'view' | 'download') => {
    if (action === 'download') {
      // Simulate PDF download
      const link = document.createElement('a');
      link.href = url;
      link.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Open PDF viewer (in real app, this would open a modal or new tab)
      window.open(url, '_blank');
    }
  };

  const clearFilters = () => {
    onFiltersChange({
      category: 'All Categories',
      type: 'All Types',
      sortBy: 'Relevance'
    });
  };

  if (results.length === 0) {
    return (
      <section id="search-results" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="p-12 bg-gray-50 rounded-2xl border border-gray-200">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">No results found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="search-results" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Results Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Search Results {query && `for "${query}"`}
              </h3>
              <p className="text-gray-600">
                Found {results.length} resource{results.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Filter Controls */}
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>

              <select
                value={filters.sortBy}
                onChange={(e) => onFiltersChange({ ...filters, sortBy: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    Sort by {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-800">Filter Results</h4>
                <button
                  onClick={clearFilters}
                  className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="h-4 w-4" />
                  <span>Clear All</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => onFiltersChange({ ...filters, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content Type
                  </label>
                  <select
                    value={filters.type}
                    onChange={(e) => onFiltersChange({ ...filters, type: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                  >
                    {contentTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {results.map((result) => (
              <div
                key={result.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* YouTube Thumbnail */}
                {result.type === 'youtube' && result.thumbnail && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={result.thumbnail}
                      alt={result.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(result.type)}`}>
                        {getTypeIcon(result.type)}
                        <span className="capitalize">{result.type}</span>
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-4 bg-black/50 rounded-full backdrop-blur-sm">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    {result.duration && (
                      <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{result.duration}</span>
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6">
                  {/* Type Badge for non-YouTube content */}
                  {result.type !== 'youtube' && (
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(result.type)}`}>
                        {getTypeIcon(result.type)}
                        <span className="capitalize">{result.type}</span>
                      </span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {result.category}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {result.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {result.description}
                  </p>

                  {/* Metadata */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                    {result.author && (
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{result.author}</span>
                      </div>
                    )}
                    {result.fileSize && (
                      <div className="flex items-center space-x-1">
                        <HardDrive className="h-4 w-4" />
                        <span>{result.fileSize}</span>
                      </div>
                    )}
                    {result.views && (
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{result.views} views</span>
                      </div>
                    )}
                    {result.publishedDate && (
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(result.publishedDate).toLocaleDateString()}</span>
                      </div>
                    )}
                    {result.rating && (
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{result.rating}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {result.type === 'pdf' ? (
                      <>
                        <button
                          onClick={() => handlePdfAction(result.url, result.title, 'view')}
                          className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium"
                        >
                          <Eye className="h-4 w-4" />
                          <span>View PDF</span>
                        </button>
                        <button
                          onClick={() => handlePdfAction(result.url, result.title, 'download')}
                          className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium"
                        >
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => window.open(result.url, '_blank')}
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-200 font-medium"
                      >
                        {result.type === 'youtube' ? (
                          <>
                            <Youtube className="h-4 w-4" />
                            <span>Watch Now</span>
                          </>
                        ) : (
                          <>
                            <ExternalLink className="h-4 w-4" />
                            <span>Go to Link</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResults;