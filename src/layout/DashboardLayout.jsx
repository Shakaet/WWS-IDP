import React, { useMemo, useState, useEffect, useCallback } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../Hooks/useAuth/useAuth'
import { useRole } from '../Context/RoleContext.jsx'


const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { signOuts, user } = useAuth()
  const { role, roleLoading, ambassadorAccess } = useRole()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const handleLogout = React.useCallback(async () => {
    try {
      await signOuts()
      navigate('/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }, [signOuts, navigate])

  const getMenuItems = useCallback(() => {
    const commonItems = [
      { name: 'Dashboard Home', path: '/dashboard/dashboard-home', icon: '🏠' },

    ]

    if (role === 'user') {
      return [
        ...commonItems,
        { name: 'My Applications', path: '/dashboard/my-application', icon: '📋' },
        { name: 'Collaborate', path: '/contact', icon: '🤝' },
        { name: 'Home', path: '/', icon: '🏡' },
        { name: 'Logout', path: '#', icon: '🚪', action: handleLogout }
      ]
    }

    // if (isambassador && !ambassadorLoading) {
    //   return [
    //     ...commonItems,
    //     { name: 'All Applications', path: '/dashboard/allApplication', icon: '📊' },
    //     { name: 'Collaborate', path: '/contact', icon: '🤝' },
    //     { name: 'Home', path: '/', icon: '🏡' },
    //     { name: 'Logout', path: '#', icon: '🚪', action: handleLogout }
    //   ]
    // }


    //  if ( ambassadorRole && !ambassadorDataLoading && ambassadorAccess?.scholarships) {
    //   return [
    //     ...commonItems,
    //     { name: 'All Applications', path: '/dashboard/allApplication', icon: '📊' },
    //     { name: 'Add New Scholarship', path: '/dashboard/add-new-scholarship', icon: '🎓' },
    //     { name: 'Manage Scholarships', path: '/dashboard/manage-scholarships', icon: '🎓' },
    //     { name: 'Collaborate', path: '/contact', icon: '🤝' },
    //     { name: 'Home', path: '/', icon: '🏡' },
    //     { name: 'Logout', path: '#', icon: '🚪', action: handleLogout }
    //   ]
    // }

    //  if ( ambassadorRole && !ambassadorDataLoading && ambassadorAccess?.courses) {
    //   return [
    //     ...commonItems,
    //     { name: 'All Applications', path: '/dashboard/allApplication', icon: '📊' },
    //     { name: 'Add New Courses', path: '/dashboard/add-course', icon: '📚' },
    //      { name: 'Manage Courses', path: '/dashboard/manage-courses', icon: '📚' },
    //     { name: 'Collaborate', path: '/contact', icon: '🤝' },
    //     { name: 'Home', path: '/', icon: '🏡' },
    //     { name: 'Logout', path: '#', icon: '🚪', action: handleLogout }
    //   ]
    // }

    //  if ( ambassadorRole && !ambassadorDataLoading && ambassadorAccess?.events) {
    //   return [
    //     ...commonItems,
    //     { name: 'All Applications', path: '/dashboard/allApplication', icon: '📊' },
    //      { name: 'Add New Events', path: '/dashboard/add-events', icon: '📅' },
    //      { name: 'Manage Events', path: '/dashboard/manage-events', icon: '📅' },
    //     { name: 'Collaborate', path: '/contact', icon: '🤝' },
    //     { name: 'Home', path: '/', icon: '🏡' },
    //     { name: 'Logout', path: '#', icon: '🚪', action: handleLogout }
    //   ]
    // }

    //  if ( ambassadorRole && !ambassadorDataLoading && ambassadorAccess?.universities) {
    //   return [
    //     ...commonItems,
    //     { name: 'All Applications', path: '/dashboard/allApplication', icon: '📊' },
    //     { name: 'Add New University', path: '/dashboard/add-new-university', icon: '🏛️' },
    //     { name: 'Manage Universities', path: '/dashboard/manage-universities', icon: '🏛️' },
    //     { name: 'Collaborate', path: '/contact', icon: '🤝' },
    //     { name: 'Home', path: '/', icon: '🏡' },
    //     { name: 'Logout', path: '#', icon: '🚪', action: handleLogout }
    //   ]
    // }

    if (role === 'ambassador') {
      const menuItems = [
        ...commonItems,
        { name: 'All Applications', path: '/dashboard/allApplication', icon: '📊' },
      ];

      if (ambassadorAccess?.scholarships) {
        menuItems.push(
          { name: 'Add New Scholarship', path: '/dashboard/add-new-scholarship', icon: '🎓' },
          { name: 'Manage Scholarships', path: '/dashboard/manage-scholarships', icon: '🎓' }
        );
      }

      if (ambassadorAccess?.courses) {
        menuItems.push(
          { name: 'Add New Courses', path: '/dashboard/add-course', icon: '📚' },
          { name: 'Manage Courses', path: '/dashboard/manage-courses', icon: '📚' }
        );
      }

      if (ambassadorAccess?.events) {
        menuItems.push(
          { name: 'Add New Events', path: '/dashboard/add-events', icon: '📅' },
          { name: 'Manage Events', path: '/dashboard/manage-events', icon: '📅' }
        );
      }

      if (ambassadorAccess?.universities) {
        menuItems.push(
          { name: 'Add New University', path: '/dashboard/add-new-university', icon: '🏛️' },
          { name: 'Manage Universities', path: '/dashboard/manage-universities', icon: '🏛️' }
        );
      }

      menuItems.push(
        { name: 'Collaborate', path: '/contact', icon: '🤝' },
        { name: 'Home', path: '/', icon: '🏡' },
        { name: 'Logout', path: '#', icon: '🚪', action: handleLogout }
      );

      return menuItems;
    }

    if (role === 'admin') {
      return [
        ...commonItems,
        { name: 'Add New Scholarship', path: '/dashboard/add-new-scholarship', icon: '🎓' },
        { name: 'Add New University', path: '/dashboard/add-new-university', icon: '🏛️' },
        { name: 'Add New Courses', path: '/dashboard/add-course', icon: '📚' },
        { name: 'Add New Events', path: '/dashboard/add-events', icon: '📅' },
        { name: 'Manage Applications', path: '/dashboard/manage-application', icon: '📋' },
        { name: 'Manage Ambassador', path: '/dashboard/manage-ambassador', icon: '📋' },
        { name: 'Manage Scholarships', path: '/dashboard/manage-scholarships', icon: '🎓' },
        { name: 'Manage Universities', path: '/dashboard/manage-universities', icon: '🏛️' },
        { name: 'Manage Courses', path: '/dashboard/manage-courses', icon: '📚' },
        { name: 'Manage Events', path: '/dashboard/manage-events', icon: '📅' },
        { name: 'Activity Log', path: '/dashboard/activity-log', icon: '📅' },
        { name: 'Home', path: '/', icon: '🏡' },
        { name: 'Logout', path: '#', icon: '🚪', action: handleLogout }
      ]
    }

    return commonItems
  }, [role, ambassadorAccess, handleLogout])

  const menuItems = useMemo(() => getMenuItems(), [getMenuItems])

  // Cache pour un rendu fluide pendant les transitions
  const [stableMenuItems, setStableMenuItems] = useState([])
  const [hasResolvedRole, setHasResolvedRole] = useState(false)

  useEffect(() => {
    if (!roleLoading) {
      setStableMenuItems(menuItems)
      setHasResolvedRole(true)
    }
  }, [roleLoading, menuItems])

  const getUserRole = () => {
    if (role === 'admin') return 'Admin'
    if (role === 'ambassador') return 'Ambassador'
    if (role === 'user') return 'User'
    if (roleLoading) return "Loading"
    if (!user) return "Loading"
    return 'Loading...'
  }

  const getRoleColor = () => {
    if (role === 'admin') return 'from-red-500 to-red-600'
    if (role === 'ambassador') return 'from-green-500 to-green-600'
    return 'from-blue-500 to-blue-600'
  }

  const getRoleBadgeColor = () => {
    if (role === 'admin') return 'bg-red-100 text-red-800 border-red-200'
    if (role === 'ambassador') return 'bg-green-100 text-green-800 border-green-200'
    return 'bg-blue-100 text-blue-800 border-blue-200'
  }

  // Guard d'accès: rediriger si route dashboard non autorisée
  useEffect(() => {
    // Attendre la première résolution pour éviter les redirections agressives
    if (!hasResolvedRole) return
    const effectiveMenu = roleLoading ? stableMenuItems : menuItems
    const allowedPaths = new Set(effectiveMenu.filter(i => !i.action).map(i => i.path))
    const isDashboardPath = location.pathname.startsWith('/dashboard')
    if (isDashboardPath && !allowedPaths.has(location.pathname)) {
      navigate('/dashboard/dashboard-home', { replace: true })
    }
  }, [hasResolvedRole, roleLoading, stableMenuItems, menuItems, location.pathname, navigate])
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Gorgeous Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative w-72 bg-white/95 backdrop-blur-sm shadow-2xl border-r border-gray-200/50 transition-transform duration-300 ease-in-out z-50 overflow-hidden`}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative h-full flex flex-col">
          {/* Elegant Header */}
          <div className="relative px-6 py-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <span className="text-lg font-bold">W</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold tracking-wide">WWS Dashboard</h2>
                  <p className="text-xs text-blue-200 opacity-80">Workforce Worldwide Solutions</p>
                </div>
              </div>
              <button
                onClick={closeSidebar}
                className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* User Profile Section */}
          <div className="relative p-6 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
            <div className="flex items-center space-x-4">
              <div className={`relative w-14 h-14 bg-gradient-to-br ${getRoleColor()} rounded-2xl flex items-center justify-center shadow-lg overflow-hidden`}>
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <span className="text-white text-xl font-bold">
                    {getUserRole().charAt(0).toUpperCase()}
                  </span>
                )}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900">Welcome Back!</h3>
                <p className="text-xs text-gray-600 mb-2">{user?.displayName}</p>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRoleBadgeColor()}`}>
                  {getUserRole()}
                </span>
              </div>
            </div>
          </div>



          {/* Enhanced Navigation */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                item.action ? (
                  <button
                    key={index}
                    onClick={() => {
                      closeSidebar()
                      item.action()
                    }}
                    className="group relative flex items-center w-full px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-200 text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-red-50 hover:text-red-700"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg mr-3 bg-gray-100 text-gray-500 group-hover:bg-red-100 group-hover:text-red-600 transition-all duration-200">
                      <span className="text-sm">{item.icon}</span>
                    </div>
                    <span className="truncate">{item.name}</span>
                  </button>
                ) : (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={closeSidebar}
                    className={`group relative flex items-center px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-200 ${location.pathname === item.path
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-blue-50 hover:text-blue-700'
                      }`}
                  >
                    <div className={`flex items-center justify-center w-8 h-8 rounded-lg mr-3 ${location.pathname === item.path
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                      } transition-all duration-200`}>
                      <span className="text-sm">{item.icon}</span>
                    </div>
                    <span className="truncate">{item.name}</span>
                    {location.pathname === item.path && (
                      <div className="absolute right-2 w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </Link>
                )
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
            <div className="text-center">
              <p className="text-xs text-gray-500">© 2024 WWS Platform</p>
              <p className="text-xs text-gray-400">Version 2.0.1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Main Content - Perfectly Aligned */}
      <div className="flex-1 md:ml-0">
        {/* Mobile Menu Button */}
        <div className="md:hidden sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 py-3">
          <button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="font-medium">Menu</span>
          </button>
        </div>

        {/* Content Area */}
        <main className="min-h-screen p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className=" backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-6rem)]">
              <div className="h-full p-6 md:p-8 lg:p-10">
                <Outlet />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout