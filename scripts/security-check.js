#!/usr/bin/env node

/**
 * Security Check Script
 * Runs various security checks before deployment
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Running Security Checks...\n');

let hasErrors = false;

// Check 1: Environment Variables
console.log('1️⃣ Checking environment variables...');
const envExamplePath = path.join(__dirname, '..', 'env.example');
const envLocalPath = path.join(__dirname, '..', '.env.local');

if (!fs.existsSync(envExamplePath)) {
  console.error('❌ env.example file not found!');
  hasErrors = true;
} else {
  console.log('✅ env.example file exists');
}

if (!fs.existsSync(envLocalPath)) {
  console.warn('⚠️  .env.local file not found (OK for CI/CD)');
} else {
  console.log('✅ .env.local file exists');
  
  // Check if .env.local is in .gitignore
  const gitignorePath = path.join(__dirname, '..', '.gitignore');
  const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
  if (!gitignoreContent.includes('.env')) {
    console.error('❌ .env files are not in .gitignore!');
    hasErrors = true;
  } else {
    console.log('✅ .env files are properly ignored');
  }
}

// Check 2: Security Headers
console.log('\n2️⃣ Checking security headers configuration...');
const nextConfigPath = path.join(__dirname, '..', 'next.config.ts');
const nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');

const requiredHeaders = [
  'X-Frame-Options',
  'X-Content-Type-Options',
  'Strict-Transport-Security',
  'Referrer-Policy',
];

let missingHeaders = [];
requiredHeaders.forEach(header => {
  if (!nextConfigContent.includes(header)) {
    missingHeaders.push(header);
  }
});

if (missingHeaders.length > 0) {
  console.error(`❌ Missing security headers: ${missingHeaders.join(', ')}`);
  hasErrors = true;
} else {
  console.log('✅ All required security headers are configured');
}

// Check 3: Middleware
console.log('\n3️⃣ Checking middleware...');
const middlewarePath = path.join(__dirname, '..', 'app', 'middleware.ts');
if (!fs.existsSync(middlewarePath)) {
  console.error('❌ Middleware file not found!');
  hasErrors = true;
} else {
  console.log('✅ Middleware file exists');
  
  const middlewareContent = fs.readFileSync(middlewarePath, 'utf8');
  if (!middlewareContent.includes('rateLimit')) {
    console.warn('⚠️  Rate limiting might not be configured');
  } else {
    console.log('✅ Rate limiting is configured');
  }
}

// Check 4: API Routes Security
console.log('\n4️⃣ Checking API routes...');
const apiPath = path.join(__dirname, '..', 'app', 'api');
if (fs.existsSync(apiPath)) {
  const apiFiles = fs.readdirSync(apiPath, { recursive: true });
  const routeFiles = apiFiles.filter(file => file.endsWith('route.ts'));
  
  console.log(`✅ Found ${routeFiles.length} API route(s)`);
  
  routeFiles.forEach(file => {
    const filePath = path.join(apiPath, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('NextRequest') || !content.includes('NextResponse')) {
      console.warn(`⚠️  ${file} might not be properly typed`);
    }
  });
} else {
  console.log('ℹ️  No API routes found');
}

// Check 5: Dependencies Audit
console.log('\n5️⃣ Running npm audit...');
try {
  execSync('npm audit --audit-level=moderate', { stdio: 'inherit' });
  console.log('✅ No moderate or higher vulnerabilities found');
} catch (error) {
  console.error('❌ Vulnerabilities found! Run "npm audit fix" to fix them.');
  hasErrors = true;
}

// Check 6: TypeScript Compilation
console.log('\n6️⃣ Checking TypeScript compilation...');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ TypeScript compilation successful');
} catch (error) {
  console.error('❌ TypeScript compilation failed!');
  hasErrors = true;
}

// Check 7: Required Files
console.log('\n7️⃣ Checking required files...');
const requiredFiles = [
  'SECURITY.md',
  'DEPLOYMENT.md',
  'robots.txt',
  'app/sitemap.ts',
  'app/manifest.ts',
];

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file.startsWith('robots') ? 'public' : '', file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Required file missing: ${file}`);
    hasErrors = true;
  } else {
    console.log(`✅ ${file} exists`);
  }
});

// Summary
console.log('\n' + '='.repeat(50));
if (hasErrors) {
  console.error('❌ Security checks FAILED! Please fix the issues above.');
  process.exit(1);
} else {
  console.log('✅ All security checks PASSED!');
  console.log('🚀 Ready for deployment!');
  process.exit(0);
}
