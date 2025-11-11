import { NextRequest, NextResponse } from 'next/server';

// Input validation helper
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateCardNumber(cardNumber: string): boolean {
  // Basic Luhn algorithm check
  const digits = cardNumber.replace(/\s/g, '');
  if (!/^\d{13,19}$/.test(digits)) return false;
  
  let sum = 0;
  let isEven = false;
  
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { email, name, country, planName, price, paymentMethod } = body;
    
    if (!email || !name || !country || !planName || !price || !paymentMethod) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Validate email
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Validate card details if payment method is card
    if (paymentMethod === 'card') {
      const { cardNumber, expiryDate, cvv } = body;
      
      if (!cardNumber || !expiryDate || !cvv) {
        return NextResponse.json(
          { error: 'Missing card details' },
          { status: 400 }
        );
      }
      
      if (!validateCardNumber(cardNumber)) {
        return NextResponse.json(
          { error: 'Invalid card number' },
          { status: 400 }
        );
      }
      
      // Validate expiry date format (MM/YY)
      if (!/^\d{2}\s*\/\s*\d{2}$/.test(expiryDate)) {
        return NextResponse.json(
          { error: 'Invalid expiry date format' },
          { status: 400 }
        );
      }
      
      // Validate CVV (3-4 digits)
      if (!/^\d{3,4}$/.test(cvv)) {
        return NextResponse.json(
          { error: 'Invalid CVV' },
          { status: 400 }
        );
      }
    }
    
    // Sanitize inputs
    const sanitizedData = {
      email: sanitizeInput(email),
      name: sanitizeInput(name),
      country: sanitizeInput(country),
      planName: sanitizeInput(planName),
      price: sanitizeInput(price),
      paymentMethod: sanitizeInput(paymentMethod),
    };
    
    // TODO: Integrate with actual payment gateway
    // For now, this is a placeholder
    
    // Log payment attempt (in production, use proper logging service)
    console.log('Payment attempt:', {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
    });
    
    // Simulate payment processing
    // In production, integrate with Stripe, PayPal, or other payment gateway
    
    return NextResponse.json({
      success: true,
      message: 'Payment processed successfully',
      orderId: `ORD-${Date.now()}`,
    });
    
  } catch (error) {
    console.error('Payment error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Prevent GET requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
