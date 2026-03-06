'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Step = 'information' | 'payment' | 'success';
type PaymentMethod = 'paypal' | 'card' | 'transfer';

function CheckoutForm() {
    const params = useSearchParams();
    const planName = params.get('plan') ?? '';
    const price = params.get('price') ?? '0';
    const devices = parseInt(params.get('devices') ?? '1', 10);

    const [step, setStep] = useState<Step>('information');
    const [email, setEmail] = useState('');
    const [payment, setPayment] = useState<PaymentMethod>('paypal');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [orderId, setOrderId] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (v: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

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
            setStep('success');
        } catch (e: unknown) {
            setError(e instanceof Error ? e.message : 'Failed to place order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const paymentOptions: { id: PaymentMethod; label: string; sub: string; icon: string }[] = [
        { id: 'paypal', label: 'PayPal', sub: 'Fast and Secure Payment', icon: '🅿️' },
        { id: 'card', label: 'Credit / Debit Card', sub: '', icon: '💳' },
        { id: 'transfer', label: 'Bank Transfer', sub: '', icon: '🏦' },
    ];

    // ── Success Screen ─────────────────────────────────────────────────────
    if (step === 'success') {
        return (
            <div className="min-h-screen bg-[#f0f3f8] flex flex-col">
                <Header />
                <main className="flex-1 flex items-center justify-center px-4 py-16">
                    <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full text-center">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-black text-gray-900 mb-2">Order Confirmed! 🎉</h2>
                        <p className="text-gray-500 mb-6">A confirmation has been sent to <strong>{email}</strong></p>
                        <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Order ID</p>
                            <p className="text-2xl font-black text-orange-500 tracking-widest">{orderId}</p>
                        </div>
                        <div className="text-left space-y-2 mb-8 text-sm text-gray-600">
                            <div className="flex justify-between py-2 border-b border-gray-100">
                                <span>Plan</span><span className="font-semibold text-gray-900">{planName}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                                <span>Devices</span><span className="font-semibold text-gray-900">{devices}</span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span>Total</span><span className="font-bold text-gray-900">€{parseFloat(price).toFixed(2)}</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 mb-6">Our team will deliver your credentials within <strong className="text-gray-700">2–4 hours</strong>.</p>
                        <Link
                            href="/"
                            className="inline-block w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition"
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
        <div className="min-h-screen bg-[#f0f3f8] flex flex-col">
            <Header />
            <main className="flex-1 px-4 py-10">
                <div className="max-w-2xl mx-auto">

                    {/* Steps indicator */}
                    <div className="flex items-center justify-center gap-4 mb-10 text-sm font-semibold">
                        {(['Cart', 'Information', 'Finish'] as const).map((label, i) => {
                            const active = (i === 0 && false) || (i === 1 && step === 'information') || (i === 2 && step === 'payment');
                            const done = i === 0;
                            return (
                                <div key={label} className="flex items-center gap-2">
                                    <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs ${active ? 'border-orange-500 bg-orange-500 text-white' : done ? 'border-gray-300 text-gray-400' : 'border-gray-300 text-gray-400'}`}>
                                        {done ? '✓' : i + 1}
                                    </span>
                                    <span className={active ? 'text-orange-500' : 'text-gray-400'}>{label}</span>
                                    {i < 2 && <span className="text-gray-300 w-8 h-px bg-gray-300 block" />}
                                </div>
                            );
                        })}
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        {/* Customer Information */}
                        <section className="mb-8">
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-4">Customer Information</h3>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={e => { setEmail(e.target.value); setEmailError(''); }}
                                className={`w-full border ${emailError ? 'border-red-400' : 'border-gray-200'} rounded-lg px-4 py-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition`}
                            />
                            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                        </section>

                        {/* Order Summary */}
                        <section className="mb-8">
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-4">Your Order</h3>
                            <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="text-left px-4 py-3 text-gray-500 font-semibold">Product</th>
                                        <th className="text-right px-4 py-3 text-gray-500 font-semibold">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-gray-100">
                                        <td className="px-4 py-3 text-gray-700">
                                            {planName} · {devices} Device{devices > 1 ? 's' : ''}
                                            <span className="ml-2 text-gray-400">× 1</span>
                                        </td>
                                        <td className="px-4 py-3 text-right font-semibold text-gray-800">€ {parseFloat(price).toFixed(2)}</td>
                                    </tr>
                                    <tr className="border-t border-gray-100 bg-gray-50">
                                        <td className="px-4 py-3 text-gray-500">Subtotal</td>
                                        <td className="px-4 py-3 text-right text-gray-700">€ {parseFloat(price).toFixed(2)}</td>
                                    </tr>
                                    <tr className="border-t border-gray-100">
                                        <td className="px-4 py-3 font-bold text-gray-900">Total</td>
                                        <td className="px-4 py-3 text-right font-black text-gray-900">€ {parseFloat(price).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        {/* Payment Method */}
                        <section className="mb-8">
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-4">Payment</h3>
                            <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
                                {paymentOptions.map(opt => (
                                    <label key={opt.id} className={`flex items-start gap-3 px-5 py-4 cursor-pointer transition ${payment === opt.id ? 'bg-orange-50' : 'hover:bg-gray-50'}`}>
                                        <input
                                            type="radio"
                                            name="payment"
                                            value={opt.id}
                                            checked={payment === opt.id}
                                            onChange={() => setPayment(opt.id)}
                                            className="mt-1 accent-orange-500"
                                        />
                                        <div>
                                            <span className="font-semibold text-gray-800">{opt.icon} {opt.label}</span>
                                            {opt.sub && <p className="text-xs text-green-600 font-medium mt-0.5">{opt.sub}</p>}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </section>

                        {/* Privacy note */}
                        <p className="text-xs text-gray-400 mb-6">
                            Your personal data will be used to process your order and support your experience. See our{' '}
                            <Link href="/privacy" className="text-orange-500 underline">privacy policy</Link>.
                        </p>

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3 mb-4">
                                {error}
                            </div>
                        )}

                        {/* Place Order button */}
                        <button
                            onClick={handlePlaceOrder}
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-black uppercase tracking-widest py-4 rounded-xl text-base transition disabled:opacity-60 flex items-center justify-center gap-2"
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
                                `Place Order  €${parseFloat(price).toFixed(2)}`
                            )}
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default function CheckoutPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#f0f3f8] flex items-center justify-center text-gray-400">Loading…</div>}>
            <CheckoutForm />
        </Suspense>
    );
}
