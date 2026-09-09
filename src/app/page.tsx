"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronRight, Gauge, Layers, Boxes, Terminal as TerminalIcon, Mail, Calculator, Wrench, Bot, Code2, Video, Cpu, Server, Sparkles, Briefcase, Compass, Workflow, Check, Copy, User, Sliders, CheckCircle2, DollarSign, Activity } from "lucide-react";

// Apple-style UI Constants
const CARD_STYLE = "bg-white border border-[#d2d2d7]/50 rounded-3xl p-8 shadow-sm transition-all";
const SECTION_STYLE = "py-24 px-6 max-w-[1024px] mx-auto";
const HEADLINE_STYLE = "text-3xl sm:text-4xl font-semibold tracking-[-0.01em] text-[#1d1d1f] mb-12";
const BODY_TEXT = "text-[#424245] leading-relaxed";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"projects" | "simulator" | "terminal">("projects");
  const [copied, setCopied] = useState(false);
  
  // --- Interactive Engineering Simulator State ---
  const [carWeight, setCarWeight] = useState<number>(630);
  const [payload, setPayload] = useState<number>(450);
  const [ramWeight, setRamWeight] = useState<number>(120);
  const [ratio, setRatio] = useState<1 | 2>(2);
  const [pistonDiameter, setPistonDiameter] = useState<number>(70);
  const [speed, setSpeed] = useState<number>(0.63);

  const g = 9.81;
  const effectiveMass = (carWeight + payload) * (ratio === 2 ? 0.5 : 1.0) + ramWeight;
  const actingForce = 1.4 * g * effectiveMass;
  const pistonArea = Math.PI * Math.pow(pistonDiameter / (2 * 10), 2);
  const staticPressureBar = (effectiveMass * g) / (pistonArea * 10);
  const dynamicPressureBar = actingForce / (pistonArea * 10);
  const ramSpeed = ratio === 2 ? speed / 2 : speed;
  const requiredFlowLpm = (pistonArea * ramSpeed * 60) / 10;
  const estimatedMotorKw = (requiredFlowLpm * dynamicPressureBar) / 450;

  const email = "kscmrt@gmail.com";

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#fbfbfd]/80 backdrop-blur-md border-b border-[#d2d2d7]/50">
        <div className="max-w-[1024px] mx-auto px-6 h-12 flex items-center justify-between text-[12px]">
          <a href="#" className="font-semibold text-[#1d1d1f]">Murat Kuşcu</a>
          <nav className="flex items-center gap-6 text-[#424245]">
            <a href="#about" className="hover:text-[#1d1d1f]">Hikâye</a>
            <a href="#projects" className="hover:text-[#1d1d1f]">Projeler</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-20 px-6 max-w-[980px] mx-auto text-center">
        <h1 className="text-5xl sm:text-7xl font-semibold tracking-[-0.02em] text-[#1d1d1f] mb-6">
          Problem Solver.<br/>System Architect.
        </h1>
        <p className="text-xl sm:text-2xl text-[#86868b] max-w-2xl mx-auto font-light leading-relaxed mb-6">
          Teknik bilgi ile gerçek dünya problemleri arasında köprü kuruyorum.
        </p>
      </section>

      {/* Projects/Simulator Container */}
      <section id="projects" className={SECTION_STYLE}>
        <div className="flex gap-4 mb-12 border-b border-[#d2d2d7]/50 pb-4">
            {["projects", "simulator", "terminal"].map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab as any)} className={`
                    capitalize font-medium transition-colors
                    ${activeTab === tab ? "text-[#1d1d1f]" : "text-[#86868b] hover:text-[#1d1d1f]"}
                `}>
                    {tab}
                </button>
            ))}
        </div>

        {activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard title="BLAIN ERP & MES" desc="Mühendislik hesapları, stok ve atölye otomasyonu." />
                <ProjectCard title="Otonom Medya Motoru" desc="Yapay zekâ destekli 24/7 video üretim pipeline'ı." />
                <ProjectCard title="AI Ajan Altyapısı" desc="Gerçek iş yapan otonom sistemler ve yönlendiriciler." />
                <ProjectCard title="Hidrolik Simülatör" desc="EN 81-20 mühendislik hesaplamaları." />
            </div>
        )}
        
        {activeTab === "simulator" && (
            <div className={`${CARD_STYLE} space-y-8`}>
                <h3 className="text-2xl font-semibold mb-6">Hidrolik Asansör Hesaplama Motoru</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <Slider label="Kabin (kg)" min={200} max={3000} step={50} value={carWeight} onChange={setCarWeight} />
                        <Slider label="Yük (kg)" min={100} max={5000} step={50} value={payload} onChange={setPayload} />
                        <Slider label="Piston (kg)" min={50} max={1000} step={10} value={ramWeight} onChange={setRamWeight} />
                        <Slider label="Piston Çapı (mm)" min={40} max={200} step={5} value={pistonDiameter} onChange={setPistonDiameter} />
                    </div>
                    <div className="bg-[#f5f5f7] p-6 rounded-2xl border border-[#d2d2d7]/50 space-y-4">
                        <ResultItem label="Dinamik Kuvvet" value={`${(actingForce / 1000).toFixed(1)} kN`} />
                        <ResultItem label="Pompa Debisi" value={`${requiredFlowLpm.toFixed(1)} l/dak`} />
                        <ResultItem label="Statik Basınç" value={`${staticPressureBar.toFixed(1)} bar`} />
                        <ResultItem label="Motor Gücü" value={`${estimatedMotorKw.toFixed(1)} kW`} />
                    </div>
                </div>
            </div>
        )}

        {activeTab === "terminal" && (
            <div className={`${CARD_STYLE} bg-[#1d1d1f] text-green-400 font-mono text-sm shadow-xl`}>
                <p>murat@systems:~$ ./init_session.sh</p>
                <p>murat@systems:~$ ./load_projects.py --status=active</p>
                <p>murat@systems:~$ _</p>
            </div>
        )}
      </section>
      
      {/* Footer */}
      <footer className="py-20 text-center text-[#86868b] text-sm">
        <button onClick={() => {
            navigator.clipboard.writeText(email);
            setCopied(true);
        }} className="text-[#0071e3] hover:underline mb-4">
            {copied ? "E-posta kopyalandı." : email}
        </button>
        <p>© {new Date().getFullYear()} Murat Kuşcu.</p>
      </footer>
    </div>
  );
}

function Slider({ label, min, max, step, value, onChange }: any) {
    return (
        <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono text-[#424245]">
                <span>{label}</span>
                <span>{value}</span>
            </div>
            <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full" />
        </div>
    )
}

function ResultItem({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex justify-between items-center py-2 border-b border-[#d2d2d7]/50 last:border-0">
            <span className="text-sm text-[#424245]">{label}</span>
            <span className="font-mono font-semibold text-[#0071e3]">{value}</span>
        </div>
    )
}

function ProjectCard({ title, desc }: { title: string, desc: string }) {
    return (
        <div className={`${CARD_STYLE} hover:shadow-md hover:border-[#d2d2d7]`}>
            <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">{title}</h3>
            <p className="text-[#86868b] mb-6">{desc}</p>
            <a href="#" className="text-[#0071e3] font-medium inline-flex items-center gap-1.5 text-sm">
                Detaylar <ChevronRight className="w-4 h-4" />
            </a>
        </div>
    )
}
