import type { Post } from "@/app/types/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const POSTS_DIRECTORY = join(process.cwd(), "_posts");

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // Sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPostSlugs(): string[] {
  return fs.readdirSync(POSTS_DIRECTORY);
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPostPath = join(POSTS_DIRECTORY, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPostPath, "utf-8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}
