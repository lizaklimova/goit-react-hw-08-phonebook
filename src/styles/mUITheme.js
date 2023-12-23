import { createTheme } from "@mui/material/styles";
import { theme } from "styles";

export const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: theme.colors.accentBlue,
    },
    secondary: {
      main: theme.colors.white,
      dark: theme.colors.black,
    },
  },
});
