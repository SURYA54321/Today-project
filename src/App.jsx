import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  ShieldCheck,
  BarChart2,
  Table as TableIcon,
  Sliders,
  Settings,
  UserCheck,
  RefreshCw,
  Mail,
  Search,
  ChevronRight,
  CheckCircle2,
  Lock,
  ExternalLink,
  X,
  Menu,
  Sparkles,
  ChevronDown,
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('cookie-policy'); // 'cookie-policy' or 'terms-of-service'

  // Cookie preference state with persistence
  const [cookiePreferences, setCookiePreferences] = useState(() => {
    const defaults = {
      necessary: true,
      analytics: true,
      marketing: false,
    };

    if (typeof window === 'undefined') return defaults;

    try {
      const saved = window.localStorage.getItem('techjays-cookie-consent');
      return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
    } catch {
      return defaults;
    }
  });

  const tocItems = [
    { id: 'introduction', label: 'Introduction', icon: BookOpen },
    { id: 'jump-to', label: 'Jump to Section', icon: Sparkles },
    { id: 'our-use', label: 'Our Use of Cookies', icon: ShieldCheck },
    { id: 'analytics', label: 'Analytics & Cookies', icon: BarChart2 },
    { id: 'cookie-details', label: 'Cookie Details Inventory', icon: TableIcon },
    { id: 'customise', label: 'Customise Cookies', icon: Sliders },
    { id: 'manual-control', label: 'How to Control Cookies', icon: Settings },
    { id: 'your-rights', label: 'Your Privacy Rights', icon: UserCheck },
    { id: 'review-update-delete', label: 'Review, Update, Delete', icon: RefreshCw },
    { id: 'contact', label: 'Contact Us', icon: Mail },
  ];

  // Intersection Observer / Scroll Listener for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const item of tocItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleSavePreferences = () => {
    window.localStorage.setItem('techjays-cookie-consent', JSON.stringify(cookiePreferences));
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FD] text-[#191A42] font-sans antialiased selection:bg-[#6872FF]/20 selection:text-[#191A42]">

      {/* OUTER WRAPPER CONTAINER WITH MARGIN & PADDING MATCHING DESIGN */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8"> */}

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

        {/* TOP FLOATING CARD MAIN APPLICATION CONTAINER */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

          {/* TOP HERO BANNER HEADER */}
          <div className="relative bg-[#191A42] overflow-hidden">

            {/* Laptop Background Image Overlay with Gradient Tint */}
            <div
              className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 transform scale-105 transition-transform duration-1000"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop')`
              }}
            />
            {/* Gradient Overlay for primary color harmony */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#191A42] via-[#191A42]/95 to-[#6872FF]/40" />

            {/* TOP NAVIGATION BAR */}

            {/* TOP NAVIGATION BAR */}
            <header className="fixed top-0 left-0 right-0 z-[60] h-[72px] flex items-center justify-between gap-4 bg-[#191A42]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8">
              {/* Techjays Logo */}
              <a
                href="/"
                className="flex shrink-0 items-center no-underline"
              >
                <span className="w-10 h-10 rounded-xl bg-[#6872FF] flex items-center justify-center text-white font-black text-xl">
                  Z
                </span>
                <span className="ml-3 text-2xl font-black tracking-tight text-white">
                  Techjays
                </span>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
                <a href="/services" className="px-4 py-6 text-sm text-white/95 hover:text-[#6872FF] transition-colors whitespace-nowrap">
                  Capabilities
                </a>

                <button
                  type="button"
                  className="px-4 py-6 text-sm text-white/95 hover:text-[#6872FF] flex items-center gap-1 whitespace-nowrap"
                >
                  Industries
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                <a href="/how-it-works" className="px-4 py-6 text-sm text-white/95 hover:text-[#6872FF] transition-colors whitespace-nowrap">
                  Where to Start
                </a>

                <a href="/insights" className="px-4 py-6 text-sm text-white/95 hover:text-[#6872FF] transition-colors whitespace-nowrap">
                  Insights
                </a>

                <a href="/careers" className="px-4 py-6 text-sm text-white/95 hover:text-[#6872FF] transition-colors whitespace-nowrap">
                  Careers
                </a>
              </nav>

              {/* Right Navigation */}
              <div className="hidden lg:flex items-center shrink-0">
                <div className="w-px h-5 bg-white/20 mx-2" />

                <a href="/about" className="px-4 py-6 text-sm text-white/95 hover:text-[#6872FF] whitespace-nowrap">
                  About
                </a>

                <a
                  href="mailto:hello@techjays.com"
                  className="ml-2 mr-1 px-5 py-2 rounded-full bg-[#6872FF] hover:bg-[#545ee0] text-white text-sm font-medium transition-colors whitespace-nowrap"
                >
                  Book a Call <span className="ml-1">→</span>
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation"
                aria-expanded={mobileMenuOpen}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10"
              >
                {mobileMenuOpen ? (
                  <X className="w-[22px] h-[22px] text-white" />
                ) : (
                  <Menu className="w-[22px] h-[22px] text-white" />
                )}
              </button>

              {/* Mobile Navigation */}
              {mobileMenuOpen && (
                <div className="absolute top-[72px] left-0 right-0 bg-[#191A42] border-t border-white/10 p-4 flex flex-col gap-1 lg:hidden">
                  <a href="/services" className="px-3 py-3 text-white hover:bg-white/10 rounded-lg">
                    Capabilities
                  </a>
                  <button type="button" className="text-left px-3 py-3 text-white hover:bg-white/10 rounded-lg">
                    Industries
                  </button>
                  <a href="/how-it-works" className="px-3 py-3 text-white hover:bg-white/10 rounded-lg">
                    Where to Start
                  </a>
                  <a href="/insights" className="px-3 py-3 text-white hover:bg-white/10 rounded-lg">
                    Insights
                  </a>
                  <a href="/careers" className="px-3 py-3 text-white hover:bg-white/10 rounded-lg">
                    Careers
                  </a>
                  <a href="/about" className="px-3 py-3 text-white hover:bg-white/10 rounded-lg">
                    About
                  </a>
                  <a href="mailto:hello@techjays.com" className="px-3 py-3 text-white bg-[#6872FF] rounded-lg text-center">
                    Book a Call →
                  </a>
                </div>
              )}
            </header>


            {/* HERO BANNER TITLE & SUBTITLE */}

            {/* HERO BANNER TITLE & SUBTITLE */}
            <div className="relative z-10 px-6 py-16 sm:py-20 text-center max-w-4xl mx-auto">

              {/* HERO TITLE - MOVED UP */}
              <h1
                style={{ color: '#FFFFFF' }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
              >
                {activeTab === 'cookie-policy'
                  ? 'Cookie Policy'
                  : 'Terms of Service'}
              </h1>

              {/* HERO DESCRIPTION - MOVED UP */}

              <div className="w-full flex justify-center mt-4">
                <p className="text-sm sm:text-base text-gray-300 font-medium max-w-2xl w-full leading-relaxed !text-center">
                  {activeTab === 'cookie-policy'
                    ? 'Understanding Your Privacy Rights, Data Collection & Cookie Responsibilities'
                    : 'Understanding Your Rights and Legal Responsibilities When Using Our Services'}
                </p>
              </div>



              {/* DOCUMENT TYPE SWITCHER - MOVED DOWN */}
              <div className="inline-flex p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mt-8">
                <button
                  type="button"
                  onClick={() => setActiveTab('cookie-policy')}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${activeTab === 'cookie-policy'
                      ? 'bg-[#6872FF] text-white shadow-md'
                      : 'text-gray-300 hover:text-white'
                    }`}
                >
                  Cookie Policy
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('terms-of-service')}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${activeTab === 'terms-of-service'
                      ? 'bg-[#6872FF] text-white shadow-md'
                      : 'text-gray-300 hover:text-white'
                    }`}
                >
                  Terms of Service
                </button>
              </div>

            </div>

          </div>

          {/* MAIN TWO-COLUMN BODY CONTENT AREA */}
          <div className="px-6 sm:px-10 py-10 lg:py-14 bg-[#F8F9FD]">

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 gap-8 items-start justify-items-center">


              {/* RIGHT CONTENT AREA - DOCUMENTATION CONTENT */}
              <main className="lg:col-span-8 xl:col-span-9 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 lg:p-12 space-y-12">

                {/* SECTION 1: INTRODUCTION */}
                <section id="introduction" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center space-x-3 text-[#6872FF]">
                    <div className="p-2 bg-[#6872FF]/10 rounded-lg">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#6872FF]">Section 01</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191A42]">Introduction</h2>

                  <div className="text-gray-600 leading-relaxed space-y-4 text-sm sm:text-base">
                    <p>
                      Techjays Inc. (“Techjays,” “we,” “us,” or “our”) uses cookies (small text files placed on your device) and similar technologies, including browser local storage, to operate our website at{' '}
                      <a href="https://www.techjays.com" target="_blank" rel="noreferrer" className="text-[#6872FF] hover:underline font-semibold">
                        www.techjays.com
                      </a>{' '}
                      and to help us collect data. The text in a cookie often consists of a string of numbers and letters that uniquely identifies your device, but it can contain other information as well.
                    </p>
                    <p>
                      This Cookie Policy explains what these technologies are, why we use them, and the choices you have. It should be read alongside our{' '}
                      <a href="#privacy" className="text-[#6872FF] hover:underline font-semibold">
                        Privacy Notice
                      </a>
                      . Where applicable, this Cookie Policy also applies to the processing of personal information by Iderize Technology Solutions Private Limited, an affiliated entity of Techjays Inc., in connection with the Services.
                    </p>
                    <div className="p-4 rounded-xl bg-[#F8F9FD] border-l-4 border-[#6872FF] text-xs sm:text-sm text-[#191A42] font-medium leading-relaxed">
                      Because we work with clients and visitors in the European Union and United Kingdom, the United States, and India, this policy is written to align with the EU/UK General Data Protection Regulation (GDPR), the California Consumer Privacy Act as amended by the CPRA (CCPA/CPRA), and India’s Digital Personal Data Protection Act, 2023 (DPDP Act).
                    </div>
                  </div>
                </section>

                {/* SECTION 2: JUMP TO QUICK LINKS */}
                <section id="jump-to" className="scroll-mt-28 p-6 bg-[#F8F9FD] rounded-2xl border border-gray-200/80">
                  <h3 className="text-sm font-bold text-[#191A42] mb-3 flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-[#6872FF]" />
                    <span>Jump to Section</span>
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                    {tocItems.filter(item => item.id !== 'jump-to').map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className="text-[#6872FF] hover:text-[#191A42] hover:underline font-semibold flex items-center space-x-1.5 transition-colors"
                        >
                          <span className="text-gray-400">•</span>
                          <span>{item.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* SECTION 3: OUR USE OF COOKIES */}
                <section id="our-use" className="scroll-mt-28 space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-3 text-[#6872FF]">
                    <div className="p-2 bg-[#6872FF]/10 rounded-lg">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#6872FF]">Section 02</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191A42]">Our Use of Cookies and Similar Technologies</h2>
                  <p className="text-gray-600 text-sm sm:text-base">Techjays uses cookies and similar technologies for the following purposes:</p>

                  <div className="grid grid-cols-1 gap-3.5 text-xs sm:text-sm">
                    <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#6872FF]/30 transition-all">
                      <strong className="text-[#191A42] block mb-1">• Storing your preferences and settings.</strong>
                      <p className="text-gray-600">Settings that enable our website to operate correctly, and your cookie preferences, are stored on your device so that we do not have to ask you again on every visit.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#6872FF]/30 transition-all">
                      <strong className="text-[#191A42] block mb-1">• Security and abuse prevention.</strong>
                      <p className="text-gray-600">We use a third-party service (Cloudflare Turnstile) on our contact forms to detect and prevent automated abuse and spam submissions.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#6872FF]/30 transition-all">
                      <strong className="text-[#191A42] block mb-1">• Analytics and performance.</strong>
                      <p className="text-gray-600">We measure how our website performs and how visitors move through it, so we can improve it. Our hosting provider’s tools do this without cookies and without storing any identifier for you. We also use Google Analytics (GA4) and Google Tag Manager to deliver measurement tags; neither is loaded unless you consent to both Analytics and Marketing categories.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#6872FF]/30 transition-all">
                      <strong className="text-[#191A42] block mb-1">• Marketing and advertising.</strong>
                      <p className="text-gray-600">Once you allow this category (together with Analytics), tags delivered through Google Tag Manager may set cookies for LinkedIn, Meta, Microsoft Advertising, and Factors.ai.</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pt-2">
                    Where a cookie or similar technology is not strictly necessary, we ask for your consent before setting it, and you can withdraw or change your consent at any time (see <button onClick={() => scrollToSection('customise')} className="text-[#6872FF] hover:underline font-semibold">Customise Cookies</button>). Withdrawing consent does not affect the lawfulness of any processing carried out before you withdrew it.
                  </p>
                </section>

                {/* SECTION 4: ANALYTICS */}
                <section id="analytics" className="scroll-mt-28 space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-3 text-[#6872FF]">
                    <div className="p-2 bg-[#6872FF]/10 rounded-lg">
                      <BarChart2 className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#6872FF]">Section 03</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191A42]">Does Techjays Use Cookies for Analytics?</h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    We do. Some of our analytics measurements use cookies and others do not, depending on the tool.
                  </p>

                  <div className="bg-[#F8F9FD] p-5 rounded-xl border border-gray-200/80 space-y-3">
                    <h4 className="font-bold text-[#191A42] text-sm">Hosting Provider Analytics (Cookieless)</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Web Analytics:</strong> Counts anonymised page views and traffic sources. It does not set a cookie and does not store a visitor identifier.</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Speed Insights:</strong> Measures page loading performance so we can find and fix slow pages. It does not set a cookie and does not store a visitor identifier.</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    We also use <strong>Google Analytics (GA4)</strong>, delivered through Google Tag Manager, which does set cookies on your device. Google Analytics does not run until you have allowed both the Analytics and Marketing categories in the cookie preference centre.
                  </p>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    In addition, <strong>Cloudflare Turnstile</strong> is loaded wherever one of our forms is shown in order to protect those forms from automated abuse. Turnstile does not set a cookie on our domain. Read Cloudflare’s Turnstile Privacy Addendum at{' '}
                    <a href="https://www.cloudflare.com/turnstile-privacy-policy/" target="_blank" rel="noreferrer" className="text-[#6872FF] underline inline-flex items-center space-x-1 font-semibold">
                      <span>cloudflare.com/turnstile-privacy-policy</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>.
                  </p>
                </section>

                {/* SECTION 5: COOKIE DETAILS INVENTORY WITH TABLES */}
                <section id="cookie-details" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-3 text-[#6872FF] mb-1">
                        <div className="p-2 bg-[#6872FF]/10 rounded-lg">
                          <TableIcon className="w-5 h-5" />
                        </div>
                        <span className="text-xs uppercase font-extrabold tracking-widest text-[#6872FF]">Section 04</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191A42]">Cookie Details Inventory</h2>
                    </div>

                    {/* Table Filter Search Bar */}
                    <div className="relative w-full sm:w-64">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search cookie name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#6872FF] focus:bg-white transition-all"
                      />
                      {searchQuery && (
                        <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs">
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    A cookie is a small piece of data that a website asks your browser to store on your device. Verified on September 11, 2026.
                  </p>

                  {/* TABLE 1: STRICTLY NECESSARY */}
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-[#191A42] flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#191A42]" />
                      <span>1. Strictly Necessary — No Consent Required</span>
                    </h3>
                    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#191A42] text-white">
                            <th className="p-3.5 font-bold uppercase tracking-wider">Name & Type</th>
                            <th className="p-3.5 font-bold uppercase tracking-wider">Purpose</th>
                            <th className="p-3.5 font-bold uppercase tracking-wider">Party / Domain</th>
                            <th className="p-3.5 font-bold uppercase tracking-wider">Expiry</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="p-3.5 font-mono font-semibold text-[#191A42]">
                              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[#6872FF]">techjays-cookie-consent</code>
                              <span className="block text-[10px] font-sans text-gray-500 mt-0.5">Browser local storage</span>
                            </td>
                            <td className="p-3.5 text-gray-600">Stores which cookie categories you accepted/declined and decision version number.</td>
                            <td className="p-3.5 text-gray-600 font-medium">First party — www.techjays.com</td>
                            <td className="p-3.5 text-gray-500">Persists until browser storage cleared.</td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="p-3.5 font-mono font-semibold text-[#191A42]">
                              None set
                              <span className="block text-[10px] font-sans text-gray-500 mt-0.5">Cookieless script</span>
                            </td>
                            <td className="p-3.5 text-gray-600">Cloudflare Turnstile to protect contact forms from spam and automated abuse.</td>
                            <td className="p-3.5 text-gray-600 font-medium">Third party — Cloudflare</td>
                            <td className="p-3.5 text-gray-500">N/A — No cookie set</td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="p-3.5 font-mono font-semibold text-[#191A42]">
                              None set
                              <span className="block text-[10px] font-sans text-gray-500 mt-0.5">Cookieless script</span>
                            </td>
                            <td className="p-3.5 text-gray-600">Google Tag Manager script container for tag management.</td>
                            <td className="p-3.5 text-gray-600 font-medium">Third party — Google</td>
                            <td className="p-3.5 text-gray-500">N/A — No cookie set</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* TABLE 2: ANALYTICS */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-base font-bold text-[#191A42] flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#6872FF]" />
                      <span>2. Analytics and Performance — Set Only with Consent</span>
                    </h3>
                    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#191A42] text-white">
                            <th className="p-3.5 font-bold uppercase tracking-wider">Name & Type</th>
                            <th className="p-3.5 font-bold uppercase tracking-wider">Purpose</th>
                            <th className="p-3.5 font-bold uppercase tracking-wider">Party / Domain</th>
                            <th className="p-3.5 font-bold uppercase tracking-wider">Expiry</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="p-3.5 font-mono font-semibold text-[#191A42]">
                              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[#6872FF]">_ga, _ga_3L2GJBC4GG</code>
                              <span className="block text-[10px] font-sans text-gray-500 mt-0.5">HTTP cookies</span>
                            </td>
                            <td className="p-3.5 text-gray-600">Google Analytics (GA4). Measures page views and visitor movement.</td>
                            <td className="p-3.5 text-gray-600 font-medium">Third party — Google</td>
                            <td className="p-3.5 text-gray-500">Up to 2 years</td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="p-3.5 font-mono font-semibold text-[#191A42]">
                              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[#6872FF]">_clck, _clsk, CLID, SM</code>
                              <span className="block text-[10px] font-sans text-gray-500 mt-0.5">HTTP cookies</span>
                            </td>
                            <td className="p-3.5 text-gray-600">Microsoft Clarity. Records visitor scrolling, clicks, session replays.</td>
                            <td className="p-3.5 text-gray-600 font-medium">Third party — Microsoft (clarity.ms)</td>
                            <td className="p-3.5 text-gray-500">Up to 1 year / Session</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* TABLE 3: MARKETING */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-base font-bold text-[#191A42] flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                      <span>3. Marketing and Advertising — Set Only with Consent</span>
                    </h3>
                    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#191A42] text-white">
                            <th className="p-3.5 font-bold uppercase tracking-wider">Name & Type</th>
                            <th className="p-3.5 font-bold uppercase tracking-wider">Purpose</th>
                            <th className="p-3.5 font-bold uppercase tracking-wider">Party / Domain</th>
                            <th className="p-3.5 font-bold uppercase tracking-wider">Expiry</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="p-3.5 font-mono font-semibold text-[#191A42]">
                              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[#6872FF]">bcookie, li_sugr, lidc</code>
                              <span className="block text-[10px] font-sans text-gray-500 mt-0.5">HTTP cookies</span>
                            </td>
                            <td className="p-3.5 text-gray-600">LinkedIn Insight Tag. Measures campaign performance and ad retargeting.</td>
                            <td className="p-3.5 text-gray-600 font-medium">Third party — LinkedIn</td>
                            <td className="p-3.5 text-gray-500">Up to 1 year</td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="p-3.5 font-mono font-semibold text-[#191A42]">
                              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[#6872FF]">_fbp</code>
                              <span className="block text-[10px] font-sans text-gray-500 mt-0.5">HTTP cookie</span>
                            </td>
                            <td className="p-3.5 text-gray-600">Meta Pixel. Measures Facebook/Instagram ad conversions and retargeting.</td>
                            <td className="p-3.5 text-gray-600 font-medium">Third party — Meta</td>
                            <td className="p-3.5 text-gray-500">3 months</td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="p-3.5 font-mono font-semibold text-[#191A42]">
                              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[#6872FF]">MUID, MR, SRM_B</code>
                              <span className="block text-[10px] font-sans text-gray-500 mt-0.5">HTTP cookies</span>
                            </td>
                            <td className="p-3.5 text-gray-600">Microsoft Advertising. Recognizes returning visitors across Microsoft services.</td>
                            <td className="p-3.5 text-gray-600 font-medium">Third party — Microsoft</td>
                            <td className="p-3.5 text-gray-500">Up to 1 year</td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="p-3.5 font-mono font-semibold text-[#191A42]">
                              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[#6872FF]">_fuid</code>
                              <span className="block text-[10px] font-sans text-gray-500 mt-0.5">HTTP cookie</span>
                            </td>
                            <td className="p-3.5 text-gray-600">Factors.ai. Identifies company domain of business visitors for B2B sales.</td>
                            <td className="p-3.5 text-gray-600 font-medium">Third party — Factors.ai</td>
                            <td className="p-3.5 text-gray-500">Pending re-verification</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* SECTION 6: CUSTOMISE COOKIES */}
                <section id="customise" className="scroll-mt-28 space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-3 text-[#6872FF]">
                    <div className="p-2 bg-[#6872FF]/10 rounded-lg">
                      <Sliders className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#6872FF]">Section 05</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191A42]">Customise Cookies</h2>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    You can change or withdraw your consent at any time by opening the cookie preference center or managing cookies directly in your browser.
                  </p>

                  <div className="p-6 bg-[#191A42] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-[#6872FF]/20">
                    <div>
                      <h4 className="font-bold text-base text-white">Cookie Settings Center</h4>
                      <p className="text-xs text-gray-300 mt-1">Update your choices for analytics and advertising scripts.</p>
                    </div>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#6872FF] hover:bg-[#545ee0] text-white px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider whitespace-nowrap shadow-md transition-all transform hover:scale-105"
                    >
                      Open Preference Center
                    </button>
                  </div>
                </section>

                {/* SECTION 7: MANUAL CONTROL */}
                <section id="manual-control" className="scroll-mt-28 space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-3 text-[#6872FF]">
                    <div className="p-2 bg-[#6872FF]/10 rounded-lg">
                      <Settings className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#6872FF]">Section 06</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191A42]">How to Control Cookies Manually</h2>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    You can set your browser to block or allow all cookies. Steps for major browsers:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600">
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                      <strong className="text-[#191A42] block mb-1">Google Chrome</strong>
                      <span>Settings → Privacy and security → Third-party cookies</span>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                      <strong className="text-[#191A42] block mb-1">Mozilla Firefox</strong>
                      <span>Menu → Settings → Privacy & Security → Manage Data</span>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                      <strong className="text-[#191A42] block mb-1">Microsoft Edge</strong>
                      <span>Settings → Cookies and site permissions</span>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                      <strong className="text-[#191A42] block mb-1">Apple Safari</strong>
                      <span>Settings → Privacy → Manage Website Data</span>
                    </div>
                  </div>
                </section>

                {/* SECTION 8: YOUR PRIVACY RIGHTS */}
                <section id="your-rights" className="scroll-mt-28 space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-3 text-[#6872FF]">
                    <div className="p-2 bg-[#6872FF]/10 rounded-lg">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#6872FF]">Section 07</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191A42]">Your Privacy Rights</h2>
                  <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                    <div className="p-4 bg-white border border-gray-200 rounded-xl">
                      <strong className="text-[#191A42] text-sm block mb-1">EU/UK (GDPR)</strong>
                      <span>Rights to access, rectify, erase, restrict, or object to processing; data portability; and consent withdrawal.</span>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-xl">
                      <strong className="text-[#191A42] text-sm block mb-1">California (CCPA/CPRA)</strong>
                      <span>Rights to know, delete, correct personal info, and opt out of sale/sharing. Techjays does not sell personal information.</span>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-xl">
                      <strong className="text-[#191A42] text-sm block mb-1">India (DPDP Act, 2023)</strong>
                      <span>Rights to access, correction, erasure, and grievance redressal.</span>
                    </div>
                  </div>
                </section>

                {/* SECTION 9: REVIEW UPDATE DELETE */}
                <section id="review-update-delete" className="scroll-mt-28 space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-3 text-[#6872FF]">
                    <div className="p-2 bg-[#6872FF]/10 rounded-lg">
                      <RefreshCw className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#6872FF]">Section 08</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191A42]">How Can You Review, Update, or Delete Data?</h2>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    To request access to, correction of, or deletion of your personal data, please email us directly at{' '}
                    <a href="mailto:hello@techjays.com" className="text-[#6872FF] font-bold underline">
                      hello@techjays.com
                    </a>.
                  </p>
                </section>

                {/* SECTION 10: CONTACT US */}
                <section id="contact" className="scroll-mt-28 space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-3 text-[#6872FF]">
                    <div className="p-2 bg-[#6872FF]/10 rounded-lg">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#6872FF]">Section 09</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191A42]">Contact Us</h2>

                  <div className="p-6 bg-[#191A42] text-white rounded-2xl space-y-3 shadow-lg">
                    <p className="text-sm font-extrabold text-[#6872FF]">Techjays Inc.</p>
                    <p className="text-xs text-gray-300">Affiliate: Iderize Technology Solutions Private Limited</p>
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs text-gray-300">
                      <div>
                        <span className="text-gray-400">Email: </span>
                        <a href="mailto:hello@techjays.com" className="text-white hover:text-[#6872FF] underline font-semibold">hello@techjays.com</a>
                      </div>
                      <div>
                        <span className="text-gray-400">Data Protection Officer: </span>
                        <a href="mailto:privacy@techjays.com" className="text-white hover:text-[#6872FF] underline font-semibold">privacy@techjays.com</a>
                      </div>
                    </div>
                  </div>
                </section>

              </main>
            </div>
          </div>

          {/* FOOTER */}
          <footer className="border-t border-gray-100 bg-white px-6 sm:px-10 py-6 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 Techjays Inc. All rights reserved.</p>
            <div className="flex items-center space-x-6 font-medium">
              <button onClick={() => setIsModalOpen(true)} className="hover:text-[#6872FF] underline">
                Cookie Settings
              </button>
              <a href="#privacy" className="hover:text-[#6872FF]">Privacy Notice</a>
              <a href="#terms" className="hover:text-[#6872FF]">Terms of Service</a>
            </div>
          </footer>

        </div>
      </div>

      {/* INTERACTIVE COOKIE PREFERENCE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#191A42]/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-6 relative border border-gray-100">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3">
              <div className="p-3 bg-[#6872FF]/10 text-[#6872FF] rounded-xl">
                <Sliders className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#191A42]">Cookie Preference Center</h3>
                <p className="text-xs text-gray-500">Manage your tracking consents for www.techjays.com</p>
              </div>
            </div>

            <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
              {/* Necessary */}
              <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-between">
                <div className="pr-3">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-xs text-[#191A42]">Strictly Necessary</span>
                    <span className="bg-gray-200 text-gray-700 text-[9px] font-bold px-2 py-0.5 rounded-full">Required</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">Essential for form security and basic site operations.</p>
                </div>
                <Lock className="w-4 h-4 text-gray-400 flex-shrink-0" />
              </div>

              {/* Analytics */}
              <div className="p-3.5 rounded-xl border border-gray-200 bg-white flex items-center justify-between">
                <div className="pr-3">
                  <span className="font-bold text-xs text-[#191A42]">Analytics & Performance</span>
                  <p className="text-[11px] text-gray-500 mt-0.5">Google Analytics (GA4) & Microsoft Clarity.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.analytics}
                    onChange={(e) => setCookiePreferences({ ...cookiePreferences, analytics: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#6872FF]"></div>
                </label>
              </div>

              {/* Marketing */}
              <div className="p-3.5 rounded-xl border border-gray-200 bg-white flex items-center justify-between">
                <div className="pr-3">
                  <span className="font-bold text-xs text-[#191A42]">Marketing & Retargeting</span>
                  <p className="text-[11px] text-gray-500 mt-0.5">LinkedIn Insight, Meta Pixel, and Microsoft Ads.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.marketing}
                    onChange={(e) => setCookiePreferences({ ...cookiePreferences, marketing: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#6872FF]"></div>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-2 pt-2 border-t border-gray-100">
              <button
                onClick={() => {
                  const rejectedPreferences = {
                    necessary: true,
                    analytics: false,
                    marketing: false,
                  };
                  setCookiePreferences(rejectedPreferences);
                  window.localStorage.setItem(
                    'techjays-cookie-consent',
                    JSON.stringify(rejectedPreferences)
                  );
                  setIsModalOpen(false);
                }}
                className="px-3.5 py-2 text-xs font-semibold text-gray-600 hover:text-gray-800 rounded-lg hover:bg-gray-100"
              >
                Reject Optional
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 text-xs font-bold text-white bg-[#6872FF] hover:bg-[#545ee0] rounded-xl shadow-md transition-all"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}