"use client";

import React from "react";
import { Mail, Linkedin, Shield, Zap, Download, Target, TrendingUp, Globe, MessageCircle, Briefcase, BarChart3 } from "lucide-react";

export default function ZainPersonalBrand() {
  const services = [
    {
      title: "Enterprise OKR Architecture",
      description:
        "Designing and cascading OKR frameworks that align board strategy with field execution across multi-country infrastructure portfolios.",
    },
    {
      title: "Infrastructure Performance Turnaround",
      description:
        "Diagnosing EBITDA leakage, SLA penalties, and governance gaps, then building measurable recovery roadmaps.",
    },
    {
      title: "Energy & ESCO Strategy Advisory",
      description:
        "Modernizing energy platforms, optimizing DG lifecycle, and improving capital efficiency across Africa and Asia.",
    },
  ];

  const marketInsights = [
    {
      title: "African Tower Consolidation Trends 2026",
      summary:
        "Analysis of mergers, capital flows, and valuation shifts across regional tower markets.",
      source: "Industry Brief",
    },
    {
      title: "Energy Transition Pressure on Towercos",
      summary:
        "How hybrid energy models and battery economics are reshaping infrastructure strategy.",
      source: "Energy Commentary",
    },
    {
      title: "OKRs in Infrastructure Governance",
      summary:
        "Why telecom infrastructure firms are institutionalizing OKRs beyond KPIs.",
      source: "Executive Note",
    },
  ];

  const buttonPrimary =
    "inline-flex items-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 px-6 py-3 text-white font-medium transition";

  const buttonOutline =
    "inline-flex items-center gap-2 rounded-2xl border border-gray-400 px-6 py-3 text-gray-100 hover:border-emerald-400 hover:text-emerald-300 transition";

  const cardStyle =
    "rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-6 hover:border-emerald-500 transition";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-800 text-gray-100">

      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold tracking-wide">Zain ul Aabedeen</span>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#services" className="hover:text-emerald-400">Services</a>
            <a href="#who" className="hover:text-emerald-400">Who I Work With</a>
            <a href="#proof" className="hover:text-emerald-400">Impact</a>
            <a href="#insights" className="hover:text-emerald-400">Insights</a>
            <a href="#contact" className="hover:text-emerald-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative px-6 pt-40 pb-32 min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: "url('/bg-telecom-solar.jpg')",
            filter: "blur(6px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-emerald-900/80 to-gray-900/90" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Zain ul Aabedeen
            </h1>
            <p className="mt-4 text-sm uppercase tracking-widest text-emerald-400">
              Serving Africa & Asia Infrastructure Leaders
            </p>
            <p className="mt-6 text-2xl text-emerald-300 font-semibold leading-snug">
              I Help Infrastructure Operators Recover EBITDA, Eliminate SLA Penalties, and Institutionalize Execution Discipline Across Africa & Asia.
            </p>
            <p className="mt-6 text-gray-200 leading-relaxed">
              Trusted by CEOs, Infrastructure Funds, and Board-Level Leadership Teams to translate strategic ambition into disciplined, measurable enterprise performance across multi-country operations.
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
                onClick={() => window.open("https://www.linkedin.com/in/zainulaabedeen/", "_blank")}
              >
                <Linkedin size={18} /> LinkedIn
              </button>
              <button
                className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400 px-6 py-3 text-emerald-300 hover:bg-emerald-700/20 transition"
                onClick={() => window.open("/Zain_ul_Aabedeen_CV.pdf", "_blank")}
              >
                <Download size={18} /> Executive Profile
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/headshot.jpg"
              alt="Zain ul Aabedeen"
              className="rounded-3xl shadow-2xl w-80 h-96 object-cover object-top border border-white/20"
            />
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-16 px-6 border-t border-white/10 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-emerald-400 mb-10">
            Selected Infrastructure Platforms
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <img src="/logo-1.png" alt="Infrastructure Platform 1" className="mx-auto h-12 object-contain grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition" />
            <img src="/logo-2.png" alt="Infrastructure Platform 2" className="mx-auto h-12 object-contain grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition" />
            <img src="/logo-3.png" alt="Infrastructure Platform 3" className="mx-auto h-12 object-contain grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition" />
            <img src="/logo-4.png" alt="Infrastructure Platform 4" className="mx-auto h-12 object-contain grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition" />
          </div>
          <p className="mt-8 text-xs text-gray-500">
            Logos presented for professional association reference only. Engagements conducted in executive, advisory, or operational capacities subject to confidentiality constraints.
          </p>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section id="who" className="py-24 px-6 border-t border-white/10 bg-gray-900/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 flex items-center gap-3">
            <Briefcase className="text-emerald-400" /> Who I Work With
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={cardStyle}>
              <h3 className="text-emerald-300 font-semibold">TowerCos & Infra Operators</h3>
              <p className="mt-4 text-gray-300 text-sm">
                Multi-country infrastructure portfolios seeking disciplined execution, reduced SLA exposure, and improved asset-level performance.
              </p>
            </div>
            <div className={cardStyle}>
              <h3 className="text-emerald-300 font-semibold">Infrastructure Funds</h3>
              <p className="mt-4 text-gray-300 text-sm">
                Investment platforms optimizing EBITDA, strengthening governance, and preparing assets for transformation or exit.
              </p>
            </div>
            <div className={cardStyle}>
              <h3 className="text-emerald-300 font-semibold">Energy & ESCO Platforms</h3>
              <p className="mt-4 text-gray-300 text-sm">
                Operators modernizing hybrid energy models, improving DG lifecycle economics, and scaling operational discipline.
              </p>
            </div>
            <div className={cardStyle}>
              <h3 className="text-emerald-300 font-semibold">Executive Leadership Teams</h3>
              <p className="mt-4 text-gray-300 text-sm">
                CEOs and boards aligning strategic intent with measurable, cross-functional OKR-driven execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF LAYER */}
      <section id="proof" className="py-24 px-6 border-t border-white/10 bg-gradient-to-br from-gray-900 via-emerald-900/40 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 flex items-center gap-3">
            <BarChart3 className="text-emerald-400" /> Selected Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={cardStyle}>
              <h3 className="text-emerald-300 font-semibold">EBITDA Protection</h3>
              <p className="mt-4 text-gray-300 text-sm">
                Strengthened EBITDA protection and reduced SLA penalty exposure across multi-opco infrastructure portfolios through governance restructuring and execution discipline frameworks.
              </p>
            </div>
            <div className={cardStyle}>
              <h3 className="text-emerald-300 font-semibold">Enterprise OKR Rollout</h3>
              <p className="mt-4 text-gray-300 text-sm">
                Designed and institutionalized enterprise OKR architecture across cross-country portfolios, aligning board-level objectives with operational execution and capital accountability.
              </p>
            </div>
            <div className={cardStyle}>
              <h3 className="text-emerald-300 font-semibold">Energy Platform Optimization</h3>
              <p className="mt-4 text-gray-300 text-sm">
                Optimized DG lifecycle performance, hybrid energy integration, and capital allocation discipline across infrastructure estates to enhance long-term asset value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOARD ADVISORY POSITIONING */}
      <section className="py-20 px-6 border-t border-white/10 bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Board & Executive Advisory Mandate</h2>
          <p className="text-gray-300 leading-relaxed">
            Operating at the intersection of strategy, governance, and operational execution, I support boards and executive committees in strengthening infrastructure performance, enhancing capital discipline, and institutionalizing execution rigor across geographically distributed portfolios.
          </p>
          <p className="mt-6 text-emerald-300 font-medium">
            Focus Areas: EBITDA Protection | SLA Governance | Enterprise OKR Institutionalization | Energy Platform Optimization
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-24 px-6 border-t border-white/10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: "url('/bg-solar.jpg')",
            filter: "blur(6px)",
          }}
        />
        <div className="absolute inset-0 bg-gray-900/70" />

        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">What I Deliver</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={cardStyle}>
                <h3 className="font-semibold text-lg text-emerald-300">{service.title}</h3>
                <p className="mt-4 text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section id="insights" className="relative py-24 px-6 border-t border-white/10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: "url('/bg-dashboard.jpg')",
            filter: "blur(6px)",
          }}
        />
        <div className="absolute inset-0 bg-gray-900/75" />

        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold flex items-center gap-3 mb-12">
            <Globe className="text-emerald-400" /> Market Insights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {marketInsights.map((insight, index) => (
              <div key={index} className={cardStyle}>
                <h3 className="font-semibold text-lg text-emerald-300">{insight.title}</h3>
                <p className="mt-4 text-gray-300 text-sm">{insight.summary}</p>
                <p className="mt-4 text-xs text-gray-400 uppercase tracking-wide">
                  {insight.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6 border-t border-white/10 text-center bg-gray-900/80">
        <h2 className="text-3xl font-semibold">Ready to Strengthen Your Infrastructure Performance?</h2>
        <div className="mt-8">
          <button
            className={buttonPrimary}
            onClick={() => window.open("mailto:za_in@outlook.com", "_blank")}
          >
            <Mail size={18} /> Schedule Executive Discussion
          </button>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <button
        onClick={() => window.open("https://wa.me/971505091330", "_blank")}
        className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl z-50"
      >
        <MessageCircle />
      </button>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Zain ul Aabedeen | Strategic Infrastructure & OKR Advisor
      </footer>
    </div>
  );
}
