import type { Metadata } from "next";
import { fontGilroy } from "./assets/fonts";
import "./globals.css";
import MainLayout from "./components/layouts/MainLayout";


export const metadata: Metadata = {
  title: "Omniassist AI",
  description: "Omniassist AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontGilroy.variable} antialiased`}
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
