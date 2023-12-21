
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

function App() {
  const [darkMode, setDarkModel] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType
    }
  }) 
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header />
      <Container>
        <Catalog />

      </Container>
      
      
    </ThemeProvider>
  );
}

export default App;
