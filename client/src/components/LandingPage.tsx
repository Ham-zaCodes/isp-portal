import type { Page } from "../App";

interface Props {
  setPage: (p: Page) => void;
}

const packages = [
  {
    name: "Basic",
    speed: "20 Mbps",
    price: "Rs. 1,500",
    data: "Unlimited",
    features: ["Email & browsing", "YouTube HD", "WhatsApp calling"],
    popular: false,
    color: "border-gray-200",
    badge: "",
  },
  {
    name: "Standard",
    speed: "50 Mbps",
    price: "Rs. 2,500",
    data: "Unlimited",
    features: ["All Basic features", "Netflix HD", "Video conferencing", "Online gaming"],
    popular: true,
    color: "border-green-500",
    badge: "Most Popular",
  },
  {
    name: "Premium",
    speed: "100 Mbps",
    price: "Rs. 4,000",
    data: "Unlimited",
    features: ["All Standard features", "4K streaming", "Smart home devices", "Priority support"],
    popular: false,
    color: "border-gray-200",
    badge: "",
  },
  {
    name: "Business",
    speed: "200 Mbps",
    price: "Rs. 7,500",
    data: "Unlimited",
    features: ["All Premium features", "Static IP", "SLA guarantee", "Dedicated support"],
    popular: false,
    color: "border-gray-200",
    badge: "",
  },
];

const stats = [
  { label: "Active Customers", value: "2,400+" },
  { label: "Cities Covered", value: "12" },
  { label: "Uptime Guarantee", value: "99.9%" },
  { label: "Support Response", value: "< 2 hrs" },
];

const features = [
  {
    icon: "🔐",
    title: "Secure Account",
    desc: "JWT-based login with role-based access for customers, staff, and owners.",
  },
  {
    icon: "🌐",
    title: "Connection Tracking",
    desc: "Request new internet connection and track installation progress in real time.",
  },
  {
    icon: "📦",
    title: "Flexible Packages",
    desc: "Choose from Basic to Business plans. Upgrade or downgrade anytime.",
  },
  {
    icon: "💳",
    title: "Easy Payments",
    desc: "Pay via EasyPaisa, JazzCash or bank transfer. Upload proof online.",
  },
  {
    icon: "🎫",
    title: "Complaint System",
    desc: "Submit and track complaints with a unique ID. No more lost phone calls.",
  },
  {
    icon: "📊",
    title: "Owner Dashboard",
    desc: "See all customers, payments, and complaints from one powerful dashboard.",
  },
];

export default function LandingPage({ setPage }: Props) {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div>
              <span className="font-bold text-gray-900 text-lg leading-none block">NetPortal</span>
              <span className="text-xs text-gray-400">ISP Management System</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-green-700 transition-colors">Features</a>
            <a href="#packages" className="hover:text-green-700 transition-colors">Packages</a>
            <a href="#about" className="hover:text-green-700 transition-colors">About</a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage("login")}
              className="px-4 py-2 text-sm font-medium text-green-700 border border-green-700 rounded-lg hover:bg-green-50 transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => setPage("register")}
              className="px-4 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 transition-colors"
            >
              Sign Up Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-green-300 blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block bg-green-600/50 border border-green-400/40 text-green-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            Cloud-Based ISP Portal
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Manage Your ISP Business
            <br />
            <span className="text-green-300">The Smart Way</span>
          </h1>
          <p className="text-green-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            A complete cloud portal for Internet Service Providers. Customers sign up online, track connections, pay bills, and submit complaints — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setPage("register")}
              className="px-8 py-4 bg-white text-green-800 font-bold rounded-xl hover:bg-green-50 transition-all shadow-lg text-base"
            >
              Get Started — It is Free
            </button>
            <button
              onClick={() => setPage("login")}
              className="px-8 py-4 border-2 border-green-300/50 text-white font-semibold rounded-xl hover:bg-green-700/50 transition-all text-base"
            >
              I Already Have Account
            </button>
          </div>

          {/* Demo role buttons */}
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <span className="text-green-300 text-sm font-medium self-center">Demo as:</span>
            <button
              onClick={() => setPage("customer")}
              className="px-4 py-2 bg-green-600/40 border border-green-400/30 text-green-100 text-sm rounded-lg hover:bg-green-600/60 transition-colors"
            >
              Customer Dashboard
            </button>
            <button
              onClick={() => setPage("owner")}
              className="px-4 py-2 bg-green-600/40 border border-green-400/30 text-green-100 text-sm rounded-lg hover:bg-green-600/60 transition-colors"
            >
              Owner Dashboard
            </button>
            <button
              onClick={() => setPage("employee")}
              className="px-4 py-2 bg-green-600/40 border border-green-400/30 text-green-100 text-sm rounded-lg hover:bg-green-600/60 transition-colors"
            >
              Employee Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-800 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-white">{s.value}</div>
              <div className="text-green-300 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              5 powerful modules to run your ISP without paper, Excel, or WhatsApp chaos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Internet Packages</h2>
            <p className="text-gray-500 text-lg">Affordable plans for every need. No hidden charges.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border-2 p-7 flex flex-col ${pkg.color} ${pkg.popular ? "bg-green-50 shadow-lg" : "bg-white"}`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-2">{pkg.name}</div>
                <div className="text-3xl font-extrabold text-gray-900 mb-1">{pkg.speed}</div>
                <div className="text-2xl font-bold text-green-700 mb-1">{pkg.price}<span className="text-gray-400 text-sm font-normal">/mo</span></div>
                <div className="text-xs text-gray-400 mb-6">{pkg.data} data</div>
                <ul className="space-y-2 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setPage("register")}
                  className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-colors ${pkg.popular ? "bg-green-700 text-white hover:bg-green-800" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-500 text-lg">Get connected in 5 simple steps</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-start">
            {[
              { step: "1", title: "Sign Up", desc: "Create your free account with name, phone, and address.", icon: "📝" },
              { step: "2", title: "Choose Package", desc: "Pick the internet plan that fits your needs and budget.", icon: "📦" },
              { step: "3", title: "Request Connection", desc: "Fill in your location and preferred installation date.", icon: "🔌" },
              { step: "4", title: "Track Progress", desc: "Watch your installation status from site survey to active.", icon: "📍" },
              { step: "5", title: "Pay Online", desc: "Get monthly bills by email. Pay via EasyPaisa or JazzCash.", icon: "💳" },
            ].map((item, i) => (
              <div key={item.step} className="flex-1 flex flex-col items-center text-center relative">
                <div className="w-14 h-14 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-md">
                  {item.icon}
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-7 left-[60%] right-0 h-0.5 bg-green-200" />
                )}
                <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">Step {item.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-green-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Go Digital?</h2>
        <p className="text-green-200 mb-8 text-lg">
          Join hundreds of ISPs who stopped using paper and Excel.
        </p>
        <button
          onClick={() => setPage("register")}
          className="px-10 py-4 bg-white text-green-800 font-bold rounded-xl hover:bg-green-50 transition-all text-base shadow-lg"
        >
          Create Free Account
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-white font-bold">NetPortal</span>
          </div>
          <div className="text-sm text-center">
            Final Year Project — Federal Urdu University of Arts, Science &amp; Technology, Islamabad
          </div>
          <div className="text-sm">
            By <span className="text-green-400">Shahmir &amp; Ali Hamza</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
