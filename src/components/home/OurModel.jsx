import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaUniversity, FaRocket, FaStar } from 'react-icons/fa'
import { GiWheat, GiTakeMyMoney, GiGrowth } from 'react-icons/gi'

const pillars = [
  {
    title: 'Economics',
    images: ['/our-model/economics.jpg'],
    icon: <GiWheat className="text-6xl" />,
    description: 'We start by listening. Every community is unique, and every SHG has its own strengths. So we sit with the women, understand their daily lives, their income needs, and their raw materials around them. From there, we work with them to create beautiful, sustainable products such as holi colours, candles, incense, and much more.',
    highlight: "This pillar isn't just about income. It's about showing women that their skills, their hands, and their resources already hold immense value.",
    color: 'from-neev-blue via-neev-sky to-neev-pink',
  },
  {
    title: 'Financial Literacy',
    images: ['/our-model/finance.jpg', '/our-model/finance-2.jpg'],
    icon: <FaUniversity className="text-6xl" />,
    description: 'For many rural women, the world of banking and digital finance can feel distant and complicated. We make it simple, friendly, and hands-on. Through small-group workshops, we help SHG members learn how to use digital payments safely, how to save and borrow confidently, to access government schemes meant for them, how to plan their finances as a group and as individuals.',
    highlight: "This isn't just about money. It's about giving women the freedom to make their own decisions, support their families, and dream bigger.",
    color: 'from-neev-mustard via-neev-gold to-neev-rust',
  },
  {
    title: 'Entrepreneurship',
    images: ['/our-model/entrepreneurship.jpg', '/our-model/entrepreneurship-2.jpg'],
    icon: <FaRocket className="text-6xl" />,
    description: 'Once the products are ready, the next step is to help women present them proudly. We teach simple branding, packaging, and how to build their own product identity. We take photos, design labels, write stories, and help them sell through various online and offline platforms. We also connect SHGs to corporate partners, schools, and NGOs: making sure their products reach the wider world.',
    highlight: "This pillar is about more than sales. It's about women seeing themselves as creators, business owners, and leaders.",
    color: 'from-neev-pink via-neev-orange to-neev-coral',
  },
]

const OurModel = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neev-rust/5 via-white to-neev-blue/5 relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-20 w-64 h-64 bg-neev-pink/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-neev-mustard/10 rounded-full blur-3xl"
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
            className="text-5xl md:text-7xl font-courgette font-bold mb-4"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="gradient-text">Our Model</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-600 font-dancing font-semibold flex items-center justify-center gap-2">
            Three Core Pillars <FaStar className="text-neev-mustard" />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 70, rotate: -10 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15, 
                rotate: 2,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="h-full glass-effect rounded-3xl p-10 shadow-2xl transition-all duration-300 border-2 border-neev-pink/30 hover:border-neev-orange/60 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-neev-orange/10">
                <div className="mb-6 rounded-3xl overflow-hidden">
                  <div
                    className={`grid ${pillar.images.length > 1 ? 'grid-cols-2 gap-3' : ''}`}
                  >
                    {pillar.images.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`${pillar.title} visual ${idx + 1}`}
                        className="w-full h-40 md:h-48 object-cover rounded-2xl"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
                {/* Icon */}
                <motion.div 
                  className={`w-28 h-28 mb-6 rounded-full bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-2xl`}
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: 360,
                    transition: { duration: 0.8 }
                  }}
                >
                  {pillar.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-3xl font-pacifico font-bold mb-5 text-gray-800 group-hover:gradient-text transition-all duration-300">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 text-base">
                  {pillar.description}
                </p>

                {/* Highlight */}
                <div className={`mt-6 pt-6 border-t-2 border-neev-pink/30`}>
                  <p className="text-sm italic text-gray-700 font-semibold font-dancing text-lg flex items-start gap-2">
                    <span className="text-neev-pink text-xl leading-none">•</span>
                    {pillar.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connecting Visual Element */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="hidden lg:block h-2 bg-gradient-to-r from-neev-blue via-neev-pink via-neev-orange to-neev-mustard mt-16 rounded-full shadow-lg"
        />
        
        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-6">
          {[
            { Icon: FaUniversity, color: 'text-neev-blue' },
            { Icon: GiGrowth, color: 'text-neev-mustard' },
            { Icon: FaRocket, color: 'text-neev-pink' }
          ].map(({ Icon, color }, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 3,
                delay: index * 0.4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`text-6xl ${color}`}
            >
              <Icon />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurModel
