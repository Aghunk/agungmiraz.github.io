import { Project, Experience, Certification, SkillCategory } from "./types";

export const PERSONAL_INFO = {
  name: "AGUNG MIRAZ",
  title: "IT Hardware & Technical Support Specialist",
  subTitle: "Professional Infrastructure & Technical System Designer",
  location: "Sukabumi, Indonesia",
  email: "Agungmi39raz@gmail.com",
  phone: "+62 819-3020-0015",
  linkedin: "linkedin.com/in/agungmiraz/",
  relocation: "Switzerland",
  relocationTimeframe: "1–3 months",
  tagline: "Merancang infrastruktur IT yang kokoh, mengoptimalkan tata letak sistem perangkat keras, dan mendesain alur kerja dukungan teknis berkinerja tinggi.",
  summary: "Seorang profesional IT Hardware dan Technical Support dengan pengalaman lebih dari 5 tahun di bidang pemeliharaan perangkat keras, jaringan, pemecahan masalah (troubleshooting), dan dukungan sistem. Sangat andal dalam mendiagnosis masalah teknis secara efisien, mendukung pengguna akhir (end-user), dan menjaga fungsionalitas infrastruktur IT di lingkungan produksi agar berjalan stabil tanpa gangguan. Memiliki kemampuan komunikasi yang andal untuk bekerja secara kolaboratif dalam lingkungan multikultural. Saat ini mencari peluang karir internasional di Swiss melalui program Young Professionals."
};

export const PROJECTS: Project[] = [
  {
    id: "network-architecture",
    title: "Enterprise LAN Network Blueprint",
    category: "Network Topology Design",
    description: "Desain arsitektur jaringan LAN untuk pabrik manufaktur berskala besar dengan redundansi tinggi dan sistem keamanan modular.",
    details: "Merancang skema kabel terstruktur, konfigurasi VLAN untuk memisahkan lalu lintas data lini produksi, manajemen, dan jaringan tamu. Mengintegrasikan teknologi pencegahan loop (STP), konfigurasi switch Inti (Core Switch), serta firewall sebagai guard pintu gerbang guna memastikan ketersediaan koneksi 99.98% dan meminimalkan potensi latency interferensi.",
    tags: ["Topology Design", "VLAN Segregation", "LAN Architecture", "IP Subnetting"],
    imagePrompt: "minimalist technical networking diagram, thin lines, blueprint style, high tech, dark gray and white slate background, beautiful tech schematic, illustration vector style",
    imageFilename: "network_blueprint",
    stats: [
      { label: "Kapasitas Node", value: "500+ Devices" },
      { label: "Target Uptime", value: "99.98%" },
      { label: "VLAN Segments", value: "6 Subnets" }
    ]
  },
  {
    id: "workstation-ergonomics",
    title: "Ergonomic & Airflow Workspace Layout",
    category: "Hardware Logistics Design",
    description: "Konsep tata letak workstation teknis dengan keandalan pendinginan perangkat keras, manajemen kabel presisi, dan proteksi listrik.",
    details: "Merancang skema fisik workstation untuk ruang monitoring server dan teknis. Skema ini mengutamakan manajemen aliran udara (airflow) untuk mencegah overheating perangkat keras utama, integrasi stop kontak listrik ter-grounding penuh guna menangkal sirkuit pendek listrik (surge protection), serta manajemen kabel struktural di bawah meja kerja yang bebas hambatan.",
    tags: ["Workspace Layout", "Airflow Design", "Surge Protection", "Cable Management"],
    imagePrompt: "minimalist blueprint style 3D layout drawing of workstation console, clean industrial design, slate accent lines, architectural sketch, blueprint layout vector style",
    imageFilename: "workstation_layout",
    stats: [
      { label: "Suhu Maksimum", value: "22°C Server Room" },
      { label: "Proteksi Ground", value: "<1 Ohm resistance" },
      { label: "Rasio Kerapihan", value: "100% Hidden Cables" }
    ]
  },
  {
    id: "endpoint-gpo",
    title: "Endpoint Security & GPO Architecture",
    category: "Policy & Directory Design",
    description: "Arsitektur restriksi sistem operasi dan kebijakan grup (GPO) untuk standarisasi keamanan ratusan PC produksi.",
    details: "Mendesain struktur Organisasi Unit (OU) di Active Directory Windows Server guna memblokir malware di lini akhir. Membatasi hak instalasi aplikasi sembarangan, menerapkan audit mutlak pelacakan aktivitas USB drive guna mencegah kebocoran data penting perusahaan (DLP), serta mengotomatiskan naskah backup harian untuk dokumen penting teknis.",
    tags: ["Active Directory", "Group Policy (GPO)", "Endpoint Security", "DLP System"],
    imagePrompt: "minimalist abstract hierarchy representation of active directory folders and user computer access control permissions, vector design, modern UI background elements",
    imageFilename: "system_gpo_design",
    stats: [
      { label: "Sistem Terlindungi", value: "320+ Workstations" },
      { label: "Jumlah Kebijakan", value: "48 GPOs" },
      { label: "Downtime Kebijakan", value: "0% Standard" }
    ]
  },
  {
    id: "servicedesk-workflow",
    title: "Incident SLA Workflow Optimization",
    category: "Workflow & System Design",
    description: "Desain operasional alur kerja helpdesk tiket dan skema eskalasi berbasis tingkat keparahan gangguan IT lokal.",
    details: "Meresposn tumpukan antrean tiket keluhan dengan mendesain alur kerja respons cepat terpadu. Membagi kriteria insiden menjadi 3 tingkat penanganan (Level 1: Helpdesk dasar, Level 2: Spesialis Hardware, Level 3: Network/Admin Infrastruktur). Mengintegrasikan basis data pengetahuan (Knowledge Base) kendala umum printer dan periferal untuk penyelesaian mandiri yang menghemat waktu tunggu SLA.",
    tags: ["Process Design", "SLA Performance", "Helpdesk Funnel", "Resolution Workflow"],
    imagePrompt: "beautiful technical pipeline process flow, minimalist arrows, UI schema, user flow diagram, elegant vector slate styling",
    imageFilename: "servicedesk_flow",
    stats: [
      { label: "Rerata Waktu Respons", value: "15 Menit" },
      { label: "Tingkat Resolusi L1", value: "70% Mandiri" },
      { label: "Indeks Kepuasan", value: "4.8 / 5.0 Star" }
    ]
  }
];

export const EXPERIENCE_HISTORY: Experience[] = [
  {
    company: "PT. Pratama Abadi Industri (JX)",
    role: "IT Hardware / Technical Support Staff",
    period: "2018 – Present",
    location: "Sukabumi, Indonesia",
    highlights: [
      "Melakukan pemeliharaan rutin, perakitan, dan perbaikan perangkat keras komputer (PC, laptop) serta stasiun kerja operasional pabrik.",
      "Menangani pemecahan masalah (troubleshooting) jaringan lokal (LAN, Wi-Fi) dan mengatasi kendala perangkat lunak maupun keras secara tanggap.",
      "Mendukung aktivitas instalasi, konfigurasi awal sistem operasi, peningkatan perangkat keras, serta migrasi sistem perangkat penunjang.",
      "Menyediakan bantuan teknis operasional harian (Helpdesk) untuk pengguna akhir di berbagai departemen guna menjaga stabilitas kerja.",
      "Membantu penyelesaian kendala konektivitas server pabrik, pemindai barcode, printer industrial, dan infrastruktur periferal penunjang produksi lainnya."
    ]
  }
];

export const EDUCATION_HISTORY = [
  {
    institution: "AMIK Citra Buana Indonesia",
    degree: "Diploma (D3) in Computerized Accounting",
    period: "2015 – 2018",
    description: "Menggabungkan studi dasar-dasar akuntansi keuangan industri dengan pemrograman basis data sistem informasi dan administrasi teknologi komputerisasi kantor."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Google IT Support Professional Certificate (v.3)",
    issuer: "Google via Coursera",
    year: 2026
  },
  {
    title: "Junior Technical Support",
    issuer: "Badan Diklat Nasional",
    year: 2016
  },
  {
    title: "Microsoft Introduction to Computers",
    issuer: "Microsoft via Coursera",
    year: 2025
  },
  {
    title: "Microsoft Introduction to Secure Networking",
    issuer: "Microsoft via Coursera",
    year: 2025
  },
  {
    title: "Essential Aspects of Software, Hardware and Data Backup",
    issuer: "Google via Coursera",
    year: 2025
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Technical Skills",
    skills: [
      "Hardware Troubleshooting & Maintenance",
      "Networking & Basic Infrastructure Support",
      "System Installation & Configuration",
      "Printer & Peripheral Support",
      "Windows Operating Systems",
      "Technical Support & Helpdesk Specialists",
      "Basic Network Troubleshooting",
      "Remote Support & Desktop Management Tool"
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      "Effective Professional Communication",
      "Collaborative Team Leadership",
      "Adaptive Goal & Time Management",
      "Critical Problem Solving",
      "High Adaptability in Multicultural Teams"
    ]
  },
  {
    title: "Languages",
    skills: [
      "Bahasa Indonesia (Native / Ibu)",
      "English (Professional Working Proficiency)"
    ]
  }
];
