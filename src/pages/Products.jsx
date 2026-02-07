import { motion } from 'framer-motion'
import { useState } from 'react'
import SEO from '../components/SEO'
import { FaShoppingBag, FaPalette, FaGift } from 'react-icons/fa'
import { GiCandles, GiIncense, GiFlowerEmblem } from 'react-icons/gi'
import { HiSparkles } from 'react-icons/hi'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Placeholder products - will be filled with real data
  const categories = [
    { id: 'all', name: 'All Products', icon: <FaShoppingBag /> },
    { id: 'holi', name: 'Holi Colors', icon: <FaPalette /> },
    { id: 'candles', name: 'Candles', icon: <GiCandles /> },
    { id: 'incense', name: 'Incense', icon: <GiFlowerEmblem /> },
    { id: 'other', name: 'Other', icon: <HiSparkles /> },
  ]

  // Placeholder product data
  const placeholderProducts = [
    {
      id: 1,
      name: 'Natural Holi Colors Set',
      category: 'holi',
      price: 'TBD',
      icon: <FaPalette className="text-6xl" />,
      description: 'Eco-friendly, skin-safe colors',
    },
    {
      id: 2,
      name: 'Handmade Soy Candles',
      category: 'candles',
      price: 'TBD',
      icon: <GiCandles className="text-6xl" />,
      description: 'Hand-poured with natural ingredients',
    },
    {
      id: 3,
      name: 'Traditional Incense Sticks',
      category: 'incense',
      price: 'TBD',
      icon: <GiIncense className="text-6xl" />,
      description: 'Authentic fragrances',
    },
    {
      id: 4,
      name: 'Festival Gift Box',
      category: 'other',
      price: 'TBD',
      icon: <FaGift className="text-6xl" />,
      description: 'Curated selection of products',
    },
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? placeholderProducts 
    : placeholderProducts.filter(p => p.category === selectedCategory)

  return (
    <>
      <SEO 
        title="Products"
        description="Sustainable, handcrafted products made by rural women artisans. Every purchase supports empowerment and community development."
        keywords="handmade products, organic holi colors, soy candles, incense sticks, rural artisans, sustainable products"
      />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="gradient-text">Our Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every purchase supports rural women entrepreneurs and sustainable communities
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-neev-gold to-neev-orange text-white shadow-lg scale-105'
                  : 'glass-effect border border-neev-gold/30 hover:border-neev-gold/60'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-effect rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-neev-gold/20 hover:border-neev-gold/40 transform hover:-translate-y-2"
            >
              {/* Product Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-neev-teal/20 via-neev-pink/20 to-neev-orange/20 flex items-center justify-center text-neev-gold">
                {product.icon}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2 text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-neev-gold">
                    ₹{product.price}
                  </span>
                  <button className="px-4 py-2 bg-gradient-to-r from-neev-gold to-neev-orange text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12 text-center border-2 border-neev-teal/30"
        >
          <h3 className="text-2xl font-display font-bold mb-4 gradient-text">
            Our Full Catalog is Coming Soon!
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
            We're carefully curating our product selection with detailed information, 
            pricing, and stories behind each creation. Our women artisans are working 
            hard to bring you beautiful, sustainable products.
          </p>
          <p className="text-gray-600 italic">
            Check back soon or contact us to place a custom order!
          </p>
        </motion.div>
      </div>
    </div>
    </>
  )
}

export default Products

