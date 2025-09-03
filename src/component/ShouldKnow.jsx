import React from 'react'
import f1 from "../assets/f1.webp"
import f2 from "../assets/f2.jpeg"
import f3 from "../assets/f3.webp"

const items = [
  {
    title: 'Global events',
    desc:
      'At our Global events, you can meet university representatives and discuss your study prospects, and more in person.',
    cta: { label: 'Register today', href: '#' },
    img: f1
  },
  {
    title: 'Live life in the FastLane',
    desc: 'You can get an express response from your dream university in seconds!',
    cta: { label: 'Learn more', href: '#' },
    img: f2
  },
  {
    title: 'Visa application assistance',
    desc:
      'Applying for visas can be challenging, but our team ensures you access to accurate information for a smoother process.',
    cta: { label: 'Learn more', href: '#' },
    img: f3
  }
]

const ShouldKnow = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-6 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">You should also know</h2>
        <div className="mt-2 h-1 w-10 rounded bg-blue-600" />
      </div>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col items-start gap-5 p-4 sm:p-5 md:flex-row md:items-center">
              {/* Media */}
              <div className="shrink-0">
                <div className="relative h-20 w-20 rounded-xl ">
                  <img
                    src={item.img}
                    alt=""
                    className="absolute -bottom-1 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full object-cover ring-4 ring-white"
                  />
                </div>
              </div>

              {/* Content block with subtle blue background */}
              <div className="flex-1 w-full rounded-xl bg-blue-50/60 px-4 py-4">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm sm:text-base leading-6 text-slate-600">{item.desc}</p>
              </div>

              {/* CTA */}
              <div className="w-full md:w-auto">
                <a
                  href={item.cta.href}
                  className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-slate-800 hover:bg-slate-50"
                >
                  {item.cta.label}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ShouldKnow