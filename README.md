# Aman Solanki — Python Full Stack Developer Portfolio

A modern, highly professional, responsive, and ATS/recruiter-friendly portfolio website for **Aman Solanki**, B.Tech Computer Science Graduate & Python Full Stack Developer.

Designed specifically for hiring managers, technical recruiters, and engineering teams, highlighting core proficiencies in **Python, Django, Django REST Framework, REST APIs, and React.js**.

---

## 🌟 Key Highlights & Features

- **Recruiter & ATS-Friendly**:
  - Clear, authentic messaging highlighting Computer Science degree and verified full-stack development training.
  - Interactive ATS Resume viewer modal with **Print to PDF** capability, direct HTML resume preview (`/Aman_Solanki_Resume.html`), and one-click **Plain Text Resume copy** for ATS job portals.
- **Modern Dark Theme Aesthetic**:
  - Built with a sleek dark palette (`#030712`), subtle indigo/purple gradients, and glassmorphism.
  - Interactive live code workstation in the Hero section showcasing real Django REST Framework ViewSets and React client components.
- **Categorized Skills**:
  - Filterable skill cards across **Backend, Frontend, Tools & DevOps, and Soft Skills**.
  - Strict adherence to specified requirements (exclusively focused on Python, Django, DRF, React, REST APIs, and modern developer tools).
- **Featured Project Showcases**:
  1. **Student Support Ticket System** (Python, Django REST Framework, JWT Authentication, REST API, SQLite/PostgreSQL)
  2. **Product Management System** (React.js, JavaScript, REST API, Tailwind CSS)
  3. **Full Stack AI / Capstone Project** (React.js, Python, REST APIs)
  - Each project includes Live Demo, GitHub links, and an **"Architecture & API Specs"** modal with verified REST endpoint tables and system design diagrams.
- **Experience & Training**:
  - Clearly and honestly labeled as **Specialized Full Stack Training** at **Tops Technologies, Ahmedabad**, breaking down modular competencies.
- **Academic Foundation**:
  - **B.Tech in Computer Science** from **Chartered Institute of Technology (CIT)** highlighting core CS coursework (Data Structures, Algorithms, DBMS, OOP, Networks).
- **Interactive Contact**:
  - Validated contact form with interactive dispatch feedback.
  - One-click copy buttons for email (`amansolanki.dev@gmail.com`) and phone with animated tooltips.
  - Direct links to GitHub and LinkedIn.

---

## 🛠️ Tech Stack

- **Frontend**: React.js 19, JavaScript (ES6+), Tailwind CSS v4, HTML5, Lucide Icons
- **Backend Architecture**: Python 3.11, Django, Django REST Framework (DRF), JWT Authentication, REST APIs
- **Build Tooling**: Vite 8, Rolldown bundler

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory, ready to be deployed to Vercel, Netlify, or GitHub Pages.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   ├── Aman_Solanki_Resume.html  # Clean printable ATS-formatted resume
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky navbar with active section highlight & resume CTA
│   │   ├── Hero.jsx              # Hero section with interactive live IDE workstation
│   │   ├── About.jsx             # Professional profile & CS background
│   │   ├── Skills.jsx            # Categorized skills with interactive filter tabs
│   │   ├── Projects.jsx          # Project cards with interactive visual previews
│   │   ├── ProjectModal.jsx      # Architecture & verified REST API endpoints modal
│   │   ├── Experience.jsx        # Tops Technologies Full Stack Training showcase
│   │   ├── Education.jsx         # B.Tech in CSE at Chartered Institute of Technology
│   │   ├── ResumeCTA.jsx         # Dedicated recruiter callout banner
│   │   ├── Contact.jsx           # Form with validation & one-click contact copy
│   │   ├── Footer.jsx            # Dark footer with social links & back-to-top
│   │   ├── ResumeModal.jsx       # In-browser ATS resume preview & print-to-PDF
│   │   └── Icons.jsx             # Scalable vector icons for GitHub, LinkedIn, Python, React
│   ├── data/
│   │   └── portfolioData.js      # Central data model for easy editing of all content
│   ├── App.jsx                   # Master application layout
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Tailwind v4 configuration & custom glassmorphism styles
├── index.html                    # SEO meta tags, Open Graph, and typography
├── package.json
└── vite.config.js
```

---

## ✏️ How to Customize Personal Details

All portfolio content is centralized in [`src/data/portfolioData.js`](file:///c:/Users/Aman/Desktop/Job/Potfoliyo%20Aman/src/data/portfolioData.js). To update contact info, social links, or project details:
- Edit `personalInfo` (email, phone, LinkedIn URL, GitHub URL).
- Edit `projectsData` to add new live URLs or repository links.
- Edit `public/Aman_Solanki_Resume.html` to update the printable ATS resume.
