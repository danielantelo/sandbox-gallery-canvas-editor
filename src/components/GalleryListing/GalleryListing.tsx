import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface GalleryListingProps {
  images: {
    id: string;
    preview: string;
    author: string;
    src: string;
  }[];
}

export function GalleryListing({ images }: GalleryListingProps) {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const isMedium = useMediaQuery(theme.breakpoints.up("md"));
  const cols = isLarge ? 5 : isMedium ? 3 : 2;

  return (
    <ImageList variant={"masonry"} cols={cols} gap={8}>
      {images.map(({ id, preview, author, src }) => (
        <ImageListItem key={id}>
          <Link
            component={RouterLink}
            to={`/edit/${id}`}
            underline="none"
            color={"black"}
          >
            <Box>
              <img width="100%" src={preview} alt="" loading="lazy" />
            </Box>
            <ImageListItemBar subtitle={`by ${author}`} position="below" />
          </Link>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
