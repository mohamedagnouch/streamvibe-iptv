# Contributing to StreamVibe IPTV

Thank you for your interest in contributing to StreamVibe IPTV! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Security Guidelines](#security-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what's best for the project
- Show empathy towards other contributors

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd next-js
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your values
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to http://localhost:3000

## Development Workflow

### Branch Naming

- `feature/` - New features (e.g., `feature/payment-integration`)
- `fix/` - Bug fixes (e.g., `fix/header-responsive`)
- `security/` - Security improvements (e.g., `security/csrf-protection`)
- `docs/` - Documentation updates (e.g., `docs/api-reference`)
- `refactor/` - Code refactoring (e.g., `refactor/payment-modal`)

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `security`: Security improvements

**Examples:**
```bash
feat(payment): add Stripe integration
fix(header): resolve mobile menu overflow
security(api): implement rate limiting
docs(readme): update installation instructions
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type unless absolutely necessary
- Use strict mode

```typescript
// Good
interface PaymentData {
  email: string;
  amount: number;
  currency: string;
}

// Bad
const payment: any = { ... };
```

### React Components

- Use functional components with hooks
- Keep components small and focused
- Use proper prop types
- Implement error boundaries for critical components

```tsx
// Good
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn-${variant}`}>
      {label}
    </button>
  );
}
```

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Keep custom CSS minimal
- Use CSS variables for theme colors

```tsx
// Good
<div className="flex flex-col md:flex-row gap-4 p-6">

// Avoid
<div style={{ display: 'flex', padding: '24px' }}>
```

### File Organization

```
app/
├── components/        # Reusable components
├── api/              # API routes
├── [page]/           # Page routes
├── utils/            # Utility functions
└── types/            # TypeScript types
```

## Security Guidelines

### Input Validation

**Always validate user input on both client and server:**

```typescript
// Client-side
const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Server-side (API route)
if (!validateEmail(email)) {
  return NextResponse.json(
    { error: 'Invalid email' },
    { status: 400 }
  );
}
```

### Sensitive Data

- Never commit secrets or API keys
- Use environment variables for configuration
- Never log sensitive information
- Hash/mask sensitive data in logs

```typescript
// Good
console.log('Payment processed for user:', userId);

// Bad
console.log('Payment processed:', { cardNumber, cvv });
```

### API Security

- Implement rate limiting
- Validate all inputs
- Use HTTPS in production
- Implement CSRF protection
- Use proper error messages (don't leak info)

```typescript
// Good
return NextResponse.json(
  { error: 'Invalid request' },
  { status: 400 }
);

// Bad
return NextResponse.json(
  { error: 'Database connection failed at 192.168.1.1:5432' },
  { status: 500 }
);
```

## Pull Request Process

### Before Submitting

1. **Run tests**
   ```bash
   npm run lint
   npm run build
   ```

2. **Run security checks**
   ```bash
   npm run security-check
   npm audit
   ```

3. **Update documentation**
   - Update README if needed
   - Add/update comments
   - Update CHANGELOG.md

4. **Test thoroughly**
   - Test on multiple browsers
   - Test responsive design
   - Test all affected features

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update
- [ ] Security improvement

## Testing
- [ ] Tested locally
- [ ] Tested on mobile
- [ ] Tested on multiple browsers
- [ ] Added/updated tests

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Security considerations addressed
```

### Review Process

1. Submit PR with clear description
2. Wait for automated checks to pass
3. Address reviewer feedback
4. Get approval from maintainer
5. PR will be merged by maintainer

## Testing

### Manual Testing

1. **Functionality**
   - Test all user flows
   - Test edge cases
   - Test error handling

2. **Responsive Design**
   - Mobile (320px - 767px)
   - Tablet (768px - 1023px)
   - Desktop (1024px+)

3. **Browser Compatibility**
   - Chrome/Edge (latest)
   - Firefox (latest)
   - Safari (latest)

4. **Accessibility**
   - Keyboard navigation
   - Screen reader compatibility
   - Color contrast
   - Focus indicators

### Automated Testing

```bash
# Run linter
npm run lint

# Run type check
npx tsc --noEmit

# Run security audit
npm audit

# Run security checks
npm run security-check
```

## Performance Guidelines

### Image Optimization

- Use Next.js Image component
- Provide proper width/height
- Use appropriate formats (WebP, AVIF)
- Lazy load images

```tsx
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
/>
```

### Code Splitting

- Use dynamic imports for heavy components
- Lazy load non-critical features

```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

### Bundle Size

- Keep bundle size minimal
- Analyze bundle with `npm run build`
- Remove unused dependencies
- Use tree-shaking

## Documentation

### Code Comments

```typescript
/**
 * Validates credit card number using Luhn algorithm
 * @param cardNumber - Card number string (spaces allowed)
 * @returns true if valid, false otherwise
 */
function validateCardNumber(cardNumber: string): boolean {
  // Implementation
}
```

### README Updates

- Keep README up to date
- Document new features
- Update installation steps
- Add usage examples

## Questions?

- Email: support@streamvibe.com
- WhatsApp: +212 618 467 167

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to StreamVibe IPTV! 🎉
