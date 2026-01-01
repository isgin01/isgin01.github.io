import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "@/app/globals.css";

export const baseFont = Inria_Sans({
  weight: "400",
  variable: "--font-base",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "isgin01's blog",
  // TODO
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baseFont.variable}`}>
      <body className="flex min-h-screen w-screen flex-col items-center justify-center overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
