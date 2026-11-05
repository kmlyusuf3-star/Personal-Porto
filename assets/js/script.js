"use strict";
const detailedProjectContent = {
    jajanbuah: {
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
    const navLinks = document.querySelectorAll(".nav-link");
    const navCollapse = document.getElementById("navbarNav");
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll(".section-anchor");

    const updateNavigation = () => {
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
                document.querySelector(".navbar-toggler")?.click();
            }
        });
    });

    window.addEventListener("scroll", updateNavigation, { passive: true });
    updateNavigation();

    const projectItems = document.querySelectorAll(".project-item");
    const projectCards = document.querySelectorAll(".project-card");
    const filterButtons = document.querySelectorAll(".filter-button");
    const projectCount = document.getElementById("projectCount");
    const emptyFilter = document.getElementById("emptyFilter");

    projectCards.forEach((card) => {
        card.addEventListener("click", (event) => {
            const target = event.target;
            if (target instanceof Element && target.closest(".project-open, .live-link")) return;
            card.querySelector(".project-open")?.click();
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

            if (projectCount) {
                projectCount.textContent = visibleCount + " proyek";
            }
            emptyFilter?.classList.toggle("d-none", visibleCount > 0);
        });
    });

    const projectModal = document.getElementById("projectModal");
    projectModal?.addEventListener("show.bs.modal", (event) => {
        const trigger = event.relatedTarget;
        if (!trigger) return;

        const title = document.getElementById("projectModalTitle");
        const category = document.getElementById("projectModalCategory");
        const description = document.getElementById("projectModalDescription");
        const detail = document.getElementById("projectModalDetail");
        const stack = document.getElementById("projectModalStack");
        const demoLink = document.getElementById("projectModalLink");
        const noDemoButton = document.getElementById("projectModalNoDemo");
        const featureSection = document.getElementById("projectModalFeaturesSection");
        const featureList = document.getElementById("projectModalFeatures");
        const gallery = document.getElementById("projectModalGallery");
        const dialog = document.getElementById("projectModalDialog");
        const details = trigger.dataset.projectId ? detailedProjectContent[trigger.dataset.projectId] : undefined;

        if (title) title.textContent = trigger.dataset.title ?? "Proyek";
        if (category) category.textContent = trigger.dataset.category ?? "PROJECT DETAILS";
        if (description) description.textContent = trigger.dataset.description ?? "";
        if (detail) {
            const paragraphs = details?.paragraphs ?? [trigger.dataset.detail ?? ""];
            detail.replaceChildren(...paragraphs.map((text) => {
                const paragraph = document.createElement("p");
                paragraph.textContent = text;
                return paragraph;
            }));
        }

        if (featureList && featureSection) {
            const features = details?.features ?? [];
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
                    chip.textContent = tag;
                    return chip;
                });
            stack.replaceChildren(...tags);
        }

        if (gallery) {
            const images = details?.gallery ?? [];
            gallery.classList.toggle("d-none", images.length === 0);
            gallery.replaceChildren(...images.map((item) => {
                const figure = document.createElement("figure");
                figure.className = "project-gallery-card" + (item.portrait ? " project-gallery-card--portrait" : "");

                const image = document.createElement("img");
                image.src = item.src;
                image.alt = item.alt;
                image.loading = "lazy";

                const caption = document.createElement("figcaption");
                caption.textContent = item.caption;
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
    });

    const contactForm = document.getElementById("contactForm");
    contactForm?.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("senderName").value.trim();
        const email = document.getElementById("senderEmail").value.trim();
        const message = document.getElementById("senderMessage").value.trim();
        const text = "Halo Yusuf, saya " + name + " (" + email + ").\n\n" + message;
        const whatsappUrl = "https://wa.me/6287759673821?text=" + encodeURIComponent(text);

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        contactForm.reset();
    });

    const year = document.getElementById("currentYear");
    if (year) year.textContent = String(new Date().getFullYear());
});

