import React, { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import blur from "../assets/blur.jpg"
const ReleventSection2 = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <section className="hidden relative min-h-screen md:flex items-center overflow-hidden">
      {/* Fixed Background Image with Parallax */}
      <img 
        src={blur}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          filter: 'blur(4px)'
        }}
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-yellow-50" />
      
      {/* Left Red Sidebar */}
      <Motion.div
        className=" absolute left-0 top-0 h-full w-20 bg-red-600 md:flex flex-col items-center justify-center z-20"
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="transform -rotate-90 text-white font-bold text-sm tracking-wider whitespace-nowrap">
          <div className="mb-2">BOOK A FLIGHT</div>
          <div className="text-xs">+880 1234 567890</div>
        </div>
        <Motion.div
          className="absolute top-8 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </Motion.div>
      </Motion.div>

     

      {/* Altitude Indicator */}
      <Motion.div
        className="absolute right-8 top-20 flex items-center gap-2 text-white z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        
      </Motion.div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-20 py-20">
        <div className="max-w-2xl">
          {/* Main Title */}
          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight">
              ASCEND INTO
              <span className="block text-black">LUXURY</span>
              <div className="w-24 h-1 bg-red-600 mt-4"></div>
            </h1>
          </Motion.div>

          {/* Subtitle */}
          <Motion.p
            className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            There's education, and then there's World Wise Scholars education. We go above and beyond in everything we do, which is why we only work with top-tier universities. Our programs are comprehensive, meticulously designed experiences in global learning.
          </Motion.p>

          {/* CTA Button */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-black shadow-lg">
              Study Management
            </button>
          </Motion.div>
        </div>
      </div>

    </section>
  )
}

export default ReleventSection2