import Link from "next/link";
import * as constants from "@/app/lib/constants";

const ASSETS = {
  profileImage: "/img/profile.png",
  rhombuses: "/img/rhombuses.svg",
};

export default function About() {
  return <Card />;
}

function Card() {
  return (
    <div className="from-light to-background box-border flex aspect-3/5 h-full max-h-11/12 w-11/12 flex-col rounded-4xl bg-linear-to-b sm:h-11/12 sm:w-auto">
      <CardHeader />
      <CardContent />
    </div>
  );
}

function CardHeader() {
  return (
    <div className="relative flex min-h-10 shrink-0 items-center justify-between p-5 text-3xl capitalize">
      <Link href={constants.GITHUB_LINK}>GitHub</Link>
      <img src={ASSETS.rhombuses} className="absolute right-0 left-0 m-auto" />
      <Link href={"/posts"}>Posts</Link>
    </div>
  );
}

function CardContent() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-5 text-justify text-xl">
      <div className="flex justify-center">
        <img src={ASSETS.profileImage} className="max-h-30 rounded-full" />
      </div>
      <div className="my-5 flex flex-col items-center justify-center">
        <p className="text-2xl">isgin01</p>
        <p className="font-special text-3xl">Javascript Developer</p>
      </div>
    </div>
  );
}
