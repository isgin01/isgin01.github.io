import Link from "next/link";

export default function CardHeader() {
  return (
    <div className="flex w-full items-center justify-between text-2xl font-black capitalize">
      <Link href={"/about"}>About</Link>
      <Link href={"/posts"}>Posts</Link>
    </div>
  );
}
