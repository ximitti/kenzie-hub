import "./App.css";

// components
import Menu from "./components/Menu";

// routes
import Routes from "./routes";

//-----------------------------------------------
const App = () => {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
};

export default App;
