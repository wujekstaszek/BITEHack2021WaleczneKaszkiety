import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LinkBox from "./components/Linkbox";
import SignIn from "./components/Login"
import React from 'react';
import { connect } from 'react-redux';
import Topbar from './components/Topbar';
import Feed from './pages/Feed';
import './App.scss';

const items = [
{
    title: "Wektory i iteratory",
    description: "Bardzo fajna strona",
    link : "https://coursera.org",
    upvotes : 322,
    downvotes : -22,
    nComments : 11
},
{
    title : "Template metaprogramming",
    description : "Bardzo fajna strona",
    link : "https://coursera.com",
    upvotes : 350,
    downvotes : -20,
    nComments : 10
},
{
    title : "C++",
    description : "Bardzo fajna strona",
    link : "https://udemy.com",
    upvotes : 122,
    downvotes : -31,
    nComments : 13
},
{
    title : "C--",
    description : "Bardzo fajna strona",
    link : "https://youtube.com",
    upvotes : 212,
    downvotes : -10,
    nComments : 14
},
]

const App = ({ routes }) => {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Switch></Switch>
      <SignIn></SignIn>
      {/* {items.map(record => */}
      {/* { */}
          {/* return <LinkBox {...record}></LinkBox> */}
      {/* })} */}
      <Switch>
        {routes &&
          routes.map((route) => (
            <Route exact path={`/${route.toLowerCase()}`} component={Feed} />
          ))}
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  const routeNames = state.fields.fields.reduce(
    (acc, curr) => [...acc, curr.name],
    []
  );
  return {
    routes: routeNames,
  };
};

export default connect(mapStateToProps)(App);
