import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SEO from '../components/SEO'
import { FaHandsHelping, FaChartLine, FaUsers, FaLightbulb, FaHeart, FaAward, FaGlobeAsia, FaHandHoldingHeart } from 'react-icons/fa'
import { GiVillage, GiIndiaGate } from 'react-icons/gi'
import { MdGroups, MdOutlineVerified } from 'react-icons/md'

const About = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 })

  const values = [
    {
      icon: <FaHeart className="text-5xl" />,
      title: 'Empathy & Respect',
      description: 'We listen first, act with compassion, and honor every woman\'s journey.',
      color: 'from-neev-pink to-neev-coral',
    },
    {
      icon: <MdGroups className="text-5xl" />,
      title: 'Community Driven',
      description: 'We believe in the power of collective action and shared prosperity.',
      color: 'from-neev-teal to-neev-olive',
    },
    {
      icon: <FaLightbulb className="text-5xl" />,
      title: 'Innovation',
      description: 'We blend traditional wisdom with modern tools to create lasting impact.',
      color: 'from-neev-gold to-neev-orange',
    },
    {
      icon: <MdOutlineVerified className="text-5xl" />,
      title: 'Transparency',
      description: 'We operate with complete honesty and accountability to our communities.',
      color: 'from-neev-orange to-neev-pink',
    },
  ]

  const teamMembers = [
    {
      name: 'Priya Sharma',
      role: 'Founder & Director',
      description: 'With 15 years in rural development, Priya founded Neev Ventures to create sustainable livelihoods.',
      icon: <FaUsers className="text-3xl" />,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Head of Training',
      description: 'Expert in financial literacy and entrepreneurship training for rural communities.',
      icon: <FaChartLine className="text-3xl" />,
    },
    {
      name: 'Anita Verma',
      role: 'Community Liaison',
      description: 'Bridges connections between SHGs and markets, ensuring women\'s voices are heard.',
      icon: <FaHandsHelping className="text-3xl" />,
    },
    {
      name: 'Vikram Singh',
      role: 'Product Development',
      description: 'Works with artisans to develop market-ready products while preserving traditional techniques.',
      icon: <FaAward className="text-3xl" />,
    },
  ]

  const milestones = [
    { year: '2022', event: 'Neev Ventures Founded', description: 'Started with a vision to empower rural women' },
    { year: '2023', event: 'First SHG Partnership', description: 'Partnered with 5 Self Help Groups in Bihar' },
    { year: '2023', event: 'Product Line Launch', description: 'Launched organic Holi colors and handmade candles' },
    { year: '2024', event: 'Digital Training Program', description: 'Introduced digital literacy and financial training workshops' },
    { year: '2024', event: 'Expansion', description: 'Reached 15 villages across 3 states' },
    { year: '2025', event: 'E-commerce Platform', description: 'Launched online store connecting artisans to global markets' },
  ]

  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about Neev Ventures' mission to empower rural women through sustainable entrepreneurship and financial literacy."
        keywords="about Neev Ventures, rural women empowerment, social enterprise, mission, vision, team"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neev-gold/20 via-neev-orange/10 to-neev-coral/20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-96 h-96 bg-neev-teal/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-96 h-96 bg-neev-pink/10 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-gradient-to-br from-neev-gold to-neev-orange rounded-full shadow-2xl">
                  <FaHandHoldingHeart className="text-6xl text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 gradient-text">
                About Neev Ventures
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Building foundations for rural women to rise, thrive, and lead their communities towards prosperity
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section ref={ref1} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-8">
                <GiVillage className="text-5xl text-neev-gold mr-4" />
                <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">
                  Our Story
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Neev Ventures began with a simple observation: rural India is filled with talented, 
                    hardworking women whose potential remains untapped due to lack of access to resources, 
                    training, and markets.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Founded in 2022, we started by working with just five Self Help Groups (SHGs) in Bihar. 
                    We didn't come with ready-made solutions. Instead, we sat with these women, listened to 
                    their stories, understood their challenges, and co-created pathways to economic independence.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Today, Neev Ventures partners with communities across multiple states, helping women 
                    transform local materials into market-ready products while building essential skills in 
                    financial literacy and digital commerce.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-neev-teal/20 to-neev-pink/20 rounded-3xl p-12 border-2 border-neev-gold/30">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-white rounded-full mr-4">
                        <GiIndiaGate className="text-3xl text-neev-orange" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2 text-gray-800">Pan-India Presence</h3>
                        <p className="text-gray-600">Operating across multiple states</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="p-3 bg-white rounded-full mr-4">
                        <FaUsers className="text-3xl text-neev-teal" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2 text-gray-800">100+ Women</h3>
                        <p className="text-gray-600">Directly impacted and empowered</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="p-3 bg-white rounded-full mr-4">
                        <FaGlobeAsia className="text-3xl text-neev-pink" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2 text-gray-800">Global Reach</h3>
                        <p className="text-gray-600">Products reaching customers worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neev-blue/5 to-neev-mustard/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl font-display font-bold gradient-text"
                >
                  Our Impact in Use
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  We channel investments into financial literacy, sustainable products, and digital enablement so
                  that every village uses their own strengths to generate dignified income. The women we work with
                  are now leading trainings, managing inventories, and shipping products around the world.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="text-sm uppercase tracking-[0.5em] text-gray-500 mb-2">Featured Impact</p>
                  <p className="text-2xl font-semibold text-gray-800">Green Holi colors · 120+ women trained</p>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl overflow-hidden border border-neev-gold/30 shadow-2xl"
              >
                <img
                  src="/about/impact.jpg"
                  alt="Impact of Neev Ventures"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="p-6 bg-white">
                  <p className="text-gray-600 text-sm">
                    Sharing financial coaching and market-ready techniques across villages so each SHG
                    owns its growth story.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section ref={ref2} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neev-orange/5 to-neev-pink/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-effect rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 border border-neev-gold/20 group hover:scale-105"
                >
                  <div className={`inline-flex p-6 rounded-full bg-gradient-to-br ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey/Timeline */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600">Key milestones in our mission</p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neev-gold via-neev-orange to-neev-coral hidden md:block" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="glass-effect rounded-2xl p-6 border-2 border-neev-gold/30 hover:shadow-xl transition-all duration-300">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-neev-gold to-neev-orange text-white rounded-full font-bold mb-3">
                          {milestone.year}
                        </span>
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block w-6 h-6 bg-gradient-to-br from-neev-gold to-neev-orange rounded-full border-4 border-white shadow-lg z-10" />
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={ref3} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neev-teal/10 to-neev-gold/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600">Dedicated individuals working towards rural empowerment</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView3 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-effect rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 border border-neev-gold/20 group hover:-translate-y-2"
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-neev-teal/30 to-neev-orange/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-neev-gold">
                      {member.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-neev-gold font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-neev-gold via-neev-orange to-neev-coral">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                Join Us in Making a Difference
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Whether you want to partner with us, support our artisans, or learn more about our work, 
                we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-neev-gold rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </a>
                <a
                  href="/products"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-neev-gold transition-all duration-300"
                >
                  Support Our Artisans
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
