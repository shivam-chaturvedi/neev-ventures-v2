import { motion } from 'framer-motion'
import { useState } from 'react'
import SEO from '../components/SEO'

const getOfficeEmbedUrl = (fileUrl) =>
  `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`

const formatLabels = {
  ppt: 'PPT',
  doc: 'Document',
  canva: 'Canva',
}

const pptUrls = [
  'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Copy%20of%20ALL%20ABOUT%20BANKS%20%281%29%20%283%29.pptx',
  'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Neev%20Workshop%201%20%281%29%20%282%29.pptx',
  'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Neev%20Workshop%201%20%282%29%20%281%29.pptx',
]

const canvaViewUrl =
  'https://www.canva.com/design/DAGwWkWMhro/_6lNFxwTEfKM1S-OKOKV1g/view?utm_content=DAGwWkWMhro&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
const canvaEmbedUrl = `${canvaViewUrl}&embed`

const resourceDocs = [
  {
    id: 1,
    title: 'All About Banks',
    description: 'Hindi primer explaining how banks, savings, and digital accounts work.',
    language: 'hindi',
    format: 'ppt',
    embed: getOfficeEmbedUrl(pptUrls[0]),
  },
  {
    id: 2,
    title: 'All About Banks (English Canva)',
    description: 'English version of the “All About Banks” deck via Canva, ready for sharing and reuse.',
    language: 'english',
    format: 'canva',
    embed: canvaEmbedUrl,
    link: canvaViewUrl,
  },
  {
    id: 3,
    title: 'Neev Workshop 1 (Set A)',
    description: 'English deck covering branding, storytelling, and packaging.',
    language: 'hindi',
    format: 'ppt',
    embed: getOfficeEmbedUrl(pptUrls[1]),
  },
  {
    id: 4,
    title: 'Neev Workshop 1 (Set B)',
    description: 'English guide on photography, pricing, and selling online.',
    language: 'english',
    format: 'ppt',
    embed: getOfficeEmbedUrl(pptUrls[2]),
  },
  {
    id: 5,
    title: 'UPI Workshop (Hindi)',
    description: 'Hindi PowerPoint covering the basics of UPI onboarding, safety, and everyday use cases.',
    language: 'hindi',
    format: 'ppt',
    embed: getOfficeEmbedUrl(
      'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Copy%20of%20UPI%20workshop%20%281%29%20Hindi.pptx',
    ),
  },
  {
    id: 6,
    title: 'UPI Workshop (English)',
    description: 'English version of the UPI workshop with focus on digital payments and security tips.',
    language: 'english',
    format: 'ppt',
    embed: getOfficeEmbedUrl(
      'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Copy%20of%20UPI%20workshop%20English.pptx',
    ),
  },
  {
    id: 7,
    title: 'Government Schemes (Hindi)',
    description: 'Hindi deck highlighting relevant government schemes for entrepreneurs and artisans.',
    language: 'hindi',
    format: 'ppt',
    embed: getOfficeEmbedUrl(
      'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Government%20Schemes%20%281%29%20Hindi.pptx',
    ),
  },
  {
    id: 8,
    title: 'Government Schemes (English)',
    description: 'English deck outlining central schemes, eligibility, and how women entrepreneurs can benefit.',
    language: 'english',
    format: 'ppt',
    embed: getOfficeEmbedUrl(
      'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Government%20Schemes%20%282%29%20English.pptx',
    ),
  },
  {
    id: 9,
    title: 'Marketing Workshop (English)',
    description: 'English presentation on basic marketing tactics for micro-businesses.',
    language: 'english',
    format: 'ppt',
    embed: getOfficeEmbedUrl(
      'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Marketing%20workshop%20English.pptx',
    ),
  },
]

const Resources = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('all')

  return (
    <>
      <SEO
        title="Resources & Workshops"
        description="Free educational resources in Hindi and English. Download PowerPoints and view our Canva deck instantly."
        keywords="financial literacy, resources, PPT, Canva, women empowerment, Hindi resources, English resources"
      />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              <span className="gradient-text">Resources & Workshops</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              We provide free access to resources from our financial literacy and entrepreneurship workshops. These materials are available in both English and Hindi to ensure wider reach, inclusivity, and accessibility—so that more individuals and communities can learn, apply, and benefit from these insights in their own entrepreneurial journeys.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {['all', 'hindi', 'english'].map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedLanguage === lang
                    ? 'bg-gradient-to-r from-neev-gold to-neev-orange text-white shadow-lg scale-105'
                    : 'glass-effect border border-neev-gold/30 hover:border-neev-gold/60'
                }`}
              >
                {lang === 'all' ? 'All Languages' : lang === 'hindi' ? 'हिंदी' : 'English'}
              </button>
            ))}
          </motion.div>

          <div className="space-y-10">
            {resourceDocs
              .filter((doc) =>
                selectedLanguage === 'all' ? true : doc.language === selectedLanguage,
              )
              .map((doc) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: doc.id * 0.1, duration: 0.6 }}
                  className="rounded-3xl border border-neev-blue/30 bg-white shadow-2xl overflow-hidden"
                >
                  <div className="flex items-center justify-between p-6 bg-neev-blue/10">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800">{doc.title}</h3>
                      <p className="text-sm text-gray-600">{doc.description}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-neev-gold to-neev-orange uppercase tracking-wider">
                      {`${doc.language === 'hindi' ? 'Hindi' : 'English'} ${
                        formatLabels[doc.format] ?? doc.format
                      }`}
                    </span>
                  </div>
                  <div className="w-full">
                    {doc.embed ? (
                      <>
                        <iframe
                          title={doc.title}
                          src={doc.embed}
                          className="w-full h-[650px]"
                          loading="lazy"
                        />
                        {doc.link && (
                          <div className="p-6 flex justify-end">
                            <a
                              href={doc.link}
                              target="_blank"
                              rel="noreferrer"
                              className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-neev-gold to-neev-orange"
                            >
                              Open in Canva
                            </a>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="p-8 flex justify-center">
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noreferrer"
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-neev-gold to-neev-orange text-white font-semibold"
                        >
                          Open Resource
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Resources
