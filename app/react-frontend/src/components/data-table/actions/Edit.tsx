import type { ActionProps } from ".";
import { GridActionsCellItem } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";

export default function Edit(props: ActionProps) {
  return (
    <GridActionsCellItem
      icon={<EditIcon />}
      label="Edit"
      color="inherit"
      className="textPrimary"
      onClick={props.onClick}
    />
  );
}