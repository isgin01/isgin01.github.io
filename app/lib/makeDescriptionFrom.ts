export default function makeDescriptionFrom(text: string, charLimit: number) {
  const cutText = cut(text, charLimit);
  return cutDangingComma(cutText);
}

function cut(text: string, charLimit: number): string {
  if (text.length <= charLimit) {
    return cutDangingComma(text);
  }

  // add one more in case there is a whitespace right
  // after the limit to avoid cutting the last word
  const cutRaw = text.slice(0, charLimit + 1);
  const lastBlankIdx = cutRaw.lastIndexOf(" ");

  if (lastBlankIdx == -1) {
    // There are no whitespaces in the string
    return cutRaw;
  }

  const cutSmart = cutRaw.slice(0, lastBlankIdx);

  return cutSmart;
}

export function cutDangingComma(text: string) {
  if (text[text.length - 1] == ",") {
    return text.slice(0, -1);
  }
  return text;
}
