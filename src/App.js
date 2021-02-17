import "./App.css";
import { Switch, Route } from "react-router-dom";

import Routes from "./routes";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
};

export default App;
