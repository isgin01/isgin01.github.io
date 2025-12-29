import Link from "next/link";

export default function Card({ content }: { content: React.ReactNode }) {
  return (
    <div className="box-border aspect-3/5 max-h-11/12 w-11/12 overflow-auto rounded-4xl border-2 border-black bg-amber-100 sm:h-11/12 sm:w-auto">
      <div className="min-h-10 p-5">
        <CardHeader />
      </div>
      <div className="min-h-20 p-5 text-justify text-xl wrap-break-word">
        {content}
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="flex w-full items-center justify-between text-2xl font-black capitalize">
      <Link href={"/about"}>About</Link>
      <Link href={"/posts"}>Posts</Link>
    </div>
  );
}
