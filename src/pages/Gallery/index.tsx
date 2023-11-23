import { useQuery } from "react-query";
import { Box, Button, Stack } from "@mui/material";
import { fetchImages } from "../../api/gallery/query";
import { GalleryListing } from "../../components/GalleryListing/GalleryListing";
import { Loading } from "../../components/Loading";
import { usePagination } from "./usePagination";

export default function Gallery() {
  const { pageNumber, onPrevPage, onNextPage } = usePagination();
  const { isLoading, error, data } = useQuery({
    queryKey: ["gallery", pageNumber],
    queryFn: () => fetchImages(pageNumber),
    keepPreviousData: true,
  });

  if (isLoading) return <Loading />;
  if (!data || error) return <>An error has occurred</>;

  return (
    <Stack
      direction="row"
      spacing={2}
      height={"100vh"}
      justifyContent={"space-between"}
    >
      <Button disabled={pageNumber <= 1} onClick={onPrevPage}>
        prev
      </Button>
      <Box overflow={"auto"}>
        <GalleryListing images={data.images} />
      </Box>
      <Button disabled={!data.hasMore} onClick={onNextPage}>
        next
      </Button>
    </Stack>
  );
}
