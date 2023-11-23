import { Button, Stack, TextField } from "@mui/material";
import { useRef } from "react";

export interface ResizeControlsProps {
  height: number;
  width: number;
  onChangeDimensions: (width: number, height: number) => void;
}

export function ResizeControls({
  width,
  height,
  onChangeDimensions,
}: ResizeControlsProps) {
  const heightRef = useRef<HTMLInputElement>(null);
  const widthRef = useRef<HTMLInputElement>(null);

  const handleApply = () => {
    if (widthRef.current && heightRef.current) {
      onChangeDimensions(
        Number(widthRef.current.value),
        Number(heightRef.current.value)
      );
    }
  };

  return (
    <Stack direction={"column"} gap={1} padding={1}>
      <TextField
        data-testid={"width-textfield"}
        inputRef={widthRef}
        required
        id="outlined-required"
        label="Width"
        defaultValue={width}
      />
      <TextField
        data-testid={"height-textfield"}
        inputRef={heightRef}
        required
        id="outlined-required"
        label="Height"
        defaultValue={height}
      />
      <Button variant="contained" onClick={handleApply}>
        Apply
      </Button>
    </Stack>
  );
}
