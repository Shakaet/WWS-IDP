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
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8"
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
            <h3 className="text-xl font-bold">
             
              {footerData.organization.name}</h3>
            <p className="text-gray-300">{footerData.organization.college}</p>
            <p className="text-gray-300">{footerData.organization.university}</p>
            <p className="text-gray-400 text-sm mt-4">{footerData.organization.address}</p>
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
              <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">ABOUT EXTENSION</h4>
              <ul className="space-y-3">
                {footerData.aboutExtension.map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      href={item.url} 
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">CUSTOMER SERVICE</h4>
              <ul className="space-y-3">
                {footerData.customerService.map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      href={item.url} 
                      className="text-gray-300 hover:text-white transition-colors duration-200"
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
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">OTHER PROGRAMS</h4>
            <ul className="space-y-3">
              {footerData.otherPrograms.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={item.url} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} The Pennsylvania State University. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;