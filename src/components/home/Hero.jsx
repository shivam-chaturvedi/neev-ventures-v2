import { motion } from 'framer-motion'
import { FaArrowRight, FaHeart, FaUsers, FaHandHoldingHeart, FaStar } from 'react-icons/fa'
import { GiVillage } from 'react-icons/gi'
const Hero = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/home/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#fbe7c5]/80" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-lobster font-bold mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <span className="gradient-text">Neev Ventures</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-4xl text-gray-700 mb-8 font-dancing font-semibold"
          >
            From Our Villages, For Our Future
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="#mission"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neev-blue via-neev-orange to-neev-gold text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHeart className="group-hover:animate-pulse" />
              Our Mission
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.a>
            <motion.a
              href="#products"
              className="group flex items-center gap-2 px-8 py-4 glass-effect border-2 border-neev-blue text-neev-blue rounded-full font-semibold hover:bg-gradient-to-r hover:from-neev-blue hover:to-neev-sky hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHandHoldingHeart className="group-hover:animate-bounce" />
              Explore Products
            </motion.a>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            <motion.div 
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-full border-2 border-neev-blue/60 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GiVillage className="text-2xl text-neev-blue" />
              <span className="font-semibold text-gray-700">15+ Villages</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-full border-2 border-neev-gold/60 shadow-lg"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaUsers className="text-2xl text-neev-gold" />
              <span className="font-semibold text-gray-700">100+ Women Empowered</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-full border-2 border-neev-mustard/60 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaHeart className="text-2xl text-neev-mustard" />
              <span className="font-semibold text-gray-700">Sustainable Products</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-full border-2 border-neev-orange/60 shadow-lg"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaStar className="text-2xl text-neev-orange" />
              <span className="font-semibold text-gray-700">Eco-Friendly</span>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
