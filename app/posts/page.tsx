import Link from "next/link";

import { getAllPosts } from "@/app/lib/api";
import type { Post } from "@/app/types/post";
import makeDescriptionFrom from "@/app/lib/makeDescriptionFrom";
import { DESCRIPTION_CHAR_LIMIT } from "@/app/lib/constants";

export default function Posts() {
  const posts = getAllPosts();

  return (
    <>
      {posts.map((post, idx) => (
        <Post data={post} key={idx} />
      ))}
    </>
  );
}

function Post({ data }: { data: Post }) {
  const desc = makeDescriptionFrom(data.content, DESCRIPTION_CHAR_LIMIT);

  return (
    <div className="font-base pl- relative mx-3 mb-12 flex min-h-20 flex-col gap-1.5 rounded-sm">
      <Link href={`/posts/${data.slug}`}>
        <p className="text-3xl font-bold"># {data.title}</p>
      </Link>
      <p className="text-xl">{data.date}</p>
      <p className="text-xl">{desc}...</p>
    </div>
  );
}
