import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;
