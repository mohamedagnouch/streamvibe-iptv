export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-orange-500 to-red-600 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
          <div className="flex-1 text-white">
            <div className="text-7xl font-bold mb-4 opacity-90">1</div>
            <h3 className="text-3xl font-bold mb-4">Place your order</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Choose your preferred subscription plan and complete your order. 
              We accept multiple payment methods for your convenience. 
              Your satisfaction is guaranteed with our 30-day money-back promise.
            </p>
            <div className="flex gap-3 flex-wrap">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">
                💳 Credit Card
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">
                💰 PayPal
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">
                ₿ Crypto
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">
                🏦 Bank Transfer
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto transform hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=400&fit=crop"
                alt="Place your order"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Order Confirmed</div>
                    <div className="text-xs text-gray-500">Processing payment...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-20">
          <div className="flex-1 text-white">
            <div className="text-7xl font-bold mb-4 opacity-90">2</div>
            <h3 className="text-3xl font-bold mb-4">Get your account</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Receive your login credentials instantly via email. 
              Your account will be activated immediately and ready to use. 
              Access thousands of channels and VOD content right away with no waiting time.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
              <div className="text-sm font-medium mb-2">📧 Check your email for:</div>
              <ul className="space-y-1 text-sm">
                <li>• Username & Password</li>
                <li>• Server URL</li>
                <li>• Setup Instructions</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto transform hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=500&h=400&fit=crop"
                alt="Get your account"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-xs text-gray-500 mb-2">ACCOUNT DETAILS</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Username:</span>
                    <span className="font-mono text-sm font-semibold">user****@mail.com</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Status:</span>
                    <span className="text-green-600 font-semibold text-sm">✓ Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-white">
            <div className="text-7xl font-bold mb-4 opacity-90">3</div>
            <h3 className="text-3xl font-bold mb-4">Enjoy watching</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Start streaming immediately on any device. 
              Watch your favorite movies, sports, series, and live TV in stunning quality. 
              Experience buffer-free streaming with our high-performance servers.
            </p>
            <div className="flex gap-3 flex-wrap">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">
                📱 Mobile
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">
                💻 Desktop
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">
                📺 Smart TV
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">
                🎮 Fire Stick
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto transform hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=400&fit=crop"
                alt="Enjoy watching"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Now Streaming</div>
                    <div className="text-xs text-gray-500">4K Ultra HD Quality</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                      ▶
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
    </section>
  );
}
