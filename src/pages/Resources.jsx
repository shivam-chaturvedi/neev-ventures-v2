import { motion } from 'framer-motion'
import { useState } from 'react'
import SEO from '../components/SEO'
import { FaCreditCard, FaRocket, FaMoneyBillWave, FaBox, FaShoppingCart, FaBook } from 'react-icons/fa'
import { GiReceiveMoney } from 'react-icons/gi'
import { MdAccountBalance } from 'react-icons/md'

const Resources = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('all')

  // Placeholder workshops
  const workshops = [
    {
      id: 1,
      title: 'Digital Payment Basics',
      language: 'hindi',
      duration: '45 mins',
      level: 'Beginner',
      icon: <FaCreditCard className="text-4xl text-neev-blue" />,
      description: 'Learn how to use UPI, mobile banking, and digital wallets safely',
    },
    {
      id: 2,
      title: 'Starting Your Own Business',
      language: 'english',
      duration: '1 hour',
      level: 'Intermediate',
      icon: <FaRocket className="text-4xl text-neev-pink" />,
      description: 'Basic entrepreneurship principles and how to start small',
    },
    {
      id: 3,
      title: 'बचत और निवेश की मूल बातें',
      language: 'hindi',
      duration: '50 mins',
      level: 'Beginner',
      icon: <GiReceiveMoney className="text-4xl text-neev-mustard" />,
      description: 'कैसे बचत करें और अपने पैसे को बढ़ाएं',
    },
    {
      id: 4,
      title: 'Product Packaging & Branding',
      language: 'english',
      duration: '1.5 hours',
      level: 'Intermediate',
      icon: <FaBox className="text-4xl text-neev-orange" />,
      description: 'Create attractive packaging and build your brand identity',
    },
    {
      id: 5,
      title: 'सरकारी योजनाओं का लाभ कैसे उठाएं',
      language: 'hindi',
      duration: '40 mins',
      level: 'Beginner',
      icon: <MdAccountBalance className="text-4xl text-neev-rust" />,
      description: 'महिलाओं के लिए सरकारी योजनाएं और आवेदन प्रक्रिया',
    },
    {
      id: 6,
      title: 'Online Selling Platforms',
      language: 'english',
      duration: '1 hour',
      level: 'Advanced',
      icon: <FaShoppingCart className="text-4xl text-neev-blue" />,
      description: 'How to sell your products on various e-commerce platforms',
    },
  ]

  const filteredWorkshops = selectedLanguage === 'all'
    ? workshops
    : workshops.filter(w => w.language === selectedLanguage)

  return (
    <>
      <SEO 
        title="Resources & Workshops"
        description="Free educational workshops in Hindi and English. Learn financial literacy, digital payments, entrepreneurship, and more."
        keywords="financial literacy, workshops, entrepreneurship training, digital payments, women education, Hindi resources, English resources"
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
            <span className="gradient-text">Resources & Workshops</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free educational content in Hindi and English to empower and educate
          </p>
        </motion.div>

        {/* Language Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12 flex justify-center gap-4"
        >
          <button
            onClick={() => setSelectedLanguage('all')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedLanguage === 'all'
                ? 'bg-gradient-to-r from-neev-gold to-neev-orange text-white shadow-lg scale-105'
                : 'glass-effect border border-neev-gold/30 hover:border-neev-gold/60'
            }`}
          >
            All Languages
          </button>
          <button
            onClick={() => setSelectedLanguage('hindi')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedLanguage === 'hindi'
                ? 'bg-gradient-to-r from-neev-gold to-neev-orange text-white shadow-lg scale-105'
                : 'glass-effect border border-neev-gold/30 hover:border-neev-gold/60'
            }`}
          >
            हिंदी
          </button>
          <button
            onClick={() => setSelectedLanguage('english')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedLanguage === 'english'
                ? 'bg-gradient-to-r from-neev-gold to-neev-orange text-white shadow-lg scale-105'
                : 'glass-effect border border-neev-gold/30 hover:border-neev-gold/60'
            }`}
          >
            English
          </button>
        </motion.div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredWorkshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neev-gold/20 hover:border-neev-gold/40 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-neev-teal/30 to-neev-orange/30 flex items-center justify-center text-4xl">
                {workshop.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold mb-3 text-gray-800">
                {workshop.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {workshop.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-neev-gold/20 text-neev-gold rounded-full text-sm font-medium">
                  {workshop.duration}
                </span>
                <span className="px-3 py-1 bg-neev-teal/20 text-neev-teal rounded-full text-sm font-medium">
                  {workshop.level}
                </span>
                <span className="px-3 py-1 bg-neev-pink/20 text-neev-coral rounded-full text-sm font-medium">
                  {workshop.language === 'hindi' ? 'हिंदी' : 'English'}
                </span>
              </div>

              {/* CTA Button */}
              <button className="w-full px-6 py-3 bg-gradient-to-r from-neev-gold to-neev-orange text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Watch Workshop
              </button>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12 text-center border-2 border-neev-teal/30"
        >
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-gradient-to-br from-neev-blue to-neev-pink rounded-full">
              <FaBook className="text-5xl text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-display font-bold mb-4 gradient-text">
            More Resources Coming Soon!
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We're continuously creating new workshop content to help rural women learn 
            financial literacy, entrepreneurship, and digital skills. All resources are 
            completely free and available in both Hindi and English.
          </p>
        </motion.div>
      </div>
    </div>
    </>
  )
}

export default Resources

