/**
 * Mock data for MLHub platform
 * Contains sample ML resources for demonstration
 */

import { SearchResult, MLCategory } from '../types';

export const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    title: 'Introduction to Machine Learning - Complete Guide',
    description: 'Comprehensive PDF covering fundamentals of machine learning, algorithms, and practical applications with real-world examples.',
    type: 'pdf',
    url: 'https://example.com/ml-intro.pdf',
    category: 'Fundamentals',
    author: 'Dr. Andrew Ng',
    fileSize: '2.3 MB',
    publishedDate: '2024-01-15',
    rating: 4.8
  },
  {
    id: '2',
    title: 'Neural Networks Explained - Stanford CS229',
    description: 'Complete lecture series on neural networks and deep learning from Stanford University covering backpropagation, CNNs, and RNNs.',
    type: 'youtube',
    url: 'https://youtube.com/watch?v=example',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Deep Learning',
    author: 'Stanford CS',
    duration: '1:24:30',
    views: '2.1M',
    rating: 4.9
  },
  {
    id: '3',
    title: 'Scikit-learn Documentation - Machine Learning Library',
    description: 'Official documentation and tutorials for scikit-learn, the most popular ML library in Python with extensive examples.',
    type: 'web',
    url: 'https://scikit-learn.org/stable/',
    category: 'Tools & Libraries',
    author: 'Scikit-learn Team',
    sourceWebsite: 'scikit-learn.org',
    rating: 4.7
  },
  {
    id: '4',
    title: 'Linear Regression Analysis - Mathematical Foundations',
    description: 'Detailed mathematical explanation of linear regression with practical examples, code implementations, and statistical analysis.',
    type: 'pdf',
    url: 'https://example.com/linear-regression.pdf',
    category: 'Regression',
    author: 'MIT OpenCourseWare',
    fileSize: '1.8 MB',
    publishedDate: '2024-02-10',
    rating: 4.6
  },
  {
    id: '5',
    title: 'TensorFlow Tutorial for Beginners - Build Your First Neural Network',
    description: 'Step-by-step tutorial on building your first neural network with TensorFlow, including data preprocessing and model evaluation.',
    type: 'youtube',
    url: 'https://youtube.com/watch?v=example2',
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tools & Libraries',
    author: 'Tech with Tim',
    duration: '45:12',
    views: '856K',
    rating: 4.5
  },
  {
    id: '6',
    title: 'Kaggle Machine Learning Competitions - Practice Platform',
    description: 'Platform for machine learning competitions with datasets, community discussions, and real-world problem solving.',
    type: 'web',
    url: 'https://kaggle.com/competitions',
    category: 'Practice & Datasets',
    author: 'Kaggle',
    sourceWebsite: 'kaggle.com',
    rating: 4.8
  },
  {
    id: '7',
    title: 'K-Means Clustering Algorithm Explained',
    description: 'Comprehensive guide to K-Means clustering with mathematical derivations, implementation details, and practical applications.',
    type: 'pdf',
    url: 'https://example.com/kmeans-clustering.pdf',
    category: 'Clustering',
    author: 'Dr. Sarah Johnson',
    fileSize: '3.1 MB',
    publishedDate: '2024-01-28',
    rating: 4.4
  },
  {
    id: '8',
    title: 'Random Forest vs Decision Trees - Visual Explanation',
    description: 'Visual comparison of Random Forest and Decision Trees algorithms with interactive examples and performance metrics.',
    type: 'youtube',
    url: 'https://youtube.com/watch?v=example3',
    thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800',
    category: 'Classification',
    author: 'ML Explained',
    duration: '28:45',
    views: '1.2M',
    rating: 4.7
  }
];

export const mlCategories: MLCategory[] = [
  {
    id: 'fundamentals',
    name: 'Fundamentals',
    description: 'Basic concepts and introduction to ML',
    icon: '🎯',
    count: 45
  },
  {
    id: 'regression',
    name: 'Regression',
    description: 'Linear, polynomial, and advanced regression',
    icon: '📈',
    count: 32
  },
  {
    id: 'classification',
    name: 'Classification',
    description: 'Decision trees, SVM, and classification algorithms',
    icon: '🏷️',
    count: 38
  },
  {
    id: 'clustering',
    name: 'Clustering',
    description: 'K-means, hierarchical, and clustering methods',
    icon: '🔗',
    count: 24
  },
  {
    id: 'deep-learning',
    name: 'Deep Learning',
    description: 'Neural networks, CNNs, RNNs, and transformers',
    icon: '🧠',
    count: 56
  },
  {
    id: 'tools-libraries',
    name: 'Tools & Libraries',
    description: 'Python, R, TensorFlow, PyTorch, and more',
    icon: '🛠️',
    count: 41
  },
  {
    id: 'practice-datasets',
    name: 'Practice & Datasets',
    description: 'Kaggle, datasets, and hands-on projects',
    icon: '📊',
    count: 29
  },
  {
    id: 'research-papers',
    name: 'Research Papers',
    description: 'Latest research and academic publications',
    icon: '📄',
    count: 67
  }
];

export const categories = [
  'All Categories',
  'Fundamentals',
  'Regression',
  'Classification',
  'Clustering',
  'Deep Learning',
  'Tools & Libraries',
  'Practice & Datasets',
  'Research Papers'
];

export const contentTypes = [
  'All Types',
  'PDF',
  'YouTube',
  'Web Links'
];

export const sortOptions = [
  'Relevance',
  'Most Recent',
  'Highest Rated',
  'Most Popular'
];