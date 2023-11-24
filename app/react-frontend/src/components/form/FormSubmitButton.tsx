import { Button, type ButtonProps } from "@mui/material";

const SubmitButton = (props: ButtonProps) => (
  <button {...props} type="submit" />
);

export default function FormSubmitButton(props: { label: string }) {
  return (
    <Button fullWidth size="large" variant="outlined" component={SubmitButton}>
      {props.label}
    </Button>
  );
}