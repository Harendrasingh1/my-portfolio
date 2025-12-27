# My Portfolio

A stunning, responsive, and high-performance developer portfolio website built with modern web technologies. This project is highly customizable and designed to showcase your skills, experience, and projects in a visual and interactive way.


## ✨ Features

- **Standard Modern Tech Stack**: Built with React (Vite), Tailwind CSS, and Framer Motion.
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices.
- **Glassmorphism UI**: Trendy glass UI components with backdrop blur effects.
- **3D Animations**: Interactive 3D tilt effects on cards and skills.
- **Smooth Navigation**: Sticky header with scroll-spy navigation and mobile drawer.
- **EmailJS Integration**: Functional contact form without a backend server.
- **Centralized Data**: Easily update content via a single configuration file (`src/data/portfolio.js`).

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **3D Effects**: React Parallax Tilt
- **Forms**: EmailJS
- **Router**: React Scroll

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Git](https://git-scm.com/)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Harendrasingh1/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in browser**:
    Navigate to `http://localhost:5173` to see your portfolio live!

## � Personalization & Usage

The project is designed to be easily customizable. You don't need to dive deep into the component code to change the content.

### 1. Update Content
Navigate to `src/data/portfolio.js`. This file contains all the data for the website:
- **Header**: Name and navigation links.
- **Hero**: Name, title, subtitle, and social links.
- **About**: Bio and highlights.
- **Education**, **Experience**, **Skills**, **Projects**, **Achievements**: Add or modify entries in the respective arrays.

### 2. Update Images
- Place your images (profile photos, project screenshots, logos) in `public/assets/` folder.
- Update the paths in `src/data/portfolio.js` (e.g., `logo: "/assets/my-logo.png"`).

### 3. Contact Form Setup (EmailJS)
To make the contact form functional:
1.  Create an account at [EmailJS](https://www.emailjs.com/).
2.  Get your **Service ID**, **Template ID**, and **Public Key**.
3.  Open `src/components/Footer.jsx` and update the `emailjs.sendForm` function with your credentials:
    ```javascript
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    ```

### 4. Build for Production
To create an optimized build for deployment:
```bash
npm run build
```
The output will be in the `dist` folder.

## 🤝 Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
Built with ❤️ by [Harendra Singh](https://github.com/Harendrasingh1)
