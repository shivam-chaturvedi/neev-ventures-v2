# Customization Guide

This guide will help you customize the Neev Ventures website to fit your needs.

## 🎨 Changing Colors

The color theme is defined in `tailwind.config.js`. To change colors:

```javascript
colors: {
  'neev-gold': '#C5A572',    // Change these hex codes
  'neev-orange': '#F4A261',
  'neev-pink': '#FFB5C5',
  'neev-teal': '#8ECAE6',
  'neev-olive': '#99A86D',
  'neev-coral': '#FF8A65',
}
```

## 📝 Updating Content

### Home Page

1. **Hero Section** (`src/components/home/Hero.jsx`)
   - Edit the tagline and CTA buttons

2. **Mission** (`src/components/home/Mission.jsx`)
   - Update the mission statement text

3. **Products Preview** (`src/components/home/ProductsPreview.jsx`)
   - Add real product categories
   - Replace placeholder emojis with actual product images

4. **Our Model** (`src/components/home/OurModel.jsx`)
   - Edit the three pillars content
   - Change icons and descriptions

5. **Impact Wall** (`src/components/home/ImpactWall.jsx`)
   - Replace "Coming Soon" with actual metrics
   - Update the metrics array with real data

6. **Women's Stories** (`src/components/home/WomenStories.jsx`)
   - Add real women's profiles with photos and stories

### Products Page

Edit `src/pages/Products.jsx`:
- Replace `placeholderProducts` array with real product data
- Add product images (replace emoji placeholders)
- Update pricing (replace "TBD" with actual prices)
- Connect to your e-commerce backend

### Resources Page

Edit `src/pages/Resources.jsx`:
- Replace workshop placeholders with actual video links
- Add real workshop descriptions
- Link to actual educational content

### Contact Page

Edit `src/pages/Contact.jsx`:
- Update contact information (email, phone, address)
- Connect form to your email service or backend
- Add real social media links

## 🖼️ Adding Images

### Product Images

1. Create an `assets/products` folder in `src/`
2. Import images in your component:
```javascript
import productImage from '../assets/products/candle.jpg'
```
3. Use in JSX:
```jsx
<img src={productImage} alt="Product name" />
```

### Background Images

Add to the `public` folder and reference with `/image-name.jpg`

## 🌐 Multi-language Support

The website already supports Hindi and English for resources. To add more:

1. Create a language context in `src/context/LanguageContext.jsx`
2. Add translations for all text content
3. Update components to use translation strings

## 📱 Social Media Links

Update in `src/components/Footer.jsx` and `src/pages/Contact.jsx`:
- Replace `#` with actual social media URLs
- Update icons (currently using emojis, can replace with icon libraries)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy the 'dist' folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### Custom Server
```bash
npm run build
# Copy 'dist' folder to your server
```

## 🎭 Animation Customization

Animations are powered by Framer Motion. To modify:

1. Find the component you want to change
2. Look for `motion.div` elements
3. Edit the `animate`, `initial`, and `transition` props

Example:
```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

## 📦 Adding New Components

1. Create component file in `src/components/`
2. Import and use in your pages
3. Follow the existing pattern for consistency

## 🔧 Environment Variables

Create a `.env` file for sensitive data:
```
VITE_API_URL=your_api_url
VITE_EMAIL_SERVICE=your_email_service
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 💡 Tips

- Keep the warm, welcoming aesthetic
- Maintain consistency in spacing and colors
- Test on mobile devices regularly
- Optimize images before uploading
- Keep accessibility in mind (alt text, contrast, etc.)

## 🆘 Need Help?

- Check the React documentation: https://react.dev
- Tailwind CSS docs: https://tailwindcss.com
- Framer Motion docs: https://www.framer.com/motion

---

Happy customizing! 🎨


