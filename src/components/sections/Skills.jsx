import React, { useState } from 'react';
import { motion } from 'framer-motion';
import skillsData from '../../data/skills.json';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: '💻', color: 'blue' },
    { id: 'backend', name: 'Backend', icon: '⚙️', color: 'green' },
    { id: 'tools', name: 'Tools', icon: '🛠️', color: 'purple' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const getSkillColor = (level) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  const SkillCard = ({ skill, index }) => (
    <motion.div
      variants={itemVariants}
      transition={{ delay: index * 0.05 }}
      className="bg-white dark:bg-dark-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
            <span className="text-xl">{skill.icon}</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Proficiency</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{skill.level}%</span>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="relative">
        <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-3">
          <motion.div
            className={`h-3 rounded-full ${getSkillColor(skill.level)}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
      </div>

      {/* Skill dots indicator */}
      <div className="flex gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-1 rounded-full ${
              i < Math.floor(skill.level / 20)
                ? 'bg-primary-300 dark:bg-primary-600'
                : 'bg-gray-200 dark:bg-dark-300'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="section-padding">
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
            Technical <span className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive skill set spanning frontend development, backend technologies, and modern development tools
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-dark-200 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-300'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData[activeCategory]?.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Skills Overview */}
        <motion.div 
          className="mt-16 grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Design Excellence</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creating intuitive and visually appealing user interfaces with modern design principles
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Performance Focus</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building fast, efficient applications with optimized code and best practices
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Modern Stack</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Leveraging cutting-edge technologies and frameworks for scalable solutions
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;