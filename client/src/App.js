import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Feed from './pages/Feed';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Switch>
        <Route to="/" component={Feed} />
      </Switch>
    </div>
  );
}

export default App;
