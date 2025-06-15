# Focus Attempt - Pulse Landing Page

A modern full-stack application featuring a beautiful landing page for Pulse, designed to help users unlock hidden global opportunities through AI-powered company profiles.

## 🎨 Design

This application is meticulously implemented based on the Figma design provided, featuring:

- **Hero Section** with interactive world map background
- **Modern Typography** using Instrument Serif and Space Grotesk fonts
- **Gradient Overlays** and glass morphism effects
- **Responsive Design** optimized for web (mobile/tablet coming in future iterations)
- **Interactive Elements** with hover states and animations

## 🏗️ Project Structure

```
focus-attempt/
├── frontend/                 # Next.js 14 frontend application
│   ├── app/                 # Next.js 13+ app directory
│   │   ├── components/      # Reusable React components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── CTAButtons.tsx
│   │   │   ├── TargetAudience.tsx
│   │   │   └── WorldMap.tsx
│   │   ├── globals.css      # Global styles with Tailwind
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── public/
│   │   └── assets/          # Figma-exported SVG assets
│   ├── package.json
│   ├── tailwind.config.js   # Custom Tailwind configuration
│   ├── postcss.config.js
│   ├── next.config.js
│   └── tsconfig.json
├── backend/                 # Node.js/Express backend API
│   ├── src/
│   │   └── server.ts        # Express server setup
│   ├── config/
│   │   └── env.example      # Environment variables template
│   ├── package.json
│   └── tsconfig.json
├── package.json             # Root package.json for concurrent development
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (if from git) or ensure you're in the project directory

2. **Install all dependencies**:
   ```bash
   npm run install:all
   ```

3. **Start the development servers**:
   ```bash
   npm run dev
   ```

   This will start both frontend (http://localhost:3000) and backend (http://localhost:5001) concurrently. 