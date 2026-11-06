window.portfolioI18n = (() => {
    const id = {
        pageTitle: "Yusuf Kamal — Fullstack Developer",
        pageDescription: "Portofolio Yusuf Kamal, Fullstack Developer yang membangun pengalaman web yang rapi, fungsional, dan mudah digunakan.",
        ariaNavMain: "Navigasi utama", ariaOpenNav: "Buka navigasi", ariaSocialLinks: "Tautan sosial",
        ariaProjectImages: "Cuplikan antarmuka proyek", ariaLanguageSelect: "Ubah bahasa halaman",
        ariaFilterLabel: "Filter proyek", ariaModalClose: "Tutup",
        navHome: "Beranda", navAbout: "Tentang", navSkills: "Keahlian", navProjects: "Proyek", navContact: "Kontak",
        contactNav: "Hubungi saya", languageLabel: "Bahasa halaman",
        heroTitle: "Membangun web yang <span>jelas, berguna, dan nyaman digunakan.</span>",
        heroCopy: "Saya mengembangkan website dan aplikasi web dari antarmuka hingga sisi server. Saya suka merapikan ide menjadi produk digital yang terasa sederhana bagi penggunanya.",
        heroProjects: "Lihat proyek", heroCv: "Lihat CV", socialConnect: "Terhubung", heroCaption: "Web development, end to end.",
        aboutLabel: "TENTANG SAYA", aboutHeading: "Teknologi yang baik terasa <em>manusiawi.</em>",
        aboutCopy: "Saya seorang Fullstack Developer yang menikmati proses membangun aplikasi web secara menyeluruh—mulai dari menyusun antarmuka, menghubungkan API, hingga mengelola data. Saya terbuka pada ide baru, nyaman bekerja kolaboratif, dan selalu berusaha memahami kebutuhan sebelum menentukan solusi.",
        aboutCta: "Ceritakan ide Anda",
        principleOneTitle: "Rapi dan terukur", principleOneCopy: "Struktur yang mudah dipahami dan dikembangkan.",
        principleTwoTitle: "Berangkat dari pengguna", principleTwoCopy: "Alur yang jelas di berbagai ukuran layar.",
        principleThreeTitle: "Terus bertumbuh", principleThreeCopy: "Terbuka pada masukan dan cara kerja baru.",
        skillsKicker: "TOOLKIT", skillsTitle: "Teknologi yang saya gunakan",
        skillsIntro: "Pilihan tools untuk membangun dan menghubungkan produk web.",
        skillFrontendTitle: "Frontend", skillFrontendCopy: "Menyusun antarmuka yang responsif dan mudah digunakan.",
        skillBackendTitle: "Backend", skillBackendCopy: "Membangun logika aplikasi dan layanan web.",
        skillDataTitle: "Database & ORM", skillDataCopy: "Mengelola data dan interaksi aplikasi dengan database.",
        skillWorkflowTitle: "Workflow", skillWorkflowCopy: "Kolaborasi dan pengelolaan kode sehari-hari.",
        projectsKicker: "PILIHAN KARYA", projectsTitle: "Proyek yang pernah dikerjakan",
        projectsIntro: "Beberapa karya yang menunjukkan proses dan hal yang saya pelajari.",
        filterAll: "Semua", filterWeb: "Web App", filterPwa: "PWA", filterLanding: "Landing Page",
        typeWeb: "WEB APP", typeWebApp: "Web Application", typePwaLong: "PROGRESSIVE WEB APP",
        typePwaFull: "Progressive Web App", typeLanding: "Landing Page",
        serasiArtCaption: "DIGITAL EXPERIENCE", jajanArtCaption: "SEGAR • PRAKTIS • DIGITAL",
        commerceArtCaption: "ALUR BELANJA SEDERHANA",
        cardSerasi: "Aplikasi pencocok warna hijab dan outfit yang menganalisis palet foto OOTD, memberi rekomendasi padu padan, dan menyimpan hasilnya dalam lemari digital.",
        cardJajan: "Pengalaman katalog buah yang dirancang ringan dan nyaman diakses dari perangkat mobile.",
        cardTask: "Aplikasi pengelola tugas dengan fitur CRUD dan penyimpanan lokal di browser.",
        cardPortfolio: "Website portofolio untuk memperkenalkan profil, keahlian, dan proyek dalam satu tempat.",
        cardCommerce: "Prototipe toko online sederhana dengan alur katalog dan keranjang belanja.",
        cardLuna: "Landing page produk dengan tampilan responsif dan konten promosi yang terarah.",
        projectOpen: "Lihat detail", emptyProjects: "Tidak ada proyek pada kategori ini.",
        detailTask: "Proyek ini membantu pengguna mencatat, memperbarui, dan menghapus tugas melalui antarmuka yang sederhana.",
        detailPortfolio: "Dirancang responsif dengan navigasi yang ringkas dan informasi yang mudah dipindai.",
        detailCommerce: "Proyek ini mengeksplorasi alur belanja dasar dan menyimpan pilihan pengguna di browser.",
        detailLuna: "Halaman ini menyajikan informasi produk dengan hierarki visual yang jelas dan ajakan bertindak yang mudah ditemukan.",
        contactKicker: "KONTAK", contactTitle: "Ada ide yang ingin diwujudkan?",
        contactCopy: "Saya terbuka untuk diskusi proyek, kolaborasi, atau sekadar bertukar pikiran seputar web development.",
        contactDirect: "Chat via WhatsApp",
        formName: "Nama", formNamePlaceholder: "Nama Anda", formEmail: "Email",
        formEmailPlaceholder: "nama@email.com", formMessage: "Pesan",
        formMessagePlaceholder: "Ceritakan sedikit tentang kebutuhan Anda...",
        formSubmit: "Kirim melalui WhatsApp", formNote: "Pesan akan dibuka di WhatsApp untuk Anda kirim.", waGreeting: "Halo Yusuf, saya",
        footerMotto: "Merancang dan membangun web dengan tujuan yang jelas.",
        modalFeatures: "Fitur utama", modalTechnology: "Teknologi", modalDemo: "Buka demo",
        modalNoDemo: "Demo belum tersedia", categorySerasi: "Fashion-tech · Web App",
        categoryJajan: "Operasional & Fulfillment Buah", categoryWeb: "Web Application",
        categoryPwa: "Progressive Web App", categoryLanding: "Landing Page",
        customAlgorithm: "Algoritme warna buatan proyek"
    };

    const enUS = {
        pageTitle: "Yusuf Kamal — Fullstack Developer",
        pageDescription: "Yusuf Kamal's portfolio: clear, useful, and easy-to-use web experiences.",
        ariaNavMain: "Main navigation", ariaOpenNav: "Open navigation", ariaSocialLinks: "Social links",
        ariaProjectImages: "Project interface previews", ariaLanguageSelect: "Change page language",
        ariaFilterLabel: "Filter projects", ariaModalClose: "Close",
        navHome: "Home", navAbout: "About", navSkills: "Skills", navProjects: "Projects", navContact: "Contact",
        contactNav: "Get in touch", languageLabel: "Page language",
        heroTitle: "Building web experiences that are <span>clear, useful, and easy to use.</span>",
        heroCopy: "I build websites and web applications from the interface through the server side. I enjoy shaping ideas into digital products that feel simple to use.",
        heroProjects: "View projects", heroCv: "View CV", socialConnect: "Connect", heroCaption: "Web development, end to end.",
        aboutLabel: "ABOUT ME", aboutHeading: "Good technology feels <em>human.</em>",
        aboutCopy: "I am a Fullstack Developer who enjoys building web applications end to end—from shaping interfaces and connecting APIs to managing data. I welcome new ideas, enjoy collaborative work, and try to understand the need before choosing a solution.",
        aboutCta: "Tell me about your idea",
        principleOneTitle: "Clear and considered", principleOneCopy: "Structures that are easy to understand and extend.",
        principleTwoTitle: "User-led", principleTwoCopy: "Clear flows across screen sizes.",
        principleThreeTitle: "Always learning", principleThreeCopy: "Open to feedback and new ways of working.",
        skillsKicker: "TOOLKIT", skillsTitle: "Technologies I use",
        skillsIntro: "Tools for building and connecting web products.",
        skillFrontendTitle: "Frontend", skillFrontendCopy: "Building responsive, easy-to-use interfaces.",
        skillBackendTitle: "Backend", skillBackendCopy: "Building application logic and web services.",
        skillDataTitle: "Databases & ORMs", skillDataCopy: "Managing data and application access to databases.",
        skillWorkflowTitle: "Workflow", skillWorkflowCopy: "Everyday collaboration and code management.",
        projectsKicker: "SELECTED WORK", projectsTitle: "Projects I have worked on",
        projectsIntro: "A few projects that reflect my process and what I have learned.",
        filterAll: "All", filterWeb: "Web apps", filterPwa: "PWA", filterLanding: "Landing pages",
        typeWeb: "WEB APP", typeWebApp: "Web application", typePwaLong: "PROGRESSIVE WEB APP",
        typePwaFull: "Progressive web app", typeLanding: "Landing page",
        serasiArtCaption: "DIGITAL EXPERIENCE", jajanArtCaption: "FRESH • SIMPLE • DIGITAL",
        commerceArtCaption: "A SIMPLE SHOPPING FLOW",
        cardSerasi: "A hijab and outfit color-matching app that analyzes OOTD photos, suggests combinations, and saves results in a digital wardrobe.",
        cardJajan: "A lightweight fruit catalog designed for a comfortable mobile experience.",
        cardTask: "A task manager with CRUD features and browser-based local storage.",
        cardPortfolio: "A portfolio website for bringing profile, skills, and projects together.",
        cardCommerce: "A simple online store prototype with a catalog and shopping cart.",
        cardLuna: "A responsive product landing page with focused promotional content.",
        projectOpen: "View details", emptyProjects: "There are no projects in this category.",
        detailTask: "This project helps people record, update, and remove tasks through a simple interface.",
        detailPortfolio: "Designed to be responsive, with concise navigation and easy-to-scan information.",
        detailCommerce: "This project explores a basic shopping flow and stores selections in the browser.",
        detailLuna: "The page presents product information with a clear visual hierarchy and an easy-to-find call to action.",
        contactKicker: "CONTACT", contactTitle: "Have an idea to bring to life?",
        contactCopy: "I am open to project discussions, collaborations, or a conversation about web development.",
        contactDirect: "Chat on WhatsApp",
        formName: "Name", formNamePlaceholder: "Your name", formEmail: "Email",
        formEmailPlaceholder: "you@example.com", formMessage: "Message",
        formMessagePlaceholder: "Tell me a little about what you need...",
        formSubmit: "Send via WhatsApp", formNote: "Your message will open in WhatsApp for you to send.", waGreeting: "Hi Yusuf, I'm",
        footerMotto: "Designing and building web experiences with purpose.",
        modalFeatures: "Key features", modalTechnology: "Technology", modalDemo: "View demo",
        modalNoDemo: "Demo not available", categorySerasi: "Fashion tech · Web app",
        categoryJajan: "Fruit operations & fulfillment", categoryWeb: "Web application",
        categoryPwa: "Progressive web app", categoryLanding: "Landing page",
        customAlgorithm: "Project-built color algorithm"
    };

    const enGB = {
        ...enUS,
        cardSerasi: "A hijab and outfit colour-matching app that analyses OOTD photos, suggests combinations, and saves results in a digital wardrobe.",
        cardJajan: "A lightweight fruit catalogue designed for a comfortable mobile experience.",
        cardCommerce: "A simple online store prototype with a catalogue and shopping cart.",
        categoryJajan: "Fruit operations & fulfilment",
        detailTask: "This project helps people record, update, and remove tasks through a simple interface.",
        customAlgorithm: "Project-built colour algorithm"
    };

    const de = {
        pageTitle: "Yusuf Kamal — Fullstack-Entwickler",
        pageDescription: "Portfolio von Yusuf Kamal mit klaren, nützlichen und benutzerfreundlichen Web-Erlebnissen.",
        ariaNavMain: "Hauptnavigation", ariaOpenNav: "Navigation öffnen", ariaSocialLinks: "Soziale Links",
        ariaProjectImages: "Projektansichten", ariaLanguageSelect: "Seitensprache ändern",
        ariaFilterLabel: "Projekte filtern", ariaModalClose: "Schließen",
        navHome: "Start", navAbout: "Über mich", navSkills: "Kenntnisse", navProjects: "Projekte", navContact: "Kontakt",
        contactNav: "Kontakt aufnehmen", languageLabel: "Seitensprache",
        heroTitle: "Web-Erlebnisse gestalten, die <span>klar, nützlich und einfach zu bedienen sind.</span>",
        heroCopy: "Ich entwickle Websites und Webanwendungen vom Interface bis zur Serverseite. Dabei mache ich aus Ideen digitale Produkte, die sich einfach nutzen lassen.",
        heroProjects: "Projekte ansehen", heroCv: "Lebenslauf ansehen", socialConnect: "Vernetzen", heroCaption: "Webentwicklung von Anfang bis Ende.",
        aboutLabel: "ÜBER MICH", aboutHeading: "Gute Technologie fühlt sich <em>menschlich</em> an.",
        aboutCopy: "Als Fullstack-Entwickler arbeite ich gern am gesamten Webprodukt – vom Interface über APIs bis zur Datenverwaltung. Ich bin offen für neue Ideen, arbeite gern im Team und verstehe zuerst den Bedarf, bevor ich eine Lösung auswähle.",
        aboutCta: "Erzählen Sie mir von Ihrer Idee",
        principleOneTitle: "Klar und durchdacht", principleOneCopy: "Strukturen, die verständlich und erweiterbar sind.",
        principleTwoTitle: "Vom Nutzer aus gedacht", principleTwoCopy: "Klare Abläufe auf allen Bildschirmgrößen.",
        principleThreeTitle: "Stetig lernen", principleThreeCopy: "Offen für Feedback und neue Arbeitsweisen.",
        skillsKicker: "WERKZEUGE", skillsTitle: "Technologien, die ich nutze",
        skillsIntro: "Werkzeuge zum Entwickeln und Verbinden von Webprodukten.",
        skillFrontendTitle: "Frontend", skillFrontendCopy: "Responsive und leicht bedienbare Oberflächen gestalten.",
        skillBackendTitle: "Backend", skillBackendCopy: "Anwendungslogik und Webdienste entwickeln.",
        skillDataTitle: "Datenbanken & ORMs", skillDataCopy: "Daten und Datenbankzugriffe der Anwendung verwalten.",
        skillWorkflowTitle: "Arbeitsablauf", skillWorkflowCopy: "Zusammenarbeit und Codeverwaltung im Alltag.",
        projectsKicker: "AUSGEWÄHLTE ARBEITEN", projectsTitle: "Projekte, an denen ich gearbeitet habe",
        projectsIntro: "Einige Arbeiten, die meinen Prozess und meine Erfahrungen zeigen.",
        filterAll: "Alle", filterWeb: "Web-Apps", filterPwa: "PWA", filterLanding: "Landingpages",
        typeWeb: "WEB-APP", typeWebApp: "Webanwendung", typePwaLong: "PROGRESSIVE WEB-APP",
        typePwaFull: "Progressive Web-App", typeLanding: "Landingpage",
        serasiArtCaption: "DIGITALES ERLEBNIS", jajanArtCaption: "FRISCH • PRAKTISCH • DIGITAL",
        commerceArtCaption: "EINFACHER EINKAUFSABLAUF",
        cardSerasi: "Eine App für passende Hijab- und Outfitfarben: Sie analysiert OOTD-Fotos, empfiehlt Kombinationen und speichert Ergebnisse in einem digitalen Kleiderschrank.",
        cardJajan: "Ein leichter Obstkatalog für die komfortable Nutzung auf Mobilgeräten.",
        cardTask: "Aufgabenverwaltung mit CRUD-Funktionen und lokalem Speicher im Browser.",
        cardPortfolio: "Eine Portfolio-Website für Profil, Kenntnisse und Projekte an einem Ort.",
        cardCommerce: "Ein einfacher Online-Shop-Prototyp mit Katalog und Warenkorb.",
        cardLuna: "Eine responsive Produkt-Landingpage mit klar ausgerichteten Werbeinhalten.",
        projectOpen: "Details ansehen", emptyProjects: "In dieser Kategorie gibt es keine Projekte.",
        detailTask: "Das Projekt ermöglicht es, Aufgaben über eine einfache Oberfläche zu erfassen, zu aktualisieren und zu löschen.",
        detailPortfolio: "Responsive gestaltet, mit kompakter Navigation und schnell erfassbaren Informationen.",
        detailCommerce: "Der Prototyp zeigt einen einfachen Einkaufsablauf und speichert die Auswahl im Browser.",
        detailLuna: "Die Seite präsentiert Produktinformationen mit klarer visueller Hierarchie und gut auffindbarer Handlungsaufforderung.",
        contactKicker: "KONTAKT", contactTitle: "Haben Sie eine Idee, die Wirklichkeit werden soll?",
        contactCopy: "Ich freue mich auf Projektgespräche, Zusammenarbeit oder einen Austausch über Webentwicklung.",
        contactDirect: "Per WhatsApp schreiben",
        formName: "Name", formNamePlaceholder: "Ihr Name", formEmail: "E-Mail",
        formEmailPlaceholder: "name@beispiel.de", formMessage: "Nachricht",
        formMessagePlaceholder: "Beschreiben Sie kurz, wobei ich helfen kann...",
        formSubmit: "Über WhatsApp senden", formNote: "Ihre Nachricht wird in WhatsApp geöffnet und kann dort gesendet werden.", waGreeting: "Hallo Yusuf, ich bin",
        footerMotto: "Web-Erlebnisse mit einem klaren Ziel gestalten und entwickeln.",
        modalFeatures: "Wichtige Funktionen", modalTechnology: "Technologien", modalDemo: "Demo ansehen",
        modalNoDemo: "Keine Demo verfügbar", categorySerasi: "Fashion-Tech · Web-App",
        categoryJajan: "Obstbetrieb & Auftragsabwicklung", categoryWeb: "Webanwendung",
        categoryPwa: "Progressive Web-App", categoryLanding: "Landingpage",
        customAlgorithm: "Projektspezifischer Farbalgorithmus"
    };

    const zhCN = {
        pageTitle: "Yusuf Kamal — 全栈开发者",
        pageDescription: "Yusuf Kamal 的作品集：打造清晰、实用且易于使用的 Web 体验。",
        ariaNavMain: "主导航", ariaOpenNav: "打开导航", ariaSocialLinks: "社交链接",
        ariaProjectImages: "项目界面预览", ariaLanguageSelect: "更改页面语言",
        ariaFilterLabel: "筛选项目", ariaModalClose: "关闭",
        navHome: "首页", navAbout: "关于", navSkills: "技能", navProjects: "项目", navContact: "联系",
        contactNav: "联系我", languageLabel: "页面语言",
        heroTitle: "打造<span>清晰、实用且易于使用</span>的 Web 体验。",
        heroCopy: "我负责从界面到服务器端的网站和 Web 应用开发，喜欢把想法整理成简单易用的数字产品。",
        heroProjects: "查看项目", heroCv: "查看简历", socialConnect: "保持联系", heroCaption: "从前端到后端的 Web 开发。",
        aboutLabel: "关于我", aboutHeading: "好的技术应该有<em>人情味。</em>",
        aboutCopy: "我是一名全栈开发者，喜欢端到端地构建 Web 应用——从设计界面、连接 API 到管理数据。我乐于接受新想法、喜欢协作，并会先了解需求再选择解决方案。",
        aboutCta: "聊聊您的想法",
        principleOneTitle: "清晰且有条理", principleOneCopy: "结构清楚，便于理解和扩展。",
        principleTwoTitle: "以用户为中心", principleTwoCopy: "不同屏幕尺寸下都保持清晰的操作流程。",
        principleThreeTitle: "持续成长", principleThreeCopy: "乐于接受反馈并尝试新的工作方式。",
        skillsKicker: "工具箱", skillsTitle: "我使用的技术",
        skillsIntro: "用于构建和连接 Web 产品的工具。",
        skillFrontendTitle: "前端", skillFrontendCopy: "构建响应式且易于使用的界面。",
        skillBackendTitle: "后端", skillBackendCopy: "构建应用逻辑和 Web 服务。",
        skillDataTitle: "数据库与 ORM", skillDataCopy: "管理数据以及应用与数据库之间的交互。",
        skillWorkflowTitle: "工作流程", skillWorkflowCopy: "日常协作与代码管理。",
        projectsKicker: "精选作品", projectsTitle: "参与过的项目",
        projectsIntro: "这些作品展示了我的开发过程与经验。",
        filterAll: "全部", filterWeb: "Web 应用", filterPwa: "PWA", filterLanding: "产品落地页",
        typeWeb: "WEB 应用", typeWebApp: "Web 应用", typePwaLong: "渐进式 Web 应用",
        typePwaFull: "渐进式 Web 应用", typeLanding: "落地页",
        serasiArtCaption: "数字体验", jajanArtCaption: "新鲜 • 方便 • 数字化",
        commerceArtCaption: "简单的购物流程",
        cardSerasi: "一款头巾与穿搭配色应用，可分析 OOTD 照片、提供搭配建议，并将结果保存到数字衣橱。",
        cardJajan: "轻巧易用的水果目录，适合在移动设备上浏览。",
        cardTask: "具备 CRUD 功能并使用浏览器本地存储的任务管理应用。",
        cardPortfolio: "集中展示个人资料、技能和项目的作品集网站。",
        cardCommerce: "包含商品目录和购物车流程的简易网店原型。",
        cardLuna: "响应式产品落地页，突出清晰的产品推广内容。",
        projectOpen: "查看详情", emptyProjects: "此类别暂无项目。",
        detailTask: "通过简洁界面记录、更新和删除任务。",
        detailPortfolio: "采用响应式布局、简洁导航，让信息一目了然。",
        detailCommerce: "展示基本购物流程，并将用户选择保存在浏览器中。",
        detailLuna: "页面以清晰的视觉层级呈现产品信息，并突出行动按钮。",
        contactKicker: "联系", contactTitle: "有想实现的点子吗？",
        contactCopy: "欢迎讨论项目、合作，或交流 Web 开发相关话题。",
        contactDirect: "通过 WhatsApp 联系",
        formName: "姓名", formNamePlaceholder: "您的姓名", formEmail: "邮箱",
        formEmailPlaceholder: "name@example.com", formMessage: "留言",
        formMessagePlaceholder: "请简单介绍您的需求……",
        formSubmit: "通过 WhatsApp 发送", formNote: "留言会在 WhatsApp 中打开，供您确认发送。", waGreeting: "Yusuf 你好，我是",
        footerMotto: "带着清晰目标设计并构建 Web 体验。",
        modalFeatures: "主要功能", modalTechnology: "技术", modalDemo: "查看演示",
        modalNoDemo: "暂无演示", categorySerasi: "时尚科技 · Web 应用",
        categoryJajan: "水果运营与订单履约", categoryWeb: "Web 应用",
        categoryPwa: "渐进式 Web 应用", categoryLanding: "落地页",
        customAlgorithm: "项目自定义配色算法"
    };

    const ja = {
        pageTitle: "Yusuf Kamal — フルスタック開発者",
        pageDescription: "Yusuf Kamalのポートフォリオ。わかりやすく、役立ち、使いやすいWeb体験を開発します。",
        ariaNavMain: "メインナビゲーション", ariaOpenNav: "ナビゲーションを開く", ariaSocialLinks: "ソーシャルリンク",
        ariaProjectImages: "プロジェクト画面のプレビュー", ariaLanguageSelect: "ページの言語を変更",
        ariaFilterLabel: "プロジェクトを絞り込む", ariaModalClose: "閉じる",
        navHome: "ホーム", navAbout: "プロフィール", navSkills: "スキル", navProjects: "プロジェクト", navContact: "お問い合わせ",
        contactNav: "お問い合わせ", languageLabel: "ページの言語",
        heroTitle: "<span>わかりやすく、役立ち、使いやすい</span>Web体験をつくります。",
        heroCopy: "インターフェースからサーバー側まで、Webサイトやアプリを開発しています。アイデアをシンプルで使いやすいデジタルプロダクトに整えることが好きです。",
        heroProjects: "プロジェクトを見る", heroCv: "履歴書を見る", socialConnect: "つながる", heroCaption: "フロントエンドからバックエンドまで。",
        aboutLabel: "私について", aboutHeading: "よいテクノロジーには<em>人らしさ</em>があります。",
        aboutCopy: "フルスタック開発者として、画面設計、API連携、データ管理までWebアプリを一貫して作ることを楽しんでいます。新しいアイデアや共同作業を歓迎し、解決策を決める前にニーズを理解するよう努めています。",
        aboutCta: "アイデアを聞かせてください",
        principleOneTitle: "明快で整った設計", principleOneCopy: "理解しやすく、拡張しやすい構造。",
        principleTwoTitle: "ユーザーを起点に", principleTwoCopy: "画面サイズを問わず明確な操作フロー。",
        principleThreeTitle: "学び続ける", principleThreeCopy: "フィードバックや新しい方法を歓迎します。",
        skillsKicker: "ツール", skillsTitle: "使用している技術",
        skillsIntro: "Webプロダクトの構築と連携に使うツール。",
        skillFrontendTitle: "フロントエンド", skillFrontendCopy: "レスポンシブで使いやすい画面を構築。",
        skillBackendTitle: "バックエンド", skillBackendCopy: "アプリケーションロジックとWebサービスを開発。",
        skillDataTitle: "データベースとORM", skillDataCopy: "データとアプリケーションのデータベース連携を管理。",
        skillWorkflowTitle: "ワークフロー", skillWorkflowCopy: "日々の共同作業とコード管理。",
        projectsKicker: "主な制作物", projectsTitle: "これまでに手がけたプロジェクト",
        projectsIntro: "開発プロセスと経験を示すプロジェクトを紹介します。",
        filterAll: "すべて", filterWeb: "Webアプリ", filterPwa: "PWA", filterLanding: "ランディングページ",
        typeWeb: "WEB APP", typeWebApp: "Webアプリケーション", typePwaLong: "プログレッシブWebアプリ",
        typePwaFull: "プログレッシブWebアプリ", typeLanding: "ランディングページ",
        serasiArtCaption: "デジタル体験", jajanArtCaption: "新鮮 • 手軽 • デジタル",
        commerceArtCaption: "シンプルな購入フロー",
        cardSerasi: "OOTD写真の配色を分析し、ヒジャブと服の組み合わせを提案して、結果をデジタルクローゼットに保存するアプリです。",
        cardJajan: "モバイルでも快適に使える、軽量な果物カタログです。",
        cardTask: "CRUD機能とブラウザー内のローカル保存に対応したタスク管理アプリです。",
        cardPortfolio: "プロフィール、スキル、プロジェクトをまとめて紹介するポートフォリオサイトです。",
        cardCommerce: "商品一覧とカートを備えたシンプルなオンラインストアの試作です。",
        cardLuna: "商品紹介に焦点を当てた、レスポンシブなランディングページです。",
        projectOpen: "詳細を見る", emptyProjects: "このカテゴリにプロジェクトはありません。",
        detailTask: "シンプルな画面からタスクの記録、更新、削除を行えます。",
        detailPortfolio: "レスポンシブな設計と簡潔なナビゲーションで、情報を見つけやすくしています。",
        detailCommerce: "基本的な購入フローを試作し、選択内容をブラウザーに保存します。",
        detailLuna: "明確な視覚的階層で商品情報を伝え、行動につながる案内を見つけやすくしています。",
        contactKicker: "お問い合わせ", contactTitle: "実現したいアイデアはありますか？",
        contactCopy: "プロジェクトの相談、コラボレーション、Web開発についての情報交換を歓迎します。",
        contactDirect: "WhatsAppで連絡",
        formName: "お名前", formNamePlaceholder: "お名前", formEmail: "メールアドレス",
        formEmailPlaceholder: "name@example.com", formMessage: "メッセージ",
        formMessagePlaceholder: "ご相談内容を簡単にお聞かせください……",
        formSubmit: "WhatsAppで送信", formNote: "メッセージはWhatsAppで開き、送信前に確認できます。", waGreeting: "Yusufさん、",
        footerMotto: "目的を大切に、Web体験を設計・開発します。",
        modalFeatures: "主な機能", modalTechnology: "使用技術", modalDemo: "デモを見る",
        modalNoDemo: "デモはありません", categorySerasi: "ファッションテック · Webアプリ",
        categoryJajan: "果物の業務・注文管理", categoryWeb: "Webアプリケーション",
        categoryPwa: "プログレッシブWebアプリ", categoryLanding: "ランディングページ",
        customAlgorithm: "プロジェクト独自の色彩アルゴリズム"
    };

    const ru = {
        pageTitle: "Yusuf Kamal — Fullstack-разработчик",
        pageDescription: "Портфолио Yusuf Kamal: понятные, полезные и удобные веб-интерфейсы и приложения.",
        ariaNavMain: "Основная навигация", ariaOpenNav: "Открыть навигацию", ariaSocialLinks: "Социальные сети",
        ariaProjectImages: "Предпросмотр интерфейсов проектов", ariaLanguageSelect: "Изменить язык страницы",
        ariaFilterLabel: "Фильтр проектов", ariaModalClose: "Закрыть",
        navHome: "Главная", navAbout: "Обо мне", navSkills: "Навыки", navProjects: "Проекты", navContact: "Контакты",
        contactNav: "Связаться", languageLabel: "Язык страницы",
        heroTitle: "Создаю веб-интерфейсы, которые <span>понятны, полезны и удобны.</span>",
        heroCopy: "Разрабатываю сайты и веб-приложения — от интерфейса до серверной части. Мне нравится превращать идеи в простые и удобные цифровые продукты.",
        heroProjects: "Мои проекты", heroCv: "Посмотреть CV", socialConnect: "На связи", heroCaption: "Веб-разработка от интерфейса до сервера.",
        aboutLabel: "ОБО МНЕ", aboutHeading: "Хорошие технологии остаются <em>человечными.</em>",
        aboutCopy: "Я Fullstack-разработчик и люблю создавать веб-приложения целиком: проектировать интерфейсы, подключать API и работать с данными. Я открыт новым идеям, ценю совместную работу и стараюсь понять задачу до выбора решения.",
        aboutCta: "Расскажите о своей идее",
        principleOneTitle: "Понятно и продуманно", principleOneCopy: "Структура, которую легко понять и развивать.",
        principleTwoTitle: "С заботой о пользователе", principleTwoCopy: "Понятные сценарии на экранах любого размера.",
        principleThreeTitle: "Постоянное развитие", principleThreeCopy: "Открыт обратной связи и новым подходам.",
        skillsKicker: "ИНСТРУМЕНТЫ", skillsTitle: "Технологии, которые я использую",
        skillsIntro: "Инструменты для создания и интеграции веб-продуктов.",
        skillFrontendTitle: "Фронтенд", skillFrontendCopy: "Создание адаптивных и удобных интерфейсов.",
        skillBackendTitle: "Бэкенд", skillBackendCopy: "Разработка логики приложений и веб-сервисов.",
        skillDataTitle: "Базы данных и ORM", skillDataCopy: "Работа с данными и доступом приложения к базе.",
        skillWorkflowTitle: "Рабочий процесс", skillWorkflowCopy: "Совместная работа и управление кодом.",
        projectsKicker: "ИЗБРАННЫЕ РАБОТЫ", projectsTitle: "Проекты, над которыми я работал",
        projectsIntro: "Несколько проектов, отражающих мой подход и опыт.",
        filterAll: "Все", filterWeb: "Веб-приложения", filterPwa: "PWA", filterLanding: "Лендинги",
        typeWeb: "ВЕБ-ПРИЛОЖЕНИЕ", typeWebApp: "Веб-приложение", typePwaLong: "ПРОГРЕССИВНОЕ ВЕБ-ПРИЛОЖЕНИЕ",
        typePwaFull: "Прогрессивное веб-приложение", typeLanding: "Лендинг",
        serasiArtCaption: "ЦИФРОВОЙ ОПЫТ", jajanArtCaption: "СВЕЖО • УДОБНО • ЦИФРОВО",
        commerceArtCaption: "ПРОСТОЙ СЦЕНАРИЙ ПОКУПКИ",
        cardSerasi: "Приложение подбирает цвета хиджаба и одежды по фото OOTD, предлагает сочетания и сохраняет результаты в цифровом гардеробе.",
        cardJajan: "Лёгкий каталог фруктов, удобный для просмотра на мобильных устройствах.",
        cardTask: "Менеджер задач с CRUD-функциями и локальным хранением данных в браузере.",
        cardPortfolio: "Сайт-портфолио объединяет профиль, навыки и проекты.",
        cardCommerce: "Простой прототип интернет-магазина с каталогом и корзиной.",
        cardLuna: "Адаптивная посадочная страница продукта с понятной подачей.",
        projectOpen: "Подробнее", emptyProjects: "В этой категории пока нет проектов.",
        detailTask: "Проект позволяет добавлять, обновлять и удалять задачи через простой интерфейс.",
        detailPortfolio: "Адаптивный дизайн, простая навигация и информация, которую легко просматривать.",
        detailCommerce: "Прототип базового сценария покупки с сохранением выбора в браузере.",
        detailLuna: "Страница ясно представляет продукт и помогает быстро найти целевое действие.",
        contactKicker: "КОНТАКТЫ", contactTitle: "Есть идея, которую хочется воплотить?",
        contactCopy: "Открыт к обсуждению проектов, сотрудничеству и беседам о веб-разработке.",
        contactDirect: "Написать в WhatsApp",
        formName: "Имя", formNamePlaceholder: "Ваше имя", formEmail: "Электронная почта",
        formEmailPlaceholder: "name@example.com", formMessage: "Сообщение",
        formMessagePlaceholder: "Кратко расскажите, что вам нужно...",
        formSubmit: "Отправить через WhatsApp", formNote: "Сообщение откроется в WhatsApp, и вы сможете его отправить.", waGreeting: "Здравствуйте, Yusuf, меня зовут",
        footerMotto: "Создаю веб-продукты с ясной целью.",
        modalFeatures: "Основные функции", modalTechnology: "Технологии", modalDemo: "Открыть демо",
        modalNoDemo: "Демо недоступно", categorySerasi: "Fashion-tech · веб-приложение",
        categoryJajan: "Операции и комплектация фруктовых заказов", categoryWeb: "Веб-приложение",
        categoryPwa: "Прогрессивное веб-приложение", categoryLanding: "Лендинг",
        customAlgorithm: "Алгоритм цвета, разработанный для проекта"
    };

    const projectDetails = {
        "en-US": {
            serasi: {
                category: "Fashion tech · Web app",
                description: "Serasi helps users find coordinated hijab and outfit colours from an OOTD photo, with harmony scores, styling suggestions, and a digital wardrobe.",
                paragraphs: [
                    "Serasi is a fashion tech web app for finding colours that work well together. Users can take an OOTD photo with their camera or choose an image from their gallery.",
                    "The app extracts the main colours with HTML Canvas and a project-built colour algorithm, then shows a harmony score and suggests hijab colours and fabrics.",
                    "Analyses can be saved in the OOTD Wardrobe. Serasi also includes Google sign-in, a free analysis allowance, Premium features, and payments through Midtrans Snap."
                ],
                features: ["Capture an OOTD photo or choose one from the gallery.", "Extract a dominant colour palette from the photo.", "Show colour harmony scores and outfit suggestions.", "Recommend matching hijab colours and fabrics.", "Save and revisit results in the OOTD Wardrobe.", "Google sign-in and a free analysis allowance.", "Premium features with Midtrans Snap payments."],
                galleryCaptions: ["OOTD colour analysis · app interface"],
                galleryAlts: ["Serasi app preview for taking an OOTD photo or choosing an image from the gallery."]
            },
            jajanbuah: {
                category: "Fruit operations & fulfilment",
                description: "JajanBuah brings fresh-fruit orders, product management, weighing, packer assignments, payments, and warehouse progress into one operations platform.",
                paragraphs: [
                    "JajanBuah is a web app for managing fresh-fruit orders and fulfilment. It connects customer orders, the product and pricing catalogue, warehouse weighing, packer assignments, payment checks, and order status in one system.",
                    "Orders move through a Kanban workflow. Customers can order through an online portal, while warehouse staff record actual weights and update progress. Admins can share order links and QR labels, send invoices through WhatsApp, and review uploaded payment proof.",
                    "Super Admin, Order Admin, Packer, and warehouse TV Monitor each have a role-specific workspace. The responsive interface can also be installed as a PWA on compatible devices."
                ],
                features: ["Kanban order status workflow.", "Customer portal for orders and payment proof uploads.", "Packer workspace for actual weights and weighing progress.", "Products, stock, pricing history, and fruit bundles.", "Role-based access and workspaces.", "Shareable order links and QR labels.", "WhatsApp invoices and order confirmations.", "Warehouse TV monitor, notifications, and activity logs.", "Sales reports and data export."],
                galleryCaptions: ["Fulfilment dashboard & Kanban", "Order management", "Product catalogue & bundles", "Packer workspace · mobile"],
                galleryAlts: ["JajanBuah dashboard showing the fulfilment workflow.", "JajanBuah order management page.", "JajanBuah catalogue for individual fruits and bundles.", "JajanBuah packer workspace on a phone screen."]
            }
        },
        de: {
            serasi: {
                category: "Fashion-Tech · Web-App",
                description: "Serasi findet passende Hijab- und Outfitfarben anhand eines OOTD-Fotos und zeigt Harmonie, Styling-Ideen und einen digitalen Kleiderschrank.",
                paragraphs: [
                    "Serasi ist eine Fashion-Tech-Web-App, die passende Farben für Hijab und Outfit vorschlägt. Nutzer können ein OOTD-Foto aufnehmen oder ein Bild aus der Galerie auswählen.",
                    "Die App extrahiert mit HTML Canvas und einem projektspezifischen Farbalgorithmus die Hauptfarben. Danach zeigt sie einen Harmonie-Score sowie passende Hijabfarben und Stoffe.",
                    "Analysen lassen sich im digitalen OOTD-Kleiderschrank speichern. Dazu kommen Google-Anmeldung, ein kostenloses Analysekontingent, Premium-Funktionen und Zahlungen über Midtrans Snap."
                ],
                features: ["OOTD-Foto aufnehmen oder aus der Galerie wählen.", "Hauptfarben und Farbpalette extrahieren.", "Farbharmonie und Styling-Empfehlungen anzeigen.", "Passende Hijabfarben und Stoffe empfehlen.", "Ergebnisse im OOTD-Kleiderschrank speichern.", "Google-Anmeldung und kostenlose Analysen.", "Premium-Funktionen mit Midtrans-Snap-Zahlung."],
                galleryCaptions: ["OOTD-Farbanalyse · App-Oberfläche"],
                galleryAlts: ["Serasi-App mit Optionen zum Aufnehmen eines OOTD-Fotos oder zur Auswahl aus der Galerie."]
            },
            jajanbuah: {
                category: "Obstbetrieb & Auftragsabwicklung",
                description: "JajanBuah bündelt Bestellungen für frisches Obst, Katalog, Wiegen, Packer-Zuweisung, Zahlungen und Lagerfortschritt in einer Plattform.",
                paragraphs: [
                    "JajanBuah ist eine Web-App zur Verwaltung von Bestellungen und der Abwicklung frischer Obstlieferungen. Sie verbindet Kundenbestellungen, Produkt- und Preiskatalog, Wiegen im Lager, Aufgaben für Packer, Zahlungsprüfung und Bestellstatus.",
                    "Bestellungen laufen über einen Kanban-Prozess. Kunden bestellen im Online-Portal, während das Lager Ist-Gewichte erfasst und den Fortschritt aktualisiert. Admins teilen Bestelllinks und QR-Etiketten, senden Rechnungen per WhatsApp und prüfen Zahlungsbelege.",
                    "Super Admin, Order Admin, Packer und Lager-TV-Monitor erhalten jeweils eine passende Arbeitsansicht. Die responsive Oberfläche lässt sich auf kompatiblen Geräten als PWA installieren."
                ],
                features: ["Kanban-Ablauf für Bestellstatus.", "Kundenportal für Bestellungen und Zahlungsbelege.", "Packer-Arbeitsbereich für Ist-Gewichte und Wiegefortschritt.", "Produkte, Bestand, Preise, Preisverlauf und Obstpakete.", "Rollenbasierte Zugänge und Arbeitsbereiche.", "Teilbare Bestelllinks und QR-Etiketten.", "Rechnungen und Bestätigungen per WhatsApp.", "Lager-Monitor, Benachrichtigungen und Aktivitätsprotokoll.", "Umsatzberichte und Datenexport."],
                galleryCaptions: ["Fulfillment-Dashboard & Kanban", "Bestellverwaltung", "Produktkatalog & Pakete", "Packer-Arbeitsbereich · mobil"],
                galleryAlts: ["JajanBuah-Dashboard mit Fulfillment-Ablauf.", "Bestellverwaltung in JajanBuah.", "JajanBuah-Produktkatalog für einzelne Früchte und Pakete.", "JajanBuah-Packer-Arbeitsbereich auf einem Smartphone."]
            }
        },
        "zh-CN": {
            serasi: {
                category: "时尚科技 · 网页应用",
                description: "Serasi 根据 OOTD 穿搭照片匹配头巾与服装颜色，提供和谐度评分、搭配建议，并保存分析结果。",
                paragraphs: [
                    "Serasi 是一款时尚科技网页应用，帮助用户找到适合的头巾与穿搭配色。用户可以使用相机拍摄 OOTD 照片，也可以从相册中选择图片。",
                    "应用通过 HTML Canvas 和项目自有的颜色算法提取照片主色，显示色彩和谐度评分，并推荐合适的头巾颜色与面料。",
                    "分析结果可以保存到 OOTD 数字衣橱。应用还提供 Google 登录、免费分析额度、Premium 功能和 Midtrans Snap 支付流程。"
                ],
                features: ["拍摄 OOTD 照片或从相册选择图片。", "提取照片主色与配色方案。", "显示色彩和谐度评分及搭配建议。", "推荐合适的头巾颜色与面料。", "在 OOTD 数字衣橱中保存和查看结果。", "Google 登录与免费分析额度。", "支持 Midtrans Snap 支付的 Premium 功能。"],
                galleryCaptions: ["OOTD 配色分析 · 应用界面"],
                galleryAlts: ["Serasi 应用预览，可拍摄 OOTD 照片或从相册选择图片。"]
            },
            jajanbuah: {
                category: "水果运营与订单履约",
                description: "JajanBuah 将鲜果订单、商品管理、称重、打包员分配、付款核验和仓库进度整合到一个运营平台。",
                paragraphs: [
                    "JajanBuah 是一款管理鲜果订单与履约流程的网页应用，整合客户订单、商品与价格目录、仓库称重、打包员任务、付款核验和订单状态。",
                    "订单通过 Kanban 流程推进。客户可在在线入口下单，仓库团队记录实际重量并更新进度。管理员可分享订单链接和二维码标签，通过 WhatsApp 发送账单并审核付款凭证。",
                    "超级管理员、订单管理员、打包员和仓库电视看板均有专属工作界面。响应式页面也支持在兼容设备上安装为 PWA。"
                ],
                features: ["Kanban 订单状态流程。", "客户下单和上传付款凭证入口。", "打包员工作区记录实际重量与称重进度。", "商品、库存、价格历史与水果组合包管理。", "按角色划分的权限和工作界面。", "可分享的订单链接与二维码标签。", "通过 WhatsApp 发送账单和订单确认。", "仓库电视看板、通知与操作日志。", "销售报告与数据导出。"],
                galleryCaptions: ["履约看板与 Kanban", "订单管理", "商品目录与组合包", "打包员工作区 · 手机端"],
                galleryAlts: ["显示履约流程的 JajanBuah 仪表盘。", "JajanBuah 订单管理页面。", "JajanBuah 单品水果与组合包目录。", "手机上的 JajanBuah 打包员工作区。"]
            }
        },
        ja: {
            serasi: {
                category: "ファッションテック · Webアプリ",
                description: "SerasiはOOTD写真からヒジャブと服の色を提案し、配色の調和度やコーディネート案を表示して、結果を保存します。",
                paragraphs: [
                    "Serasiは、ヒジャブと服の色合わせを提案するファッションテックWebアプリです。カメラでOOTD写真を撮るか、ギャラリーから画像を選べます。",
                    "HTML Canvasとプロジェクト独自の色彩アルゴリズムで写真の主要色を抽出し、調和度スコアとおすすめのヒジャブ色・生地を表示します。",
                    "分析結果はデジタルクローゼット「Lemari OOTD」に保存できます。Googleログイン、無料分析枠、Premium機能、Midtrans Snap決済にも対応しています。"
                ],
                features: ["OOTD写真を撮影、またはギャラリーから選択。", "写真から主要色とカラーパレットを抽出。", "配色の調和度とコーディネート案を表示。", "合うヒジャブの色と生地を提案。", "分析結果をLemari OOTDに保存。", "Googleログインと無料分析枠。", "Midtrans Snap決済によるPremium機能。"],
                galleryCaptions: ["OOTDカラー分析 · アプリ画面"],
                galleryAlts: ["OOTD写真の撮影またはギャラリー選択ができるSerasiアプリのプレビュー。"]
            },
            jajanbuah: {
                category: "青果業務・注文管理",
                description: "JajanBuahは青果注文、商品管理、計量、梱包担当の割り当て、支払い確認、倉庫進捗を一元管理します。",
                paragraphs: [
                    "JajanBuahは、新鮮な果物の注文と出荷準備を管理するWebアプリです。顧客注文、商品・価格カタログ、倉庫での計量、梱包担当の割り当て、支払い確認、注文状況を一つにまとめます。",
                    "注文はKanban形式で進みます。顧客はオンラインで注文でき、倉庫スタッフは実重量を記録して進捗を更新します。管理者は注文リンクやQRラベルを共有し、WhatsAppで請求情報を送り、支払い証明を確認できます。",
                    "Super Admin、Order Admin、Packer、倉庫TVモニター向けに専用画面を用意。レスポンシブで、対応端末ではPWAとしてインストールできます。"
                ],
                features: ["Kanbanによる注文ステータス管理。", "注文と支払い証明のアップロードに対応した顧客ポータル。", "実重量と計量状況を記録するPacker画面。", "商品、在庫、価格履歴、果物セットの管理。", "役割に応じた権限と作業画面。", "注文リンクとQRラベルの共有。", "WhatsAppで請求と注文確認を送信。", "倉庫モニター、通知、操作ログ。", "売上レポートとデータ出力。"],
                galleryCaptions: ["FulfillmentダッシュボードとKanban", "注文管理", "商品カタログとセット", "Packer画面 · モバイル"],
                galleryAlts: ["Fulfillmentフローを表示するJajanBuahダッシュボード。", "JajanBuahの注文管理画面。", "単品果物とセットを扱うJajanBuahカタログ。", "スマートフォン上のJajanBuah Packer画面。"]
            }
        },
        ru: {
            serasi: {
                category: "Fashion-tech · веб-приложение",
                description: "Serasi подбирает цвета хиджаба и одежды по фото OOTD, показывает гармонию палитры и сохраняет рекомендации в цифровом гардеробе.",
                paragraphs: [
                    "Serasi — fashion-tech веб-приложение для подбора цветов хиджаба и одежды. Пользователь может сделать фото OOTD камерой или выбрать изображение из галереи.",
                    "Приложение извлекает основные цвета с помощью HTML Canvas и созданного для проекта алгоритма, затем показывает оценку гармонии и рекомендует цвета хиджаба и подходящие ткани.",
                    "Результаты можно сохранить в цифровом гардеробе Lemari OOTD. Также доступны вход через Google, бесплатный лимит анализов, Premium-функции и оплата через Midtrans Snap."
                ],
                features: ["Съёмка фото OOTD или выбор из галереи.", "Извлечение основных цветов и палитры.", "Оценка гармонии цветов и рекомендации по сочетаниям.", "Подбор цвета хиджаба и ткани.", "Сохранение результатов в Lemari OOTD.", "Вход через Google и бесплатный лимит анализов.", "Premium-функции с оплатой через Midtrans Snap."],
                galleryCaptions: ["Анализ цвета OOTD · интерфейс приложения"],
                galleryAlts: ["Превью Serasi с возможностью снять фото OOTD или выбрать изображение из галереи."]
            },
            jajanbuah: {
                category: "Операции и комплектация фруктовых заказов",
                description: "JajanBuah объединяет заказы свежих фруктов, каталог, взвешивание, назначение упаковщиков, проверку оплаты и контроль работы склада.",
                paragraphs: [
                    "JajanBuah — веб-приложение для управления заказами и комплектацией свежих фруктов. Оно объединяет заказы клиентов, каталог и цены, взвешивание на складе, задачи упаковщикам, проверку оплаты и статусы заказов.",
                    "Заказы проходят этапы Kanban. Клиенты оформляют их через онлайн-портал, а склад записывает фактический вес и обновляет ход обработки. Администраторы делятся ссылками и QR-этикетками, отправляют счета через WhatsApp и проверяют платёжные документы.",
                    "Для Super Admin, Order Admin, Packer и складского TV Monitor предусмотрены отдельные рабочие интерфейсы. Адаптивное приложение можно установить как PWA на совместимые устройства."
                ],
                features: ["Kanban-процесс статусов заказов.", "Портал для заказов и загрузки подтверждения оплаты.", "Рабочее место упаковщика с фактическим весом и прогрессом.", "Товары, остатки, история цен и фруктовые наборы.", "Ролевой доступ и отдельные рабочие интерфейсы.", "Ссылки на заказы и QR-этикетки.", "Счета и подтверждения через WhatsApp.", "Складской монитор, уведомления и журнал действий.", "Отчёты о продажах и экспорт данных."],
                galleryCaptions: ["Панель и Kanban комплектации", "Управление заказами", "Каталог и наборы", "Рабочее место упаковщика · мобильная версия"],
                galleryAlts: ["Панель JajanBuah с процессом комплектации.", "Страница управления заказами JajanBuah.", "Каталог отдельных фруктов и наборов JajanBuah.", "Рабочее место упаковщика JajanBuah на экране телефона."]
            }
        }
    };
    const transformProjectText = (source, replacements) => Object.fromEntries(
        Object.entries(source).map(([projectId, content]) => [projectId, Object.fromEntries(
            Object.entries(content).map(([key, value]) => [key, Array.isArray(value)
                ? value.map((text) => replacements.reduce((result, [pattern, replacement]) => result.replace(pattern, replacement), text))
                : typeof value === "string"
                    ? replacements.reduce((result, [pattern, replacement]) => result.replace(pattern, replacement), value)
                    : value])
        )])
    );
    const ukToUs = [
        [/\bcolours\b/g, "colors"], [/\bcolour\b/g, "color"], [/\bColours\b/g, "Colors"], [/\bColour\b/g, "Color"],
        [/\bfulfilment\b/g, "fulfillment"], [/\bFulfilment\b/g, "Fulfillment"],
        [/\bcatalogue\b/g, "catalog"], [/\bCatalogue\b/g, "Catalog"]
    ];
    const usToUk = [
        [/\bcolors\b/g, "colours"], [/\bcolor\b/g, "colour"], [/\bColors\b/g, "Colours"], [/\bColor\b/g, "Colour"],
        [/\bfulfillment\b/g, "fulfilment"], [/\bFulfillment\b/g, "Fulfilment"],
        [/\bcatalog\b/g, "catalogue"], [/\bCatalog\b/g, "Catalogue"]
    ];
    projectDetails["en-US"] = transformProjectText(projectDetails["en-US"], ukToUs);
    projectDetails["en-GB"] = transformProjectText(projectDetails["en-US"], usToUk);

    return {
        locales: ["id", "en-US", "en-GB", "de", "zh-CN", "ja", "ru"],
        ui: { id, "en-US": enUS, "en-GB": enGB, de, "zh-CN": zhCN, ja, ru },
        projectDetails
    };
})();
