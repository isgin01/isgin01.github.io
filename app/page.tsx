import Link from "next/link";
import * as constants from "@/app/lib/constants";

const ASSETS = {
  profileImage: "/img/profile.png",
};

export default function About() {
  return (
    <>
      <div className="mb-7 flex min-h-30 w-full items-center justify-center p-2">
        <img src={ASSETS.profileImage} alt="isgin01's picture" />
      </div>
      <div className="mb-7 flex items-center justify-center text-2xl">
        @isgin01
      </div>
      <div className="mb-15 flex h-5 w-full justify-around text-xl font-semibold text-wrap">
        <Link href={`mailto:${constants.EMAIL}`}>{constants.EMAIL}</Link>
        ::
        <Link href={constants.GITHUB_LINK}>GitHub</Link>
        ::
        <Link href={constants.GITHUB_LINK}>Telegram</Link>
        ::
        <Link href={constants.MATRIX}>{constants.MATRIX}</Link>
      </div>
      <div className="flex min-h-20 w-full flex-col justify-center text-justify text-xl">
        <p>
          A hardcore JS developer. I have worked on{" "}
          <Link href="https://audata.space" className="underline">
            audata.space
          </Link>
          where I learned how little did I know about suffering. I have
          co-developed{" "}
          <Link
            href="https://github.com/cape4labs/sunflower_wallet_app"
            className="underline"
          >
            sunflower.btc
          </Link>
          where I learned that I should master one technology first before going
          after another one. Finally, when I worked on
          <Link
            href="https://github.com/cape4labs/sunflower_wallet_app"
            className="underline"
          >
            cape4labs.tech
          </Link>
          I realized that I'm going to become a hardcore programmer, so I made
          my way to countless books I want to read (I'm still at the stage of
          reading them).
        </p>
      </div>
    </>
  );
}
