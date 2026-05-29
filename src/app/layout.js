import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700', '800'] });

export const metadata = {
  title: "Ayush Khaitan | Full Stack Developer",
  description: "Building scalable web applications and AI-powered solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
