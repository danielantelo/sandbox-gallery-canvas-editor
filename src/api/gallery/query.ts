interface ApiImage {
  id: string;
  author: string;
  url: string;
  width: number;
  height: number;
  download_url: string;
}

export interface GalleryImagesResponse {
  hasMore: boolean;
  images: {
    id: string;
    author: string;
    src: string;
  }[];
}

const baseUrl = "https://picsum.photos/v2";

export async function fetchImages(
  page = 1,
  limit = 30
): Promise<GalleryImagesResponse> {
  const request = await fetch(
    `${baseUrl}/list?page=${page}&limit=${limit}`
  );
  const response: ApiImage[] = await request.json();

  return {
    hasMore: !!request.headers.get("Link")?.includes('rel="next"'),
    images: response.map(({ id, author, download_url }) => ({
      id,
      author,
      src: download_url,
    })),
  };
}
