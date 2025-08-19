import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    toast.info("📨 Sending...");

    try {
      // 1️⃣ send notification to you
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
        process.env.REACT_APP_EMAILJS_TEMPLATE_NOTIFICATION_ID as string,
        formRef.current as HTMLFormElement,
        process.env.REACT_APP_EMAILJS_USER_ID as string
      );

      // 2️⃣ send confirmation to user
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID as string
      );

      toast.success("✅ Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
      formRef.current?.reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error('❌ Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl lg:text-6xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 glow">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
            <div className="glass-card rounded-2xl p-8 glow-green">
              <h3 className="text-2xl font-bold text-white mb-6">Let's connect</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-6">
                <a href="mailto:bharathgauti05@gmail.com" className="flex items-center space-x-4 p-4 glass rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-400">bharathgauti05@gmail.com</div>
                  </div>
                </a>
                <a href="tel:+918526426805" className="flex items-center space-x-4 p-4 glass rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-400">+91 8526426805</div>
                  </div>
                </a>
                <div className="flex items-center space-x-4 p-4 glass rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-gray-400">Chennai, Coimbatore</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
