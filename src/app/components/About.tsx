"use client";
import { motion } from "framer-motion";

export default function About() {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="py-16 px-4 bg-gray-50 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Content Cards */}
        <motion.div className="grid md:grid-cols-2 gap-8 mb-12" variants={containerVariants}>
          {/* Mission Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              Empowering brands with innovative marketing for sustainable growth.
            </p>
          </motion.div>

          {/* Values Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
            <p className="text-gray-600">
              Integrity, innovation, and impact define our success.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Description */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-6 rounded-lg shadow-md text-center mb-12"
        >
          <p className="text-lg text-gray-700">
            We&apos;re a performance-focused marketing agency. Using data-driven insights and creative
            excellence, we deliver impactful campaigns.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="bg-blue-600 text-white p-6 rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Brand?</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 bg-white text-blue-600 rounded-full font-semibold"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}