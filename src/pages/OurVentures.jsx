import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const ventureSpotlight = [
  {
    title: 'Kali',
    description:
      'Our journey began with Kali, a women-led enterprise in Sehjawas Gaon Haryana, created in collaboration with Navjyoti India Foundation. Kali brings together rural woman artisans who transform flowers and floral waste into sustainable products such as holi colors, dhoop batti and candles. Rooted in tradition, sustainability and empowerment, Kali promotes environmentally conscious alternatives to chemical-based products.',
    logo: '/ventures/kali.png',
  },
  {
    title: 'Tana Bana',
    description:
      'Tana Bana is a women-led venture based in Mewla Maharajpur Faridabad developed in collaboration with Nisarg Foundation. The women of Tana Bana breathe new life into discarded fabrics by transforming textile waste into beautifully handcrafted patchwork products including cushion covers, tote bags, laptop bags and many more. Driven by creativity, sustainability and skill, Tana Bana turns waste into functional products reducing textile pollution while creating meaningful livelihoods for local women artisans.',
    logo: '/ventures/tanabana.png',
  },
  {
    title: 'Project Navajeevan',
    description:
      'Project Navajeevan is a holistic rehabilitation and reintegration initiative designed to provide recently released women inmates with a meaningful second chance through entrepreneurship-led livelihood creation. In collaboration with the India Vision Foundation, Project Navajeevan has empowered beneficiaries with the skills, tools and confidence needed to start their micro enterprise in areas such as food, beauty and tailoring.',
    logoText: 'नवजीवन',
  },
]

const OurVentures = () => {
  return (
    <>
      <SEO
        title="Our Ventures"
        description="Explore the ventures and initiatives powering Neev Ventures' work with rural women across India."
        keywords="Neev Ventures, ventures, initiatives, rural women, empowerment, impact"
      />
      <div className="min-h-screen bg-gradient-to-br from-neev-blue/5 via-white to-neev-pink/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <div className="flex justify-center">
              <div className="rounded-full bg-neev-gold/20 p-5 shadow-2xl">
                <span className="text-4xl text-neev-gold font-semibold">NV</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold gradient-text">Our Ventures</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              These ventures combine our values of finance, entrepreneurship, and design to unlock sustainable income for rural women.
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl font-semibold text-gray-700">Spotlighted initiatives</p>
            <div className="grid gap-6 md:grid-cols-3">
              {ventureSpotlight.map((venture) => (
                <div
                  key={venture.title}
                  className="bg-white/90 border border-neev-pink/20 rounded-3xl p-6 shadow-lg space-y-3"
                >
                  {venture.logo ? (
                    <div className="w-full">
                      <img
                        src={venture.logo}
                        alt={`${venture.title} logo`}
                        className="w-full h-[120px] object-contain"
                      />
                    </div>
                  ) : venture.logoText ? (
                    <div className="w-full h-[120px] flex items-center justify-center bg-[#f5efe3] rounded-2xl">
                      <span className="text-3xl font-semibold tracking-wide text-[#7C4A10]">{venture.logoText}</span>
                    </div>
                  ) : null}
                  <p className="text-sm uppercase tracking-[0.4em] text-neev-pink">{venture.title}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{venture.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="bg-neev-blue/5 rounded-3xl border border-neev-blue/20 p-6 shadow-lg text-gray-700 space-y-2"
          >
            <p className="text-lg font-semibold text-gray-800">
              Documentary: From Incarceration to Independence
            </p>
            <p className="text-sm leading-relaxed">
              A documentary captures the journey of five women who rebuilt their lives under Project Navajeevan, moving from incarceration to independence through entrepreneurship.
            </p>
          </motion.div>

        </div>
      </div>
    </>
  )
}

export default OurVentures
