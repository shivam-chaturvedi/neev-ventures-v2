import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-neev-blue/20 via-neev-pink/20 to-neev-mustard/20 border-t-4 border-gradient-to-r from-neev-pink via-neev-orange to-neev-blue relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-neev-orange/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neev-pink/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-lobster font-bold gradient-text mb-3">
              Neev Ventures
            </h3>
            <p className="text-gray-700 font-dancing text-xl mb-4">
              From Our Villages, For Our Future
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Empowering rural women through financial literacy, entrepreneurship, and sustainable product creation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-4 text-neev-pink font-courgette">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-700 hover:text-neev-orange hover:pl-2 transition-all duration-300 inline-block font-semibold">
                  → Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-700 hover:text-neev-pink hover:pl-2 transition-all duration-300 inline-block font-semibold">
                  → Products
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-700 hover:text-neev-blue hover:pl-2 transition-all duration-300 inline-block font-semibold">
                  → Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-neev-mustard hover:pl-2 transition-all duration-300 inline-block font-semibold">
                  → Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-bold text-xl mb-4 text-neev-blue font-courgette">Policies</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-neev-rust hover:pl-2 transition-all duration-300 inline-block font-semibold">
                  → Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-neev-rust hover:pl-2 transition-all duration-300 inline-block font-semibold">
                  → Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-neev-rust hover:pl-2 transition-all duration-300 inline-block font-semibold">
                  → Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-neev-rust hover:pl-2 transition-all duration-300 inline-block font-semibold">
                  → Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t-2 border-neev-pink/30 text-center">
          <p className="text-lg text-gray-700 font-dancing font-semibold flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Neev Ventures. All rights reserved. Made with <FaHeart className="text-neev-pink" />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


