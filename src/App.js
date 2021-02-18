import "./App.css";
import { useState } from "react";
import Menu from "./components/Menu";
import Routes from "./routes";
//-----------------------------------------------
const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      <Menu isAuth={isAuth} setIsAuth={setIsAuth} />

      <header className="App-header">
        <Routes setIsAuth={setIsAuth} />
      </header>
    </div>
  );
};

export default App;
