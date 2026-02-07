import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLeaf, FaHandsHelping, FaGlobeAmericas, FaHeart, FaSeedling, FaUsers } from 'react-icons/fa'
import { GiFlowerPot, GiRecycle, GiFlowerEmblem } from 'react-icons/gi'
import { HiSparkles } from 'react-icons/hi'

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const features = [
    {
      icon: <FaLeaf className="text-5xl" />,
      title: "100% Natural",
      description: "Made from organic, sustainable materials sourced from nature",
      color: "from-neev-blue to-neev-sky",
      bgColor: "bg-neev-blue/10"
    },
    {
      icon: <FaHandsHelping className="text-5xl" />,
      title: "Community First",
      description: "Every purchase directly supports rural women entrepreneurs",
      color: "from-neev-pink to-neev-rose",
      bgColor: "bg-neev-pink/10"
    },
    {
      icon: <GiRecycle className="text-5xl" />,
      title: "Eco-Friendly",
      description: "Zero waste production with biodegradable packaging",
      color: "from-neev-mustard to-neev-gold",
      bgColor: "bg-neev-mustard/10"
    },
    {
      icon: <FaHeart className="text-5xl" />,
      title: "Made with Love",
      description: "Handcrafted with care and traditional techniques",
      color: "from-neev-rust to-neev-burgundy",
      bgColor: "bg-neev-rust/10"
    },
    {
      icon: <FaSeedling className="text-5xl" />,
      title: "Sustainable Growth",
      description: "Building long-term economic independence for women",
      color: "from-neev-orange to-neev-coral",
      bgColor: "bg-neev-orange/10"
    },
    {
      icon: <FaGlobeAmericas className="text-5xl" />,
      title: "Global Impact",
      description: "Local craftsmanship meeting international standards",
      color: "from-neev-blue to-neev-pink",
      bgColor: "bg-neev-blue/10"
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neev-pink/5 via-neev-orange/5 to-neev-blue/5 relative overflow-hidden">
      {/* Animated decorative elements */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-80 h-80 bg-neev-orange/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          x: [-50, 50, -50]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-neev-pink/10 rounded-full blur-3xl"
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
            className="text-5xl md:text-7xl font-lobster font-bold mb-4"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="gradient-text">Why Choose Us?</span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-courgette"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Every choice you make creates ripples of change in rural communities
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: 3,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className={`glass-effect rounded-3xl p-8 h-full border-2 border-neev-pink/30 hover:border-neev-orange/60 transition-all duration-300 shadow-xl hover:shadow-2xl ${feature.bgColor} hover:bg-opacity-20`}>
                <motion.div 
                  className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg mb-6`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.8 }
                  }}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-2xl font-pacifico font-bold mb-3 text-gray-800 group-hover:gradient-text transition-all duration-300 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating icon decorations */}
        <div className="mt-16 flex justify-center gap-8 flex-wrap">
          {[
            { Icon: GiFlowerEmblem, color: 'text-neev-pink' },
            { Icon: FaLeaf, color: 'text-neev-blue' },
            { Icon: HiSparkles, color: 'text-neev-mustard' },
            { Icon: FaHeart, color: 'text-neev-rust' },
            { Icon: GiFlowerEmblem, color: 'text-neev-orange' },
            { Icon: FaSeedling, color: 'text-neev-blue' }
          ].map(({ Icon, color }, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                delay: index * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`text-6xl opacity-60 ${color}`}
            >
              <Icon />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

