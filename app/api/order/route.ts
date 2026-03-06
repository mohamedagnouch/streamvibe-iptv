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

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { customerEmail, planName, price, devices, paymentMethod } = body;

        if (!customerEmail || !planName || !price || !devices) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Create transporter inside the handler to avoid module-level init issues
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true,
            auth: {
                user: 'streamvibe@infos.shop',
                pass: 'Simo123++',
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        // Verify SMTP connection
        await transporter.verify();

        const orderId = generateOrderId();
        const orderDate = new Date().toLocaleString('en-GB', {
            timeZone: 'Europe/Paris',
            dateStyle: 'full',
            timeStyle: 'short',
        });

        const devicesLabel = `${devices} Device${Number(devices) > 1 ? 's' : ''}`;
        const totalPrice = `€${parseFloat(price).toFixed(2)}`;
        const pm = paymentMethod || 'PayPal';

        // ── Owner email ─────────────────────────────────────────────────────
        const ownerHtml = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#0a0e1a;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0e1a;">
    <tr><td align="center" style="padding:40px 20px;">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#111827;border-radius:16px;overflow:hidden;">
        <tr><td style="background:linear-gradient(135deg,#f97316,#ef4444,#ec4899);padding:32px;text-align:center;">
          <h1 style="color:#fff;margin:0;font-size:28px;font-weight:900;">New Order Received</h1>
          <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;">StreamVibe IPTV</p>
        </td></tr>
        <tr><td style="background:#1f2937;padding:16px 32px;text-align:center;">
          <span style="color:#f97316;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Order ID</span>
          <p style="color:#fff;font-size:24px;font-weight:900;margin:4px 0;letter-spacing:3px;">${orderId}</p>
        </td></tr>
        <tr><td style="padding:32px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${row('Customer Email', customerEmail)}
            ${row('Plan', planName)}
            ${row('Devices', devicesLabel)}
            ${row('Payment', pm)}
            ${row('Total', totalPrice)}
            ${row('Date', orderDate)}
          </table>
        </td></tr>
        <tr><td style="background:#0a0e1a;padding:20px;text-align:center;border-top:1px solid #1f2937;">
          <p style="color:#6b7280;font-size:12px;margin:0;">StreamVibe IPTV</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

        // ── Customer confirmation email ──────────────────────────────────────
        const customerHtml = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#0a0e1a;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0e1a;">
    <tr><td align="center" style="padding:40px 20px;">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#111827;border-radius:16px;overflow:hidden;">
        <tr><td style="background:linear-gradient(135deg,#f97316,#ef4444,#ec4899);padding:32px;text-align:center;">
          <h1 style="color:#fff;margin:0;font-size:26px;font-weight:900;">Order Confirmed!</h1>
          <p style="color:rgba(255,255,255,0.85);margin:8px 0 0;">Thank you for choosing StreamVibe IPTV</p>
        </td></tr>
        <tr><td style="background:#1f2937;padding:16px 32px;text-align:center;">
          <span style="color:#f97316;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Your Order ID</span>
          <p style="color:#fff;font-size:24px;font-weight:900;margin:4px 0;letter-spacing:3px;">${orderId}</p>
        </td></tr>
        <tr><td style="padding:32px;">
          <p style="color:#d1d5db;font-size:15px;margin:0 0 24px;">Here is a summary of your order:</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            ${row('Plan', planName)}
            ${row('Devices', devicesLabel)}
            ${row('Total', totalPrice)}
            ${row('Payment', pm)}
            ${row('Date', orderDate)}
          </table>
          <div style="margin-top:28px;padding:20px;background:#0a0e1a;border-radius:12px;border:1px solid #374151;">
            <p style="color:#f97316;font-weight:700;margin:0 0 8px;font-size:14px;">What Happens Next?</p>
            <p style="color:#9ca3af;font-size:13px;margin:0;line-height:1.6;">Our team will send your IPTV credentials within <strong style="color:#fff;">2-4 hours</strong>. Reply to this email if you have any questions.</p>
          </div>
        </td></tr>
        <tr><td style="background:#0a0e1a;padding:20px;text-align:center;border-top:1px solid #1f2937;">
          <p style="color:#6b7280;font-size:12px;margin:0;">StreamVibe IPTV</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

        // Send both emails sequentially to avoid overwhelming the SMTP server
        await transporter.sendMail({
            from: '"StreamVibe Orders" <streamvibe@infos.shop>',
            to: 'infos@streamvibe.shop',
            subject: `New Order ${orderId} - ${planName} (${devicesLabel})`,
            html: ownerHtml,
        });

        await transporter.sendMail({
            from: '"StreamVibe IPTV" <streamvibe@infos.shop>',
            to: customerEmail,
            subject: `Order Confirmed - ${orderId}`,
            html: customerHtml,
        });

        return NextResponse.json({ success: true, orderId });

    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        console.error('[ORDER API ERROR]', message);
        return NextResponse.json(
            { error: 'Failed to send order email', detail: message },
            { status: 500 }
        );
    }
}
