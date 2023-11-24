import { createTheme } from "@mui/material";
import MuiButton from "./buttons";

const theme = createTheme({
  palette: {
    tertiary: {
      main: "#3f8681",
      light: "#8dc9c8",
      dark: "#2e4945",
      contrastText: "#e3f1f2",
    },
  },
  components: {
    MuiButton,
  },
});

export default theme;
