import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar, Footer } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
export const metadata: Metadata = {
  title: "Template",
  description: "Template for Next.js + TypeScript + Tailwind CSS ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-2xl h-screen m-auto flex flex-col justify-between    ">
        <ThemeProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
