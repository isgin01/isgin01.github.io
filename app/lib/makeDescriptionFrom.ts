const DESCRIPTION_CHAR_LIMIT = 150;

export default function makeDescriptionFrom(text: string) {
  if (text.length <= DESCRIPTION_CHAR_LIMIT) {
    return text;
  }

  const cutRaw = text.slice(0, DESCRIPTION_CHAR_LIMIT - 1);
  const lastBlankIdx = cutRaw.lastIndexOf(" ");
  const cutSmart = cutRaw.slice(0, lastBlankIdx);

  return cutSmart;
}
