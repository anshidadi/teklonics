# TEKLONICS — Digital Experiences & Software Engineering Studio

> **"We turn ambitious ideas into digital experiences."**

Official company web platform for **TEKLONICS**, a modern technology partner helping businesses transform ambitious ideas into powerful digital experiences, high-performance web applications, and scalable software architectures.

---

## 🏛️ Company Identity & Leadership

- **Company:** TEKLONICS
- **Founder & Technical Director:** Muhammed Anshid KT
- **Engineering Pod:** 5+ Core Engineers & Specialists (Frontend, Backend, UI/UX, Full-stack, QA & DevOps)
- **Industry:** Web Development, Software Engineering and Digital Solutions
- **Visual Aesthetic:** Pure near-black studio atmosphere, electric blue accents, layered depth, editorial typography, and high-performance interactive visual systems.

---

## 🚀 Key Features & Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | Interactive particle visual hero, selected work showcase, services overview, why Teklonics value matrix, process preview, team spotlight, and conversion CTA. |
| `/about` | **About Us** | Studio vision, mission, working philosophy, founder Muhammed Anshid KT spotlight, and verified 5+ engineering team structure. |
| `/services` | **Services** | 8 comprehensive categories (A to H): Website Dev, E-commerce, Web Apps / SaaS, Frontend Engineering, Backend & Python APIs, UI/UX Design Systems, Mobile Solutions / PWA, Advanced Digital & AI Integrations. |
| `/work` | **Work / Portfolio** | Case-study-driven portfolio filterable by category with verified concept architectures. |
| `/work/:slug` | **Project Detail** | Deep dive into individual case studies: Challenge, Architectural Solution, Shipped Deliverables, and Tech Specs. |
| `/process` | **Our Process** | 7-stage interactive visual timeline: Discovery → Strategy → UI/UX Design → Development → QA → Launch → Ongoing Support, plus client FAQs. |
| `/contact` | **Contact & Inquiries** | Conversion-optimized inquiry experience with multi-service selector, budget range, timeline, validation, and configurable points of contact. |
| `*` | **404 Not Found** | Custom styled error page with direct navigation back to home or work. |

---

## 🛠️ Technology Stack

- **Framework:** React 19 + Vite + TypeScript
- **Styling:** Tailwind CSS + Custom Design Tokens (Charcoal `#07090e`, Electric Blue `#2563eb`, Cyan `#06b6d4`)
- **Animation & Transitions:** Framer Motion + Canvas API
- **Routing:** React Router v7 with auto scroll-to-top
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans (Body), Space Grotesk (Display / Headlines), JetBrains Mono (Telemetry & Badges)

---

## ⚙️ Configuration & Content Customization

All primary company data, contact details, and project content are centralized for easy maintenance:

1. **Company & Founder Settings (`src/data/siteConfig.ts`):**
   - Update official email: `siteConfig.contact.officialEmail`
   - Configure verified WhatsApp: Set `siteConfig.contact.whatsApp.isConfigured = true` and provide `siteConfig.contact.whatsApp.number`. (The button only renders when configured, preventing dead links).
   - Adjust office location, operating timezone, and availability badges.

2. **Team & Founder Data (`src/data/teamData.ts`):**
   - Founder statement and tenets for **Muhammed Anshid KT**.
   - Core engineering pod designations and responsibility matrices for the 5+ developers.

3. **Projects & Case Studies (`src/data/projectsData.ts`):**
   - Add new projects or update existing concept architectures with metrics, deliverables, and screenshot URLs.

4. **Service Catalogue (`src/data/servicesData.ts`):**
   - Edit the 8 service categories, capabilities, deliverables, and tech stacks.

---

## 💻 Local Development

### Prerequisites
- Node.js `v18+` or `v20+` or `v24+`
- npm `v9+` or `v10+` or `v11+`

### Setup Steps
```bash
# Clone or open the repository
cd portfolio

# Install dependencies
npm install

# Start local development server with hot-reload
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📦 Production Build & Testing

```bash
# Type check and build optimized static assets
npm run build

# Preview the production build locally
npm run preview
```

The output is bundled cleanly into `dist/`.

---

## 🌐 Deployment Instructions

### 1. Vercel (Recommended)
- Push code to your GitHub repository.
- Import into [Vercel](https://vercel.com).
- Framework preset will automatically detect **Vite**.
- Build command: `npm run build`
- Output directory: `dist`
- For client-side routing on Vercel, ensure `vercel.json` contains:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### 2. Cloudflare Pages / Netlify
- Set build command to `npm run build`.
- Set publish directory to `dist`.
- Set redirect rule `/* /index.html 200` for Single Page Application routing.

---

## 📄 License & Attribution

Designed and engineered for **TEKLONICS**.  
Founded by **Muhammed Anshid KT** • All rights reserved.
