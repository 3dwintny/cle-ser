<<<<<<< HEAD
# Elizabeth's Cleaning Service Website

A modern, accessible, and high-performance multi-page website for Elizabeth's Cleaning Service built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Meta tags, JSON-LD structured data, sitemap, and robots.txt
- **Performance Focused**: Optimized for Lighthouse 90+ scores
- **Configurable**: Easy content management via JSON configuration files
- **Contact Integration**: Form validation with WhatsApp integration

## 📁 Project Structure

```
elizabeth-clean/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with navbar/footer
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── services/          # Services page
│   │   ├── pricing/           # Pricing page
│   │   └── contact/           # Contact page
│   ├── components/            # Reusable React components
│   │   ├── Button.tsx         # Button component with variants
│   │   ├── Card.tsx           # Card components
│   │   ├── Chip.tsx           # Chip/Badge component
│   │   ├── PricingCard.tsx    # Pricing card with popular badge
│   │   ├── Navbar.tsx         # Sticky navigation
│   │   ├── Footer.tsx         # Footer with social links
│   │   ├── WhatsAppFloatingButton.tsx # WhatsApp integration
│   │   └── FormControls.tsx   # Input and Textarea components
│   └── lib/
│       └── utils.ts           # Utility functions
├── content/                   # Markdown content files
│   └── about/
│       ├── our-story.md       # About page story content
│       └── our-mission.md     # About page mission content
├── public/                    # Static assets
│   ├── sitemap.xml           # SEO sitemap
│   └── robots.txt            # Search engine crawling rules
├── site.config.json          # Site configuration
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ (managed via nvm)
- npm or yarn

### Local Development

1. **Clone and navigate to the project**:
   ```bash
   cd elizabeth-clean
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm start
   ```

## 🎨 Customization

### Site Configuration

Edit `site.config.json` to customize:
- Brand name and contact information
- Pricing plans and features
- Services list
- Team members
- Social media links

### Content Management

- **About Page**: Edit `content/about/our-story.md` and `content/about/our-mission.md`
- **Styling**: Modify `src/app/globals.css` for global styles
- **Colors**: Update CSS custom properties in `globals.css`

### Adding Images

1. Place images in the `public/` directory
2. Update image references in components or configuration files
3. For optimal performance, use WebP/AVIF formats

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Deploy automatically** on every push to main branch
3. **Custom domain**: Configure in Vercel dashboard

### Other Platforms

#### Netlify
```bash
npm run build
# Upload the .next folder to Netlify
```

#### Traditional Hosting
```bash
npm run build
npm run export  # For static export
# Upload the out/ folder to your hosting provider
```

### Environment Variables

Create a `.env.local` file for sensitive data:
```env
# Add environment variables as needed
# NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_key
# SMTP configuration for form submissions
```

## 🔧 Configuration

### Form Submission

The contact form currently uses client-side validation. For production:

1. **Email Service**: Integrate with services like:
   - SendGrid
   - Mailgun
   - AWS SES

2. **reCAPTCHA**: Add Google reCAPTCHA v3:
   ```bash
   npm install react-google-recaptcha
   ```

3. **Webhook Integration**: Connect to Google Sheets or custom APIs

### WhatsApp Integration

The WhatsApp button uses the `https://wa.me/` API. Update the phone number in:
- `site.config.json`
- `src/app/layout.tsx` (WhatsAppFloatingButton component)

## 📱 Pages Overview

### Home (/)
- Hero section with CTA
- Services overview grid
- Value proposition
- Additional services showcase

### Services (/services)
- Detailed service descriptions
- Service gallery with features
- Additional specialized services

### Pricing (/pricing)
- Three pricing tiers
- "Most Popular" badge
- Feature comparison
- Quality guarantees

### About (/about)
- Company story and mission
- Team member profiles
- Call-to-action section

### Contact (/contact)
- Contact form with validation
- Contact information
- Quick action buttons
- WhatsApp integration

## 🎯 Performance Optimization

### Current Optimizations
- ✅ Next.js Image optimization
- ✅ Tailwind CSS purging
- ✅ Font optimization
- ✅ Critical CSS inlining
- ✅ SEO meta tags
- ✅ Structured data (JSON-LD)

### Additional Optimizations
- Image lazy loading
- Service worker for caching
- CDN integration
- Analytics integration

## 🧪 Testing

### Running Tests
```bash
npm run test
```

### Test Coverage
- Component rendering
- Form validation
- Navigation functionality
- Accessibility compliance

## 📊 Lighthouse Scores

Target scores (simulated on 3G Fast):
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary. All rights reserved.

## 📞 Support

For support or questions:
- Email: info@elizabethscleaning.com
- Phone: (562) 433-2390
- WhatsApp: +1-562-433-2390

## 🔄 Updates

### Version 1.0.0
- Initial release
- Core functionality implemented
- SEO and accessibility optimized
- Mobile-responsive design

---

**Built with ❤️ for Elizabeth's Cleaning Service**
=======
# cle-ser
This proyect, is a web site fo
>>>>>>> origin/main
