import { GridRowId, GridRowModes, GridRowModesModel } from "@mui/x-data-grid";
import { PropsWithChildren, createContext, useCallback, useContext, useState } from "react";
import {
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  type IStudent,
} from "../../api";

type IRow = IStudent & { id: GridRowId };

interface IDataTableContext {
  rows: IRow[];
  handleRows: () => void;
  rowModesModel: GridRowModesModel;
  handleViewClick: (id: GridRowId) => () => Promise<void>;
  handleEditClick: (id: GridRowId) => () => void;
  handleSaveClick: (id: GridRowId) => () => void;
  handleCancelClick: (id: GridRowId) => () => void;
  handleDeleteClick: (id: GridRowId) => () => void;
  focusedRow: IRow;
  isReadDialogOpen: boolean;
  handleReadCloseClick: () => void;
  isCreateDialogOpen: boolean;
  handleCreateOpenClick: () => void;
  handleCreateCloseClick: () => void;
  processRowUpdate: (updatedRow: IRow, newRow: IRow) => Promise<IRow>;
}

const mockRow: IRow = {
  id: "",
  given_name: "",
  surname: "",
  email: "",
  phone: "",
  address_1: "",
  address_2: "",
  city: "",
  state_code: "",
  zip_code: ""
}

const DataTableContext = createContext<IDataTableContext>({
  rows: [] as IRow[],
  handleRows: () => {},
  rowModesModel: {} as GridRowModesModel,
  handleViewClick: (id: GridRowId) => async () => {},
  handleEditClick: (id: GridRowId) => () => {},
  handleSaveClick: (id: GridRowId) => () => {},
  handleCancelClick: (id: GridRowId) => () => {},
  handleDeleteClick: (id: GridRowId) => () => {},
  focusedRow: mockRow,
  isReadDialogOpen: false,
  handleReadCloseClick: () => {},
  isCreateDialogOpen: false,
  handleCreateOpenClick: () => {},
  handleCreateCloseClick: () => {},
  processRowUpdate: async (updatedRow: IRow, newRow: IRow) => 
    updatedRow,
});

export default function DataTableCtxProvider(props: PropsWithChildren) {
  const [rows, setRows] = useState<IRow[]>([]);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [focusedRow, setFocusedRow] = useState<IRow>(mockRow);
  const [isReadDialogOpen, setIsReadDialogOpen] = useState<boolean>(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState<boolean>(false);

  const handleRows = () => {
    (async () => {
      const rows = (await getStudents()).data;
      setRows(rows);
    })();
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };
  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };
  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true }
    });
  };
  const handleDeleteClick = (id: GridRowId) => async () => {
    await deleteStudent(id);
    await handleRows();
  };

  const handleViewClick = (id: GridRowId) => async () => {
    const focusedRow = (await getStudent(id)).data[0];
    setFocusedRow(focusedRow);
    setIsReadDialogOpen(true);
  };
  const handleReadCloseClick = () => {
    setIsReadDialogOpen(false);
  };
  const handleCreateOpenClick = () => {
    setIsCreateDialogOpen(true);
  };
  const handleCreateCloseClick = () => {
    setIsCreateDialogOpen(false);
  };

  const processRowUpdate = useCallback(
    async (updatedRow: IRow, oldRow: IRow) => {
      if (JSON.stringify(updatedRow) !== JSON.stringify(oldRow)) {
        const { id, ...student } = updatedRow;
        const requestData = { data: [student] };
        await updateStudent(id, requestData);
        return updatedRow;
      } else {
        return oldRow;
      }
    },[]
  );

  const value = {
    rows,
    handleRows,
    rowModesModel,
    handleViewClick,
    handleEditClick,
    handleSaveClick,
    handleCancelClick,
    handleDeleteClick,
    focusedRow,
    isReadDialogOpen,
    handleReadCloseClick,
    isCreateDialogOpen,
    handleCreateOpenClick,
    handleCreateCloseClick,
    processRowUpdate
  };

  return (
    <DataTableContext.Provider value={value}>
      {props.children}
    </DataTableContext.Provider>
  );
}

export const useDataTableContext = () => useContext(DataTableContext);