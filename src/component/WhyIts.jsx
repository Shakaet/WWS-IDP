import React from 'react'

const cards = [
  {
    title: 'Trusted by students worldwide',
    body:
      'Rated highly by students for guidance and support, with most recommending us to their friends and families.',
    cta: { label: 'See why students choose us', href: '#' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.737-.715-1.611-2.377-2.737-4.313-2.737C4.099 3.75 2 5.765 2 8.25c0 7.22 8 11.25 10 12.75 2-1.5 9-5.53 9-12.75z" />
      </svg>
    )
  },
  {
    title: 'Expert counselling by your side',
    body:
      'Get guidance from certified education counsellors who understand global admissions and local student needs.',
    cta: { label: 'Learn More', href: '#' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6.75a3 3 0 110 6 3 3 0 010-6zM4.5 20.25a7.5 7.5 0 1115 0M4.5 9a2.25 2.25 0 110 4.5M19.5 9a2.25 2.25 0 110 4.5" />
      </svg>
    )
  },
  {
    title: 'Helping thousands achieve dreams',
    body:
      "Each year, we support thousands of students in securing admissions and visas for their dream destinations.",
    cta: { label: 'Learn More', href: '#' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3l8.485 4.243A2.25 2.25 0 0121 9.24V12a9 9 0 11-18 0V9.24a2.25 2.25 0 01.515-1.997L12 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8.25 13.5a3.75 3.75 0 107.5 0" />
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
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-6 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">Why WWS?</h2>
        <div className="mt-2 h-1 w-10 rounded bg-blue-600" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                {card.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm sm:text-base leading-6 text-slate-600">{card.body}</p>
                {card.cta ? (
                  <a
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-800"
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
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyIts