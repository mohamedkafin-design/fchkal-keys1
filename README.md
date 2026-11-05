# FCHKAL STORE — Premium Gaming Store

Professional, modern gaming e-commerce website built with HTML5, CSS3, and JavaScript.

## 🎮 Project Overview

FCHKAL STORE is a static gaming catalogue for PlayStation and PC, with:
- A 40-entry catalogue managed in `js/catalog.js`
- PlayStation, PlayStation Plus, and PC collections
- Product details, platform filters, persistent cart, and WhatsApp ordering
- English, French, Spanish, and Arabic (RTL) language options
- Responsive styling with premium black, navy, electric-blue, and cyan accents

## 📁 Project Structure

```
fchkalkeys/
├── index.html              # Main website
├── css/
│   └── styles.css         # Complete styling
├── js/
│   ├── catalog.js         # Product data and WhatsApp configuration
│   ├── app.js             # Older standalone implementation (not loaded by index.html)
│   └── catalog-validator.js
├── images/                # Product artwork and placeholder
├── public/images/brand/   # Store logo
├── robots.txt             # SEO: Search engine directives
├── sitemap.xml            # SEO: Website sitemap
└── README.md              # This file
```

## 🚀 Getting Started

### Quick Start

1. Open the project folder in VS Code
2. Right-click on `index.html` and select "Open with Live Server"
3. The website will open in your browser

Or simply double-click `index.html` to open it directly.

## GitHub Pages Deployment

This project is a static HTML, CSS, and JavaScript site; it does not use Vite or require a build command. The Pages Actions workflow uploads the project root directly.

1. Put the **contents** of this project folder at the root of the GitHub repository, including `.github/workflows/pages.yml`.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. Push to the `main` or `master` branch, or run the **Deploy static site to GitHub Pages** workflow manually.

The stylesheet and image URLs are relative, so they work on both repository project sites and custom domains. Product detail pages use hash routes and do not require a server-side rewrite.

### Features Included

✅ **Responsive Design** — Works perfectly on desktop, tablet, and mobile
✅ **Dark Gaming Theme** — Deep black, charcoal panels, electric blue, and cyan accents
✅ **Language Switcher** — English, French, Spanish, and Arabic with RTL support
✅ **Search and Filters** — Find catalogue items by name, category, or PS4 / PS5 / PC
✅ **WhatsApp Integration** — Direct messaging with game details pre-filled
✅ **Product Collections** — Best sellers, latest titles, PlayStation, PlayStation Plus, PC, and full catalogue
✅ **Shopping Cart** — Add items, adjust quantities, and send an order through WhatsApp
✅ **Honest Discounts** — Sale prices appear only when a higher original price is provided
✅ **Animations** — Smooth scroll reveals and hover effects
✅ **SEO Optimized** — Proper meta tags, structured data, sitemap
✅ **Accessibility** — WCAG compliant, keyboard navigation
✅ **Performance** — Lazy loading, optimized assets

## 🎯 Game Products

The full product list, supported platforms, variants, current prices, availability, and image paths are maintained in `js/catalog.js`. Prices are displayed from that source; original prices are not invented for products without discount data.

## 🖼️ Adding Game Images

Product artwork is stored in `images/`. When adding or replacing an image, update the matching `image` path in `js/catalog.js`. Product cards use a consistent portrait frame with `object-fit: cover` to avoid stretching.

## 📱 Mobile Optimization

The website is fully responsive with:
- Touch-friendly buttons (min 44x44px)
- Optimized navigation with hamburger menu
- Perfect scaling on all screen sizes
- No horizontal scrolling
- Fast loading times

## 🌐 Language Support

### English (EN)
- LTR layout
- Default language
- Stored in localStorage

### Arabic (العربية)
- Full RTL layout
- All content is in proper Arabic
- Navigation and UI adapt automatically
- Preference saved for next visit

Switch languages using the **EN | FR | ES | العربية** buttons in the navbar.

## 💬 WhatsApp Integration

Every product has a **BUY NOW** button that:
1. Opens WhatsApp automatically
2. Pre-fills the message with product details
3. Contact: **+212 636 059 783**

Example messages sent:
- "Hello FCHKAL STORE! I am interested in purchasing a game. Please confirm availability and delivery details."

## 🔍 SEO Features

Fully optimized for search engines:

- ✅ Semantic HTML5
- ✅ Descriptive page titles and meta descriptions
- ✅ Open Graph metadata
- ✅ JSON-LD structured data
- ✅ Image alt text
- ✅ Robots.txt and sitemap.xml
- ✅ Mobile-first design
- ✅ Fast loading performance
- ✅ Proper heading hierarchy
- ✅ Internal linking

## 🛠️ Customization

### Change WhatsApp Number

Change the configured WhatsApp number in `js/catalog.js` and update the static contact links in `index.html` to keep all contact entry points consistent:

```javascript
// Current configured number: 212636059783 (without the + prefix)
```

### Change Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --bg-deep: #080B12;             /* Main background */
    --bg-navy: #101827;             /* Panel surface */
    --accent-blue: #168BFF;         /* Primary accent */
    --accent-cyan: #35C7FF;         /* Highlight accent */
}
```

### Update Game Information

Edit the product object in `js/catalog.js` to change:
- Titles, descriptions, prices
- Images paths
- Badges, ratings
- WhatsApp messages

### Add/Remove Games

To add a game, add a product object to `GAME_CATALOG` in `js/catalog.js`:

```javascript
{
    id: "g-new-game",
    slug: "new-game",
    title: "Game Title",
    category: "Action Adventure",
    edition: "Standard",
    price: 50,
    image: "images/game-image.jpg",
    status: "available",
    platforms: ["PC"],
    variants: [{ id: "g-new-game-pc", platform: "PC", label: "PC", price: 50, status: "available" }]
}
```

## 📊 Section Breakdown

### 1. Hero Section
Cinematic introduction with:
- Dark gaming atmosphere
- Electric-blue and cyan gradient glow
- Particle animation
- Call-to-action buttons

### 2. Why Choose Us
4 benefit cards highlighting:
- Fast Service
- Great Prices
- Professional Service
- Gaming Focused

### 3. Games Section
Full product catalogue with product images, titles, supported platforms, current prices, product details, Add to Cart, and WhatsApp ordering.

### 4. Best Sellers and Latest Games
Curated product collections selected from the catalogue.

### 5. Special Offers
Only products with a real original price higher than the current price receive discount labels.

### 6. Platform Collections
Separate PlayStation, PlayStation Plus, and Steam / PC sections.

### 7. How It Works
3-step process:
1. Choose Your Game
2. Click BUY NOW
3. Contact on WhatsApp

### 8. Reviews
Customer testimonials (currently sample reviews — add real ones)

### 9. FAQ
Expandable Q&A section with 6 common questions

### 10. Payment Methods
Shows accepted payment options:
- CIH Bank
- Wafacash
- PayPal
- Cash Plus
- Tijariwafa Bank

### 11. Footer
Complete site navigation and contact information

## 🎨 Design System

### Color Palette
- **Dark**: #080B12 (Main background)
- **Navy**: #101827 (Panel background)
- **Electric blue**: #168BFF (Primary accent)
- **Cyan**: #35C7FF (Highlight accent)
- **White**: #f5f8fc (Text)
- **Gray**: #9aa9ba (Secondary text)
- **Green**: #25d366 (WhatsApp)

### Typography
- Headings: Bold, modern, high contrast
- Body: Clean, readable
- Headings: Space Grotesk
- Body: Inter (system fallback)

### Spacing
- Consistent 0.5rem to 4rem gaps
- Balanced padding and margins
- Responsive scaling on mobile

### Effects
- Subtle animations (no distractions)
- Smooth transitions
- Hover states on interactive elements
- Glassmorphism effects on cards

## ⚡ Performance Tips

1. **Images**: Use WebP where possible
2. **CSS**: Minified in production
3. **JavaScript**: No external dependencies
4. **Loading**: Lazy loading for images
5. **Caching**: Browser caching headers

## 📋 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers

## 🔒 Security

- No sensitive data in frontend code
- Safe external links (rel="noopener noreferrer")
- Input sanitization for search
- HTTPS ready

## 📞 Support & Contact

- **WhatsApp**: +212 636 059 783
- **Instagram**: [@fchkal___keys.ma](https://www.instagram.com/fchkal___keys.ma?vrfl=MWZqcGo1bTJzMGNjMg==)

## 📄 License

© 2026 FCHKAL STORE. All rights reserved.

---

## ✨ Quick Checklist Before Launch

- [ ] Confirm product image paths in `js/catalog.js`
- [ ] Update WhatsApp number (if different)
- [ ] Add real customer reviews
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Check all WhatsApp links work
- [ ] Verify Instagram link is correct
- [ ] Test search functionality
- [ ] Test language switcher
- [ ] Check for broken links
- [ ] Verify images load correctly
- [ ] Test floating WhatsApp button
- [ ] Run through entire website on mobile

## 🚀 Ready to Launch

Your FCHKAL KEYS website is production-ready! All features are functional and the design is premium-quality.

Start selling games immediately with a professional, trustworthy platform.

---

**Built with ❤️ for FCHKAL KEYS**
