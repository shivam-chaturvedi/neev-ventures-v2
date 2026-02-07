import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import SEO from '../components/SEO'
import { FaImages, FaCamera, FaPalette, FaHandsHelping, FaIndustry } from 'react-icons/fa'
import { MdCelebration } from 'react-icons/md'
import { GiVillage } from 'react-icons/gi'

const imagePaths = Array.from({ length: 34 }, (_, index) => `/gallery/image-${index + 1}.jpg`)

const categoryDetails = {
  products: {
    label: 'Products',
    icon: <FaPalette />,
    color: 'from-neev-pink to-neev-coral',
    titles: ['Organic Holi Colors', 'Handmade Candles', 'Traditional Incense'],
    descriptions: [
      'Vibrant, eco-friendly colors made from natural ingredients',
      'Soy candles poured with herbal oils and fragrant spices',
      'Incense sticks blended with authentic regional aromas',
    ],
  },
  women: {
    label: 'Our Women',
    icon: <FaHandsHelping />,
    color: 'from-neev-teal to-neev-gold',
    titles: ['Lakshmi at Work', 'Radha\'s Success Story', 'Faces of Empowerment'],
    descriptions: [
      'Preparing natural dyes with traditional methods',
      'From homemaker to confident entrepreneur',
      'Building community resilience, one step at a time',
    ],
  },
  events: {
    label: 'Events',
    icon: <MdCelebration />,
    color: 'from-neev-orange to-neev-gold',
    titles: ['SHG Meeting', 'Product Launch Event', 'Village Celebration'],
    descriptions: [
      'Monthly gatherings to celebrate milestones',
      'Showcasing new lines to partners and patrons',
      'Sharing achievements with the entire community',
    ],
  },
  villages: {
    label: 'Villages',
    icon: <GiVillage />,
    color: 'from-neev-olive to-neev-teal',
    titles: ['Rampur Village', 'Pipra Sunrise', 'Kheri Fields'],
    descriptions: [
      'One of our partner villages in Bihar',
      'Early morning harvesting and making raw materials',
      'Families collaborating to craft their future',
    ],
  },
  process: {
    label: 'Process',
    icon: <FaIndustry />,
    color: 'from-neev-gold to-neev-teal',
    titles: ['Color Making Process', 'Candle Production', 'Packaging Stories'],
    descriptions: [
      'Step-by-step creation of natural Holi colors',
      'Behind the scenes of our candle production',
      'Label design, photography, and storytelling',
    ],
  },
}

const categoryList = [
  { id: 'all', name: 'All', icon: <FaImages /> },
  ...Object.entries(categoryDetails).map(([id, data]) => ({
    id,
    name: data.label,
    icon: data.icon,
  })),
]

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const galleryItems = useMemo(() => {
    const keys = Object.keys(categoryDetails)
    return imagePaths.map((src, index) => {
      const categoryKey = keys[index % keys.length]
      const detail = categoryDetails[categoryKey]
      const title = detail.titles[index % detail.titles.length]
      const description = detail.descriptions[index % detail.descriptions.length]
      return {
        id: index + 1,
        category: categoryKey,
        title,
        description,
        type: 'image',
        color: detail.color,
        src,
      }
    })
  }, [])

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
              {categoryList.map((category, index) => (
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
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.8) 100%)',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                    <div className="absolute inset-0 flex flex-col justify-end px-6 pb-6 text-white space-y-2">
                      <span className="text-xs uppercase tracking-[0.4em] text-white/70">
                        {categoryDetails[item.category]?.label || 'Gallery'}
                      </span>
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.description}</p>
                      <div className={`h-1 w-full rounded-full bg-gradient-to-r ${item.color}`} />
                    </div>
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
