# 🚀 Deployment Guide

## Pre-Deployment Checklist

Before deploying to production, ensure:

- [ ] All environment variables are configured
- [ ] HTTPS is enabled
- [ ] Security headers are configured
- [ ] Payment gateway is properly set up
- [ ] Database is configured (if applicable)
- [ ] Email service is configured
- [ ] Analytics are set up (optional)
- [ ] Error tracking is configured (Sentry, etc.)
- [ ] All tests pass
- [ ] Security audit completed (`npm audit`)
- [ ] Performance optimization done
- [ ] SEO meta tags are correct
- [ ] Legal pages are updated (Terms, Privacy, Refund)

## Environment Variables

1. Copy the example environment file:
   ```bash
   cp env.example .env.local
   ```

2. Fill in all required variables:
   - Payment gateway credentials
   - Database connection string
   - Email service credentials
   - API keys and secrets
   - Contact information

3. **NEVER** commit `.env.local` to version control

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

#### Steps:

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Configure Environment Variables**
   - Go to Vercel Dashboard
   - Select your project
   - Go to Settings > Environment Variables
   - Add all variables from `env.example`

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

#### Custom Domain:

1. Go to Vercel Dashboard > Your Project > Settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed

### Option 2: Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Initialize**
   ```bash
   netlify init
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Option 3: Docker

1. **Create Dockerfile** (already included)
   ```dockerfile
   FROM node:20-alpine AS base
   
   # Install dependencies
   FROM base AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   
   # Build application
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build
   
   # Production image
   FROM base AS runner
   WORKDIR /app
   ENV NODE_ENV production
   
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   
   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   
   USER nextjs
   EXPOSE 3000
   ENV PORT 3000
   
   CMD ["node", "server.js"]
   ```

2. **Build Docker image**
   ```bash
   docker build -t streamvibe-iptv .
   ```

3. **Run container**
   ```bash
   docker run -p 3000:3000 --env-file .env.local streamvibe-iptv
   ```

### Option 4: VPS (Ubuntu/Debian)

1. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Install PM2**
   ```bash
   sudo npm install -g pm2
   ```

3. **Clone repository**
   ```bash
   git clone <your-repo-url>
   cd next-js
   ```

4. **Install dependencies**
   ```bash
   npm ci
   ```

5. **Build application**
   ```bash
   npm run build
   ```

6. **Start with PM2**
   ```bash
   pm2 start npm --name "streamvibe" -- start
   pm2 save
   pm2 startup
   ```

7. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. **Install SSL with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

## Post-Deployment

### 1. Verify Deployment

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Forms work properly
- [ ] Payment integration works
- [ ] WhatsApp button works
- [ ] Mobile responsive
- [ ] SSL certificate is valid

### 2. Configure Monitoring

#### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

#### Google Analytics

Add to `app/layout.tsx`:
```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
  `}
</Script>
```

### 3. Set Up Error Tracking

#### Sentry (Recommended)

1. **Install Sentry**
   ```bash
   npm install @sentry/nextjs
   ```

2. **Initialize**
   ```bash
   npx @sentry/wizard@latest -i nextjs
   ```

3. **Configure** in `sentry.client.config.js` and `sentry.server.config.js`

### 4. Configure Backups

- Set up automated database backups (if using database)
- Configure file backups for user uploads
- Test restore procedures

### 5. Performance Optimization

- Enable CDN for static assets
- Configure caching headers
- Optimize images (already configured)
- Enable compression (already configured)

## Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm test
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

## Rollback Procedure

### Vercel
```bash
vercel rollback
```

### PM2
```bash
pm2 restart streamvibe
```

### Docker
```bash
docker stop streamvibe-iptv
docker run -p 3000:3000 streamvibe-iptv:previous-tag
```

## Troubleshooting

### Build Fails

1. Check Node.js version (should be 18+)
2. Clear cache: `rm -rf .next node_modules && npm install`
3. Check for TypeScript errors: `npm run build`

### Environment Variables Not Working

1. Verify variable names match `env.example`
2. Restart the application after changes
3. Check for typos in variable names

### Performance Issues

1. Enable caching
2. Optimize images
3. Use CDN for static assets
4. Check database queries (if applicable)

### SSL Certificate Issues

1. Verify DNS records
2. Check certificate expiration
3. Renew with: `sudo certbot renew`

## Support

For deployment issues:
- Email: support@streamvibe.com
- WhatsApp: +212 618 467 167

---

Last updated: November 2024
