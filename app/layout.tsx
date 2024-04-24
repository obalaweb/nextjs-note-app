import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Note from "./components/Note";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const fetchCache = "default-no-store";

export const metadata: Metadata = {
  title: "Note",
  description: "Next note taking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Note />
        {children}
        <Footer />
      </body>
    </html>
  );
}
