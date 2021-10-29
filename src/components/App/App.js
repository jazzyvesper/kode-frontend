import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Tab from '../Tab/Tab'
import Search from '../Search/Search'
import Main from '../Main/Main'
import Preloader from '../Main/Preloader';
import PageErrors from '../PageErrors/PageErrors';
import SortModal from '../Modals/SortModal';
import Profile from '../Profile/Profile';
import apiProfile from '../../utils/Api'


function App() {
  const [dataProfile, setDataProfile] = React.useState([]);

  React.useEffect(() => {
    apiProfile.getData()
    .then((res) => {
      
      setDataProfile(res.items)
    })
    .catch(err => console.log(`Ошибка при загрузке профиля: ${err}`))
  }, [])

  console.log(dataProfile)

  return (
    <div className="page">
      <Search />
      <Tab />
      <Switch>
        <Route exact path="/">
          <Main 
          users={dataProfile}/>
        </Route> 
        <Route path="/profile">
          <Profile />
        </Route> 
        <Route path="*">
          <PageErrors />
        </Route> 

      </Switch>
      <SortModal />
    </div>
  );
}

export default App;
