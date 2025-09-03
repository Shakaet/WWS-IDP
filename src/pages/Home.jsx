import React, { useState } from 'react'
import banner from "../assets/banner2.jpg"

const Home = () => {
  const [activeTab, setActiveTab] = useState('Courses')

  const tabs = ['Courses', 'Scholarships', 'Universities', 'Events', 'Guide me', 'Get instant offer']

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[560px]">
        {/* Banner image: replace src with your images */}
        <div className="absolute inset-0 -z-10">
          <img
            src={banner}
            alt="Students studying"
            className="h-full w-full object-cover object-[center_30%] sm:object-center"
          />
          <div className="absolute inset-0 bg-white/20"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            {/* Copy */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-800">
                113,000 Students chose IDP in 2023
                <br />
                for their Study Abroad Journey
              </h1>
              <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl">
                With an IDP office near you, studying abroad has never been easier. Avail services from the world’s top consultant.
              </p>
              <div className="mt-6">
                <button className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>

            {/* Search Card */}
           
          </div>
        </div>
        
            </section>
       <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 lg:-mt-20 ">
               <div className="rounded-2xl bg-white shadow-md ring-1 ring-black/5 overflow-hidden">
                {/* Tabs */}
                 <div className="flex gap-4 sm:gap-6 px-4 sm:px-6 pt-4 overflow-x-auto overflow-y-hidden">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 text-sm sm:text-base whitespace-nowrap border-b-2 -mb-px transition-colors ${
                        activeTab === tab
                          ? 'border-blue-600 text-blue-700'
                          : 'border-transparent text-slate-600 hover:text-slate-800'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Form */}
                <div className="px-4 sm:px-6 pb-5 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">
                    <div className="lg:col-span-4">
                      <label className="sr-only">Course subject</label>
                      <input
                        type="text"
                        placeholder="Enter course subject e.g. Law"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="lg:col-span-4">
                      <label className="sr-only">Study level</label>
                      <select className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select study level</option>
                        <option>Undergraduate</option>
                        <option>Postgraduate</option>
                        <option>PhD</option>
                      </select>
                    </div>
                    <div className="lg:col-span-4">
                      <label className="sr-only">Study destination</label>
                      <select className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select a study destination</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>Australia</option>
                        <option>Canada</option>
                      </select>
                    </div>
                    <div className="lg:col-span-12 flex justify-end pt-2 md:col-span-2">
                      <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Home