import './App.css';
import { Route, Switch,useHistory,useLocation } from 'react-router-dom';

import Search from '../Search/Search'

function App() {
  return (
    <div className="page">
      <Search />
      <Switch>
        <Route exact path="/"> 
        </Route>  
      </Switch>
    </div>
  );
}

export default App;
