import { motion } from 'framer-motion'
import Hero from '../components/home/Hero'
import Mission from '../components/home/Mission'
import Features from '../components/home/Features'
import OurModel from '../components/home/OurModel'
import ProductsPreview from '../components/home/ProductsPreview'
import ImpactWall from '../components/home/ImpactWall'
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
        <ImpactWall />
        <WomenStories />
        <CallToAction />
      </div>
    </>
  )
}

export default Home

