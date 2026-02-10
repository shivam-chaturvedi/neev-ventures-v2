import { motion } from 'framer-motion'
import Hero from '../components/home/Hero'
import Mission from '../components/home/Mission'
import Features from '../components/home/Features'
import OurModel from '../components/home/OurModel'
import ProductsPreview from '../components/home/ProductsPreview'
import WomenStories from '../components/home/WomenStories'
import CallToAction from '../components/home/CallToAction'
import SEO from '../components/SEO'

const Home = () => {
  return (
    <>
      <SEO 
        title="Home"
        description="Empowering rural women through financial literacy, entrepreneurship, and sustainable product creation. From our villages, for our future."
        keywords="rural women empowerment, SHG, sustainable products, financial literacy, entrepreneurship, Neev Ventures"
      />
      <div className="overflow-hidden">
        <Hero />
        <Mission />
        <Features />
        <ProductsPreview />
        <OurModel />
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neev-mustard/10 via-neev-pink/10 to-neev-blue/10">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">
              Impact Wall
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Every stitch is a heartbeat of the villages we work with. Here is a glimpse of
              the women, their craft, and the patchwork that brings alive our shared heritage.
            </p>
            <div className="w-full">
              <img
                src="/gallery/image-1.jpg"
                alt="Women artisans showcasing patchwork"
                className="w-full h-[420px] object-cover rounded-3xl shadow-2xl border border-neev-pink/30"
                loading="lazy"
              />
            </div>
            <p className="text-sm uppercase tracking-[0.4em] text-gray-500">
              received youngest enterpreneur mentor award from dr. kiran bedi
            </p>
          </div>
        </section>
        <WomenStories />
        <CallToAction />
      </div>
    </>
  )
}

export default Home
