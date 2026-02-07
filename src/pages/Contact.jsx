import { motion } from 'framer-motion'
import { useState } from 'react'
import SEO from '../components/SEO'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - this is a placeholder
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl text-neev-blue" />,
      title: 'Email',
      value: 'contact@neevventures.org',
      link: 'mailto:contact@neevventures.org',
    },
    {
      icon: <FaPhone className="text-3xl text-neev-pink" />,
      title: 'Phone',
      value: '+91 XXXX XXXXXX',
      link: 'tel:+91XXXXXXXXXX',
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-neev-mustard" />,
      title: 'Location',
      value: 'India',
      link: null,
    },
  ]

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with Neev Ventures. We'd love to hear from you about partnerships, products, or our mission."
        keywords="contact Neev Ventures, partnership, collaboration, rural women empowerment"
      />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? Want to collaborate? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="glass-effect rounded-3xl p-8 shadow-xl border border-neev-gold/20"
          >
            <h2 className="text-3xl font-display font-bold mb-6 gradient-text">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neev-gold/30 focus:border-neev-gold focus:ring-2 focus:ring-neev-gold/20 transition-all duration-300 bg-white/50"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neev-gold/30 focus:border-neev-gold focus:ring-2 focus:ring-neev-gold/20 transition-all duration-300 bg-white/50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neev-gold/30 focus:border-neev-gold focus:ring-2 focus:ring-neev-gold/20 transition-all duration-300 bg-white/50"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border border-neev-gold/30 focus:border-neev-gold focus:ring-2 focus:ring-neev-gold/20 transition-all duration-300 bg-white/50 resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-neev-gold to-neev-orange text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="glass-effect rounded-2xl p-6 shadow-lg border border-neev-gold/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neev-teal/30 to-neev-orange/30 flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-neev-gold hover:text-neev-orange transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="glass-effect rounded-3xl p-8 shadow-lg border border-neev-teal/30"
            >
              <h3 className="text-2xl font-display font-bold mb-4 gradient-text">
                Let's Collaborate
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Whether you're interested in partnering with us, purchasing our products, 
                or learning more about our mission, we'd love to connect.
              </p>
              <p className="text-gray-600 italic">
                Together, we can empower more women and build stronger communities.
              </p>
            </motion.div>

            {/* Social Media Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="glass-effect rounded-2xl p-6 shadow-lg border border-neev-gold/20"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-neev-blue/30 to-neev-blue/10 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <FaFacebook className="text-2xl text-neev-blue" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-neev-pink/30 to-neev-pink/10 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <FaInstagram className="text-2xl text-neev-pink" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-neev-sky/30 to-neev-sky/10 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <FaTwitter className="text-2xl text-neev-sky" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact

