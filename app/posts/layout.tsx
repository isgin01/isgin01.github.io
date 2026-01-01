import Link from "next/link";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mb-30 min-h-screen w-full md:w-4/6 lg:w-3/5 xl:w-2/5">
      <Header />
      {children}
    </div>
  );
}

function Header() {
  return (
    <div className="font-base mb-14 flex h-15 w-full flex-row items-center justify-end gap-5 text-[clamp(2em,5vw,2em)]">
      <Link href="/">About</Link>
    </div>
  );
}
