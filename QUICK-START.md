# FCHKAL KEYS — Quick Start Guide

## 🚀 Getting Started in 60 Seconds

### Step 1: Open in VS Code
1. Open VS Code
2. File → Open Folder
3. Select the currently opened FCHKAL STORE project folder

### Step 2: Run the Website
1. Install extension: **Live Server** by Ritwick Dey
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Website opens at `http://localhost:5500`

Or simply **double-click `index.html`** to open in your default browser.

### Step 3: Check Product Artwork
Product artwork is already stored in `images/`. If replacing an image, update its `image` path in `js/catalog.js` and refresh the browser.

---

## 📋 File Structure

```
fchkalkeys/
├── index.html              ← Main website file
├── css/
│   └── styles.css         ← All styling (mobile-first responsive)
├── js/
│   ├── catalog.js         ← Product data and WhatsApp configuration
│   ├── app.js             ← Older standalone implementation; not loaded by index.html
│   └── catalog-validator.js
├── images/                ← Product artwork and placeholder
├── public/images/brand/   ← Store logo
├── README.md              ← Full documentation
├── IMAGES.md              ← Image upload guide
├── robots.txt             ← SEO: Search engine rules
├── sitemap.xml            ← SEO: Website map
├── .htaccess              ← Server caching & compression
├── .gitignore             ← Git configuration
└── QUICK-START.md         ← This file
```

---

## ✨ Key Features

✅ **40 Catalogue Entries** — PlayStation, PC, subscriptions, and bundles
✅ **WhatsApp Integration** — One-click ordering with pre-filled messages
✅ **Search and Filters** — Find products across PS4, PS5, and PC
✅ **Shopping Cart** — Add products, adjust quantities, and send an order through WhatsApp
✅ **Language Support** — English, French, Spanish, and Arabic (RTL enabled)
✅ **Mobile Responsive** — Perfect on all devices
✅ **Dark Gaming Theme** — Black, charcoal, electric blue, and cyan accents
✅ **Animations** — Smooth, professional, non-distracting
✅ **SEO Ready** — Robots.txt, sitemap.xml, structured data
✅ **Accessibility** — WCAG compliant, keyboard navigation
✅ **No Dependencies** — Pure HTML, CSS, JavaScript

---

## 🎮 Product Catalogue

The 40 product entries, platforms, variants, current prices, availability, and local artwork paths are maintained in `js/catalog.js`. Product cards include details, Add to Cart, and WhatsApp actions. Discount labels are shown only when valid original-price data is supplied.

---

## 🔧 Customization

### Change WhatsApp Number
Edit `WHATSAPP_NUMBER` in `js/catalog.js` and keep the static contact links in `index.html` in sync:
```javascript
// Current configured number: 212636059783 (without the + prefix)
```

### Change Colors
Edit `css/styles.css` `:root` section:
```css
--bg-deep: #0a0a0f;             /* Main background */
--bg-card: #121820;             /* Card surface */
--accent-blue: #1e90ff;         /* Primary accent */
--accent-cyan: #00e5ff;         /* Highlight accent */
```

### Change Game Information
Edit product entries in `js/catalog.js`:
- Titles, descriptions, prices
- Badges, ratings
- Product images

### Add/Remove Games
Add to the `GAME_CATALOG` array in `js/catalog.js`:
```javascript
{
    id: "g-new-game",
    slug: "new-game",
    title: "New Game",
    category: "Action Adventure",
    edition: "Standard",
    price: 50,
    image: "images/new-game.jpg",
    status: "available",
    platforms: ["PC"],
    variants: [{ id: "g-new-game-pc", platform: "PC", label: "PC", price: 50, status: "available" }]
}
```

---

## 🌐 Language Switching

Users can switch between English, French, Spanish, and Arabic (RTL) layouts.

Language preference is saved automatically in browser.

All text supports both languages through the `titleAr` and `descriptionAr` fields.

---

## 📱 Mobile Optimization

Website is fully responsive:
- ✅ Mobile-first design
- ✅ Touch-friendly buttons
- ✅ Hamburger menu on small screens
- ✅ Optimized product cards
- ✅ Proper scaling on all devices
- ✅ No horizontal scrolling
- ✅ Fast loading

Test on:
- iPhone (375px width)
- iPad (768px width)
- Desktop (1024px+)

---

## 💬 WhatsApp Integration

### How It Works
1. User clicks "BUY NOW" button
2. WhatsApp opens automatically with:
   - Pre-filled recipient: +212 784 698 172
   - Pre-filled message with game name & price
3. Message example: "Hello FCHKAL KEYS, I would like to buy GTA 5 for 30 DH."

### Direct WhatsApp Link
Also available:
- Header WhatsApp button
- Floating WhatsApp button (bottom-right)
- Footer contact link

---

## 🔍 Search Functionality

Real-time search that finds games by:
- Title (e.g., "GTA" → GTA 5)
- Description (e.g., "Football" → FC 25, FC 26)
- Partial matches (e.g., "Red" → Red Dead Redemption 2)

Shows results instantly as user types.

---

## 🎨 Design System

### Colors
- **Dark Base**: #080B12
- **Navy**: #101827
- **Electric Blue**: #168BFF
- **Cyan Highlight**: #35C7FF
- **White Text**: #f5f8fc
- **Gray Secondary**: #9ca3af
- **WhatsApp**: #10b981

### Typography
- **Font Family**: Inter (with system fallback)
- **Headings**: Bold, modern, 900 weight
- **Body**: Clean, readable, 400-600 weight

### Spacing
- Responsive from mobile to desktop
- Consistent padding/margins
- Mobile-first approach

### Effects
- Smooth transitions (300ms)
- Hover states on interactive elements
- Subtle animations (no distractions)
- Glassmorphism on cards
- Electric-blue and cyan glow effects

---

## ⚡ Performance

Already optimized for:
- ✅ No external dependencies
- ✅ Minimal CSS (~15KB)
- ✅ Minimal JavaScript (~8KB)
- ✅ Lazy loading for images
- ✅ Efficient animations
- ✅ Fast page load
- ✅ Optimized images

Further optimization:
1. Add WebP images
2. Minify CSS/JS for production
3. Use CDN for assets
4. Enable browser caching (.htaccess included)

---

## 🔒 Security

- ✅ No sensitive data exposed
- ✅ Safe external links (rel="noopener noreferrer")
- ✅ Input sanitization for search
- ✅ No third-party tracking
- ✅ Clean code without vulnerabilities

---

## 📊 SEO Ready

Includes all essential SEO elements:
- ✅ Semantic HTML5
- ✅ Meta tags & descriptions
- ✅ Open Graph (social sharing)
- ✅ JSON-LD structured data
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ Alt text on images
- ✅ Proper heading hierarchy
- ✅ Mobile-first design
- ✅ Fast loading

---

## ✅ Pre-Launch Checklist

Before going live, verify:

- [ ] Product image paths in `js/catalog.js` are valid
- [ ] Tested on mobile (iPhone + Android)
- [ ] Tested on desktop (Chrome, Firefox, Safari)
- [ ] All WhatsApp links work
- [ ] Language switcher works (EN / FR / ES / AR)
- [ ] Search finds all games
- [ ] Product prices are correct
- [ ] Instagram link works
- [ ] Floating WhatsApp button visible on mobile
- [ ] No console errors
- [ ] No broken images
- [ ] No broken links
- [ ] Fast page load (<3 seconds)

---

## 🎯 Next Steps

1. **Verify Everything Works**
   - Test all product pages
   - Test cart quantity controls and checkout
   - Test WhatsApp links
   - Test search
   - Test language switcher
   - Test on mobile

2. **Deploy Website**
   - Upload to web host
   - Set up domain
   - Enable HTTPS
   - Configure email

3. **Monitor & Maintain**
   - Check WhatsApp messages
   - Update reviews when you get them
   - Add new games if needed
   - Keep prices updated

---

## 📞 Support

The website includes all essential pages:
- Hero section with CTAs
- Game catalog
- Best deals
- Game packs
- How it works
- Reviews
- FAQ (6 questions pre-filled)
- Payment methods
- Contact (WhatsApp)

Add more content as needed by editing HTML/CSS/JS files.

---

## 🚀 Launch!

The storefront is static and requires no build step. Confirm live inventory, prices, and fulfilment details before deploying.

**Contact info already configured:**
- WhatsApp: +212 636 059 783
- Instagram: @fchkal___keys.ma

Product artwork is already stored locally. Keep the product catalogue and image references in sync.

---

**Happy selling! 🎮💜**
