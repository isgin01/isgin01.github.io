import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "@/app/globals.css";
import Link from "next/link";

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
        <div className="mb-20 min-h-screen w-full md:w-4/6 lg:w-3/5 xl:w-2/5">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

function Header() {
  return (
    <nav className="font-base mb-10 flex h-15 w-full flex-row items-center justify-end gap-5 text-2xl">
      <Link href="/">About</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
}
