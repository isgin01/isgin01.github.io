import Link from "next/link";
import { getAllPosts } from "@/app/lib/api";

export default function Posts() {
  const posts = getAllPosts();

  return (
    <div className="bg-light min-h-screen w-full overflow-x-scroll md:w-4/6 lg:w-3/5 xl:w-2/5">
      <Header />
      {posts.map((post, idx) => (
        <Post
          key={idx}
          title={post.title}
          date={post.date}
          description={post.description}
        />
      ))}
    </div>
  );
}

function Header() {
  return (
    <div className="bg-mud font-accent text-dusk mb-14 flex h-15 w-full flex-row items-center justify-around text-[clamp(2em,5vw,3em)]">
      <Link href="https://github.com/isgin01">GitHub</Link>
      <Link href="/">About</Link>
    </div>
  );
}

function Post({
  title,
  date,
  description,
}: {
  title: string;
  date: string;
  description: string;
}) {
  return (
    <div className="font-base text-burgundy mx-3 mb-5 flex h-20 bg-red-100">
      <div className="bg-burgundy aspect-square h-full"></div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{date}</p>
    </div>
  );
}
