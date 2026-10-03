# 🛡️ OneLogin — University Central Identity & Single Sign-On (SSO) Platform

![Vercel Deployment](https://img.shields.io/badge/Vercel-Deploy--Ready-black?style=for-the-badge&logo=vercel)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite)
![IEEE Standard](https://img.shields.io/badge/IEEE-830_SRS-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**OneLogin** is a market-ready, enterprise-grade Central Identity Governance & Single Sign-On (SSO) Web Platform engineered for university application ecosystems according to IEEE 830 / ISO/IEC/IEEE 29148 standards.

It consolidates authentication across **9 core university applications** (Cloud SaaS & In-House Web Apps), eliminating password fatigue, enforcing TOTP multi-factor security, and reducing IT helpdesk password reset ticket volume by **75%**.

---

## 🌟 Key Features

- **🌐 High-Converting Landing Page**: Clean marketing landing page featuring live stats, capabilities grid, and interactive dashboard teaser.
- **🚀 Unified SSO Launchpad**: Seamless SAML 2.0, OpenID Connect, OAuth 2.0, and signed RSA-256 JWT assertion pass-through across 9 university apps.
- **🛡️ Hardware TOTP & WebAuthn MFA Hub**: Rolling 6-digit TOTP generator with a 30-second countdown ring, QR authenticator setup, and real-time code verifier.
- **🔑 Self-Service Password Reset (SSPR) & Account Unlock**: 4-stage credential recovery wizard with a Password Entropy Strength Meter and Confetti celebration.
- **⚡ Helpdesk ROI & Schedule Analytics (INR ₹)**: Interactive labor cost savings calculator in Indian Rupees (**₹63 Lakhs/year saved**, **210 hours/month reclaimed**) and Recharts performance load graphs.
- **👥 Role-Based Access Control (RBAC) Claims Sandbox**: Centralized role entitlement matrix for Students, Faculty, Staff, and IT Admins with custom JWT claim editor.
- **🔄 LDAP Directory Sync & Audit Stream**: Automated Active Directory sync engine and real-time updating timestamped event audit trail.
- **🚪 Single Sign-Out (SLO) Broadcast**: Centralized logout propagating token revocation signals across all connected web application sessions simultaneously.

---

## 📊 Phased Scope & ROI Metrics

| Metric | Specification | Value |
| :--- | :--- | :--- |
| **Active Target Scope** | Core Applications | **9 Apps** (4 Cloud SaaS + 5 In-House Web Apps) |
| **Vendor Scope Reduction** | Legacy Vendor Apps | **3 Apps Cut/Deferred** (Saving 45 Person-Days) |
| **Total Integration Effort** | Development Days | **52 Person-Days** |
| **Buffered Schedule** | 2-Engineer Team | **6.5 Weeks** (9.5-Week Safety Buffer vs 16-Wk Deadline) |
| **Helpdesk Ticket Reduction**| Password Resets | **75% Reduction** (1,050 tickets saved/month) |
| **Reclaimed IT Workload** | Labor Hours | **210 Hours/Month** (2,520 Hours/Year) |
| **Annual Financial Savings** | Cost Savings in INR | **₹63 Lakhs / year** (reclaiming 1.31 FTE staff capacity) |

---

## 🚀 Quickstart Guide

### 1. Local Development

```bash
# Clone repository
git clone https://github.com/AtharvaKalekar/Software-Engineering-Project-Management-.git
cd Software-Engineering-Project-Management-/onelogin-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **http://localhost:5173/** in your browser.

---

## ☁️ Vercel Deployment

This repository is **Vercel Deploy Ready** out-of-the-box!

### Deploy via Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Deploy via GitHub Integration:
1. Go to [Vercel Dashboard](https://vercel.com/new).
2. Import the repository `AtharvaKalekar/Software-Engineering-Project-Management-`.
3. Set **Root Directory** to `onelogin-app` (or leave as root `/` — root `vercel.json` will build automatically).
4. Click **Deploy**! 🚀

---

## 📁 Repository Structure

```
.
├── vercel.json                        # Root Vercel build configuration
├── README.md                          # Repository documentation
├── .gitignore                         # Environment & dependency ignores
├── Documents/                         # Compiled IEEE 830 PDF Reports & Specifications
└── onelogin-app/                      # React + Vite Market-Ready Web Application
    ├── vercel.json                    # Subdirectory Vercel configuration
    ├── package.json                   # App dependencies & scripts
    ├── index.html                     # HTML entry point with Google Fonts
    └── src/
        ├── components/
        │   ├── Header.jsx             # Light Mode Navigation & Status Bar
        │   ├── LandingPage.jsx        # High-Converting Clean Landing Page
        │   ├── AppLaunchpad.jsx       # 9 Core Apps & Token Inspector Modal
        │   ├── MfaHub.jsx             # 30s TOTP Generator & Verifier
        │   ├── SsprWizard.jsx         # 4-Stage Password Reset & Unlock Tool
        │   ├── AnalyticsDashboard.jsx # INR ROI Calculator & Recharts Graphs
        │   ├── RbacInspector.jsx      # RBAC Matrix & JWT Claims Sandbox
        │   ├── DirectorySyncLogs.jsx  # LDAP Sync & Real-Time Audit Stream
        │   └── SloModal.jsx           # Single Sign-Out Revocation Broadcast Modal
        ├── data/
        │   └── appsData.js            # 9 Core Applications metadata & tokens
        ├── App.jsx                    # Routing & state manager
        └── index.css                  # Senior Light Mode design system
```

---

## 📜 Standards Compliance & License

Engineered in full compliance with **IEEE 830 / ISO/IEC/IEEE 29148** requirements for Software Requirements Specifications (SRS).

Licensed under the **MIT License**.
