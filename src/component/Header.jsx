import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import icon from "../assets/wws1.png"
import useAuth from '../Hooks/useAuth/useAuth'

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  let { user, signOuts } = useAuth()

  console.log(user)

 const navItems = [
  { label: 'Study Abroad', to: '/' },
  { label: 'Destinations', to: '/' },
  { label: 'Courses', to: '/' },
  { label: 'Scholarships', to: '/' },
  { label: 'IELTS', to: '/' },
];


  const handleLogout = () => {
    signOuts()
      .then(() => {
        // signed out
      })
      .catch(() => { })
  }

  return (
    // bg-white/95
   <header className="sticky top-0 z-50 bg-white backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-18 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link to="/" className="flex items-center gap-2" aria-label="IDP home">
              <img 
                width={220} 
                height={48}
                src={icon} 
                alt="World Wise Scholars" 
                className="h-28 md:h-32 w-auto object-contain"
              />
            </Link>
          </div>
          {/* Center: Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm xl:text-[15px] text-slate-700 hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          {/* Right: Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <>
                {/* User Profile Section */}
                <div className="relative">
                  {/* User Avatar */}
                  <button 
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="flex items-center gap-2 focus:outline-none"
                  >
                    {user.photoURL ? (
                      <img 
                        src={user.photoURL} 
                        alt="Profile" 
                        className="w-10 h-10 rounded-full object-cover border-2 border-slate-200"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
                        {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </button>
                  
                  {/* Profile Dropdown */}
                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-slate-800 truncate">
                          {user.displayName || 'User'}
                        </p>
                        <p className="text-xs text-slate-500 truncate">
                          {user.email}
                        </p>
                      </div>
                      <div className="px-4 py-2">
                        <button 
                          onClick={() => { setIsProfileDropdownOpen(false); handleLogout(); }}
                          className="w-full text-left text-sm text-slate-700 hover:bg-slate-50 rounded px-3 py-2 transition-colors"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link
                to="/signin"
                className="inline-flex items-center rounded-full border-1 border-blue-400 px-5 py-2 text-sm text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Sign in
              </Link>
            )}
            
            {/* Heart icon */}
            <button
              type="button"
              aria-label="Wishlist"
              className="p-2 rounded-full hover:bg-slate-100 text-orange-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.949 0-3.622 1.147-4.312 2.789-.69-1.642-2.363-2.79-4.313-2.79C5.1 3.75 3 5.765 3 8.25 3 14.25 12 20.25 12 20.25S21 14.25 21 8.25z" />
              </svg>
            </button>
          </div>
          {/* Mobile: hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile wishlist button */}
            <button
              type="button"
              aria-label="Wishlist"
              className="p-2 rounded-full hover:bg-slate-100 text-orange-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.949 0-3.622 1.147-4.312 2.789-.69-1.642-2.363-2.79-4.313-2.79C5.1 3.75 3 5.765 3 8.25 3 14.25 12 20.25 12 20.25S21 14.25 21 8.25z" />
              </svg>
            </button>
            
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isMobileOpen}
              onClick={() => setIsMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors"
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
        className={`${isMobileOpen ? 'block' : 'hidden'} lg:hidden border-t border-gray-100 bg-white`}
      >
        <div className="px-4 py-4 space-y-3">
          {/* Navigation Links */}
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setIsMobileOpen(false)}
                className="block rounded-lg px-3 py-3 text-base text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* Mobile User Profile Section */}
          {user && (
            <div className="mt-3 px-3 py-3 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-3">
                {user.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt="Profile" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-slate-200"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-medium">
                    {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 truncate">
                    {user.displayName || 'User'}
                  </p>
                  <p className="text-xs text-slate-500 truncate">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="mt-3 flex items-center gap-3 px-1">
            {user ? (
              <button
                onClick={() => { setIsMobileOpen(false); handleLogout() }}
                className="flex-1 inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/signin"
                onClick={() => setIsMobileOpen(false)}
                className="flex-1 inline-flex items-center justify-center rounded-full border-1 border-blue-400 px-5 py-2 text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Sign in
              </Link>
            )}
            <button
              type="button"
              aria-label="Wishlist"
              className="p-2 rounded-full hover:bg-slate-100 text-orange-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.949 0-3.622 1.147-4.312 2.789-.69-1.642-2.363-2.79-4.313-2.79C5.1 3.75 3 5.765 3 8.25 3 14.25 12 20.25 12 20.25S21 14.25 21 8.25z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header