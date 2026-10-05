import { useState } from "react";
import type { Page } from "../App";

interface Props {
  setPage: (p: Page) => void;
}

type Tab = "overview" | "connection" | "packages" | "bills" | "complaints";

export default function CustomerDashboard({ setPage }: Props) {
  const [tab, setTab] = useState<Tab>("overview");
  const [showComplaintForm, setShowComplaintForm] = useState(false);
  const [complaintSubmitted, setComplaintSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top bar */}
      <header className="bg-green-800 text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center font-bold text-sm shadow">N</div>
          <div>
            <div className="font-bold text-sm">NetPortal</div>
            <div className="text-green-300 text-xs">Customer Portal</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-semibold">Muhammad Ali</div>
            <div className="text-green-300 text-xs">Active — Standard Plan</div>
          </div>
          <div className="w-9 h-9 bg-green-600 rounded-full flex items-center justify-center font-bold text-sm">MA</div>
          <button onClick={() => setPage("landing")} className="ml-2 text-xs text-green-300 hover:text-white transition-colors">Logout</button>
        </div>
      </header>

      {/* Nav Tabs */}
      <nav className="bg-white border-b border-gray-200 px-6 overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {(
            [
              { id: "overview", label: "Overview", icon: "🏠" },
              { id: "connection", label: "My Connection", icon: "🔌" },
              { id: "packages", label: "Packages", icon: "📦" },
              { id: "bills", label: "My Bills", icon: "💳" },
              { id: "complaints", label: "Complaints", icon: "🎫" },
            ] as { id: Tab; label: string; icon: string }[]
          ).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-5 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                tab === t.id
                  ? "border-green-600 text-green-700"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <span>{t.icon}</span> {t.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="flex-1 px-6 py-8 max-w-6xl mx-auto w-full">
        {/* OVERVIEW */}
        {tab === "overview" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, Muhammad Ali</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Current Plan", value: "Standard", sub: "50 Mbps", color: "bg-green-50 border-green-200", icon: "📦" },
                { label: "Next Bill", value: "Rs. 2,500", sub: "Due: 15 Sep 2026", color: "bg-blue-50 border-blue-200", icon: "💳" },
                { label: "Open Complaints", value: "1", sub: "CMP-003 In Progress", color: "bg-orange-50 border-orange-200", icon: "🎫" },
                { label: "Connection", value: "Active", sub: "Since: Jan 2025", color: "bg-emerald-50 border-emerald-200", icon: "🔌" },
              ].map((c) => (
                <div key={c.label} className={`rounded-2xl border p-5 ${c.color}`}>
                  <div className="text-2xl mb-2">{c.icon}</div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{c.label}</div>
                  <div className="text-xl font-bold text-gray-900 mt-1">{c.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{c.sub}</div>
                </div>
              ))}
            </div>

            {/* Recent activity */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {[
                  { msg: "Bill INV-2026-008 generated for September", time: "1 Sep 2026", type: "bill", icon: "💳" },
                  { msg: "Complaint CMP-003 assigned to Usman (Employee)", time: "28 Aug 2026", type: "complaint", icon: "🔧" },
                  { msg: "Payment INV-2026-007 verified — Rs. 2,500", time: "15 Aug 2026", type: "payment", icon: "✅" },
                  { msg: "Package changed from Basic to Standard", time: "1 Jul 2026", type: "package", icon: "📦" },
                ].map((a, i) => (
                  <div key={i} className="flex items-start gap-3 py-3 border-b border-gray-50 last:border-0">
                    <span className="text-xl">{a.icon}</span>
                    <div className="flex-1">
                      <div className="text-sm text-gray-700">{a.msg}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{a.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CONNECTION */}
        {tab === "connection" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">My Connection</h1>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Connection ID</div>
                  <div className="text-xl font-bold text-gray-900 mt-1">CON-2025-0042</div>
                </div>
                <span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold">Active</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-6">
                {[
                  { label: "Package", value: "Standard — 50 Mbps" },
                  { label: "Installation Date", value: "15 Jan 2025" },
                  { label: "Billing Start", value: "1 Feb 2025" },
                  { label: "Area", value: "Islamabad, G-10/3" },
                  { label: "Address", value: "House 45, St 7, G-10/3" },
                  { label: "Status", value: "Connection Active" },
                ].map((d) => (
                  <div key={d.label}>
                    <div className="text-xs text-gray-400 font-medium">{d.label}</div>
                    <div className="text-sm font-semibold text-gray-800 mt-0.5">{d.value}</div>
                  </div>
                ))}
              </div>

              {/* Progress tracker */}
              <div className="border-t border-gray-100 pt-5">
                <div className="text-sm font-semibold text-gray-700 mb-4">Installation Progress</div>
                <div className="flex items-center gap-2">
                  {[
                    "Request Received",
                    "Site Survey",
                    "Cable Install",
                    "Router Config",
                    "Connection Active",
                  ].map((step, i) => (
                    <div key={step} className="flex-1 flex flex-col items-center gap-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i < 5 ? "bg-green-600 text-white" : "bg-gray-200 text-gray-400"}`}>
                        ✓
                      </div>
                      <span className="text-xs text-gray-500 text-center leading-tight hidden md:block">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-4">Request Package Change</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Basic — 20 Mbps — Rs. 1,500", "Standard — 50 Mbps — Rs. 2,500", "Premium — 100 Mbps — Rs. 4,000", "Business — 200 Mbps — Rs. 7,500"].map((p, i) => (
                  <label key={p} className={`p-3 rounded-xl border-2 cursor-pointer text-xs font-medium text-center transition-colors ${i === 1 ? "border-green-500 bg-green-50 text-green-700" : "border-gray-200 text-gray-600 hover:border-green-300"}`}>
                    <input type="radio" name="plan" className="sr-only" defaultChecked={i === 1} />
                    {p.split(" — ").map((part, j) => (
                      <div key={j} className={j === 0 ? "font-bold text-sm" : j === 2 ? "text-green-700 font-bold mt-0.5" : "text-gray-500"}>{part}</div>
                    ))}
                    {i === 1 && <div className="mt-1 text-xs bg-green-200 text-green-800 rounded-full px-2 py-0.5">Current</div>}
                  </label>
                ))}
              </div>
              <button className="mt-4 px-6 py-2.5 bg-green-700 text-white text-sm font-semibold rounded-xl hover:bg-green-800 transition-colors">
                Submit Change Request
              </button>
            </div>
          </div>
        )}

        {/* PACKAGES */}
        {tab === "packages" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Internet Packages</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { name: "Basic", speed: "20 Mbps", price: "Rs. 1,500", install: "Rs. 2,000", data: "Unlimited", features: ["Browsing", "YouTube HD", "WhatsApp"], popular: false, current: false },
                { name: "Standard", speed: "50 Mbps", price: "Rs. 2,500", install: "Rs. 2,000", data: "Unlimited", features: ["All Basic", "Netflix HD", "Online gaming", "Video calls"], popular: true, current: true },
                { name: "Premium", speed: "100 Mbps", price: "Rs. 4,000", install: "Rs. 2,500", data: "Unlimited", features: ["All Standard", "4K streaming", "Smart home", "Priority support"], popular: false, current: false },
                { name: "Business", speed: "200 Mbps", price: "Rs. 7,500", install: "Rs. 3,000", data: "Unlimited", features: ["All Premium", "Static IP", "SLA 99.9%", "Dedicated team"], popular: false, current: false },
              ].map((pkg) => (
                <div key={pkg.name} className={`rounded-2xl border-2 p-6 flex flex-col relative ${pkg.current ? "border-green-500 bg-green-50" : "border-gray-200 bg-white"}`}>
                  {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-3 py-0.5 rounded-full">Most Popular</span>}
                  {pkg.current && <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">Current</span>}
                  <div className="font-bold text-gray-900 mb-1">{pkg.name}</div>
                  <div className="text-2xl font-extrabold text-green-700 mb-0.5">{pkg.speed}</div>
                  <div className="text-lg font-bold text-gray-900 mb-1">{pkg.price}<span className="text-gray-400 text-sm font-normal">/mo</span></div>
                  <div className="text-xs text-gray-400 mb-4">Install: {pkg.install} one-time</div>
                  <ul className="space-y-1.5 flex-1 mb-5">
                    {pkg.features.map((f) => (
                      <li key={f} className="text-xs text-gray-600 flex items-center gap-1.5">
                        <span className="text-green-500">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`py-2.5 rounded-xl text-sm font-semibold transition-colors ${pkg.current ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-green-700 text-white hover:bg-green-800"}`} disabled={pkg.current}>
                    {pkg.current ? "Current Plan" : "Select Plan"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BILLS */}
        {tab === "bills" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">My Bills</h1>

            {/* Summary */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Total Paid", value: "Rs. 17,500", color: "text-green-700", bg: "bg-green-50 border-green-200" },
                { label: "Pending", value: "Rs. 2,500", color: "text-orange-600", bg: "bg-orange-50 border-orange-200" },
                { label: "Overdue", value: "Rs. 0", color: "text-red-600", bg: "bg-red-50 border-red-200" },
              ].map((s) => (
                <div key={s.label} className={`rounded-2xl border p-5 ${s.bg}`}>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{s.label}</div>
                  <div className={`text-xl font-bold mt-1 ${s.color}`}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Bills table */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-bold text-gray-900">Invoice History</h2>
                <button className="text-xs text-green-700 font-semibold hover:underline">Export PDF</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    <tr>
                      <th className="px-6 py-3 text-left">Invoice #</th>
                      <th className="px-6 py-3 text-left">Month</th>
                      <th className="px-6 py-3 text-left">Amount</th>
                      <th className="px-6 py-3 text-left">Due Date</th>
                      <th className="px-6 py-3 text-left">Status</th>
                      <th className="px-6 py-3 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { inv: "INV-2026-008", month: "September 2026", amount: "Rs. 2,500", due: "15 Sep 2026", status: "Unpaid" },
                      { inv: "INV-2026-007", month: "August 2026", amount: "Rs. 2,500", due: "15 Aug 2026", status: "Paid" },
                      { inv: "INV-2026-006", month: "July 2026", amount: "Rs. 2,500", due: "15 Jul 2026", status: "Paid" },
                      { inv: "INV-2026-005", month: "June 2026", amount: "Rs. 2,500", due: "15 Jun 2026", status: "Paid" },
                      { inv: "INV-2026-004", month: "May 2026", amount: "Rs. 1,500", due: "15 May 2026", status: "Paid" },
                    ].map((b) => (
                      <tr key={b.inv} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-mono text-xs text-gray-600">{b.inv}</td>
                        <td className="px-6 py-4 text-gray-700">{b.month}</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">{b.amount}</td>
                        <td className="px-6 py-4 text-gray-500">{b.due}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${b.status === "Paid" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                            {b.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {b.status === "Unpaid" ? (
                            <button className="px-3 py-1.5 bg-green-700 text-white text-xs font-semibold rounded-lg hover:bg-green-800 transition-colors">
                              Pay Now
                            </button>
                          ) : (
                            <button className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                              Receipt
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pay Now panel */}
            <div className="bg-white rounded-2xl border border-green-200 p-6">
              <h2 className="font-bold text-gray-900 mb-4">Pay Invoice INV-2026-008</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[
                  { method: "EasyPaisa", icon: "📱", color: "border-green-400 bg-green-50" },
                  { method: "JazzCash", icon: "💰", color: "border-red-300 bg-red-50" },
                  { method: "Bank Transfer", icon: "🏦", color: "border-blue-300 bg-blue-50" },
                  { method: "Office Cash", icon: "🏢", color: "border-gray-300 bg-gray-50" },
                ].map((m) => (
                  <label key={m.method} className={`border-2 rounded-xl p-3 cursor-pointer flex flex-col items-center gap-1 hover:shadow-sm transition-all ${m.color}`}>
                    <input type="radio" name="method" className="sr-only" />
                    <span className="text-2xl">{m.icon}</span>
                    <span className="text-xs font-semibold text-gray-700">{m.method}</span>
                  </label>
                ))}
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center mb-4">
                <div className="text-gray-400 text-sm">Upload payment screenshot or receipt</div>
                <button className="mt-2 px-4 py-2 bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                  Choose File
                </button>
              </div>
              <button className="px-6 py-3 bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition-colors text-sm">
                Submit Payment — Rs. 2,500
              </button>
            </div>
          </div>
        )}

        {/* COMPLAINTS */}
        {tab === "complaints" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">My Complaints</h1>
              <button
                onClick={() => { setShowComplaintForm(true); setComplaintSubmitted(false); }}
                className="px-5 py-2.5 bg-green-700 text-white text-sm font-semibold rounded-xl hover:bg-green-800 transition-colors"
              >
                + New Complaint
              </button>
            </div>

            {/* New complaint form */}
            {showComplaintForm && !complaintSubmitted && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="font-bold text-gray-900 mb-5">Submit New Complaint</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                    <input placeholder="Short title of the problem" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all bg-white">
                      <option>Select category</option>
                      <option>Slow internet speed</option>
                      <option>No internet connection</option>
                      <option>Internet keeps disconnecting</option>
                      <option>Billing issue (wrong bill amount)</option>
                      <option>Router not working</option>
                      <option>Need technical help</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
                    <textarea rows={3} placeholder="Explain the problem in detail..." className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all resize-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Attachment (Optional)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center text-sm text-gray-400">
                      Upload screenshot or photo
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setComplaintSubmitted(true)} className="px-6 py-2.5 bg-green-700 text-white text-sm font-semibold rounded-xl hover:bg-green-800 transition-colors">
                      Submit Complaint
                    </button>
                    <button onClick={() => setShowComplaintForm(false)} className="px-6 py-2.5 border border-gray-200 text-gray-600 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {complaintSubmitted && (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">✅</div>
                <div>
                  <div className="font-bold text-green-800">Complaint Submitted!</div>
                  <div className="text-sm text-green-700 mt-0.5">Your complaint ID is <strong>CMP-004</strong>. We will assign it to a technician shortly.</div>
                </div>
              </div>
            )}

            {/* Complaints table */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    <tr>
                      <th className="px-6 py-3 text-left">ID</th>
                      <th className="px-6 py-3 text-left">Subject</th>
                      <th className="px-6 py-3 text-left">Category</th>
                      <th className="px-6 py-3 text-left">Submitted</th>
                      <th className="px-6 py-3 text-left">Status</th>
                      <th className="px-6 py-3 text-left">Last Update</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { id: "CMP-003", subject: "Internet keeps dropping", cat: "Disconnecting", date: "25 Aug 2026", status: "In Progress", update: "28 Aug 2026" },
                      { id: "CMP-002", subject: "Wrong bill amount", cat: "Billing Issue", date: "10 Jul 2026", status: "Resolved", update: "12 Jul 2026" },
                      { id: "CMP-001", subject: "No internet after rain", cat: "No Connection", date: "5 Mar 2026", status: "Closed", update: "7 Mar 2026" },
                    ].map((c) => (
                      <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-mono text-xs font-semibold text-green-700">{c.id}</td>
                        <td className="px-6 py-4 text-gray-700">{c.subject}</td>
                        <td className="px-6 py-4 text-gray-500">{c.cat}</td>
                        <td className="px-6 py-4 text-gray-500">{c.date}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            c.status === "Closed" ? "bg-gray-100 text-gray-600" :
                            c.status === "Resolved" ? "bg-green-100 text-green-700" :
                            "bg-orange-100 text-orange-700"
                          }`}>
                            {c.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-500">{c.update}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
