import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globalsAdmins.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mental Health | Admins",
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
        <div className="">admin header</div>
        {children}
      </body>
    </html>
  );
}
