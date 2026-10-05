import { useState } from "react";
import type { Page } from "../App";

interface Props {
  setPage: (p: Page) => void;
}

export default function LoginPage({ setPage }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"customer" | "owner" | "employee">("customer");

  const handleLogin = () => {
    setPage(role);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
          </div>
          <h1 className="text-white text-2xl font-bold">NetPortal</h1>
          <p className="text-green-200 text-sm mt-1">ISP Management System</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h2>
          <p className="text-gray-500 text-sm mb-8">Sign in to your account to continue</p>

          {/* Role selector */}
          <div className="flex gap-2 mb-6 bg-gray-100 p-1.5 rounded-xl">
            {(["customer", "owner", "employee"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${role === r ? "bg-white text-green-700 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <input type="checkbox" className="rounded" />
                Remember me
              </label>
              <button className="text-green-700 font-medium hover:underline">Forgot password?</button>
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="w-full mt-6 py-3.5 bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition-colors shadow-md text-sm"
          >
            Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>

          <p className="text-center text-gray-500 text-sm mt-6">
            New customer?{" "}
            <button onClick={() => setPage("register")} className="text-green-700 font-semibold hover:underline">
              Create account
            </button>
          </p>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-center text-xs text-gray-400 mb-3">Quick Demo Access</p>
            <div className="flex gap-2">
              <button onClick={() => setPage("customer")} className="flex-1 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold hover:bg-blue-100 transition-colors">
                Customer
              </button>
              <button onClick={() => setPage("owner")} className="flex-1 py-2 bg-green-50 text-green-700 rounded-lg text-xs font-semibold hover:bg-green-100 transition-colors">
                Owner
              </button>
              <button onClick={() => setPage("employee")} className="flex-1 py-2 bg-orange-50 text-orange-700 rounded-lg text-xs font-semibold hover:bg-orange-100 transition-colors">
                Employee
              </button>
            </div>
          </div>
        </div>

        <button onClick={() => setPage("landing")} className="mt-6 text-green-200 text-sm hover:text-white transition-colors flex items-center gap-2 mx-auto">
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
