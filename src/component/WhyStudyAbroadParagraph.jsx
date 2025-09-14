import React from 'react';
import abroad1 from "../assets/students.webp";
import abroad2 from "../assets/graduation.jpg"; // Add this import for the second image

const WhyStudyAbroadParagraph = () => {
  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Text Block */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
              <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
                <p className="text-base sm:text-lg lg:text-xl mb-4">
                  Thinking about studying in another country? You are not alone! More students than ever are packing their bags to head overseas and experience their study abroad dream. But why? Well, studying abroad not only opens doors to high-paying jobs but also helps expand your horizons. It adds a new dimension to your life. You get to earn a foreign degree, gain skills that textbooks alone can't teach, and secure better pay. And who knows? Maybe, eventually, you will find an opportunity to settle down in a new country. Picture yourself in a new cultural setup, making friends globally and having life-altering experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Visual Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Left Column - Image Gallery Block */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-100">
            <div className="flex h-[300px] sm:h-[400px] lg:h-[500px]">
              
              {/* Image Gallery Section (Left 2/3) */}
              <div className="relative flex-1 flex flex-col">
                {/* Top Image */}
                <div className="flex-1 relative">
                  <img 
                    src={abroad1}
                    alt="Students studying in a library"
                    className="w-full h-full object-cover"
                  />
                  {/* Light overlay for better text readability */}
                  <div className="absolute inset-0  bg-opacity-20"></div>
                </div>
                
                {/* Bottom Image */}
                <div className="flex-1 relative">
                  <img 
                    src={abroad2}
                    alt="Students walking on campus"
                    className="w-full h-full object-cover"
                  />
                  {/* Light overlay for better text readability */}
                  <div className="absolute inset-0  bg-opacity-20"></div>
                </div>
              </div>
              
              {/* Blue Section (Right 1/3) */}
              <div className="w-1/3 bg-blue-900 flex flex-col justify-center items-center p-4 sm:p-6">
                {/* Logo */}
                <div className="mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-900 font-bold text-lg sm:text-xl">WWS</span>
                  </div>
                </div>
                
                {/* Gallery Info */}
                <div className="text-center text-white">
                  <p className="text-xs sm:text-sm mb-2 opacity-80">Gallery</p>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2">Why study abroad?</h3>
                  <p className="text-xs sm:text-sm opacity-80">Study abroad student journey</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Sign-up Card */}
          <div className="bg-blue-50 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                One account for all your study abroad needs
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Create your profile and unlock a wide array of features including personalised recommendations, fast-tracked applications and much more.
              </p>
              
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default WhyStudyAbroadParagraph;