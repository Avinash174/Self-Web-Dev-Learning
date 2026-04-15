# Avinash Magar — Portfolio (React + Vite)

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Opens at **http://localhost:5173**

## 📦 Build for Production

```bash
npm run build
npm run preview   # preview the build locally
```

## 🌐 Deploy

**Netlify (Easiest — drag & drop):**
1. Run `npm run build`
2. Drag the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

**Vercel:**
```bash
npm i -g vercel
vercel
```

## ✏️ Update Your Info

All your data is in **`src/data.js`** — just edit that file!

## 📁 Structure

```
src/
├── components/         ← One .jsx + .module.css per section
│   ├── Cursor.jsx
│   ├── ParticleCanvas.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/
│   └── useReveal.js   ← Scroll animation hook
├── data.js            ← ✏️ Edit your info here
├── App.jsx
├── main.jsx
└── index.css
```
