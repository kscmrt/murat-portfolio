"use client";

import React, { useState } from "react";
import {
  Code2,
  Cpu,
  Bot,
  Terminal,
  Server,
  Layers,
  ExternalLink,
  Mail,
  CheckCircle2,
  Copy,
  Download,
  Sparkles,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Send,
  Zap,
  Boxes,
  Database,
  Globe,
  Award,
  Video,
  FileCode,
  Check,
} from "lucide-react";

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<"projects" | "experience" | "skills" | "about">("projects");

  const email = "kscmrt@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const skills = [
    {
      category: "AI & Otonom Ajanlar",
      icon: <Bot className="w-5 h-5 text-indigo-400" />,
      items: [
        "Autonomous Agent Architecture",
        "Hermes Agent & Claude Code",
        "LLM Routing & Tool Calling",
        "Gemini Voice & Multimodal APIs",
        "RAG & Obsidian Knowledge Graph",
        "Autonomous Multi-Agent Pipelines",
      ],
    },
    {
      category: "Full-Stack & Web",
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      items: [
        "Next.js (App Router)",
        "React & TypeScript",
        "Tailwind CSS & Modern UI",
        "Node.js & Express / Fastify",
        "RESTful & GraphQL APIs",
        "State Management & WebSockets",
      ],
    },
    {
      category: "Medya & Otomasyon",
      icon: <Video className="w-5 h-5 text-pink-400" />,
      items: [
        "Remotion Programmatic Video",
        "FFmpeg Audio/Video Mastering",
        "Kinetic Karaoke Subtitle Sync",
        "Automated YouTube Pipeline",
        "Headless Browser Rendering",
        "Dynamic Thumbnail Generation",
      ],
    },
    {
      category: "Backend & Sistem & DevOps",
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      items: [
        "Linux Server Administration",
        "Docker & Containerization",
        "PM2 Daemon & Process Control",
        "PostgreSQL, Redis & SQLite",
        "Git / GitHub Workflow & CI/CD",
        "Vercel, Cloudflare & Microservices",
      ],
    },
    {
      category: "Mühendislik & Analitik",
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      items: [
        "Endüstriyel Süreç Modelleme",
        "Stok & ROP (Reorder Point) Algoritmaları",
        "İstatistiksel Volatilite Analitiği",
        "Sistem Entegrasyonu & ERP",
        "Performans & Yük Optimizasyonu",
        "Deterministik Otomasyon Kuralları",
      ],
    },
  ];

  const projects = [
    {
      id: "remotion-engine",
      title: "Otonom YouTube Medya & Video Motoru",
      category: "ai",
      description:
        "Metinden yayına tam otomatik video üretim pipeline'ı. Gemini 2.5 Flash Voice entegrasyonu, Remotion React tabanlı 24fps render, EBU R128 ses mastering ve milisaniyelik dinamik karaoke altyazı senkronizasyonu.",
      tags: ["Next.js", "React", "Remotion", "Gemini Voice", "FFmpeg", "PM2"],
      metrics: "9 Aktif Kanal | Günlük 100+ Otonom İçerik | Sıfır Manuel Müdahale",
      highlights: [
        "Safe-zone duyarlı dinamik altyazı yerleşimi",
        "EBU R128 standartlarında otomatik ses mastering",
        "Otomatik metadata, etiket ve SEO optimizasyonu",
      ],
      githubUrl: "https://github.com/kscmrt",
      badge: "Production / Aktif",
      gradient: "from-indigo-600/30 via-purple-600/20 to-pink-600/20",
    },
    {
      id: "omniroute",
      title: "OmniRoute — Çoklu Model AI Ağ Geçidi & Yönlendirici",
      category: "ai",
      description:
        "Farklı LLM ve AI servisleri arasında akıllı yük dengeleme, maliyet optimizasyonu, streaming ve hata toleransı sağlayan merkezi AI router katmanı.",
      tags: ["TypeScript", "Node.js", "AI Gateway", "Proxy", "OpenAI / Anthropic APIs"],
      metrics: "Ultra Düşük Gecikme | Failover Destekli | Dinamik Yönlendirme",
      highlights: [
        "Model tabanlı maliyet ve gecikme optimizasyonu",
        "Gelişmiş SSE streaming & token hesaplama",
        "Kesintisiz multi-provider fallback mekanizması",
      ],
      githubUrl: "https://github.com/kscmrt/OmniRoute",
      badge: "Açık Kaynak & Modüler",
      gradient: "from-blue-600/30 via-cyan-600/20 to-teal-600/20",
    },
    {
      id: "agent-vault",
      title: "Hermes Agent Kalıcı Hafıza & Obsidian Bilgi Ağı",
      category: "system",
      description:
        "Otonom ajanlar için çift yönlü, çift cron senkronizasyonlu ve Markdown tabanlı kalıcı hafıza mimarisi. Multi-session bağlam yönetimi ve deterministik bilgi alma.",
      tags: ["Obsidian", "Git Automation", "Agent Memory", "Bash", "RAG"],
      metrics: "Günlük Otomatik Sync | Çift Yönlü Vault | Deterministik Hafıza",
      highlights: [
        "Token sınırlarından bağımsız dış bilgi deposu",
        "Proje protokolleri ve kuralların anlık taranması",
        "GitHub üzerinden güvenli çift yönlü replikasyon",
      ],
      githubUrl: "https://github.com/kscmrt/hermes-obsidian-vault",
      badge: "Knowledge Graph",
      gradient: "from-emerald-600/30 via-teal-600/20 to-cyan-600/20",
    },
    {
      id: "stickman-studio",
      title: "Stickman Studio — 2D Vektörel Animasyon Otomasyonu",
      category: "media",
      description:
        "Senaryo metinlerini vektörel stickman animasyonlarına dönüştüren kural tabanlı ve yapay zeka destekli içerik üretim aracı.",
      tags: ["React", "Vector Graphics", "Animation Engine", "TypeScript"],
      metrics: "2D Line-Art | Minimalist Hikaye Anlatımı | Hızlı Export",
      highlights: [
        "Karakter mimikleri ve poz dinamik eşleştirmesi",
        "Sahne ve kamera hareketlerinin kodla kontrolü",
        "Hafif ve ölçeklenebilir SVG tabanlı render",
      ],
      githubUrl: "https://github.com/kscmrt/Stickman-Studio",
      badge: "Creative Tech",
      gradient: "from-amber-600/30 via-orange-600/20 to-red-600/20",
    },
    {
      id: "industrial-erp",
      title: "Endüstriyel Tedarik & Dinamik ROP Analiz Motoru",
      category: "system",
      description:
        "Üretim ve montaj süreçlerinde 60 günlük termin ve talep oynaklığını (standard deviation) hesaplayan, %95 servis seviyesi için dinamik emniyet stoku belirleyen analitik modelleme aracı.",
      tags: ["Python", "Algoritmik Modelleme", "Matematiksel Optimizasyon", "ERP Entegrasyonu"],
      metrics: "%95 Servis Seviyesi | Dinamik ROP | Sıfır Kör Stok",
      highlights: [
        "İstatistiksel volatiliteye dayalı dinamik emniyet stoku",
        "Geçmiş sipariş dönüşüm oranları ile talep tahmini",
        "Manuel çarpanlar yerine doğrulanmış analitik formüller",
      ],
      githubUrl: "https://github.com/kscmrt",
      badge: "Mühendislik & Matematik",
      gradient: "from-purple-600/30 via-indigo-600/20 to-blue-600/20",
    },
  ];

  const experiences = [
    {
      period: "2024 — Günümüz",
      role: "Lead Full-Stack & Autonomous AI Systems Engineer",
      company: "Bağımsız & Otonom Projeler",
      description:
        "Uçtan uca otonom medya üretim sistemleri, LLM ağ geçitleri, çoklu ajan (multi-agent) orkestrasyonu ve Next.js tabanlı modern web arayüzleri geliştirme.",
      points: [
        "9 ayrı YouTube kanalının senaryo, seslendirme, video montaj ve yayın süreçlerini %100 otonomlaştıran Remotion tabanlı sistem mimarisini kurdu.",
        "LLM maliyetlerini optimize eden ve kesintisiz akış sağlayan OmniRoute yönlendiricisini tasarladı.",
        "Otonom ajanların oturumlar arası hafızasını koruyan Obsidian Vault entegrasyonunu geliştirdi.",
      ],
    },
    {
      period: "2022 — 2024",
      role: "Full-Stack Developer & Endüstriyel Sistem Mimarisi",
      company: "Mühendislik & Yazılım Çözümleri",
      description:
        "Web tabanlı yönetim panelleri, RESTful servisler, veri tabanı optimizasyonları ve endüstriyel süreç otomasyon algoritmaları.",
      points: [
        "React, TypeScript, Node.js ve PostgreSQL ile yüksek performanslı modüler kurumsal web uygulamaları geliştirdi.",
        "Üretim süreçlerinde stok maliyetlerini optimize eden dinamik ROP ve analitik talep tahminleme motorları oluşturdu.",
        "CI/CD, Docker ve Linux sunucu altyapılarını yönetti.",
      ],
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-[30rem] h-[30rem] bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/75 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-mono font-bold text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              M
            </div>
            <div>
              <span className="font-bold text-slate-100 tracking-tight group-hover:text-indigo-400 transition-colors">
                Murat
              </span>
              <span className="text-xs text-slate-400 block font-mono">
                /systems-engineer
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800 text-sm font-medium">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeTab === "projects"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Projeler
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeTab === "skills"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Yetenekler
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeTab === "experience"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Deneyim & CV
            </button>
          </nav>

          {/* Quick Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/kscmrt"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/25 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              İletişime Geç
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-start gap-6">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Aktif Projeler & Otonom Sistem Geliştirme</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Full-Stack Developer & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
              Autonomous AI Systems Architect
            </span>
          </h1>

          {/* Bio Description */}
          <p className="max-w-3xl text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
            Modern web teknolojileri (<span className="text-white font-medium">Next.js, React, TypeScript</span>), otonom yapay zekâ ajanları, uçtan uca medya motorları ve yüksek performanslı sistem altyapıları inşa ediyorum. Sıfır manuel iş yükü ve deterministik otomasyon odaklıyım.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects-section"
              onClick={() => setActiveTab("projects")}
              className="px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 rounded-xl shadow-xl shadow-indigo-600/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
            >
              <Boxes className="w-5 h-5" />
              Projeleri İncele
            </a>

            <button
              onClick={() => {
                setActiveTab("experience");
                const el = document.getElementById("cv-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5 text-indigo-400" />
              CV & Deneyim
            </button>

            <button
              onClick={copyToClipboard}
              className="px-4 py-3 text-sm font-medium text-slate-400 hover:text-slate-200 bg-slate-900/50 hover:bg-slate-900 border border-slate-800/80 rounded-xl transition-all flex items-center gap-2 font-mono"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">E-posta Kopyalandı!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{email}</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-10 border-t border-slate-800/80 mt-4">
            <div className="bg-slate-900/60 border border-slate-800/60 p-4 rounded-2xl">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-mono">
                9+
              </div>
              <div className="text-xs text-slate-400 mt-1">Otonom Kanal & Servis</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800/60 p-4 rounded-2xl">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-mono">
                %100
              </div>
              <div className="text-xs text-slate-400 mt-1">Otonom Medya Pipeline</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800/60 p-4 rounded-2xl">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-mono">
                10k+
              </div>
              <div className="text-xs text-slate-400 mt-1">Üretilen Medya Çıktısı</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800/60 p-4 rounded-2xl">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-mono">
                0₺
              </div>
              <div className="text-xs text-slate-400 mt-1">Maliyet Odaklı Mimari</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tab Controller for Content */}
      <section id="projects-section" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-10">
          {/* Tab Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === "projects"
                    ? "bg-indigo-600 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Boxes className="w-4 h-4" />
                Öne Çıkan Projeler
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === "skills"
                    ? "bg-indigo-600 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                Teknoloji & Yetenekler
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === "experience"
                    ? "bg-indigo-600 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Deneyim & CV
              </button>
            </div>

            {/* Filter tags (when projects is active) */}
            {activeTab === "projects" && (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500 font-medium">Filtrele:</span>
                {["all", "ai", "media", "system"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-md capitalize transition-all ${
                      selectedCategory === cat
                        ? "bg-slate-800 text-indigo-400 font-semibold border border-indigo-500/30"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {cat === "all" ? "Tümü" : cat.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* TAB 1: PROJECTS */}
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-slate-900/70 border border-slate-800/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-indigo-300 border border-slate-700/60">
                        {project.badge}
                      </div>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
                        title="GitHub İncele"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights bullet list */}
                    <div className="space-y-1.5 pt-2">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics Pill */}
                    <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-mono text-cyan-300 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{project.metrics}</span>
                    </div>
                  </div>

                  {/* Tags footer */}
                  <div className="pt-6 mt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                    {project.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/40 text-xs text-slate-300 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: SKILLS */}
          {activeTab === "skills" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-slate-800 rounded-xl border border-slate-700/60">
                        {skillGroup.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white">
                        {skillGroup.category}
                      </h4>
                    </div>
                    <ul className="space-y-2.5 pt-2">
                      {skillGroup.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: EXPERIENCE & CV */}
          {activeTab === "experience" && (
            <div id="cv-section" className="space-y-10">
              {/* CV Download / Print Header */}
              <div className="bg-gradient-to-r from-indigo-900/40 via-purple-900/20 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Özgeçmiş & Kariyer Özeti</h3>
                  <p className="text-sm text-slate-300 mt-1 max-w-xl">
                    Sistem mimarisi, full-stack geliştirme, otonom yapay zekâ entegrasyonu ve endüstriyel modelleme alanındaki deneyimlerim.
                  </p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all hover:scale-105 shrink-0"
                >
                  <Download className="w-4 h-4" />
                  CV Yazdır / PDF Kaydet
                </button>
              </div>

              {/* Timeline */}
              <div className="relative border-l border-slate-800 ml-4 pl-6 space-y-10">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    {/* Circle mark */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:scale-125 transition-transform" />

                    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-slate-700 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                        <span className="text-xs font-mono text-indigo-400 px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                          {exp.period}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-slate-400">{exp.company}</div>
                      <p className="text-sm text-slate-300 leading-relaxed">{exp.description}</p>
                      <ul className="space-y-1.5 pt-2">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-normal">
                            <span className="text-indigo-400 mt-0.5">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Education & Core Competencies */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-2 text-indigo-400 font-bold">
                    <GraduationCap className="w-5 h-5" />
                    <span>Eğitim & Sürekli Gelişim</span>
                  </div>
                  <div className="text-sm text-slate-200 font-semibold">Mühendislik & Yazılım Sistemleri</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Algoritmik problem çözme, veri yapıları, dağıtık sistemler, otonom yazılım ajanları ve modern yazılım mimarileri üzerine sürekli araştırma ve pratik uygulama.
                  </p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <Award className="w-5 h-5" />
                    <span>Çalışma Prensipleri</span>
                  </div>
                  <div className="text-sm text-slate-200 font-semibold">Deterministik & Sıfır Manuel İş Yükü</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Her tekrarlayan süreci kodla otomatize etmek; sağlam hata yakalama (failover), yüksek test güvenilirliği ve temiz, modüler kod standartları.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex p-3 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
            <Mail className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Birlikte Yeni Projeler İnşa Edelim
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Full-stack web geliştirme, otonom AI ajanları veya sistem entegrasyonu konularında görüşmek için dilediğiniz zaman ulaşabilirsiniz.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`mailto:${email}`}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 flex items-center gap-2 transition-all hover:scale-105"
            >
              <Send className="w-4 h-4" />
              E-posta Gönder
            </a>

            <button
              onClick={copyToClipboard}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 flex items-center gap-2 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Kopyalandı ({email})</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>E-postayı Kopyala</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 px-4 text-center text-xs text-slate-500 space-y-2">
        <div className="flex items-center justify-center gap-4 text-slate-400 font-mono">
          <a href="https://github.com/kscmrt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub: @kscmrt
          </a>
          <span>•</span>
          <span>Next.js & Tailwind CSS</span>
          <span>•</span>
          <span>Vercel Deploy Ready</span>
        </div>
        <p>© {new Date().getFullYear()} Murat. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
