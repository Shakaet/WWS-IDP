import React, { useState, useMemo, useEffect } from 'react'
import { Link, Links, useLocation, useNavigate } from 'react-router-dom'
import Result1 from '../component/Result1'
import Result2 from '../component/Result2'
import ContactHome from '../component/ContactHome'

const SearchResults = () => {
   const [isModalOpen, setIsModalOpen] = useState(false)
    const handleButtonClick = () => {
    setIsModalOpen(true)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    buttonAction() // Call the original button action if provided
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset'
  }
  const location = useLocation()
  const navigate = useNavigate()
  const { results, tab, searchType } = location.state || { results: [], tab: 'Courses', searchType: null }
  
  // State for real data
  const [realResults, setRealResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  // Redirect if accessed directly without state
  useEffect(() => {
    if (!location.state) {
      navigate('/')
    }
  }, [location.state, navigate])

  // Fetch real data based on searchType
  useEffect(() => {
    if (searchType) {
      fetchRealData(searchType)
    }
  }, [searchType])

  const fetchRealData = async (type) => {
    setLoading(true)
    setError(null)
    try {
      let apiEndpoint = ''
      switch (type) {
        case 'courses':
          apiEndpoint = 'http://localhost:3000/api/course' // Replace with your actual API endpoint
          break
        case 'scholarships':
          apiEndpoint = 'http://localhost:3000/api/scholarships' // Replace with your actual API endpoint
          break
        case 'universities':
          apiEndpoint = 'http://localhost:3000/api/universities' // Replace with your actual API endpoint
          break
        case 'events':
          apiEndpoint = 'http://localhost:3000/api/events' // Replace with your actual API endpoint
          break
        default:
          apiEndpoint = 'http://localhost:3000/api/course'
      }

      const response = await fetch(apiEndpoint)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setRealResults(data)
      
    } catch (error) {
      console.error('Error fetching data:', error)
      setError(error.message)
      setRealResults([])
    } finally {
      setLoading(false)
    }
  }
  
  // Sort state
  const [sortBy, setSortBy] = useState('popularity')
  
  // Sort results based on selected criteria
  const sortedResults = useMemo(() => {
    // Use realResults if available (from API), otherwise fall back to passed results
    const actualResults = realResults.length > 0 ? realResults : (results || [])
    if (!actualResults || actualResults.length === 0) {
      return actualResults
    }
    
    const sorted = [...actualResults].sort((a, b) => {
      switch (sortBy) {
        case 'ranking': {
          // Sort by ranking (lower number = better ranking)
          const aRanking = a.ranking || a.rank || 999
          const bRanking = b.ranking || b.rank || 999
          return aRanking - bRanking
        }
        case 'name': {
          // Sort alphabetically by name
          const aName = a.universityName || a.name || a.title || ''
          const bName = b.universityName || b.name || b.title || ''
          return aName.localeCompare(bName)
        }
        case 'fee': {
          // Sort by tuition fee (extract numbers from fee strings)
          const extractFee = (feeStr) => {
            if (!feeStr) return 999999
            const match = feeStr.match(/[\d,]+/)
            return match ? parseInt(match[0].replace(/,/g, '')) : 999999
          }
          return extractFee(a.tuitionFee || a.fee) - extractFee(b.tuitionFee || b.fee)
        }
        case 'popularity':
        default:
          // Keep original order instead of random for consistency
          return 0
      }
    })
    
    return sorted
  }, [realResults, results, sortBy])
  
  const handleBackToSearch = () => {
    navigate('/')
  }
  
  const handleSortChange = (e) => {
    setSortBy(e.target.value)
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
        <Link to={`courses-details/${course._id}`} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          View Details
        </Link>
        <button onClick={handleButtonClick} className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
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
        <Link to={`/search-results/scholarship-details/${scholarship?._id}`} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          View Details
        </Link>
        <button onClick={handleButtonClick} className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
          Apply Now
        </button>
      </div>
    </div>
  )
  
  const renderUniversityCard = (university) => (
    <div key={university._id || university.universityName} className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 md:p-6 hover:shadow-md transition-all duration-200 h-full flex flex-col">
      {/* University Header */}
      <div className="flex justify-between items-start mb-2 sm:mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 truncate">{university.universityName}</h3>
        </div>
        <span className="bg-green-100 text-green-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2">
          Available
        </span>
      </div>
      
      {/* University Info */}
      <div className="mb-3 sm:mb-4 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2 sm:mb-3 text-xs">
          <div>
            <span className="font-medium text-gray-700">Established:</span>
            <span className="text-gray-600 ml-1">{university.established}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Destination:</span>
            <span className="text-gray-600 ml-1">{university.destination}</span>
          </div>
        </div>
        
        {/* Courses Offered */}
        <div className="mb-2 sm:mb-3">
          <span className="font-medium text-gray-700 text-xs">Popular Courses:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {university.coursesOffered?.slice(0, 3).map((course, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs">
                {course}
              </span>
            ))}
            {university.coursesOffered?.length > 3 && (
              <span className="text-gray-500 text-xs">+{university.coursesOffered.length - 3} more</span>
            )}
          </div>
        </div>
        
        {/* Tuition Fee */}
        <div className="mb-2 sm:mb-3">
          <span className="font-medium text-gray-700 text-xs">Tuition Fee:</span>
          <span className="text-green-600 font-semibold ml-1 text-xs">{university.tuitionFee}</span>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
          {university.description}
        </p>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
        <Link to={`/search-results/university-details/${university?._id}`}
          // onClick={() => window.open(university.applicationLink, '_blank')}
          className="flex-1 bg-blue-600 text-white py-2 px-3 sm:px-4 rounded-lg hover:bg-blue-700 transition-colors text-xs font-medium"
        >
          View Details
        </Link>
        <button 
          onClick={handleButtonClick}
          className="flex-1 bg-green-600 text-white py-2 px-3 sm:px-4 rounded-lg hover:bg-green-700 transition-colors text-xs font-medium"
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
        <Link to={`/search-results/event-details/${event?._id}`} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          View Details
        </Link>
        <button onClick={handleButtonClick} className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
          Apply Now
        </button>
      </div>
    </div>
  )
  
  const renderResults = () => {
    // Show loading state
    if (loading) {
      return (
        <div className="text-center py-8 sm:py-12">
          <div className="text-gray-400 text-4xl sm:text-6xl mb-4">⏳</div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Loading {tab.toLowerCase()}...</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4">Please wait while we fetch the latest data</p>
        </div>
      )
    }

    // Show error state
    if (error) {
      return (
        <div className="text-center py-8 sm:py-12">
          <div className="text-gray-400 text-4xl sm:text-6xl mb-4">⚠️</div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Error Loading Data</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4">{error}</p>
          <button 
            onClick={() => fetchRealData(searchType)}
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base mr-3"
          >
            Try Again
          </button>
          <button 
            onClick={handleBackToSearch}
            className="bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base"
          >
            Back to Search
          </button>
        </div>
      )
    }

    // Show no results state
    if (!sortedResults || sortedResults.length === 0) {
      return (
        <div className="text-center py-8 sm:py-12">
          <div className="text-gray-400 text-4xl sm:text-6xl mb-4">🔍</div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">No results found</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4">Try adjusting your search criteria</p>
          <button 
            onClick={handleBackToSearch}
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Back to Search
          </button>
        </div>
      )
    }
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {sortedResults.map((item) => {
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
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-4 sm:mb-6">
          <button 
            onClick={handleBackToSearch}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base"
          >
            <span className="text-lg">←</span>
            <span className="hidden xs:inline">Back to Search</span>
            <span className="xs:hidden">Back</span>
          </button>
        </nav>
        
        {/* Main Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            <span className="text-blue-600">{sortedResults?.length || 0}</span> {tab} Found
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Discover the best {tab.toLowerCase()} that match your criteria
          </p>
        </div>
        
        {/* Filter and Sort Controls */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            {/* Filter Button */}
            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
              <span className="w-4 h-4">🔍</span>
              <span className="hidden sm:inline">Filter {tab}</span>
              <span className="sm:hidden">Filter</span>
            </button>
            
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-xs sm:text-sm whitespace-nowrap">Sort by:</span>
              <select 
                value={sortBy}
                onChange={handleSortChange}
                className="border border-gray-300 rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 sm:flex-none"
              >
                <option value="popularity">Popularity</option>
                <option value="ranking">Ranking</option>
                <option value="name">Name A-Z</option>
                <option value="fee">Tuition Fee</option>
              </select>
            </div>
          </div>
          
          {/* Instant Offer Toggle */}
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
            <div className="flex items-start gap-2 sm:gap-3">
              <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-1">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
              <div className="flex-1">
                <span className="text-xs sm:text-sm font-medium text-gray-900">Get Instant Offer FastLane</span>
                <p className="text-xs text-gray-600 mt-1">Get instant offer for FastLane labelled courses within minutes! <a href="#" className="text-blue-600 hover:underline">How Does It Work?</a></p>
              </div>
            </div>
          </div>
          
          {/* Active Filters */}
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600">Based on your selection:</span>
              <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                {tab} 
              </span>
            </div>
          </div>
        </div>
        
        <Result1></Result1>
        {renderResults()}
        <Result2></Result2>
        <ContactHome></ContactHome>
      </div>

        {/* Fullscreen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-white">
          {/* Close Button - Fixed Position */}
          <button
            onClick={closeModal}
            className="fixed top-4 right-4 z-[10000] bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors shadow-lg"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Modal Content - Fullscreen without scrollbars */}
          <div className="w-full h-full overflow-x-hidden">
            <ContactHome />
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchResults