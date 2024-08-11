import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from '@/components/sidebar'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code94",
  description: "Code94 labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen w-full">
          <Sidebar />
          <div className="w-full h-screen flex flex-col ml-[18.5rem] pr-2 md:pl-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
