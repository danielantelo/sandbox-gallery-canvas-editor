import { fetchImages } from "./query";
import mockResponse from "./__mocks__/list.json";

describe("fetchImages", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementationOnce(
      () =>
        Promise.resolve({
          ok: true,
          // @ts-ignore - ignore missing hader properties
          headers: { 
            get: jest.fn(() => 'list?page=2&limit=30>; rel="next"')
          },
          json: () => Promise.resolve(mockResponse),
        }) as Promise<Response>
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("fetches image data and returns in expected format", async () => {
    const response = await fetchImages();
    expect(response.hasMore).toBeTruthy();
    expect(response.images.length).toBe(1);
    expect(response.images[0]).toEqual({
      id: "0",
      author: "Alejandro Escamilla",
      src: "https://picsum.photos/...",
    });
  });
});
