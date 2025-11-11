# 🎬 IPTVIBE - Premium IPTV Streaming Platform

A modern, professional IPTV streaming website built with Next.js 15, React, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## ✨ Features

### 🏠 Core Pages
- **Home Page** - Hero section, features, pricing, testimonials, FAQ, and CTA
- **Channels** - Browse 37,591+ live channels from 115+ countries
- **Instructions** - Step-by-step setup guides for all devices
- **Reseller Program** - Partner program with wholesale pricing
- **FAQ** - Comprehensive help center with 25+ questions
- **Legal Pages** - Terms of Service, Privacy Policy, Refund Policy

### 🎨 Design Features
- **Modern UI/UX** - Clean, professional design with gradient accents
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Dark Theme** - Elegant dark color scheme with orange/red accents
- **Smooth Animations** - Micro-interactions and transitions throughout
- **Accessibility** - WCAG compliant with proper focus states

### 🚀 Technical Features
- **Next.js 15 App Router** - Latest Next.js with server components
- **TypeScript** - Type-safe code throughout
- **Tailwind CSS** - Utility-first styling with custom design system
- **Lucide Icons** - Beautiful, consistent iconography
- **SEO Optimized** - Meta tags, semantic HTML, and performance optimized
- **Performance** - Optimized images, lazy loading, and code splitting

### 📱 Components
- **Header** - Sticky navigation with mobile menu
- **Footer** - Multi-column footer with social links and quick navigation
- **Hero** - Eye-catching hero section with CTA
- **Pricing** - Interactive pricing cards with feature comparison
- **Testimonials** - Customer reviews with ratings
- **FAQ** - Collapsible accordion with search
- **CTA Section** - Conversion-optimized call-to-action
- **Stats** - Animated statistics showcase

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 📦 Installation

See [INSTALL.md](INSTALL.md) for detailed installation instructions.

**Quick Start:**

```bash
# Install dependencies
npm install

# Configure environment variables
cp env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

**Optional - Install Testing Dependencies:**
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest jest-environment-jsdom
```

## 📁 Project Structure

```
next-js/
├── app/
│   ├── channels/          # Channels listing page
│   ├── components/        # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── ...
│   ├── faq/              # FAQ page
│   ├── instructions/     # Setup instructions
│   ├── privacy/          # Privacy policy
│   ├── refund/           # Refund policy
│   ├── reseller/         # Reseller program
│   ├── terms/            # Terms of service
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
└── README.md
```

## 🎨 Design System

### Colors
- **Primary:** Orange (#ff6b35)
- **Secondary:** Red (#e63946)
- **Accent:** Pink (#f72585)
- **Background:** Dark (#0a0e1a)
- **Text:** Light (#f5f5f7)

### Typography
- **Headings:** 800-600 weight, tight line-height
- **Body:** 400 weight, relaxed line-height
- **Base Size:** 12px (responsive with clamp)

### Spacing
- **Sections:** 3rem mobile, 4rem tablet, 5rem desktop
- **Cards:** 1rem mobile, 1.5rem desktop
- **Gaps:** Consistent 4-8 spacing scale

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build for Production
```bash
npm run build
npm start
```

## 📝 Key Pages

### Home (`/`)
Complete landing page with all sections:
- Hero with video background
- Movie carousel
- Statistics showcase
- Features grid
- Pricing plans
- How it works
- Testimonials
- FAQ
- CTA section
- Footer

### Channels (`/channels`)
- 37,591+ channels from 115+ countries
- Searchable country list
- Expandable channel details
- Pagination
- Popular channels carousel

### Instructions (`/instructions`)
- Device-specific setup guides
- Smart TV, Android, iOS, PC
- Step-by-step instructions
- Collapsible sections
- Help & support CTA

### Reseller (`/reseller`)
- Partner program details
- Pricing tiers
- Benefits showcase
- How it works
- Testimonials

### FAQ (`/faq`)
- 25+ questions across 5 categories
- Search functionality
- Collapsible answers
- Category navigation
- Support contact

### Legal Pages
- **Terms of Service** - Complete terms and conditions
- **Privacy Policy** - GDPR-compliant privacy information
- **Refund Policy** - 30-day money-back guarantee details

## 🔧 Customization

### Update Branding
1. Edit `app/components/Logo.tsx` for logo
2. Update colors in `app/globals.css`
3. Modify `app/layout.tsx` for meta tags

### Update Content
1. Edit page files in `app/` directory
2. Update pricing in `app/components/Pricing.tsx`
3. Modify FAQ in `app/faq/page.tsx`

### Update Contact Info
1. WhatsApp: Search for `212618467167` and replace
2. Email: Search for `support@streamvibe.com` and replace

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Cumulative Layout Shift:** < 0.1

## 🤝 Support

For support, contact:
- **WhatsApp:** +212 618 467 167
- **Email:** support@streamvibe.com
- **Hours:** 24/7

## 🔒 Security

Security is a top priority. See [SECURITY.md](SECURITY.md) for:
- Security features implemented
- Best practices
- Vulnerability reporting
- Compliance information

## 🚀 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions including:
- Pre-deployment checklist
- Multiple deployment options (Vercel, Netlify, Docker, VPS)
- Environment variables setup
- Post-deployment configuration
- Monitoring and error tracking

## 📄 License

This project is proprietary and confidential.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Tailwind CSS for the utility-first CSS framework
- Lucide for beautiful icons

---

Built with ❤️ using Next.js 15
