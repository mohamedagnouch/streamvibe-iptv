import { NextResponse } from 'next/server';

/**
 * Health check endpoint
 * Used for monitoring and load balancer health checks
 */
export async function GET() {
  const healthcheck = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  };

  try {
    // Add additional health checks here
    // For example: database connection, external API availability, etc.
    
    return NextResponse.json(healthcheck, { status: 200 });
  } catch (error) {
    const errorResponse = {
      status: 'error',
      timestamp: new Date().toISOString(),
      error: 'Health check failed',
    };
    
    return NextResponse.json(errorResponse, { status: 503 });
  }
}
