import React from 'react'

const Calculate = () => {
  const statistics = [
    {
      number: "250+",
      label: "Projects Completed",
      color: "text-purple-600"
    },
    {
      number: "98%",
      label: "Client Satisfaction", 
      color: "text-green-600"
    },
    {
      number: "5+",
      label: "Years Experience",
      color: "text-blue-500"
    },
    {
      number: "24/7",
      label: "Support Available",
      color: "text-blue-800"
    }
  ]

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-5xl sm:text-6xl font-bold mb-3 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-gray-700 text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Calculate