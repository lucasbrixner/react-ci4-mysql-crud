import { Form as FormProper } from "./Form";
import {
  Card,
  CardActions,
  CardContent,
  Typography 
} from "@mui/material";

interface FormProps {
  formAction: "signin" | "signup";
}

function Form(props: FormProps) {
  return (
    <Card variant="outlined" sx={{ minWidth: 275, maxWidth: 375 }}>
      <CardContent>
        <Typography align="center" color="text.secondary">
          { props.formAction === "signin"
            ? "Acessar a plataforma"
            : "Cadastro de novo usuário" }
        </Typography>
      </CardContent>
      <CardActions sx={{ pt:0, pb: 2, pr: 2, pl: 2 }}>
        <FormProper formAction={props.formAction} />
      </CardActions>
    </Card>
  );
}

Form.defaultProps = {
  formAction: "signin"
};

export default Form;