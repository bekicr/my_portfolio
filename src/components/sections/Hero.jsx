import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

const Hero = () => {
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
    hidden: { y: 22, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/bekicr', icon: FaGithub },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/', icon: FaLinkedinIn },
    { name: 'Telegram', href: 'https://t.me/bek_iii', icon: FaTelegramPlane }
  ];

  return (
    <section id="home" className="section-padding min-h-screen flex items-center relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 floating-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.2),transparent_26rem),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.16),transparent_24rem)]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="absolute bottom-12 right-10 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 11, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      <motion.div
        className="container relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-14">
          <div className="max-w-3xl">
            <motion.div variants={itemVariants} className="mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full text-sm font-semibold text-cyan-100">
                3D Portfolio Experience
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-normal"
            >
              <span className="text-white">Bereket Hailu</span>
              <span className="block text-gradient">builds digital products with depth.</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-200 mb-6 font-medium"
            >
              Full-Stack Developer | UI/UX Designer | React Specialist
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed"
            >
              I design and develop smooth, responsive web experiences with clean interfaces,
              practical systems, and a professional visual layer that makes each product feel alive.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#projects"
                className="btn-primary group inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                View Projects
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              <motion.a
                href="#contact"
                className="btn-secondary group inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                Contact Me
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-slate-200 hover:text-cyan-200 hover:border-cyan-300/60 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 4, y: -3 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="perspective-scene relative min-h-[420px] lg:min-h-[560px]">
            <motion.div
              className="absolute inset-x-8 top-10 bottom-10 rounded-[2rem] glass-panel"
              animate={{ rotateY: [-8, 8, -8], rotateX: [4, -4, 4], y: [0, -18, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute inset-6 rounded-[1.5rem] border border-cyan-200/20 bg-slate-950/50" />
              <div className="absolute left-10 right-10 top-12 h-24 rounded-2xl bg-gradient-to-r from-cyan-300/20 to-emerald-300/20 border border-white/10" />
              <div className="absolute left-10 right-24 top-44 space-y-4">
                <div className="h-4 rounded-full bg-white/25" />
                <div className="h-4 w-2/3 rounded-full bg-white/15" />
                <div className="h-4 w-4/5 rounded-full bg-cyan-300/25" />
              </div>
              <div className="absolute left-10 bottom-12 grid grid-cols-3 gap-3">
                {['React', 'Node', 'UI'].map((label) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-cyan-100">
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="orbital-ring absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2"
              animate={{ rotateZ: 360, rotateX: [62, 72, 62] }}
              transition={{ rotateZ: { duration: 18, repeat: Infinity, ease: 'linear' }, rotateX: { duration: 8, repeat: Infinity } }}
            />
            <motion.div
              className="orbital-ring absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2"
              animate={{ rotateZ: -360, rotateY: [58, 70, 58] }}
              transition={{ rotateZ: { duration: 14, repeat: Infinity, ease: 'linear' }, rotateY: { duration: 7, repeat: Infinity } }}
            />

            <motion.div
              className="absolute right-2 top-20 rounded-2xl glass-panel px-5 py-4"
              animate={{ y: [0, -16, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="block text-3xl font-bold text-white">3D</span>
              <span className="text-sm text-cyan-100">Smooth UI</span>
            </motion.div>

            <motion.div
              className="absolute left-2 bottom-24 rounded-2xl glass-panel px-5 py-4"
              animate={{ y: [0, 18, 0], rotate: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="block text-sm text-slate-300">Available for</span>
              <span className="font-bold text-emerald-200">Web Projects</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="w-6 h-10 border border-cyan-100/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-200 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
