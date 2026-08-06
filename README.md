# 🚀 Chakravarthy A - Professional Developer Portfolio

A modern, responsive, glassmorphism-styled developer portfolio built for **Chakravarthy A** (B.Tech AI & Data Science student, Aspiring Data Analyst, AI Enthusiast, and Web Developer based in Tamil Nadu, India).

![Portfolio Preview](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80)

---

## ✨ Features

- 🎨 **Modern Glassmorphism UI**: High-end visual aesthetic with smooth gradients and backdrop blur effects.
- 🌓 **Dark & Light Mode**: Seamless theme switcher with persistent user preference storage.
- ⚡ **Fast & Responsive**: Optimized for Mobile, Tablet, and Desktop displays.
- ⌨️ **Animated Typing Effect**: Dynamic role highlights in the Hero section.
- 📊 **Animated Skills Bars**: Visual proficiency indicators powered by Framer Motion.
- 📁 **Filterable Project Cards**: Categorized project showcase with live demo and GitHub links.
- ⏳ **Timeline Education**: Interactive vertical academic history layout.
- 🏅 **Certifications Section**: Verified credentials and accreditation badges.
- 📄 **Resume Download & Preview**: Direct download trigger and interactive preview modal.
- ✉️ **Contact Form with Validation**: Real-time field validation, EmailJS integration, and festive success notifications.
- ✨ **Canvas Particle Background**: Interactive node-line animation reacting to mouse movements.
- 🔍 **SEO & OpenGraph Optimized**: Complete structured JSON-LD schema, meta description tags, and social share cards.

---

## 🛠️ Technology Stack

- **Core**: React 18, Vite
- **Styling**: Tailwind CSS v3, PostCSS, Custom Glassmorphism Utilities
- **Animations**: Framer Motion, Canvas Confetti
- **Icons**: Lucide React, React Icons
- **Contact Form**: EmailJS (`@emailjs/browser`)

---

## 📁 Directory Structure

```text
chakravarthy-portfolio/
├── public/
│   ├── favicon.svg
│   └── Chakravarthy_A_Resume.txt
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── Seo.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── netlify.toml
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
├── vite.config.js
└── README.md
```

---

## 🚀 Installation & Local Development Setup

1. **Clone or open the repository**:
   ```bash
   cd C:\Users\ambat\.gemini\antigravity\scratch\chakravarthy-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📧 EmailJS Setup Guide

To receive contact messages directly in your inbox:
1. Register a free account at [EmailJS](https://www.emailjs.com/).
2. Create an **Email Service** (e.g. Gmail / Outlook).
3. Create an **Email Template** with variables: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{message}}`.
4. Update `PUBLIC_KEY`, `SERVICE_ID`, and `TEMPLATE_ID` in `src/components/Contact.jsx`.

---

## 🌐 Deployment Guides

### 1. Deploying to Vercel (Recommended)
1. Push your project code to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New Project**.
3. Select your GitHub repository.
4. Framework Preset: **Vite**.
5. Click **Deploy**. Vercel will automatically build and deploy using `vercel.json`.

### 2. Deploying to Netlify
1. Log into [Netlify](https://www.netlify.com/).
2. Click **Add new site** > **Import an existing project**.
3. Choose your repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Netlify will automatically apply routing rules from `netlify.toml`.

### 3. Deploying to GitHub Pages
1. Install `gh-pages` helper package:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add the following scripts to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Set your base path in `vite.config.js` if deploying under a repo subpath:
   ```js
   base: '/chakravarthy-portfolio/'
   ```
4. Run deployment command:
   ```bash
   npm run deploy
   ```

---

## 👤 Author

**Chakravarthy A**
- Location: Tamil Nadu, India
- Degree: B.Tech AI & Data Science
- Role: Aspiring Data Analyst | AI Enthusiast | Web Developer
