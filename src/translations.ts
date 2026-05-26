export type Language = "en" | "ja" | "de" | "fr";

export interface TranslationData {
  header: {
    about: string;
    works: string;
    experience: string;
    skills: string;
    contact: string;
    emailMe: string;
    subLogo: string;
    contactNow: string;
  };
  hero: {
    statusActive: string;
    statusSwitzerland: string;
    experienceCount: string;
    experienceLabel: string;
    certCount: string;
    certLabel: string;
    btnWorks: string;
    btnContact: string;
    scrollDown: string;
    technicalDossier: string;
    hardwareCompliant: string;
    supportSpecialist: string;
    relocationTitle: string;
    relocationValue: string;
  };
  works: {
    preTitle: string;
    title: string;
    subTitle: string;
    aestheticBadgeTitle: string;
    aestheticBadgeText: string;
    allTab: string;
    detailBlueprint: string;
    cadTitle: string;
    methedologyTitle: string;
    methodologyText: string;
    paramTitle: string;
    regionTitle: string;
    regionValue: string;
    techTitle: string;
    cadBtn: string;
    cadAlert: string;
  };
  experience: {
    preTitle: string;
    title: string;
    subTitle: string;
    workHeader: string;
    eduHeader: string;
    currentJobBadge: string;
    jobHighlightHeader: string;
    reloBadgeTitle: string;
    reloHeader: string;
    reloText: string;
    reloSla: string;
    reloSlaVal: string;
    reloStatus: string;
    reloStatusVal: string;
    reloDocs: string;
    reloDocsVal: string;
  };
  skills: {
    preTitle: string;
    title: string;
    subTitle: string;
    tabSkills: string;
    tabCerts: string;
    searchPlaceholder: string;
    filterYear: string;
    filterAll: string;
    provenCapability: string;
    langTitle: string;
    verifiedBadge: string;
    noResults: string;
    resetFilters: string;
  };
  contact: {
    preTitle: string;
    title: string;
    subTitle: string;
    formHeader: string;
    errRequired: string;
    successTitle: string;
    successText: string;
    labelName: string;
    labelEmail: string;
    labelSubject: string;
    labelMessage: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderSubject: string;
    placeholderMessage: string;
    btnSubmit: string;
    btnSubmitting: string;
    directContactTitle: string;
    phoneLabel: string;
    linkedinLabel: string;
    sandboxPreTitle: string;
    sandboxTitle: string;
    sandboxDesc: string;
    sandboxReset: string;
    sandboxEmptyTitle: string;
    sandboxEmptyDesc: string;
  };
  footer: {
    desc: string;
    navTitle: string;
    about: string;
    works: string;
    experience: string;
    skills: string;
    contact: string;
    specTitle: string;
    fontSpec: string;
    securitySpec: string;
    structureSpec: string;
    footerRef: string;
    designRef: string;
  };
  personal: {
    name: string;
    title: string;
    tagline: string;
    summary: string;
  };
  projects: {
    id: string;
    title: string;
    category: string;
    description: string;
    details: string;
    tags: string[];
    stats: { label: string; value: string }[];
  }[];
  experiences: {
    company: string;
    role: string;
    period: string;
    location: string;
    highlights: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    period: string;
    description: string;
  }[];
  certifications: {
    title: string;
    issuer: string;
    year: number;
  }[];
  skillCategories: {
    title: string;
    skills: string[];
  }[];
}

export const TRANSLATIONS: Record<Language, TranslationData> = {
  en: {
    header: {
      about: "About",
      works: "Systems Design",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact Me",
      emailMe: "Email Me",
      subLogo: "IT Systems Portfolio",
      contactNow: "Contact Now",
    },
    hero: {
      statusActive: "Active Now",
      statusSwitzerland: "Swiss Candidate (1-3 Mo)",
      experienceCount: "5+ Years",
      experienceLabel: "Work Experience",
      certCount: "5 Certs",
      certLabel: "Industry Accredited",
      btnWorks: "View Systems Design",
      btnContact: "Contact Agung",
      scrollDown: "SCROLL DOWN",
      technicalDossier: "TECHNICAL DOSSIER",
      hardwareCompliant: "HARDWARE COMPLIANT",
      supportSpecialist: "Support & Diagnostics Specialist",
      relocationTitle: "RELO INTENT:",
      relocationValue: "SWITZERLAND 🇨🇭",
    },
    works: {
      preTitle: "SYSTEM DESIGN & INFRASTRUCTURE",
      title: "Systems Design & IT Blueprint Gallery",
      subTitle: "Focused on IT Support, Agung designs smart system architectures, modular cabling diagrams, hardware unit cooling layouts, and high-quality incident handling flows.",
      aestheticBadgeTitle: "DESIGN AESTHETIC",
      aestheticBadgeText: "High-precision Swiss minimalist style, relying on functional details without larping.",
      allTab: "All Designs",
      detailBlueprint: "Blueprint Details",
      cadTitle: "PROJECT CASE STUDY Blueprint",
      methedologyTitle: "Functionality & Architectural Role",
      methodologyText: "This design is fully optimized for the manufacturing floor environment at PT Pratama Abadi Industri (JX). Agung pairs robust network redundancy principles with optimal thermodynamic configurations to keep hardware nodes cool and prevent system bottlenecks under operational stress.",
      paramTitle: "TECHNICAL PARAMETERS",
      regionTitle: "IMPLEMENTATION FIELD",
      regionValue: "Sukabumi, West Java",
      techTitle: "INTEGRATED TECHNOLOGIES & METHODS",
      cadBtn: "DOWNLOAD CAD BLUEPRINT",
      cadAlert: "Simulator Action: CAD Blueprint .dwv file virtually compiled and prepared for download.",
    },
    experience: {
      preTitle: "PROFESSIONAL FOOTPRINT",
      title: "Work History & Education",
      subTitle: "Agung's professional career spans over 5 years of ensuring industrial IT infrastructure stability inside a large production facility, anchored by structured computerized accounting knowledge.",
      workHeader: "Work History Timeline",
      eduHeader: "Official Education History",
      currentJobBadge: "Active Now",
      jobHighlightHeader: "DUTIES AND CORE RESPONSIBILITIES",
      reloBadgeTitle: "SWITZERLAND RELOCATION",
      reloHeader: "Young Professionals Program Ready",
      reloText: "Agung is prepared and ready to relocate to Switzerland within 1–3 months. Fully eligible under the Young Professionals bilateral agreement between Indonesia and Switzerland for skilled technical specialists.",
      reloSla: "RELOCATION SLA:",
      reloSlaVal: "1–3 MONTHS",
      reloStatus: "HEALTH STATUS:",
      reloStatusVal: "FIT & READY",
      reloDocs: "SUPPORTING DOCS:",
      reloDocsVal: "COMPLETE & VALID",
    },
    skills: {
      preTitle: "INTEGRATED COMPETENCIES",
      title: "Technical Skills & Certifications",
      subTitle: "In-depth expertise in hardware diagnostics and repair, local network setup, GPO design, security policy implementation, and global industry credentials.",
      tabSkills: "Skills & Keywords",
      tabCerts: "Accredited Certifications",
      searchPlaceholder: "Search certifications (Google, Microsoft, etc...)",
      filterYear: "Year:",
      filterAll: "ALL",
      provenCapability: "PROVEN CAPABILITY",
      langTitle: "Languages & Communication",
      verifiedBadge: "VERIFIED SECURE",
      noResults: "No certifications match your active search terms.",
      resetFilters: "Reset Search Filters",
    },
    contact: {
      preTitle: "CONNECT WITH AGUNG",
      title: "Inquiries & Job Offers",
      subTitle: "Send a direct inquiry regarding job placement, infrastructure consulting, system design collaboration, or technical service requests.",
      formHeader: "DIGITAL DISPATCH FORM",
      errRequired: "Please fill out all required fields (Name, Email, and Message).",
      successTitle: "Message Dispatched Successfully!",
      successText: "Thank you for reaching out. Please check the simulated local inbox console on the right side to inspect the real-time payload.",
      labelName: "Full Name",
      labelEmail: "Email Address",
      labelSubject: "Subject / Matter",
      labelMessage: "Detailed Message",
      placeholderName: "e.g., John Doe",
      placeholderEmail: "john.doe@company.com",
      placeholderSubject: "IT Support Job Placement - Switzerland",
      placeholderMessage: "Type your inquiry or career proposal details here...",
      btnSubmit: "Send Message",
      btnSubmitting: "Sending...",
      directContactTitle: "DIRECT OUTREACH CHANNELS",
      phoneLabel: "Phone / WhatsApp",
      linkedinLabel: "Professional Network",
      sandboxPreTitle: "VIRTUAL INBOX SIMULATOR (LOCAL)",
      sandboxTitle: "Local Sandbox Inbox Console",
      sandboxDesc: "Submit the form on the left! It will immediately append the message payload directly to the simulated list below, stored securely in your browser's localStorage.",
      sandboxReset: "RESET",
      sandboxEmptyTitle: "SANDBOX EMPTY",
      sandboxEmptyDesc: "Send your first message from the form to view live simulated deliveries here!",
    },
    footer: {
      desc: "An IT Hardware and Technical Support Specialist with a passion for designing highly resilient networks, clean physical workstation layouts, and bulletproof support workflows.",
      navTitle: "CORE SITEMAP",
      about: "About Agung",
      works: "Designs & Blueprints",
      experience: "Work History",
      skills: "Technical Skills",
      contact: "Contact Information",
      specTitle: "TECHNICAL SYSTEM SPECIFICATION",
      fontSpec: "Typography: Inter & JetBrains Mono",
      securitySpec: "Security: GPO System Hardened",
      structureSpec: "Structure: React SPA + Tailwind CSS",
      footerRef: "PORTFOLIO SYSTEM © 2026. ALL RIGHTS RESERVED.",
      designRef: "Designed in Alabaster Minimalist Style",
    },
    personal: {
      name: "AGUNG MIRAZ",
      title: "IT Hardware & Technical Support Specialist",
      tagline: "Designing robust IT infrastructures, optimizing hardware system layouts, and structuring high-performance technical support workflows.",
      summary: "An IT Hardware and Technical Support professional with more than 5 years of hands-on experience in component repair, networking, deep troubleshooting, and multi-node systems logistics. Highly effective in diagnosing physical hardware failures, supporting complex corporate end-users, and keeping key manufacturing shopfloor networks fully secure and online. Currently seeking challenging global placements under Switzerland's bilateral Young Professionals scheme.",
    },
    projects: [
      {
        id: "network-architecture",
        title: "Enterprise LAN Network Blueprint",
        category: "Network Topology Design",
        description: "Robust local network architecture for highly demanding industrial environments with structural GPO constraints, fiber pathways, and high availability switches.",
        details: "Constructed detailed structural VLAN layouts mapping out secure segregations for manufacturing floor machinery, management terminals, and public guest channels. Deployed Loop Prevention protocols (STP/RSTP), secure static ARP routing, and physical firewalls to maintain a 99.98% operational SLA.",
        tags: ["Topology Design", "VLAN Segregation", "LAN Architecture", "IP Subnetting"],
        stats: [
          { label: "Node Capacity", value: "500+ Devices" },
          { label: "Target Uptime", value: "99.98%" },
          { label: "VLAN Segments", value: "6 Subnets" }
        ]
      },
      {
        id: "workstation-ergonomics",
        title: "Ergonomic & Airflow Workspace Layout",
        category: "Hardware Logistics Design",
        description: "Workspace blueprint optimizing component thermals, physical cabling channels, and precise static discharge grounding loops.",
        details: "Designed a clean industrial console configuration for Server Rooms and physical monitoring desks. Incorporates structured aerodynamic paths preventing dust accumulation and thermals bottlenecks, along with standard electrical protection to buffer mains surges.",
        tags: ["Workspace Layout", "Airflow Design", "Surge Protection", "Cable Management"],
        stats: [
          { label: "Ambient Temp", value: "22°C Server Room" },
          { label: "Ground Protection", value: "<1 Ohm resistance" },
          { label: "Cables Routed", value: "100% Intersected" }
        ]
      },
      {
        id: "endpoint-gpo",
        title: "Endpoint Security & GPO Architecture",
        category: "Policy & Directory Design",
        description: "Active Directory policy blueprints mapping out hardened workstation roles for hundreds of production endpoints.",
        details: "Formulated robust Group Policy objects standardizing Windows security states. Locks down USB removable storage vectors to prevent data loss or malware intrusions, and schedules secure local backup pipelines to isolate active machine configurations.",
        tags: ["Active Directory", "Group Policy (GPO)", "Endpoint Security", "DLP System"],
        stats: [
          { label: "Managed Nodes", value: "320+ Workstations" },
          { label: "GPO Count", value: "48 Policies" },
          { label: "Vulnerability State", value: "Fully Locked" }
        ]
      },
      {
        id: "servicedesk-workflow",
        title: "Incident SLA Workflow Optimization",
        category: "Workflow & System Design",
        description: "Operational ticket escalation flow routing technical issues between tiers with tight SLA turnaround goals.",
        details: "Reworked technical ticket routing channels to minimize response latency. Tiered issues clearly: Level 1 handles peripherals, printers, and basic client networks. Escalates to Level 2 and Level 3 specialists via automated incident logic, utilizing structured knowledge indexes.",
        tags: ["Process Design", "SLA Performance", "Helpdesk Funnel", "Resolution Workflow"],
        stats: [
          { label: "Mean Response", value: "15 Minutes" },
          { label: "L1 Resolution", value: "70% Self-service" },
          { label: "Satisfaction", value: "4.8 / 5.0 Rating" }
        ]
      }
    ],
    experiences: [
      {
        company: "PT. Pratama Abadi Industri (JX)",
        role: "IT Hardware / Technical Support Staff",
        period: "2018 – Present",
        location: "Sukabumi, Indonesia",
        highlights: [
          "Perform routine preventative maintenance, systems assembly, and manual repairs for industrial office units and manufacturing workspace nodes.",
          "Diagnose and resolve active local area network (LAN/Wi-Fi) connection bottlenecks and stabilize software configurations.",
          "Coordinate endpoint migrations, OS setups, and hardware performance enhancements across core operations departments.",
          "Maintain daily Technical Helpdesk operations to resolve staff tickets promptly, keeping downtime to a absolute minimum.",
          "Troubleshoot barcodes scanners, network printer configurations, network nodes, and industrial serial equipment interfaces."
        ]
      }
    ],
    education: [
      {
        institution: "AMIK Citra Buana Indonesia",
        degree: "Diploma (D3) in Computerized Accounting",
        period: "2015 – 2018",
        description: "Balanced deep financial database systems study with practical hands-on network setups, microcomputer applications, and system analysis models."
      }
    ],
    certifications: [
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
    ],
    skillCategories: [
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
          "Remote Support & Desktop Management Tools"
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
    ]
  },
  ja: {
    header: {
      about: "プロフィール",
      works: "システム設計",
      experience: "職歴",
      skills: "保有スキル",
      contact: "お問い合わせ",
      emailMe: "メール送信",
      subLogo: "ITシステムポートフォリオ",
      contactNow: "今すぐ連絡",
    },
    hero: {
      statusActive: "現在実務中",
      statusSwitzerland: "スイス移住候補者 (1〜3ヶ月以内)",
      experienceCount: "5年以上の経験",
      experienceLabel: "実務経験",
      certCount: "5つの認定資格",
      certLabel: "業界認定済",
      btnWorks: "システム設計を見る",
      btnContact: "アグンに連絡する",
      scrollDown: "下にスクロール",
      technicalDossier: "技術仕様書類",
      hardwareCompliant: "ハードウェア適合済",
      supportSpecialist: "サポート・トラブル診断スペシャリスト",
      relocationTitle: "移住の目的：",
      relocationValue: "スイス 🇨🇭",
    },
    works: {
      preTitle: "システム設計・インフラ",
      title: "システムアーキテクチャ・IT設計図ギャラリー",
      subTitle: "ITサポート技術に基づき、効率的なシステム設計、モジュール配線図、適切な冷却構造設計、および優れたインシデント処理手順（SLA）を構築しています。",
      aestheticBadgeTitle: "デザイン美学",
      aestheticBadgeText: "機能美を徹底重視した、シンプルかつ精密な高精度スイス製ミニマリズムスタイルです。",
      allTab: "すべての設計",
      detailBlueprint: "設計詳細図",
      cadTitle: "プロジェクト事例詳細",
      methedologyTitle: "機能性と物理的役割",
      methodologyText: "この設計図面は、PT Pratama Abadi Industri (JX) 製造現場に特化して最適化されています。アグンは、ネットワークの二重化と熱力学的レイアウトを最適化し、最大過負荷状態でも各ハードウェアノードを最適な温度に保ち、ボトルネック現象を完全に防止します。",
      paramTitle: "技術基準パラメータ",
      regionTitle: "対象導入領域",
      regionValue: "インドネシア・西ジャワ州スカブミ",
      techTitle: "統合技術とアプローチ手法",
      cadBtn: "CADブループリントをダウンロード",
      cadAlert: "シミュレーター警告: ブループリント用CAD .dwvデータがダウンロード用に生成されました（疑似処理）。",
    },
    experience: {
      preTitle: "プロフェッショナル実績",
      title: "職歴と主な学歴",
      subTitle: "大規模な産業用製造システムにおけるITインフラの安定性を5年以上にわたり維持管理し、実務的なコンピューティング財務データベースシステムを基盤にしています。",
      workHeader: "仕事の遍歴タイムライン",
      eduHeader: "正式な学歴一覧",
      currentJobBadge: "実務継続中",
      jobHighlightHeader: "業務説明と主要責任",
      reloBadgeTitle: "スイスへの国際移住",
      reloHeader: "ヤング・プロフェッショナル制度準備完了",
      reloText: "アグンは、スイス連邦への1〜3ヶ月以内の移住と就業が可能です。日本やスイスなどの多国間二国間協定に基づく「ヤング・プロフェッショナル」の技術職員基準に完全に適合しています。",
      reloSla: "移留想定期間：",
      reloSlaVal: "1〜3ヶ月以内",
      reloStatus: "健康診断状態：",
      reloStatusVal: "良好・即稼働可能",
      reloDocs: "必要書類整理：",
      reloDocsVal: "完全 / 有効",
    },
    skills: {
      preTitle: "保有資格・スキル一覧",
      title: "実用技術と言語・世界認定資格",
      subTitle: "ハードウェアの修理と原因診断、ローカル有線LAN/無線ネットワーク設定、GPOによる端末防御ポリシー、および主要企業認定資格をカバーしています。",
      tabSkills: "キーワード・実用スキル",
      tabCerts: "取得認定資格",
      searchPlaceholder: "資格名で検索 (Google, Microsoft など...)",
      filterYear: "取得年:",
      filterAll: "すべて",
      provenCapability: "実証済能力",
      langTitle: "対応可能言語と対話力",
      verifiedBadge: "認証済み安全基準",
      noResults: "入力されたキーワードに一致する認証資格が見つかりませんでした。",
      resetFilters: "検索条件をクリア",
    },
    contact: {
      preTitle: "アグンへのアクセス問い合わせ",
      title: "プロジェクト提案・求人相談",
      subTitle: "スイスでの雇用、インフラコンサルティング、設計システムの共創、テクニカルトラブル相談など、お気軽にお問い合わせください。",
      formHeader: "デジタル問い合わせフォーム",
      errRequired: "必須項目を入力してください (お名前、メールアドレス、本文)。",
      successTitle: "メッセージ送信成功!",
      successText: "送信ありがとうございました。右側のシミュレーターコンソールで、入力データのJSON構造を確認できます。",
      labelName: "お名前（企業名）",
      labelEmail: "メールアドレス",
      labelSubject: "件名 / お問い合わせ目的",
      labelMessage: "メッセージ詳細、ご提案内容",
      placeholderName: "例: 山田 太郎",
      placeholderEmail: "yamada.t@company.co.jp",
      placeholderSubject: "技術スタッフ求人に関わるスイスへの配置オファー",
      placeholderMessage: "こちらにお問い合わせの詳細を入力してください...",
      btnSubmit: "メッセージを送信する",
      btnSubmitting: "送信処理中...",
      directContactTitle: "直接連絡オプション",
      phoneLabel: "電話 / WhatsApp",
      linkedinLabel: "ビジネス SNS ネットワーク",
      sandboxPreTitle: "受信箱シミュレーター (ローカル保存)",
      sandboxTitle: "仮想メールサーバ制御盤",
      sandboxDesc: "左側のフォームからメッセージを入力して送信してください。ブラウザ内部のlocalStorageに直ちに保存され、このパネルに疑似受信としてレンダリングされます。",
      sandboxReset: "初期化",
      sandboxEmptyTitle: "受信一覧は空です",
      sandboxEmptyDesc: "左側のフォームからテストメッセージを書き込んで送信してください。ここで疑似パケットが監視できます。",
    },
    footer: {
      desc: "実務経験5年以上。高度なハードウェア保守、トラブル診断、セキュアなAD/GPO設計を通じて現場の信頼を勝ち取るIT専門スタッフです。",
      navTitle: "フッター・マップ",
      about: "プロフィール",
      works: "システム設計図",
      experience: "実務職歴",
      skills: "技術スキル・資格",
      contact: "連絡先情報",
      specTitle: "ポートフォリオシステム内部仕様",
      fontSpec: "書体基準: Inter & JetBrains Mono",
      securitySpec: "システム防御: GPO構成管理実施済",
      structureSpec: "実装構造: React SPA + Tailwind CSS",
      footerRef: "PORTFOLIO SYSTEM © 2026. ALL RIGHTS RESERVED.",
      designRef: "ミニマリズムスタイルのアラバスターデザイン",
    },
    personal: {
      name: "アグン・ミールズ (AGUNG MIRAZ)",
      title: "ITハードウェア＆テクニカルサポートスペシャリスト",
      tagline: "堅牢なITインフラストラクチャの設計、ハードウェアシステムレイアウトの最適化、および高性能テクニカルサポートワークフローの構築。",
      summary: "ハードウェアの精密メンテナンス、ネットワーク技術、障害解析、多拠点ロジスティクスを5年間実務で手がけてきた経験豊かなIT技術コーディネーターです。製造ラインなどの過酷な現場で動作するPC機器やネットワークを安全に統合します。現在「スイス・ヤングプロフェッショナル・プログラム」に則したグローバル雇用を探しており、即時移住準備が可能です。",
    },
    projects: [
      {
        id: "network-architecture",
        title: "エンタープライズ有線LAN設計図",
        category: "Network Topology Design",
        description: "高負荷産業用製造現場へ向けた完全二重化、物理冗長、厳格なADポリシー準拠のVLANネットワークモデルです。",
        details: "製造装置用ネットワーク、一般管理部門用チャネル、来客用Wi-Fiアクセス網を論理的なVLANセグメントとして論理隔離しました。RSTPなどを配備し、障害発生時にも切り替え時間「ゼロ」を目指す稼働率99.98%のシステム設計です。",
        tags: ["トポロジー設計", "VLAN分割管理", "有線LAN構造", "IPサブネッティング"],
        stats: [
          { label: "端末管理規模", value: "500台以上" },
          { label: "目標連続稼働率", value: "99.98%" },
          { label: "VLANセグメント数", value: "6系統" }
        ]
      },
      {
        id: "workstation-ergonomics",
        title: "エルゴノミクス冷却型ワークステーション",
        category: "Hardware Logistics Design",
        description: "冷却熱力学、物理配線モール設計、静電防止アース接地を極限まで計算した産業用デスク設計図です。",
        details: "サーバー運用監視室及び作業デスク用に設計された筐体です。防塵効果と空気の対流を両立した気流制御（Airflow）構造を施し、落雷対策の接地回路を組み込むことで機器破損を防ぎます。",
        tags: ["ワークステーション配置", "気流・冷却制御", "アース雷対策", "物理配線モジュール化"],
        stats: [
          { label: "目標室温制御", value: "サーバー室22°C以下" },
          { label: "接地アース抵抗値", value: "1Ω以下" },
          { label: "配線結束効率", value: "完全内部遮蔽" }
        ]
      },
      {
        id: "endpoint-gpo",
        title: "エンドポイントセキュリティとGPO設計",
        category: "Policy & Directory Design",
        description: "工場内の300台以上の製造支援用PCを中央から防衛するためのActive Directoryグループポリシー（GPO）モデルです。",
        details: "Windows端末の設定状態を細部まで管理するポリシーを作成。管理者権限不問での不正なUSBメモリ挿入によるマルウェア起動を抑制し、重要な社外データを保護(DLP)。また自動バックアップをタスクスケジューラで制御します。",
        tags: ["Active Directory", "グループポリシー(GPO)", "端末セキュリティ", "情報漏洩防止DLP"],
        stats: [
          { label: "制御実施端末数", value: "320台" },
          { label: "定義GPOポリシー数", value: "48条件" },
          { label: "脆弱危険度評価", value: "完全無力化済み" }
        ]
      },
      {
        id: "servicedesk-workflow",
        title: "障害チケット・SLA高速エスカレーション",
        category: "Workflow & System Design",
        description: "深刻度や障害切り分けに応じ、各サポートレベルへ自動ルーティングする最適化されたサポートフローです。",
        details: "現場の技術的問題が長時間滞留しないよう、障害チケットシステムを抜本再構築。一時受付(L1)からハードウェア物理診断(L2)、上位エンジニア(L3)へのエスカレーションの遅延を15分未満に抑えるフローです。",
        tags: ["運用フロー構築", "SLA応答速度", "エスカレーション構造", "障害初期対策インフォ"],
        stats: [
          { label: "一次対応平均速度", value: "15分" },
          { label: "受付自己解決率", value: "70%" },
          { label: "ユーザー満足度", value: "星 4.8 / 5.0" }
        ]
      }
    ],
    experiences: [
      {
        company: "PT. Pratama Abadi Industri (JX)",
        role: "ITハードウェア＆テクニカルサポート技術員",
        period: "2018年 〜 現在",
        location: "インドネシア・西ジャワ州スカブミ",
        highlights: [
          "各部門を迅速にサポートするためPC・各種周辺・製造ライン用端末等の構築・分解修理、定期的な予防メンテナンスの運用管理を主導。",
          "工場内の有線・無線LAN（Wi-Fi）などの通信障害時に直ちに原因診断を特定し、ボトルネック解消と設定変更を迅速に遂行。",
          "端末OS切り替えプロジェクトや製造ライン側のバーコードリーダー、シリアル制御機器の設定、接続テストを実施。",
          "毎日ヘルプデスクから寄せられる複数の技術的な相談に対し、適切なトラブル解決を施して工場の稼働停止（ダウンタイム）を最小化。",
          "工場サーバーと社内ネットワークの通信不通や、工業用プリンター等のハード不具合時に迅速な配線チェックなど修理対応を徹底。"
        ]
      }
    ],
    education: [
      {
        institution: "AMIK Citra Buana Indonesia (短期大学・コトバナ情報専門学校等と同等)",
        degree: "コンピュータ会計学専攻 (Diploma 3)",
        period: "2015年 〜 2018年",
        description: "技術的なプログラミング、データベース設計に加え、企業財務をベースとしたシステム分析と、端末ハードウェアの実用配線を系統立てて学習しました。"
      }
    ],
    certifications: [
      {
        title: "Google IT Support Professional Certificate (v.3)",
        issuer: "Google via Coursera",
        year: 2026
      },
      {
        title: "Junior Technical Support",
        issuer: "Badan Diklat Nasional (国家資格)",
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
    ],
    skillCategories: [
      {
        title: "Technical Skills",
        skills: [
          "ハードウェア修理・トラブル解析",
          "ローカルLANネットワーク敷設・保守",
          "端末OS等システム導入・構成管理",
          "工業用ラベルプリンター・周辺機器接続",
          "Windows OS 全般 & Active Directory管理",
          "ヘルプデスク対応ワークフロー",
          "障害点調査＆セグメント不具合診断",
          "リモート操作機器サポートコントロール"
        ]
      },
      {
        title: "Soft Skills",
        skills: [
          "ビジネス現場での明確な対話連携",
          "プロジェクト協同メンバーシップシップ",
          "主体的タスク工数＆SLA管理",
          "問題の本質を探る論理的思考力",
          "多様性文化がある国際チームへの柔軟な適応"
        ]
      },
      {
        title: "Languages",
        skills: [
          "インドネシア語 (ネイティブ / 第一言語)",
          "英語 (ビジネスで使用可能レベル)"
        ]
      }
    ]
  },
  de: {
    header: {
      about: "Über mich",
      works: "Systemdesign",
      experience: "Erfahrung",
      skills: "Kompetenzen",
      contact: "Kontakt",
      emailMe: "Schreiben Sie mir",
      subLogo: "IT-System-Portfolio",
      contactNow: "Jetzt kontaktieren",
    },
    hero: {
      statusActive: "Derzeit aktiv tätig",
      statusSwitzerland: "Kandidat für die Schweiz (1-3 Monate)",
      experienceCount: "5+ Jahre",
      experienceLabel: "Berufserfahrung",
      certCount: "5 Zertifikate",
      certLabel: "Branchenweit anerkannt",
      btnWorks: "Systemdesign ansehen",
      btnContact: "Agung kontaktieren",
      scrollDown: "SCROLLEN",
      technicalDossier: "TECHNISCHES DOSSIER",
      hardwareCompliant: "HARDWARE-KONFORM",
      supportSpecialist: "Spezialist für Support & Diagnose",
      relocationTitle: "RELO-ABSICHT:",
      relocationValue: "SCHWEIZ 🇨🇭",
    },
    works: {
      preTitle: "SYSTEMDESIGN & INFRASTRUKTUR",
      title: "Systemdesign- & IT-Blueprint-Galerie",
      subTitle: "Mit einem starken Fundament im IT-Support entwirft Agung intelligente Systemarchitekturen, modulare Verkabelungsdiagramme, Hardware-Kühlungslayouts und hocheffiziente Incident-Management-Arbeitsabläufe.",
      aestheticBadgeTitle: "DESIGN-ÄSTHETIK",
      aestheticBadgeText: "Hochpräziser Schweizer Minimalismus-Stil, der auf funktionale Details ohne künstlichen Zierrat setzt.",
      allTab: "Alle Designs",
      detailBlueprint: "Blueprint-Details",
      cadTitle: "PROJEKT-FALLSTUDIE blueprint",
      methedologyTitle: "Funktionalität & Architektonische Rolle",
      methodologyText: "Dieses Design wurde für die Produktionshalle von PT Pratama Abadi Industri (JX) optimiert. Agung kombiniert weitsichtige VLAN-Strukturen mit modernem thermischen Management, um Überhitzung zu verhindern und Systemengpässe unter Last zu eliminieren.",
      paramTitle: "TECHNISCHE PARAMETER",
      regionTitle: "EINSATZREGION",
      regionValue: "Sukabumi, West-Java, Indonesien",
      techTitle: "INTEGRIERTE TECHNOLOGIEN & METHODEN",
      cadBtn: "CAD-BLUEPRINT HERUNTERLADEN",
      cadAlert: "Simulator-Aktion: CAD-Blueprint-Datei (.dwv) wurde erfolgreich virtuell generiert und steht zum Download bereit.",
    },
    experience: {
      preTitle: "PROFESSIONELLER WERDEGANG",
      title: "Berufserfahrung & Ausbildung",
      subTitle: "Agungs Karriere umfasst mehr als 5 Jahre der Sicherung industrieller IT-Infrastrukturen in einem großen Produktionsbetrieb, gestützt auf fundierte Kenntnisse in computergestützten Datenbanksystemen.",
      workHeader: "Berufliche Meilensteine",
      eduHeader: "Akademischer Werdegang",
      currentJobBadge: "Derzeit tätig",
      jobHighlightHeader: "AUFGABENBEREICH & VERANTWORTUNG",
      reloBadgeTitle: "UMZUG IN DIE SCHWEIZ",
      reloHeader: "Bereit für das 'Young Professionals'-Programm",
      reloText: "Agung ist sofort innerhalb von 1–3 Monaten in die Schweiz umzugsbereit. Er erfüllt alle Vorgaben des Programms für qualifizierte technische Fachkräfte.",
      reloSla: "UMZUGS-SLA:",
      reloSlaVal: "1–3 MONATE",
      reloStatus: "GESUNDHEITSZUSTAND:",
      reloStatusVal: "FIT & BEREIT",
      reloDocs: "UNTERLAGEN:",
      reloDocsVal: "VOLLSTÄNDIG & GÜLTIG",
    },
    skills: {
      preTitle: "INTEGRIERTE KOMPETENZEN",
      title: "Technische Kompetenzen & Zertifikate",
      subTitle: "Umfassende Praxiskenntnisse in Hardware-Diagnose, Netzwerkeinrichtung, GPO-Entwurf, Sicherheitsrichtlinien und globalen Industriestandards.",
      tabSkills: "Fachkompetenzen",
      tabCerts: "Akkreditierte Zertifikate",
      searchPlaceholder: "Zertifikate durchsuchen (Google, Microsoft...)",
      filterYear: "Jahr:",
      filterAll: "ALLE",
      provenCapability: "NACHGEWIESENE KOMPETENZ",
      langTitle: "Sprachkenntnisse & Kommunikation",
      verifiedBadge: "VERIFIZIERTE SICHERHEIT",
      noResults: "Keine Zertifikate entsprechen Ihrer Suche.",
      resetFilters: "Filter zurücksetzen",
    },
    contact: {
      preTitle: "KONTAKT ZU AGUNG",
      title: "Anfragen & Stellenangebote",
      subTitle: "Senden Sie eine Anfrage bezüglich Stellenangeboten, IT-Beratung, System-Kollaborationen oder technischer Unterstützung an Agung.",
      formHeader: "DIGITALES KONTAKTFORMULAR",
      errRequired: "Bitte füllen Sie alle erforderlichen Felder aus (Name, E-Mail und Nachricht).",
      successTitle: "Nachricht erfolgreich versendet!",
      successText: "Vielen Dank für Ihre Anfrage. Sie können den simulierten Posteingang auf der rechten Seite einsehen, um Ihre Test-Datenstrukturen direkt zu prüfen.",
      labelName: "Name / Unternehmen",
      labelEmail: "E-Mail-Adresse",
      labelSubject: "Betreff",
      labelMessage: "Ihre ausführliche Nachricht",
      placeholderName: "z.B. Dr. Max Mustermann",
      placeholderEmail: "mustermann@firma.de",
      placeholderSubject: "Stellenangebot IT-Support - Schweiz",
      placeholderMessage: "Geben Sie hier die Details Ihres Angebots ein...",
      btnSubmit: "Nachricht senden",
      btnSubmitting: "Wird gesendet...",
      directContactTitle: "DIREKTE KONTAKTWEGE",
      phoneLabel: "Telefon / WhatsApp",
      linkedinLabel: "Berufliches Netzwerk",
      sandboxPreTitle: "VIRTUELLER POSTEINGANG (LOKAL)",
      sandboxTitle: "Lokale Sandbox-Inbox-Konsole",
      sandboxDesc: "Senden Sie das Formular links ab! Ihre Eingaben werden sofort live im lokalen Speicher Ihres Browsers abgelegt und in dieser Übersicht simuliert dargestellt.",
      sandboxReset: "RESET",
      sandboxEmptyTitle: "POSTEINGANG LEER",
      sandboxEmptyDesc: "Senden Sie eine Testnachricht über das Formular links, um die Live-Entwicklerkonsole zu befüllen!",
    },
    footer: {
      desc: "Spezialist für IT-Hardware und technischen Support mit einer Leidenschaft für extrem ausfallsichere Systeme und minimalistisches Design.",
      navTitle: "SEITENSTRUKTUR",
      about: "Über Agung",
      works: "Blueprints & CADs",
      experience: "Werdegang",
      skills: "Kompetenzen",
      contact: "Kontaktinformation",
      specTitle: "TECHNISCHE SYSTEM-SPEZIFIKATION",
      fontSpec: "Typographie: Inter & JetBrains Mono",
      securitySpec: "Sicherheit: GPO-Härtung aktiviert",
      structureSpec: "Architektur: React SPA + Tailwind CSS",
      footerRef: "PORTFOLIO SYSTEM © 2026. ALLE RECHTE VORBEHALTEN.",
      designRef: "Gestaltet im Alabaster-Minimalismus-Stil",
    },
    personal: {
      name: "AGUNG MIRAZ",
      title: "IT Hardware & Technical Support Spezialist",
      tagline: "Entwerfen robuster IT-Infrastrukturen, Optimieren von Hardware-System-Layouts und Strukturieren von hochleistungsfähigen technischen Support-Workflows.",
      summary: "Ein erfahrener Spezialist für Hardware-Wartung, LAN-Verkabelung, Systemdiagnose und Helpdesk-Infrastruktur mit über 5 Jahren solider Erfahrung. Konsequent im Lösen hartnäckiger technischer Hardwareausfälle sowie im Absichern von Endpunkten in anspruchsvollen Produktionsbedingungen. Sucht neue internationale Herausforderungen in der Schweiz über das etablierte bilaterale Regierungsabkommen.",
    },
    projects: [
      {
        id: "network-architecture",
        title: "Enterprise LAN Netzwerk-Blueprint",
        category: "Network Topology Design",
        description: "Hochverfügbares lokales Netzwerkkonzept für anspruchsvolle Fertigungsumgebungen mit strikten GPO-Zuweisungen und hoher Segmentierungs-Sicherheit.",
        details: "Detaillierte VLAN-Konfigurationen für die physische Trennung von Fertigungsmaschinen, Backoffice-Clients und isolierten Gästenetzwerken. Mit automatisierten Protokollen (RSTP/STP) und Hardware-Firewalls zur Erreichung von 99,98 % Uptime.",
        tags: ["Netzwerktopologie", "VLAN-Segmentierung", "LAN-Architektur", "Subnetzplanung"],
        stats: [
          { label: "Verwaltete Nodes", value: "500+ Geräte" },
          { label: "Ziel-Verfügbarkeit", value: "99.98%" },
          { label: "VLAN-Segmente", value: "6 Subnetze" }
        ]
      },
      {
        id: "workstation-ergonomics",
        title: "Ergonomische & Airflow-optimierte Workstation",
        category: "Hardware Logistics Design",
        description: "Physisches Konsolenkonzept zur Maximierung des Luftstroms und Verminderung statischer Stöße im Dauerbetrieb.",
        details: "Gestaltung robuster Leitplätze und Admin-Meßstationen. Spezielle Kabelschächte verhindern Wärmestaus (Thermo-Abluft-Prinzip) und integrierte Überspannungsschutz-Module bewahren Servercontroller vor Blitzschlägen.",
        tags: ["Arbeitsplatz-Ergonomie", "Luftstrom-Messer", "Erdschluss-Schutz", "Kabelkanäle"],
        stats: [
          { label: "Umgebungstemperatur", value: "22°C Serverraum" },
          { label: "Erdungswiderstand", value: "<1 Ohm" },
          { label: "Kabelordnung", value: "100% verdeckt" }
        ]
      },
      {
        id: "endpoint-gpo",
        title: "Sicherheit des Endpunkts & GPO-Struktur",
        category: "Policy & Directory Design",
        description: "Sicherheitsrichtlinien im Active Directory zur sofortigen Systemhärtung von Hunderten Windows-Clients.",
        details: "Formulierung standardisierter Gruppen-Richtlinien (GPOs). Verhindert unberechtigte Datentransfers durch USB-Sperren (DLP) und erzwingt tägliche automatisierte Backup-Skripte für systemkritische Arbeitsstationen.",
        tags: ["Active Directory", "Group Policy (GPO)", "Sicherheit", "Datenschutz DLP"],
        stats: [
          { label: "Überwachte Stationen", value: "320+ Rechner" },
          { label: "Regelanforderungen", value: "48 Richtlinien" },
          { label: "Systemrisiko", value: "Vollständig blockiert" }
        ]
      },
      {
        id: "servicedesk-workflow",
        title: "Incident-SLA-Optimierung",
        category: "Workflow & System Design",
        description: "Prozessgesteuerter Workflow zur Reduzierung von Wartezeiten bei technischen Ticketstörungen.",
        details: "Strategische Neustrukturierung der Support-Eskalationswege. Level 1 übernimmt den Standard-Support (Drucker, Barcodescanner, einfache Netzwerkknoten) und eskaliert kritische Störungen in unter 15 Minuten automatisiert an Level 2 & 3.",
        tags: ["Support-Prozesse", "SLA-Antwortzeit", "Eskalationsmodell", "Knowledge-Base"],
        stats: [
          { label: "Antwortzeit", value: "15 Minuten Ø" },
          { label: "L1-Lösung", value: "70% Self-service" },
          { label: "Kundenzufriedenheit", value: "4.8 / 5.0" }
        ]
      }
    ],
    experiences: [
      {
        company: "PT. Pratama Abadi Industri (JX)",
        role: "IT-Hardware & Technischer Support",
        period: "2018 – Heute",
        location: "Sukabumi, West-Java, Indonesien",
        highlights: [
          "Durchführung regelmäßiger Diagnosen, System-Instandsetzungen und Austausch von Hardwarekomponenten an Desktops, Laptops und Produktionsmodulen.",
          "Analysieren von Engpässen im drahtgebundenen und drahtlosen Netzwerk (LAN/WLAN) zur direkten Beseitigung von Störquellen.",
          "Begleitung von Betriebssystem-Rollouts, Treibermigrations-Setups und Leistungs-Upgrades wichtiger Endbenutzergeräte.",
          "Verantwortung für die Ticket-Einhaltung im Helpdesk bei minimalen Ausfallzeiten wichtiger Abteilungen.",
          "Wartung spezialisierter Ausgabegeräte (Industriedrucker, Barcodescanner, USB-Terminals) direkt in der industriellen Produktion."
        ]
      }
    ],
    education: [
      {
        institution: "AMIK Citra Buana Indonesia",
        degree: "Diploma (D3) in Rechnergestützter Buchhaltung",
        period: "2015 – 2018",
        description: "Studium an der Schnittstelle von finanzwirtschaftlichen Prozessen und angewandter Informatik, IT-Infrastruktur-Systemanalyse und lokaler Administration."
      }
    ],
    certifications: [
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
    ],
    skillCategories: [
      {
        title: "Technical Skills",
        skills: [
          "Hardware-Diagnose & Reparatur",
          "Konzeption von LAN & WLAN-Komponenten",
          "Bereitstellung von Betriebssystemen",
          "Anschluss von Industriescannern & Druckern",
          "Microsoft Active Directory & GPO-Strukturen",
          "Schnittstellen im First/Second-Level-Support",
          "Ermittlung von Netzwerkstörungen",
          "Remote-Support-Plattformen & Software"
        ]
      },
      {
        title: "Soft Skills",
        skills: [
          "Klare und präzise Fachkommunikation",
          "Zielstrebiges Arbeiten im Verbund",
          "Anpassbarkeit & striktes Zeitmanagement",
          "Lösungsorientiertes Denken",
          "Hohe Anpassungsfähigkeit in diversen Teams"
        ]
      },
      {
        title: "Languages",
        skills: [
          "Indonesisch (Muttersprache)",
          "Englisch (Verhandlungssicher im Beruf)"
        ]
      }
    ]
  },
  fr: {
    header: {
      about: "À propos",
      works: "Conception",
      experience: "Expérience",
      skills: "Compétences",
      contact: "Contactez-moi",
      emailMe: "M'envoyer un mail",
      subLogo: "Portfolio de Systèmes IT",
      contactNow: "Contacter Maintenant",
    },
    hero: {
      statusActive: "Actif et en Poste",
      statusSwitzerland: "Candidat Suisse (relogement sous 1-3 mois)",
      experienceCount: "5+ Années",
      experienceLabel: "Expérience de Travail",
      certCount: "5 Certificats",
      certLabel: "Agréé par l'Industrie",
      btnWorks: "Découvrir la Conception",
      btnContact: "Contacter Agung",
      scrollDown: "DÉFILER",
      technicalDossier: "DOSSIER TECHNIQUE",
      hardwareCompliant: "CONFORME MATÉRIEL",
      supportSpecialist: "Spécialiste Support & Diagnostic",
      relocationTitle: "INTENTION RECLASSEMENT :",
      relocationValue: "SUISSE 🇨🇭",
    },
    works: {
      preTitle: "CONCEPTION SYSTÈME & INFRASTRUCTURE",
      title: "Conception de Systèmes & Plans Techniques Portfolio",
      subTitle: "Bâtis sur les fondamentaux du support informatique de terrain, les schémas d'Agung optimisent le câblage physique, la thermodynamique de refroidissement et la livraison de flux SLA d'incidents.",
      aestheticBadgeTitle: "ESTHÉTIQUE VISUELLE",
      aestheticBadgeText: "Style minimaliste suisse de haute précision, axé uniquement sur les fonctionnalités optimales du matériel.",
      allTab: "Tous les Concepts",
      detailBlueprint: "Détails Techniques",
      cadTitle: "ÉTUDE DE CAS blueprint",
      methedologyTitle: "Rôle Architectural & Fonctionnel",
      methodologyText: "Cette modélisation a été affinée spécifiquement pour l'usine industrielle de PT Pratama Abadi Industri (JX). Agung allie des protocoles de redondance de réseau physique à une gestion thermique étudiée afin de prolonger le temps moyen de bon fonctionnement (uptime) à 99,98 %.",
      paramTitle: "VALEURS TECHNIQUES CLÉS",
      regionTitle: "TERRAIN D'APPLICATION",
      regionValue: "Sukabumi, Java occidental, Indonésie",
      techTitle: "MÉTHODES ET TECHNOLOGIES INTÉGRÉES",
      cadBtn: "TÉLÉCHARGER LE PLAN CAD",
      cadAlert: "Simulator : Le fichier d'ingénierie CAD .dwv a été préparé et rendu disponible virtuellement pour le téléchargement.",
    },
    experience: {
      preTitle: "PARCOURS PROFESSIONNEL",
      title: "Missions & Formation",
      subTitle: "Une carrière chevronnée de plus de 5 ans dans le maintien de la stabilité informatique opérationnelle industrielle, soutenue par de solides bases en systèmes comptables informatisés.",
      workHeader: "Chronologie du Parcours",
      eduHeader: "Cursus Scolaire Officiel",
      currentJobBadge: "En poste actuellement",
      jobHighlightHeader: "MISSIONS ET RESPONSABILITÉS",
      reloBadgeTitle: "PROJET SUISSE",
      reloHeader: "Prêt pour le programme des Jeunes Professionnels",
      reloText: "Agung est pleinement apte et prêt à être relocalisé en Suisse sous 1 à 3 mois. Éligible dans le cadre de l'accord bilatéral 'Jeunes Professionnels' reliant l'Indonésie et la Suisse.",
      reloSla: "DÉLAI RELOGEMENT :",
      reloSlaVal: "1 À 3 MOIS",
      reloStatus: "ÉTAT DE SANTÉ :",
      reloStatusVal: "APTE ET DISPONIBLE",
      reloDocs: "DOSSIER ADMINISTRATIF :",
      reloDocsVal: "COMPLET ET VALIDE",
    },
    skills: {
      preTitle: "COMPÉTENCES INTÉGRÉES",
      title: "Aptitudes Techniques & Certificats",
      subTitle: "Expertise éprouvée dans le dépannage de composants électroniques, la configuration de réseaux LAN/WLAN physiques, le durcissement GPO et la conformité d'administration globale.",
      tabSkills: "Mots-clés & Aptitudes",
      tabCerts: "Certifications Officielles",
      searchPlaceholder: "Filtrer les certificats (Google, Microsoft...)",
      filterYear: "Année :",
      filterAll: "TOUT",
      provenCapability: "COMPÉTENCE CONFIRMÉE",
      langTitle: "Langues & Adaptabilité",
      verifiedBadge: "NIVEAU CONFORME SÉCURISÉ",
      noResults: "Aucun certificat ne correspond à vos mots-clés.",
      resetFilters: "Réinitialiser",
    },
    contact: {
      preTitle: "PRENDRE CONTACT",
      title: "Discussions & Opportunités",
      subTitle: "Envoyez directement votre proposition d'embauche, demande de conseil en infrastructure matérielle informatique ou collaboration technique à Agung.",
      formHeader: "FORMULAIRE DE CONTACT SÉCURISÉ",
      errRequired: "Veuillez remplir les champs indispensables (Nom, E-mail et Message).",
      successTitle: "Message envoyé avec succès !",
      successText: "Nous vous remercions pour votre intérêt. Vous pouvez examiner la boîte de réception à droite pour auditer la structure brute de la transmission locale.",
      labelName: "Nom / Entreprise",
      labelEmail: "Adresse électronique",
      labelSubject: "Objet du message",
      labelMessage: "Contenu de votre message",
      placeholderName: "ex. Jean Dupont",
      placeholderEmail: "jean.dupont@entreprise.fr",
      placeholderSubject: "Opportunité de recrutement IT Support - Suisse",
      placeholderMessage: "Détaillez ici votre proposition d'affectation...",
      btnSubmit: "Envoyer le message",
      btnSubmitting: "Envoi en cours...",
      directContactTitle: "CANAUX DE TRANSMISSION DIRECTE",
      phoneLabel: "Ligne Téléphonique / WhatsApp",
      linkedinLabel: "Réseau Professionnel",
      sandboxPreTitle: "SIMULATEUR DE RUNTIME (LOCAL STORAGE)",
      sandboxTitle: "Console de Réception Virtuelle",
      sandboxDesc: "Envoyez le formulaire de gauche pour observer la rétro-alimentation automatique. Les paquets sont sauvegardés dans l'espace localStorage de votre navigateur.",
      sandboxReset: "RESET",
      sandboxEmptyTitle: "BOÎTE VIDE",
      sandboxEmptyDesc: "Complétez l'envoi de test à gauche pour générer ici un flux de données !",
    },
    footer: {
      desc: "Spécialiste du diagnostic matériel, câblage structuré et support technologique de production de premier plan avec plus de 5 ans d'activité.",
      navTitle: "ARCHITECTURE PORTAIL",
      about: "À propos de lui",
      works: "Diagrammes & Plans",
      experience: "Missions terrain",
      skills: "Certificats & Outils",
      contact: "Coordonnées directes",
      specTitle: "SPÉCIFICATION INTERNE RENDU",
      fontSpec: "Typographie : Inter & JetBrains Mono",
      securitySpec: "Protection : Politique AD durcie",
      structureSpec: "Structure : React SPA + Tailwind CSS",
      footerRef: "SYSTEM DE PORTFOLIO © 2026. TOUS DROITS RÉSERVÉS.",
      designRef: "Rendu dans un style minimaliste Alabaster",
    },
    personal: {
      name: "AGUNG MIRAZ",
      title: "Spécialiste IT Réseau & Support Technique",
      tagline: "Conception d'infrastructures informatiques robustes, optimisation des configurations de systèmes matériels et structuration de flux de travail de support technique de haute performance.",
      summary: "Technicien de maintenance polyvalent et rigoureux assurant la stabilité matérielle de réseaux d'usines complexes depuis plus de 5 ans. Il excelle dans la résolution de pannes physiques, l'isolement des conflits d'adresses réseau et le secours d'équipements périphériques sous conditions extrêmes de production. Prêt à s'installer en Suisse sous statut de Jeune Professionnel Indonesia-Suisse.",
    },
    projects: [
      {
        id: "network-architecture",
        title: "Plan Architecture Réseau LAN d'Usine",
        category: "Network Topology Design",
        description: "Configuration de réseau physique commuté avec redondance maximale, VLANs modulaires et protection d'accès aux routeurs de bordure.",
        details: "Mise en place de segmentations VLAN pour protéger les données financières, les machines en chaîne industrielle et le Wi-Fi invités. Intègre le Spanning Tree flexible et des firewalls locaux pour maximiser la résilience globale.",
        tags: ["Analyse Topologique", "Secteurs VLAN", "Fibre LAN physique", "Plan IP Subnets"],
        stats: [
          { label: "Postes en réseau", value: "500+ Nœuds" },
          { label: "Uptime visé", value: "99.98%" },
          { label: "Divisions logiques", value: "6 VLANs" }
        ]
      },
      {
        id: "workstation-ergonomics",
        title: "Table Console Thermodynamique d'Usine",
        category: "Hardware Logistics Design",
        description: "Agencement de pupitre de monitoring prévenant la chaleur stagnante et dissipant les surtensions électriques.",
        details: "Conception optimisée pour le contrôle central de serveurs. Intègre des voies d'aération active contre la poussière thermique et une prise de terre de haute technicité pour contrecarrer les amorces de courts-circuits.",
        tags: ["Ergonomie Poste", "Thermique Active", "Protection d'orages", "Moulures Câblées"],
        stats: [
          { label: "Thermique maximum", value: "22°C Server Room" },
          { label: "Courant de terre", value: "<1 Ohm" },
          { label: "Dissimulation fils", value: "100% Intégrée" }
        ]
      },
      {
        id: "endpoint-gpo",
        title: "Sécurité du Poste & Configuration GPO",
        category: "Policy & Directory Design",
        description: "Gabarit d'objets GPO pour interdire les privilèges superflus et crypter les supports de stockage portables par défaut.",
        details: "Verrouillage centralisé via Microsoft Active Directory prévenant l'amorçage de menaces externes par stockage USB. Automatise les sauvegardes de configurations locales quotidiennes vers des serveurs sécurisés isolés.",
        tags: ["Active Directory", "Stratégie GPO", "Blocage Postes", "Système DLP USB"],
        stats: [
          { label: "Terminaux gérés", value: "320+ Ordinateurs" },
          { label: "GPOs actives", value: "48 Règles" },
          { label: "État d'exposition", value: "Entièrement blindé" }
        ]
      },
      {
        id: "servicedesk-workflow",
        title: "Optimisation de Pipeline SLA Helpdesk",
        category: "Workflow & System Design",
        description: "Flot de requêtes automatisé minimisant les trajets d'intervention pour les techniciens réseau.",
        details: "Architecture révisée de traitement rapide de tickets de secours d'imprimantes industrielles et de pannes critiques. Les requêtes sont filtrées en 3 étapes : premier niveau helpdesk, spécialiste matériel, ingénieure cœur infrastructure.",
        tags: ["Flot d'Incident", "SLA Performance", "Entonnoir Tickets", "Index Solutions"],
        stats: [
          { label: "Délai de réponse", value: "15 Minutes Ø" },
          { label: "Résolution direct", value: "70% L1 autonome" },
          { label: "Satisfaction", value: "4.8 / 5.0 Étoiles" }
        ]
      }
    ],
    experiences: [
      {
        company: "PT. Pratama Abadi Industri (JX)",
        role: "IT Hardware & Support Technique de Terrain",
        period: "2018 – Présent",
        location: "Sukabumi, Java occidental, Indonésie",
        highlights: [
          "Assurer la maintenance récurrente diagnostique et le remplacement de composants internes de parcs d'ordinateurs et d'écrans industriels.",
          "Diagnostiquer la connectivité locale filaire et régler les conflits réguliers d'adressage IP sur les points d'accès sans fil Wi-Fi.",
          "Piloter le déploiement d'images d'OS initiales d'usine et la mise à niveau de cartes mères ou mémoires sur les terminaux.",
          "Répondre avec rigueur et calme aux demandes de dépannage régulières de la helpdesk pour réduire au strict minimum tout arrêt de travail.",
          "Procéder à la réparation d'imprimantes thermiques spécialisées, lecteurs optiques de codes-barres et d'afficheurs physiques."
        ]
      }
    ],
    education: [
      {
        institution: "AMIK Citra Buana Indonesia",
        degree: "Diplôme National (D3) Supérieur en Comptabilité Informatisée",
        period: "2015 – 2018",
        description: "Formation à l'interface logique de la trésorerie et de la modélisation informatique d'ordinateurs d'entreprises."
      }
    ],
    certifications: [
      {
        title: "Google IT Support Professional Certificate (v.3)",
        issuer: "Google via Coursera",
        year: 2026
      },
      {
        title: "Junior Technical Support",
        issuer: "Badan Diklat Nasional (National Accreditation)",
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
    ],
    skillCategories: [
      {
        title: "Technical Skills",
        skills: [
          "Diagnostic & Résolution hardware micro",
          "Conception réseaux physiques d'usine",
          "Déploiement images d'OS automatisé",
          "Maintenance terminaux de production & scanners",
          "Gestion Active Directory & Objets GPO",
          "SLA d'intervention Helpdesk de précision",
          "Recherche de pannes de câbles commutateurs",
          "Plateformes de contrôle distant sécurisées"
        ]
      },
      {
        title: "Soft Skills",
        skills: [
          "Clarté d'expression technique",
          "Esprit d'équipe collaborative",
          "Discipline de délai & gestion du temps",
          "Investigation rationnelle d'obstacles",
          "Forte intégration culturelle globale"
        ]
      },
      {
        title: "Languages",
        skills: [
          "Indonésien (Langue maternelle)",
          "Anglais (Usage professionnel courant)"
        ]
      }
    ]
  }
};
