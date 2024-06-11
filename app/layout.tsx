import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const fira = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jan Philipps",
  description: "Portfolio of Jan Philipps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira.className}>{children}</body>
    </html>
  );
}
