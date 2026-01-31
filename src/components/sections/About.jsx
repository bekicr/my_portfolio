import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const personalInfo = [
    { label: 'Name', value: 'Bereket Hailu', icon: '👤' },
    { label: 'Email', value: 'berekethailu26@gmail.com', icon: '📧' },
    { label: 'Phone', value: '+251 951 026 370', icon: '📱' },
    { label: 'Education', value: 'BSc in Computer Science, Arsi University (2025)', icon: '🎓' },
    { label: 'Specialization', value: 'UI/UX Design, Frontend Development', icon: '💼' },
    { label: 'Location', value: 'Ethiopia', icon: '📍' }
  ];

  const skills = [
    { name: 'UI/UX Design', level: 90 },
    { name: 'React Development', level: 85 },
    { name: 'Figma Prototyping', level: 88 },
    { name: 'Responsive Design', level: 92 }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-100">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About <span className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Passionate about creating exceptional digital experiences through thoughtful design and clean code
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl transform rotate-6"></div>
              
              {/* Image container */}
              <div className="relative inset-0 bg-white dark:bg-dark-200 rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="/src/assets/images/photo_2025-08-06_07-14-27.jpg" 
                  alt="Bereket Hailu" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white dark:bg-dark-200 rounded-full px-4 py-2 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <span className="text-sm font-medium text-gray-900 dark:text-white">🎨 Designer</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-200 rounded-full px-4 py-2 shadow-lg"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              >
                <span className="text-sm font-medium text-gray-900 dark:text-white">💻 Developer</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Professional Summary */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Summary
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate UI/UX Designer and Frontend Developer with a Computer Science background from Arsi University. 
                  I specialize in creating beautiful, intuitive user interfaces and translating them into responsive frontend implementations. 
                  My expertise in Figma allows me to craft detailed design systems, interactive prototypes, and pixel-perfect interfaces for web and mobile applications.
                </p>
                <p>
                  With a strong foundation in both design principles and frontend technologies, I bridge the gap between aesthetics and functionality. 
                  I'm detail-oriented, collaborative, and constantly exploring the latest design trends and tools to create exceptional user experiences.
                </p>
              </div>
            </div>

            {/* Skills Progress */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Core Competencies</h4>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-1"
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Personal Info Grid */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-dark-200 rounded-lg"
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;