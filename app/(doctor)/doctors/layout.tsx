import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globalsDoctors.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mental Health | Doctors",
  description: "Mental Health web app",
};

export default function DoctorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">Doc header</div>
        {children}
      </body>
    </html>
  );
}
