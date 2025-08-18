import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

const WorkExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      id: 1,
      period: "06/2024 - 04/2025",
      location: "Ashok Nagar, Chennai",
      company: "Swaaadle Tech Private Ltd",
      role: "Lead Generation Specialist",
      responsibilities: [
        "Researched 500+ qualified leads in construction & renewable sectors using LinkedIn Sales Navigator and Apollo.io.",
        "Increased marketing-qualified leads (MQLs) by 15% through targeted cold email campaigns.",
        "Boosted campaign email open rates by 35% using subject-line A/B testing.",
        "Maintained CRM hygiene and managed outreach via Deskara CRM.",
      ],
    },
    {
      id: 2,
      period: "10/2023 – 04/2024",
      location: "Pallavaram, Chennai",
      company: "TestPress",
      role: "Lead Generation Specialist",
      responsibilities: [
        "Sourced decision-makers from e-learning institutions via LinkedIn, SignalHire, and Apollo.io.",
        "Used SimilarWeb analytics for company filtering.",
        "Managed cold outreach and lead integration into HubSpot CRM.",
      ],
    },
    {
      id: 3,
      period: "09/2022 – 09/2023",
      location: "Tidel Park, Coimbatore",
      company: "InfoGnana (IG) Solutions",
      role: "Market Research Analyst / Lead Generation Specialist",
      responsibilities: [
        "Worked on market research and B2B enrichment for UK & US software sectors.",
        "Extracted prospect data using LinkedIn, Snov.io.",
        "Converted leads into MQLs using structured outreach.",
      ],
    },
    {
      id: 4,
      period: "12/2020 – 05/2022",
      location: "Uppilipalayam, Coimbatore",
      company: "Velan Info Services India Pvt Ltd",
      role: "Data Analyst",
      responsibilities: [
        "Cleaned and imported franchise & real estate data to CRM.",
        "Updated LinkedIn profiles of stakeholders.",
        "Hands-on with MS Excel, CRM tools, and web research.",
      ],
    },
    {
      id: 5,
      period: "01/2020 – 06/2020",
      location: "Saibaba Colony, Coimbatore",
      company: "Codingmart Technologies",
      role: "Web Researcher",
      responsibilities: [
        "Researched leads and supported business development team.",
      ],
    },
    {
      id: 6,
      period: "03/2019 – 08/2019",
      location: "Ukkadam, Coimbatore",
      company: "ABT True Value",
      role: "Back Office Executive",
      responsibilities: ["General admin and customer database management."],
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      title: "UI/UX Certification",
      issuer: "FITA Academy – Masterclass in UI/UX Design, Tambaram",
      date: "Feb 2025 – Present (In Progress)",
      skills: "HTML, CSS, Figma, JavaScript, Photoshop",
      img: "/images/FITA-master-program-UI-UX.jpg",
    },
    {
      title: "Digital Marketing Fundamentals",
      issuer: "Simplilearn | SkillUP",
      date: "Completed: March 2025",
      skills:
        "SEO, Content marketing, Email marketing, Social media management",
      img: "/images/Digital-marketing-fundamentals.jpeg",
    },
    {
      title: "UI/UX for Beginners",
      issuer: "D'Space Academy",
      date: "Completed: June 2025",
      skills:
        "User research, Wireframing, Prototyping, Visual design, Interaction design",
      img: "/images/UI-UX-Design-Community.jpeg",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="experience" className="py-5 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
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
            My <span className="gradient-text">Work Experience</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A summary of my professional journey and contributions
          </motion.p>
        </motion.div>

        {/* Experience Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={400}
                className="h-full"
              >
                <div
                  className="glass-card rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedExperience(exp)}
                >
                  <p className="text-gray-400 text-sm">
                    {exp.period} | {exp.location}
                  </p>
                  <h3 className="text-xl font-bold text-white mt-2">
                    {exp.company}
                  </h3>
                  <h4 className="text-pink-400 font-semibold">{exp.role}</h4>
                  <ul className="text-gray-300 mt-4 list-disc list-inside space-y-1 line-clamp-3">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-pink-400 mt-4 font-semibold">
                    View Details →
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Experience Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <p className="text-gray-400 text-sm">
                  {selectedExperience.period} | {selectedExperience.location}
                </p>
                <h3 className="text-3xl font-bold text-white mt-2">
                  {selectedExperience.company}
                </h3>
                <h4 className="text-pink-400 font-semibold mb-4">
                  {selectedExperience.role}
                </h4>
                <ul className="text-gray-300 space-y-2">
                  {selectedExperience.responsibilities.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="mt-6 px-6 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        <motion.section
          id="certificates"
          className="py-16 bg-gray-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Certifications
            </h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-700 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setSelectedImage(cert.img)}
                >
                  <motion.img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />

                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300 mb-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-400 mb-2">{cert.date}</p>
                    {cert.skills && (
                      <p className="text-sm text-gray-400">
                        <span className="font-semibold text-pink-400">
                          Skills:
                        </span>{" "}
                        {cert.skills}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          className="py-3 bg-gray-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-5 text-white">
              Education
            </h2>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg max-w-3xl mx-auto"
            >
              <h3 className="text-xl font-semibold text-white mb-1">
                Bachelor of Commerce (B.Com)
              </h3>
              <p className="text-pink-400 mb-1">
                Kovai Kalaimagal College of Arts and Science
              </p>
              <p className="text-sm text-gray-400 mb-1">
                Narasipuram, Coimbatore
              </p>
              <p className="text-sm text-gray-400 mb-4">2015 – 2018</p>
              <p className="text-gray-300">
                Coursework: Business Accounting, Economics, Marketing, Business
                Law.
              </p>
            </motion.div>
          </div>
        </motion.section>
        {/* Modal for Enlarged Image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="Enlarged Certificate"
                className="max-w-4xl max-h-[80vh] rounded-lg shadow-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </AnimatePresence>
    </section>
  );
};

export default WorkExperience;
