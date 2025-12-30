import Link from "next/link";

const ASSETS = {
  rhombuses: "/img/rhombuses.svg",
};

export default function Card({ content }: { content: React.ReactNode }) {
  return (
    <div className="from-light to-dusk box-border aspect-3/5 max-h-11/12 w-11/12 overflow-auto rounded-4xl bg-linear-to-b sm:h-11/12 sm:w-auto">
      <div className="min-h-10 p-5">
        <CardHeader />
      </div>
      <div className="flex h-full flex-col items-center p-5 text-justify text-xl wrap-break-word">
        {content}
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="text-burgundy font-accent flex w-full items-center justify-between text-3xl capitalize">
      <Link href={"https://github.com/isgin01"}>GitHub</Link>
      <img src={ASSETS.rhombuses} />
      <Link href={"/posts"}>Posts</Link>
    </div>
  );
}
