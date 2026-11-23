# CODE 2 CHILL `[C2C]` // Student Technical Community Website

> **"SOFTWARE IS BUILT WITH COMPILERS AND SWEAT, NOT POWERPOINT SLIDES AND ATTENDANCE SHEETS."**

Official frontend web application for **Code2Chill (C2C)** — a student-led technical engineering collective at **Chitkara University** dedicated to bridging the gap between academic learning and industry engineering through practical workshops, hackathons, open-source projects, competitive DSA battles, and emerging technologies.

Designed with a high-contrast **Neo-Brutalist Dark Mode** aesthetic (`#000000` pitch black, `#00FF66` electric terminal green, `Space Grotesk` + `Inter` + `JetBrains Mono` typography) with functional compute terminal micro-interactions.

---

## ⚡ Tech Stack

- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS (extended custom palette, brutalist borders & neon glows)
- **Animations & Micro-interactions:** Framer Motion (route transitions & magnetic cursor physics)
- **Routing:** React Router DOM v6
- **Icons:** Lucide React

---

## 🚀 Features & Architecture

- **Interactive Compute Terminal Hero (`/`):** Functional browser bash simulation with live command execution supporting `stats`, `leader`, `team`, `projects`, `events`, `socials`, `join`, and `clear`.
- **Data-Driven Monorepos (`/projects`):** Dynamically rendered from `src/data/projects.json` with terminal `grep` search, category filtering, one-click shell command copying, and an interactive raw JSON inspector.
- **Combat & Sprint Operations (`/events`):** Filterable event timeline (`ALL`, `UPCOMING`, `ARCHIVED`) dynamically sourced from `src/data/events.json` detailing anti-cheat specs and registration quotas.
- **Core Crew Roster (`/team`):** Leadership spotlight for Club Leader **Lakshay Kalra** and departmental heads across Technical, Content, Social Media, and Operations from `src/data/team.json`.
- **Interactive Contributor Enrollment (`/join`):** Controlled React form featuring multi-domain track selectors, simulated 1-second hashing state, and generated immutable enrollment receipts (`TX_HASH`).
- **Telemetry Counter:** Live club statistics showing active members (`107 / 110`), available slots (`3 LEFT`), total archived events, and official social channels.

---

## 📦 Clone & Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- `npm` (bundled with Node.js)

### Step-by-Step Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gavesh07/Code2Chill-Website.git
   cd Code2Chill-Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000` (or the port indicated in your terminal).

### Production Build & Preview
```bash
npm run build
npm run preview
```

---

## 📂 Project Structure

```text
Code2Chill-Website/
├── public/
│   └── c2c-logo.png          # Club emblem (constrained to h-10 in Navbar)
├── src/
│   ├── components/           # Navbar, Footer, Magnetic, PageTransition, ProjectCard, TerminalComputeHero
│   ├── data/                 # JSON data sources (projects.json, events.json, team.json)
│   ├── pages/                # Route views (Home, Projects, Events, Team, Join)
│   ├── App.jsx               # Client-side router & AnimatePresence layout
│   ├── main.jsx              # React DOM entry point
│   └── index.css             # Tailwind directives & brutalist utility classes
├── index.html                # Google Fonts CDN & root mount
├── tailwind.config.js        # Extended fontFamily & brutalist design tokens
├── postcss.config.js         # PostCSS plugins
└── vite.config.js            # Vite server configuration (port 3000)
```

---

## 🛠️ Updating Site Data

No backend database or API is required—all site content is driven by structured JSON files located in `src/data/`:

- **Projects & Repositories:** Edit `src/data/projects.json` (currently includes `ByteGuard AST`, `NeuralByte DSA Battleground`, `Chitkara P2P CampusMesh`, and `PromptForge Edge Runner`).
- **Events & Hackathons:** Edit `src/data/events.json`
- **Team Leadership & Core Members:** Edit `src/data/team.json`

---

## 🌐 Community & Official Links

- **Instagram:** [@code2chill](https://www.instagram.com/code2chill)
- **LinkedIn:** [Code2Chill](https://www.linkedin.com/company/code2chill/)
- **Campus Node:** Chitkara University, Punjab, India (30.5164° N, 76.6592° E)
- **Club Leader:** Lakshay Kalra
