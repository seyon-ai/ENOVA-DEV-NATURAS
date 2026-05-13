# ENOVA Dev 🚀
### AI-Powered Web Development Learning Platform

---

## Stack
- Vanilla HTML / CSS / JS (ES Modules)
- Firebase Auth + Firestore
- CodeMirror 5 (editor)
- Groq API / Llama 3.3 70B (AI tutor)
- Vercel (deployment + serverless functions)

---

## File Structure

```
enova-dev/
├── index.html           ← Landing page
├── login.html           ← Auth (Email / Phone / Google)
├── dashboard.html       ← User dashboard
├── lesson.html          ← Editor + Live Preview + AI Tutor
├── profile.html         ← User profile
├── certificate.html     ← Certificate generator
├── vercel.json          ← Vercel config
├── api/
│   └── chat.js          ← Groq API proxy (serverless)
├── css/
│   ├── global.css
│   ├── landing.css
│   ├── auth.css
│   ├── dashboard.css
│   ├── lesson.css
│   ├── profile.css
│   └── certificate.css
└── js/
    ├── firebase-config.js  ← YOUR FIREBASE CONFIG GOES HERE
    ├── auth.js
    ├── curriculum.js
    └── toast.js
```

---

## Setup

### 1. Firebase
- Go to [Firebase Console](https://console.firebase.google.com)
- Create a new project
- Enable **Authentication** → Email/Password, Google, Phone
- Enable **Firestore Database**
- Copy your config into `js/firebase-config.js`

### 2. Groq API
- Get a free API key at [console.groq.com](https://console.groq.com)

### 3. Deploy to Vercel
- Push to GitHub
- Import project in [Vercel](https://vercel.com)
- Add environment variable: `GROQ_API_KEY` = your key
- Deploy ✅

---

## Features
- ✅ Email / Phone / Google Auth
- ✅ 22 structured lessons (HTML 8 + CSS 6 + JS 8)
- ✅ Live code editor (CodeMirror 5 with syntax highlighting)
- ✅ Real-time preview iframe
- ✅ AI tutor powered by Groq/Llama 3.3 70B
- ✅ XP system + level progression
- ✅ Solution checker per lesson
- ✅ User profile + edit
- ✅ Certificate generator (Canvas → PNG/PDF download)
- ✅ Fully responsive

---

Built by ENOVA Dev · Powered by AugWeb
