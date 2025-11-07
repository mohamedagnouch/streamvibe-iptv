'use client';

import { useState } from 'react';
import { X, CreditCard, Bitcoin, DollarSign, Building2, Lock, CheckCircle } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: string;
  devices: number;
}

type PaymentMethod = 'card' | 'crypto' | 'cashapp' | 'bank';

export default function PaymentModal({ isOpen, onClose, planName, price, devices }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('card');
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    country: 'Morocco',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Close modal after success
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{planName}</h2>
            <p className="text-sm text-gray-600">{devices} Device{devices > 1 ? 's' : ''} - 1 Month</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Success Message */}
        {isSuccess && (
          <div className="absolute inset-0 bg-white flex items-center justify-center z-20">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
              <p className="text-gray-600">Your subscription has been activated.</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="johnappleseed@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <div className="space-y-3">
              {/* Card */}
              <button
                type="button"
                onClick={() => setSelectedMethod('card')}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                  selectedMethod === 'card'
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedMethod === 'card' ? 'border-orange-500' : 'border-gray-300'
                  }`}>
                    {selectedMethod === 'card' && (
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                    )}
                  </div>
                  <CreditCard className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Carte</span>
                </div>
              </button>

              {/* Crypto */}
              <button
                type="button"
                onClick={() => setSelectedMethod('crypto')}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                  selectedMethod === 'crypto'
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedMethod === 'crypto' ? 'border-orange-500' : 'border-gray-300'
                  }`}>
                    {selectedMethod === 'crypto' && (
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                    )}
                  </div>
                  <Bitcoin className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Crypto</span>
                </div>
              </button>

              {/* Cash App */}
              <button
                type="button"
                onClick={() => setSelectedMethod('cashapp')}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                  selectedMethod === 'cashapp'
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedMethod === 'cashapp' ? 'border-orange-500' : 'border-gray-300'
                  }`}>
                    {selectedMethod === 'cashapp' && (
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                    )}
                  </div>
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-900">Cash App</span>
                </div>
              </button>

              {/* Bank Account */}
              <button
                type="button"
                onClick={() => setSelectedMethod('bank')}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                  selectedMethod === 'bank'
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedMethod === 'bank' ? 'border-orange-500' : 'border-gray-300'
                  }`}>
                    {selectedMethod === 'bank' && (
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                    )}
                  </div>
                  <Building2 className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Compte bancaire américain</span>
                </div>
              </button>
            </div>
          </div>

          {/* Card Details (only show if card is selected) */}
          {selectedMethod === 'card' && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Numéro de carte
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 1234 1234 1234"
                    maxLength={19}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date d'expiration
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM / YY"
                    maxLength={7}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Code de sécurité
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="CVC"
                    maxLength={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </>
          )}

          {/* Crypto Instructions */}
          {selectedMethod === 'crypto' && (
            <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900 mb-2">
                <strong>Cryptocurrency Payment</strong>
              </p>
              <p className="text-sm text-blue-800">
                After clicking "Pay Now", you'll receive wallet addresses for Bitcoin, Ethereum, and USDT. Complete the payment and your subscription will be activated automatically.
              </p>
            </div>
          )}

          {/* Cash App Instructions */}
          {selectedMethod === 'cashapp' && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-900 mb-2">
                <strong>Cash App Payment</strong>
              </p>
              <p className="text-sm text-green-800">
                Send payment to: <strong>$StreamVibe</strong><br />
                Include your email in the note. Activation within 5 minutes.
              </p>
            </div>
          )}

          {/* Bank Instructions */}
          {selectedMethod === 'bank' && (
            <div className="mb-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-sm text-purple-900 mb-2">
                <strong>Bank Transfer</strong>
              </p>
              <p className="text-sm text-purple-800">
                Bank details will be provided after clicking "Pay Now". Activation within 24 hours after payment confirmation.
              </p>
            </div>
          )}

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Smith"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          {/* Country */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pays
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            >
              <option value="Morocco">Morocco</option>
              <option value="USA">United States</option>
              <option value="Canada">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Spain">Spain</option>
              <option value="Italy">Italy</option>
              <option value="UAE">United Arab Emirates</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
            </select>
          </div>

          {/* Security Notice */}
          <div className="mb-6 flex items-start gap-2 text-sm text-gray-600">
            <Lock className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
            <p>Your payment information is encrypted and secure. We never store your card details.</p>
          </div>

          {/* Total */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold text-gray-900">{price}</span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-gray-200">
              <span className="font-bold text-gray-900">Total</span>
              <span className="font-bold text-2xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
                {price}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isProcessing}
            className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </span>
            ) : (
              'Pay Now'
            )}
          </button>

          {/* Cancel */}
          <button
            type="button"
            onClick={onClose}
            className="w-full mt-3 text-gray-600 hover:text-gray-900 py-2 font-medium transition-colors"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
