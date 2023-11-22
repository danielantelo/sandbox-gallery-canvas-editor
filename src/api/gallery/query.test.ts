import { fetchImage, fetchImages } from "./query";
import mockListResponse from "./__mocks__/list.json";
import mockInfoResponce from "./__mocks__/info.json";

describe("fetchImages", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("fetches image listing in expected format", async () => {
    jest.spyOn(global, "fetch").mockImplementationOnce(
      () =>
        Promise.resolve({
          ok: true,
          // @ts-ignore - ignore missing hader properties
          headers: {
            get: jest.fn(() => 'list?page=2&limit=30>; rel="next"'),
          },
          json: () => Promise.resolve(mockListResponse),
        }) as Promise<Response>
    );

    const response = await fetchImages();
    expect(response.hasMore).toBeTruthy();
    expect(response.images.length).toBe(1);
    expect(response.images[0]).toEqual({
      id: "0",
      author: "Alejandro Escamilla",
      preview: "https://picsum.photos/id/0/250",
    });
  });

  it("fetches image info", async () => {
    jest.spyOn(global, "fetch").mockImplementationOnce(
      () =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockInfoResponce),
        }) as Promise<Response>
    );

    const response = await fetchImage("1");
    expect(response).toEqual({
      height: 3744,
      width: 5616,
      author: "Alejandro Escamilla",
      src: "https://picsum.photos/...",
    });
  });
});
