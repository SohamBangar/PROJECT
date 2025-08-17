/**
 * About section component explaining the MLHub project
 * Contains project information, team details, and purpose
 */

import React from 'react';
import { Brain, Target, Users, Lightbulb, BookOpen, Code, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'Comprehensive Resources',
      description: 'Access PDFs, videos, and web content all in one platform'
    },
    {
      icon: <Target className="h-8 w-8 text-teal-600" />,
      title: 'Smart Search',
      description: 'Advanced filtering and categorization for precise results'
    },
    {
      icon: <Code className="h-8 w-8 text-yellow-600" />,
      title: 'Modern Technology',
      description: 'Built with React, TypeScript, and Tailwind CSS'
    }
  ];

  const teamMembers = [
    {
      name: 'Soham Bangar',
      role: 'Btech ',
      description: 'E&TC Student passionate about ML and web development'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl">
                <Brain className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              About MLHub
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive machine learning resource platform designed to help students 
              find reliable ML content in one centralized location.
            </p>
          </div>

          {/* Project Purpose */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Project Purpose</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">The Problem</h4>
                <p className="text-gray-600 leading-relaxed">
                  Machine learning students often struggle to find quality resources scattered 
                  across different platforms. They waste time searching through multiple websites, 
                  YouTube channels, and academic databases.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Our Solution</h4>
                <p className="text-gray-600 leading-relaxed">
                  MLHub centralizes ML resources in one platform, providing easy access to PDFs, 
                  video tutorials, and web content with smart categorization and advanced search capabilities.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 text-center">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-teal-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Technology Stack</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'React 18',
                'TypeScript',
                'Tailwind CSS',
                'Vite',
                'Lucide Icons',
                'Responsive Design',
                'Modern ES6+',
                'Component Architecture'
              ].map((tech, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                  <span className="text-sm font-medium text-gray-700">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-yellow-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Development Team</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Goals */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white text-center">
            <Lightbulb className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Project Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <Heart className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                <h4 className="font-semibold mb-2">Help Students</h4>
                <p className="text-blue-100 text-sm">
                  Make ML learning more accessible and efficient for students
                </p>
              </div>
              <div>
                <Target className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                <h4 className="font-semibold mb-2">Centralize Resources</h4>
                <p className="text-blue-100 text-sm">
                  Bring together the best ML resources in one platform
                </p>
              </div>
              <div>
                <Lightbulb className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                <h4 className="font-semibold mb-2">Innovate Learning</h4>
                <p className="text-blue-100 text-sm">
                  Create a modern, intuitive learning experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;