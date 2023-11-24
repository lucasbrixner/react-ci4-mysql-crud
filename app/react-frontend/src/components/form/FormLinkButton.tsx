import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";

export default function FormLinkButton() {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  return (
    <Link to={`/signup?${params.toString()}`}>
      <Button variant="text" size="small">
        Cadastre-se
      </Button>
    </Link>
  );
}