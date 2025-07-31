/**
 * TypeScript type definitions for MLHub platform
 * Defines the structure of search results and filters
 */

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'youtube' | 'web';
  url: string;
  thumbnail?: string;
  category: string;
  author?: string;
  duration?: string;
  fileSize?: string;
  publishedDate?: string;
  rating?: number;
  views?: string;
  sourceWebsite?: string;
}

export interface SearchFilters {
  category: string;
  type: string;
  sortBy: string;
}

export interface MLCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}