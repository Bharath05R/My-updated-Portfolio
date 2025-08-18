import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN application with payment integration, user authentication, and admin dashboard.',
      longDescription: 'A comprehensive e-commerce solution built with React, Node.js, Express, and MongoDB. Features include user authentication, product management, shopping cart, payment processing with Stripe, order tracking, and an intuitive admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'React-based productivity app with drag-and-drop functionality and real-time collaboration.',
      longDescription: 'A modern task management application featuring drag-and-drop boards, real-time collaboration, team workspaces, deadline tracking, and comprehensive project analytics.',
      tech: ['React', 'TypeScript', 'Socket.io', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
      color: 'from-blue-500 to-green-500'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather application with location-based forecasts and beautiful data visualizations.',
      longDescription: 'A responsive weather dashboard providing real-time weather data, 7-day forecasts, interactive maps, and beautiful data visualizations using Chart.js and weather APIs.',
      tech: ['React', 'Chart.js', 'Weather API', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern portfolio with 3D animations, particle backgrounds, and smooth transitions.',
      longDescription: 'A cutting-edge portfolio website featuring Three.js 3D animations, interactive particle backgrounds, smooth Framer Motion transitions, and responsive design.',
      tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 5,
      title: 'Social Media App',
      description: 'Full-featured social platform with posts, comments, likes, and real-time messaging.',
      longDescription: 'A comprehensive social media platform with user profiles, post creation, commenting system, real-time messaging, friend requests, and activity feeds.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 6,
      title: 'Crypto Tracker',
      description: 'Real-time cryptocurrency tracking app with charts, portfolio management, and price alerts.',
      longDescription: 'A sophisticated crypto tracking application featuring real-time price updates, interactive charts, portfolio management, price alerts, and market analysis tools.',
      tech: ['React', 'Chart.js', 'CoinGecko API', 'Redux'],
      image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
      color: 'from-yellow-500 to-orange-500'
    }
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
      opacity: 1
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold mb-4"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A showcase of my latest work and creative solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.02}
                transitionSpeed={450}
                glareEnable={true}
                glareMaxOpacity={0.3}
                className="h-full"
              >
                <div 
                  className="glass-card rounded-2xl overflow-hidden h-full cursor-pointer glow"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`}></div>
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.github}
                          className="p-3 glass rounded-full text-white hover:text-pink-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={20} />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.live}
                          className="p-3 glass rounded-full text-white hover:text-green-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 text-xs glass rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-pink-400 hover:text-pink-300 text-sm font-semibold transition-colors"
                    >
                      View Details →
                    </motion.button>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-60 rounded-t-2xl`}></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:text-pink-400 transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.longDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 glass rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.github}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-full hover:from-gray-500 hover:to-gray-600 transition-all duration-300"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.live}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full glow-green transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
