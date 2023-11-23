import { Box, Slider, Stack, Typography } from "@mui/material";
import { SyntheticEvent } from "react";

interface FilterControlsProps {
  blur: number;
  grayscale: number;
  onChangeBlur: (value: number) => void;
  onChangeGrayscale: (value: number) => void;
}

export function FilterControls({
  blur = 0,
  grayscale = 0,
  onChangeBlur,
  onChangeGrayscale,
}: FilterControlsProps) {
  const handleChangeBlur = (
    e: Event | SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => onChangeBlur(value as number);

  const handleChangeGrayscale = (
    e: Event | SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => onChangeGrayscale(value as number);

  return (
    <Stack direction={"column"} gap={1} padding={2}>
      <Box>
        <Typography id="blur-slider">Blur</Typography>
        <Slider
          aria-labelledby="blur-slider"
          defaultValue={blur}
          aria-label="Blur level"
          min={0}
          max={10}
          valueLabelDisplay="auto"
          onChangeCommitted={handleChangeBlur}
        />
      </Box>
      <Box>
        <Typography id="grayscale-slider">Grayscale (%)</Typography>
        <Slider
          aria-labelledby="grayscale-slider"
          defaultValue={grayscale}
          aria-label="Grayscale level"
          min={0}
          max={100}
          valueLabelDisplay="auto"
          onChangeCommitted={handleChangeGrayscale}
        />
      </Box>
    </Stack>
  );
}