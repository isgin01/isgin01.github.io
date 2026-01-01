import Link from "next/link";
import { getAllPosts } from "@/app/lib/api";
import type { Post } from "../types/post";
import truncateAtLastWord from "../lib/truncateAtLastWord";

const CHARACTERS_PER_PAGE = 1800;
const DESCRIPTION_LEN = 150;

export default function Posts() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen w-full overflow-x-scroll overflow-y-hidden md:w-4/6 lg:w-3/5 xl:w-2/5">
      <Header />
      {posts.map((post, idx) => (
        <Post key={idx} data={post} />
      ))}
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

function Post({ data }: { data: Post }) {
  const desc = truncateAtLastWord(data.content, DESCRIPTION_LEN);

  return (
    <Link href={`/posts/${data.slug}`}>
      <div className="font-base relative mx-3 mb-5 flex max-h-20 flex-col gap-1.5 rounded-sm pl-3">
        <p className="text-3xl font-bold">
          # {data.title} somewhat longer than it is expected
        </p>
        <p className="text-xl">{data.date} :: ???</p>
        <p className="text-xl">{desc}...</p>
      </div>
    </Link>
  );
}
