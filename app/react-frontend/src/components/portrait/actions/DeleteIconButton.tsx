import { MouseEventHandler } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface DeleteIconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function DeleteIconButton(props: DeleteIconButtonProps) {
  return (
    <IconButton onClick={props.onClick}>
      <DeleteIcon />
    </IconButton>
  );
}