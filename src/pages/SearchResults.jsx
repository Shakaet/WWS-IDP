import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Result1 from '../component/Result1'
import Result2 from '../component/Result2'

const SearchResults = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { results, tab } = location.state || { results: [], tab: 'Courses' }
  
  // Handle nested data structure - extract actual results from nested data
  const actualResults = results && results.length > 0 && results[0].data ? results[0].data : results

  const handleBackToSearch = () => {
    navigate('/')
  }

  const renderCourseCard = (course) => (
    <div key={course._id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-200 h-full flex flex-col">
      {/* Available Tag */}
      <div className="flex justify-end mb-3">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
          Available
        </span>
      </div>
      
      {/* Course Info */}
      <div className="mb-4 flex-grow">
        <p className="text-gray-900 font-semibold text-sm mb-1">Study Level: {course.studyLevel}</p>
        <p className="text-gray-900 font-semibold text-sm mb-3">Destination: {course.destination}</p>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {course.description || `${course.studyLevel} programs in ${course.destination} provide students with foundational knowledge across various fields such as ${course.subject || 'Engineering, Business, Arts, and Sciences'}. These programs are designed to develop critical thinking, research skills, and practical expertise, preparing students for global careers or higher studies.`}
        </p>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto">
        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          View Details
        </button>
        <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
          Apply Now
        </button>
      </div>
    </div>
  )

  const renderScholarshipCard = (scholarship) => (
    <div key={scholarship._id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-200 h-full flex flex-col">
      {/* Available Tag */}
      <div className="flex justify-end mb-3">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
          {scholarship.amount || 'Available'}
        </span>
      </div>
      
      {/* Scholarship Info */}
      <div className="mb-4 flex-grow">
        <p className="text-gray-900 font-semibold text-sm mb-1">Study Level: {scholarship.studyLevel}</p>
        <p className="text-gray-900 font-semibold text-sm mb-3">Destination: {scholarship.destination}</p>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {scholarship.description || `These ${scholarship.studyLevel} scholarships in ${scholarship.destination} are designed for students seeking comprehensive financial support for their education. Emphasis is placed on academic excellence, research potential, and global career readiness.`}
        </p>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto">
        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          View Details
        </button>
        <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
          Apply Now
        </button>
      </div>
    </div>
  )

  const renderUniversityCard = (university) => (
    <div key={university._id || university.universityName} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-200 h-full flex flex-col">
      {/* Available Tag */}
      <div className="flex justify-end mb-3">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
          Available
        </span>
      </div>
      
      {/* University Info */}
      <div className="mb-4 flex-grow">
        <p className="text-gray-900 font-semibold text-sm mb-1">Study Level: All Levels</p>
        <p className="text-gray-900 font-semibold text-sm mb-3">Destination: {university.destination}</p>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {university.description || `${university.universityName} in ${university.destination} offers comprehensive education across various fields including ${university.coursesOffered?.slice(0, 3).join(', ') || 'Engineering, Business, Arts'}. The university emphasizes research excellence, practical experience, and global career readiness.`}
        </p>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto">
        <button 
          onClick={() => window.open(university.applicationLink, '_blank')}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          View Details
        </button>
        <button 
          onClick={() => window.open(university.applicationLink, '_blank')}
          className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
        >
          Apply Now
        </button>
      </div>
    </div>
  )

  const renderEventCard = (event) => (
    <div key={event._id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-200 h-full flex flex-col">
      {/* Available Tag */}
      <div className="flex justify-end mb-3">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
          Available
        </span>
      </div>
      
      {/* Event Info */}
      <div className="mb-4 flex-grow">
        <p className="text-gray-900 font-semibold text-sm mb-1">Event Type: Education Fair</p>
        <p className="text-gray-900 font-semibold text-sm mb-3">Destination: {event.destination}</p>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {event.description || `Join our education fair in ${event.city || 'major cities'} to explore study opportunities in ${event.destination}. Meet university representatives, learn about courses, scholarships, and application processes. Perfect for students planning their international education journey.`}
        </p>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto">
        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          View Details
        </button>
        <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
          Register Now
        </button>
      </div>
    </div>
  )

  const renderResults = () => {
    if (!actualResults || actualResults.length === 0) {
      return (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search criteria</p>
          <button 
            onClick={handleBackToSearch}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Search
          </button>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {actualResults.map((item) => {
          switch (tab) {
            case 'Courses':
              return renderCourseCard(item)
            case 'Scholarships':
              return renderScholarshipCard(item)
            case 'Universities':
              return renderUniversityCard(item)
            case 'Events':
              return renderEventCard(item)
            default:
              return null
          }
        })}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6">
          <button 
            onClick={handleBackToSearch}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span className="text-lg">←</span>
            Back to Search
          </button>
        </nav>

        {/* Main Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {actualResults?.length || 0} {tab} Found
          </h1>
          <p className="text-gray-600">
            Discover the best {tab.toLowerCase()} that match your criteria
          </p>
        </div>

        {/* Filter and Sort Controls */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Filter Button */}
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <span className="w-4 h-4">🔍</span>
              Filter {tab}
            </button>
            
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm">Sort by:</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="popularity">Popularity</option>
                <option value="ranking">Ranking</option>
                <option value="name">Name A-Z</option>
                <option value="fee">Tuition Fee</option>
              </select>
            </div>
          </div>
          
          {/* Instant Offer Toggle */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
              <div>
                <span className="text-sm font-medium text-gray-900">Get Instant Offer FastLane</span>
                <p className="text-xs text-gray-600">Get instant offer for FastLane labelled courses within minutes! <a href="#" className="text-blue-600 hover:underline">How Does It Work?</a></p>
              </div>
            </div>
          </div>
          
          {/* Active Filters */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Based on your selection:</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {tab} 
              </span>
            </div>
          </div>
        </div>

        {/* Results */}
        <Result1></Result1>
        {renderResults()}
        <Result2></Result2>
        
      </div>
    </div>
  )
}

export default SearchResults
