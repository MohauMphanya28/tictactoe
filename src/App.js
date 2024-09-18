import Router from "./Router";
import { GlobalStyles } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
