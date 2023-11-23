import { Box } from "@mui/material";
import logo from "./logo.svg";

export function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Box padding={1} bgcolor={"#e9ecf6"} position={"fixed"} width={"100vw"} zIndex={100}>
        <img height={"20px"} src={logo} alt="logo" />
      </Box>
      <Box paddingTop={5}>{children}</Box>
    </>
  );
}
