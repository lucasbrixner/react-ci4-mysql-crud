import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDataTableContext } from "./DataTableCtxProvider";

export default function DataTableToolbar() {
  const { handleCreateOpenClick } = useDataTableContext();

  return (
    <Box sx={{ p: 1, borderBottom: 1, borderColor: "divider" }}>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={handleCreateOpenClick}
      >
        Adicionar novo estudante
      </Button>
    </Box>
  );
}