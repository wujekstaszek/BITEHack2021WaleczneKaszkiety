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
      <LinkBox upvotes={100} downvotes={80} link={"khanacademy.org"} description={"Bardzo fajna strona"} nComments={30}          />
      <LinkBox upvotes={120} downvotes={10} link={"agh.edu.pl"}      description={"Bardzo fajna strona"} nComments={54}     />
      <LinkBox upvotes={55} downvotes={90} link={"coursera.com"}     description={"Bardzo fajna strona"} nComments={23}     />
      <LinkBox upvotes={152} downvotes={20} link={"udemy.com"}       description={"Bardzo fajna strona"} nComments={13}   />
      <LinkBox upvotes={212} downvotes={10} link={"youtube.com"}     description={"Bardzo fajna strona"} nComments={14}     />
    </div>
  );
}

export default App;
