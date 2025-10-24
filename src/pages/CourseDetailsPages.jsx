import React from 'react'
import CourseDetails from '../component/CourseDetails'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import ContactHome from '../component/ContactHome'

const CourseDetailsPages = () => {

   let {id}= useParams()
   console.log(id)

   const fetchUsers = async () => {
    const res = await fetch(`https://wws-idp-server.vercel.app/api/course/${id}`);
    return res.json();
  };

    const { data, isLoading, isError, error } = useQuery({
    queryKey: ["course", id],   // unique key for caching with id
    queryFn: fetchUsers,   // function that returns data
  });

  console.log(data)

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#11AD00] mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading course details...</p>
        </div>
      </div>
    )
  }

  // Show error state
  if (isError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Course</h2>
          <p className="text-gray-600 mb-4">Sorry, we couldn't load the course details.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-[#11AD00] hover:bg-[#4CADFF] text-white px-6 py-3 rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  // Show not found state
  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">📚</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Course Not Found</h2>
          <p className="text-gray-600 mb-4">The course you're looking for doesn't exist.</p>
          <button 
            onClick={() => window.history.back()} 
            className="bg-[#11AD00] hover:bg-[#4CADFF] text-white px-6 py-3 rounded-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
    <CourseDetails
      subject={data.subject}
      studyLevel={data.studyLevel}
      destination={data.destination}
      duration={data.duration}
      description={data.description}
      tuitionFee={data.tuitionFee}
      requirements={data.requirements}
      benefits={data.benefits}
      applicationLink={data.applicationLink || "https://example.com/apply"}
      provider={data.provider}
      contactEmail={data.contactEmail}
      bannerImage="https://via.placeholder.com/1920x1080?text=Course+Banner"
    />
    <ContactHome></ContactHome>

    </>
  )
}

export default CourseDetailsPages