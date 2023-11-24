import type { ActionProps } from ".";
import { GridActionsCellItem } from "@mui/x-data-grid";
import SaveIcon from "@mui/icons-material/Save";

export default function Save(props: ActionProps) {
  return (
    <GridActionsCellItem
      icon={<SaveIcon />}
      label="Save"
      sx={{ color: "primary.main" }}
      onClick={props.onClick}
    />
  );
}