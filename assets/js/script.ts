type PortfolioLocale = "id" | "en-US" | "en-GB" | "de" | "zh-CN" | "ja" | "ru";

interface LocalizedProjectContent {
    category?: string;
    description?: string;
    paragraphs?: string[];
    features?: string[];
    galleryCaptions?: string[];
    galleryAlts?: string[];
}

declare const portfolioI18n: {
    locales: PortfolioLocale[];
    ui: Record<PortfolioLocale, Record<string, string>>;
    projectDetails: Partial<Record<PortfolioLocale, Record<string, LocalizedProjectContent>>>;
};

interface ProjectDetailContent {
    category: string;
    description: string;
    paragraphs: string[];
    features: string[];
    stack: string[];
    gallery: { src: string; alt: string; caption: string; portrait?: boolean }[];
}

const detailedProjectContent: Record<string, ProjectDetailContent> = {
    serasi: {
        category: "Fashion-tech · Web App",
        description: "Serasi membantu pengguna menemukan paduan warna hijab dan outfit dari foto OOTD, lengkap dengan skor harmoni, rekomendasi, dan lemari digital.",
        paragraphs: [
            "Serasi adalah aplikasi web fashion-tech yang membantu pengguna menemukan paduan warna hijab dan outfit. Pengguna dapat mengambil foto OOTD dengan kamera atau memilih gambar dari galeri.",
            "Aplikasi mengekstrak warna utama dari foto menggunakan HTML Canvas dan algoritme warna buatan proyek, lalu menampilkan skor harmoni serta rekomendasi warna hijab dan bahan yang cocok.",
            "Hasil analisis dapat disimpan di Lemari OOTD agar mudah dilihat kembali. Serasi juga menyediakan login Google, kuota analisis gratis, fitur Premium, dan alur pembayaran melalui Midtrans Snap."
        ],
        features: [
            "Ambil foto OOTD langsung dengan kamera atau pilih gambar dari galeri.",
            "Ekstrak warna utama dan palet dari foto OOTD.",
            "Tampilkan skor harmoni warna dan rekomendasi padu padan.",
            "Rekomendasi warna hijab serta bahan yang cocok.",
            "Simpan dan lihat kembali hasil analisis di Lemari OOTD.",
            "Login Google dan kuota analisis gratis.",
            "Fitur Premium dengan alur pembayaran Midtrans Snap."
        ],
        stack: [
            "React 19", "TypeScript", "Vite", "Tailwind CSS 4", "Node.js", "Express.js", "Supabase",
            "Midtrans Snap", "HTML Canvas", "Custom color algorithm", "Lucide React", "Fraunces",
            "Playfair Display", "Plus Jakarta Sans"
        ],
        gallery: [
            {
                src: "assets/img/serasi-preview.png",
                alt: "Pratinjau aplikasi Serasi untuk mengambil foto OOTD dan memilih gambar dari galeri.",
                caption: "Analisis warna OOTD · tampilan aplikasi",
                portrait: true
            }
        ]
    },
    jajanbuah: {
        category: "Operasional & Fulfillment Buah",
        description: "JajanBuah menyatukan pemesanan buah segar, pengelolaan produk, penimbangan, alokasi packer, pembayaran, dan pemantauan gudang dalam satu platform.",
        paragraphs: [
            "JajanBuah adalah aplikasi web untuk mengelola operasional pemesanan dan pemenuhan pesanan buah segar. Sistem ini menyatukan proses pesanan pelanggan, katalog dan harga, penimbangan di gudang, pembagian pekerjaan kepada packer, verifikasi pembayaran, hingga pemantauan status pesanan.",
            "Pesanan bergerak melalui workflow Kanban. Pelanggan dapat membuat pesanan dari portal online, sementara tim gudang mencatat berat aktual produk dan memperbarui progres pemrosesan. Admin dapat membagikan tautan pesanan dan label QR, mengirim informasi tagihan melalui WhatsApp, serta meninjau bukti pembayaran.",
            "Setiap peran memiliki tampilan kerja tersendiri: Super Admin, Admin Order, Packer, dan Monitor TV gudang. Antarmuka responsif dan mendukung pemasangan sebagai PWA pada perangkat yang kompatibel."
        ],
        features: [
            "Manajemen pesanan dengan alur status Kanban.",
            "Portal pelanggan untuk membuat pesanan dan mengunggah bukti pembayaran.",
            "Workspace packer untuk mencatat berat aktual dan progres penimbangan.",
            "Manajemen produk, stok, harga, riwayat harga, dan bundel buah.",
            "Akses dan tampilan kerja berdasarkan peran pengguna.",
            "Tautan pesanan dan label QR untuk berbagi informasi.",
            "Informasi tagihan dan konfirmasi pesanan melalui WhatsApp.",
            "Monitor TV gudang, notifikasi, dan log aktivitas.",
            "Laporan omzet dan volume penjualan, serta ekspor data."
        ],
        stack: [
            "React 19", "TypeScript", "Vite 8", "Tailwind CSS 4", "Node.js", "Express.js",
            "REST API", "SQLite · node:sqlite", "Web App Manifest", "Lucide React", "qrcode", "esbuild", "tsx"
        ],
        gallery: [
            {
                src: "assets/img/jajanbuah-dashboard.png",
                alt: "Dashboard JajanBuah dengan ringkasan operasional dan alur fulfillment Kanban.",
                caption: "Dashboard & Kanban fulfillment"
            },
            {
                src: "assets/img/jajanbuah-orders.png",
                alt: "Halaman manajemen order JajanBuah dengan tabel pesanan dan kontrol status.",
                caption: "Manajemen pesanan"
            },
            {
                src: "assets/img/jajanbuah-catalog.png",
                alt: "Katalog produk JajanBuah untuk buah tunggal dan paket bundling.",
                caption: "Katalog produk & bundling"
            },
            {
                src: "assets/img/jajanbuah-packer-mobile.png",
                alt: "Workspace packer JajanBuah pada layar ponsel.",
                caption: "Workspace packer · mobile",
                portrait: true
            }
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("languageSelect") as HTMLSelectElement | null;
    let currentLocale: PortfolioLocale = "id";
    try {
        const storedLocale = localStorage.getItem("portfolio_language") as PortfolioLocale | null;
        if (storedLocale && portfolioI18n.locales.includes(storedLocale)) currentLocale = storedLocale;
    } catch { /* Storage may be unavailable in a restricted browser context. */ }

    let activeProjectTrigger: HTMLElement | null = null;
    let refreshOpenProject: (() => void) | null = null;
    const aliasKeys: Record<string, string> = { filterLabel: "ariaFilterLabel", modalClose: "ariaModalClose" };
    const getCopy = (key: string): string => {
        const dictionary = portfolioI18n.ui[currentLocale] ?? portfolioI18n.ui.id;
        return dictionary[key] ?? dictionary[aliasKeys[key]] ?? portfolioI18n.ui.id[key] ?? portfolioI18n.ui.id[aliasKeys[key]] ?? key;
    };

    const applyLanguage = (locale: PortfolioLocale): void => {
        currentLocale = locale;
        document.documentElement.lang = locale;
        document.title = getCopy("pageTitle");
        const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
        if (descriptionMeta) descriptionMeta.content = getCopy("pageDescription");

        document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((element) => {
            const key = element.dataset.i18n;
            if (!key) return;
            if (element.dataset.i18nHtml === "true") element.innerHTML = getCopy(key);
            else element.textContent = getCopy(key);
        });
        document.querySelectorAll<HTMLElement>("[data-i18n-aria]").forEach((element) => {
            const key = element.dataset.i18nAria;
            if (key) element.setAttribute("aria-label", getCopy(key));
        });
        document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[data-i18n-placeholder]").forEach((element) => {
            const key = element.dataset.i18nPlaceholder;
            if (key) element.placeholder = getCopy(key);
        });
        if (languageSelect) languageSelect.value = locale;
        const visibleProjects = document.querySelectorAll<HTMLElement>(".project-item:not(.d-none)").length;
        updateProjectCount(visibleProjects);
        refreshOpenProject?.();
    };

    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");
    const navCollapse = document.getElementById("navbarNav");
    const navbar = document.querySelector<HTMLElement>(".navbar");
    const sections = document.querySelectorAll<HTMLElement>(".section-anchor");

    const updateNavigation = (): void => {
        let currentSection = "home";

        sections.forEach((section) => {
            if (section.getBoundingClientRect().top <= 150) {
                currentSection = section.id;
            }
        });

        navLinks.forEach((link) => {
            link.classList.toggle("active-link", link.hash === "#" + currentSection);
        });

        navbar?.classList.toggle("scrolled", window.scrollY > 8);
    };

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (navCollapse?.classList.contains("show")) {
                document.querySelector<HTMLButtonElement>(".navbar-toggler")?.click();
            }
        });
    });

    window.addEventListener("scroll", updateNavigation, { passive: true });
    updateNavigation();

    const projectItems = document.querySelectorAll<HTMLElement>(".project-item");
    const projectCards = document.querySelectorAll<HTMLElement>(".project-card");
    const filterButtons = document.querySelectorAll<HTMLButtonElement>(".filter-button");
    const projectCount = document.getElementById("projectCount");
    const emptyFilter = document.getElementById("emptyFilter");
    const updateProjectCount = (count: number): void => {
        if (!projectCount) return;
        if (currentLocale === "id") projectCount.textContent = `${count} proyek`;
        else if (currentLocale === "de") projectCount.textContent = `${count} ${count === 1 ? "Projekt" : "Projekte"}`;
        else if (currentLocale === "zh-CN") projectCount.textContent = `${count} 个项目`;
        else if (currentLocale === "ja") projectCount.textContent = `${count} 件のプロジェクト`;
        else if (currentLocale === "ru") {
            const plural = new Intl.PluralRules("ru").select(count);
            projectCount.textContent = `${count} ${plural === "one" ? "проект" : plural === "few" ? "проекта" : "проектов"}`;
        } else projectCount.textContent = `${count} ${count === 1 ? "project" : "projects"}`;
    };

    projectCards.forEach((card) => {
        card.addEventListener("click", (event: MouseEvent) => {
            const target = event.target;
            if (target instanceof Element && target.closest(".project-open, .live-link")) return;
            card.querySelector<HTMLButtonElement>(".project-open")?.click();
        });
    });

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const activeFilter = button.dataset.filter ?? "all";
            let visibleCount = 0;

            filterButtons.forEach((item) => {
                const isActive = item === button;
                item.classList.toggle("is-active", isActive);
                item.setAttribute("aria-pressed", String(isActive));
            });

            projectItems.forEach((project) => {
                const isVisible = activeFilter === "all" || project.dataset.category === activeFilter;
                project.classList.toggle("d-none", !isVisible);
                if (isVisible) visibleCount += 1;
            });

            updateProjectCount(visibleCount);
            emptyFilter?.classList.toggle("d-none", visibleCount > 0);
        });
    });

    const renderProjectModal = (trigger: HTMLElement): void => {
        const title = document.getElementById("projectModalTitle");
        const category = document.getElementById("projectModalCategory");
        const description = document.getElementById("projectModalDescription");
        const detail = document.getElementById("projectModalDetail");
        const stack = document.getElementById("projectModalStack");
        const demoLink = document.getElementById("projectModalLink") as HTMLAnchorElement | null;
        const noDemoButton = document.getElementById("projectModalNoDemo");
        const featureSection = document.getElementById("projectModalFeaturesSection");
        const featureList = document.getElementById("projectModalFeatures");
        const gallery = document.getElementById("projectModalGallery");
        const dialog = document.getElementById("projectModalDialog");
        const projectId = trigger.dataset.projectId ?? "";
        const details = detailedProjectContent[projectId];
        const localized = portfolioI18n.projectDetails[currentLocale]?.[projectId];
        const projectCopy: Record<string, { category: string; description: string; detail: string }> = {
            serasi: { category: "categorySerasi", description: "cardSerasi", detail: "cardSerasi" },
            jajanbuah: { category: "categoryJajan", description: "cardJajan", detail: "cardJajan" },
            taskManager: { category: "categoryWeb", description: "cardTask", detail: "detailTask" },
            personalPortfolio: { category: "categoryWeb", description: "cardPortfolio", detail: "detailPortfolio" },
            ecommerceMini: { category: "categoryWeb", description: "cardCommerce", detail: "detailCommerce" },
            lunaLev: { category: "categoryLanding", description: "cardLuna", detail: "detailLuna" }
        };
        const copyKeys = projectCopy[projectId];
        if (title) title.textContent = trigger.dataset.title ?? "Proyek";
        if (category) category.textContent = localized?.category ?? (details ? getCopy(copyKeys?.category ?? "") : getCopy("categoryWeb"));
        if (description) description.textContent = localized?.description ?? details?.description ?? getCopy(copyKeys?.description ?? "") ?? trigger.dataset.description ?? "";
        if (detail) {
            const paragraphs = localized?.paragraphs ?? details?.paragraphs ?? [getCopy(copyKeys?.detail ?? "")];
            detail.replaceChildren(...paragraphs.map((text) => {
                const paragraph = document.createElement("p");
                paragraph.textContent = text;
                return paragraph;
            }));
        }

        if (featureList && featureSection) {
            const features = localized?.features ?? details?.features ?? [];
            featureList.replaceChildren(...features.map((text) => {
                const item = document.createElement("li");
                item.textContent = text;
                return item;
            }));
            featureSection.classList.toggle("d-none", features.length === 0);
        }

        if (stack) {
            const stackItems = details?.stack ?? (trigger.dataset.stack ?? "").split("|").filter((tag) => tag.length > 0);
            const tags = stackItems
                .map((tag) => {
                    const chip = document.createElement("span");
                    chip.className = "skill-tag";
                    chip.textContent = tag === "Custom color algorithm" ? getCopy("customAlgorithm") : tag;
                    return chip;
                });
            stack.replaceChildren(...tags);
        }

        if (gallery) {
            const images = details?.gallery ?? [];
            gallery.classList.toggle("d-none", images.length === 0);
            gallery.classList.toggle("project-modal-gallery--single", images.length === 1);
            gallery.replaceChildren(...images.map((item, index) => {
                const figure = document.createElement("figure");
                figure.className = "project-gallery-card" + (item.portrait ? " project-gallery-card--portrait" : "");

                const image = document.createElement("img");
                image.src = item.src;
                image.alt = localized?.galleryAlts?.[index] ?? item.alt;
                image.loading = "lazy";

                const caption = document.createElement("figcaption");
                caption.textContent = localized?.galleryCaptions?.[index] ?? item.caption;
                figure.append(image, caption);
                return figure;
            }));
        }
        dialog?.classList.toggle("modal-xl", Boolean(details));
        dialog?.classList.toggle("modal-lg", !details);

        const demoUrl = trigger.dataset.link;
        if (demoLink) {
            demoLink.classList.toggle("d-none", !demoUrl);
            if (demoUrl) demoLink.href = demoUrl;
        }
        noDemoButton?.classList.toggle("d-none", Boolean(demoUrl));
    };
    refreshOpenProject = () => {
        if (activeProjectTrigger) renderProjectModal(activeProjectTrigger);
    };

    const projectModal = document.getElementById("projectModal");
    projectModal?.addEventListener("show.bs.modal", (event: Event) => {
        const trigger = (event as Event & { relatedTarget?: HTMLElement }).relatedTarget;
        if (!trigger) return;
        activeProjectTrigger = trigger;
        renderProjectModal(trigger);
    });
    projectModal?.addEventListener("hidden.bs.modal", () => { activeProjectTrigger = null; });

    languageSelect?.addEventListener("change", () => {
        const locale = languageSelect.value as PortfolioLocale;
        if (!portfolioI18n.locales.includes(locale)) return;
        try { localStorage.setItem("portfolio_language", locale); } catch { /* Continue without persistence. */ }
        applyLanguage(locale);
    });

    const contactForm = document.getElementById("contactForm") as HTMLFormElement | null;
    contactForm?.addEventListener("submit", (event: SubmitEvent) => {
        event.preventDefault();

        const name = (document.getElementById("senderName") as HTMLInputElement).value.trim();
        const email = (document.getElementById("senderEmail") as HTMLInputElement).value.trim();
        const message = (document.getElementById("senderMessage") as HTMLTextAreaElement).value.trim();
        const text = getCopy("waGreeting") + " " + name + " (" + email + ").\n\n" + message;
        const whatsappUrl = "https://wa.me/6287759673821?text=" + encodeURIComponent(text);

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        contactForm.reset();
    });

    const year = document.getElementById("currentYear");
    if (year) year.textContent = String(new Date().getFullYear());
    applyLanguage(currentLocale);
});


