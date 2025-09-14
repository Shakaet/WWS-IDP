import React from 'react'

const WhyStudyAbroadDetails = () => {
  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Introductory Text */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-4">
            Studying abroad is more than just attending classes in a foreign country; it's a transformative journey that helps you develop life skills and reshape your personality. You become an expert in the English language and mature as an individual—emerging as a confident and independent person working overseas. Numerous studies have shown that studying abroad significantly enhances students' intercultural skills, flexibility, adaptability, self-awareness, curiosity, and confidence.
          </p>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-4">
            The benefits are endless! If you're curious to discover how a study abroad experience can transform your life (and your resume), keep reading.
          </p>
        </div>

        {/* Main Heading */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Key Benefits of Studying Abroad
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-4">
            Studying overseas offers an incredible experience with numerous advantages. It allows you to step out of your comfort zone, explore new opportunities, and grow academically. Let's explore the major benefits of studying abroad.
          </p>
        </div>

        {/* Academic Growth Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Academic Excellence
          </h3>
          
          <div className="space-y-6 lg:space-y-8">
            <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-4">
              Studying abroad enables you to earn a foreign degree and receive high-quality education. You gain exposure to diverse teaching methods, advanced resources, and global perspectives while acquiring in-depth knowledge and skills.
            </p>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-4">
              You can customize your overseas study experience to align with your career aspirations by choosing a specialized program that matches your academic interests. Whether you're passionate about history, arts, business, or science, you'll find a study abroad program that fits perfectly. According to a{' '}
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200"
              >
                study published by Springer in 2022
              </a>
              , students who studied abroad were 6.2% more likely to graduate in 4 years and achieved GPAs 0.16 points higher than those who didn't.
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
         <div className="pt-6 sm:pt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            Avail Free Counselling
          </button>
        </div>
      </div>
    </div>
  )
}

export default WhyStudyAbroadDetails