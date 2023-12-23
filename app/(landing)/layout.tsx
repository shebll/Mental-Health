import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globalsLanding.css";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mentality",
  description: "Mentality For Mental Health",
  icons: { icon: "/landingImages/logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
