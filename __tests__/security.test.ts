/**
 * Security Tests
 * Run with: npm test
 */

import {
  validateEmail,
  validateCardNumber,
  validateCVV,
  validateExpiryDate,
  sanitizeInput,
  escapeHtml,
  validatePasswordStrength,
} from '../lib/security';

describe('Security Utilities', () => {
  describe('Email Validation', () => {
    test('should validate correct email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co.uk')).toBe(true);
      expect(validateEmail('user+tag@example.com')).toBe(true);
    });

    test('should reject invalid email addresses', () => {
      expect(validateEmail('invalid')).toBe(false);
      expect(validateEmail('invalid@')).toBe(false);
      expect(validateEmail('@example.com')).toBe(false);
      expect(validateEmail('test@')).toBe(false);
      expect(validateEmail('')).toBe(false);
    });
  });

  describe('Card Number Validation', () => {
    test('should validate correct card numbers', () => {
      // Visa test card
      expect(validateCardNumber('4532015112830366')).toBe(true);
      // Mastercard test card
      expect(validateCardNumber('5425233430109903')).toBe(true);
      // With spaces
      expect(validateCardNumber('4532 0151 1283 0366')).toBe(true);
    });

    test('should reject invalid card numbers', () => {
      expect(validateCardNumber('1234567890123456')).toBe(false);
      expect(validateCardNumber('1111111111111111')).toBe(false);
      expect(validateCardNumber('123')).toBe(false);
      expect(validateCardNumber('')).toBe(false);
    });
  });

  describe('CVV Validation', () => {
    test('should validate correct CVV', () => {
      expect(validateCVV('123')).toBe(true);
      expect(validateCVV('1234')).toBe(true);
    });

    test('should reject invalid CVV', () => {
      expect(validateCVV('12')).toBe(false);
      expect(validateCVV('12345')).toBe(false);
      expect(validateCVV('abc')).toBe(false);
      expect(validateCVV('')).toBe(false);
    });
  });

  describe('Expiry Date Validation', () => {
    test('should validate correct expiry dates', () => {
      const futureDate = new Date();
      futureDate.setFullYear(futureDate.getFullYear() + 1);
      const month = String(futureDate.getMonth() + 1).padStart(2, '0');
      const year = String(futureDate.getFullYear() % 100).padStart(2, '0');
      
      expect(validateExpiryDate(`${month}/${year}`)).toBe(true);
      expect(validateExpiryDate(`${month} / ${year}`)).toBe(true);
    });

    test('should reject invalid expiry dates', () => {
      expect(validateExpiryDate('13/25')).toBe(false);
      expect(validateExpiryDate('00/25')).toBe(false);
      expect(validateExpiryDate('01/20')).toBe(false); // Past date
      expect(validateExpiryDate('invalid')).toBe(false);
      expect(validateExpiryDate('')).toBe(false);
    });
  });

  describe('Input Sanitization', () => {
    test('should remove dangerous characters', () => {
      expect(sanitizeInput('<script>alert("xss")</script>'))
        .not.toContain('<script>');
      expect(sanitizeInput('javascript:alert(1)'))
        .not.toContain('javascript:');
      expect(sanitizeInput('onclick=alert(1)'))
        .not.toContain('onclick=');
    });

    test('should trim whitespace', () => {
      expect(sanitizeInput('  test  ')).toBe('test');
    });

    test('should handle normal input', () => {
      expect(sanitizeInput('John Doe')).toBe('John Doe');
      expect(sanitizeInput('test@example.com')).toBe('test@example.com');
    });
  });

  describe('HTML Escaping', () => {
    test('should escape HTML special characters', () => {
      expect(escapeHtml('<div>Test</div>')).toBe('&lt;div&gt;Test&lt;/div&gt;');
      expect(escapeHtml('Test & Test')).toBe('Test &amp; Test');
      expect(escapeHtml('"quoted"')).toBe('&quot;quoted&quot;');
      expect(escapeHtml("'single'")).toBe('&#039;single&#039;');
    });

    test('should handle normal text', () => {
      expect(escapeHtml('Normal text')).toBe('Normal text');
    });
  });

  describe('Password Strength Validation', () => {
    test('should validate strong passwords', () => {
      const result = validatePasswordStrength('StrongP@ss123');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should reject weak passwords', () => {
      const result1 = validatePasswordStrength('weak');
      expect(result1.isValid).toBe(false);
      expect(result1.errors.length).toBeGreaterThan(0);

      const result2 = validatePasswordStrength('12345678');
      expect(result2.isValid).toBe(false);
      expect(result2.errors).toContain('Password must contain at least one lowercase letter');
    });

    test('should provide specific error messages', () => {
      const result = validatePasswordStrength('short');
      expect(result.errors).toContain('Password must be at least 8 characters long');
    });
  });
});

describe('Security Headers', () => {
  test('should have security headers configured', () => {
    // This would require integration testing with the actual Next.js app
    // For now, we just verify the config file exists
    const fs = require('fs');
    const path = require('path');
    const configPath = path.join(__dirname, '..', 'next.config.ts');
    
    expect(fs.existsSync(configPath)).toBe(true);
    
    const configContent = fs.readFileSync(configPath, 'utf8');
    expect(configContent).toContain('X-Frame-Options');
    expect(configContent).toContain('X-Content-Type-Options');
    expect(configContent).toContain('Strict-Transport-Security');
  });
});

describe('Environment Variables', () => {
  test('should have env.example file', () => {
    const fs = require('fs');
    const path = require('path');
    const envExamplePath = path.join(__dirname, '..', 'env.example');
    
    expect(fs.existsSync(envExamplePath)).toBe(true);
  });

  test('should not commit .env files', () => {
    const fs = require('fs');
    const path = require('path');
    const gitignorePath = path.join(__dirname, '..', '.gitignore');
    
    const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
    expect(gitignoreContent).toContain('.env');
  });
});
