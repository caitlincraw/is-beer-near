import {Switch, Route} from 'react-router-dom';
import useViewport from './hooks/useViewport';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Landing from './components/Landing';
import Lists from './components/Lists';
import Search from './components/Search';
import './App.css';


const App = () => {

  const { width } = useViewport();
  const breakpoint = 550;

  const shouldUseSidebar = () => {
    if (width > breakpoint) {
      return true;
    }
  }
  return (
    <div className={shouldUseSidebar() ? "app-container" : "" }>
      {shouldUseSidebar() ? <Sidebar /> :  <Navbar />}
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
