import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaUsers, FaChartLine, FaAward, FaGraduationCap } from 'react-icons/fa'
import { GiVillage } from 'react-icons/gi'
import { MdWorkspaces } from 'react-icons/md'
import { RiProductHuntLine } from 'react-icons/ri'
import { HiSparkles } from 'react-icons/hi'

const ImpactWall = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  // Placeholder metrics - will be updated with real data
  const metrics = [
    { value: 'Coming', label: 'Women Empowered', icon: <FaUsers className="text-5xl" />, color: 'from-neev-pink via-neev-rose to-neev-coral', bgColor: 'neev-pink' },
    { value: 'Soon', label: 'Villages Reached', icon: <GiVillage className="text-5xl" />, color: 'from-neev-blue via-neev-sky to-neev-pink', bgColor: 'neev-blue' },
    { value: '...', label: 'Products Created', icon: <RiProductHuntLine className="text-5xl" />, color: 'from-neev-orange via-neev-mustard to-neev-gold', bgColor: 'neev-orange' },
    { value: '...', label: 'Workshops Conducted', icon: <FaGraduationCap className="text-5xl" />, color: 'from-neev-rust via-neev-burgundy to-neev-pink', bgColor: 'neev-rust' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neev-mustard/10 via-neev-pink/10 to-neev-blue/10 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-96 h-96 bg-neev-pink/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: [360, 0], x: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neev-blue/10 rounded-full blur-3xl"
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
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="gradient-text">Impact Wall</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-600 font-dancing flex items-center justify-center gap-2">
            Measuring Change, One Story at a Time <HiSparkles className="text-neev-mustard" />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 50, rotate: -10 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15, 
                rotate: 5,
                transition: { duration: 0.3 }
              }}
              className="glass-effect rounded-3xl p-8 text-center shadow-2xl border-2 border-neev-pink/30 hover:border-neev-orange/60 transition-all duration-300 group"
            >
              <motion.div 
                className={`inline-flex p-6 rounded-full bg-gradient-to-br ${metric.color} text-white mb-6 shadow-2xl`}
                whileHover={{ 
                  scale: 1.3,
                  rotate: 360,
                  transition: { duration: 0.8 }
                }}
              >
                {metric.icon}
              </motion.div>
              <div className={`text-5xl font-lobster font-bold mb-3 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                {metric.value}
              </div>
              <div className="text-gray-700 font-semibold text-lg font-courgette">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Placeholder Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12 text-center border-2 border-neev-pink/40 shadow-2xl"
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-pacifico font-bold mb-6 gradient-text flex items-center justify-center gap-3"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Our Journey is Just Beginning <HiSparkles className="text-neev-mustard" />
          </motion.h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            As we work with more communities and empower more women, this wall will fill with 
            stories of transformation, growth, and achievement. Every number will represent a 
            woman who found her voice, a family that found stability, and a community that 
            found strength.
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-4">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className={`w-4 h-4 rounded-full shadow-lg ${
                i % 5 === 0 ? 'bg-neev-pink' : 
                i % 5 === 1 ? 'bg-neev-orange' : 
                i % 5 === 2 ? 'bg-neev-blue' :
                i % 5 === 3 ? 'bg-neev-mustard' : 'bg-neev-rust'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactWall

