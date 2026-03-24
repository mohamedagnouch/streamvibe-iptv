'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

type PaymentMethod = 'paypal' | 'card' | 'transfer';

function CheckoutForm() {
    const params = useSearchParams();
    const planName = params.get('plan') ?? '';
    const price = params.get('price') ?? '0';
    const devices = parseInt(params.get('devices') ?? '1', 10);

    const [email, setEmail] = useState('');
    const [payment, setPayment] = useState<PaymentMethod>('paypal');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [orderId, setOrderId] = useState('');
    const [emailError, setEmailError] = useState('');
    const [success, setSuccess] = useState(false);

    const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

    const handlePlaceOrder = async () => {
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }
        setEmailError('');
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    customerEmail: email,
                    planName,
                    price,
                    devices,
                    paymentMethod: payment === 'paypal' ? 'PayPal' : payment === 'card' ? 'Credit / Debit Card' : 'Bank Transfer',
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error ?? 'Unknown error');
            setOrderId(data.orderId);
            setSuccess(true);
        } catch (e: unknown) {
            setError(e instanceof Error ? e.message : 'Failed to place order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const paymentOptions: { id: PaymentMethod; label: string; sub: string; icon: string }[] = [
        { id: 'paypal', label: 'PayPal', sub: 'Fast and Secure Payment', icon: '🅿️' },
        { id: 'card', label: 'Credit / Debit Card', sub: 'Visa, Mastercard, Amex', icon: '💳' },
        { id: 'transfer', label: 'Bank Transfer', sub: 'Manual — 1-2 business days', icon: '🏦' },
    ];

    // ── Success Screen ─────────────────────────────────────────────────────
    if (success) {
        return (
            <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
                <Header />
                <main className="flex-1 flex items-center justify-center px-4 py-16">
                    <div className="bg-[#111827] border border-white/10 rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center">
                        <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-black text-white mb-2">Order Confirmed! 🎉</h2>
                        <p className="text-gray-400 mb-8">A confirmation has been sent to <strong className="text-white">{email}</strong></p>
                        <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 border border-orange-500/20 rounded-2xl p-5 mb-8">
                            <p className="text-xs text-orange-400 uppercase tracking-widest font-bold mb-2">Order ID</p>
                            <p className="text-3xl font-black text-white tracking-[0.2em]">{orderId}</p>
                        </div>
                        <div className="text-left space-y-0 mb-8 text-sm rounded-2xl overflow-hidden border border-white/10">
                            {[
                                ['Plan', planName],
                                ['Devices', `${devices} Device${devices > 1 ? 's' : ''}`],
                                ['Total', `€${parseFloat(price).toFixed(2)}`],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between px-5 py-3 border-b border-white/5 last:border-0">
                                    <span className="text-gray-400">{k}</span>
                                    <span className="font-semibold text-white">{v}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mb-6">
                            ⚡ Our team will deliver your IPTV credentials within <strong className="text-gray-300">2–4 hours</strong>.
                        </p>
                        <Link
                            href="/"
                            className="inline-block w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition text-center"
                        >
                            Back to Home
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // ── Checkout Form ──────────────────────────────────────────────────────
    return (
        <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
            <Header />
            <main className="flex-1 px-4 pt-16 pb-28 sm:pb-12">
                <div className="max-w-4xl mx-auto">

                    {/* Steps */}
                    <div className="flex items-center justify-center gap-3 mb-10 text-sm font-semibold">
                        {[
                            { label: 'Cart', icon: '✓', active: false, done: true },
                            { label: 'Information', icon: '2', active: true, done: false },
                            { label: 'Finish', icon: '3', active: false, done: false },
                        ].map((s, i) => (
                            <div key={s.label} className="flex items-center gap-2">
                                <span className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold ${s.active ? 'border-orange-500 bg-orange-500 text-white' :
                                    s.done ? 'border-gray-600 text-gray-500' : 'border-gray-700 text-gray-600'
                                    }`}>{s.icon}</span>
                                <span className={s.active ? 'text-orange-400' : 'text-gray-600'}>{s.label}</span>
                                {i < 2 && <div className="w-8 h-px bg-gray-700 mx-1" />}
                            </div>
                        ))}
                    </div>

                    {/* Two-column layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-5">

                        {/* Left — Form */}
                        <div className="space-y-4">

                            {/* Customer Info Card */}
                            <div className="bg-[#111827] border border-white/10 rounded-2xl p-5 sm:p-6">
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-5">Customer Information</h2>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address <span className="text-orange-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={e => { setEmail(e.target.value); setEmailError(''); }}
                                    className={`w-full bg-[#0d1525] border ${emailError ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition`}
                                />
                                {emailError && <p className="text-red-400 text-xs mt-2 flex items-center gap-1">⚠ {emailError}</p>}
                            </div>

                            {/* Payment Card */}
                            <div className="bg-[#111827] border border-white/10 rounded-2xl p-5 sm:p-6">
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-5">Payment Method</h2>
                                <div className="space-y-3">
                                    {paymentOptions.map(opt => (
                                        <label
                                            key={opt.id}
                                            className={`flex items-center gap-3 min-h-[60px] px-4 rounded-xl border-2 cursor-pointer transition-all select-none ${payment === opt.id
                                                ? 'border-orange-500 bg-orange-500/5'
                                                : 'border-white/10 bg-[#0d1525] hover:border-white/20'
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="payment"
                                                value={opt.id}
                                                checked={payment === opt.id}
                                                onChange={() => setPayment(opt.id)}
                                                className="w-4 h-4 accent-orange-500 flex-shrink-0"
                                            />
                                            <span className="text-xl">{opt.icon}</span>
                                            <div className="flex-1">
                                                <span className="font-semibold text-white text-sm">{opt.label}</span>
                                                {opt.sub && <p className="text-xs text-gray-500 mt-0.5">{opt.sub}</p>}
                                            </div>
                                            {payment === opt.id && (
                                                <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            )}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Trust & Privacy */}
                            <div className="flex items-start gap-3 px-2 text-xs text-gray-600">
                                <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <span>Your data is encrypted and secure. By placing your order you agree to our{' '}
                                    <Link href="/privacy" className="text-orange-500 hover:underline">privacy policy</Link>.
                                </span>
                            </div>

                            {error && (
                                <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl px-5 py-4 flex items-center gap-3">
                                    <span className="text-xl">⚠</span> {error}
                                </div>
                            )}

                            {/* Desktop CTA */}
                            <button
                                onClick={handlePlaceOrder}
                                disabled={loading}
                                className="hidden sm:flex w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 hover:from-orange-600 hover:via-red-600 hover:to-pink-700 text-white font-black uppercase tracking-widest py-4 rounded-xl text-sm transition-all disabled:opacity-50 items-center justify-center gap-3 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40"
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Processing…
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        Place Order — €{parseFloat(price).toFixed(2)}
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Right — Order Summary Sidebar */}
                        <div className="space-y-4">
                            <div className="bg-[#111827] border border-white/10 rounded-2xl overflow-hidden sticky top-24">
                                {/* Header */}
                                <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 border-b border-white/10 px-5 py-4">
                                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Order Summary</h2>
                                    <p className="text-xl font-black text-white">€{parseFloat(price).toFixed(2)}</p>
                                </div>

                                {/* Plan Details */}
                                <div className="px-5 py-4 border-b border-white/5">
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <p className="font-bold text-white text-sm">{planName}</p>
                                            <p className="text-xs text-gray-500 mt-1">{devices} Device{devices > 1 ? 's' : ''} · Unlimited Content</p>
                                        </div>
                                        <span className="text-orange-400 font-bold text-sm whitespace-nowrap">€{parseFloat(price).toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Totals */}
                                <div className="px-5 py-4 space-y-2 text-sm">
                                    <div className="flex justify-between text-gray-500">
                                        <span>Subtotal</span>
                                        <span>€{parseFloat(price).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-500">
                                        <span>Setup fee</span>
                                        <span className="text-green-400">Free</span>
                                    </div>
                                    <div className="h-px bg-white/5" />
                                    <div className="flex justify-between font-black text-white text-base">
                                        <span>Total</span>
                                        <span>€{parseFloat(price).toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* What's included */}
                                <div className="px-5 pb-5">
                                    <p className="text-xs text-gray-600 uppercase tracking-widest font-bold mb-3">What&apos;s included</p>
                                    <ul className="space-y-2">
                                        {[
                                            '37,000+ Live Channels',
                                            '96,000+ Movies & Series',
                                            '4K Ultra HD Streaming',
                                            '24/7 Technical Support',
                                            'All Devices Supported',
                                        ].map(item => (
                                            <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                                                <svg className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Trust badges */}
                                <div className="border-t border-white/5 px-6 py-4 flex items-center justify-center gap-4 text-xs text-gray-600">
                                    <span className="flex items-center gap-1">🔒 Secure</span>
                                    <span className="flex items-center gap-1">⚡ Instant</span>
                                    <span className="flex items-center gap-1">✅ Guaranteed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Sticky CTA — mobile only */}
            <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0d1525]/95 backdrop-blur-md border-t border-white/10 px-4 py-3">
                <button
                    onClick={handlePlaceOrder}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white font-black uppercase tracking-widest py-4 rounded-xl text-sm transition disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30"
                >
                    {loading ? (
                        <>
                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Processing…
                        </>
                    ) : (
                        <>🔒 Place Order — €{parseFloat(price).toFixed(2)}</>
                    )}
                </button>
            </div>

            <Footer />
        </div>
    );
}

export default function CheckoutPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <CheckoutForm />
        </Suspense>
    );
}
