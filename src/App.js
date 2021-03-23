// components
import MenuBar from "./components/Menu";

// material ui
import { theme } from "./styles/theme";
import { ThemeProvider } from "@material-ui/core";

// routes
import Routes from "./routes";

//-----------------------------------------------
const App = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <MenuBar />
        <Routes />
      </ThemeProvider>
    </main>
  );
};

export default App;
