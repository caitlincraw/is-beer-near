import {Switch, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Landing from './components/Landing';
import Lists from './components/Lists';
import Search from './components/Search';
import './App.css';


const App = () => {
  return (
    <div className="app-container">
      <header>
        <Sidebar />
      </header>
      
      <main>
        <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/lists">
              <Lists />
            </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
