/* =====================================================================
   PORTFOLIO CONTENT  ->  EDIT THIS FILE ONLY (no coding needed)
   ---------------------------------------------------------------------
   Everything you see on the website comes from this file.
   Change the text between the "quotes" and save the file.
   Then refresh the website in your browser to see the changes.

   Tip: keep the commas (,) and quotes ("") exactly where they are.
   ===================================================================== */

const DATA = {

  /* ---------- 1. YOUR BASIC INFO ---------- */
  profile: {
    name: "Khalil Shakra",          // shown big at the top (auto-split into two lines)
    role: "Backend Developer",       // the subtitle under your name
    focus: "Cloud",                  // added after your role -> "Backend Developer · Cloud"
    // Short line under the subtitle (keep it short).
    shortBio: "Passionate about building secure, scalable backend and cloud systems.",
    location: "Göteborg, Sweden",
    email: "khalil.shakra@gmail.com",
    photo: "assets/profile.jpg",     // your picture. Replace this file to change it.
    cv: "assets/cv.pdf",             // optional: add this file to enable the "Resume" button
    showCvButton: false,             // set to true after adding assets/cv.pdf
  },

  /* ---------- 2. LINKS ----------  (leave "" to hide) */
  links: {
    github: "https://github.com/KhalilShakra",
    linkedin: "https://www.linkedin.com/in/khalilshakra",
    email: "khalil.shakra@gmail.com",
  },

  /* ---------- 3. PROJECTS ----------
     >>> Add your own projects here later. <<<
     Copy a { } block, paste it, and change the text.
       image:  path to a square image in assets/, or "" to show a placeholder
       demo:   live link, or "" to hide the button
       code:   GitHub link, or "" to hide the button
       status: "" for none, or a small badge like "In progress" / "Planned" */
  projects: {
    heading: "Projects",
    subheading: "New projects I'm building during my studies. More coming soon.",
    items: [
      {
        title: "Project coming soon",
        description: "My first project (placeholder).",
        image: "",
        demo: "",
        code: "",
        status: "Planned",
      },
      {
        title: "Project coming soon",
        description: "A future API or cloud app.",
        image: "",
        demo: "",
        code: "",
        status: "Planned",
      },
      {
        title: "Project coming soon",
        description: "A small tool or experiment.",
        image: "",
        demo: "",
        code: "",
        status: "Planned",
      },
      {
        title: "Project coming soon",
        description: "Something built with .NET.",
        image: "",
        demo: "",
        code: "",
        status: "Planned",
      },
    ],
  },

  /* ---------- 4. SKILLS ----------
     Each group becomes one row of checkmarks on the site.
     Add a skill by adding "Name" inside items. Add a row by copying a { } block. */
  skills: {
    heading: "Skills",
    subheading: "What I'm learning in my Backend Developer · Cloud program — and the tools I use.",
    groups: [
      { title: "Languages & backend", items: ["C#", ".NET", "ASP.NET Web API", "REST APIs", "OOP", "SQL"] },
      { title: "Cloud & DevOps",      items: ["Azure", "Serverless", "Docker", "Kubernetes", "CI/CD", "Git"] },
      { title: "Data & ways of working", items: ["Databases", "Data modeling", "OAuth2 / OpenID", "Scrum & Kanban", "Excel"] },
    ],
  },

  /* ---------- 5. CONTACT ---------- */
  contact: {
    heading: "Contact",
    subheading: "Open to LIA internships, collaboration and junior backend roles.",

    // The form works with NO server:
    //  - Leave formAction "" and it opens the visitor's email app (mailto) to you.
    //  - OR create a free form at https://formspree.io and paste your endpoint URL
    //    here, e.g. "https://formspree.io/f/xxxxxxxx" — then messages arrive in your inbox.
    formAction: "",
  },

  /* ---------- 6. FOOTER ---------- */
  footer: {
    text: "© 2026 Khalil Shakra. All rights reserved.",
  },
};
