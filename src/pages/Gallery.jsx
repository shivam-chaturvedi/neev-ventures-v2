import { motion } from 'framer-motion'
import { useState } from 'react'
import SEO from '../components/SEO'
import { FaImages, FaPlay, FaCamera, FaPalette, FaHandsHelping, FaIndustry } from 'react-icons/fa'
import { MdWorkspaces, MdCelebration } from 'react-icons/md'
import { GiVillage } from 'react-icons/gi'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All', icon: <FaImages /> },
    { id: 'workshops', name: 'Workshops', icon: <MdWorkspaces /> },
    { id: 'products', name: 'Products', icon: <FaPalette /> },
    { id: 'women', name: 'Our Women', icon: <FaHandsHelping /> },
    { id: 'events', name: 'Events', icon: <MdCelebration /> },
    { id: 'villages', name: 'Villages', icon: <GiVillage /> },
    { id: 'process', name: 'Process', icon: <FaIndustry /> },
  ]

  // Placeholder gallery items with descriptions
  const galleryItems = [
    {
      id: 1,
      category: 'workshops',
      title: 'Financial Literacy Workshop',
      description: 'Women learning about digital banking and UPI payments',
      type: 'image',
      color: 'from-neev-gold to-neev-orange',
    },
    {
      id: 2,
      category: 'products',
      title: 'Organic Holi Colors',
      description: 'Vibrant, eco-friendly colors made from natural ingredients',
      type: 'image',
      color: 'from-neev-pink to-neev-coral',
    },
    {
      id: 3,
      category: 'women',
      title: 'Lakshmi at Work',
      description: 'Preparing natural dyes with traditional methods',
      type: 'image',
      color: 'from-neev-teal to-neev-olive',
    },
    {
      id: 4,
      category: 'workshops',
      title: 'Entrepreneurship Training',
      description: 'Learning product packaging and branding techniques',
      type: 'video',
      color: 'from-neev-orange to-neev-gold',
    },
    {
      id: 5,
      category: 'products',
      title: 'Handmade Candles',
      description: 'Soy candles crafted with love and care',
      type: 'image',
      color: 'from-neev-gold to-neev-teal',
    },
    {
      id: 6,
      category: 'events',
      title: 'SHG Meeting',
      description: 'Monthly gathering of self-help group members',
      type: 'image',
      color: 'from-neev-coral to-neev-pink',
    },
    {
      id: 7,
      category: 'villages',
      title: 'Rampur Village',
      description: 'One of our partner villages in Bihar',
      type: 'image',
      color: 'from-neev-olive to-neev-teal',
    },
    {
      id: 8,
      category: 'process',
      title: 'Color Making Process',
      description: 'Step-by-step creation of natural Holi colors',
      type: 'video',
      color: 'from-neev-pink to-neev-orange',
    },
    {
      id: 9,
      category: 'women',
      title: 'Radha\'s Success Story',
      description: 'From homemaker to successful entrepreneur',
      type: 'image',
      color: 'from-neev-teal to-neev-gold',
    },
    {
      id: 10,
      category: 'products',
      title: 'Traditional Incense',
      description: 'Hand-rolled incense sticks with authentic fragrances',
      type: 'image',
      color: 'from-neev-orange to-neev-coral',
    },
    {
      id: 11,
      category: 'events',
      title: 'Product Launch Event',
      description: 'Celebrating the launch of our new product line',
      type: 'image',
      color: 'from-neev-gold to-neev-pink',
    },
    {
      id: 12,
      category: 'process',
      title: 'Candle Making',
      description: 'Behind the scenes of our candle production',
      type: 'video',
      color: 'from-neev-teal to-neev-coral',
    },
  ]

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <>
      <SEO 
        title="Gallery"
        description="Explore photos and videos from Neev Ventures workshops, products, and the inspiring women we work with."
        keywords="gallery, photos, videos, workshops, rural women, products, behind the scenes"
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
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-gradient-to-br from-neev-gold to-neev-orange rounded-full shadow-2xl">
                <FaCamera className="text-5xl text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 gradient-text">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capturing moments of transformation, empowerment, and creativity
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-neev-gold to-neev-orange text-white shadow-lg scale-105'
                      : 'glass-effect border border-neev-gold/30 hover:border-neev-gold/60 hover:scale-105'
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="glass-effect rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-neev-gold/20 hover:border-neev-gold/40 transform hover:-translate-y-2">
                  {/* Image/Video Placeholder */}
                  <div className={`relative h-64 bg-gradient-to-br ${item.color} flex items-center justify-center overflow-hidden`}>
                    {/* Overlay pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }} />
                    </div>
                    
                    {/* Icon based on type */}
                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                      {item.type === 'video' ? (
                        <div className="flex flex-col items-center text-white">
                          <FaPlay className="text-6xl mb-2" />
                          <span className="text-sm font-semibold uppercase tracking-wider">Video</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center text-white">
                          <FaImages className="text-6xl mb-2" />
                          <span className="text-sm font-semibold uppercase tracking-wider">Photo</span>
                        </div>
                      )}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 shadow-lg">
                        {categories.find(c => c.id === item.category)?.name}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-neev-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { number: '500+', label: 'Photos Captured', color: 'from-neev-pink to-neev-coral' },
              { number: '50+', label: 'Video Stories', color: 'from-neev-teal to-neev-olive' },
              { number: '100+', label: 'Workshop Moments', color: 'from-neev-gold to-neev-orange' },
              { number: '20+', label: 'Villages Featured', color: 'from-neev-orange to-neev-pink' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-effect rounded-2xl p-6 text-center shadow-lg border border-neev-gold/20"
              >
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Coming Soon Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-8 md:p-12 text-center border-2 border-neev-teal/30"
          >
            <FaCamera className="text-6xl text-neev-gold mx-auto mb-6" />
            <h3 className="text-2xl font-display font-bold mb-4 gradient-text">
              Gallery Being Updated
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
              We're continuously capturing the incredible journey of our women artisans, their 
              creative processes, and the impact of our workshops. High-quality photos and videos 
              will be added here soon!
            </p>
            <p className="text-gray-600 italic">
              Check back regularly for new content showcasing our community's growth and achievements.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Gallery


