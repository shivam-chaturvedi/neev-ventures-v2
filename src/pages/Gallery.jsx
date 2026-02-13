import { useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { FaCamera } from 'react-icons/fa'

const videoItems = [
  {
    id: 1,
    src: 'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Copy%20of%2020251125_150854.mp4',
  },
  {
    id: 2,
    src: 'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Copy%20of%20VID-20251118-WA0008.mp4',
  },
  {
    id: 3,
    src: 'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Copy%20of%20VID-20251210-WA0071.mp4',
  },
]

const imageItems = [
  { id: 1, src: '/gallery/image-1.jpg', title: 'Women artisans', caption: 'Artisan-led workshops' },
  { id: 2, src: '/gallery/image-2.jpg', title: 'Patchwork', caption: 'Sustainable textiles' },
  { id: 3, src: '/gallery/image-3.jpg', title: 'Holi colors', caption: 'Natural pigments' },
  { id: 4, src: '/gallery/image-4.jpg', title: 'Village moments', caption: 'Community gatherings' },
  { id: 5, src: '/gallery/image-5.jpg', title: 'Crafting', caption: 'Hands-on training' },
  { id: 6, src: '/gallery/image-6.jpg', title: 'Finished goods', caption: 'Market-ready products' },
]

const categories = [
  { id: 'videos', label: 'Videos' },
  { id: 'images', label: 'Images' },
]

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('videos')

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

          <div className="flex justify-center gap-4 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full border transition duration-300 font-semibold ${activeCategory === category.id ? 'bg-neev-blue/90 text-white border-transparent' : 'bg-white/80 text-gray-600 border-neev-blue/40 hover:border-neev-blue/80'}`}
                type="button"
              >
                {category.label}
              </button>
            ))}
          </div>

          {activeCategory === 'videos' ? (
            <div className="grid grid-cols-1 gap-6 mb-12">
              {[...videoItems].reverse().map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="glass-effect rounded-3xl overflow-hidden border border-neev-gold/30 shadow-2xl"
                >
                  <video
                    src={video.src}
                    controls
                    className="w-full aspect-video object-contain bg-black"
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {imageItems.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-effect rounded-3xl overflow-hidden border border-neev-gold/30 shadow-2xl"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-[240px] object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 text-center space-y-2">
                    <p className="text-lg font-semibold text-gray-800">{image.title}</p>
                    <p className="text-sm uppercase tracking-wide text-gray-500">{image.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Gallery
