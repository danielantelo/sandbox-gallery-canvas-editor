const baseUrl = "https://picsum.photos";

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
    preview: string;
  }[];
}

export async function fetchImages(
  page = 1,
  limit = 30
): Promise<GalleryImagesResponse> {
  const request = await fetch(`${baseUrl}/v2/list?page=${page}&limit=${limit}`);
  const response: ApiImage[] = await request.json();

  return {
    hasMore: !!request.headers.get("Link")?.includes('rel="next"'),
    images: response.map(({ id, author }) => ({
      id,
      author,
      preview: `https://picsum.photos/id/${id}/250`,
    })),
  };
}

export interface GalleryImageResponse {
  author: string;
  src: string;
  height: number;
  width: number;
}

export async function fetchImage(id: string): Promise<GalleryImageResponse> {
  const request = await fetch(`${baseUrl}/id/${id}/info`);
  const { author, download_url, height, width }: ApiImage =
    await request.json();

  return {
    author,
    src: download_url,
    height,
    width,
  };
}
