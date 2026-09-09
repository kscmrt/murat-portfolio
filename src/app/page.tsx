"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight, Gauge, Layers, Boxes, Terminal as TerminalIcon, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans antialiased">
      {/* Apple-style Header */}
      <header className="sticky top-0 z-50 bg-[#fbfbfd]/80 backdrop-blur-md border-b border-[#d2d2d7]/50">
        <div className="max-w-[1024px] mx-auto px-6 h-12 flex items-center justify-between text-[12px]">
          <a href="#" className="font-semibold text-[#1d1d1f]">Murat Kuşcu</a>
          <nav className="flex items-center gap-6 text-[#424245]">
            <a href="#projects" className="hover:text-[#1d1d1f]">Projeler</a>
            <a href="#about" className="hover:text-[#1d1d1f]">Hikâye</a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Apple Style */}
      <section className="pt-24 pb-20 px-6 max-w-[980px] mx-auto text-center">
        <h1 className="text-5xl sm:text-7xl font-semibold tracking-[-0.02em] text-[#1d1d1f] mb-6">
          Problem Solver.
          <br />
          System Architect.
        </h1>
        <p className="text-xl sm:text-2xl text-[#86868b] max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Gerçek dünyadaki problemleri teknoloji, otomasyon ve yapay zekâ ile çözüyorum.
        </p>
        <a href="#projects" className="inline-flex items-center gap-2 text-[#0071e3] font-medium text-lg hover:underline">
          Projeleri incele <ArrowRight className="w-5 h-5" />
        </a>
      </section>

      {/* Projects Grid - Apple Style Cards */}
      <section id="projects" className="max-w-[1024px] mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold tracking-[-0.01em] text-[#1d1d1f] mb-10">Projeler.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "BLAIN ERP & MES", description: "Endüstriyel hesaplama ve üretim otomasyonu." },
            { title: "Otonom Medya Motoru", description: "Yapay zekâ destekli 24/7 video hattı." },
            { title: "AI Agent Altyapısı", description: "Gerçek iş yapan otonom sistemler." },
            { title: "Hidrolik Simülatörü", description: "EN 81-20 mühendislik hesaplamaları." },
          ].map((project, idx) => (
            <div key={idx} className="bg-white border border-[#d2d2d7]/50 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">{project.title}</h3>
              <p className="text-[#86868b] mb-4">{project.description}</p>
              <a href="#" className="text-[#0071e3] font-medium inline-flex items-center gap-1 text-sm">
                Detaylar <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-20 text-center text-[#86868b] text-sm">
        <p>© {new Date().getFullYear()} Murat Kuşcu. "Merak ediyorum. Öğreniyorum. Çözüyorum."</p>
      </footer>
    </div>
  );
}
