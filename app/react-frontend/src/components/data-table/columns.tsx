import { GridColDef } from "@mui/x-data-grid";
import TinyPortrait from "../portrait/TinyPortrait";

export const columns: GridColDef[] = [
  {
    width: 60,
    field: "id",
    headerName: "Foto",
    renderCell: ({id}) => {
      return <TinyPortrait id={id} />;
    },
  },
  {
    editable: true,
    minWidth: 150,
    field: "given_name",
    headerName: "Nome",
  },
  {
    editable: true,
    minWidth: 150,
    field: "surname",
    headerName: "Sobrenome",
  },
  {
    editable: true,
    minWidth: 200,
    field: "email",
    headerName: "E-mail",
  },
  {
    editable: true,
    minWidth: 150,
    field: "phone",
    headerName: "Telefone",
  },
  {
    editable: true,
    minWidth: 300,
    field: "address_1",
    headerName: "Endereço",
  },
  {
    editable: true,
    minWidth: 250,
    field: "address_2",
    headerName: "Complemento (apartamento, bloco, bairro)",
  },
  {
    editable: true,
    minWidth: 150,
    field: "city",
    headerName: "Cidade",
  },
  {
    editable: true,
    minWidth: 50,
    field: "state_code",
    headerName: "UF",
    type: "singleSelect",
    valueOptions: [
      "AC",
      "AL",
      "AP",
      "AM",
      "BA",
      "CE",
      "ES",
      "GO",
      "MA",
      "MT",
      "MS",
      "MG",
      "PA",
      "PB",
      "PR",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RS",
      "RO",
      "RR",
      "SC",
      "SP",
      "SE",
      "TO",
      "DF",
    ]
  },
  {
    editable: true,
    minWidth: 100,
    field: "zip_code",
    headerName: "CEP",
  },
];