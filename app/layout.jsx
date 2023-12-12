import { Mulish } from "next/font/google";

import "./styles/globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Trafalgar - Next.js 14 Landing Page",
  description: "Front-end Developer Duccini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
