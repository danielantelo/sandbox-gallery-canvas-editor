import { Button, Stack, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

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
  const [currentHeight, setCurrentHeight] = useState<string>(height.toString());
  const [currentWidth, setCurrentWidth] = useState<string>(width.toString());

  const onChangeWidth = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setCurrentWidth(e.target.value);

  const onChangeHeight = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setCurrentHeight(e.target.value);

  useEffect(() => {
    setCurrentHeight(height.toString());
  }, [height]);

  useEffect(() => {
    setCurrentWidth(width.toString());
  }, [width]);

  const handleApply = () => {
    onChangeDimensions(Number(currentWidth), Number(currentHeight));
  };

  return (
    <Stack direction={"column"} gap={1} padding={1}>
      <TextField
        required
        id="outlined-required"
        label="Width"
        value={currentWidth}
        onChange={onChangeWidth}
        name={'width'}
      />
      <TextField
        required
        id="outlined-required"
        label="Height"
        value={currentHeight}
        onChange={onChangeHeight}
        name={'height'}
      />
      <Button variant="contained" onClick={handleApply}>
        Apply
      </Button>
    </Stack>
  );
}
