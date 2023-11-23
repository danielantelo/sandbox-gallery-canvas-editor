import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
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
import { downloadAsImage } from "../../utils/canvas";

export default function Editor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

  const onDownloadImage = () => {
    if (canvasRef.current) {
      downloadAsImage(canvasRef.current, 'edited');
    }
  };

  return (
    <>
      <EditableImage
        ref={canvasRef}
        src={data.src}
        height={height || data.height}
        width={width || data.width}
        blur={blur}
        grayscale={grayscale}
      />
      <Box
        position={"fixed"}
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
            aria-controls="panel2a-content"
            id="panel2a-header"
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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Download</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack>
              <Button variant="contained" onClick={onDownloadImage}>
                Download Edited Image
              </Button>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
