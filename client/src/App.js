import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch></Switch>
    </div>
  );
}

export default App;
