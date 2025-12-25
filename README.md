# Harendra Singh - Premium Full Stack Portfolio

A high-performance, responsive personal portfolio website built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**.  
Designed with a "Premium" aesthetic featuring a custom dark theme, glassmorphism UI, and smooth animations.

## 🚀 Tech Stack

- **Core**: React 19 (Vite)
- **Styling**: Tailwind CSS (Custom Dark Theme, Glassmorphism)
- **Animations**: Framer Motion
- **Icons**: Lucide React / React Icons
- **Forms**: EmailJS (Serverless Contact Form)

## ✨ Features & Sections

The application is structured into 10 key sections, rendered sequentially:

1.  **Header**: Sticky navigation with glass effect and mobile drawer.
2.  **Hero Section**: High-impact landing with 3D/Abstract visuals and "Full Stack Engineer" typewriter effect.
3.  **About Me**: Professional bio and highlights.
4.  **Education**: Academic details (IIIT Allahabad).
5.  **Experience**: Vertical timeline of work history (Urban Company, IIIT).
6.  **Skills**: Interactive marquee/badges (C++, React, AWS, etc.).
7.  **Projects**: Grid layout showcasing key projects (BuyNow, Mausam app).
8.  **Achievements & Profiles**: Hackathon wins and coding profile cards (LeetCode, Codeforces).
9.  **Positions of Responsibility**: Leadership roles.
10. **Footer**: Integrated Contact Form and social links.

## 🛠️ Installation & Setup

Ensure you have Node.js installed.

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

## 📁 Project Structure

- **`src/data/portfolio.js`**: Centralized configuration file containing all text, links, and data.
- **`src/components/`**: Reusable UI components.
- **`src/sections/`**: Dedicated components for each of the 10 portfolio sections.
- **`src/App.jsx`**: Main entry point.

## 🎨 Customization

All content is managed via `src/data/portfolio.js`. Update this file to change text, links, and images without touching the core component logic.
