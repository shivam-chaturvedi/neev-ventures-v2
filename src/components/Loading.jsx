import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neev-pink/10 via-white to-neev-teal/10">
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-neev-gold via-neev-orange to-neev-coral"
        />
        <h2 className="text-2xl font-display font-bold gradient-text">
          Loading...
        </h2>
      </div>
    </div>
  )
}

export default Loading


