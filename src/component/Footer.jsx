import { motion } from 'framer-motion';
import img from "../assets/wws1.png"

const Footer = () => {
  // Footer data
  const footerData = {
    organization: {
      name: "Penn State Extension",
      college: "College of Agricultural Sciences",
      university: "The Pennsylvania State University",
      address: "323 Agricultural Administration Building University Park, PA 16802"
    },
    aboutExtension: [
      { name: "About", url: "#" },
      { name: "Leadership", url: "#" },
      { name: "Careers", url: "#" },
      { name: "Staff Directory", url: "#" },
      { name: "News", url: "#" },
      { name: "Events", url: "#" },
      { name: "Contact Us", url: "#" }
    ],
    customerService: [
      { name: "Help Center", url: "#" },
      { name: "Login Problems", url: "#" },
      { name: "Registration Issues", url: "#" },
      { name: "Website Feedback", url: "#" },
      { name: "Report a Problem", url: "#" },
      { name: "Accessibility", url: "#" }
    ],
    otherPrograms: [
      { name: "Pennsylvania 4-H", url: "#" },
      { name: "Better Kid Care", url: "#" },
      { name: "Master Gardeners", url: "#" },
      { name: "Food Safety", url: "#" },
      { name: "Water Resources", url: "#" },
      { name: "Nutrition Links", url: "#" },
      { name: "Agriculture", url: "#" }
    ]
  };

  return (
    // bg-gray-900
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white text-gray-800 pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Column - Organization Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:col-span-4 space-y-4"
          >
             <span><img src={img} className='w-40 h-40' alt="" /></span>
            <h3 className="text-xl font-bold text-gray-900">
              {footerData.organization.name}</h3>
            <p className="text-gray-600">{footerData.organization.college}</p>
            <p className="text-gray-600">{footerData.organization.university}</p>
            <p className="text-gray-500 text-sm mt-4">{footerData.organization.address}</p>
          </motion.div>

          {/* Middle Column - About & Customer Service */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {/* About Extension */}
            <div>
              <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-blue-500 text-blue-600">ABOUT EXTENSION</h4>
              <ul className="space-y-3">
                {footerData.aboutExtension.map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      href={item.url} 
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-green-500 text-green-600">CUSTOMER SERVICE</h4>
              <ul className="space-y-3">
                {footerData.customerService.map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      href={item.url} 
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Other Programs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="md:col-span-3"
          >
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-purple-500 text-purple-600">OTHER PROGRAMS</h4>
            <ul className="space-y-3">
              {footerData.otherPrograms.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={item.url} 
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Media Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 pt-6 border-t border-gray-200"
        >
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h4 className="text-white text-lg font-semibold mb-4 text-center">Follow Us</h4>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Facebook */}
              <a 
                href="#" 
                className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Facebook</span>
              </a>

              {/* Instagram */}
              <a 
                href="#" 
                className="flex items-center space-x-3 text-white hover:text-pink-400 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281H7.721c-.49 0-.875.385-.875.875v7.83c0 .49.385.875.875.875h8.558c.49 0 .875-.385.875-.875v-7.83c0-.49-.385-.875-.875-.875z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Instagram</span>
              </a>

              {/* LinkedIn */}
              <a 
                href="#" 
                className="flex items-center space-x-3 text-white hover:text-blue-300 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              {/* Twitter */}
              <a 
                href="#" 
                className="flex items-center space-x-3 text-white hover:text-blue-300 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Twitter</span>
              </a>

              {/* YouTube */}
              <a 
                href="#" 
                className="flex items-center space-x-3 text-white hover:text-red-400 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">YouTube</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="text-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} The Pennsylvania State University. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;