import { useEffect } from 'react'

const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    // Update title
    document.title = title 
      ? `${title} | Neev Ventures` 
      : 'Neev Ventures - From Our Villages, For Our Future'

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Empowering rural women through financial literacy, entrepreneurship, and sustainable product creation.')
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = description || 'Empowering rural women through financial literacy, entrepreneurship, and sustainable product creation.'
      document.head.appendChild(meta)
    }

    // Update keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]')
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords)
      } else {
        const meta = document.createElement('meta')
        meta.name = 'keywords'
        meta.content = keywords
        document.head.appendChild(meta)
      }
    }
  }, [title, description, keywords])

  return null
}

export default SEO


