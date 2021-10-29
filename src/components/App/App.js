import './App.css';
import { Route, Switch,useHistory,useLocation } from 'react-router-dom';
import Tab from '../Tab/Tab'
import Search from '../Search/Search'
import Main from '../Main/Main'
import Preloader from '../Main/Preloader';
import PageErrors from '../PageErrors/PageErrors';
import SortModal from '../Modals/SortModal';

function App() {
  return (
    <div className="page">
      <Search />
      <Tab />
      <Switch>
        <Route exact path="/">
          <Preloader />
          <SortModal />
        </Route> 
        <Route path="*">
          <PageErrors />
        </Route> 

      </Switch>
    </div>
  );
}

export default App;
