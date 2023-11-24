import { ChangeEventHandler } from "react";
import { IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface UploadIconButtonProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function UploadIconButton(props: UploadIconButtonProps) {
  return (
    <IconButton component="label">
      <CloudUploadIcon />
      <input hidden type="file" accept="image/*" onChange={props.onChange} />
    </IconButton>
  );
}