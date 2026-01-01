import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/app/lib/api";
import markdownToHtml from "@/app/lib/markdownToHtml";
import Link from "next/link";

// TODO extract it to constants.ts
const WEBSITE_URL = "https://isgin01.github.io";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <h1 className="mb-5 text-3xl"> {post.title}</h1>
      <p className="mb-5 text-xl">
        {post.date} by <Link href="https://github.com/isgin01">isgin01</Link>
      </p>
      <div
        className="flex flex-col gap-9 text-justify text-xl"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | isgin01's whispers`;
  const description = post.description;

  return {
    title,
    description,
    openGraph: {
      url: WEBSITE_URL,
      type: "website",
      title,
      description,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
