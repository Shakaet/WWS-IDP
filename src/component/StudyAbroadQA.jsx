import React, { useState } from 'react'

const StudyAbroadQA = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const qaData = [
    {
      id: 1,
      question: "Benefits of studying abroad",
      answer: "Studying abroad offers numerous benefits including quality education from world-renowned institutions, personal growth through cultural immersion, enhanced career prospects with global experience, improved language skills, and the opportunity to build an international network. It helps you develop independence, adaptability, and cross-cultural communication skills that are highly valued by employers worldwide."
    },
    {
      id: 2,
      question: "The study abroad experience",
      answer: "The study abroad experience is transformative and enriching. You'll live in a different country, adapt to new cultures, make friends from around the world, and gain a global perspective. It typically costs between $15,000-$50,000 per year depending on the country and institution, but the investment pays off through enhanced career opportunities and personal development."
    },
    {
      id: 3,
      question: "Breaking down the steps",
      answer: "To study abroad, follow these simple steps: 1) Research countries and universities that match your academic goals, 2) Check admission requirements and deadlines, 3) Prepare required documents (transcripts, language test scores, recommendation letters), 4) Apply to your chosen institutions, 5) Apply for student visa, 6) Arrange accommodation and finances, 7) Prepare for departure and orientation."
    },
    {
      id: 4,
      question: "Choosing the right destination",
      answer: "When choosing a study destination, consider factors like academic reputation of universities, cost of living and tuition fees, language requirements, climate and lifestyle, job opportunities after graduation, visa policies, and cultural compatibility. Popular destinations include the USA, UK, Canada, Australia, Germany, and Netherlands, each offering unique advantages for international students."
    },
    {
      id: 5,
      question: "Application process and requirements",
      answer: "The application process typically requires academic transcripts, standardized test scores (IELTS/TOEFL for English proficiency), statement of purpose, recommendation letters, financial documents, and passport copies. Deadlines vary by institution but generally fall between December-March for fall intake. Visa requirements include proof of admission, financial capability, and health insurance."
    },
    {
      id: 6,
      question: "Financial planning and scholarships",
      answer: "Financial planning is crucial for studying abroad. Explore scholarship opportunities from governments, universities, and private organizations. Consider part-time work options (usually 20 hours/week), student loans, and family support. Create a budget covering tuition, accommodation, food, transportation, and miscellaneous expenses. Many countries offer post-graduation work permits to help recover investment."
    }
  ]

  return (
    <div className="bg-gray-100 py-8 sm:py-12 lg:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Main Heading */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Discover how studying abroad can help you
          </h2>
          
          <div className="mt-2 h-1 w-10 rounded bg-purple-600" />
        </div>

        {/* Q&A Sections */}
        <div className="space-y-4 sm:space-y-6">
          {qaData.map((item, index) => (
            <div key={item.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              
              {/* Question Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 sm:px-8 py-4 sm:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                    {item.id}. {item.question}
                  </h3>
                </div>
                
                {/* Expand/Collapse Icon */}
                <div className="ml-4 flex-shrink-0">
                  <div className={`w-6 h-6 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-full h-full text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Answer Content */}
              {openIndex === index && (
                <div className="px-6 sm:px-8 pb-4 sm:pb-6 border-t border-gray-100">
                  <div className="pt-4 sm:pt-6">
                    <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudyAbroadQA