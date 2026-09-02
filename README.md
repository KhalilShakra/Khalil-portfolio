# Khalil Shakra — Portfolio

A fast, modern personal portfolio for my **Backend Developer · Cloud** studies at
NBI/Handelsakademin. It's a lightweight static site (plain HTML/CSS/JS, no build
step) and everything is **easy to edit** — you change one file: `data.js`.

---

## 🚀 How to open the website

Just **double-click `index.html`** — it opens in your browser. That's it.

(Optional, nicer for development: open the folder in VS Code / Cursor and use
the "Live Server" extension so it refreshes automatically when you save.)

There is also a small helper `serve.ps1`. Right-click it → "Run with PowerShell"
to serve the site at `http://localhost:8765/`. You don't need it to view the
site — double-clicking `index.html` is enough.

---

## ✏️ How to change the content (no coding needed)

Open **`data.js`** in any text editor. Everything on the site lives there:

| I want to change...                | Edit this part of `data.js` |
|------------------------------------|------------------------------|
| Name, role, short bio, photo       | `profile`                    |
| GitHub / LinkedIn / email          | `links`                      |
| **My projects**                    | `projects`                   |
| Skills (checkmark rows)            | `skills`                     |
| Contact text & form                | `contact`                    |
| Footer text                        | `footer`                     |

Only change the text **between the quotes** `"like this"`, then **save** and
**refresh** the browser.

### ➕ Add a new project

In `data.js`, find the `projects` section. Copy one project block and paste it,
then change the text:

```js
{
  title: "My cool API",
  description: "Short one-line description.",
  image: "assets/my-project.png",     // square image in assets/, or "" for a placeholder
  demo: "https://my-live-demo.com",   // or "" to hide the button
  code: "https://github.com/me/repo", // or "" to hide the button
  status: "",                          // "" = none, or "In progress" / "Planned"
},
```

### 🧩 Edit skills

In the `skills` section, each **group** becomes one row of checkmarks on the
site. Add a skill by adding `"Name"` to a group's `items`, or copy a group
block to add a new row.

### 📄 Turn on the "Resume" button

1. Put your CV PDF in the `assets` folder and name it `cv.pdf`.
2. In `data.js` → `profile`, set `showCvButton: true`. (When off, the hero
   button says "Get in touch" and scrolls to the contact form.)

---

## ✉️ Contact form

The form works **without any server**:

- **Default:** it opens the visitor's email app with the message pre-filled
  (a `mailto:` to your address). No setup needed.
- **Better (real inbox):** create a free form at
  [formspree.io](https://formspree.io), copy your endpoint (looks like
  `https://formspree.io/f/xxxxxxxx`), and paste it into
  `data.js` → `contact` → `formAction`. Messages then arrive in your email.

The direct **Email / LinkedIn / GitHub** buttons always work too.

---

## 🎨 Look & colors

A clean, bold design: a big stacked name, a monospace subtitle, a circular
photo with a decorative ring, square project cards, checkmark skill rows and a
simple contact form. It ships with a **dark theme by default** and a **light
theme** — use the ◐ toggle in the navbar (your choice is remembered).

To change colors, edit the values at the top of `styles.css`:

- `:root` → the **dark** theme
- `[data-theme="light"]` → the **light** theme
- `--accent` → the blue accent used for buttons, links and the photo ring

---

## ⚡ Performance & mobile

- No frameworks or heavy libraries — just HTML, one CSS file, one small JS file.
- Two lightweight web fonts (Poppins + JetBrains Mono), loaded with `preconnect`
  and `display=swap`.
- The profile photo is optimized (`assets/profile.jpg`, ~40 KB) and shown in its
  **natural colors**.
- Project images are lazy-loaded.
- Fully **responsive / mobile-first** (tested at iPhone widths ~375–390px),
  with a working hamburger menu, safe-area support, and reduced-motion support.

---

## 🌐 Put it online for free (optional)

**GitHub Pages** is the easiest free option:

1. Create a free account at [github.com](https://github.com).
2. Create a new repository, e.g. `portfolio`.
3. Upload all these files (`index.html`, `styles.css`, `main.js`, `data.js`,
   and the `assets` folder).
4. Repository → **Settings → Pages** → Source: `main` branch → Save.
5. After a minute your site is live at
   `https://your-username.github.io/portfolio/`.

Other free options: **Netlify** or **Vercel** (drag-and-drop the folder).

---

## 📁 Files

```
index.html   → page structure (rarely need to touch)
styles.css   → colors & design
main.js      → builds the page from data.js (don't need to touch)
data.js      → ⭐ YOUR CONTENT — edit this
assets/      → images (profile photo, project screenshots, cv.pdf)
serve.ps1    → optional local preview server
```
