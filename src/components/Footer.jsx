import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#fbe7c5] border-t border-neev-blue/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 flex items-start gap-5">
            <img src="/logo.png" alt="Neev Ventures logo" className="w-24 h-24 object-contain" />
            <div>
              <h3 className="text-3xl font-lobster font-bold gradient-text mb-3">
                Neev Ventures
              </h3>
              <p className="text-gray-700 font-dancing text-xl mb-4">
                From Our Villages, For Our Future
              </p>
              <p className="text-sm text-gray-700 leading-relaxed max-w-md">
                Empowering rural women through financial literacy, entrepreneurship, and sustainable product creation.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-4 text-neev-blue font-courgette">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-700 hover:text-neev-blue hover:pl-2 transition-all duration-300 inline-block font-semibold">
                  → Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-700 hover:text-neev-blue hover:pl-2 transition-all duration-300 inline-block font-semibold">
                  → Products
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-700 hover:text-neev-gold hover:pl-2 transition-all duration-300 inline-block font-semibold">
                  → Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-neev-blue hover:pl-2 transition-all duration-300 inline-block font-semibold">
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
                <a href="#" className="text-gray-700 hover:text-neev-blue hover:pl-2 transition-all duration-300 inline-block font-semibold">
                  → Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-neev-blue hover:pl-2 transition-all duration-300 inline-block font-semibold">
                  → Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-neev-blue hover:pl-2 transition-all duration-300 inline-block font-semibold">
                  → Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-neev-blue hover:pl-2 transition-all duration-300 inline-block font-semibold">
                  → Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

          <div className="mt-8 pt-8 border-t border-neev-blue/30 text-center">
            <p className="text-lg text-gray-700 font-dancing font-semibold">
              © {new Date().getFullYear()} Neev Ventures. All rights reserved. Made with care.
            </p>
          </div>
      </div>
    </footer>
  )
}

export default Footer
