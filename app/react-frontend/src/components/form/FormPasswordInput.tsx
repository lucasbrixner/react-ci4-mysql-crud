import { useState, MouseEvent } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function FormPasswordInput() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <FormControl fullWidth variant="outlined" sx={{ m: 1 }}>
      <InputLabel htmlFor="password-input">Senha</InputLabel>
      <OutlinedInput
        id="password-input"
        name="password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Senha"
      />
    </FormControl>
  );
}