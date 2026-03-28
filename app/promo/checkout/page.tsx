'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Server, CheckCircle, Shield, Zap } from 'lucide-react';

type PaymentMethod = 'paypal' | 'card' | 'transfer';

function PromoHeader() {
    return (
        <header className="w-full px-6 py-6 border-b border-white/5 bg-[#0a0e1a]/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                <Link href="/promo" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-tr from-orange-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                        <Server className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-black tracking-wider uppercase text-white">Cloud<span className="text-orange-500">Stream</span></span>
                </Link>
                <div className="flex items-center gap-2 text-xs font-bold text-green-400 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Systems Operational
                </div>
            </div>
        </header>
    );
}

function PromoFooter() {
    return (
        <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm mt-auto">
            <p>© {new Date().getFullYear()} CloudStream Infrastructure. Secure Checkout.</p>
        </footer>
    );
}

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
                    // Send generic plan name to the backend, the backend still works the same
                    planName: `Cloud Subscription: ${planName}`,
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
            setError(e instanceof Error ? e.message : 'Failed to deploy server. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const paymentOptions: { id: PaymentMethod; label: string; sub: string; icon: string }[] = [
        { id: 'paypal', label: 'PayPal', sub: 'Fast and Secure Payment', icon: '🅿️' },
    ];

    // ── Success Screen ─────────────────────────────────────────────────────
    if (success) {
        return (
            <div className="min-h-screen bg-[#0a0e1a] flex flex-col font-sans">
                <PromoHeader />
                <main className="flex-1 flex items-center justify-center px-4 py-16">
                    <div className="bg-[#111827] border border-white/10 rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center">
                        <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-green-400" />
                        </div>
                        <h2 className="text-3xl font-black text-white mb-2">Deployment Confirmed! 🎉</h2>
                        <p className="text-gray-400 mb-8">Access details have been sent to <strong className="text-white">{email}</strong></p>
                        <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 border border-orange-500/20 rounded-2xl p-5 mb-8">
                            <p className="text-xs text-orange-400 uppercase tracking-widest font-bold mb-2">Deployment ID</p>
                            <p className="text-3xl font-black text-white tracking-[0.2em]">{orderId}</p>
                        </div>
                        <div className="text-left space-y-0 mb-8 text-sm rounded-2xl overflow-hidden border border-white/10">
                            {[
                                ['Server Plan', planName || 'Custom Deployment'],
                                ['Nodes', `${devices} Virtual Node${devices > 1 ? 's' : ''}`],
                                ['Total', `€${parseFloat(price).toFixed(2)}`],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between px-5 py-3 border-b border-white/5 last:border-0">
                                    <span className="text-gray-400">{k}</span>
                                    <span className="font-semibold text-white">{v}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mb-6">
                            ⚡ Our team will provision your infrastructure within <strong className="text-gray-300">2–4 hours</strong>.
                        </p>
                        <Link
                            href="/promo"
                            className="inline-block w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition text-center"
                        >
                            Back to Dashboard
                        </Link>
                    </div>
                </main>
                <PromoFooter />
            </div>
        );
    }

    // ── Checkout Form ──────────────────────────────────────────────────────
    return (
        <div className="min-h-screen bg-[#0a0e1a] flex flex-col font-sans">
            <PromoHeader />
            <main className="flex-1 px-4 pt-10 pb-28 sm:pb-12">
                <div className="max-w-4xl mx-auto">

                    {/* Steps */}
                    <div className="flex items-center justify-center gap-3 mb-10 text-sm font-semibold">
                        {[
                            { label: 'Configure', icon: '✓', active: false, done: true },
                            { label: 'Deployment Details', icon: '2', active: true, done: false },
                            { label: 'Provision', icon: '3', active: false, done: false },
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
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-5">Administrator Details</h2>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address <span className="text-orange-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="admin@company.com"
                                    value={email}
                                    onChange={e => { setEmail(e.target.value); setEmailError(''); }}
                                    className={`w-full bg-[#0d1525] border ${emailError ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition`}
                                />
                                {emailError && <p className="text-red-400 text-xs mt-2 flex items-center gap-1">⚠ {emailError}</p>}
                            </div>

                            {/* Payment Card */}
                            <div className="bg-[#111827] border border-white/10 rounded-2xl p-5 sm:p-6">
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-5">Billing Method</h2>
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
                                <Shield className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>End-to-end encrypted billing. By placing your order you agree to our{' '}
                                    <Link href="/privacy" className="text-orange-500 hover:underline">privacy policy</Link> and SLAs.
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
                                        Provisioning…
                                    </>
                                ) : (
                                    <>
                                        <Zap className="w-5 h-5" />
                                        Deploy Server — €{parseFloat(price).toFixed(2)}
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Right — Order Summary Sidebar */}
                        <div className="space-y-4">
                            <div className="bg-[#111827] border border-white/10 rounded-2xl overflow-hidden sticky top-24">
                                {/* Header */}
                                <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 border-b border-white/10 px-5 py-4">
                                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Deployment Summary</h2>
                                    <p className="text-xl font-black text-white">€{parseFloat(price).toFixed(2)}</p>
                                </div>

                                {/* Plan Details */}
                                <div className="px-5 py-4 border-b border-white/5">
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <p className="font-bold text-white text-sm">{planName || 'Cloud Package'}</p>
                                            <p className="text-xs text-gray-500 mt-1">{devices} Virtual Node{devices > 1 ? 's' : ''} · Global CDN</p>
                                        </div>
                                        <span className="text-orange-400 font-bold text-sm whitespace-nowrap">€{parseFloat(price).toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Totals */}
                                <div className="px-5 py-4 space-y-2 text-sm">
                                    <div className="flex justify-between text-gray-500">
                                        <span>Infrastructure Cost</span>
                                        <span>€{parseFloat(price).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-500">
                                        <span>Provisioning fee</span>
                                        <span className="text-green-400">Free</span>
                                    </div>
                                    <div className="h-px bg-white/5" />
                                    <div className="flex justify-between font-black text-white text-base">
                                        <span>Total</span>
                                        <span>€{parseFloat(price).toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* What's included (Generic Tech Specs) */}
                                <div className="px-5 pb-5">
                                    <p className="text-xs text-gray-600 uppercase tracking-widest font-bold mb-3">Service Level</p>
                                    <ul className="space-y-2">
                                        {[
                                            '99.9% Uptime Guarantee',
                                            'DDoS Protected Network',
                                            'Unmetered Bandwidth',
                                            '24/7 Priority Support',
                                            'Fully Managed Backups',
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
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
                                    <span className="flex items-center gap-1">⚡ Fast</span>
                                    <span className="flex items-center gap-1">✅ Verified</span>
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
                            Provisioning…
                        </>
                    ) : (
                        <>🔒 Deploy Server — €{parseFloat(price).toFixed(2)}</>
                    )}
                </button>
            </div>

            <PromoFooter />
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
