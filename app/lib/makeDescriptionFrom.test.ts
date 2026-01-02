import makeDescriptionFrom, { cutDangingComma } from "./makeDescriptionFrom";

const INPUT =
  "Lorem ipsum dolor, sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim";

describe("must return lines of correct length with properly cut words", () => {
  it("string length is equal to limit, must return unmodified string", () => {
    const input = "short, string";
    const actual = makeDescriptionFrom(input, input.length);
    expect(actual).toBe(input);
  });

  it("string length is shorter than limit, must return unmodified string", () => {
    const input = "short, string";
    const actual = makeDescriptionFrom(input, input.length + 1);
    expect(actual).toBe(input);
  });

  it("nothing to change", () => {
    const actual = makeDescriptionFrom(INPUT, INPUT.length);
    expect(actual).toBe(INPUT);
  });

  it("a single word", () => {
    const expected = "Lorem";
    const actual = makeDescriptionFrom(INPUT, expected.length);
    expect(actual).toBe(expected);
  });

  it("normal situation", () => {
    const expected = "Lorem ipsum dolor, sit amet, consectetur";
    const actual = makeDescriptionFrom(INPUT, expected.length);
    expect(actual).toBe(expected);
  });

  it("limit cuts word in half, must not include it", () => {
    const input = "Lorem, ipsum dolor sit, amet";
    const expected = "Lorem, ipsum";
    const actual = makeDescriptionFrom(input, input.length / 2);
    expect(actual).toBe(expected);
  });

  it("should cut dangling commas; middle of the string", () => {
    const input = "Lorem, ipsum dolor, sit, amet";
    const expected = "Lorem, ipsum dolor, sit";
    const actual = makeDescriptionFrom(input, expected.length + 1);
    expect(actual).toBe(expected);
  });

  it("should cut dangling commas: end of the string", () => {
    const input = "Lorem, ipsum dolor, sit amet,";
    const expected = "Lorem, ipsum dolor, sit amet";
    const actual = makeDescriptionFrom(input, expected.length + 1);
    expect(actual).toBe(expected);
  });
});

describe("cutDangingComma tests", () => {
  it("one word", () => {
    const input = "word,";
    const expected = "word";
    const actual = cutDangingComma(input);
    expect(actual).toBe(expected);
  });

  it("sentence", () => {
    const input = "word, word, word,";
    const expected = "word, word, word";
    const actual = cutDangingComma(input);
    expect(actual).toBe(expected);
  });

  it("no dangling comma", () => {
    const input = "word, word, word";
    const expected = "word, word, word";
    const actual = cutDangingComma(input);
    expect(actual).toBe(expected);
  });
});
