import { useState } from "react";
import type { Page } from "../App";

interface Props {
  setPage: (p: Page) => void;
}

type Tab = "overview" | "tasks" | "complaints";

export default function EmployeeDashboard({ setPage }: Props) {
  const [tab, setTab] = useState<Tab>("overview");
  const [updatedTask, setUpdatedTask] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-orange-700 text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center font-bold text-sm shadow">N</div>
          <div>
            <div className="font-bold text-sm">NetPortal</div>
            <div className="text-orange-200 text-xs">Employee Portal</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-semibold">Usman Tahir</div>
            <div className="text-orange-200 text-xs">Employee — Field Staff</div>
          </div>
          <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center font-bold text-sm">UT</div>
          <button onClick={() => setPage("landing")} className="ml-2 text-xs text-orange-200 hover:text-white transition-colors">Logout</button>
        </div>
      </header>

      {/* Tabs */}
      <nav className="bg-white border-b border-gray-200 px-6 overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {(
            [
              { id: "overview", label: "Overview", icon: "🏠" },
              { id: "tasks", label: "Installation Tasks", icon: "🔧" },
              { id: "complaints", label: "My Complaints", icon: "🎫" },
            ] as { id: Tab; label: string; icon: string }[]
          ).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-5 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                tab === t.id ? "border-orange-600 text-orange-700" : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <span>{t.icon}</span> {t.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="flex-1 px-6 py-8 max-w-5xl mx-auto w-full">

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Welcome, Usman Tahir</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Pending Tasks", value: "4", sub: "Installation jobs", icon: "⏳", color: "bg-orange-50 border-orange-200" },
                { label: "Completed Today", value: "2", sub: "Installations done", icon: "✅", color: "bg-green-50 border-green-200" },
                { label: "Open Complaints", value: "3", sub: "Assigned to me", icon: "🎫", color: "bg-blue-50 border-blue-200" },
                { label: "This Month", value: "18", sub: "Total jobs done", icon: "📊", color: "bg-purple-50 border-purple-200" },
              ].map((c) => (
                <div key={c.label} className={`rounded-2xl border p-5 ${c.color}`}>
                  <div className="text-2xl mb-2">{c.icon}</div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{c.label}</div>
                  <div className="text-2xl font-bold text-gray-900 mt-1">{c.value}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{c.sub}</div>
                </div>
              ))}
            </div>

            {/* Today's schedule */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-4">Today&apos;s Schedule — 29 Aug 2026</h2>
              <div className="space-y-3">
                {[
                  { time: "9:00 AM", task: "Site Survey — G-9/1 Hamid Raza", status: "Done", color: "bg-green-100 text-green-700" },
                  { time: "11:30 AM", task: "Cable Install — F-11/3 Nadia Fatima", status: "Done", color: "bg-green-100 text-green-700" },
                  { time: "2:00 PM", task: "Router Config — Saddar Asif Khan", status: "In Progress", color: "bg-orange-100 text-orange-700" },
                  { time: "4:30 PM", task: "Complaint visit — G-10/3 Muhammad Ali", status: "Pending", color: "bg-gray-100 text-gray-600" },
                ].map((s) => (
                  <div key={s.time} className="flex items-center gap-4 p-3 rounded-xl bg-gray-50">
                    <div className="text-xs font-mono font-bold text-gray-500 w-16 flex-shrink-0">{s.time}</div>
                    <div className="flex-1 text-sm text-gray-700">{s.task}</div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.color}`}>{s.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* INSTALLATION TASKS */}
        {tab === "tasks" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Installation Tasks</h1>

            <div className="space-y-4">
              {[
                {
                  id: "INS-2026-053",
                  customer: "Asif Khan",
                  area: "Saddar, Rawalpindi",
                  address: "House 12, St 3, Saddar",
                  landmark: "Near Saddar Post Office",
                  pkg: "Premium — 100 Mbps",
                  stage: "Router Configuration",
                  stageIdx: 3,
                  date: "29 Aug 2026",
                  status: "In Progress",
                },
                {
                  id: "INS-2026-052",
                  customer: "Nadia Fatima",
                  area: "F-11/3, Islamabad",
                  address: "House 78, St 12, F-11/3",
                  landmark: "Near F-11 Markaz",
                  pkg: "Basic — 20 Mbps",
                  stage: "Cable Installation",
                  stageIdx: 2,
                  date: "28 Aug 2026",
                  status: "Assigned",
                },
                {
                  id: "INS-2026-051",
                  customer: "Hamid Raza",
                  area: "G-9/1, Islamabad",
                  address: "House 33, St 5, G-9/1",
                  landmark: "Near G-9 Market",
                  pkg: "Standard — 50 Mbps",
                  stage: "Site Survey",
                  stageIdx: 1,
                  date: "27 Aug 2026",
                  status: "Assigned",
                },
              ].map((task) => (
                <div key={task.id} className="bg-white rounded-2xl border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-orange-700">{task.id}</span>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${task.status === "In Progress" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>
                          {task.status}
                        </span>
                      </div>
                      <div className="font-bold text-gray-900 text-lg mt-0.5">{task.customer}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-700 font-semibold">{task.pkg}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{task.date}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div><span className="text-gray-400 text-xs">Area</span><div className="font-medium text-gray-700">{task.area}</div></div>
                    <div><span className="text-gray-400 text-xs">Address</span><div className="font-medium text-gray-700">{task.address}</div></div>
                    <div><span className="text-gray-400 text-xs">Landmark</span><div className="font-medium text-gray-700">{task.landmark}</div></div>
                    <div><span className="text-gray-400 text-xs">Current Stage</span><div className="font-semibold text-orange-700">{task.stage}</div></div>
                  </div>

                  {/* Stage progress */}
                  <div className="flex items-center gap-1 mb-5">
                    {["Request Received", "Site Survey", "Cable Install", "Router Config", "Active"].map((s, i) => (
                      <div key={s} className="flex-1 flex flex-col items-center gap-1">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                          i < task.stageIdx ? "bg-green-500 text-white" :
                          i === task.stageIdx ? "bg-orange-500 text-white" :
                          "bg-gray-200 text-gray-400"
                        }`}>
                          {i < task.stageIdx ? "✓" : i + 1}
                        </div>
                        <span className="text-xs text-gray-400 text-center leading-tight hidden md:block" style={{ fontSize: "10px" }}>{s}</span>
                      </div>
                    ))}
                  </div>

                  {/* Update status */}
                  {updatedTask === task.id ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-sm text-green-700 font-semibold">
                      Status updated successfully!
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <select className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-orange-400 bg-white">
                        <option>Update to next stage...</option>
                        <option>Site Survey Scheduled</option>
                        <option>Cable Installation</option>
                        <option>Router Configuration</option>
                        <option>Connection Active</option>
                      </select>
                      <button
                        onClick={() => setUpdatedTask(task.id)}
                        className="px-5 py-2.5 bg-orange-600 text-white text-sm font-semibold rounded-xl hover:bg-orange-700 transition-colors"
                      >
                        Update
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COMPLAINTS */}
        {tab === "complaints" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Assigned Complaints</h1>
            <div className="space-y-4">
              {[
                {
                  id: "CMP-014",
                  customer: "Muhammad Ali",
                  subject: "Internet keeps dropping every few hours",
                  category: "Disconnecting",
                  area: "G-10/3, Islamabad",
                  status: "In Progress",
                  submitted: "25 Aug 2026",
                },
                {
                  id: "CMP-013",
                  customer: "Zara Malik",
                  subject: "No internet connection since yesterday",
                  category: "No Internet",
                  area: "I-8/4, Islamabad",
                  status: "Assigned",
                  submitted: "27 Aug 2026",
                },
                {
                  id: "CMP-010",
                  customer: "Bilal Ahmad",
                  subject: "Router not working properly",
                  category: "Router Issue",
                  area: "Bahria Town, RWP",
                  status: "Assigned",
                  submitted: "20 Aug 2026",
                },
              ].map((c) => (
                <div key={c.id} className="bg-white rounded-2xl border border-gray-100 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="font-mono text-xs font-bold text-orange-700">{c.id}</span>
                      <div className="font-bold text-gray-900 text-lg mt-0.5">{c.subject}</div>
                      <div className="text-sm text-gray-500 mt-0.5">{c.customer} · {c.area}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${c.status === "In Progress" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>
                      {c.status}
                    </span>
                  </div>

                  <div className="flex gap-4 mb-4 text-sm">
                    <div className="bg-gray-50 rounded-xl px-3 py-2">
                      <span className="text-xs text-gray-400 block">Category</span>
                      <span className="font-semibold text-gray-700">{c.category}</span>
                    </div>
                    <div className="bg-gray-50 rounded-xl px-3 py-2">
                      <span className="text-xs text-gray-400 block">Submitted</span>
                      <span className="font-semibold text-gray-700">{c.submitted}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Response to Customer</label>
                    <textarea
                      rows={2}
                      placeholder="Type your response or update..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all resize-none"
                    />
                  </div>

                  <div className="flex gap-3">
                    <select className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-orange-400 bg-white">
                      <option>Update status...</option>
                      <option>In Progress</option>
                      <option>Resolved</option>
                      <option>Need more info from customer</option>
                    </select>
                    <button className="px-5 py-2.5 bg-orange-600 text-white text-sm font-semibold rounded-xl hover:bg-orange-700 transition-colors">
                      Send Update
                    </button>
                    <button className="px-5 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-700 transition-colors">
                      Mark Resolved
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
