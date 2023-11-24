import { useFetcher } from "react-router-dom";
import {
  AppBar,
  Button,
  type ButtonProps,
  Toolbar,
  Stack
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const sx ={
  height: 96,
  bgcolor: "#F3F6F9",
  borderBottom: 1,
  borderColor: "#DAE2ED",
  justifyContent: "flex-end",
}

const SubmitButton = (props: ButtonProps) => (
  <button {...props} type="submit" />
);

export default function Header() {
  const fetcher = useFetcher();
  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar sx={sx}>
        <fetcher.Form method="post" action="/signout">
          <Button
            variant="text"
            component={SubmitButton}
            startIcon={<LogoutIcon />}
          >
            Sair
          </Button>
        </fetcher.Form>
      </Toolbar>
    </AppBar>
  );
}