import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import html from "remark-html";

export default async function convertToHtmlFrom(markdown: string) {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkMath)
    .use(html)
    .process(markdown);
  return result.toString();
}
