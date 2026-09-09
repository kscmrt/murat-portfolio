"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Code2,
  Cpu,
  Bot,
  Terminal as TerminalIcon,
  Server,
  ExternalLink,
  Mail,
  CheckCircle2,
  Copy,
  Download,
  Sparkles,
  Briefcase,
  GraduationCap,
  Send,
  Zap,
  Boxes,
  Database,
  Globe,
  Award,
  Video,
  Check,
  Calculator,
  Play,
  Layers,
  ChevronRight,
  Shield,
  Activity,
  FileText,
  Sliders,
  Settings,
  Flame,
  ArrowRight,
  Workflow,
  Wrench,
  Gauge,
  Compass,
} from "lucide-react";

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
  const [activeTab, setActiveTab] = useState<"projects" | "simulator" | "terminal" | "skills" | "cv">("projects");
  const [selectedProject, setSelectedProject] = useState<string>("blain-erp");
  const [projectCategory, setProjectCategory] = useState<string>("all");

  // --- Interactive Engineering Simulator State ---
  const [carWeight, setCarWeight] = useState<number>(630); // kg
  const [payload, setPayload] = useState<number>(450); // kg (6 persons)
  const [ramWeight, setRamWeight] = useState<number>(120); // kg
  const [ratio, setRatio] = useState<1 | 2>(2); // 1:1 or 2:1
  const [pistonDiameter, setPistonDiameter] = useState<number>(70); // mm

  // Hydraulic Calculations (EN 81-20 Standard)
  const g = 9.81;
  const effectiveMass = (carWeight + payload) * (ratio === 2 ? 0.5 : 1.0) + ramWeight;
  const actingForce = 1.4 * g * effectiveMass; // N (with 1.4 dynamic factor)
  const pistonArea = Math.PI * Math.pow(pistonDiameter / (2 * 10), 2); // cm^2
  const staticPressureBar = (effectiveMass * g) / (pistonArea * 10); // bar
  const dynamicPressureBar = actingForce / (pistonArea * 10); // bar

  // --- Interactive Terminal State ---
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([
    {
      cmd: "whoami",
      output: "Murat Kuşcu — Mechanical Engineer & Full-Stack Systems Architect. Sells elevators by day, builds autonomous agent pipelines by night.",
    },
    {
      cmd: "system --status",
      output: "🚀 BLAIN ERP & MES: ONLINE | 🤖 9x YouTube Autonomous Daemons: RUNNING | 🧠 Obsidian Knowledge Graph: SYNCED",
    },
    {
      cmd: "help",
      output: "Available commands: whoami, skills, projects, quote, blain-erp, remotion, metrics, secret, clear",
    },
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = terminalInput.trim().toLowerCase();
    if (!cleanCmd) return;

    let response: React.ReactNode = "";

    switch (cleanCmd) {
      case "help":
        response = "Available commands: whoami, skills, projects, quote, blain-erp, remotion, metrics, secret, clear";
        break;
      case "whoami":
        response = "Murat Kuşcu: Mechanical Engineer (Gazi / Technical) turned Full-Stack & Autonomous AI Systems Architect. Bridge between heavy physical engineering and cutting-edge software.";
        break;
      case "quote":
        response = '"I sell elevators by day, write code by night. I\'m actually a Mechanical Engineer, but please don\'t tell the IT department I built this."';
        break;
      case "skills":
        response = "Next.js 16, React 19, TypeScript, Python, Supabase/PostgreSQL, Remotion, Gemini Voice, Docker, Linux, EN 81-20 Hydraulic Lift Design, Statistical Inventory Modeling (ROP).";
        break;
      case "projects":
        response = "1. BLAIN ERP & MES (Blaincalc HUB)\n2. Autonomous Media & Video Engine (9 Channels)\n3. OmniRoute Multi-Model AI Gateway\n4. Stickman Studio\n5. Quantitative ROP & Demand Forecast Engine";
        break;
      case "blain-erp":
        response = "BLAIN ERP & MES: Comprehensive engineering calculations (piston, pump, motor, valve, scissor lift) + Complete ERP lifecycle (Shopfloor QR, Inventory, Purchases, Accounting). Built with Next.js 16 + Supabase.";
        break;
      case "remotion":
        response = "9 Channels running on PM2. 24fps kinematic rendering, Gemini 2.5 Flash Voice, milisecond karaoke subtitles, EBU R128 audio mastering. 100% automated.";
        break;
      case "metrics":
        response = "⚡ 9 Autonomous Channels | 🔄 100% Zero-Touch Pipeline | 🏗️ 20+ Industrial ERP Modules | 💰 $0 Zero-Cost Architecture";
        break;
      case "secret":
        response = "🔥 Easter Egg: F_acting = 1.4 * g * ((M_car + Q) * ratio + M_ram). Never use hardcoded safety multipliers; compute real statistical volatility!";
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      default:
        response = `Command not recognized: "${cleanCmd}". Type "help" for a list of valid commands.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd: terminalInput, output: response }]);
    setTerminalInput("");
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  const email = "kscmrt@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const projectsData = [
    {
      id: "blain-erp",
      title: "BLAIN ERP & MES Portal (Blaincalc HUB)",
      subtitle: "Endüstriyel Mühendislik Hesaplama, Üretim Takip ve ERP Sistemi",
      category: "engineering",
      badge: "Production / Kurumsal",
      gradient: "from-blue-600/30 via-indigo-600/20 to-cyan-600/20",
      description:
        "Blain Hydraulics ve hidrolik asansör sektörü için geliştirilmiş uçtan uca mühendislik hesaplama ve MES/ERP platformu. EN 81-20 standartlarında silindir, pompa, motor, valf ve makas lifti mühendislik hesaplamalarından atölye QR üretim takibine, dinamik stok rezervasyonundan çok para birimli muhasebeye kadar 20+ kritik modülü tek çatı altında toplar.",
      metrics: "20+ Entegre Modül | Gerçek Zamanlı Supabase DB | QR Mobil Üretim",
      tags: ["Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS v4", "jsPDF", "Recharts"],
      highlights: [
        "Mühendislik Hesaplama Motoru: Silindir, tandem piston, pompa debisi, motor gücü ve valf basınç kayıplarının anlık deterministik hesabı.",
        "Üretim & MES Yönetimi: Her imalat siparişi için dinamik QR kodlu mobil iş takip ekranı ve fotoğraf/not arşivi.",
        "Dinamik Satın Alma & Stok Rezervasyonu: Yoldaki transit stoklar, kritik emniyet seviyeleri ve projeye özel tahsis mekanizması.",
        "Rol Tabanlı Güvenlik (RBAC): Admin, Mühendis, İmalatçı, Muhasebe, Depo ve Müşteri panelleri için sayfa ve aksiyon bazlı granular yetkilendirme.",
      ],
      githubUrl: "https://github.com/kscmrt/sonproje",
    },
    {
      id: "remotion-engine",
      title: "Otonom YouTube Medya & Video Motoru",
      subtitle: "Uçtan Uca Programatik Video Üretim ve Yayın Pipeline'ı",
      category: "ai",
      badge: "9 Aktif Kanal / 24/7",
      gradient: "from-indigo-600/30 via-purple-600/20 to-pink-600/20",
      description:
        "Metin senaryosundan YouTube yayınına kadar hiçbir insan müdahalesi gerektirmeyen otonom medya üretim orkestrasyonu. Google Gemini 2.5 Flash Voice modelleriyle stüdyo kalitesinde seslendirme, Remotion React ile 24fps kinematiğinde render, milisaniyelik dinamik karaoke altyazı senkronizasyonu ve otomatik YouTube Data API v3 analitiği.",
      metrics: "9 Aktif YouTube Kanalı | 10k+ Video | $0 Maliyetli Seslendirme Mimarisi",
      tags: ["Remotion", "React", "Next.js", "Gemini Voice", "FFmpeg", "PM2 Daemons", "YouTube API"],
      highlights: [
        "Kinetic Karaoke Altyazı: TikTok/Shorts arayüzleriyle çakışmayan altın güvenli bölge (Y: %45-%70) altyazı motoru.",
        "EBU R128 Ses Mastering: Otomatik LUFS ses normalizasyonu ve profesyonel podcast standartlarında dinamik aralık işleme.",
        "Sentinel QA v2.0 Semantik Denetim: Jenerik veya tık tuzağı içerikleri filtreleyen yapay zekâ kalite kapısı.",
        "Otonom PM2 Kümesi: Günlük döngüleri yöneten, hata durumunda kendini onaran (auto-healer) arka plan iş parçacıkları.",
      ],
      githubUrl: "https://github.com/kscmrt",
    },
    {
      id: "omniroute",
      title: "OmniRoute — Çoklu Model AI Yönlendirici & Ağ Geçidi",
      subtitle: "Yüksek Performanslı Akıllı LLM Proxy ve Failover Katmanı",
      category: "ai",
      badge: "Açık Kaynak & Modüler",
      gradient: "from-cyan-600/30 via-teal-600/20 to-emerald-600/20",
      description:
        "Tüm yapay zekâ iş yüklerini tek bir standart endpoint altında toplayan, farklı LLM sağlayıcıları (OpenAI, Anthropic, Gemini, DeepSeek) arasında akıllı rota belirleme, yük dengeleme, token sayımı ve kesintisiz SSE akışı sunan yüksek verimli proxy servisi.",
      metrics: "Ultra Düşük Gecikme | Otomatik Hata Fallback | Token & Maliyet Optimizasyonu",
      tags: ["TypeScript", "Node.js", "AI Gateway", "Server-Sent Events", "Multi-Provider"],
      highlights: [
        "Dinamik Sağlayıcı Yönlendirme: Hız, kota ve fiyat parametrelerine göre en uygun modele anlık rota.",
        "Failover Güvencesi: Bir API çöktüğünde veya 429 döndüğünde milisaniyeler içinde alternatif modele devir.",
        "Merkezi Token ve Maliyet Takibi: Dağıtık projelerin tüketimlerini tek bir arayüzden raporlama.",
      ],
      githubUrl: "https://github.com/kscmrt/OmniRoute",
    },
    {
      id: "agent-vault",
      title: "Hermes Agent Kalıcı Hafıza & Obsidian Bilgi Ağı",
      subtitle: "Otonom Ajanlar İçin Deterministik Bilgi ve Protokol Vault'u",
      category: "system",
      badge: "Knowledge Graph",
      gradient: "from-emerald-600/30 via-teal-600/20 to-indigo-600/20",
      description:
        "Yapay zekâ ajanlarının oturum sınırlarını aşmasını sağlayan, çift yönlü senkronizasyonlu ve Markdown tabanlı kalıcı hafıza mimarisi. Mühendislik formülleri, YouTube kuralları ve sistem protokollerini deterministik olarak ajan hafızasına bağlar.",
      metrics: "Günlük Otomatik Cron Replikasyonu | Sıfır Halüsinasyon Protokolü | Git Entegre",
      tags: ["Obsidian", "Git Automation", "Agent Memory", "Bash Scripting", "Knowledge Graph"],
      highlights: [
        "Deterministik Protokoller: Ajanların ezbere tahmin yerine dosyalanmış mühendislik kurallarını okuması.",
        "Çift Yönlü Git Senkronizasyonu: GitHub üzerinden anlık versiyonlanmış bilgi deposu.",
        "Kalıcı İş Kuralları: Proje bazlı tüm teknik standartların güvenli arşivi.",
      ],
      githubUrl: "https://github.com/kscmrt/hermes-obsidian-vault",
    },
    {
      id: "industrial-rop",
      title: "Endüstriyel Talep Tahmin & İstatistiksel ROP Motoru",
      subtitle: "Matematiksel Emniyet Stoku ve Satın Alma Optimizasyonu",
      category: "engineering",
      badge: "Matematiksel Modelleme",
      gradient: "from-amber-600/30 via-orange-600/20 to-red-600/20",
      description:
        "Endüstriyel üretim tesislerinde sabit çarpanlar yerine gerçek sipariş dönüşüm oranları ve talep oynaklığını (standart sapma) modelleyen, 60 günlük termin süresinde %95 servis seviyesini garanti eden analitik ROP (Reorder Point) algoritması.",
      metrics: "%95 Hedef Servis Seviyesi | Dinamik Güvenlik Stoku | Sıfır Atıl Sermaye",
      tags: ["Python", "Matematiksel Modelleme", "İstatistiksel Analiz", "Tedarik Zinciri", "ERP"],
      highlights: [
        "Volatilite Duyarlı Modelleme: Sabit katsayılar yerine talep varyansına dayalı emniyet stoku.",
        "7 Aylık Proje Dönüşüm Matrisi: Tekliften siparişe geçiş olasılıklarının tedarik planına entegrasyonu.",
        "Kritik Parça Uyarı Algoritması: Tedarik süresi uzun hidrolik valf ve güç üniteleri için erken sipariş tetikleyicisi.",
      ],
      githubUrl: "https://github.com/kscmrt",
    },
  ];

  const currentProject = projectsData.find((p) => p.id === selectedProject) || projectsData[0];

  const filteredProjects =
    projectCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === projectCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white relative font-sans">
      {/* Dynamic Background Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed top-1/2 right-10 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-10 left-1/3 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center font-mono font-black text-white shadow-lg shadow-indigo-500/25">
              MK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-100 tracking-tight text-base">Murat Kuşcu</span>
                <span className="px-2 py-0.5 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-[10px] font-mono text-indigo-300">
                  MechEng & Architect
                </span>
              </div>
              <span className="text-[11px] text-slate-400 block font-mono">
                Full-Stack & Autonomous AI Lead
              </span>
            </div>
          </div>

          {/* Navigation Pill */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 text-xs font-semibold">
            {[
              { id: "projects", label: "Projeler & Mimari", icon: <Boxes className="w-3.5 h-3.5" /> },
              { id: "simulator", label: "Hidrolik Simülatör", icon: <Gauge className="w-3.5 h-3.5" /> },
              { id: "terminal", label: "Canlı Konsol", icon: <TerminalIcon className="w-3.5 h-3.5" /> },
              { id: "skills", label: "Yetenekler", icon: <Sparkles className="w-3.5 h-3.5" /> },
              { id: "cv", label: "CV & Deneyim", icon: <Briefcase className="w-3.5 h-3.5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          {/* Action Links */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/kscmrt"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-700"
              title="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/25 transition-all hover:scale-105"
            >
              <Mail className="w-3.5 h-3.5" />
              İletişim
            </a>
          </div>
        </div>
      </header>

      {/* Main Hero Header */}
      <section className="relative pt-12 pb-14 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Gündüz Hidrolik Mühendisliği • Gece Full-Stack & Otonom Ajanlar</span>
            </div>

            {/* Main Header */}
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Mühendislik Hassasiyeti ile <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
                Otonom Sistemler & Yazılım Mimarisi
              </span>
            </h1>

            {/* Distinct Persona Quote */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border-l-4 border-indigo-500 border-y border-r border-slate-800 text-sm text-slate-300 italic font-mono leading-relaxed">
              &ldquo;I sell elevators by day, write code by night. I&apos;m actually a Mechanical Engineer, but please don&apos;t tell the IT department I built this.&rdquo;
            </div>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
              Fiziksel mühendislik standartlarını (<span className="text-white font-medium">EN 81-20, Hidrolik Güç, İstatistiksel ROP</span>) modern web teknolojileri (<span className="text-white font-medium">Next.js 16, Supabase, React 19, TypeScript</span>) ve 24/7 çalışan <span className="text-indigo-400 font-medium">Otonom Yapay Zekâ Pipeline</span>&apos;ları ile birleştiren sistem mimarı.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setActiveTab("projects")}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center gap-2 transition-all hover:scale-105"
              >
                <Boxes className="w-4 h-4" />
                Projeleri İncele
              </button>

              <button
                onClick={() => setActiveTab("simulator")}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm flex items-center gap-2 transition-all hover:scale-105"
              >
                <Calculator className="w-4 h-4 text-cyan-400" />
                Hidrolik Simülatörü Dene
              </button>

              <button
                onClick={copyToClipboard}
                className="px-4 py-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 font-mono text-xs flex items-center gap-2 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Kopyalandı!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Quick Metrics Card */}
          <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-2xl relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-bold text-slate-200">SİSTEM METRİKLERİ</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                100% CANLI
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-950/70 border border-slate-800/80 p-3.5 rounded-2xl">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-mono">
                  20+
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 font-medium">ERP & MES Modülü</div>
              </div>

              <div className="bg-slate-950/70 border border-slate-800/80 p-3.5 rounded-2xl">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-mono">
                  9 Kanal
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Otonom YouTube Ajanı</div>
              </div>

              <div className="bg-slate-950/70 border border-slate-800/80 p-3.5 rounded-2xl">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-mono">
                  10k+
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Otomatik Üretilen Video</div>
              </div>

              <div className="bg-slate-950/70 border border-slate-800/80 p-3.5 rounded-2xl">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-mono">
                  0₺
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Maliyet Odaklı Tasarım</div>
              </div>
            </div>

            {/* Real System Stack Pill */}
            <div className="bg-slate-950/90 border border-slate-800 p-3 rounded-2xl text-[11px] font-mono text-slate-400 space-y-1">
              <div className="text-slate-300 font-semibold flex items-center justify-between">
                <span>Mimari Çekirdeği:</span>
                <span className="text-indigo-400">Next.js 16 + Supabase</span>
              </div>
              <div>• Dağıtık PM2 Otonom Daemonları</div>
              <div>• EN 81-20 Deterministik Hesaplama Motoru</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Tab Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        {/* Navigation Tabs Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-8 overflow-x-auto gap-4">
          <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 shrink-0">
            {[
              { id: "projects", label: "Projeler & Sistem Mimarisi", icon: <Boxes className="w-4 h-4" /> },
              { id: "simulator", label: "İnteraktif Hidrolik Hesaplama", icon: <Calculator className="w-4 h-4" /> },
              { id: "terminal", label: "İnteraktif Terminal & CLI", icon: <TerminalIcon className="w-4 h-4" /> },
              { id: "skills", label: "Teknoloji Matrisi", icon: <Sparkles className="w-4 h-4" /> },
              { id: "cv", label: "Detaylı CV & Deneyim", icon: <Briefcase className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {activeTab === "projects" && (
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-slate-500 font-medium">Kategori:</span>
              {[
                { id: "all", label: "Tümü" },
                { id: "engineering", label: "Mühendislik & ERP" },
                { id: "ai", label: "Yapay Zekâ & Medya" },
                { id: "system", label: "Sistem & Altyapı" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setProjectCategory(cat.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    projectCategory === cat.id
                      ? "bg-slate-800 text-indigo-400 border border-indigo-500/30"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* TAB 1: PROJECTS & ARCHITECTURE */}
        {activeTab === "projects" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  className={`cursor-pointer group relative bg-slate-900/70 border rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all hover:scale-[1.01] hover:shadow-2xl ${
                    selectedProject === project.id
                      ? "border-indigo-500 bg-slate-900 ring-2 ring-indigo-500/20 shadow-indigo-500/10"
                      : "border-slate-800/90 hover:border-slate-700"
                  }`}
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-[11px] font-mono font-semibold text-indigo-300 border border-slate-700/60">
                        {project.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-500 group-hover:text-slate-300 flex items-center gap-1">
                        Detay <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400">{project.subtitle}</p>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[11px] font-mono text-cyan-300 flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{project.metrics}</span>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-800/60 text-[10px] font-mono text-slate-300">
                        {t}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Project Deep-Dive Inspection Panel */}
            <div className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-bold">
                      PROJE DERİNLEMESİNE İNCELEME
                    </span>
                    <span className="text-xs text-slate-400 font-mono">• {currentProject.badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
                    {currentProject.title}
                  </h2>
                  <p className="text-sm text-slate-300 mt-1 max-w-3xl">
                    {currentProject.description}
                  </p>
                </div>

                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 transition-all border border-slate-700"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub Reposu
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              {/* Highlights & Engineering Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold font-mono text-indigo-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    TEMEL MİMARİ & ÖZELLİKLER
                  </h4>
                  <div className="space-y-2">
                    {currentProject.highlights.map((h, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold font-mono text-cyan-400 flex items-center gap-2">
                    <Workflow className="w-4 h-4" />
                    KULLANILAN TEKNOLOJİ YIĞINI
                  </h4>
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {currentProject.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-indigo-950/50 border border-indigo-500/30 text-xs font-mono text-indigo-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-400 space-y-2">
                      <div className="flex items-center justify-between font-mono">
                        <span>Performans ve Dağıtım:</span>
                        <span className="text-emerald-400 font-bold">Vercel & PM2 Daemon</span>
                      </div>
                      <div className="flex items-center justify-between font-mono">
                        <span>Veri Güvenliği & State:</span>
                        <span className="text-cyan-400 font-bold">Supabase PostgreSQL + RLS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE HYDRAULIC SIMULATOR (EN 81-20) */}
        {activeTab === "simulator" && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-cyan-300">
                  EN 81-20 HİDROLİK ASANSÖR GERÇEK ZAMANLI HESAPLAMA MOTORU
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                İnteraktif Hidrolik Silindir & Basınç Simülatörü
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                Aşağıdaki parametreleri dinamik olarak değiştirerek EN 81-20 standardına göre etki eden kuvveti ($F_{'{acting}'} = 1.4 \cdot g \cdot ((M_{'{car}'} + Q) \cdot \text{ratio} + M_{'{ram}'})$), gerekli silindir kesit alanını ve statik/dinamik çalışma basınçlarını canlı olarak hesaplayabilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Controls Column */}
              <div className="lg:col-span-6 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-5">
                <h4 className="text-sm font-bold font-mono text-slate-200 flex items-center gap-2 border-b border-slate-800 pb-3">
                  <Sliders className="w-4 h-4 text-indigo-400" />
                  SİSTEM GİRİŞ PARAMETRELERİ
                </h4>

                {/* Car Weight Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">Kabin Boş Ağırlığı ($M_{'{car}'}$):</span>
                    <span className="text-indigo-400 font-bold">{carWeight} kg</span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="3000"
                    step="50"
                    value={carWeight}
                    onChange={(e) => setCarWeight(Number(e.target.value))}
                    className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Payload Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">Beyan Yükü ($Q$):</span>
                    <span className="text-cyan-400 font-bold">{payload} kg ({Math.round(payload / 75)} Kişi)</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={payload}
                    onChange={(e) => setPayload(Number(e.target.value))}
                    className="w-full accent-cyan-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Ram Weight Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">Piston & Başlık Ağırlığı ($M_{'{ram}'}$):</span>
                    <span className="text-emerald-400 font-bold">{ramWeight} kg</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="10"
                    value={ramWeight}
                    onChange={(e) => setRamWeight(Number(e.target.value))}
                    className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Piston Diameter */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">Piston Dış Çapı ($D$):</span>
                    <span className="text-amber-400 font-bold">{pistonDiameter} mm</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="200"
                    step="5"
                    value={pistonDiameter}
                    onChange={(e) => setPistonDiameter(Number(e.target.value))}
                    className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Ratio Toggle */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-slate-300 block">Askı Tipi (Palanga Oranı):</span>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setRatio(1)}
                      className={`py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                        ratio === 1
                          ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                          : "bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-900"
                      }`}
                    >
                      1:1 Direkt Askı
                    </button>
                    <button
                      onClick={() => setRatio(2)}
                      className={`py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                        ratio === 2
                          ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                          : "bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-900"
                      }`}
                    >
                      2:1 Endirekt (Halatlı)
                    </button>
                  </div>
                </div>
              </div>

              {/* Output Results Column */}
              <div className="lg:col-span-6 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-5 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold font-mono text-slate-200 flex items-center gap-2 border-b border-slate-800 pb-3">
                    <Gauge className="w-4 h-4 text-emerald-400" />
                    HESAPLANAN MÜHENDİSLİK ÇIKTILARI
                  </h4>

                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                      <div className="text-xs font-mono text-slate-400">Dinamik Etkiyen Kuvvet ($F_{'{acting}'}$)</div>
                      <div className="text-2xl font-black font-mono text-indigo-400 mt-1">
                        {(actingForce / 1000).toFixed(2)} kN
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">1.4x Dinamik Katsayı Dahil</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                      <div className="text-xs font-mono text-slate-400">Piston Kesit Alanı ($A$)</div>
                      <div className="text-2xl font-black font-mono text-cyan-400 mt-1">
                        {pistonArea.toFixed(1)} cm²
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Ø {pistonDiameter} mm için</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                      <div className="text-xs font-mono text-slate-400">Statik Basınç (Dolu)</div>
                      <div className="text-2xl font-black font-mono text-emerald-400 mt-1">
                        {staticPressureBar.toFixed(1)} bar
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Maksimum statik yük</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                      <div className="text-xs font-mono text-slate-400">Dinamik Pik Basınç</div>
                      <div className="text-2xl font-black font-mono text-amber-400 mt-1">
                        {dynamicPressureBar.toFixed(1)} bar
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">İvmelenme & valf emniyeti</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                  <div className="text-slate-200 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>BLAIN ERP Formülü ile Doğrulandı</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Bu formül kümesi BLAIN ERP & MES (Blaincalc HUB) platformunda binlerce asansör projesinin imalat ve fiyatlandırma hesaplarında aktif olarak kullanılmaktadır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: INTERACTIVE TERMINAL & CLI */}
        {activeTab === "terminal" && (
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 font-mono shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-400 ml-2">murat@systems-architect:~ (zsh)</span>
              </div>
              <span className="text-[11px] text-slate-500">v2.5.0-interactive</span>
            </div>

            {/* Terminal History */}
            <div className="space-y-4 min-h-[280px] max-h-[450px] overflow-y-auto text-xs sm:text-sm pr-2">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-indigo-400 font-bold">
                    <span>murat@systems:~$</span>
                    <span className="text-white">{item.cmd}</span>
                  </div>
                  <div className="text-slate-300 whitespace-pre-wrap pl-4 border-l-2 border-slate-800 py-0.5">
                    {item.output}
                  </div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Input Form */}
            <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 border-t border-slate-800 pt-3">
              <span className="text-indigo-400 font-bold text-xs sm:text-sm">murat@systems:~$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder='Komut yazın (örn: "whoami", "projects", "quote", "help")'
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm placeholder:text-slate-600"
                autoFocus
              />
              <button
                type="submit"
                className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors"
              >
                Çalıştır
              </button>
            </form>
          </div>
        )}

        {/* TAB 4: SKILLS & CAPABILITIES MATRIX */}
        {activeTab === "skills" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Full-Stack & Web Teknolojileri",
                icon: <Code2 className="w-5 h-5 text-indigo-400" />,
                skills: [
                  "Next.js 16 (App Router, Turbopack)",
                  "React 19 & TypeScript",
                  "Supabase (PostgreSQL, RLS, Storage)",
                  "Tailwind CSS v4 & Modern UI",
                  "Node.js, Express & RESTful APIs",
                  "jsPDF, Recharts, Responsive Tables",
                ],
              },
              {
                category: "Yapay Zekâ & Otonom Ajanlar",
                icon: <Bot className="w-5 h-5 text-cyan-400" />,
                skills: [
                  "Autonomous Agent Mimarisi (Hermes)",
                  "Gemini 2.5 Flash Voice & Multimodal",
                  "LLM Proxying, Routing & Failover",
                  "Obsidian Vault Kalıcı Hafıza Sync",
                  "RAG, Semantic Search & Sentinel QA",
                  "Multi-Agent Orkestrasyonu",
                ],
              },
              {
                category: "Programatik Medya & Video",
                icon: <Video className="w-5 h-5 text-pink-400" />,
                skills: [
                  "Remotion React 24fps Kinematik Render",
                  "FFmpeg Audio/Video Mastering",
                  "EBU R128 Ses Normalizasyonu",
                  "Kinetic Karaoke Altyazı Senkronizasyonu",
                  "YouTube Data API v3 Entegrasyonu",
                  "Headless Otomasyon & Vektörel Animasyon",
                ],
              },
              {
                category: "Mühendislik & Endüstriyel Analitik",
                icon: <Cpu className="w-5 h-5 text-amber-400" />,
                skills: [
                  "EN 81-20 Hidrolik Asansör Standartları",
                  "Silindir, Pompa, Valf Seçim Algoritmaları",
                  "Dinamik ROP (Reorder Point) Hesaplama",
                  "İstatistiksel Emniyet Stoku Modellemesi",
                  "MES Atölye QR Üretim Takip Mimarisi",
                  "Tekliften İmalata ERP Entegrasyonu",
                ],
              },
              {
                category: "DevOps & Sunucu & Altyapı",
                icon: <Server className="w-5 h-5 text-emerald-400" />,
                skills: [
                  "Linux (Ubuntu/Debian) Yönetimi",
                  "PM2 Process & Daemon Cluster",
                  "Docker & Container Yapılandırması",
                  "Git, GitHub Actions & CI/CD",
                  "Vercel Edge & Cloudflare Workers",
                  "Sıfır Maliyetli Yüksek Erişilebilirlik",
                ],
              },
              {
                category: "Mühendislik Prensipleri",
                icon: <Shield className="w-5 h-5 text-purple-400" />,
                skills: [
                  "Deterministik ve Test Edilebilir Kod",
                  "Sıfır Halüsinasyon ve Kitabi Doğruluk",
                  "Mobil Odaklı Temiz Dokunmatik UX",
                  "Fail-Safe Hata Toleransı & İzleme",
                  "Performans ve Bellek Optimizasyonu",
                  "Sürekli Otomasyon & Sıfır Manuel İş Yükü",
                ],
              },
            ].map((group, idx) => (
              <div
                key={idx}
                className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-800 rounded-2xl border border-slate-700/60">
                      {group.icon}
                    </div>
                    <h4 className="text-base font-bold text-white">{group.category}</h4>
                  </div>
                  <ul className="space-y-2.5 pt-2">
                    {group.skills.map((s, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 5: CV & EXPERIENCE */}
        {activeTab === "cv" && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-indigo-400 font-bold">PROFESYONEL ÖZGEÇMİŞ</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Murat Kuşcu</h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  Makine Mühendisliği temelli Full-Stack Yazılım Geliştirici & Otonom AI Sistemleri Mimarı.
                </p>
              </div>

              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/30 shrink-0"
              >
                <Download className="w-4 h-4" />
                CV Yazdır / PDF Kaydet
              </button>
            </div>

            {/* Experience Timeline */}
            <div className="relative border-l-2 border-slate-800 ml-4 pl-6 space-y-8">
              {[
                {
                  period: "2024 — Günümüz",
                  title: "Lead Full-Stack & Autonomous AI Systems Architect",
                  org: "Bağımsız Projeler & Otonom Ağ",
                  desc: "Next.js 16 ve Supabase tabanlı BLAIN ERP & MES sisteminin mimarisi; 9 kanallı 24/7 otonom YouTube medya üretim motorunun ve çoklu AI yönlendiricilerinin (OmniRoute) tasarımı.",
                  points: [
                    "20'den fazla modülden oluşan BLAIN ERP platformunu Next.js 16, Supabase ve PostgreSQL ile sıfırdan inşa etti.",
                    "Remotion, FFmpeg ve Gemini 2.5 Voice entegrasyonuyla günde 100+ videoyu sıfır manuel müdahaleyle üreten otonom pipeline kurdu.",
                    "Obsidian Vault tabanlı deterministik ajan hafızası senkronizasyon protokolünü geliştirdi.",
                  ],
                },
                {
                  period: "2020 — 2024",
                  title: "Makine Mühendisi & Sistem Entegratörü",
                  org: "Hidrolik & Asansör Mühendisliği Çözümleri",
                  desc: "EN 81-20 hidrolik asansör projeleri, teknik hesaplamalar, imalat planlama, malzeme ihtiyaç planlaması (MRP) ve stok optimizasyonu.",
                  points: [
                    "Silindir, tandem piston, valf ve güç ünitesi hesaplama algoritmalarını modelledi.",
                    "İstatistiksel volatiliteye dayalı dinamik ROP emniyet stoku modelleri ile atıl stokları minimize etti.",
                    "Atölye iş emirleri ve kalite kontrol süreçlerini dijitalleştirdi.",
                  ],
                },
              ].map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:scale-125 transition-transform" />
                  <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                      <span className="text-xs font-mono text-indigo-400 px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-400">{exp.org}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{exp.desc}</p>
                    <ul className="space-y-1.5 pt-1">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="text-indigo-400 mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Education & Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                  <GraduationCap className="w-5 h-5" />
                  <span>Eğitim & Mühendislik Temeli</span>
                </div>
                <div className="text-sm text-white font-bold">Makine Mühendisliği (B.Sc.)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Termodinamik, akışkanlar mekaniği, hidrolik tahrik sistemleri, sonlu elemanlar analizi ve algoritmik problem çözme disiplini.
                </p>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Award className="w-5 h-5" />
                  <span>Yazılım & Mühendislik Felsefesi</span>
                </div>
                <div className="text-sm text-white font-bold">Deterministik Hassasiyet & Otomasyon</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Yazılımda tahmine veya jenerik şablonlara yer yoktur; her hesaplama kitabi formüllere, her mimari test edilmiş deterministik işleyişe dayanmalıdır.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex p-3 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
            <Mail className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Birlikte Yeni Projeler İnşa Edelim
          </h2>

          <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
            Full-Stack web uygulamaları (Next.js & Supabase), endüstriyel mühendislik modellemesi veya otonom yapay zekâ pipeline&apos;ları için dilediğiniz zaman ulaşabilirsiniz.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`mailto:${email}`}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-indigo-600/30 flex items-center gap-2 transition-all hover:scale-105"
            >
              <Send className="w-4 h-4" />
              E-posta Gönder
            </a>

            <button
              onClick={copyToClipboard}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs sm:text-sm border border-slate-700 flex items-center gap-2 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Kopyalandı ({email})</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{email}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 px-4 text-center text-xs text-slate-500 space-y-2">
        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400 font-mono">
          <a href="https://github.com/kscmrt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub: @kscmrt
          </a>
          <span>•</span>
          <span>Next.js 16 & Supabase Ready</span>
          <span>•</span>
          <span>Mechanical Engineer & Systems Architect</span>
        </div>
        <p>© {new Date().getFullYear()} Murat Kuşcu. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
