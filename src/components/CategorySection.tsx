/**
 * Category section component displaying ML topic categories
 * Allows users to browse resources by specific ML domains
 */

import React from 'react';
import { mlCategories } from '../data/mockData';
import { SearchFilters } from '../types';

interface CategorySectionProps {
  onCategorySelect: (category: string, filters: SearchFilters) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ onCategorySelect }) => {
  const handleCategoryClick = (categoryName: string) => {
    onCategorySelect('', {
      category: categoryName,
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
  };

  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Explore ML Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse machine learning resources organized by topic areas to find exactly what you need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {mlCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="inline-flex items-center justify-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {category.count} resources
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;