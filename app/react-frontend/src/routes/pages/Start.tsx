import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Start() {
  return (
    <Link to={"/home"}>
      <Button variant="outlined" size="large" fullWidth>
        Iniciar
      </Button>
    </Link>
  );
}