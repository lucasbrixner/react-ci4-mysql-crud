import { useEffect, useState, Fragment } from "react";
import {
  redirect,
  useActionData,
  type LoaderFunctionArgs
} from "react-router-dom";
import { authProvider } from "../../auth";
import Form from "../../components/form";
import PopUp from "../../components/PopUp";

export default function SignIn() {

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  let actionData = useActionData() as { error: string } | undefined;

  useEffect(() => {
    if (actionData && actionData.error) {
      setOpen(true);
    }
  }, [actionData]);

  return (
    <Fragment>
      <Form />
      <PopUp
        severity="error"
        open={open}
        onClose={handleClose}
        message={actionData?.error||""}
      />
    </Fragment>
  );
}

export function signInLoader() {
  return (authProvider.isAuthenticated ? redirect("/") : null);
}

export async function signInAction({ request }: LoaderFunctionArgs) {
  let formData = await request.formData();
  let username = formData.get("username") as string | null;
  let password = formData.get("password") as string | null;
  if (!username) {
    return { error: "Informe um usuário válido!" };
  };
  if (!password) {
    return { error: "Informe uma senha válida!" };
  };
  try {
    await authProvider.signIn(username, password);
  } catch (error) {
    return { error: "Usuário e/ou senha inválido(s)!" };
  };
  let redirectTo = formData.get("redirectTo") as string | null;
  return redirect(redirectTo || "/");
}