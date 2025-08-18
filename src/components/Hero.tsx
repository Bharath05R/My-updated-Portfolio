import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Laptop, Terminal } from "lucide-react";
import { SiGithub, SiLinkedin, SiFacebook, SiBehance } from "react-icons/si";
import Tilt from "react-parallax-tilt";

const Laptop3D = () => {
  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <boxGeometry args={[2, 1.5, 0.2]} />
        <meshStandardMaterial color="#8338ec" />
      </mesh>
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[1.8, 1.2, 0.1]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
    </Float>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-lg text-pink-400 font-small">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-normal mb-6"
            >
              <span className="gradient-text">Lead Generation Specialist | UI/UX Designer</span>
              <br />
              <span className="text-white"></span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-lg"
            >
              I'm a tenacious, people-centric professional who loves discovering
              new places and cultures. Constantly seeking challenges, I adapt
              easily and communicate with clarity, tact, and positivity.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("experience")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full glow transition-all duration-300"
              >
                View My Work
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 glass border border-purple-500 text-white font-semibold rounded-full hover:bg-purple-500/20 transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-6 mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="https://github.com/Bharath05R"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                target="_blank"
              >
                <SiGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="https://www.linkedin.com/in/bharathr05/"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank"
              >
                <SiLinkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="https://www.facebook.com/share/16gdr2JMma/"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                target="_blank"
              >
                <SiFacebook size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="https://www.behance.net/bharathbharath237"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                target="_blank"
              >
                <SiBehance size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <Tilt
              tiltMaxAngleX={25}
              tiltMaxAngleY={25}
              scale={1.05}
              transitionSpeed={450}
              glareEnable={true}
              glareMaxOpacity={0.5}
              className="w-full h-85 lg:h-[500px]" // no full-width stretch
            >
              <div className="w-full h-full glass-card rounded-2xl p-8 glow relative overflow-hidden">
                {/* Portrait Image */}
                <motion.img
                  src="/images/barath-profile-image.jpeg"
                  alt="My Portrait"
                  className="w-full h-full object-cover rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Tech Icons Overlay */}
                <div className="absolute top-4 right-4 space-y-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-10 h-10 glass rounded-full flex items-center justify-center"
                  >
                    <Laptop className="text-pink-400" size={18} />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-10 h-10 glass rounded-full flex items-center justify-center"
                  >
                    <Terminal className="text-green-400" size={18} />
                  </motion.div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
