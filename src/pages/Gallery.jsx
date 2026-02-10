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

const Gallery = () => {

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
                  poster=""
                />
                <div className="p-6 text-center space-y-3">
                  {/* No overlay text as requested */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery
