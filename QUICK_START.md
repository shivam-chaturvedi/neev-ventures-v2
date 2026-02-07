# 🚀 Quick Start Guide

Get your Neev Ventures website up and running in minutes!

## ✅ Prerequisites

Make sure you have:
- Node.js (v16 or higher) installed
- npm or yarn package manager
- A code editor (VS Code recommended)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:5173`

## 🎨 First Steps

### 1. Update Basic Information

**Edit Contact Details** (`src/pages/Contact.jsx`)
```javascript
const contactInfo = [
  { icon: '📧', title: 'Email', value: 'your@email.com' },
  { icon: '📱', title: 'Phone', value: '+91 XXXX XXXXXX' },
  // ...
]
```

**Update Social Media** (`src/components/Footer.jsx` and `src/pages/Contact.jsx`)
- Replace `#` with your actual social media URLs

### 2. Add Your Logo

Replace the text logo in `src/components/Navbar.jsx`:
```jsx
<Link to="/" className="flex items-center space-x-3">
  <img src="/your-logo.png" alt="Neev Ventures" className="h-12" />
</Link>
```

### 3. Customize Colors

Edit `tailwind.config.js` to match your brand:
```javascript
colors: {
  'neev-gold': '#C5A572',  // Your primary color
  'neev-orange': '#F4A261', // Your secondary color
  // ...
}
```

### 4. Add Products

Edit `src/pages/Products.jsx`:
```javascript
const products = [
  {
    id: 1,
    name: 'Your Product Name',
    category: 'category',
    price: '499',
    image: '/path/to/image.jpg',
    description: 'Product description',
  },
  // Add more products...
]
```

### 5. Add Workshop Content

Edit `src/pages/Resources.jsx`:
```javascript
const workshops = [
  {
    title: 'Your Workshop',
    language: 'english', // or 'hindi'
    duration: '1 hour',
    level: 'Beginner',
    // ...
  },
  // Add more workshops...
]
```

## 📝 Content Checklist

Use this checklist to track your content updates:

- [ ] Update contact email and phone
- [ ] Add social media links
- [ ] Replace logo
- [ ] Add product images and details
- [ ] Update product pricing
- [ ] Add workshop videos/links
- [ ] Collect and add women's stories
- [ ] Add impact metrics
- [ ] Update terms & conditions
- [ ] Add privacy policy
- [ ] Configure shipping policy
- [ ] Test contact form
- [ ] Add favicon

## 🖼️ Adding Images

### Method 1: Import in Component
```javascript
import heroImage from './assets/hero.jpg'

<img src={heroImage} alt="Description" />
```

### Method 2: Public Folder
Place images in `public/` and reference:
```jsx
<img src="/hero.jpg" alt="Description" />
```

## 🌐 Going Live

### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! ✨

### Option 2: Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Create new site from Git
4. Deploy! ✨

### Option 3: Build Manually
```bash
npm run build
```
Upload the `dist/` folder to your hosting provider.

## 🔧 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new package
npm install package-name
```

## 📱 Testing

Test your website on:
- [ ] Desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Mobile devices (iOS and Android)
- [ ] Different screen sizes
- [ ] Slow internet connections

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format, compress before uploading
2. **Lazy Loading**: Add `loading="lazy"` to images
3. **Code Splitting**: Already configured with Vite
4. **Caching**: Configured automatically in production build

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
# On Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -ti:5173 | xargs kill
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check for TypeScript/ESLint errors
npm run build
```

## 📚 Next Steps

1. Read the [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for detailed customization options
2. Check [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) to understand the codebase
3. Explore the Framer Motion docs for advanced animations
4. Consider adding a CMS for easier content management

## 💡 Pro Tips

- Use Git to track your changes
- Create a staging environment before deploying to production
- Set up analytics (Google Analytics, Plausible, etc.)
- Add SEO meta tags for better search visibility
- Enable HTTPS for security
- Set up a custom domain

## 🎉 You're Ready!

Your beautiful Neev Ventures website is ready to empower rural women and showcase their amazing products!

---

Need help? Check the documentation or create an issue on GitHub.


