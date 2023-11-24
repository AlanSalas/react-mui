import { ThemeProvider, CssBaseline, Stack, Button } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Stack direction="row" alignItems="center" gap={2}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="contained" color="tertiary" size="extraLarge">
            Secondary
          </Button>
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default App;
