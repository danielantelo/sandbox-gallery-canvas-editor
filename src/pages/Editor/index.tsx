import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { fetchImage } from "../../api/gallery";
import { Loading } from "../../components/Loading";
import {
  EditableImage,
  FilterControls,
  ResizeControls,
} from "../../components/EditableImage";
import { useImageEdits } from "./useImageEdits";

export default function Editor() {
  const { imageId } = useParams<{ imageId: string }>();
  const { isLoading, error, data } = useQuery({
    queryKey: ["gallery", imageId],
    queryFn: () => fetchImage(imageId!),
    keepPreviousData: true,
  });
  const {
    width,
    height,
    blur,
    grayscale,
    onChangeBlur,
    onChangeGrayscale,
    onChangeDimensions,
  } = useImageEdits();

  if (isLoading) return <Loading />;
  if (!data || error) return <>An error has occurred</>;

  return (
    <>
      <EditableImage
        src={data.src}
        height={height || data.height}
        width={width || data.width}
        blur={blur}
        grayscale={grayscale}
      />
      <Box
        position={"absolute"}
        top={50}
        right={50}
        bgcolor={"white"}
        sx={{ opacity: 0.8 }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Dimensions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ResizeControls
              height={height || data.height}
              width={width || data.width}
              onChangeDimensions={onChangeDimensions}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Filters</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FilterControls
              blur={blur}
              grayscale={grayscale}
              onChangeBlur={onChangeBlur}
              onChangeGrayscale={onChangeGrayscale}
            />
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
