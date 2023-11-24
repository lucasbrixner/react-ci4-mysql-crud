import { PropsWithChildren } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider
} from "@mui/material";

const theme = createTheme({
  spacing: 8
});

export default function ThemeProvider(props: PropsWithChildren) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  );
}