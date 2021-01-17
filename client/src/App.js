import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LinkBox from "./components/Linkbox";
// import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch></Switch>
      <LinkBox></LinkBox>
      <LinkBox></LinkBox>
      <LinkBox></LinkBox>
      <LinkBox></LinkBox>
    </div>
  );
}

export default App;
