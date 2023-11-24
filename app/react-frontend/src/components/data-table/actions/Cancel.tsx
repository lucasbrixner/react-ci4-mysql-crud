import type { ActionProps } from ".";
import { GridActionsCellItem } from "@mui/x-data-grid";
import CancelIcon from "@mui/icons-material/Close";

export default function Cancel(props: ActionProps) {
  return (
    <GridActionsCellItem
      icon={<CancelIcon />}
      label="Cancel"
      color="inherit"
      className="textPrimary"
      onClick={props.onClick}
    />
  );
}