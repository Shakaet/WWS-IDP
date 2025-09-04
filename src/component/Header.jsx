import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import icon from "../assets/wws1.png"
import { Context } from '../AuthProvider/Provider'

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  let {user,signOuts}= useContext(Context)

  console.log(user)

  const navItems = [
    { label: 'Study abroad steps', to: '/' },
    { label: 'Study destinations', to: '/' },
    { label: 'Find a course', to: '/' },
    { label: 'IELTS', to: '/' },
    { label: 'Student Essentials', to: '/' },
  ]

  const handleLogout = () => {
    signOuts()
      .then(() => {
        // signed out
      })
      .catch(() => {})
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 md:py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2" aria-label="IDP home">
              {/* Simple logo mark */}
              <img  width={200} src={icon} alt="" />
              {/* <span className="ml-1 text-2xl font-semibold tracking-tight text-slate-800">idp</span> */}
            </Link>
          </div>

          {/* Center: Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-[15px] text-slate-700 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm text-slate-700">{user.email}</span>
                <button onClick={handleLogout} className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2 text-slate-800 hover:bg-slate-50 transition-colors">Logout</button>
              </>
            ) : (
              <Link
                to="/signin"
                className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2 text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Sign in
              </Link>
            )}
            {/* Heart icon */}
            <button
              type="button"
              aria-label="Wishlist"
              className="p-2 rounded-full hover:bg-slate-100 text-orange-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.949 0-3.622 1.147-4.312 2.789-.69-1.642-2.363-2.79-4.313-2.79C5.1 3.75 3 5.765 3 8.25 3 14.25 12 20.25 12 20.25S21 14.25 21 8.25z"/>
              </svg>
            </button>
          </div>

          {/* Mobile: hamburger */}
          <div className="lg:hidden">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isMobileOpen}
              onClick={() => setIsMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300"
            >
              {isMobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`${isMobileOpen ? 'block' : 'hidden'} lg:hidden border-t border-gray-100`}
      >
        <div className="space-y-1 px-4 pt-2 pb-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setIsMobileOpen(false)}
              className="block rounded-md px-3 py-2 text-base text-slate-700 hover:bg-slate-100"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-3 px-1">
            {user ? (
              <button
                onClick={() => { setIsMobileOpen(false); handleLogout() }}
                className="flex-1 inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-slate-800 hover:bg-slate-50"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/signin"
                onClick={() => setIsMobileOpen(false)}
                className="flex-1 inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-slate-800 hover:bg-slate-50"
              >
                Sign in
              </Link>
            )}
            <button
              type="button"
              aria-label="Wishlist"
              className="p-2 rounded-full hover:bg-slate-100 text-orange-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.949 0-3.622 1.147-4.312 2.789-.69-1.642-2.363-2.79-4.313-2.79C5.1 3.75 3 5.765 3 8.25 3 14.25 12 20.25 12 20.25S21 14.25 21 8.25z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header