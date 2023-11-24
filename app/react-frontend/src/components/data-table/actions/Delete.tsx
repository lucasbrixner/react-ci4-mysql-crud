import type { ActionProps } from ".";
import { GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

export default function Delete(props: ActionProps) {
  return (
    <GridActionsCellItem
      icon={<DeleteIcon />}
      label="Delete"
      color="inherit"
      onClick={props.onClick}
    />
  );
}