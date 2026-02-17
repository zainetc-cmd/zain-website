"use client";

import React from "react";
import {
  Mail,
  Linkedin,
  Download,
  Globe,
  MessageCircle,
  Briefcase,
  BarChart3,
} from "lucide-react";

export default function ZainPersonalBrand() {
  const buttonPrimary =
    "inline-flex items-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 px-6 py-3 text-white font-medium transition";

  const buttonOutline =
    "inline-flex items-center gap-2 rounded-2xl border border-gray-400 px-6 py-3 text-gray-100 hover:border-emerald-400 hover:text-emerald-300 transition";

  const cardStyle =
    "rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl p-6";

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">

      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold">Zain ul Aabedeen</span>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#services" className="hover:text-emerald-400">Services</a>
            <a href="#who" className="hover:text-emerald-400">Who I Work With</a>
            <a href="#impact" className="hover:text-emerald-400">Impact</a>
            <a href="#contact" className="hover:text-emerald-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-xl scale-110"
          style={{ backgroundImage: "url('/bg-telecom-solar.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-emerald-900/80 to-gray-900/95" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Zain ul Aabedeen
            </h1>

            <p className="mt-4 text-xs uppercase tracking-widest text-emerald-400">
              Serving Africa & Asia Infrastructure Leaders
            </p>

            <p className="mt-6 text-2xl text-emerald-300 font-semibold leading-snug">
              Restoring EBITDA Integrity. Eliminating SLA Exposure.
              Institutionalizing Execution Discipline.
            </p>

            <p className="mt-6 text-gray-200 leading-relaxed">
              Board-level advisor and independent strategic consultant
              partnering with infrastructure operators and funds to align
              governance, capital discipline, and execution performance
              across multi-country portfolios.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                className={buttonPrimary}
                onClick={() => window.open("https://wa.me/971505091330", "_blank")}
              >
                <Mail size={18} /> Book Strategy Call
              </button>

              <button
                className={buttonOutline}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/zainulaabedeen/",
                    "_blank"
                  )
                }
              >
                <Linkedin size={18} /> LinkedIn
              </button>

              <button
                className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400 px-6 py-3 text-emerald-300 hover:bg-emerald-700/20 transition"
                onClick={() =>
                  window.open("/Zain_ul_Aabedeen_CV.pdf", "_blank")
                }
              >
                <Download size={18} /> Executive Profile
              </button>
            </div>
          </div>

          {/* Headshot */}
          <div className="flex justify-center">
            <img
              src="/headshot.jpg"
              alt="Zain ul Aabedeen"
              className="rounded-3xl shadow-2xl w-80 h-96 object-cover object-top border border-white/20"
            />
          </div>
        </div>
      </section>

      {/* Engagement Strip */}
      <section className="py-8 bg-gray-950 border-t border-white/10 text-center text-xs uppercase tracking-widest text-gray-400">
        Board Advisory | Executive Mandates | Strategic Transformation Assignments
      </section>

      {/* LOGOS */}
      <section className="py-16 px-6 bg-gray-900 border-t border-white/10 text-center">
        <p className="text-sm uppercase tracking-widest text-emerald-400 mb-10">
          Selected Infrastructure Platforms
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center max-w-5xl mx-auto">
          <img src="/logo-1.png" className="mx-auto h-14 object-contain" />
          <img src="/logo-2.png" className="mx-auto h-14 object-contain" />
          <img src="/logo-3.png" className="mx-auto h-14 object-contain" />
          <img src="/logo-4.png" className="mx-auto h-14 object-contain" />
        </div>

        <p className="mt-8 text-xs text-gray-500 max-w-3xl mx-auto">
          Logos presented for professional association reference only.
          Engagements conducted in executive, advisory, or operational
          capacities subject to confidentiality constraints.
        </p>
      </section>

      {/* WHO */}
      <section id="who" className="py-24 px-6 bg-gray-900 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 flex items-center gap-3">
            <Briefcase className="text-emerald-400" /> Who I Work With
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={cardStyle}>
              TowerCos & Infrastructure Operators seeking EBITDA discipline
              and SLA governance control.
            </div>
            <div className={cardStyle}>
              Infrastructure Funds optimizing capital efficiency and
              enterprise performance.
            </div>
            <div className={cardStyle}>
              Energy & ESCO Platforms modernizing hybrid energy models.
            </div>
            <div className={cardStyle}>
              Executive Leadership Teams aligning strategy with measurable execution.
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="py-24 px-6 bg-gray-950 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 flex items-center gap-3">
            <BarChart3 className="text-emerald-400" /> Selected Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={cardStyle}>
              EBITDA protection through governance redesign and execution controls.
            </div>
            <div className={cardStyle}>
              Enterprise OKR institutionalization across multi-country portfolios.
            </div>
            <div className={cardStyle}>
              Energy platform optimization and DG lifecycle discipline.
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-gray-900 border-t border-white/10 text-center">
        <h2 className="text-3xl font-semibold">
          Ready to Strengthen Infrastructure Performance?
        </h2>

        <div className="mt-8">
          <button
            className={buttonPrimary}
            onClick={() => window.open("mailto:za_in@outlook.com")}
          >
            <Mail size={18} /> Schedule Executive Discussion
          </button>
        </div>
      </section>

      {/* WhatsApp Button */}
      <button
        onClick={() => window.open("https://wa.me/971505091330")}
        className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl z-50"
      >
        <MessageCircle />
      </button>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Zain ul Aabedeen | Board-Level Infrastructure Advisor
      </footer>
    </div>
  );
}
