import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interThin = localFont({
  src: "./fonts/Inter-Thin.ttf",
  variable: "--font-inter-thin",
  weight: "100",
});

const interRegular = localFont({
  src: "./fonts/Inter-Regular.ttf",
  variable: "--font-inter-regular",
  weight: "100",
});

const interBold = localFont({
  src: "./fonts/Inter-Bold.ttf",
  variable: "--font-inter-bold",
  weight: "100",
});

export const metadata: Metadata = {
  title: "Joe Cuffney | Home",
  description: "Joe Cuffney's landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interThin.variable} ${interRegular.variable} ${interBold.variable}`}>
        {children}
      </body>
    </html>
  );
}
