import { NextRequest, NextResponse } from 'next/server';

// Input validation
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, subject, message } = body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
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
    
    // Validate message length
    if (message.length < 10 || message.length > 1000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 1000 characters' },
        { status: 400 }
      );
    }
    
    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    };
    
    // TODO: Send email using SMTP or email service
    // For now, just log the contact form submission
    console.log('Contact form submission:', {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
    });
    
    // In production, integrate with email service like SendGrid, Mailgun, etc.
    // Example with nodemailer:
    // await sendEmail({
    //   to: process.env.SUPPORT_EMAIL,
    //   from: sanitizedData.email,
    //   subject: sanitizedData.subject,
    //   text: sanitizedData.message,
    // });
    
    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully',
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
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
