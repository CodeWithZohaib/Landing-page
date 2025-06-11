"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface Reason {
  title: string;
  description: string;
}

const WhyChooseUs = () => {
  const reasons: Reason[] = [
    {
      title: "Innovative Strategies",
      description: "We design bold, data-driven plans to align with your vision and drive growth.",
    },
    {
      title: "Creative Impact",
      description: "Our team crafts compelling content that captivates and converts.",
    },
    {
      title: "Measurable Success",
      description: "Proven results with clear metrics to showcase your business growth.",
    },
    {
      title: "Clear Insights",
      description: "Transparent analytics to track and optimize your campaign performance.",
    },
    {
      title: "Personalized Care",
      description: "Dedicated support tailored to your needs, available when you need it.",
    },
    {
      title: "Expert Knowledge",
      description: "Industry-leading expertise to keep your brand ahead of the curve.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-teal-50 to-coral-50 overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-teal-200 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            rotate: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-20 -right-20 w-64 h-64 bg-coral-200 rounded-full blur-2xl"
        />
      </motion.div>

      <div className="container mx-auto px-6 max-w-6xl relative">
        {/* Centered Tagline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-teal-900 mb-4 leading-tight font-inter"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Why Choose{" "}
            <motion.span
              className="text-coral-600 bg-coral-100/30 px-3 py-1 rounded-lg"
              whileHover={{ backgroundColor: "rgba(255, 127, 127, 0.4)" }}
              transition={{ duration: 0.3 }}
            >
              STUDIO ZENO
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-teal-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Empowering your brand with innovative solutions and unmatched dedication.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                transition: { type: "spring", stiffness: 300 },
              }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center mb-4"
              >
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mr-3" />
                <h3 className="text-xl font-semibold text-teal-900 font-inter">
                  {reason.title}
                </h3>
              </motion.div>
              <p className="text-teal-700 leading-relaxed font-inter">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;