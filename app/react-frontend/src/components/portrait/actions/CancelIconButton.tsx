import { MouseEventHandler } from "react";
import { IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Close";

interface CancelIconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function CancelIconButton(props: CancelIconButtonProps) {
  return (
    <IconButton onClick={props.onClick}>
      <CancelIcon />
    </IconButton>
  );
}