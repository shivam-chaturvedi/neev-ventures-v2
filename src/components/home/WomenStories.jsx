import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiSparkles } from 'react-icons/hi'

const WomenStories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section
      id="womens-stories"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neev-pink/5 via-neev-mustard/5 to-neev-blue/5 relative overflow-hidden"
    >
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 w-80 h-80 bg-neev-pink/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], y: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-neev-blue/10 rounded-full blur-3xl"
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
            <span className="gradient-text">Women's Stories</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-600 font-dancing font-semibold flex items-center justify-center gap-2">
            The Heart of Our Mission <HiSparkles className="text-neev-pink" />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12 text-center border-2 border-neev-pink/40 shadow-2xl"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {['/women-stories/story-1.jpg', '/women-stories/story-2.jpg'].map((src) => (
              <div key={src} className="w-full rounded-3xl overflow-hidden shadow-2xl border border-neev-pink/10">
                <img
                  src={src}
                  alt="Women artisans crafting together"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default WomenStories
