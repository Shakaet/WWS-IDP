import React, { useState, useRef } from 'react'
import banner from "../assets/BannersF.jpg"
import SearchCard from './SearchCard'

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const tabs = ['Courses', 'Scholarships', 'Universities', 'Events', 'Guide me', 'Get instant offer']

  const slides = [
    {
      titleLine1: 'Trusted by students ambitious for studying abroad',
      titleLine2: '',
      desc: 'Start your study abroad Journey with confidence and join the students who achieved their global dreams with World Wise Scholars.'
    },
    {
      titleLine1: 'Achieve Your future abroad dreams with confidence',
      titleLine2: '',
      desc: 'Discover top universities and courses worldwide. Let our expert advisors help you shape your international education pathway.'
    },
    {
      titleLine1: 'Master your IELTS preparation',
      titleLine2: '',
      desc: 'Access expert guidance, proven strategies, and premium study materials in order to boost your IELTS score and secure your dream university.'
    },
    {
      titleLine1: 'Scholarships and financial support',
      titleLine2: '',
      desc: 'Explore scholarship opportunities and learn how to make your study abroad journey both affordable and stress-free.'
    },
  ]

  return (
    <div>
      <section
        className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] mb-5"
      
      >
        {/* Banner image */}
        <div className="absolute inset-0 -z-10 hidden md:block">
          <img
            src={banner}
            alt="Students studying"
            className="h-full w-full md:object-cover object-center bg-no-repeat"
          />
          <div className="absolute inset-0 bg-white/20"></div>
        </div>

        {/* Mobile banner (image on top) */}
        <div className="block md:hidden">
          <img
            src={banner}
            alt="Students studying"
            className="w-full object-cover"
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-1 items-center gap-10">
            {/* Copy */}
            <div
              className="relative flex flex-col gap-4"
              style={{
                width: '100%',
                maxWidth: 600,
                height: 280,
                minHeight: 280,
                userSelect: 'none',
                overflow: 'hidden',
              }}
            >
              <h1
                className="text-3xl sm:text-2xl md:text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight"
                style={{ lineHeight: '1.2', minHeight: '5.5rem' }}
              >
                {slides[activeSlide].titleLine1}
                {slides[activeSlide].titleLine2 && (
                  <>
                    <br />
                    {slides[activeSlide].titleLine2}
                  </>
                )}
              </h1>
              <p
                className=" text-gray-600 text-base sm:text-lg max-w-2xl"
                style={{ minHeight: '3.5rem', lineHeight: '1.3rem' }}
              >
                {slides[activeSlide].desc}
              </p>
              <div className="">
                <button className="inline-flex items-center rounded-full bg-[#11AD00] hover:bg-[#4CADFF] px-6 py-3 text-white transition-colors">
                  Register Now
                </button>
              </div>
              <div className="mt-4 flex items-center gap-3 ms-5 select-none">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Show slide ${idx + 1}`}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-3 w-3 rounded-full transition-colors ${activeSlide === idx
                      ? 'bg-gray-900'
                      : 'bg-green-500/70 hover:bg-green-600'
                      }`}
                    tabIndex={-1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="opacity-95">
        <SearchCard />
      </div>
    </div>
  )
}

export default Hero
