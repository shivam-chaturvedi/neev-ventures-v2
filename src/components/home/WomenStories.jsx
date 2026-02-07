import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaHeart, FaUsers } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const storyProfiles = [
  {
    name: 'Radha Devi',
    role: 'Community Trainer',
    location: 'Rampur, Bihar',
    quote:
      '“I teach dozens of women how to turn raw turmeric into Holi colors that sell across the district.”',
    image: '/women-stories/story-1.jpg',
  },
  {
    name: 'Sunita Sharma',
    role: 'Candle Specialist',
    location: 'Kheri Fields, Uttar Pradesh',
    quote:
      '“We pour each candle with herbs that remind us of celebrations at home—now the income is also ours.”',
    image: '/women-stories/story-2.jpg',
  },
]

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
      {/* Animated background shapes */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-80 h-80 bg-neev-pink/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], y: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
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
            The Heart of Our Mission <FaHeart className="text-neev-pink" />
          </p>
        </motion.div>

        {/* Placeholder for women's profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="glass-effect rounded-3xl p-12 md:p-16 text-center border-2 border-neev-pink/40 shadow-2xl"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="inline-block p-8 rounded-full bg-gradient-to-br from-neev-pink via-neev-orange to-neev-mustard shadow-2xl">
                <svg className="w-20 h-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </motion.div>
            
          <motion.h3 
            className="text-4xl font-pacifico font-bold mb-6 gradient-text flex items-center justify-center gap-3"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Stories Being Written <HiSparkles className="text-neev-mustard" />
          </motion.h3>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            We are currently working with incredible women from rural communities, documenting 
            their journeys of transformation and empowerment. Each story is unique, powerful, 
            and inspiring.
          </p>
          
          <p className="text-md md:text-lg text-gray-600 font-dancing font-semibold flex items-center justify-center gap-2 flex-wrap">
            Once all women participating in the project are finalized, their stories, photos, 
            and achievements will be featured here. Stay tuned to meet the changemakers! <HiSparkles className="text-neev-pink" />
          </p>

          <div className="mt-12 grid gap-6">
            {storyProfiles.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="group bg-white/80 rounded-3xl shadow-2xl border border-neev-gold/30 overflow-hidden flex flex-col"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.5em] text-neev-gold font-semibold">
                      Women of Neev
                    </p>
                    <h4 className="text-2xl font-semibold text-gray-800">{story.name}</h4>
                    <p className="text-sm text-gray-600">{story.role} · {story.location}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{story.quote}</p>
                </div>
              </motion.div>
            ))}
          </div>

            {/* Decorative Grid for Future Photos */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                  animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ 
                    delay: 0.5 + i * 0.15, 
                    duration: 0.6,
                    type: "spring"
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="aspect-square rounded-3xl bg-gradient-to-br from-neev-blue/30 via-neev-pink/30 to-neev-orange/30 border-2 border-dashed border-neev-pink/60 flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  >
                    <FaUsers className="text-5xl text-neev-pink opacity-50" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WomenStories
