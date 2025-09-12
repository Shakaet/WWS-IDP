import React from 'react'

const Result2 = () => {
  return (
    <div className="bg-blue-50 rounded-2xl p-8 mb-8 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-green-300 rounded-full opacity-40 transform translate-x-20 -translate-y-10"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-200 rounded-full opacity-50 transform translate-x-16 translate-y-8"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Get ready for the FastLane
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Make your university application stress free and discover in minutes if you'd get into the university you've always dreamed of.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium">
            Get started
          </button>
        </div>
        
        {/* Right Content - Person Image Placeholder */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Background for person */}
            <div className="w-64 h-64 bg-green-200 rounded-full flex items-center justify-center">
              <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-4xl">👩‍🎓</span>
                </div>
              </div>
            </div>
            {/* Decorative shapes around person */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-300 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result2