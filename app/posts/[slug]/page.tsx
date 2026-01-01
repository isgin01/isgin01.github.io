import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/app/lib/api";
import convertToHtmlFrom from "@/app/lib/convertToHtmlFrom";
import Link from "next/link";
import makeDescriptionFrom from "@/app/lib/makeDescriptionFrom";
import * as constants from "@/app/lib/constants";

const WEBSITE_URL = "https://isgin01.github.io";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await convertToHtmlFrom(post.content || "");

  return (
    <>
      <h1 className="mb-5 text-3xl"> {post.title}</h1>
      <p className="mb-5 text-xl">
        {post.date} by <Link href={constants.GITHUB_LINK}>isgin01</Link>
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

  const title = `${post.title}`;
  const description = makeDescriptionFrom(post.content);

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
