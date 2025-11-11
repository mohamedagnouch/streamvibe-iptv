# 🚀 Quick Installation Guide

## Prerequisites

- **Node.js**: Version 18 or higher
- **npm**: Version 9 or higher (comes with Node.js)
- **Git**: For version control

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Install Testing Dependencies (Optional)

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest jest-environment-jsdom
```

## Step 3: Configure Environment Variables

1. **Copy the example file:**
   ```bash
   cp env.example .env.local
   ```

2. **Edit `.env.local` with your actual values:**
   - Payment gateway credentials
   - Database connection (if needed)
   - Email service credentials
   - API keys and secrets
   - Contact information

## Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 5: Verify Installation

1. **Check security configuration:**
   ```bash
   npm run security-check
   ```

2. **Run security audit:**
   ```bash
   npm audit
   ```

3. **Build for production (optional):**
   ```bash
   npm run build
   ```

## Common Issues

### Port 3000 Already in Use

Change the port:
```bash
PORT=3001 npm run dev
```

### Module Not Found Errors

Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Make sure TypeScript is installed:
```bash
npm install --save-dev typescript @types/node @types/react @types/react-dom
```

## Next Steps

1. **Review Security Documentation**: See [SECURITY.md](SECURITY.md)
2. **Configure Payment Gateway**: Update environment variables
3. **Customize Content**: Edit pages in `app/` directory
4. **Update Branding**: Modify logo, colors, and text
5. **Deploy**: See [DEPLOYMENT.md](DEPLOYMENT.md)

## Quick Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server

# Testing
npm test                 # Run tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Run tests with coverage

# Security
npm run security-check   # Run security checks
npm audit                # Check for vulnerabilities
npm audit fix            # Fix vulnerabilities

# Code Quality
npm run lint             # Run linter
```

## Support

- **Email**: support@streamvibe.com
- **WhatsApp**: +212 618 467 167
- **Documentation**: See README.md

---

Ready to deploy? See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment instructions.
