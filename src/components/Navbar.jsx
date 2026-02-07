import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const logoSrc = '/logo.png'

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
    { name: "Women's Stories", path: '/#womens-stories', anchor: true },
  ]

  return (
    <nav className="glass-effect sticky top-0 z-50 border-b-2 border-neev-pink/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <motion.img
              src={logoSrc}
              alt="Neev Ventures logo"
              className="w-20 h-20 object-contain"
              whileHover={{ scale: 1.1, rotate: 3 }}
            />
            <div className="text-3xl font-semibold tracking-wide text-gray-800">
              Neev Ventures
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = !link.anchor && location.pathname === link.path
              const textClasses = `relative text-lg font-semibold transition-colors duration-300 ${
                isActive ? 'text-neev-pink' : 'text-gray-700 hover:text-neev-orange'
              }`
              return (
                <motion.div key={link.path} whileHover={{ scale: 1.1 }}>
                  {link.anchor ? (
                    <a href={link.path} className={textClasses}>
                      {link.name}
                    </a>
                  ) : (
                    <>
                      <Link to={link.path} className={textClasses}>
                        {link.name}
                      </Link>
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-neev-pink via-neev-orange to-neev-blue rounded-full"
                        />
                      )}
                    </>
                  )}
                </motion.div>
              )
            })}
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
            {navLinks.map((link) => {
              const baseClasses = `block py-3 px-4 rounded-lg mb-2 transition-colors ${
                location.pathname === link.path
                  ? 'bg-neev-gold/20 text-neev-gold font-semibold'
                  : 'text-gray-700 hover:bg-neev-orange/10'
              }`
              return link.anchor ? (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={baseClasses}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={baseClasses}
                >
                  {link.name}
                </Link>
              )
            })}
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
