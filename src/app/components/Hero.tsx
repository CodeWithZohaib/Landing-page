'use client'

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900 overflow-hidden min-h-[700px] flex items-center font-sans pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/60 to-purple-50/80"
        />
        {/* Floating Background Elements */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.03 }}
          transition={{ duration: 2.5, delay: 1 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-indigo-400 to-cyan-400 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-gray-200/50"
            >
              <motion.span 
                className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.6, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-sm font-semibold text-gray-700 font-open-sans">
                ✨ Innovation Meets Excellence
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-montserrat tracking-tight text-gray-900"
            >
              Elevate Your{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Digital Journey
              </motion.span>{" "}
              with Next-Gen Solutions
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed font-open-sans"
            >
              Harness the power of cutting-edge technology and creative innovation 
              to transform your business vision into reality. We craft personalized 
              experiences that resonate with your audience and accelerate growth.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/solutions"
                  className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 text-center overflow-hidden font-montserrat"
                >
                  <motion.span 
                    className="relative z-10 flex items-center justify-center"
                    whileHover={{ x: 3 }}
                  >
                  
                    <motion.span 
                      className="ml-3 inline-block"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      
                    </motion.span>
                  </motion.span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#connect"
                  className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 text-center group flex items-center justify-center font-montserrat shadow-md"
                >
                  <motion.span 
                    className="relative flex items-center"
                    whileHover={{ x: 3 }}
                  >
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    Let&apos;s Connect
                    <span className="ml-2">💬</span>
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16 grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <motion.div 
                  className="text-2xl md:text-3xl font-bold text-blue-600 mb-2"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  500+
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-2xl md:text-3xl font-bold text-purple-600 mb-2"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    delay: 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  98%
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-2xl md:text-3xl font-bold text-indigo-600 mb-2"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    delay: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  24/7
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">Support Available</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 relative mt-10 lg:mt-0"
          >
            <motion.div 
              className="relative w-full max-w-lg mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Main Card */}
              <motion.div 
                className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-200/50 backdrop-blur-sm p-8"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Content inside the card */}
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-3xl">🚀</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Ready to Launch?</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Transform your ideas into powerful digital experiences that captivate and convert.
                  </p>
                  
                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full"
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full"
                    animate={{ 
                      y: [0, -8, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2.5,
                      delay: 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>

              {/* Floating accent cards */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-white text-xl">💡</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  delay: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-white text-lg">⭐</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}