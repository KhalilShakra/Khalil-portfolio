/* =====================================================================
   main.js  ->  Builds the page from data.js.
   You normally do NOT need to edit this file. Edit data.js for content.
   ===================================================================== */
(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const el = (tag, cls) => { const n = document.createElement(tag); if (cls) n.className = cls; return n; };

  if (typeof DATA === "undefined") {
    console.error("data.js did not load. Make sure data.js is in the same folder as index.html.");
    return;
  }

  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12 11.5 11.5 0 0 0 8.4 23c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="M3 6l9 6 9-6"/></svg>',
  };

  const p = DATA.profile || {};
  const links = DATA.links || {};

  document.title = `${p.name || "Portfolio"} — ${p.role || ""}`.trim().replace(/[—-]\s*$/, "");
  if ($("brandName")) $("brandName").textContent = p.name || "";

  /* ---------- HERO ---------- */
  // Name stacked into lines (first name / rest).
  const heroName = $("heroName");
  if (heroName) {
    const parts = (p.name || "").trim().split(/\s+/);
    heroName.innerHTML = "";
    if (parts.length <= 1) {
      const s = el("span", "nl"); s.textContent = parts[0] || ""; heroName.appendChild(s);
    } else {
      const first = el("span", "nl"); first.textContent = parts[0];
      const rest = el("span", "nl"); rest.textContent = parts.slice(1).join(" ");
      heroName.appendChild(first); heroName.appendChild(rest);
    }
  }

  const subtitle = [p.role, p.focus].filter(Boolean).join(" · ");
  if ($("heroSubtitle")) $("heroSubtitle").textContent = subtitle;
  if ($("heroTagline")) $("heroTagline").textContent = p.shortBio || p.tagline || "";

  const heroImg = $("heroImg");
  if (heroImg && p.photo) { heroImg.src = p.photo; heroImg.alt = "Portrait of " + (p.name || ""); }

  // Social icons
  const socialWrap = $("heroSocials");
  if (socialWrap) {
    [["linkedin", links.linkedin, false], ["github", links.github, false], ["email", links.email, true]]
      .forEach(([key, url, isEmail]) => {
        if (!url) return;
        const a = el("a", "social");
        a.href = isEmail ? "mailto:" + url : url;
        if (!isEmail) { a.target = "_blank"; a.rel = "noopener"; }
        a.title = key.charAt(0).toUpperCase() + key.slice(1);
        a.setAttribute("aria-label", a.title);
        a.innerHTML = ICONS[key] || "";
        socialWrap.appendChild(a);
      });
  }

  // Primary CTA: Resume (if enabled) else "Get in touch"
  const cta = $("heroCTA");
  if (cta) {
    if (p.showCvButton && p.cv) {
      const a = el("a", "btn btn-primary"); a.href = p.cv; a.setAttribute("download", ""); a.textContent = "Resume";
      cta.appendChild(a);
    } else {
      const a = el("a", "btn btn-primary"); a.href = "#contact"; a.textContent = "Get in touch";
      cta.appendChild(a);
    }
  }

  /* ---------- PROJECTS ---------- */
  const projects = DATA.projects || {};
  if ($("projectsHeading")) $("projectsHeading").textContent = projects.heading || "Projects";
  if ($("projectsSub")) $("projectsSub").textContent = projects.subheading || "";
  const pgrid = $("projectsGrid");
  if (pgrid) {
    (projects.items || []).forEach((pr) => {
      const card = el("article", "proj-card reveal");
      const thumb = el("div", "proj-thumb");
      if (pr.image) {
        const img = el("img"); img.src = pr.image; img.alt = pr.title || "Project"; img.loading = "lazy"; thumb.appendChild(img);
      } else {
        const ph = el("div", "ph"); ph.textContent = "</>"; thumb.appendChild(ph);
      }
      if (pr.status) { const b = el("span", "proj-badge"); b.textContent = pr.status; thumb.appendChild(b); }
      card.appendChild(thumb);

      const title = el("h3", "proj-title"); title.textContent = pr.title || "Untitled"; card.appendChild(title);
      if (pr.description) { const s = el("p", "proj-sub"); s.textContent = pr.description; card.appendChild(s); }

      const lr = el("div", "proj-links");
      if (pr.demo) { const a = el("a"); a.href = pr.demo; a.target = "_blank"; a.rel = "noopener"; a.textContent = "Live ↗"; lr.appendChild(a); }
      if (pr.code) { const a = el("a"); a.href = pr.code; a.target = "_blank"; a.rel = "noopener"; a.textContent = "Code ↗"; lr.appendChild(a); }
      if (lr.children.length) card.appendChild(lr);

      pgrid.appendChild(card);
    });
  }

  /* ---------- SKILLS (checkmark rows) ---------- */
  const skills = DATA.skills || {};
  if ($("skillsHeading")) $("skillsHeading").textContent = skills.heading || "Skills";
  if ($("skillsSub")) $("skillsSub").textContent = skills.subheading || "";
  const sgrid = $("skillsGrid");
  if (sgrid) {
    (skills.groups || []).forEach((g) => {
      const row = el("div", "skill-row reveal");
      if (g.title) { const lbl = el("span", "skill-group-label"); lbl.textContent = g.title; row.appendChild(lbl); }
      (g.items || []).forEach((it) => {
        const s = el("span", "skill");
        const chk = el("span", "chk"); chk.textContent = "✓";
        s.appendChild(chk); s.appendChild(document.createTextNode(" " + it));
        row.appendChild(s);
      });
      sgrid.appendChild(row);
    });
  }

  /* ---------- CONTACT ---------- */
  const contact = DATA.contact || {};
  if ($("contactHeading")) $("contactHeading").textContent = contact.heading || "Contact";
  if ($("contactSub")) $("contactSub").textContent = contact.subheading || contact.text || "";

  const cActions = $("contactActions");
  if (cActions) {
    if (p.email) { const a = el("a", "btn btn-ghost"); a.href = "mailto:" + p.email; a.textContent = "Email"; cActions.appendChild(a); }
    if (links.linkedin) { const a = el("a", "btn btn-ghost"); a.href = links.linkedin; a.target = "_blank"; a.rel = "noopener"; a.textContent = "LinkedIn"; cActions.appendChild(a); }
    if (links.github) { const a = el("a", "btn btn-ghost"); a.href = links.github; a.target = "_blank"; a.rel = "noopener"; a.textContent = "GitHub"; cActions.appendChild(a); }
  }

  // Contact form: Formspree if configured, else mailto.
  const form = $("contactForm");
  const note = $("formNote");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = $("cfName").value.trim();
      const email = $("cfEmail").value.trim();
      const msg = $("cfMsg").value.trim();
      if (!name || !email || !msg) { if (note) { note.textContent = "Please fill in all fields."; note.className = "form-note"; } return; }

      const action = (contact.formAction || "").trim();
      if (action) {
        try {
          if (note) { note.textContent = "Sending…"; note.className = "form-note"; }
          const res = await fetch(action, {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: new FormData(form),
          });
          if (res.ok) { form.reset(); if (note) { note.textContent = "Thanks! Your message was sent."; note.className = "form-note ok"; } }
          else { throw new Error("bad response"); }
        } catch (err) {
          if (note) { note.textContent = "Something went wrong. Please email me directly."; note.className = "form-note"; }
        }
      } else {
        const to = p.email || links.email || "";
        const subject = encodeURIComponent(`Portfolio message from ${name}`);
        const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        if (note) { note.textContent = "Opening your email app…"; note.className = "form-note ok"; }
      }
    });
  }

  /* ---------- FOOTER ---------- */
  if ($("footerText")) {
    $("footerText").textContent = (DATA.footer && DATA.footer.text) || `© ${new Date().getFullYear()} ${p.name || ""}. All rights reserved.`;
  }

  /* =====================================================================
     INTERACTIONS
     ===================================================================== */
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  const themeToggle = $("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", next === "light" ? "#ffffff" : "#0b0d10");
    });
  }

  // Mobile menu
  const menuBtn = $("menuBtn");
  const navLinks = $("navLinks");
  const backdrop = $("navBackdrop");
  const closeMenu = () => {
    if (!navLinks) return;
    navLinks.classList.remove("open");
    if (menuBtn) { menuBtn.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
    if (backdrop) backdrop.classList.remove("show");
  };
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuBtn.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
      if (backdrop) backdrop.classList.toggle("show", open);
    });
    navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
    if (backdrop) backdrop.addEventListener("click", closeMenu);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
  }

  // Navbar shadow on scroll
  const nav = $("nav");
  const onScroll = () => { if (nav) nav.classList.toggle("scrolled", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // Active nav link on scroll
  const sections = ["projects", "skills", "contact"].map((id) => $(id)).filter(Boolean);
  const navAnchors = navLinks ? Array.from(navLinks.querySelectorAll("a")) : [];
  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          navAnchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));
  }

  // Reveal on scroll
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    revealEls.forEach((n) => io.observe(n));
  } else {
    revealEls.forEach((n) => n.classList.add("visible"));
  }
})();
