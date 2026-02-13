import { motion } from 'framer-motion'
import { FaLeaf, FaUsers, FaStar } from 'react-icons/fa'
import { GiVillage } from 'react-icons/gi'
const Hero = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/home/hero.jpg')" }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#fbe7c5]/40 via-transparent to-[#fbe7c5]/20"
        aria-hidden="true"
      />

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
            <span className="text-black">Neev Ventures</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-4xl text-black mb-8 font-dancing font-semibold"
          >
            From Our Villages, For Our Future
          </motion.p>

          <div className="mb-12" aria-hidden="true" />

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
              <span className="font-semibold text-gray-700">10+ Villages</span>
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
              <FaLeaf className="text-2xl text-neev-mustard" />
              <span className="font-semibold text-gray-700">Sustainable Products</span>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
