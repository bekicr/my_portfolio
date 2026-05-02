import { motion } from 'framer-motion';
import { FaEnvelope, FaGraduationCap, FaMapMarkerAlt, FaPhoneAlt, FaUserAlt, FaPalette, FaCode } from 'react-icons/fa';
import profileImage from '../../assets/images/7I8A2639 copy.jpg';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.14
      }
    }
  };

  const itemVariants = {
    hidden: { y: 28, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const personalInfo = [
    { label: 'Name', value: 'Bereket Hailu', icon: FaUserAlt },
    { label: 'Email', value: 'berekethailu26@gmail.com', icon: FaEnvelope },
    { label: 'Phone', value: '+251 951 026 370', icon: FaPhoneAlt },
    { label: 'Education', value: 'BSc in Computer Science, Arsi University (2025)', icon: FaGraduationCap },
    { label: 'Focus', value: 'UI/UX Design and Frontend Development', icon: FaPalette },
    { label: 'Location', value: 'Addis Ababa, Ethiopia', icon: FaMapMarkerAlt }
  ];

  const skills = [
    { name: 'UI/UX Design', level: 90 },
    { name: 'React Development', level: 85 },
    { name: 'Figma Prototyping', level: 88 },
    { name: 'Responsive Design', level: 92 }
  ];

  return (
    <section id="about" className="section-padding section-surface">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-300 max-w-2xl mx-auto">
            A designer-developer profile built around clean interfaces, smooth interaction, and practical product thinking.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="perspective-scene relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <motion.div
                className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-300/40 to-emerald-300/30 blur-sm"
                animate={{ rotate: [8, -8, 8], scale: [1, 1.04, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="relative h-full w-full overflow-hidden rounded-[2rem] glass-panel"
                animate={{ rotateY: [-5, 5, -5], rotateX: [3, -3, 3], y: [0, -12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img src={profileImage} alt="Bereket Hailu" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </motion.div>

              <motion.div
                className="absolute -top-5 -right-5 glass-panel rounded-2xl px-4 py-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              >
                <span className="flex items-center gap-2 text-sm font-semibold text-cyan-100"><FaPalette /> Designer</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-5 -left-5 glass-panel rounded-2xl px-4 py-3"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
              >
                <span className="flex items-center gap-2 text-sm font-semibold text-emerald-100"><FaCode /> Developer</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-7">
            <div className="glass-panel rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I am a UI/UX Designer and Frontend Developer with a Computer Science background from Arsi University.
                  I focus on interfaces that are simple to use, visually refined, and responsive across devices.
                </p>
                <p>
                  My work connects design systems, interactive prototypes, and frontend implementation so ideas can move
                  from Figma to production with clarity and polish.
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Core Competencies</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div key={skill.name} className="space-y-2" variants={itemVariants} transition={{ delay: index * 0.1 }}>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                      <span className="text-sm text-cyan-100">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-cyan-300 to-emerald-300 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {personalInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <motion.div key={info.label} className="tilt-card glass-panel rounded-xl p-4" variants={itemVariants}>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-cyan-200"><Icon /></span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{info.label}</p>
                        <p className="text-sm font-medium text-white">{info.value}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
