import React from "react";
import { motion } from "framer-motion";

const SoftSkills = () => {
  const marketingSkills = [
    "B2B Lead Generation",
    "Data Collection",
    "Web Research",
    "Data Entry & Cleansing",
    "CRM Integration",
    "Cold Email Campaigns",
    "Contact Discovery",
    "Lead Scoring",
    "Prospect List Building",
    "Email Verification",
    "Outreach Automation Tools",
    "Campaign Tracking",
    "ICP Targeting",
    "LinkedIn Outreach Strategy",
  ];

  const designSkills = [
    "Figma",
    "Adobe XD",
    "Canva",
    "Photoshop",
    "Wireframing",
    "Prototyping",
    "User Personas",
    "Low-Fidelity Mockups",
    "UI Style Guide",
    "Responsive Design",
    "HTML, CSS, JavaScript, Bootstrap",
  ];

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <section id="soft-skills" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12"
        >
          {/* Left Column: Marketing */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span className="text-pink-500">🧩</span> MARKETING & OUTREACH
              SKILLS
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {marketingSkills.map((skill, index) => (
                <motion.li
                  key={skill}
                  custom={index}
                  variants={listVariants}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Column: UI/UX & Design */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span className="text-blue-400">🖱️</span> UI/UX & DESIGN TOOLS
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {designSkills.map((skill, index) => (
                <motion.li
                  key={skill}
                  custom={index}
                  variants={listVariants}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Lead Generation & CRM Tools Section */}
        {/* Lead Generation & CRM Tools Section */}
        <motion.section
          id="lead-generation-tools"
          className="py-16 bg-gray-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Lead Generation & CRM Tools
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Apollo.io",
                "LinkedIn Sales Navigator",
                "SignalHire",
                "Lusha",
                "ZoomInfo",
                "Hunter.io",
                "Snov.io",
                "Clearbit",
                "Deskara CRM",
                "HubSpot CRM",
                "Zoho CRM",
                "Mailchimp",
                "Google Sheets",
                "Lemlist",
                "Crunchbase",
                "Rocket Reach",
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                >
                  <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center h-full">
                    <div className="text-3xl mb-3">⚡</div>
                    <p className="text-lg font-semibold text-white">{tool}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default SoftSkills;
