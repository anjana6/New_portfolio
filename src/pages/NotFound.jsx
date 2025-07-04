import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaArrowLeft } from 'react-icons/fa';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found | Anjana Shakthi Portfolio"
        description="The page you're looking for doesn't exist. Return to Anjana Shakthi's portfolio homepage."
        keywords="404, Page Not Found, Portfolio"
        url="/404"
      />
      <div className="min-h-screen flex items-center justify-center section-padding">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Oops! The page you're looking for doesn't exist. 
              It might have been moved, deleted, or you entered the wrong URL.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <FaHome />
                <span>Go Home</span>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <FaArrowLeft />
                <span>Go Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound; 