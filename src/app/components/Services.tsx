'use client'

import { ArrowRight, Cpu, Shield, Zap, BarChart2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const Services = () => {
  const services = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI Analytics",
      description: "Actionable insights through advanced AI data analysis.",
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-gray-100",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Robust protection for your digital infrastructure.",
      gradient: "from-purple-500 to-indigo-500",
      bgColor: "bg-gray-100",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Scalable and efficient cloud infrastructure management.",
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "bg-gray-100",
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Business Intelligence",
      description: "Real-time reporting for strategic decision-making.",
      gradient: "from-green-500 to-teal-500",
      bgColor: "bg-gray-100",
    },
  ]

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  // Animation variants for button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-300 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 text-gray-800 font-inter"
          >
            STUDIO ZENO
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 font-inter"
          >
            Innovative tech solutions to empower your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover="hover"
              className={`relative ${service.bgColor} p-6 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors`}
            >
              <div className={`flex items-center justify-center w-10 h-10 mb-4 rounded-md bg-gradient-to-r ${service.gradient} text-white`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 font-inter">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 font-inter">
                {service.description}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-cyan-500 font-medium hover:text-cyan-600 font-inter mt-4"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            whileHover="hover"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-gray-900 bg-cyan-400 hover:bg-cyan-500 font-inter"
            >
              Explore All Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services