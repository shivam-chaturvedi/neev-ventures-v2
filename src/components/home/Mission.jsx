import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const missionImages = [
  {
    src: '/mission/mission-1.jpg',
    title: 'Listening Trips',
    caption: 'Building trust with SHGs through storytelling rounds',
  },
  {
    src: '/mission/mission-2.jpg',
    title: 'Hands-on Training',
    caption: 'Women experimenting with colors, candles, and herbal soaps',
  },
]

const Mission = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neev-blue/10 via-white to-neev-pink/10 relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        animate={{ x: [-100, 100, -100], y: [-50, 50, -50], rotate: [0, 360, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-40 h-40 bg-neev-orange/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ x: [100, -100, 100], y: [50, -50, 50], rotate: [360, 0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-10 w-60 h-60 bg-neev-mustard/10 rounded-full blur-2xl"
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-pacifico font-bold mb-6"
            initial={{ scale: 0.8 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <span className="gradient-text">Our Mission</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-neev-pink/30 hover:border-neev-blue/40 transition-all duration-500"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
            In every village, there are women with powerful ideas: ideas that remain unseen because 
            they lack the right support. <span className="font-semibold text-neev-rust">Neev Ventures exists to change the story.</span> Our 
            mission is to help rural women unlock this hidden potential by giving them access to 
            financial tools, hands-on product skills, and entrepreneurial pathways. We work closely 
            with SHGs and Individual Businesses to turn everyday materials into sustainable products and to connect them to 
            real markets, both online and offline.
          </p>
          
          <div className="mt-8 pt-8 border-t-2 border-neev-pink/30">
            <motion.p 
              className="text-xl md:text-3xl font-dancing text-center gradient-text font-semibold"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              We believe that empowerment is not charity: it is the power to create, own, and lead.
            </motion.p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {missionImages.map((image) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden border-2 border-neev-blue/30 shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-80 object-cover transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-2xl font-semibold">{image.title}</h4>
                  <p className="text-sm text-white/80">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="relative mt-12 flex justify-center gap-6">
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-24 h-24 rounded-full bg-gradient-to-br from-neev-blue/40 to-neev-sky/20 shadow-lg"
          />
          <motion.div
            animate={{ y: [0, 15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-neev-orange/40 to-neev-mustard/20 shadow-lg"
          />
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [360, 180, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-28 h-28 rounded-full bg-gradient-to-br from-neev-pink/40 to-neev-rose/20 shadow-lg"
          />
          <motion.div
            animate={{ y: [0, 12, 0], scale: [1.1, 1, 1.1] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-neev-rust/40 to-neev-burgundy/20 shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Mission

