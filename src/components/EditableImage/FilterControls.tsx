import { Box, Slider, Stack, Typography } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";

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
  const [currentBlur, setCurrentBlur] = useState<number>(blur);
  const [currentGrayscale, setCurrentGrayscale] = useState<number>(grayscale);

  const handleChangeBlur = (
    e: Event | SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => {
    setCurrentBlur(Number(value));
    onChangeBlur(Number(value));
  };

  const handleChangeGrayscale = (
    e: Event | SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => {
    setCurrentGrayscale(Number(value));
    onChangeGrayscale(value as number);
  };

  useEffect(() => {
    setCurrentBlur(blur);
  }, [blur]);

  useEffect(() => {
    setCurrentGrayscale(grayscale);
  }, [grayscale]);

  return (
    <Stack direction={"column"} gap={1} padding={2}>
      <Box>
        <Typography id="blur-slider">Blur</Typography>
        <Slider
          aria-labelledby="blur-slider"
          value={currentBlur}
          aria-label="Blur level"
          min={0}
          max={10}
          valueLabelDisplay="auto"
          onChange={(e, value: number | number[]) => setCurrentBlur(Number(value))}
          onChangeCommitted={handleChangeBlur}
        />
      </Box>
      <Box>
        <Typography id="grayscale-slider">Grayscale (%)</Typography>
        <Slider
          aria-labelledby="grayscale-slider"
          value={currentGrayscale}
          aria-label="Grayscale level"
          min={0}
          max={100}
          valueLabelDisplay="auto"
          onChange={(e, value: number | number[]) => setCurrentGrayscale(Number(value))}
          onChangeCommitted={handleChangeGrayscale}
        />
      </Box>
    </Stack>
  );
}
