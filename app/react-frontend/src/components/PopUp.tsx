import { forwardRef, SyntheticEvent } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

export default function PopUp(props: PopUpProps) {
  return (
    <Snackbar
      open={props.open}
      onClose={props.onClose}
      autoHideDuration={6000}
    >
      <Alert
        severity={props.severity}
        onClose={props.onClose}
        sx={{ width: "100%" }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert ref={ref} elevation={6} variant="filled" {...props}/>;
  }
);

interface PopUpProps {
  severity: "success" | "error";
  open: boolean;
  message: string;
  onClose: (event: SyntheticEvent | Event, reason?: string) => void;
}
export type { PopUpProps };