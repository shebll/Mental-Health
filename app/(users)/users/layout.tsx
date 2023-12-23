import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globalsUsers.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mental Health",
  description: "Mental Health web app",
};

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">users layout</div>
        {children}
      </body>
    </html>
  );
}
