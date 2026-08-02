export default function Checkout() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-green-600 px-6 py-6 text-white">
          <h1 className="text-3xl font-bold">M-Pesa Checkout</h1>

          <p className="mt-2 text-green-100 text-sm">
            Complete your payment securely.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-700 px-3 py-1 text-xs">
            <span>🔒</span>
            <span>Secure Checkout</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Payment Method */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Payment Method
            </label>

            <div className="border border-green-300 bg-green-50 rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-800">M-Pesa STK Push</p>

                <p className="text-sm text-gray-500">
                  Pay directly from your phone.
                </p>
              </div>

              <span className="text-green-600 font-bold">✓</span>
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="254712345678"
              className="w-full rounded-lg border border-gray-300 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-green-500
              focus:border-green-500 transition"
            />
          </div>

          {/* Amount */}
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Amount (KES)
            </label>

            <input
              id="amount"
              type="number"
              placeholder="100"
              className="w-full rounded-lg border border-gray-300 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-green-500
              focus:border-green-500 transition"
            />
          </div>

          {/* Pay Button */}
          <button
            className="w-full rounded-lg bg-green-600 py-3 text-white
            font-semibold hover:bg-green-700 transition
            focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Pay with M-Pesa
          </button>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500">
            Payments are securely processed using the M-Pesa payment network.
          </p>
        </div>
      </div>
    </div>
  );
}
