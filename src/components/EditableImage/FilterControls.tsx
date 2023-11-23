import { Box, Slider, Typography } from "@mui/material";
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
  const handleChangeBlur = (e: Event | SyntheticEvent<Element, Event>, value: number | number[]) =>
    onChangeBlur(value as number);

  const handleChangeGrayscale = (e: Event | SyntheticEvent<Element, Event>, value: number | number[]) =>
    onChangeGrayscale(value as number);

  return (
    <Box padding={2}>
      <Typography id="blur-slider">Blur</Typography>
      <Slider
        aria-labelledby="blur-slider"
        value={blur}
        aria-label="Blur level"
        min={0}
        max={10}
        valueLabelDisplay="auto"
        onChangeCommitted={handleChangeBlur}
      />

      <Typography id="grayscale-slider">Grayscale (%)</Typography>
      <Slider
        aria-labelledby="grayscale-slider"
        value={grayscale}
        aria-label="Grayscale level"
        min={0}
        max={100}
        valueLabelDisplay="auto"
        onChangeCommitted={handleChangeGrayscale}
      />
    </Box>
  );
}
