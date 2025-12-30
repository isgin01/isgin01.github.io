import type { Metadata } from "next";
import { Inria_Serif, Forum, IM_Fell_English_SC } from "next/font/google";
import "@/app/globals.css";

export const accentFont = Inria_Serif({
  weight: "400",
  variable: "--font-accent",
  subsets: ["latin"],
});

export const baseFont = Forum({
  weight: "400",
  variable: "--font-base",
  subsets: ["latin"],
});

export const specialFont = IM_Fell_English_SC({
  weight: "400",
  variable: "--font-special",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "isgin01's ruminations",
  // TODO
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${accentFont.variable} ${baseFont.variable} ${specialFont.variable}`}
    >
      <body className="flex h-screen w-screen flex-col items-center justify-center antialiased">
        {children}
      </body>
    </html>
  );
}
