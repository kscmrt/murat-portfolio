"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight, Gauge, Layers, Boxes, Terminal as TerminalIcon, Mail, Calculator, Wrench, Bot, Code2, Video, Cpu, Server, Sparkles, Briefcase, Compass, Workflow, Check, Copy, User } from "lucide-react";

// Apple-style UI Constants
const CARD_STYLE = "bg-white border border-[#d2d2d7]/50 rounded-3xl p-8 shadow-sm transition-all";
const SECTION_STYLE = "py-24 px-6 max-w-[1024px] mx-auto";
const HEADLINE_STYLE = "text-3xl sm:text-4xl font-semibold tracking-[-0.01em] text-[#1d1d1f] mb-12";
const BODY_TEXT = "text-[#424245] leading-relaxed";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"projects" | "simulator" | "terminal">("projects");
  const [copied, setCopied] = useState(false);
  const email = "kscmrt@gmail.com";

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans antialiased">
      {/* Apple-style Header */}
      <header className="sticky top-0 z-50 bg-[#fbfbfd]/80 backdrop-blur-md border-b border-[#d2d2d7]/50">
        <div className="max-w-[1024px] mx-auto px-6 h-12 flex items-center justify-between text-[12px]">
          <a href="#" className="font-semibold text-[#1d1d1f]">Murat Kuşcu</a>
          <nav className="flex items-center gap-6 text-[#424245]">
            <a href="#about" className="hover:text-[#1d1d1f]">Hikâye</a>
            <a href="#projects" className="hover:text-[#1d1d1f]">Projeler</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 max-w-[980px] mx-auto text-center">
        <h1 className="text-5xl sm:text-7xl font-semibold tracking-[-0.02em] text-[#1d1d1f] mb-6">
          Problem Solver.<br/>System Architect.
        </h1>
        <p className="text-xl sm:text-2xl text-[#86868b] max-w-2xl mx-auto font-light leading-relaxed mb-6">
          Teknik bilgi ile gerçek dünya problemleri arasında köprü kuruyorum.
        </p>
        <div className="flex gap-4 justify-center">
            <span className="text-[#86868b] font-mono text-sm">Engineering • Automation • AI • Business</span>
        </div>
      </section>

      {/* About/Manifesto */}
      <section id="about" className={SECTION_STYLE}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={CARD_STYLE}>
                <h2 className="text-2xl font-semibold mb-6">Hikâye.</h2>
                <p className={`${BODY_TEXT} mb-6`}>
                    Makine mühendisliği temelli deneyimimi; otomasyon, yazılım, yapay zekâ ve bilgisayar sistemleriyle birleştirerek gerçek dünya sorunlarına kalıcı çözümler üretiyorum.
                </p>
                <div className="flex items-center gap-3 text-sm text-[#424245]">
                    <User className="w-5 h-5 text-[#0071e3]" />
                    <span>Multidisipliner Sistem Kurucu</span>
                </div>
            </div>
            <div className="space-y-6">
                <ManifestoItem icon={Cpu} title="Mühendislik Hassasiyeti" desc="Teorik değil, pratik ve hesaplanmış çözümler." />
                <ManifestoItem icon={Workflow} title="Otomasyon Felsefesi" desc="Tekrarlayan her işi kodla optimize et." />
                <ManifestoItem icon={Bot} title="Yapay Zekâ Ajanları" desc="Sadece sohbet değil, iş yapan sistemler." />
            </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className={SECTION_STYLE}>
        <h2 className={HEADLINE_STYLE}>Projeler & Vaka Analizleri.</h2>

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
                <ProjectCard title="BLAIN ERP & MES" desc="Mühendislik hesapları, stok ve atölye otomasyonu." tags={["Next.js", "Supabase", "ERP"]} />
                <ProjectCard title="Otonom Medya Motoru" desc="Yapay zekâ destekli 24/7 video üretim pipeline'ı." tags={["Remotion", "AI", "FFmpeg"]} />
                <ProjectCard title="AI Ajan Altyapısı" desc="Gerçek iş yapan otonom sistemler ve yönlendiriciler." tags={["Agents", "Node.js", "Docker"]} />
                <ProjectCard title="Hidrolik Simülatörü" desc="EN 81-20 mühendislik hesaplamaları." tags={["Engineering", "Python"]} />
            </div>
        )}
        
        {activeTab === "simulator" && (
            <div className={CARD_STYLE}>
                <h3 className="text-xl font-semibold mb-4">Hidrolik Hesaplama Motoru</h3>
                <p className={BODY_TEXT}>Simülatör bileşenleri burada yerleşik bir şekilde çalışacak.</p>
            </div>
        )}

        {activeTab === "terminal" && (
            <div className={`${CARD_STYLE} bg-[#1d1d1f] text-green-400 font-mono`}>
                <p>murat@systems:~$ help</p>
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

function ManifestoItem({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="p-3 bg-white border border-[#d2d2d7]/50 rounded-2xl shadow-sm">
                <Icon className="w-6 h-6 text-[#0071e3]" />
            </div>
            <div>
                <h4 className="font-semibold text-[#1d1d1f]">{title}</h4>
                <p className="text-sm text-[#86868b]">{desc}</p>
            </div>
        </div>
    )
}

function ProjectCard({ title, desc, tags }: { title: string, desc: string, tags: string[] }) {
    return (
        <div className={`${CARD_STYLE} hover:shadow-md hover:border-[#d2d2d7]`}>
            <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">{title}</h3>
            <p className="text-[#86868b] mb-6">{desc}</p>
            <div className="flex gap-2 mb-6">
                {tags.map(t => <span key={t} className="text-xs bg-[#f5f5f7] text-[#424245] px-2 py-1 rounded-md">{t}</span>)}
            </div>
            <a href="#" className="text-[#0071e3] font-medium inline-flex items-center gap-1.5 text-sm">
                Detaylar <ChevronRight className="w-4 h-4" />
            </a>
        </div>
    )
}
