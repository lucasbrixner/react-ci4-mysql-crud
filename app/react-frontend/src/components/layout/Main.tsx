import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

const sx = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "#F3F6F9",
  p: 8
}

export default function Main(props: PropsWithChildren) {
  return (
    <Box component="main" sx={sx}>
      {props.children}
    </Box>
  );
}