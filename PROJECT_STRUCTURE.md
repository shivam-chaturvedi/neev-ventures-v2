# Project Structure

```
Neev/
├── public/                      # Static assets
│   └── vite.svg                # Vite logo
│
├── src/
│   ├── components/             # Reusable components
│   │   ├── home/              # Home page specific components
│   │   │   ├── Hero.jsx       # Hero section with animated background
│   │   │   ├── Mission.jsx    # Mission statement section
│   │   │   ├── OurModel.jsx   # Three pillars section
│   │   │   ├── ProductsPreview.jsx  # Products preview
│   │   │   ├── ImpactWall.jsx # Impact metrics display
│   │   │   └── WomenStories.jsx # Women's stories section
│   │   │
│   │   ├── Navbar.jsx         # Navigation bar with routing
│   │   ├── Footer.jsx         # Footer with links and policies
│   │   └── Loading.jsx        # Loading component
│   │
│   ├── pages/                 # Page components
│   │   ├── Home.jsx          # Home page (combines all home components)
│   │   ├── Products.jsx      # Products catalog page
│   │   ├── Resources.jsx     # Workshops and resources page
│   │   └── Contact.jsx       # Contact form page
│   │
│   ├── App.jsx               # Main app component with routing
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles and Tailwind imports
│
├── .eslintrc.cjs             # ESLint configuration
├── .gitignore                # Git ignore file
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js            # Vite configuration
├── README.md                 # Project documentation
├── CUSTOMIZATION_GUIDE.md    # How to customize the website
└── PROJECT_STRUCTURE.md      # This file

```

## 📁 Folder Details

### `/public`
Static files that don't need processing. These are served as-is.

### `/src/components`
Reusable UI components:
- **home/**: Components specific to the home page, broken down by section
- **Navbar.jsx**: Responsive navigation with mobile menu
- **Footer.jsx**: Site-wide footer with links and info
- **Loading.jsx**: Loading state component

### `/src/pages`
Full page components that use routing:
- **Home.jsx**: Landing page
- **Products.jsx**: E-commerce product catalog
- **Resources.jsx**: Educational workshops and materials
- **Contact.jsx**: Contact form and information

## 🎨 Styling Architecture

### Tailwind Configuration
- Custom colors defined in `tailwind.config.js`
- Custom font families (Georgia for headings, Inter for body)
- Extended utilities for gradients and glass effects

### CSS Classes
- `.gradient-text`: Gradient text effect
- `.glass-effect`: Glassmorphism background effect

## 🔀 Routing Structure

```
/ (Home)
├── Hero Section
├── Mission
├── Products Preview
├── Our Model (3 Pillars)
├── Impact Wall
└── Women's Stories

/products (Products)
├── Category Filter
└── Product Grid

/resources (Resources)
├── Language Filter
└── Workshop Cards

/contact (Contact)
├── Contact Form
├── Contact Info
└── Social Media Links
```

## 🎭 Animation Strategy

- **Framer Motion**: Used for all animations
- **Scroll Animations**: Using `react-intersection-observer`
- **Hover Effects**: CSS transforms with Tailwind
- **Page Transitions**: Router-based transitions

## 📦 Key Dependencies

- **react**: UI library
- **react-router-dom**: Client-side routing
- **framer-motion**: Animation library
- **react-intersection-observer**: Scroll-based animations
- **tailwindcss**: Utility-first CSS framework
- **vite**: Build tool and dev server

## 🚀 Build Output

When you run `npm run build`, Vite creates a `dist/` folder with:
- Optimized JavaScript bundles
- Minified CSS
- Compressed assets
- Production-ready HTML

## 🔧 Configuration Files

- **vite.config.js**: Vite build configuration
- **tailwind.config.js**: Tailwind theme and extensions
- **postcss.config.js**: PostCSS plugins
- **.eslintrc.cjs**: Code linting rules
- **package.json**: Project metadata and dependencies

## 📝 Content Management

Currently, all content is hardcoded in components. Future enhancements could include:
- CMS integration (Contentful, Sanity, etc.)
- JSON data files for easier content updates
- Admin dashboard for content management

## 🎯 Future Directories (Recommended)

```
src/
├── assets/           # Images, fonts, etc.
├── context/          # React context providers
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── services/         # API services
└── data/             # Static data files
```

---

This structure keeps the codebase organized and scalable!


