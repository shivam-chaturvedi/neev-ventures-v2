# Deployment Guide

This guide covers deploying your Neev Ventures website to various hosting platforms.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is the fastest and easiest way to deploy your Vite React app.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Done! Your site is live 🎉

3. **Custom Domain** (Optional)
   - In Vercel dashboard, go to Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed

**Configuration:** A `vercel.json` file is already included in your project.

---

### Option 2: Netlify

Netlify is another excellent option with great features.

#### Steps:

1. **Push to GitHub** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect to your GitHub repository
   - Build settings (usually auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"
   - Done! 🎉

3. **Custom Domain** (Optional)
   - Go to Site settings > Domain management
   - Add custom domain
   - Follow DNS configuration instructions

**Configuration:** A `netlify.toml` file is already included.

---

### Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

#### Steps:

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these to your `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/neev-ventures",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/neev-ventures/', // your repo name
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repo Settings > Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

---

### Option 4: Firebase Hosting

Google's hosting solution with excellent global CDN.

#### Steps:

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project (or create new one)
   - Public directory: `dist`
   - Configure as single-page app: `Yes`
   - Set up automatic builds: `No`

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

---

### Option 5: Traditional Hosting (cPanel, etc.)

For traditional web hosts with cPanel or FTP access.

#### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload files**
   - Upload everything from the `dist/` folder to your web host
   - Usually to `public_html/` or `www/` directory

3. **Configure .htaccess** (for Apache servers)
   Create a `.htaccess` file in your upload directory:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 🔧 Environment Variables

If you need environment variables:

### Vercel
- Dashboard > Settings > Environment Variables
- Add variables (e.g., `VITE_API_URL`)

### Netlify
- Site settings > Build & deploy > Environment
- Add variables

### Local Development
Create a `.env` file:
```
VITE_API_URL=http://localhost:3000
VITE_EMAIL_SERVICE_ID=your_service_id
```

**Important:** Never commit `.env` to Git! It's already in `.gitignore`.

---

## 🌐 Custom Domain Setup

### Purchase Domain
- Namecheap, GoDaddy, Google Domains, etc.

### DNS Configuration

For **Vercel**:
- Add A record: `76.76.21.21`
- Add CNAME record: `cname.vercel-dns.com`

For **Netlify**:
- Add CNAME record pointing to your Netlify URL

For **Firebase**:
- Follow Firebase console instructions

---

## 📊 Performance Optimization

Before deploying:

1. **Optimize Images**
   - Use WebP format
   - Compress images
   - Use lazy loading

2. **Code Splitting**
   - Already configured with Vite
   - Consider lazy loading routes if needed

3. **Analyze Bundle**
   ```bash
   npm run build -- --mode analyze
   ```

---

## 🔒 Security Checklist

- [ ] HTTPS enabled (automatic on Vercel/Netlify)
- [ ] Environment variables set (never in code)
- [ ] CORS configured properly
- [ ] Security headers set (in netlify.toml)
- [ ] Dependencies up to date
- [ ] No sensitive data in repository

---

## 🐛 Troubleshooting

### Blank Page After Deploy
- Check browser console for errors
- Verify `base` in `vite.config.js`
- Check routing configuration

### 404 on Page Refresh
- Ensure redirects are configured (vercel.json, netlify.toml, etc.)
- For SPA, all routes should point to index.html

### Build Fails
- Check Node version (should be 16+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check build logs for specific errors

---

## 📈 Post-Deployment

### Analytics
- Add Google Analytics
- Or use privacy-friendly alternatives like Plausible

### Monitoring
- Vercel Analytics (built-in)
- Sentry for error tracking
- Google Search Console for SEO

### SEO
- Submit sitemap to Google Search Console
- Verify meta tags are working
- Check mobile-friendliness

---

## 🎉 You're Live!

Your Neev Ventures website is now live and accessible to the world!

### Next Steps:
1. Share the URL with your team
2. Test on different devices and browsers
3. Set up analytics
4. Monitor performance
5. Gather user feedback

---

**Need help?** Check the documentation for your chosen platform or create an issue on GitHub.


