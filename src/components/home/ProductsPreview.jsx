import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FaPalette, FaCandyCane, FaSpa, FaGift, FaLeaf, FaHeart } from 'react-icons/fa'
import { GiCandles, GiIncense, GiSparkles } from 'react-icons/gi'
import { HiSparkles } from 'react-icons/hi'

const ProductsPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  // Placeholder product categories
  const productCategories = [
    {
      name: 'Holi Colors',
      description: 'Natural, eco-friendly colors',
      icon: <FaPalette className="text-5xl" />,
      color: 'from-neev-pink via-neev-orange to-neev-mustard',
    },
    {
      name: 'Candles',
      description: 'Hand-poured with love',
      icon: <GiCandles className="text-5xl" />,
      color: 'from-neev-mustard via-neev-gold to-neev-rust',
    },
    {
      name: 'Incense',
      description: 'Traditional fragrances',
      icon: <GiIncense className="text-5xl" />,
      color: 'from-neev-blue via-neev-sky to-neev-pink',
    },
    {
      name: 'Gift Sets',
      description: 'Curated with care',
      icon: <FaGift className="text-5xl" />,
      color: 'from-neev-orange via-neev-pink to-neev-rose',
    },
    {
      name: 'Organic Soaps',
      description: 'Pure and natural',
      icon: <FaSpa className="text-5xl" />,
      color: 'from-neev-blue via-neev-rust to-neev-burgundy',
    },
    {
      name: 'Handicrafts',
      description: 'Crafted with tradition',
      icon: <GiSparkles className="text-5xl" />,
      color: 'from-neev-pink via-neev-mustard to-neev-blue',
    },
  ]

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neev-orange/5 via-white to-neev-mustard/5 relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-neev-pink/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: [360, 0], scale: [1.2, 1, 1.2] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-neev-blue/10 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-satisfy font-bold mb-4"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="gradient-text">Products with Purpose</span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-courgette"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Every product tells a story of empowerment, sustainability, and community strength
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
              className="group cursor-pointer"
              whileHover={{ y: -10, rotate: 2 }}
            >
              <div className="glass-effect rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center border-2 border-neev-pink/30 hover:border-neev-blue/60 transition-all duration-300 shadow-xl hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-neev-orange/10">
                <motion.div 
                  className={`w-28 h-28 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-2xl mb-6`}
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-2xl font-courgette font-bold mb-2 text-gray-800 group-hover:gradient-text transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-lg">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-neev-pink via-neev-orange to-neev-mustard text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              View All Products <HiSparkles className="text-xl" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Note about products being finalized */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 p-8 bg-gradient-to-r from-neev-blue/10 via-neev-pink/10 to-neev-mustard/10 rounded-2xl border-2 border-neev-pink/30 text-center shadow-lg"
        >
          <p className="text-gray-700 font-dancing text-xl md:text-2xl flex items-center justify-center gap-3 flex-wrap">
            <HiSparkles className="text-neev-mustard text-2xl" /> Our product catalog is being carefully curated with pricing and details. Check back soon for our full collection! <HiSparkles className="text-neev-pink text-2xl" />
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsPreview

