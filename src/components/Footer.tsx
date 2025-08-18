import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Heart, HomeIcon } from "lucide-react";
import { SiGithub, SiLinkedin, SiFacebook, SiBehance } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: SiGithub,
      href: "https://github.com/Bharath05R",
      color: "hover:text-gray-400",
    },
    {
      icon: SiLinkedin,
      href: "https://www.linkedin.com/in/bharathr05/",
      color: "hover:text-blue-400",
    },
    {
      icon: SiBehance,
      href: "https://www.behance.net/bharathbharath237",
      color: "hover:text-blue-400",
    },
    {
      icon: SiFacebook,
      href: "https://www.facebook.com/share/16gdr2JMma/",
      color: "hover:text-gray-200",
    }, // X instead of Twitter
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 mt-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          {/* Location with Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Location</h4>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7834.356668594396!2d76.83956449148297!3d10.949897806838283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85de9180ac6e3%3A0x7d4f5d6fdf6557c7!2sSennanur%2C%20Thenkarai%2C%20Tamil%20Nadu%20641101!5e0!3m2!1sen!2sin!4v1755238423380!5m2!1sen!2sin"
                width="450"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Address</h4>

            {/* Current Residence */}
            <div className="mb-4">
              <p className="text-pink-400 font-semibold">Current Residence</p>
              <p className="text-gray-400 flex items-center gap-2">
                <HomeIcon size={18} /> Keelakattalai, Chennai - 600117
              </p>
              <p className="text-gray-400 flex items-center gap-2">
                <Mail size={18} /> bharathgauti05@gmail.com
              </p>
              <p className="text-gray-400 flex items-center gap-2">
                <Phone size={18} /> 8526426805
              </p>
            </div>

            {/* Hometown Address */}
            <div>
              <p className="text-pink-400 font-semibold">Hometown Address</p>
              <p className="text-gray-400 flex items-center gap-2">
                <HomeIcon size={18} /> Sennanur, Thenkarai,
                <br /> Tamil Nadu - 641101
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative text-gray-400 hover:text-pink-400 transition-colors group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  viewport={{ once: true }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800 text-gray-400 ${social.color} transition-all duration-300`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="pt-8 mt-8 border-t border-white/10 text-center text-gray-400"
        >
          <p className="flex items-center justify-center gap-2">
            © {currentYear} All rights reserved. Designed & developed by{" "}
            <span className="font-semibold text-white">Bharath</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
