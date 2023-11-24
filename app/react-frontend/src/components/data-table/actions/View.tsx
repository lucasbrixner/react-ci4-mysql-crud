import type { ActionProps } from ".";
import { GridActionsCellItem } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";

export default function View(props: ActionProps) {
  return (
    <GridActionsCellItem
      icon={<VisibilityIcon />}
      label="View"
      color="inherit"
      className="textPrimary"
      onClick={props.onClick}
    />
  );
}