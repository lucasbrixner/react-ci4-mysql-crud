import { useLocation, Form as RouterForm } from "react-router-dom";
import { Container, Stack } from "@mui/material";
import FormUsernameInput from "./FormUsernameInput";
import FormPasswordInput from "./FormPasswordInput";
import FormSubmitButton from "./FormSubmitButton";
import FormLinkButton from "./FormLinkButton";

interface FormProps {
  formAction: "signin" | "signup";
}

export function Form(props: FormProps) {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let from = params.get("from") || "/";
  return (
    <Container maxWidth={false} disableGutters>
      <Stack spacing={1}>
        <RouterForm method="post" replace>
          <input type="hidden" name="redirectTo" value={from} />
          <Stack spacing={2}>
            <FormUsernameInput />
            <FormPasswordInput />
            <FormSubmitButton
            label={props.formAction === "signin" ? "Login" : "Cadastro"}
            />
          </Stack>
        </RouterForm>
        { props.formAction === "signin" ? <FormLinkButton /> : null }
      </Stack>
    </Container>
  );
}