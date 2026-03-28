import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function generateOrderId(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = 'SV-';
  for (let i = 0; i < 6; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

function getPaypalLink(planName: string, devices: number): string | null {
  const links: Record<string, Record<string, string>> = {
    '1': { '1': 'LD643W6RG3QVG', '2': 'VN4V27V2CMQ74', '3': 'GMFX9YFX3DQUU', '4': '9TBDJ7JC3NA8Q', '5': 'YUECWLCF866M8' },
    '3': { '1': '7LUEBV4NM2LKN', '2': 'KKU5VPWA5WXM8', '3': 'SCDTEUXWDZH5N', '4': '5XHF9B2UNGMUE', '5': 'M68VDD6HBNRFG' },
    '6': { '1': '9SEPNG9P3AUZE', '2': 'D2AMBSWWQR5N2', '3': '8DBWB6597LQ3S', '4': '5WNJFLDMHWEQ4', '5': 'DWVUHBBNC65EJ' },
    '12': { '1': 'PNA4JLVAAVGME', '2': 'NR7Q4DXPDX9BQ', '3': 'HXCBWPSFLVJHJ', '4': 'Y3U44ZLUXRHZ6', '5': 'BDNQR56D3EMEJ' }
  };

  const match = /(\d+)\s*MONTH/i.exec(planName);
  if (!match) return null;
  const months = match[1];
  const deviceCount = devices.toString();

  if (links[months] && links[months][deviceCount]) {
    return `https://www.paypal.com/ncp/payment/${links[months][deviceCount]}`;
  }
  return null;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // SSL on port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Required for some hosting environments
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customerEmail, planName, price, devices, paymentMethod } = body;

    if (!customerEmail || !planName || !price || !devices) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const orderId = generateOrderId();
    const paypalLink = getPaypalLink(planName, devices);

    const orderDate = new Date().toLocaleString('en-GB', {
      timeZone: 'Europe/Paris',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    // ── Email to owner ──────────────────────────────────────────────────
    const ownerHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#0a0e1a;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0e1a;">
    <tr><td align="center" style="padding:40px 20px;">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#111827;border-radius:16px;overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#f97316,#ef4444,#ec4899);padding:32px;text-align:center;">
            <h1 style="color:#fff;margin:0;font-size:28px;font-weight:900;letter-spacing:-1px;">🎉 New Order Received</h1>
            <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:15px;">StreamVibe IPTV</p>
          </td>
        </tr>
        <!-- Order ID Banner -->
        <tr>
          <td style="background:#1f2937;padding:16px 32px;text-align:center;">
            <span style="color:#f97316;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Order ID</span>
            <p style="color:#fff;font-size:24px;font-weight:900;margin:4px 0;letter-spacing:3px;">${orderId}</p>
          </td>
        </tr>
        <!-- Details -->
        <tr>
          <td style="padding:32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${row('📧 Customer Email', customerEmail)}
              ${row('📦 Plan', planName)}
              ${row('📱 Devices', `${devices} Device${devices > 1 ? 's' : ''}`)}
              ${row('💳 Payment Method', paymentMethod || 'PayPal')}
              ${row('💰 Total Price', `€${parseFloat(price).toFixed(2)}`)}
              ${row('🗓️ Order Date', orderDate)}
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#0a0e1a;padding:20px;text-align:center;border-top:1px solid #1f2937;">
            <p style="color:#6b7280;font-size:12px;margin:0;">StreamVibe IPTV · streamvibe.shop</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    // ── Confirmation email to customer ──────────────────────────────────
    const customerHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#0a0e1a;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0e1a;">
    <tr><td align="center" style="padding:40px 20px;">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#111827;border-radius:16px;overflow:hidden;">
        <tr>
          <td style="background:linear-gradient(135deg,#f97316,#ef4444,#ec4899);padding:32px;text-align:center;">
            <h1 style="color:#fff;margin:0;font-size:26px;font-weight:900;">✅ Order Confirmed!</h1>
            <p style="color:rgba(255,255,255,0.85);margin:8px 0 0;">Thank you for choosing StreamVibe IPTV</p>
          </td>
        </tr>
        <tr>
          <td style="background:#1f2937;padding:16px 32px;text-align:center;">
            <span style="color:#f97316;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Your Order ID</span>
            <p style="color:#fff;font-size:24px;font-weight:900;margin:4px 0;letter-spacing:3px;">${orderId}</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <p style="color:#d1d5db;font-size:15px;margin:0 0 24px;">Here is a summary of your order:</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${row('📦 Plan', planName)}
              ${row('📱 Devices', `${devices} Device${devices > 1 ? 's' : ''}`)}
              ${row('💰 Total', `€${parseFloat(price).toFixed(2)}`)}
              ${row('💳 Payment', paymentMethod || 'PayPal')}
              ${row('🗓️ Date', orderDate)}
            </table>
            
            ${paymentMethod === 'PayPal' && paypalLink ? `
            <div style="margin-top:32px;padding:24px;background:linear-gradient(to bottom, #111827, #0a0e1a);border-radius:16px;border:1px solid #f97316;text-align:center;box-shadow:0 10px 25px -5px rgba(249, 115, 22, 0.1);">
              <h3 style="color:#fff;font-size:18px;font-weight:900;margin:0 0 8px;letter-spacing:1px;text-transform:uppercase;">Complete Your Payment</h3>
              <p style="color:#9ca3af;font-size:14px;margin:0 0 24px;">Click the button below to complete your order securely via PayPal.</p>
              
              <a href="${paypalLink}" style="display:inline-block;background:#ffc439;color:#003087;text-decoration:none;font-weight:900;padding:16px 36px;border-radius:12px;font-size:16px;letter-spacing:1px;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.3);">
                PAY WITH PAYPAL
              </a>
              
              <div style="margin-top:24px;padding:16px;background:rgba(249,115,22,0.1);border-radius:8px;border:1px solid rgba(249,115,22,0.2);text-align:left;">
                <p style="color:#f97316;font-size:14px;font-weight:bold;margin:0 0 6px;">⚠️ Important Instruction:</p>
                <p style="color:#d1d5db;font-size:13px;margin:0;line-height:1.5;">Please send the payment and include your Order ID (<strong style="color:#fff;">${orderId}</strong>) in the note. Thank you 🙌</p>
              </div>
            </div>
            ` : ''}

            <div style="margin-top:28px;padding:20px;background:#0a0e1a;border-radius:12px;border:1px solid #374151;">
              <p style="color:#f97316;font-weight:700;margin:0 0 8px;font-size:14px;">⚡ What Happens Next?</p>
              <p style="color:#9ca3af;font-size:13px;margin:0;line-height:1.6;">Our team will process your order and send your IPTV credentials within <strong style="color:#fff;">5–10 minutes</strong>. If you have any questions, reply to this email or contact us on WhatsApp.</p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="background:#0a0e1a;padding:20px;text-align:center;border-top:1px solid #1f2937;">
            <p style="color:#6b7280;font-size:12px;margin:0;">StreamVibe IPTV · streamvibe.shop</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    // Send both emails
    await Promise.all([
      transporter.sendMail({
        from: `"StreamVibe Orders" <${process.env.SMTP_FROM}>`,
        to: process.env.ORDER_EMAIL,
        subject: `🛒 New Order ${orderId} — ${planName} (${devices} Device${devices > 1 ? 's' : ''})`,
        html: ownerHtml,
      }),
      transporter.sendMail({
        from: `"StreamVibe IPTV" <${process.env.SMTP_FROM}>`,
        to: customerEmail,
        subject: `✅ Order Confirmed — ${orderId}`,
        html: customerHtml,
      }),
    ]);

    return NextResponse.json({ success: true, orderId });
  } catch (err) {
    console.error('Order email error:', err);
    return NextResponse.json({ error: 'Failed to send order' }, { status: 500 });
  }
}

// Helper to render a table row
function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #1f2937;">
        <span style="color:#9ca3af;font-size:13px;">${label}</span>
      </td>
      <td style="padding:10px 0;border-bottom:1px solid #1f2937;text-align:right;">
        <span style="color:#fff;font-size:14px;font-weight:600;">${value}</span>
      </td>
    </tr>`;
}
