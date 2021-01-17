import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LinkBox from "./components/Linkbox";
import Topbar from './components/Topbar';
import Feed from './pages/Feed';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Switch></Switch>
      <LinkBox upvotes={100} downvotes={-80} link={"https://khanacademy.org"} title={"Wektory i iteratory"} description={"Bardzo fajna strona"} nComments={30}          />
      <LinkBox upvotes={120} downvotes={-10} link={"https://agh.edu.pl"}      title={"Teoria praktyczna"} description={"Bardzo fajna strona"} nComments={54}     />
      <LinkBox upvotes={55} downvotes={-90} link={"https://coursera.com"}     title={"Kurs para jazdy"} description={"Bardzo fajna strona"} nComments={23}     />
      <LinkBox upvotes={152} downvotes={-20} link={"https://udemy.com"}       title={"C++"} description={"Bardzo fajna strona"} nComments={13}   />
      <LinkBox upvotes={212} downvotes={-10} link={"https://youtube.com"}     title={"C--"} description={"Bardzo fajna strona"} nComments={14}     />
      <Switch>
        <Route to="/" component={Feed} />
      </Switch>
    </div>
  );
}

export default App;
