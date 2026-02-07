import { motion } from 'framer-motion'
import { useState } from 'react'
import SEO from '../components/SEO'
import { FaShoppingBag, FaPalette } from 'react-icons/fa'
import { GiCandles, GiIncense } from 'react-icons/gi'
import { HiSparkles } from 'react-icons/hi'

const productCategories = [
  { id: 'all', name: 'All Products', icon: <FaShoppingBag /> },
  { id: 'holi', name: 'Holi Colors', icon: <FaPalette /> },
  { id: 'candles', name: 'Candles', icon: <GiCandles /> },
  { id: 'incense', name: 'Incense', icon: <GiIncense /> },
  { id: 'gift', name: 'Gift Sets', icon: <HiSparkles /> },
]

const productData = [
  {
    id: 1,
    name: 'Natural Holi Colors',
    category: 'holi',
    price: '₹950',
    description: 'Hand-ground pigments in festive, non-toxic hues.',
    image: '/products/product-1.jpg',
  },
  {
    id: 2,
    name: 'Herbal Candles',
    category: 'candles',
    price: '₹1200',
    description: 'Soy wax candles scented with local spices and herbs.',
    image: '/products/product-2.jpg',
  },
  {
    id: 3,
    name: 'Fragrant Incense',
    category: 'incense',
    price: '₹650',
    description: 'Slow-burning incense sticks blended with regional botanicals.',
    image: '/products/product-3.jpg',
  },
  {
    id: 4,
    name: 'Celebration Gift Box',
    category: 'gift',
    price: '₹2500',
    description: 'Curated set pairing colors, candles, and soaps for gifting.',
    image: '/products/product-4.jpg',
  },
  {
    id: 5,
    name: 'Organic Soaps',
    category: 'gift',
    price: '₹850',
    description: 'Cold-pressed soaps infused with medicinal herbs.',
    image: '/products/product-5.png',
  },
]

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProducts = selectedCategory === 'all'
    ? productData
    : productData.filter((product) => product.category === selectedCategory)

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
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-6 pb-4 text-white">
                  <p className="text-sm uppercase tracking-[0.4em] mb-1">Product Spotlight</p>
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-gray-600 text-lg">{product.description}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <span className="text-2xl font-bold text-neev-gold">{product.price}</span>
                  <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-neev-blue to-neev-orange text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
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
