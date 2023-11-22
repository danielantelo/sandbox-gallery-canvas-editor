import { Box } from "@mui/system";
import logo from "./logo.svg";

export function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Box padding={1} bgcolor={'#e9ecf6'}>
        <img height={'20px'} src={logo} alt="logo" />
      </Box>
      {children}
    </>
  );
}
