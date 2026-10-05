import { useState } from "react";
import type { Page } from "../App";

interface Props {
  setPage: (p: Page) => void;
}

type Tab = "overview" | "customers" | "connections" | "packages" | "payments" | "complaints";

export default function OwnerDashboard({ setPage }: Props) {
  const [tab, setTab] = useState<Tab>("overview");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center font-bold text-sm shadow">N</div>
          <div>
            <div className="font-bold text-sm">NetPortal</div>
            <div className="text-gray-400 text-xs">Owner Admin Panel</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-semibold">ISP Owner</div>
            <div className="text-gray-400 text-xs">Full Access</div>
          </div>
          <div className="w-9 h-9 bg-green-600 rounded-full flex items-center justify-center font-bold text-sm">IO</div>
          <button onClick={() => setPage("landing")} className="ml-2 text-xs text-gray-400 hover:text-white transition-colors">Logout</button>
        </div>
      </header>

      {/* Tabs */}
      <nav className="bg-white border-b border-gray-200 px-6 overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {(
            [
              { id: "overview", label: "Dashboard", icon: "📊" },
              { id: "customers", label: "Customers", icon: "👥" },
              { id: "connections", label: "Connections", icon: "🔌" },
              { id: "packages", label: "Packages", icon: "📦" },
              { id: "payments", label: "Payments", icon: "💳" },
              { id: "complaints", label: "Complaints", icon: "🎫" },
            ] as { id: Tab; label: string; icon: string }[]
          ).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-5 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                tab === t.id ? "border-gray-900 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <span>{t.icon}</span> {t.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="flex-1 px-6 py-8 max-w-7xl mx-auto w-full">

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Owner Dashboard</h1>

            {/* KPI cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Total Customers", value: "248", change: "+12 this month", icon: "👥", color: "bg-blue-50 border-blue-200 text-blue-700" },
                { label: "Active Connections", value: "231", change: "17 pending", icon: "🔌", color: "bg-green-50 border-green-200 text-green-700" },
                { label: "Monthly Revenue", value: "Rs. 5.8L", change: "+8% vs last month", icon: "💰", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
                { label: "Open Complaints", value: "14", change: "3 urgent", icon: "🎫", color: "bg-orange-50 border-orange-200 text-orange-700" },
              ].map((c) => (
                <div key={c.label} className={`rounded-2xl border p-5 ${c.color}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wide opacity-70">{c.label}</span>
                    <span className="text-xl">{c.icon}</span>
                  </div>
                  <div className="text-2xl font-extrabold text-gray-900">{c.value}</div>
                  <div className="text-xs mt-1 opacity-70">{c.change}</div>
                </div>
              ))}
            </div>

            {/* Revenue by package */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="font-bold text-gray-900 mb-5">Customers by Package</h2>
                <div className="space-y-3">
                  {[
                    { name: "Standard 50Mbps", count: 98, total: 248, color: "bg-green-500" },
                    { name: "Basic 20Mbps", count: 72, total: 248, color: "bg-blue-400" },
                    { name: "Premium 100Mbps", count: 55, total: 248, color: "bg-purple-500" },
                    { name: "Business 200Mbps", count: 23, total: 248, color: "bg-orange-500" },
                  ].map((p) => (
                    <div key={p.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700 font-medium">{p.name}</span>
                        <span className="text-gray-500 font-semibold">{p.count}</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${p.color}`} style={{ width: `${(p.count / p.total) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="font-bold text-gray-900 mb-5">Pending Actions</h2>
                <div className="space-y-3">
                  {[
                    { label: "Connection requests to approve", count: 8, color: "bg-blue-100 text-blue-700" },
                    { label: "Payments to verify", count: 23, color: "bg-orange-100 text-orange-700" },
                    { label: "Complaints unassigned", count: 5, color: "bg-red-100 text-red-700" },
                    { label: "Package change requests", count: 3, color: "bg-purple-100 text-purple-700" },
                  ].map((a) => (
                    <div key={a.label} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                      <span className="text-sm text-gray-700">{a.label}</span>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${a.color}`}>{a.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Monthly revenue table */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-4">Monthly Revenue Report</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    <tr>
                      <th className="pb-3 text-left">Month</th>
                      <th className="pb-3 text-right">Bills Sent</th>
                      <th className="pb-3 text-right">Collected</th>
                      <th className="pb-3 text-right">Pending</th>
                      <th className="pb-3 text-right">Efficiency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { month: "September 2026", sent: 248, collected: "Rs. 4.2L", pending: "Rs. 1.6L", eff: "72%" },
                      { month: "August 2026", sent: 241, collected: "Rs. 5.1L", pending: "Rs. 0.4L", eff: "93%" },
                      { month: "July 2026", sent: 238, collected: "Rs. 5.4L", pending: "Rs. 0.1L", eff: "98%" },
                      { month: "June 2026", sent: 230, collected: "Rs. 5.0L", pending: "Rs. 0.2L", eff: "96%" },
                    ].map((r) => (
                      <tr key={r.month} className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 text-gray-700 font-medium">{r.month}</td>
                        <td className="py-3 text-right text-gray-600">{r.sent}</td>
                        <td className="py-3 text-right text-green-700 font-semibold">{r.collected}</td>
                        <td className="py-3 text-right text-orange-600">{r.pending}</td>
                        <td className="py-3 text-right">
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${parseInt(r.eff) >= 90 ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                            {r.eff}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* CUSTOMERS */}
        {tab === "customers" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">All Customers</h1>
              <div className="flex gap-3">
                <input placeholder="Search by name or phone..." className="px-4 py-2 border border-gray-200 rounded-xl text-sm outline-none focus:border-gray-400 w-64" />
                <button className="px-4 py-2 text-sm font-semibold bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors">Export</button>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    <tr>
                      <th className="px-6 py-3 text-left">Customer</th>
                      <th className="px-6 py-3 text-left">Phone</th>
                      <th className="px-6 py-3 text-left">Area</th>
                      <th className="px-6 py-3 text-left">Package</th>
                      <th className="px-6 py-3 text-left">Status</th>
                      <th className="px-6 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { name: "Muhammad Ali", phone: "0300-1234567", area: "G-10/3, Islamabad", pkg: "Standard", status: "Active" },
                      { name: "Ahmed Hassan", phone: "0333-9876543", area: "F-7/2, Islamabad", pkg: "Premium", status: "Active" },
                      { name: "Sara Khan", phone: "0311-5555555", area: "Saddar, Rawalpindi", pkg: "Basic", status: "Active" },
                      { name: "Bilal Ahmad", phone: "0321-4444444", area: "Bahria Town, RWP", pkg: "Business", status: "Active" },
                      { name: "Zara Malik", phone: "0344-3333333", area: "I-8/4, Islamabad", pkg: "Standard", status: "Suspended" },
                    ].map((c) => (
                      <tr key={c.name} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                              {c.name.charAt(0)}
                            </div>
                            <span className="font-medium text-gray-900">{c.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-500">{c.phone}</td>
                        <td className="px-6 py-4 text-gray-500">{c.area}</td>
                        <td className="px-6 py-4 text-gray-700 font-medium">{c.pkg}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${c.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                            {c.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-xs text-gray-500 hover:text-gray-900 font-semibold">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* CONNECTIONS */}
        {tab === "connections" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Connection Requests</h1>

            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Pending Review", count: 8, color: "bg-orange-50 border-orange-200 text-orange-700" },
                { label: "Approved", count: 231, color: "bg-green-50 border-green-200 text-green-700" },
                { label: "In Installation", count: 12, color: "bg-blue-50 border-blue-200 text-blue-700" },
                { label: "Rejected", count: 7, color: "bg-red-50 border-red-200 text-red-700" },
              ].map((s) => (
                <div key={s.label} className={`rounded-2xl border p-5 ${s.color}`}>
                  <div className="text-xs font-semibold uppercase tracking-wide opacity-70">{s.label}</div>
                  <div className="text-2xl font-extrabold text-gray-900 mt-2">{s.count}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 font-bold text-gray-900">Pending Approval</div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    <tr>
                      <th className="px-6 py-3 text-left">Request ID</th>
                      <th className="px-6 py-3 text-left">Customer</th>
                      <th className="px-6 py-3 text-left">Area</th>
                      <th className="px-6 py-3 text-left">Package</th>
                      <th className="px-6 py-3 text-left">Date</th>
                      <th className="px-6 py-3 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { id: "REQ-2026-051", name: "Hamid Raza", area: "G-9/1, Islamabad", pkg: "Standard", date: "28 Aug 2026" },
                      { id: "REQ-2026-052", name: "Nadia Fatima", area: "F-11/3, Islamabad", pkg: "Basic", date: "28 Aug 2026" },
                      { id: "REQ-2026-053", name: "Asif Khan", area: "Saddar, RWP", pkg: "Premium", date: "29 Aug 2026" },
                    ].map((r) => (
                      <tr key={r.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-mono text-xs font-semibold text-blue-700">{r.id}</td>
                        <td className="px-6 py-4 font-medium text-gray-900">{r.name}</td>
                        <td className="px-6 py-4 text-gray-500">{r.area}</td>
                        <td className="px-6 py-4 text-gray-700">{r.pkg}</td>
                        <td className="px-6 py-4 text-gray-500">{r.date}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button className="px-3 py-1.5 bg-green-600 text-white text-xs font-semibold rounded-lg hover:bg-green-700 transition-colors">Approve</button>
                            <button className="px-3 py-1.5 bg-red-100 text-red-700 text-xs font-semibold rounded-lg hover:bg-red-200 transition-colors">Reject</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* PACKAGES */}
        {tab === "packages" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Package Management</h1>
              <button className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors">
                + Add New Package
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { name: "Basic", speed: "20 Mbps", price: "Rs. 1,500", install: "Rs. 2,000", data: "Unlimited", customers: 72, status: "Active" },
                { name: "Standard", speed: "50 Mbps", price: "Rs. 2,500", install: "Rs. 2,000", data: "Unlimited", customers: 98, status: "Active" },
                { name: "Premium", speed: "100 Mbps", price: "Rs. 4,000", install: "Rs. 2,500", data: "Unlimited", customers: 55, status: "Active" },
                { name: "Business", speed: "200 Mbps", price: "Rs. 7,500", install: "Rs. 3,000", data: "Unlimited", customers: 23, status: "Active" },
              ].map((pkg) => (
                <div key={pkg.name} className="bg-white rounded-2xl border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{pkg.name} Plan</div>
                      <div className="text-green-700 font-semibold">{pkg.speed} — {pkg.price}/mo</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${pkg.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                      {pkg.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                      <div className="text-xs text-gray-400">Install Fee</div>
                      <div className="font-bold text-gray-700 text-sm mt-0.5">{pkg.install}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                      <div className="text-xs text-gray-400">Data</div>
                      <div className="font-bold text-gray-700 text-sm mt-0.5">{pkg.data}</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3 text-center">
                      <div className="text-xs text-gray-400">Customers</div>
                      <div className="font-bold text-green-700 text-sm mt-0.5">{pkg.customers}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-200 transition-colors">Edit</button>
                    <button className="flex-1 py-2 bg-orange-100 text-orange-700 text-xs font-semibold rounded-lg hover:bg-orange-200 transition-colors">Deactivate</button>
                    <button className="flex-1 py-2 bg-red-100 text-red-700 text-xs font-semibold rounded-lg hover:bg-red-200 transition-colors">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAYMENTS */}
        {tab === "payments" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Payment Verification</h1>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Pending Verification", count: 23, color: "bg-orange-50 border-orange-200 text-orange-700" },
                { label: "Verified This Month", count: 178, color: "bg-green-50 border-green-200 text-green-700" },
                { label: "Rejected", count: 4, color: "bg-red-50 border-red-200 text-red-700" },
              ].map((s) => (
                <div key={s.label} className={`rounded-2xl border p-5 ${s.color}`}>
                  <div className="text-xs font-semibold uppercase tracking-wide opacity-70">{s.label}</div>
                  <div className="text-2xl font-extrabold text-gray-900 mt-2">{s.count}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 font-bold text-gray-900">Pending Verifications</div>
              <div className="divide-y divide-gray-50">
                {[
                  { cust: "Muhammad Ali", inv: "INV-2026-008", amount: "Rs. 2,500", method: "EasyPaisa", submitted: "1 Sep 2026" },
                  { cust: "Ahmed Hassan", inv: "INV-2026-011", amount: "Rs. 4,000", method: "JazzCash", submitted: "2 Sep 2026" },
                  { cust: "Sara Khan", inv: "INV-2026-014", amount: "Rs. 1,500", method: "Bank Transfer", submitted: "2 Sep 2026" },
                ].map((p) => (
                  <div key={p.inv} className="px-6 py-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                        {p.cust.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{p.cust}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{p.inv} · {p.method} · {p.submitted}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="font-bold text-gray-900">{p.amount}</div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-lg hover:bg-blue-200 transition-colors">View Proof</button>
                        <button className="px-3 py-1.5 bg-green-600 text-white text-xs font-semibold rounded-lg hover:bg-green-700 transition-colors">Approve</button>
                        <button className="px-3 py-1.5 bg-red-100 text-red-700 text-xs font-semibold rounded-lg hover:bg-red-200 transition-colors">Reject</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* COMPLAINTS */}
        {tab === "complaints" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Complaint Management</h1>

            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Pending", count: 5, color: "bg-gray-50 border-gray-200 text-gray-700" },
                { label: "Assigned", count: 6, color: "bg-blue-50 border-blue-200 text-blue-700" },
                { label: "In Progress", count: 3, color: "bg-orange-50 border-orange-200 text-orange-700" },
                { label: "Resolved", count: 47, color: "bg-green-50 border-green-200 text-green-700" },
              ].map((s) => (
                <div key={s.label} className={`rounded-2xl border p-5 ${s.color}`}>
                  <div className="text-xs font-semibold uppercase tracking-wide opacity-70">{s.label}</div>
                  <div className="text-2xl font-extrabold text-gray-900 mt-2">{s.count}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    <tr>
                      <th className="px-6 py-3 text-left">ID</th>
                      <th className="px-6 py-3 text-left">Customer</th>
                      <th className="px-6 py-3 text-left">Subject</th>
                      <th className="px-6 py-3 text-left">Category</th>
                      <th className="px-6 py-3 text-left">Status</th>
                      <th className="px-6 py-3 text-left">Assigned To</th>
                      <th className="px-6 py-3 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { id: "CMP-014", cust: "Muhammad Ali", subj: "Internet dropping", cat: "Disconnecting", status: "In Progress", assigned: "Usman T." },
                      { id: "CMP-013", cust: "Zara Malik", subj: "No connection", cat: "No Internet", status: "Assigned", assigned: "Farhan A." },
                      { id: "CMP-012", cust: "Hamid Raza", subj: "Slow speed", cat: "Speed Issue", status: "Pending", assigned: "—" },
                      { id: "CMP-011", cust: "Nadia F.", subj: "Wrong bill", cat: "Billing", status: "Pending", assigned: "—" },
                    ].map((c) => (
                      <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-mono text-xs font-semibold text-orange-700">{c.id}</td>
                        <td className="px-6 py-4 font-medium text-gray-900">{c.cust}</td>
                        <td className="px-6 py-4 text-gray-600">{c.subj}</td>
                        <td className="px-6 py-4 text-gray-500">{c.cat}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            c.status === "Pending" ? "bg-gray-100 text-gray-600" :
                            c.status === "Assigned" ? "bg-blue-100 text-blue-700" :
                            "bg-orange-100 text-orange-700"
                          }`}>{c.status}</span>
                        </td>
                        <td className="px-6 py-4 text-gray-500 text-sm">{c.assigned}</td>
                        <td className="px-6 py-4">
                          <button className="px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg hover:bg-gray-700 transition-colors">
                            {c.status === "Pending" ? "Assign" : "View"}
                          </button>
                        </td>
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
