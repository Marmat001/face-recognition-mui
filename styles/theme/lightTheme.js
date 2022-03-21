import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});

export default lightTheme;
