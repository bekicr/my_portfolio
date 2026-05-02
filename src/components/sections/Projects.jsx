import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaExternalLinkAlt, FaFilm, FaGithub, FaLayerGroup, FaPalette } from 'react-icons/fa';
import { useProjects } from '../../hooks/useProjects';

const Projects = () => {
  const { projects, loading } = useProjects();
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work', match: () => true, icon: FaLayerGroup },
    { id: 'full-stack', label: 'Full-Stack', match: (project) => project.category.includes('Full-Stack'), icon: FaCode },
    { id: 'frontend', label: 'Frontend', match: (project) => project.category.includes('Frontend'), icon: FaCode },
    { id: 'video-editing', label: 'Video Editing', match: () => false, icon: FaFilm, empty: true },
    { id: 'graphics-design', label: 'Graphics Design', match: () => false, icon: FaPalette, empty: true }
  ];

  const activeCategory = categories.find((category) => category.id === filter) || categories[0];
  const ActiveEmptyIcon = activeCategory.icon;
  const filteredProjects = projects.filter(activeCategory.match);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.12
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

  const ProjectCard = ({ project }) => (
    <motion.article
      variants={itemVariants}
      className="card tilt-card group overflow-hidden"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-sky-500/25 to-emerald-400/20" />
        <div className="absolute inset-0 floating-grid opacity-30" />
        <motion.div
          className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-cyan-200/30 bg-white/10 backdrop-blur-md"
          animate={{ rotateY: [-18, 18, -18], rotateX: [10, -10, 10] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-100">Case Study</p>
            <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-950/60 border border-white/10 text-xs font-medium text-cyan-100">
          {project.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-300 mb-5 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2 py-1 bg-white/10 border border-white/10 text-cyan-100 text-xs font-medium rounded">
              {tech}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-cyan-400 text-slate-950 text-sm font-semibold rounded-lg transition-colors hover:bg-cyan-300"
            >
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
              Live
            </a>
          ) : (
            <span className="inline-flex items-center justify-center px-3 py-2 bg-white/5 border border-white/10 text-slate-400 text-sm font-medium rounded-lg">
              Demo Soon
            </span>
          )}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3 py-2 border border-white/15 text-slate-100 text-sm font-semibold rounded-lg transition-colors hover:border-cyan-300/70 hover:bg-white/10"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
          ) : (
            <span className="inline-flex items-center justify-center px-3 py-2 bg-white/5 border border-white/10 text-slate-400 text-sm font-medium rounded-lg">
              Private
            </span>
          )}

          <Link
            to={`/projects/${project.slug}`}
            className="col-span-2 text-center px-3 py-2 border border-cyan-300/40 hover:bg-cyan-300/10 text-cyan-100 text-sm font-semibold rounded-lg transition-colors"
          >
            Open Case Study
          </Link>
        </div>
      </div>
    </motion.article>
  );

  if (loading) {
    return (
      <section id="projects" className="section-padding section-surface">
        <div className="container text-center">
          <div className="inline-block w-8 h-8 border-2 border-cyan-300 border-t-transparent rounded-full animate-spin" />
          <p className="mt-4 text-slate-300">Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 floating-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(34,211,238,0.13),transparent_26rem),radial-gradient(circle_at_85%_45%,rgba(16,185,129,0.11),transparent_25rem)]" />

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-300 max-w-2xl mx-auto">
            Web development work is live now. Video editing and graphics design sections are ready for future work.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'glass-panel text-slate-200 hover:border-cyan-300/60'
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {filteredProjects.length > 0 ? (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="mx-auto max-w-2xl text-center glass-panel rounded-3xl p-10"
            initial={{ opacity: 0, y: 20, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10">
              <ActiveEmptyIcon className="h-9 w-9 text-cyan-200" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{activeCategory.label} Projects Coming Soon</h3>
            <p className="text-slate-300">
              This section is intentionally empty for now. You can add your video editing or graphics design work here later.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
