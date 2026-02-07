// Sample product data structure
// Replace this with your actual products

export const sampleProducts = [
  {
    id: 1,
    name: 'Organic Holi Color Pack',
    slug: 'organic-holi-color-pack',
    category: 'holi',
    price: 499,
    originalPrice: 699,
    currency: 'INR',
    image: '/products/holi-colors.jpg', // Add your image path
    images: [
      '/products/holi-colors-1.jpg',
      '/products/holi-colors-2.jpg',
    ],
    description: 'Natural, skin-safe Holi colors made from organic ingredients',
    longDescription: 'Our organic Holi colors are made by rural women artisans using traditional methods and natural ingredients. Safe for skin, eco-friendly, and vibrant!',
    inStock: true,
    featured: true,
    artisan: {
      name: 'Lakshmi Devi',
      village: 'Rampur',
      story: 'Brief story about the artisan...',
    },
    specs: {
      weight: '500g',
      colors: '5 vibrant colors',
      ingredients: 'Natural plant-based dyes',
    },
  },
  {
    id: 2,
    name: 'Handmade Soy Candle Set',
    slug: 'handmade-soy-candle-set',
    category: 'candles',
    price: 599,
    originalPrice: 799,
    currency: 'INR',
    image: '/products/candles.jpg',
    images: [
      '/products/candles-1.jpg',
      '/products/candles-2.jpg',
    ],
    description: 'Hand-poured soy candles with natural fragrances',
    longDescription: 'Each candle is lovingly hand-poured by our women artisans. Made with 100% soy wax and natural essential oils.',
    inStock: true,
    featured: true,
    artisan: {
      name: 'Radha Sharma',
      village: 'Kishanganj',
      story: 'Brief story about the artisan...',
    },
    specs: {
      weight: '300g',
      burnTime: '40+ hours',
      scents: 'Lavender, Rose, Sandalwood',
    },
  },
  {
    id: 3,
    name: 'Traditional Incense Sticks',
    slug: 'traditional-incense-sticks',
    category: 'incense',
    price: 299,
    originalPrice: 399,
    currency: 'INR',
    image: '/products/incense.jpg',
    images: [
      '/products/incense-1.jpg',
      '/products/incense-2.jpg',
    ],
    description: 'Hand-rolled incense sticks with authentic fragrances',
    longDescription: 'Traditional incense sticks hand-rolled using age-old techniques. Each stick is a testament to our artisans\' skill.',
    inStock: true,
    featured: false,
    artisan: {
      name: 'Geeta Kumari',
      village: 'Madhubani',
      story: 'Brief story about the artisan...',
    },
    specs: {
      quantity: '100 sticks',
      burnTime: '45 minutes per stick',
      fragrances: 'Jasmine, Mogra, Chandan',
    },
  },
]

export const productCategories = [
  { id: 'all', name: 'All Products', icon: '🛍️' },
  { id: 'holi', name: 'Holi Colors', icon: '🎨' },
  { id: 'candles', name: 'Candles', icon: '🕯️' },
  { id: 'incense', name: 'Incense', icon: '🌸' },
  { id: 'other', name: 'Other', icon: '✨' },
]

export default sampleProducts


