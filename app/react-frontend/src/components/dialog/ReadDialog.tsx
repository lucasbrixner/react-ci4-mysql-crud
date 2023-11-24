import { Dialog, DialogContent, Grid, TextField } from "@mui/material";
import { useDataTableContext } from "../data-table/DataTableCtxProvider";
import LargePortrait from "../portrait/LargePortrait";

export default function ReadDialog() {
  const {
    focusedRow,
    isReadDialogOpen,
    handleReadCloseClick
  } = useDataTableContext();
  return (
    <Dialog open={isReadDialogOpen} onClose={handleReadCloseClick}>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid container item xs={12} sx={{ justifyContent: "center" }}>
            <LargePortrait id={focusedRow.id} />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Nome"
              value={focusedRow.given_name}
              InputProps={{ readOnly: true }}
              focused={false}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Sobrenome"
              value={focusedRow.surname}
              InputProps={{ readOnly: true }}
              focused={false}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              label="E-mail"
              value={focusedRow.email}
              InputProps={{ readOnly: true }}
              focused={false}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Telefone"
              value={focusedRow.phone}
              InputProps={{ readOnly: true }}
              focused={false}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Endereço"
              defaultValue={focusedRow.address_1}
              InputProps={{ readOnly: true }}
              focused={false}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Complemento (apartamento, bloco, bairro)"
              value={focusedRow.address_2}
              InputProps={{ readOnly: true }}
              focused={false}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Cidade"
              value={focusedRow.city}
              InputProps={{ readOnly: true }}
              focused={false}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              label="UF"
              value={focusedRow.state_code}
              InputProps={{ readOnly: true }}
              focused={false}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="CEP"
              value={focusedRow.zip_code}
              InputProps={{ readOnly: true }}
              focused={false}
            />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}