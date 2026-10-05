import { useState } from "react";
import type { Page } from "../App";

interface Props {
  setPage: (p: Page) => void;
}

export default function RegisterPage({ setPage }: Props) {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
          </div>
          <h1 className="text-white text-2xl font-bold">Create Account</h1>
          <p className="text-green-200 text-sm mt-1">Join NetPortal today</p>
        </div>

        {/* Progress steps */}
        <div className="flex items-center gap-2 mb-6 px-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 flex flex-col items-center gap-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step >= s ? "bg-white text-green-700" : "bg-green-700/50 text-green-300 border border-green-400/30"
                }`}
              >
                {step > s ? "✓" : s}
              </div>
              <span className="text-green-200 text-xs hidden sm:block">
                {s === 1 ? "Personal" : s === 2 ? "Contact" : "Package"}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {step === 1 && (
            <>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Personal Information</h2>
              <p className="text-gray-500 text-sm mb-6">Tell us about yourself</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input placeholder="Muhammad Ali" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">CNIC Number</label>
                  <input placeholder="35202-1234567-8" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input type="email" placeholder="ali@gmail.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                  <input type="password" placeholder="Min. 8 characters" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Contact & Address</h2>
              <p className="text-gray-500 text-sm mb-6">Where do you want the connection?</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                  <input placeholder="0300-1234567" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">City / Area</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all bg-white">
                    <option>Select your city</option>
                    <option>Islamabad — G-10</option>
                    <option>Islamabad — F-7</option>
                    <option>Rawalpindi — Saddar</option>
                    <option>Rawalpindi — Bahria Town</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Address</label>
                  <input placeholder="House #, Street, Sector" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Landmark (Optional)</label>
                  <input placeholder="Near mosque, school..." className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Choose Your Package</h2>
              <p className="text-gray-500 text-sm mb-6">You can change this later</p>
              <div className="space-y-3">
                {[
                  { name: "Basic", speed: "20 Mbps", price: "Rs. 1,500/mo" },
                  { name: "Standard", speed: "50 Mbps", price: "Rs. 2,500/mo", popular: true },
                  { name: "Premium", speed: "100 Mbps", price: "Rs. 4,000/mo" },
                  { name: "Business", speed: "200 Mbps", price: "Rs. 7,500/mo" },
                ].map((pkg) => (
                  <label key={pkg.name} className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer hover:border-green-400 transition-colors ${pkg.popular ? "border-green-500 bg-green-50" : "border-gray-200"}`}>
                    <div className="flex items-center gap-3">
                      <input type="radio" name="package" className="accent-green-600" defaultChecked={pkg.popular} />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                          {pkg.name}
                          {pkg.popular && <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">Popular</span>}
                        </div>
                        <div className="text-xs text-gray-500">{pkg.speed} — Unlimited Data</div>
                      </div>
                    </div>
                    <div className="text-green-700 font-bold text-sm">{pkg.price}</div>
                  </label>
                ))}
              </div>
            </>
          )}

          <div className="flex gap-3 mt-6">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-sm"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="flex-1 py-3 bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition-colors text-sm"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={() => setPage("customer")}
                className="flex-1 py-3 bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition-colors text-sm"
              >
                Create Account
              </button>
            )}
          </div>

          <p className="text-center text-gray-500 text-sm mt-5">
            Already have account?{" "}
            <button onClick={() => setPage("login")} className="text-green-700 font-semibold hover:underline">
              Sign in
            </button>
          </p>
        </div>

        <button onClick={() => setPage("landing")} className="mt-6 text-green-200 text-sm hover:text-white transition-colors flex items-center gap-2 mx-auto">
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
