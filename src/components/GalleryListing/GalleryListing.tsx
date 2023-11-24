import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface GalleryListingProps {
  images: {
    id: string;
    preview: string;
    author: string;
  }[];
}

export function GalleryListing({ images }: GalleryListingProps) {
  return (
    <ImageList variant={"masonry"} cols={5} gap={8}>
      {images.map(({ id, preview, author }) => (
        <ImageListItem key={id}>
          <Link component={RouterLink} to={`/edit/${id}`} underline="none" color={'black'}>
            <Box>
              <img
                width="100%"
                src={preview}
                alt=""
                loading="lazy"
              />
            </Box>
            <ImageListItemBar subtitle={`by ${author}`} position="below" />
          </Link>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
