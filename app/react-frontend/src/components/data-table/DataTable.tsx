import { useEffect } from "react";
import { Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRowId,
  GridRowModes
} from "@mui/x-data-grid";

import { columns } from "./columns";
import { useDataTableContext } from "./DataTableCtxProvider";
import { Edit, Save, Cancel, Delete, View, ViewDisabled } from "./actions";
import { ReadDialog, InsertDialog } from "../dialog";
import DataTableToolbar from "./DataTableToolbar";

const sx = {
  height: 424,
  width: "100%",
  bgcolor: "#FFF"
}

export default function DataTable() {

  const {
    rows,
    handleRows,
    rowModesModel,
    handleViewClick,
    handleEditClick,
    handleSaveClick,
    handleCancelClick,
    handleDeleteClick,
    processRowUpdate
  } = useDataTableContext();

  const columns_: GridColDef[] = [
    ...columns,
    {
      minWidth: 150,
      type: "actions",
      field: "actions",
      headerName: "Ações",
      cellClassName: "actions",
      getActions: ({ id }: { id: GridRowId }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <ViewDisabled />,
            <Save onClick={handleSaveClick(id)} />,
            <Cancel onClick={handleCancelClick(id)} />
          ];
        } else {
          return [
            <View onClick={handleViewClick(id)} />,
            <Edit onClick={handleEditClick(id)} />,
            <Delete onClick={handleDeleteClick(id)} />
          ];
        }
      },
    }
  ];

  useEffect(() => {
    handleRows();
  },[]);

  return (
    <Box sx={sx}>
      <InsertDialog />
      <ReadDialog />
      <DataGrid
        rows={rows}
        columns={columns_}
        editMode="row"
        rowModesModel={rowModesModel}
        processRowUpdate={processRowUpdate}
        slots={{ toolbar: DataTableToolbar }}
        pageSizeOptions={[5]}
        initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
      />
    </Box>
  );
}