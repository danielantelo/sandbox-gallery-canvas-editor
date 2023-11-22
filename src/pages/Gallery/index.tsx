import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import { GalleryListing } from "../../components/GalleryListing/GalleryListing";
import { fetchImages } from "../../api/gallery/query";
import { Loading } from "../../components/Loading";

export default function Gallery() {
  const navigate = useNavigate();
  const { page } = useParams<{ page: string }>();
  const pageNumber = Number(page);
  const onPrevPage = () => navigate(`/page/${pageNumber - 1}`);
  const onNextPage = () => navigate(`/page/${pageNumber + 1}`);

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
      <Box>
        <GalleryListing images={data.images} />
      </Box>
      <Button disabled={!data.hasMore} onClick={onNextPage}>
        next
      </Button>
    </Stack>
  );
}
