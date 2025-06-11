"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-indigo-900/95 backdrop-blur-lg shadow-xl" 
          : "bg-gradient-to-r from-indigo-900 via-violet-900 to-indigo-800"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with updated styling */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link 
              href="/" 
              className="text-3xl font-extrabold tracking-tight flex items-center font-inter"
            >
              <motion.span 
                className={`px-4 py-2 rounded-full mr-3 shadow-md ${
                  scrolled 
                    ? "bg-violet-600 text-white" 
                    : "bg-white/10 text-violet-200"
                }`}
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                STUDIO
              </motion.span>
              <motion.span 
                className={`hidden lg:inline font-semibold ${
                  scrolled ? "text-violet-100" : "text-white"
                }`}
                whileHover={{ opacity: 0.9 }}
              >
                ZENO
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation with refined animations */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  href={link.href}
                  className={`font-medium text-base relative group font-inter ${
                    scrolled ? "text-violet-100 hover:text-violet-300" : "text-white hover:text-violet-200"
                  }`}
                >
                  {link.name}
                  <motion.span 
                    className="absolute left-0 bottom-[-6px] w-0 h-1 bg-violet-400 rounded-full"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA with updated styling */}
          <motion.div 
            className="hidden md:block ml-10"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className={`px-7 py-2.5 rounded-full font-semibold text-base shadow-lg transition-all duration-300 font-inter ${
                scrolled 
                  ? "bg-violet-600 text-white hover:bg-violet-500" 
                  : "bg-white/10 text-violet-200 hover:bg-violet-700 hover:text-white"
              }`}
            >
              Let&apos;s Connect
            </Link>
          </motion.div>

          {/* Mobile Menu Button with refined animation */}
          <motion.button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.25 }}
            >
              {isMenuOpen ? (
                <X size={28} className={scrolled ? "text-violet-100" : "text-white"} />
              ) : (
                <Menu size={28} className={scrolled ? "text-violet-100" : "text-white"} />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation with updated animations */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`md:hidden overflow-hidden ${
              scrolled 
                ? "bg-indigo-900/95 backdrop-blur-lg" 
                : "bg-gradient-to-b from-indigo-900 to-violet-900"
            }`}
          >
            <nav className="flex flex-col space-y-6 px-6 py-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className={`font-medium text-lg py-2.5 border-b ${
                      scrolled 
                        ? "text-violet-100 border-violet-700/30 hover:text-violet-300" 
                        : "text-white border-violet-800/30 hover:text-violet-200"
                    } block font-inter transition-all duration-300 hover:pl-3`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.25 }}
              >
                <Link
                  href="/contact"
                  className={`px-7 py-2.5 rounded-full font-semibold text-base text-center mt-6 shadow-lg transition-all duration-300 font-inter block ${
                    scrolled 
                      ? "bg-violet-600 text-white hover:bg-violet-500" 
                      : "bg-white/10 text-violet-200 hover:bg-violet-700 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Let&apos;s Connect
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}