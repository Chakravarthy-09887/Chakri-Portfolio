# Deployment Guide - A Chakravarthy Portfolio

Follow any of these free, 100% fast methods to make your portfolio live and visible to everyone on the internet.

---

## Option 1: Netlify Drag & Drop (Fastest - 1 Minute, No Code Required)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop) (sign up for a free Netlify account).
2. Open your portfolio folder at `C:\Users\ambat\.gemini\antigravity\scratch\chakravarthy-portfolio\dist`.
3. Drag and drop the `dist` folder into the Netlify drop zone.
4. Done! Netlify will instantly give you a live URL like `https://a-chakravarthy.netlify.app`.

---

## Option 2: GitHub Pages (Free & Official)
1. Create a public repository on GitHub named `chakravarthy-portfolio`.
2. Push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Deploy portfolio website"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/chakravarthy-portfolio.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings** -> **Pages**.
4. Under **Build and deployment**, set Source to **Deploy from a branch**, select `main` branch (or `/dist`), and click **Save**.
5. Your site will be live at `https://<YOUR_GITHUB_USERNAME>.github.io/chakravarthy-portfolio/`.

---

## Option 3: Vercel (Free 1-Click Deployment)
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **Add New Project** and import your `chakravarthy-portfolio` repository.
3. Keep default settings and click **Deploy**.
4. Your site will be live at `https://a-chakravarthy.vercel.app`.

---

## Option 4: Surge.sh (Command Line - 30 Seconds)
Run in terminal:
```bash
npx surge dist a-chakravarthy.surge.sh
```
Surge will publish your `dist` folder instantly to `https://a-chakravarthy.surge.sh`.
