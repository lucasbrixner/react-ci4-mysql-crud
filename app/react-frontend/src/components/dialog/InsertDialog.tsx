import { ChangeEvent, useState } from "react";
import {
  Button,
  type ButtonProps,
  Dialog,
  DialogContent,
  Grid,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem
} from "@mui/material";

import { createStudent } from "../../api";
import { useDataTableContext } from "../data-table/DataTableCtxProvider";

const state_codes: string[] = [
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
];

const SubmitButton = (props: ButtonProps) => (
  <button {...props} type="submit" />
);

export default function InsertDialog() {
  const {
    handleRows,
    isCreateDialogOpen,
    handleCreateCloseClick
  } = useDataTableContext();

  const [formData, setFormData] = useState({
    given_name: "",
    surname: "",
    email: "",
    phone: "",
    address_1: "",
    address_2: "",
    city: "",
    state_code: "",
    zip_code: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const cleanValue = inputValue.replace(/^\+55|\D|\s/g, "");
    const valueLength = cleanValue.length;

    let maskedValue = "";
    switch (valueLength) {
      case 0:
        maskedValue = "";
        break;
      case 1:
      case 2:
        maskedValue = `+55 ${cleanValue}`;
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        maskedValue = `+55 ${cleanValue.slice(0, 2)}`;
        maskedValue += ` ${cleanValue.slice(2)}`;
        break;
      case 7:
      case 8:
      case 9:
      case 10:
        maskedValue = `+55 ${cleanValue.slice(0, 2)}`;
        maskedValue += ` ${cleanValue.slice(2, 6)}`;
        maskedValue += ` ${cleanValue.slice(6)}`;
        break;
      default:
        if (cleanValue.charAt(2) === "9") {
          maskedValue = `+55 ${cleanValue.slice(0, 2)}`;
          maskedValue += ` ${cleanValue.slice(2, 3)}`;
          maskedValue += ` ${cleanValue.slice(3, 7)}`;
          maskedValue += ` ${cleanValue.slice(7, 11)}`;
        } else {
          maskedValue = `+55 ${cleanValue.slice(0, 2)}`;
          maskedValue += ` ${cleanValue.slice(2, 6)}`;
          maskedValue += ` ${cleanValue.slice(6, 9)}`;
        }
        break;
    }

    setFormData({ ...formData, phone: maskedValue });
  };

  const handleZipCodeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const cleanValue = inputValue.replace(/\D|\s|-/g, "");
    const valueLength = cleanValue.length;

    let maskedValue = "";
    switch (valueLength) {
      case 0:
        maskedValue = "";
        break;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        maskedValue = cleanValue;
        break;
      case 6:
      case 7:
      case 8:
        maskedValue = `${cleanValue.slice(0, 5)}-${cleanValue.slice(5)}`;
        break;
      default:
        maskedValue = `${cleanValue.slice(0, 5)}-${cleanValue.slice(5,8)}`;
        break;
    }
    setFormData({ ...formData, zip_code: maskedValue });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const requestData = { data: [formData] }
      await createStudent(requestData);
      await handleRows();
      handleCreateCloseClick();
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
    console.log('Form data:', formData);
  };

  return (
    <Dialog open={isCreateDialogOpen} onClose={handleCreateCloseClick}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="given_name"
                name="given_name"
                label="Nome"
                value={formData.given_name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="surname"
                name="surname"
                label="Sobrenome"
                value={formData.surname}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                required
                fullWidth
                id="email"
                name="email"
                label="E-mail"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                required
                fullWidth
                id="phone"
                name="phone"
                label="Telefone"
                value={formData.phone}
                onChange={handlePhoneInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="address_1"
                name="address_1"
                label="Endereço"
                value={formData.address_1}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="address_2"
                name="address_2"
                label="Complemento (apartamento, bloco, bairro)"
                value={formData.address_2}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="city"
                name="city"
                label="Cidade"
                value={formData.city}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel id="state-code-label">UF</InputLabel>
                <Select
                  labelId="state-code-label"
                  id="state_code"
                  value={formData.state_code}
                  label="UF"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData({ ...formData, state_code: value });
                  }}
                >
                  {state_codes.map((uf) => <MenuItem value={uf}>{uf}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField
                required
                fullWidth
                id="zip_code"
                name="zip_code"
                label="CEP"
                value={formData.zip_code}
                onChange={handleZipCodeInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                size="large"
                variant="outlined"
                component={SubmitButton}
              >
                Adicionar
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
}