import { Box, Slider, Typography } from "@mui/material";

export function FilterControls() {
  return (
    <Box padding={2}>
      <Typography id="blur-slider">
        Blur
      </Typography>
      <Slider
        aria-labelledby="blur-slider"
        defaultValue={0}
        aria-label="Blur level"
        min={0}
        max={10}
        valueLabelDisplay="auto"
      />

      <Typography id="grayscale-slider">
        Grayscale (%)
      </Typography>
      <Slider
        aria-labelledby="grayscale-slider"
        defaultValue={0}
        aria-label="Grayscale level"
        min={0}
        max={100}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
