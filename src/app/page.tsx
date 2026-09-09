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
  Search,
  AlertTriangle,
  QrCode,
  DollarSign,
  TrendingUp,
  HelpCircle,
  FolderGit2,
  RefreshCw,
  Eye,
  Car,
  Truck,
  HardDrive,
  CpuIcon,
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
  const [activeTab, setActiveTab] = useState<"journey" | "projects" | "hydraulic-calc" | "troubleshooting" | "terminal" | "stack">("journey");
  const [selectedProjectId, setSelectedProjectId] = useState<string>("hydraulic-portal");
  const [projectFilter, setProjectFilter] = useState<string>("all");

  // --- Interactive Engineering Simulator State ---
  const [carWeight, setCarWeight] = useState<number>(630);
  const [payload, setPayload] = useState<number>(450);
  const [ramWeight, setRamWeight] = useState<number>(120);
  const [ratio, setRatio] = useState<1 | 2>(2);
  const [pistonDiameter, setPistonDiameter] = useState<number>(70);
  const [speed, setSpeed] = useState<number>(0.63);

  // Hydraulic Calculations (EN 81-20 Standard)
  const g = 9.81;
  const effectiveMass = (carWeight + payload) * (ratio === 2 ? 0.5 : 1.0) + ramWeight;
  const actingForce = 1.4 * g * effectiveMass;
  const pistonArea = Math.PI * Math.pow(pistonDiameter / (2 * 10), 2);
  const staticPressureBar = (effectiveMass * g) / (pistonArea * 10);
  const dynamicPressureBar = actingForce / (pistonArea * 10);
  // Flow required: Q = (Area * v * 6) / ratio  [l/min]
  const ramSpeed = ratio === 2 ? speed / 2 : speed;
  const requiredFlowLpm = (pistonArea * ramSpeed * 60) / 10;
  const estimatedMotorKw = (requiredFlowLpm * dynamicPressureBar) / 450;

  // --- Troubleshooting Interactive Lookup ---
  const [searchProblem, setSearchProblem] = useState("");
  const troubleshootingCases = [
    {
      code: "OBD: P0420",
      domain: "Otomotiv / Motor Yönetimi",
      title: "Katalitik Konvertör Sistem Verimliliği Eşik Altında",
      symptom: "Motor arıza lambası (Check Engine), yakıt tüketiminde artış.",
      approach: "Doğrudan katalizör değiştirmek yerine O2 sensör 1 (upstream) ve sensör 2 (downstream) voltaj salınımlarını ELM327 ile canlı grafikleyip egzoz kaçağı, buji ve lambda yanıt sürelerini test ettim.",
      solution: "Sensör 2 voltajının dalgalanma frekansını analiz ederek katalitik konvertör gözenek tıkanıklığını ve lambda yanıtını doğrulayıp hedefe yönelik müdahale sağladım.",
    },
    {
      code: "OBD: P22FB",
      domain: "Otomotiv / Emisyon & Sensör",
      title: "NOx Sensörü Performans / Sinyal Algılama Hatası",
      symptom: "DPF/AdBlue sistemi emisyon uyarısı ve tork kısıtlama riski.",
      approach: "Sensörün CAN-bus haberleşme dirençlerini (60 ohm terminasyon) ve besleme voltajını ölçüp sensör probu kurum kirliliği ile ECU kontrol ünitesi arasındaki sinyal kesintisini izole ettim.",
      solution: "Isıtıcı devresi ve veri hattı sürekliliği test edilerek sensör ünitesi kalibre edildi.",
    },
    {
      code: "API: HTTP 401 / Unauthorized",
      domain: "AI Gateway & Web Servisleri",
      title: "Model Sağlayıcı Kimlik Doğrulama / Bearer Token Geçersizliği",
      symptom: "AI agent isteklerinin failover mekanizmasına düşmeden anında kesilmesi.",
      approach: "Header formatlarını, token expire sürelerini ve proxy katmanındaki Authorization rewrite kurallarını inceledim.",
      solution: "OmniRoute üzerinde provider bazlı dinamik token yenileme ve header normalizasyonu kuralı uygulandı.",
    },
    {
      code: "API: HTTP 503 / Provider Overload",
      domain: "AI Router & Dağıtık Sistemler",
      title: "Yapay Zekâ Sağlayıcı Servis Kesintisi veya Hız Sınırı",
      symptom: "Kullanıcı taleplerinde stream akışının kopması veya uzun gecikmeler.",
      approach: "Hata oranını SSE akışından anlık yakalayan ve milisaniyeler içinde alternatif LLM modeline yönlendiren akıllı retry/circuit-breaker katmanı kurdum.",
      solution: "Kullanıcı fark etmeden DeepSeek / Claude / OpenAI modelleri arasında dinamik failover sağlandı.",
    },
    {
      code: "Linux: RAM / CPU Resource Pressure",
      domain: "Ubuntu Server & Docker",
      title: "Docker Container OOM (Out of Memory) Kapanmaları",
      symptom: "Arka plan otomasyon servislerinin (PM2/Remotion) aniden çökmesi.",
      approach: "Kernel dmesg loglarını ve `/proc/meminfo` metriklerini inceleyerek headless Chrome video render süreçlerinin geçici bellek sızıntısını tespit ettim.",
      solution: "ZRAM / Swap yapılandırması optimize edildi, Docker `--memory` limitleri belirlendi ve süreçler için otomatik garbage collection tetikleyicisi yazıldı.",
    },
  ];

  const filteredCases = searchProblem.trim()
    ? troubleshootingCases.filter(
        (c) =>
          c.code.toLowerCase().includes(searchProblem.toLowerCase()) ||
          c.domain.toLowerCase().includes(searchProblem.toLowerCase()) ||
          c.title.toLowerCase().includes(searchProblem.toLowerCase()) ||
          c.approach.toLowerCase().includes(searchProblem.toLowerCase())
      )
    : troubleshootingCases;

  // --- Interactive Terminal State ---
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([
    {
      cmd: "whoami",
      output: "Murat Kuşcu — Multidisipliner Sistem Kurucu. Teknik Düşünce + Ticari Bakış Açısı + Otomasyon + Yapay Zekâ.",
    },
    {
      cmd: "felsefe",
      output: '"Merak ediyorum. Öğreniyorum. Kuruyorum. Otomatize ediyorum. Çözüyorum."',
    },
    {
      cmd: "help",
      output: "Komutlar: whoami, felsefe, stack, hidrolik, qr-stok, ai-agent, otomotiv, projeler, quote, clear",
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
        response = "Mevcut komutlar: whoami, felsefe, stack, hidrolik, qr-stok, ai-agent, otomotiv, projeler, quote, contact, clear";
        break;
      case "whoami":
        response = "Murat Kuşcu: Tek bir kutuya sığmayan, sahada hidrolik asansör hesaplayan, ticari teklif/stok süreçlerini yöneten, Linux sunucularında AI agent'ları orkestre eden sistem kurucu.";
        break;
      case "felsefe":
        response = "Teknoloji benim için gösteriş değildir. 'Bu teknoloji benim gerçek hayattaki bir problemimi çözebilir mi?' sorusuyla yola çıkarım.";
        break;
      case "quote":
        response = '"I sell elevators by day, write code by night. I\'m actually a Mechanical Engineer, but please don\'t tell the IT department I built this."';
        break;
      case "stack":
        response = "Next.js, TypeScript, Supabase, PostgreSQL, Docker, Linux, Portainer, Python, Remotion, Gemini Voice, APIs, Excel/Access, EN 81-20.";
        break;
      case "hidrolik":
        response = "Hidrolik Valfler, Silindirler, Güç Üniteleri, Pompalar, Debi & Basınç Hesapları, 2:1 Askı Oranları, Burkulma, Motor Gücü Seçimleri.";
        break;
      case "qr-stok":
        response = "Depoda ürünlerin QR kodları üzerinden personelin telefonuyla okutulması ve stok hareketlerinin otomatik dijitalleştirilmesi.";
        break;
      case "ai-agent":
        response = "Hermes Agent, OmniRoute AI Router, OpenAI uyumlu yerel/uzak endpoint'ler, hata toleranslı model sağlayıcı entegrasyonu.";
        break;
      case "otomotiv":
        response = "OBD arıza teşhisi (P0420, P22FB), NOx sensörleri, DPF, ECU parametreleri, ELM327 ile canlı veri okuma ve analitik problem çözme.";
        break;
      case "projeler":
        response = "1. Hidrolik Asansör Teklif & Hesaplama Sistemi\n2. QR Kod & Mobil Stok Otomasyonu\n3. AI Agent & OmniRoute Altyapısı\n4. Linux & Docker Sunucu Mimarisi\n5. Modern Web Portalları (Next.js/Supabase)\n6. Otonom AI Video & Medya Motoru\n7. Otomotiv & Sistem Troubleshooting";
        break;
      case "contact":
        response = "E-posta: kscmrt@gmail.com | GitHub: https://github.com/kscmrt";
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      default:
        response = `Bilinmeyen komut: "${cleanCmd}". Komut listesi için "help" yazabilirsiniz.`;
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

  // --- Real-World Case Study Projects ---
  const projects = [
    {
      id: "hydraulic-portal",
      title: "Hidrolik Asansör Teklif, Hesaplama ve ERP Sistemi",
      category: "engineering",
      tagline: "Mühendislik hesaplarından ticari teklife ve üretime uçtan uca otomasyon",
      problem:
        "Hidrolik asansör sektöründe her müşteri projesi için kabin ağırlığı, askı oranı, seyir hızı, silindir çapı, debi, motor gücü, valf basınç kaybı, döviz kurları ve KDV hesaplarının manuel yapılması hem çok ciddi zaman alıyor hem de insan hatasına açık oluyordu.",
      approach:
        "İlk olarak Microsoft Access ve Excel ile dinamik formüller geliştirdim; ardından bunu Next.js 16, TypeScript ve Supabase tabanlı 20+ modüllü kurumsal bir mühendislik & ERP portalına (Blaincalc HUB) dönüştürdüm.",
      techStack: ["Next.js 16", "React 19", "TypeScript", "Supabase (PostgreSQL)", "Tailwind CSS v4", "jsPDF", "Access/Excel"],
      solution:
        "Mühendisin sadece temel kabin parametrelerini girmesiyle EN 81-20 standartlarına uygun piston çapı, gerekli debi, motor gücü, valf tipi, statik/dinamik basınçlar ve Euro/TL bazlı resmi proforma teklifler saniyeler içinde otomatik üretilir hale getirildi.",
      result:
        "Teklif hazırlama süresi saatlerden dakikalara indi, tekliften siparişe ve atölye QR üretimine kadar sıfır hesaplama hatasıyla çalışan entegre bir sistem kuruldu.",
      githubUrl: "https://github.com/kscmrt/sonproje",
    },
    {
      id: "qr-inventory",
      title: "QR Kod Tabanlı Mobil Stok ve Depo Otomasyonu",
      category: "automation",
      tagline: "Stok hareketlerini personelin telefonundan tek okutmayla dijitalleştirme",
      problem:
        "Depoda ürün giriş ve çıkışlarının deftere veya sonradan bilgisayara manuel yazılması stok kayıplarına, yanlış ürün sevkiyatına ve güncel olmayan envanter verilerine yol açıyordu.",
      approach:
        "Masaüstü bilgisayar bağımlılığını ortadan kaldırarak her personele cep telefonunu bir el terminali gibi kullandıran hafif ve hızlı bir QR kod mimarisi kurguladım.",
      techStack: ["QR Code Architecture", "Google Forms / Sheets API", "Webhooks", "Mobile Web App", "PostgreSQL"],
      solution:
        "Ürün raflarına ve koli etiketlerine dinamik QR kodlar basıldı. Depo personeli ürün giriş veya çıkışında cep telefonuyla QR kodu okuttuğunda işlem anında veritabanına rezervasyon ve stok hareketi olarak işlendi.",
      result:
        "Depodaki manuel kayıt iş yükü %90 azaldı, 'yoldaki stoklar' ve 'rezerve stoklar' anlık olarak satış ve mühendislik ekranlarında görünür hale geldi.",
      githubUrl: "https://github.com/kscmrt",
    },
    {
      id: "ai-agent-omniroute",
      title: "Otonom AI Ajan Altyapısı & OmniRoute Gateway",
      category: "ai",
      tagline: "Yapay zekâyı chatbot'tan gerçek iş yapan otonom asistana dönüştürme",
      problem:
        "Tek bir yapay zekâ modeline bağımlı kalmak API kesintilerine, kota aşımlarına, yüksek maliyetlere ve ajanların oturumlar arası hafıza kaybetmesine neden oluyordu.",
      approach:
        "Farklı model sağlayıcılarını (OpenAI, Anthropic, DeepSeek, Gemini) tek bir standart endpoint arkasında toplayan akıllı proxy (OmniRoute) ve Obsidian Vault tabanlı deterministik kalıcı hafıza mimarisi geliştirdim.",
      techStack: ["TypeScript", "Node.js", "Hermes Agent", "Obsidian Knowledge Graph", "Docker", "SSE Streaming"],
      solution:
        "HTTP 401/503 gibi sağlayıcı hatalarında otomatik olarak alternatif modele geçen, token maliyetini optimize eden ve sunucu üzerinde dosya okuyup komut çalıştırabilen otonom ajan pipeline'ı inşa edildi.",
      result:
        "AI sistemleri sadece sohbet eden araçlar olmaktan çıkıp sunucuda kod geliştiren, log inceleyen ve otomatik iş akışlarını yürüten güvenilir asistanlara dönüştü.",
      githubUrl: "https://github.com/kscmrt/OmniRoute",
    },
    {
      id: "linux-server-infra",
      title: "Linux Sunucu Mimarisi & Docker Konteyner Yönetimi",
      category: "infrastructure",
      tagline: "Hata toleranslı, düşük maliyetli ve self-hosted servis altyapısı",
      problem:
        "Farklı projelerin (veritabanları, API router'ları, video render iş parçacıkları) bağımlılıklarının çakışması ve sunucu kaynaklarının (CPU/RAM/Disk) plansız tüketilmesi sistem kilitlenmelerine yol açabiliyordu.",
      approach:
        "Ubuntu Server üzerinde Docker ve Portainer ile tüm servisleri izole konteynerler haline getirip, SSH tünelleri ve reverse proxy ile güvenli bir sunucu ekosistemi kurdum.",
      techStack: ["Ubuntu Server", "Docker", "Portainer", "PM2 Cluster", "Systemd", "SSH Tunneling", "Bash"],
      solution:
        "Log analizleri ile bellek baskısı oluşturan süreçleri tespit ederek otomatik kurtarma (auto-healer) mekanizmaları, ZRAM bellek optimizasyonu ve uzaktan güvenli erişim altyapısı kurdum.",
      result:
        "Sıfır ek sunucu lisans maliyetiyle 7/24 kesintisiz çalışan, arka planda video render ve API yönlendirme yapan sağlam bir altyapı elde edildi.",
      githubUrl: "https://github.com/kscmrt",
    },
    {
      id: "faceless-video-engine",
      title: "Yapay Zekâ ile Otonom Video ve İçerik Pipeline'ı",
      category: "ai",
      tagline: "Senaryodan yayına insan müdahalesi gerektirmeyen medya otomasyonu",
      problem:
        "Video montajı, seslendirme, altyazı senkronizasyonu ve yayınlama süreçlerinin elle yapılması günlerce vakit alıyor ve ölçeklenemiyordu.",
      approach:
        "İçerik üretimini kodlanabilir bir pipeline olarak ele alarak Remotion (React tabanlı programatik video), Gemini Flash Voice ve FFmpeg ses işleme araçlarını birleştirdim.",
      techStack: ["Remotion", "React", "Google Gemini Voice", "FFmpeg (EBU R128)", "PM2", "YouTube Data API"],
      solution:
        "Metin senaryosunu alıp stüdyo kalitesinde seslendiren, milisaniyelik dinamik karaoke altyazıları safe-zone içinde konumlandıran ve 24fps render alıp yayına hazırlayan tam otonom bir akış inşa edildi.",
      result:
        "9 farklı tematik kanalda on binden fazla video sıfır manuel iş yükü ve sıfır ek seslendirme maliyetiyle otonom olarak üretildi.",
      githubUrl: "https://github.com/kscmrt",
    },
    {
      id: "automotive-troubleshooting",
      title: "Otomotiv OBD & Sensör Teşhis Araştırmaları",
      category: "troubleshooting",
      tagline: "Motor yönetim sistemleri, arıza kodları ve kök neden analizi",
      problem:
        "Modern araçlarda emisyon (DPF, NOx) ve motor yönetim sistemlerinde ortaya çıkan arızalarda doğrudan parça değişimine gidilmesi hem yüksek maliyet yaratıyor hem de gerçek kök nedeni çözmüyordu.",
      approach:
        "ELM327 OBD donanımları ve teşhis yazılımlarıyla ECU canlı sensör verilerini (hava debisi, lambda voltaj salınımları, egzoz sıcaklıkları, diferansiyel basınçlar) kayıt altına alarak matematiksel olarak inceledim.",
      techStack: ["OBD-II Diagnostic", "ELM327", "ECU Live Data", "CAN-Bus Analizi", "Sinyal Osiloskopu"],
      solution:
        "P0420 ve P22FB gibi karmaşık arıza kodlarında sensör besleme voltajları, CAN-bus hat dirençleri ve gaz analiz değerleri karşılaştırılarak gereksiz parça değişiminin önüne geçildi.",
      result:
        "Mekanik ve elektriksel problemlerde 'önce neden çalışmadığını anlama' felsefesiyle kesin ve kalıcı teşhis yöntemi oluşturuldu.",
      githubUrl: "https://github.com/kscmrt",
    },
  ];

  const currentProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const filteredProjects =
    projectFilter === "all" ? projects : projects.filter((p) => p.category === projectFilter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white relative font-sans">
      {/* Background Ambience */}
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
                  Multidisipliner Sistem Kurucu
                </span>
              </div>
              <span className="text-[11px] text-slate-400 block font-mono">
                Technology • Automation • AI • Engineering
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 text-xs font-semibold">
            {[
              { id: "journey", label: "Hikâye & Felsefe", icon: <Compass className="w-3.5 h-3.5" /> },
              { id: "projects", label: "Gerçek Projeler", icon: <Boxes className="w-3.5 h-3.5" /> },
              { id: "hydraulic-calc", label: "Hidrolik Simülatör", icon: <Gauge className="w-3.5 h-3.5" /> },
              { id: "troubleshooting", label: "Problem Çözme & Arıza Teşhis", icon: <Wrench className="w-3.5 h-3.5" /> },
              { id: "stack", label: "Teknoloji Haritası", icon: <Layers className="w-3.5 h-3.5" /> },
              { id: "terminal", label: "Canlı Konsol", icon: <TerminalIcon className="w-3.5 h-3.5" /> },
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

      {/* Hero Section */}
      <section className="relative pt-12 pb-14 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Teknik Düşünce + Ticari Bakış Açısı + Otomasyon + Yapay Zekâ</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Gerçek dünyadaki problemleri <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
                teknoloji, otomasyon ve yapay zekâ
              </span>{" "}
              ile çözüyorum.
            </h1>

            {/* Core Manifesto Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border-l-4 border-indigo-500 border-y border-r border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
              <div className="font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Tek bir meslek kutusuna sığmayan yaklaşım</span>
              </div>
              <p>
                Hidrolik asansör sistemlerinden modern web yazılımlarına (Next.js, Supabase), Linux sunucularından AI agent mimarilerine ve otomotiv OBD arıza teşhisine kadar farklı disiplinlerde çalışıyorum. Bir problemi gördüğümde sadece teoride bırakmam; sistemi anlar, kurar, test eder ve otomatize ederim.
              </p>
            </div>

            {/* Philosophical Motto */}
            <div className="text-xs font-mono text-indigo-300 tracking-wide font-semibold">
              &ldquo;Merak ediyorum. Öğreniyorum. Kuruyorum. Otomatize ediyorum. Çözüyorum.&rdquo;
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setActiveTab("projects")}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-xl shadow-indigo-600/30 flex items-center gap-2 transition-all hover:scale-105"
              >
                <Boxes className="w-4 h-4" />
                Gerçek Projeleri İncele
              </button>

              <button
                onClick={() => setActiveTab("hydraulic-calc")}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-105"
              >
                <Calculator className="w-4 h-4 text-cyan-400" />
                Hidrolik Simülatörü Aç
              </button>

              <button
                onClick={() => setActiveTab("troubleshooting")}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all"
              >
                <Wrench className="w-4 h-4 text-amber-400" />
                Arıza Teşhis & Vakalar
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

          {/* Multidisciplinary Synergy Pillars */}
          <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-2xl relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />

            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-slate-200 flex items-center gap-2">
                <Workflow className="w-4 h-4 text-indigo-400" />
                UZMANLIK KESİŞİM MATRİSİ
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Entegre
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3">
                <Gauge className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-200">Hidrolik & Mekanik Mühendislik</div>
                  <div className="text-[11px] text-slate-400">Silindir, pompa, motor, valf ve debi/basınç hesapları</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3">
                <DollarSign className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-200">Ticari Operasyon & Satış</div>
                  <div className="text-[11px] text-slate-400">Teklif, proforma, döviz kurları, KDV, stok & tedarik</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3">
                <Code2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-200">Yazılım & Modern Web</div>
                  <div className="text-[11px] text-slate-400">Next.js 16, TypeScript, Supabase, APIs, Vercel</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3">
                <Bot className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-200">Yapay Zekâ & Otonom Ajanlar</div>
                  <div className="text-[11px] text-slate-400">Hermes Agent, OmniRoute AI Router, Gemini Voice</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3">
                <Server className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-200">Linux, Docker & Sunucu</div>
                  <div className="text-[11px] text-slate-400">Ubuntu Server, Portainer, Reverse Proxy, SSH Tunnels</div>
                </div>
              </div>
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
              { id: "journey", label: "Hikâye & Felsefe", icon: <Compass className="w-4 h-4" /> },
              { id: "projects", label: "Gerçek Projeler & Vaka Analizleri", icon: <Boxes className="w-4 h-4" /> },
              { id: "hydraulic-calc", label: "Hidrolik Hesaplama Motoru", icon: <Gauge className="w-4 h-4" /> },
              { id: "troubleshooting", label: "Problem Çözme & Arıza Teşhis", icon: <Wrench className="w-4 h-4" /> },
              { id: "stack", label: "Teknoloji Haritası", icon: <Layers className="w-4 h-4" /> },
              { id: "terminal", label: "İnteraktif CLI", icon: <TerminalIcon className="w-4 h-4" /> },
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
              <span className="text-xs text-slate-500 font-medium">Filtre:</span>
              {[
                { id: "all", label: "Tümü" },
                { id: "engineering", label: "Mühendislik & ERP" },
                { id: "automation", label: "Otomasyon & Stok" },
                { id: "ai", label: "AI & Medya" },
                { id: "infrastructure", label: "Sunucu & Altyapı" },
                { id: "troubleshooting", label: "Arıza & Teşhis" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setProjectFilter(cat.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    projectFilter === cat.id
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

        {/* TAB 1: STORY & PHILOSOPHY */}
        {activeTab === "journey" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: The Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold">
                    <Compass className="w-4 h-4" />
                    <span>BİR BAŞLANGIÇTAN DEVAM EDEN TEKNOLOJİ YOLCULUĞUNA</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                    Sadece teknoloji kullanmıyorum; onu gerçek dünya problemlerine uyguluyorum.
                  </h2>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      Teknik bir sektörde, hidrolik asansör sistemlerinin içinde çalışarak başladım. Hidrolik valfler, silindirler, güç üniteleri, pompalar ve motorların fiziksel dünyadaki çalışma prensiplerini doğrudan sahada öğrendim. Müşterinin talebini teknik olarak analiz edip debi, basınç ve motor gücünü hesaplamak günlük işimin bir parçasıydı.
                    </p>
                    <p>
                      Aynı zamanda işin ticari operasyonlarını da yürüttüm; teklif hazırlama, döviz kurları, KDV hesaplamaları, müşteri bakiyeleri ve stok tedariği gibi süreçlerin içinde bulundum.
                    </p>
                    <p>
                      Süreçlerdeki tekrarlayan manuel işleri gördükçe her zaman şu soruyu sordum:
                      <strong className="text-white block font-mono mt-1 p-2 bg-slate-950 rounded-lg border border-slate-800">
                        &ldquo;Bir iş sürekli tekrar ediliyorsa, bunu neden insan yapıyor? Yazılımla veya otomasyonla çözülebilir mi?&rdquo;
                      </strong>
                    </p>
                    <p>
                      Önce Excel ve Microsoft Access ile dinamik teklif ve hesaplama sistemleri kurdum. Ardından modern web teknolojilerine (Next.js, Supabase, TypeScript), Linux sunucularına, Docker konteynerlerine ve nihayetinde otonom yapay zekâ ajanlarına (AI Agents, OmniRoute) yöneldim.
                    </p>
                  </div>
                </div>

                {/* Problem Solving Framework */}
                <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-4">
                  <h3 className="text-sm font-bold font-mono text-cyan-400 flex items-center gap-2">
                    <Workflow className="w-4 h-4" />
                    PROBLEM ÇÖZME METODOLOJİM
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs font-mono">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-indigo-400 font-bold">1. Parçala</div>
                      <div className="text-[10px] text-slate-400 mt-1">Problemi köklerine ayır</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-cyan-400 font-bold">2. Anla</div>
                      <div className="text-[10px] text-slate-400 mt-1">Sistemi ve fiziğini çöz</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-emerald-400 font-bold">3. Veri Topla</div>
                      <div className="text-[10px] text-slate-400 mt-1">Sensör, log, katalog</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-amber-400 font-bold">4. Test Et</div>
                      <div className="text-[10px] text-slate-400 mt-1">Çözümü doğrula</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-purple-400 font-bold">5. Kur & Otomatize Et</div>
                      <div className="text-[10px] text-slate-400 mt-1">Kalıcı sistem yap</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Character Traits & Practical Mindset */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4">
                  <h3 className="text-sm font-bold font-mono text-slate-200 flex items-center gap-2 border-b border-slate-800 pb-3">
                    <Award className="w-4 h-4 text-emerald-400" />
                    TEMEL ÇALIŞMA KARAKTERİ
                  </h3>

                  <div className="space-y-3 text-xs">
                    {[
                      {
                        title: "Teknik Merak & Kurcalama",
                        desc: "Bir şey hazır gelse bile arkasında nasıl çalıştığını, mimarisini ve nasıl geliştirilebileceğini incelerim.",
                      },
                      {
                        title: "Pratik ve Uygulama Odaklı",
                        desc: "Yalnızca teoride kalmam; sahada çalışan, test edilmiş, gerçek fayda üreten sistemleri önemserim.",
                      },
                      {
                        title: "Kök Neden Araştırmacısı",
                        desc: "Bir otomobil arıza kodu da olsa, çöken bir Linux servisi veya 503 veren API da olsa nedenini loglardan bulurum.",
                      },
                      {
                        title: "Sıfır Gösteriş, Maksimum Sonuç",
                        desc: "Popüler olduğu için değil, gerçek bir problemi çözdüğü için teknoloji seçerim.",
                      },
                      {
                        title: "Ticari & Teknik Bütünlük",
                        desc: "Ürünün teknik mühendisliği kadar fiyatlandırmasını, teklifini, stok ve teslimat lojistiğini de yönetebilirim.",
                      },
                    ].map((trait, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                        <div className="font-bold text-white flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{trait.title}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 pl-5 leading-relaxed">{trait.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Signature Block */}
                <div className="bg-gradient-to-br from-indigo-950/50 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 text-center space-y-3">
                  <div className="text-xs font-mono text-indigo-300">PORTFOLYO SİTESİNİN MESAJI</div>
                  <div className="text-lg font-black text-white">
                    &ldquo;Teknik bilgi ile gerçek dünya problemleri arasında köprü kuruyorum.&rdquo;
                  </div>
                  <p className="text-xs text-slate-400">
                    Sürekli yeni teknolojiler öğreniyor, yeni otomasyonlar geliştiriyor ve mevcut iş süreçlerini daha verimli hale getiriyorum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PROJECTS & DETAILED CASE STUDIES */}
        {activeTab === "projects" && (
          <div className="space-y-8">
            {/* Grid of Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedProjectId(p.id)}
                  className={`cursor-pointer group relative bg-slate-900/70 border rounded-3xl p-6 flex flex-col justify-between transition-all hover:scale-[1.01] hover:shadow-2xl ${
                    selectedProjectId === p.id
                      ? "border-indigo-500 bg-slate-900 ring-2 ring-indigo-500/20 shadow-indigo-500/10"
                      : "border-slate-800/90 hover:border-slate-700"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-[11px] font-mono font-semibold text-indigo-300 border border-slate-700/60 capitalize">
                        {p.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500 group-hover:text-slate-300 flex items-center gap-1">
                        İncele <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">{p.tagline}</p>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[11px] text-slate-300 space-y-1">
                      <div className="text-indigo-400 font-bold font-mono">PROBLEM:</div>
                      <p className="line-clamp-2">{p.problem}</p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {p.techStack.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-800/60 text-[10px] font-mono text-slate-300">
                        {t}
                      </span>
                    ))}
                    {p.techStack.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                        +{p.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Project Full Problem-to-Solution Deep Dive */}
            <div className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-bold">
                      VAKA ANALİZİ (CASE STUDY)
                    </span>
                    <span className="text-xs text-slate-400 font-mono">• {currentProject.tagline}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
                    {currentProject.title}
                  </h2>
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

              {/* Problem -> Approach -> Solution -> Result Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-950/70 border border-red-500/20 space-y-2">
                  <div className="text-xs font-mono font-bold text-red-400 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    1. KARŞILAŞILAN GERÇEK PROBLEM
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{currentProject.problem}</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/70 border border-amber-500/20 space-y-2">
                  <div className="text-xs font-mono font-bold text-amber-400 flex items-center gap-2">
                    <Compass className="w-4 h-4" />
                    2. İZLENEN YAKLAŞIM & METODOLOJİ
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{currentProject.approach}</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/70 border border-indigo-500/20 space-y-2">
                  <div className="text-xs font-mono font-bold text-indigo-400 flex items-center gap-2">
                    <Workflow className="w-4 h-4" />
                    3. GELİŞTİRİLEN SİSTEM & ÇÖZÜM
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{currentProject.solution}</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/70 border border-emerald-500/20 space-y-2">
                  <div className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    4. SOMUT SONUÇ & KAZANIM
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{currentProject.result}</p>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400">Kullanılan Araçlar:</span>
                  {currentProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-indigo-950/50 border border-indigo-500/30 text-xs font-mono text-indigo-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-mono text-slate-500">
                  Problem Çözüldü ve Canlıya Alındı ✓
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: INTERACTIVE HYDRAULIC SIMULATOR (EN 81-20) */}
        {activeTab === "hydraulic-calc" && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-cyan-300">
                  EN 81-20 HİDROLİK ASANSÖR GERÇEK ZAMANLI HESAPLAMA MOTORU
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                İnteraktif Hidrolik Silindir, Debi & Motor Simülatörü
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                Hidrolik asansör projelerinde kullandığım hesaplama mantığı: Parametreleri değiştirerek dinamik etkiyen kuvveti ($F_{'{acting}'} = 1.4 \cdot g \cdot ((M_{'{car}'} + Q) \cdot \text{ratio} + M_{'{ram}'})$), gerekli silindir debisini ($Q_{'{lpm}'}$) ve tahmini motor gücünü ($kW$) anlık hesaplayın.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Controls Column */}
              <div className="lg:col-span-6 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-5">
                <h4 className="text-sm font-bold font-mono text-slate-200 flex items-center gap-2 border-b border-slate-800 pb-3">
                  <Sliders className="w-4 h-4 text-indigo-400" />
                  MÜHENDİSLİK GİRİŞ PARAMETRELERİ
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

                {/* Speed Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">Kabin Seyir Hızı ($v$):</span>
                    <span className="text-purple-400 font-bold">{speed.toFixed(2)} m/s</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="1.0"
                    step="0.05"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="w-full accent-purple-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
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
                    HESAPLANAN TEKNİK ÇIKTILAR
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
                      <div className="text-xs font-mono text-slate-400">Gerekli Pompa Debisi ($Q$)</div>
                      <div className="text-2xl font-black font-mono text-cyan-400 mt-1">
                        {requiredFlowLpm.toFixed(1)} l/dak
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Piston hızına göre</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                      <div className="text-xs font-mono text-slate-400">Statik / Dinamik Basınç</div>
                      <div className="text-2xl font-black font-mono text-emerald-400 mt-1">
                        {staticPressureBar.toFixed(1)} / {dynamicPressureBar.toFixed(1)} bar
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Dolu yükte valf çalışma aralığı</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                      <div className="text-xs font-mono text-slate-400">Tahmini Motor Gücü</div>
                      <div className="text-2xl font-black font-mono text-amber-400 mt-1">
                        {estimatedMotorKw.toFixed(1)} kW
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Elektrik motoru seçimi</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                  <div className="text-slate-200 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Mühendislik + Yazılım Entegrasyonu</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Bu formüller, geliştirdiğim BLAIN ERP & MES sisteminde sipariş anında otomatik teklif çıkarma, malzeme listesi (BOM) oluşturma ve burkulma (Euler) hesaplarında doğrudan kullanılmaktadır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: TROUBLESHOOTING & PROBLEM SOLVING CASES */}
        {activeTab === "troubleshooting" && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-mono font-bold text-amber-300">
                  GERÇEK DÜNYA TEŞHİS & TROUBLESHOOTING GÜNLÜĞÜ
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                &ldquo;Bir şey çalışmıyorsa önce neden çalışmadığını anlamak isterim.&rdquo;
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                İster bir otomobilin NOx sensörü arıza kodu (P22FB) olsun, ister Linux sunucusundaki OOM çökmesi veya AI API'lerindeki HTTP 401/503 hatası olsun; hazır reçeteler yerine kök nedene inerek çözdüğüm gerçek vakalar:
              </p>

              {/* Search filter input */}
              <div className="pt-2 max-w-md">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={searchProblem}
                    onChange={(e) => setSearchProblem(e.target.value)}
                    placeholder="Vaka veya hata ara (örn: P0420, 503, RAM, OBD...)"
                    className="w-full bg-slate-950/90 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50"
                  />
                </div>
              </div>
            </div>

            {/* Case list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCases.map((item, idx) => (
                <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4 hover:border-slate-700 transition-colors">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                      {item.code}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{item.domain}</span>
                  </div>

                  <h3 className="text-base font-bold text-white">{item.title}</h3>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                      <span className="text-red-400 font-bold font-mono">Belirti / Semptom:</span>
                      <p className="text-slate-300">{item.symptom}</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                      <span className="text-cyan-400 font-bold font-mono">Teşhis & Analiz Yaklaşımı:</span>
                      <p className="text-slate-300 leading-relaxed">{item.approach}</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-emerald-500/20 space-y-1">
                      <span className="text-emerald-400 font-bold font-mono">Kök Neden Çözümü:</span>
                      <p className="text-slate-300 leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: TECH STACK & CAPABILITIES MAP */}
        {activeTab === "stack" && (
          <div className="space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-400" />
                <span className="text-xs font-mono font-bold text-indigo-300">
                  TEKNOLOJİ YAKLAŞIMI: KULLANDIM • ARAŞTIRDIM • GELİŞTİRDİM • UYGULADIM
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Sistem ve Teknoloji Envanteri
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                Teknolojileri abartılı unvanlarla sıralamak yerine, gerçek hayatta hangi problemleri çözmek için araştırdığımı ve uyguladığımı paylaşıyorum:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Frontend & Web Geliştirme",
                  icon: <Code2 className="w-5 h-5 text-indigo-400" />,
                  items: [
                    { name: "Next.js (App Router)", context: "Kurumsal ERP & portfolyo portalları" },
                    { name: "React 19 & TypeScript", context: "Tip güvenli modüler kullanıcı arayüzleri" },
                    { name: "Tailwind CSS v4", context: "Hızlı, hafif ve modern arayüz tasarımı" },
                    { name: "Vite & Modern JS", context: "Hızlı prototipleme ve istemci araçları" },
                  ],
                },
                {
                  title: "Backend, Veri & Depolama",
                  icon: <Database className="w-5 h-5 text-cyan-400" />,
                  items: [
                    { name: "Supabase (PostgreSQL)", context: "Auth, RLS veri güvenliği, Realtime ve Storage" },
                    { name: "RESTful & WebSocket APIs", context: "Servisler arası gerçek zamanlı veri akışı" },
                    { name: "Firebase & Cloudflare R2", context: "Statik medya ve bulut depolama" },
                    { name: "Excel & MS Access", context: "İş süreçleri ve teklif tablolarının otomasyonu" },
                  ],
                },
                {
                  title: "Yapay Zekâ & Ajan Mimarisi",
                  icon: <Bot className="w-5 h-5 text-purple-400" />,
                  items: [
                    { name: "AI Agents (Hermes Agent)", context: "Sunucuda gerçek iş ve dosya yöneten otonom ajanlar" },
                    { name: "OmniRoute & Model Routing", context: "OpenAI uyumlu API'ler ve akıllı failover gateway" },
                    { name: "Obsidian Knowledge Graph", context: "Ajanlar için çift yönlü Git senkronizasyonlu hafıza" },
                    { name: "Gemini Voice & Multimodal", context: "Stüdyo kalitesinde seslendirme ve medya analizi" },
                  ],
                },
                {
                  title: "Linux & Sunucu Altyapısı",
                  icon: <Server className="w-5 h-5 text-emerald-400" />,
                  items: [
                    { name: "Ubuntu Server", context: "Sunucu yönetimi, systemd servisleri ve log analizi" },
                    { name: "Docker & Portainer", context: "İzole servisler ve konteyner orkestrasyonu" },
                    { name: "Reverse Proxy & SSH Tunnels", context: "Güvenli uzaktan erişim ve port yönetimi" },
                    { name: "PM2 Process Manager", context: "24/7 çalışan arka plan iş parçacıkları kümesi" },
                  ],
                },
                {
                  title: "Mühendislik & Hidrolik",
                  icon: <Gauge className="w-5 h-5 text-amber-400" />,
                  items: [
                    { name: "EN 81-20 Standartları", context: "Hidrolik asansör güvenlik ve mühendislik normları" },
                    { name: "Debi, Basınç & Motor Gücü", context: "Silindir çapı ve pompa debisi hesapları" },
                    { name: "Valfler & Güç Üniteleri", context: "Blain hidrolik valf seçimi ve tank kapasitesi" },
                    { name: "Dinamik ROP Modellemesi", context: "İstatistiksel talep varyansına göre emniyet stoku" },
                  ],
                },
                {
                  title: "Teşhis & Donanım Araştırmaları",
                  icon: <Wrench className="w-5 h-5 text-rose-400" />,
                  items: [
                    { name: "OBD-II & ELM327", context: "Araç ECU sensör verileri ve arıza kodu teşhisi" },
                    { name: "NOx & DPF Emisyon Sistemleri", context: "Sensör sinyal döngüleri ve egzoz analizleri" },
                    { name: "QR Kod Entegrasyonu", context: "Mobil cihazlarla depo stok hareketi takibi" },
                    { name: "HTTP Error Debugging", context: "401, 503, CORS ve timeout kök neden çözümleri" },
                  ],
                },
              ].map((category, idx) => (
                <div key={idx} className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-800 rounded-xl border border-slate-700/60">
                      {category.icon}
                    </div>
                    <h4 className="text-sm font-bold text-white">{category.title}</h4>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    {category.items.map((item, iIdx) => (
                      <div key={iIdx} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-0.5">
                        <div className="text-xs font-bold text-indigo-300 font-mono">{item.name}</div>
                        <div className="text-[11px] text-slate-400">{item.context}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: INTERACTIVE TERMINAL */}
        {activeTab === "terminal" && (
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 font-mono shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-400 ml-2">murat@problem-solver:~ (zsh)</span>
              </div>
              <span className="text-[11px] text-slate-500">v3.0.0-cli</span>
            </div>

            {/* Terminal History */}
            <div className="space-y-4 min-h-[300px] max-h-[480px] overflow-y-auto text-xs sm:text-sm pr-2">
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
                placeholder='Komut yazın (örn: "whoami", "felsefe", "hidrolik", "qr-stok", "help")'
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
      </main>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex p-3 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
            <Mail className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Birlikte Yeni Sistemler ve Çözümler Kuralım
          </h2>

          <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
            Teknik bir problemi çözmek, iş süreçlerinizi otomatize etmek, hidrolik mühendislik hesaplamaları veya modern web & AI agent projeleri üzerine görüşmek için her zaman ulaşabilirsiniz.
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
          <span>Next.js 16 & Supabase</span>
          <span>•</span>
          <span>Problem Solver • Technology • Automation</span>
        </div>
        <p>© {new Date().getFullYear()} Murat Kuşcu. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
