import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="glass-effect sticky top-0 z-50 border-b-2 border-neev-pink/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="text-3xl font-lobster font-bold gradient-text"
            >
              Neev Ventures
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div key={link.path} whileHover={{ scale: 1.1 }}>
                <Link
                  to={link.path}
                  className={`relative text-lg font-semibold transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-neev-pink'
                      : 'text-gray-700 hover:text-neev-orange'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-neev-pink via-neev-orange to-neev-blue rounded-full"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neev-gold/10 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-lg mb-2 transition-colors ${
                  location.pathname === link.path
                    ? 'bg-neev-gold/20 text-neev-gold font-semibold'
                    : 'text-gray-700 hover:bg-neev-orange/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

