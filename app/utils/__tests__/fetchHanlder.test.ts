import fetchHandler from "../fetchHandler";

describe("fetchHandler", () => {
  it("should return a promise", () => {
    expect(fetchHandler("https://api.github.com")).toBeInstanceOf(Promise);
  });
});
