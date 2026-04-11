"use client";

import React from "react";
import { Mail, Linkedin, Download, MessageCircle } from "lucide-react";

export default function ZainPersonalBrand() {
  const buttonPrimary =
    "inline-flex items-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-600 px-6 py-3 text-white font-medium transition";

  const buttonOutline =
    "inline-flex items-center gap-2 rounded-2xl border border-gray-400 px-6 py-3 text-gray-100 hover:border-orange-400 hover:text-orange-300 transition";

  const card =
    "rounded-2xl bg-slate-800 border border-white/10 p-6 hover:border-orange-400 transition";

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">

      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold">Zain ul Aabedeen</span>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#publications">Publications</a>
            <a href="#opportunities">Opportunities</a>
            <a href="#credentials">Credentials</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-xl scale-110"
          style={{ backgroundImage: "url('/bg-telecom-solar.jpg')" }}
        />
        <div className="absolute inset-0 bg-slate-900/90" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Zain ul Aabedeen
            </h1>

            <p className="mt-4 text-xs uppercase tracking-widest text-orange-400">
              Africa & Asia Infrastructure Leadership
            </p>

            <p className="mt-6 text-2xl text-orange-300 font-semibold">
              Restoring EBITDA. Eliminating SLA Exposure. Driving Execution Discipline.
            </p>

            <p className="mt-6 text-gray-300">
              Strategic infrastructure leader integrating governance, capital efficiency, and execution discipline across multi-country portfolios.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className={buttonPrimary}>
                <Mail size={18} /> Connect
              </button>

              <button
                className={buttonOutline}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/zainulaabedeen/")
                }
              >
                <Linkedin size={18} /> LinkedIn
              </button>

              <button
                className="border border-orange-400 px-6 py-3 rounded-2xl text-orange-300 hover:bg-orange-500/20"
                onClick={() =>
                  window.open("/Zain_ul_Aabedeen_CV.pdf")
                }
              >
                <Download size={18} /> Profile
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/headshot.jpg"
              className="rounded-3xl w-80 h-96 object-cover border border-white/20"
            />
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">Publications</h2>

          <p className="text-gray-500 text-sm max-w-3xl mx-auto mb-10">
            Original frameworks and operating models developed across multi-country infrastructure environments.
            All materials are the intellectual property of Zain ul Aabedeen.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className={card}>
              <h3 className="text-orange-400 font-semibold mb-2">
                Zero Penalty Framework
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Multi-layer operating system eliminating SLA penalties through governance, process discipline, and execution rigor.
              </p>
              <a
                href="/zero-penalty-framework.html"
                target="_blank"
                className="text-blue-400 hover:text-orange-400"
              >
                Explore Framework →
              </a>
            </div>

            <div className={card}>
              <h3 className="text-orange-400 font-semibold mb-2">
                RCA Interrogation Model
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Structured 11-scenario questioning system to eliminate superficial RCAs and enforce root cause accuracy.
              </p>
              <button
                className="text-orange-300 hover:text-orange-400 underline"
                onClick={() => window.open("/NOC_RCA_Handbook.html", "_blank")}
              >
                Explore Model →
              </button>
            </div>

            <div className={card}>
              <h3 className="text-orange-400 font-semibold mb-2">
                O&M Playbook
              </h3>
              <p className="text-gray-400 text-sm">
                Governance and execution alignment model across telecom infrastructure portfolios.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section id="opportunities" className="py-24 px-6 bg-slate-800 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">Opportunities Desk</h2>

          <p className="text-gray-400 mb-10">
            Curated infrastructure leadership roles across emerging markets.
          </p>

          <div className="space-y-6">
            <div className={card}>
              <h3 className="text-orange-400">Senior O&M Manager – Africa</h3>
              <p className="text-gray-400 text-sm">TowerCo | Multi-country</p>
            </div>

            <div className={card}>
              <h3 className="text-orange-400">Energy Lead – Middle East</h3>
              <p className="text-gray-400 text-sm">ESCO Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section id="credentials" className="py-24 px-6 border-t border-white/10 text-center">
        <h2 className="text-3xl font-semibold mb-10">Credentials</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className={card}>
            <img src="/pmp-cert.pdf" className="mb-4 rounded-lg" />
            <h3 className="text-orange-400">PMP®</h3>
            <p className="text-gray-400 text-sm">Valid till 2027</p>
          </div>

          <div className={card}>
            <img src="/sixsigma.jpg" className="mb-4 rounded-lg" />
            <h3 className="text-orange-400">Lean Six Sigma Green Belt</h3>
            <p className="text-gray-400 text-sm">Benchmark Six Sigma</p>
          </div>

          <div className={card}>
            <img src="/negotiation-cert.pdf" className="mb-4 rounded-lg" />
            <h3 className="text-orange-400">Negotiation Masterclass</h3>
            <p className="text-gray-400 text-sm">ADN Group | 2026</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center bg-slate-800 border-t border-white/10">
        <h2 className="text-3xl font-semibold">Let’s Connect</h2>

        <div className="mt-8">
          <button
            className={buttonPrimary}
            onClick={() => window.open("mailto:za_in@outlook.com")}
          >
            <Mail size={18} /> Start Conversation
          </button>
        </div>
      </section>

      {/* WhatsApp */}
      <button
        onClick={() => window.open("https://wa.me/971505091330")}
        className="fixed bottom-6 right-6 bg-orange-500 p-4 rounded-full shadow-lg"
      >
        <MessageCircle />
      </button>

      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        © {new Date().getFullYear()} Zain ul Aabedeen. All rights reserved.
      </footer>
    </div>
  );
}