import { MouseEventHandler } from "react";
import { IconButton } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

interface SaveIconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function SaveIconButton(props: SaveIconButtonProps) {
  return (
    <IconButton onClick={props.onClick}>
      <SaveIcon />
    </IconButton>
  );
}