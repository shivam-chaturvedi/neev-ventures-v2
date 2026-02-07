import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FaShoppingBag, FaHandHoldingHeart, FaUsers } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const CallToAction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neev-pink via-neev-orange to-neev-blue opacity-90"></div>
      
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-96 h-96 bg-white/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-lobster font-bold text-white mb-6 flex items-center justify-center gap-4 flex-wrap"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Join the Movement! <HiSparkles className="text-white" />
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-3xl text-white mb-12 font-dancing font-semibold"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Together, we can create lasting change in rural communities
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/products"
                className="group flex items-center gap-3 px-10 py-5 bg-white text-neev-pink rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300"
              >
                <FaShoppingBag className="text-2xl group-hover:animate-bounce" />
                Shop Now
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, rotate: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-neev-blue to-neev-sky text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-blue/50 border-2 border-white transition-all duration-300"
              >
                <FaHandHoldingHeart className="text-2xl group-hover:animate-pulse" />
                Get Involved
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: <FaUsers />, number: "100+", label: "Women Empowered" },
              { icon: <FaShoppingBag />, number: "1000+", label: "Products Made" },
              { icon: <FaHandHoldingHeart />, number: "15+", label: "Villages Reached" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-effect rounded-2xl p-6 border-2 border-white/40 shadow-xl"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl mb-3 text-white">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-lobster">
                  {stat.number}
                </div>
                <div className="text-lg text-white/90 font-courgette">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction

