import Link from "next/link";

const ASSETS = {
  profileImage: "/img/profile.png",
  rhombuses: "/img/rhombuses.svg",
  github: "https://github.com/isgin01",
};

export default function About() {
  return <Card />;
}

function Card() {
  return (
    <div className="text-burgundy from-light to-dusk box-border flex aspect-3/5 h-full max-h-11/12 w-11/12 flex-col rounded-4xl bg-linear-to-b sm:h-11/12 sm:w-auto">
      <div className="min-h-10 shrink-0 p-5">
        <CardHeader />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="p-5 text-justify text-xl wrap-break-word">
          <CardContent />
        </div>
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="text-burgundy font-accent flex w-full items-center justify-between text-3xl capitalize">
      <Link href={ASSETS.github}>GitHub</Link>
      <img src={ASSETS.rhombuses} />
      <Link href={"/posts"}>Posts</Link>
    </div>
  );
}

function CardContent() {
  return (
    <>
      <div className="flex justify-center">
        <img src={ASSETS.profileImage} className="max-h-30 rounded-full" />
      </div>
      <div className="my-5 flex flex-col items-center justify-center">
        <p className="font-accent text-2xl">isgin01</p>
        <p className="font-special text-3xl">Javascript Developer</p>
      </div>
    </>
  );
}
