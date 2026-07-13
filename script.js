document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const progressBar = document.getElementById("progressBar");
  const scrollTop = document.getElementById("scrollTop");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  navToggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });

  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
      navToggle?.setAttribute("aria-label", "Abrir menu");
    });
  });

  const sectionIds = [
    "inicio",
    "sobre",
    "experiencias",
    "competencias",
    "formacao",
    "contato",
  ];

  const linkMap = new Map(
    [...(navLinks?.querySelectorAll("a") || [])].map((a) => [
      a.getAttribute("href")?.slice(1),
      a,
    ])
  );

  const onScroll = () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${progress}%`;

    scrollTop?.classList.toggle("is-visible", window.scrollY > 500);

    let current = sectionIds[0];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= 140) current = id;
    }

    linkMap.forEach((a, id) => {
      a.classList.toggle("active", id === current);
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  scrollTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const reveals = document.querySelectorAll(
    ".lp-head, .summary-text, .experience-card, .skills-columns, .edu-card, .cert-group, .cta-block, .highlight-item"
  );
  reveals.forEach((el) => el.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -24px 0px" }
  );

  reveals.forEach((el) => revealObserver.observe(el));

  const langItems = document.querySelectorAll(".lang-item");
  const langObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const item = entry.target;
        const level = Number(item.dataset.level || 0);
        const fill = item.querySelector(".lang-fill");
        if (fill) fill.style.width = `${level}%`;
        langObserver.unobserve(item);
      });
    },
    { threshold: 0.4 }
  );

  langItems.forEach((item) => langObserver.observe(item));
});
