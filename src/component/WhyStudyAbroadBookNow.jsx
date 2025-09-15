import React from 'react'

/**
 * Reusable Book Now Component for Study Abroad Pages
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Main heading text
 * @param {string} props.description - Description text
 * @param {string} props.buttonText - Button text
 * @param {Function} props.buttonAction - Button click handler
 * @param {string} props.image - Counsellor image source path
 * @param {string} props.imageAlt - Image alt text
 * 
 * @example
 * // Basic usage with default props
 * <WhyStudyAbroadBookNow />
 * 
 * @example
 * // Custom usage with props
 * <WhyStudyAbroadBookNow 
 *   title="Get Expert Guidance"
 *   description="Talk to our counsellors for free advice"
 *   buttonText="Schedule Call"
 *   buttonAction={() => navigate('/book')}
 *   image={counsellorImage}
 * />
 */
const WhyStudyAbroadBookNow = ({
  title,
  description,
  buttonText,
  buttonAction = () => {},
  image,
  imageAlt
}) => {
  return (
    <div className="bg-blue-50 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 rounded-2xl border border-gray-200 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            
            {/* Left Section - Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Circular Image */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-orange-500 p-1">
                  <img 
                    src={image}
                    alt={imageAlt}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
              </div>
            </div>

            {/* Middle Section - Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>

            {/* Right Section - CTA Button */}
            <div className="flex-shrink-0">
              <button 
                onClick={buttonAction}
                className="bg-[#11AD00] hover:bg-[#4CADFF] border-2 border-gray-300 hover:border-gray-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 group"
              >
                <span>{buttonText}</span>
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyStudyAbroadBookNow