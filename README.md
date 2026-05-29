# Ayush Khaitan Portfolio

Welcome to the source code of my personal portfolio website! This project is a modern, fully responsive, and highly interactive full-stack web application designed to showcase my skills, experience, and projects.

It features a unique "Glassmorphism" dark-mode aesthetic with smooth scroll animations, glowing elements, and a dynamic backend.

## 🚀 Live Demo
*a-kfolio.vercel.app*

## ✨ Key Features
- **Modern UI/UX**: Built entirely without CSS frameworks like Tailwind. Every pixel is styled using custom CSS modules featuring glassmorphism, neon glows, and micro-interactions.
- **Dynamic Data Layer**: Instead of hardcoding content, all portfolio data (Skills, Experience, Projects) is completely decoupled into a single `portfolioData.json` database layer.
- **Full-Stack Architecture**: Uses Next.js API Routes (`/api/portfolio`, `/api/contact`) to simulate backend endpoints for fetching data and securely handling contact form submissions.
- **Interactive Animations**: Powered by Framer Motion, featuring physics-based scroll-reveals, 3D hover states, and dynamic typing (`react-typed`).
- **Fully Responsive**: Flawlessly adapts to any screen size—from large 4K monitors to small mobile phones, including a custom sliding hamburger menu.
- **Premium Typography**: Uses the highly modern `Outfit` Google Font for a crisp, high-end look.

## 🛠️ Technology Stack
- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Frontend Library**: [React.js](https://react.dev/)
- **Backend**: Node.js (via Next.js Edge API Routes)
- **Styling**: Vanilla CSS Modules (`.module.css`)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: `react-icons` & `lucide-react`

## 📂 Project Structure

```text
├── public/                 # Static assets (Project mockups, icons, etc.)
├── src/
│   ├── app/                # Next.js App Router root
│   │   ├── api/            # Backend Node.js API endpoints
│   │   ├── globals.css     # Global theme variables & resets
│   │   ├── layout.js       # Global HTML layout and Font injection
│   │   ├── page.js         # Main React application & UI components
│   │   └── page.module.css # Core custom CSS logic & responsive media queries
│   └── data/               
│       └── portfolioData.json # The "Database" schema holding all portfolio content
├── next.config.mjs         # Next.js configuration
└── package.json            # Project dependencies
```

## ⚙️ How to Run Locally

If you'd like to clone and run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/AyushKhaitan1/AKfolio.git
   cd AKfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **View the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📬 Contact
Feel free to reach out to me for collaborations, internships, or open roles!
- **Email**: ayushkhaitan2004@gmail.com
- **LinkedIn**: [in/ayush-khaitan-](https://www.linkedin.com/in/ayush-khaitan-/)
- **GitHub**: [AyushKhaitan1](https://github.com/AyushKhaitan1)

---
*Designed & Built by Ayush Khaitan.*
