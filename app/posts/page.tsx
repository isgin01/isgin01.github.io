import Link from "next/link";
import { getAllPosts } from "@/app/lib/api";
import type { Post } from "@/app/types/post";
import truncateAtLastWord from "@/app/lib/truncateAtLastWord";

const DESCRIPTION_LEN = 150;

export default function Posts() {
  const posts = getAllPosts();

  return (
    <div className="mb-30 min-h-screen w-full md:w-4/6 lg:w-3/5 xl:w-2/5">
      <Header />
      {posts.map((post, idx) => (
        <Post data={post} key={idx} />
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
    <div className="font-base pl- relative mx-3 mb-12 flex min-h-20 flex-col gap-1.5 rounded-sm">
      <Link href={`/posts/${data.slug}`}>
        <p className="text-3xl font-bold"># {data.title}</p>
      </Link>
      <p className="text-xl">{data.date} :: ???</p>
      <p className="text-xl">{desc}...</p>
    </div>
  );
}
