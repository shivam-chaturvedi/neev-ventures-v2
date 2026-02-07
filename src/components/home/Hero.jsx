import { motion } from 'framer-motion'
import { FaArrowRight, FaHeart, FaUsers, FaHandHoldingHeart, FaStar } from 'react-icons/fa'
import { GiVillage, GiSparkles, GiFlowerEmblem } from 'react-icons/gi'
import { HiSparkles } from 'react-icons/hi'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-neev-blue/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-neev-orange/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neev-pink/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1.5, 1.1],
            x: [-50, 50, -50],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 left-1/3 w-72 h-72 bg-neev-mustard/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            y: [50, -50, 50],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 right-1/3 w-80 h-80 bg-neev-rust/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating decorative elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 left-10 opacity-20"
          >
            <HiSparkles className="text-6xl text-neev-mustard" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-5 right-10 opacity-20"
          >
            <GiFlowerEmblem className="text-6xl text-neev-pink" />
          </motion.div>
          
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
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neev-pink via-neev-orange to-neev-mustard text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
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
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-full border-2 border-neev-pink/60 shadow-lg"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaUsers className="text-2xl text-neev-pink" />
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

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-neev-pink rounded-full flex justify-center shadow-lg">
            <motion.div 
              className="w-2 h-4 bg-gradient-to-b from-neev-pink to-neev-orange rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

