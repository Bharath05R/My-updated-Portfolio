import React from "react";
import { motion } from "framer-motion";
import { Download, User } from "lucide-react";
import Tilt from "react-parallax-tilt";

const About = () => {
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
    <section id="about" className="py-20">
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Right Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-6"
            >
              Lead Generation Specialist & B2B Prospecting Expert
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed"
            >
              3+ years of professional experience in B2B lead generation, market
              research, and CRM systems (HubSpot, Zoho, Deskara), bringing a
              unique blend of design thinking and data-driven problem solving.
              <br />
              <br />
              Strong knowledge of HTML, CSS, JavaScript, and Bootstrap, enabling
              seamless collaboration with developers.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed"
            >
              Results-driven UI/UX Designer with expertise in Figma, Adobe XD,
              Photoshop, Wireframing, Prototyping, and Responsive Web Design.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.a
                href="/resume/BHARATH_Lead Gen_UIUX_Designer_Resume.pdf"
                download="BHARATH_Lead Gen_UIUX_Designer_Resume.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full glow-green transition-all duration-300"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        {/* Soft Skills Section */}
        <motion.section
          id="soft-skills"
          className="py-16 bg-gray-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Soft Skills
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { skill: "Communication", emoji: "💬" },
                { skill: "Teamwork", emoji: "🤝" },
                { skill: "Problem-Solving", emoji: "🧠" },
                { skill: "Adaptability", emoji: "🔄" },
                { skill: "Time Management", emoji: "⏳" },
                { skill: "Leadership", emoji: "🚀" },
                { skill: "Creativity", emoji: "🎨" },
                { skill: "Critical Thinking", emoji: "🔍" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center"
                >
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <p className="text-lg font-semibold text-white">
                    {item.skill}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default About;
