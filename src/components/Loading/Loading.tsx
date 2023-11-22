import { Box, CircularProgress  } from "@mui/material";

export function Loading() {
  return (
    <Box textAlign={'center'}>
      <CircularProgress />
    </Box>
  );
}
