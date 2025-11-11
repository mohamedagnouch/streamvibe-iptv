# Testing Guide

## Setup Testing Environment

To run tests, you need to install the testing dependencies:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest jest-environment-jsdom
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- security.test.ts
```

## Test Structure

Tests are located in the `__tests__` directory:

```
__tests__/
├── security.test.ts       # Security utilities tests
└── ...                    # Other test files
```

## Writing Tests

### Example Test

```typescript
import { validateEmail } from '../lib/security';

describe('Email Validation', () => {
  test('should validate correct email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  test('should reject invalid email', () => {
    expect(validateEmail('invalid')).toBe(false);
  });
});
```

## Test Coverage

Run tests with coverage to see which parts of the code are tested:

```bash
npm test -- --coverage
```

Coverage reports will be generated in the `coverage/` directory.

## Current Tests

### Security Tests (`__tests__/security.test.ts`)

Tests for security utilities:
- Email validation
- Credit card validation (Luhn algorithm)
- CVV validation
- Expiry date validation
- Input sanitization
- HTML escaping
- Password strength validation
- Security headers configuration
- Environment variables setup

## Continuous Integration

Tests run automatically on:
- Every push to main/develop branches
- Every pull request
- Weekly security audits (Mondays at 9 AM)

See `.github/workflows/security.yml` for CI configuration.

## Best Practices

1. **Write tests for new features**: Every new feature should have tests
2. **Test edge cases**: Don't just test the happy path
3. **Keep tests simple**: One test should test one thing
4. **Use descriptive names**: Test names should describe what they test
5. **Mock external dependencies**: Don't rely on external services in tests

## Troubleshooting

### Tests not running

Make sure you've installed all dependencies:
```bash
npm install
```

### TypeScript errors in tests

Install type definitions:
```bash
npm install --save-dev @types/jest
```

### Module not found errors

Check that the import paths are correct and the files exist.

---

For questions, contact: support@streamvibe.com
