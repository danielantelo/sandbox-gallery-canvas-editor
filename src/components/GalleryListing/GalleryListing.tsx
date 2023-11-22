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
    src: string;
    author: string;
  }[];
}

export function GalleryListing({ images }: GalleryListingProps) {
  return (
    <ImageList variant={"masonry"} cols={5} gap={8}>
      {images.map(({ id, src, author }) => (
        <ImageListItem key={id}>
          <Link component={RouterLink} to={`/edit/${id}`}>
            <Box>
              <img
                width="100%"
                src={`${src}`}
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
