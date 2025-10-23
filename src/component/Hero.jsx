import React, { useState } from 'react'
import banner from "../assets/BannerImg.jpg"
import SearchCard from './SearchCard'

const Hero = () => {
  const [activeTab, setActiveTab] = useState('Courses')
  const [activeSlide, setActiveSlide] = useState(0)

  const tabs = ['Courses', 'Scholarships', 'Universities', 'Events', 'Guide me', 'Get instant offer']

  const slides = [
    {
      titleLine1: 'Thousands of students trusted us in 2023',
      titleLine2: 'to begin their Study Abroad Journey',
      desc: 'With expert guidance and global support, studying abroad has never been easier.'
    },
    {
      titleLine1: 'Plan your future with confidence',
      titleLine2: 'Explore top courses and universities',
      desc: 'Discover programs that match your interests, career goals, and budget across leading destinations.'
    },
    {
      titleLine1: 'Ace your IELTS preparation',
      titleLine2: 'Guidance and resources from experts',
      desc: 'Access proven strategies, practice tests, and mentorship to achieve your dream score.'
    },
    {
      titleLine1: 'Scholarships and financial support',
      titleLine2: 'Make study abroad more affordable',
      desc: 'Find scholarships, fee waivers, and funding opportunities to support your education journey.'
    },
  ]

  return (
    <div>

      <section className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] mb-5">
        {/* Banner image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={banner}
            alt="Students studying"
            className="flex md:flex h-full w-full md:object-cover object-center bg-no-repeat "
          />
          {/* <img
            src={banner}
            alt="Students studying"
            className="h-full md:hidden w-full  object-left"
          /> */}
          <div className="absolute inset-0 bg-white/20"></div>


          <section className="relative lg:min-h-[560px] mb-5">
            {/* Banner image: replace src with your images */}
            <div className="lg:absolute lg:inset-0 lg:-z-10">
              <img
                src={banner}
                alt="Students studying"
                className="block w-full h-auto lg:h-full lg:object-cover lg:object-center lg:object-[center_30%]"
              />
              <div className="hidden lg:block lg:absolute lg:inset-0 lg:bg-white/20"></div>

            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                {/* Copy */}
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                    {slides[activeSlide].titleLine1}
                    <br />
                    {slides[activeSlide].titleLine2}
                  </h1>
                  <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl">
                    {slides[activeSlide].desc}
                  </p>
                  <div className="mt-6">
                    <button className="inline-flex items-center rounded-full bg-[#11AD00] hover:bg-[#4CADFF] px-6 py-3 text-white transition-colors">
                      Register Now
                    </button>
                  </div>
                  {/* Slide Dots */}
                  <div className="mt-4 flex items-center gap-3 ms-5">
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
                      />
                    ))}
                  </div>
                </div>

                {/* Search Card */}

              </div>
            </div>

          </section>

          <SearchCard />
        </div>
      </section>
    </div>
  )
}

export default Hero