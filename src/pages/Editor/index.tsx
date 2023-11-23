import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Box } from "@mui/material";
import { fetchImage } from "../../api/gallery";
import { Loading } from "../../components/Loading";
import { EditableImage, FilterControls } from "../../components/EditableImage";
import { useImageFilters } from "./useImageFilters";

export default function Editor() {
  const { imageId } = useParams<{ imageId: string }>();
  const { blur, grayscale, onChangeBlur, onChangeGrayscale } =
    useImageFilters();
  const { isLoading, error, data } = useQuery({
    queryKey: ["gallery", imageId],
    queryFn: () => fetchImage(imageId!),
    keepPreviousData: true,
  });

  if (isLoading) return <Loading />;
  if (!data || error) return <>An error has occurred</>;

  return (
    <>
      <EditableImage
        src={data.src}
        height={data.height}
        width={data.width}
        blur={blur}
        grayscale={grayscale}
      />
      <Box
        position={"absolute"}
        top={50}
        right={50}
        bgcolor={"white"}
        sx={{ opacity: 0.75 }}
      >
        <FilterControls
          blur={blur}
          grayscale={grayscale}
          onChangeBlur={onChangeBlur}
          onChangeGrayscale={onChangeGrayscale}
        />
      </Box>
    </>
  );
}
