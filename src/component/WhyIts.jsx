import React from 'react'

const cards = [
  {
    title: 'Fast & Efficient',
    body:
      'Lightning-fast delivery without compromising on quality or attention to detail.',
    cta: { label: 'Learn More', href: '#' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Creative Solutions',
    body:
      'Innovative designs that stand out and make a lasting impression on your audience.',
    cta: { label: 'Learn More', href: '#' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: 'Client Focused',
    body:
      "Your success is our priority. We work closely with you every step of the way.",
    cta: { label: 'Learn More', href: '#' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: 'IELTS and test prep support',
    body:
      'Prepare with expert resources, test strategies, and access to official IELTS and English proficiency training.',
    cta: { label: 'Start preparing', href: '#' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5.25 5.25h10.5A2.25 2.25 0 0118 7.5v11.25H7.5A2.25 2.25 0 015.25 16.5V5.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 3.75h9.75A2.25 2.25 0 0118 6v12M9 8.25h4.5M9 12h4.5" />
      </svg>
    )
  },
  {
    title: 'Support through every step',
    body:
      'From course selection and visa applications to pre-departure and post-arrival guidance, we’re here for you.',
    cta: null,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.813 8.25l1.06-2.651a.75.75 0 011.394 0L13.313 8.25M8.25 12h7.5M6.75 15.75h10.5M12 21l-2.25-3h4.5L12 21z" />
      </svg>
    )
  },
  {
    title: 'Global reach, local care',
    body:
      'With offices and partners across multiple countries, you can access expert counsellors wherever you are.',
    cta: { label: 'Find support near you', href: '#' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 21c4.97-4.97 7.5-8.25 7.5-11.25A7.5 7.5 0 1012 21z" />
        <circle cx="12" cy="9.75" r="2.25" strokeWidth="1.8" />
      </svg>
    )
  }
]

const WhyIts = () => {
  return (
    <section className="bg-white mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-6 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">Why Choose Us</h2>
        <p className="mt-2 text-green-600 text-lg">We combine creativity with technology to deliver exceptional results.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-gray-50 p-6 shadow-sm transition hover:shadow-lg hover:shadow-gray-100"
          >
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className={`flex h-16 w-16 items-center justify-center rounded-full text-white ${
                  idx === 0 ? 'bg-blue-600' : 
                  idx === 1 ? 'bg-green-600' : 
                  idx === 2 ? 'bg-purple-600' :
                  idx === 3 ? 'bg-blue-600' :
                  idx === 4 ? 'bg-green-600' :
                  'bg-purple-600'
                }`}>
                  {card.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-sm sm:text-base leading-6 text-green-600">{card.body}</p>
              {card.cta ? (
                <a
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700"
                  href={card.cta.href}
                >
                  {card.cta.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyIts