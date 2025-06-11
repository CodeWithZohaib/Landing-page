"use client"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 text-gray-700 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900">STUDIO ZENO</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Building digital solutions that help businesses grow and connect with their customers in meaningful ways.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-md transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Services",
                "Portfolio",
                "Blog",
                "Contact",
                "Careers"
              ].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Info</h3>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <MapPin className="mt-1 mr-3 text-blue-600 flex-shrink-0" size={16} />
                <p className="text-gray-600">
                  456 Tech Street<br />
                  San Francisco, CA 94102
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <Mail className="mr-3 text-blue-600 flex-shrink-0" size={16} />
                <a 
                  href="mailto:hello@techflow.com" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  hello@techflow.com
                </a>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <Phone className="mr-3 text-blue-600 flex-shrink-0" size={16} />
                <a 
                  href="tel:+14155551234" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  (415) 555-1234
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} TechFlow. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-sm"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}