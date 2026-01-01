export default function truncateAtLastWord(text: string, charLimit: number) {
  if (text.length <= charLimit) {
    return text;
  }

  const cutRaw = text.slice(0, charLimit - 1);
  const lastBlankIdx = cutRaw.lastIndexOf(" ");
  const cutSmart = cutRaw.slice(0, lastBlankIdx);

  return cutSmart;
}
