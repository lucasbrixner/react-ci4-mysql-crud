import { GridActionsCellItem } from "@mui/x-data-grid";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffOutlined";

export default function ViewDisabled() {
  return (
    <GridActionsCellItem
      icon={<VisibilityOffIcon />}
      label="ViewDisabled"
      color="inherit"
      className="textPrimary"
      disabled
    />
  );
}