import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Tab from '../Tab/Tab'
import Search from '../Search/Search'
import Main from '../Main/Main'
//import Preloader from '../Main/Preloader';
import PageErrors from '../PageErrors/PageErrors';
import SortModal from '../Modals/SortModal';
import Profile from '../Profile/Profile';
import apiProfile from '../../utils/Api'


function App() {
  const [dataProfile, setDataProfile] = React.useState([]);
  //let getLocaldata = JSON.parse(localStorage.getItem('newMassiv'));
  const [filtrMassiv, setFiltrMassiv] = React.useState([dataProfile]);
  const [modalOpen, setModalOpen] = React.useState(false);
  
  React.useEffect(() => {
    apiProfile.getData()
    .then((res) => {
      setDataProfile(res.items)
      setFiltrMassiv(res.items)
    })
    .catch(err => console.log(`Ошибка при загрузке профиля: ${err}`))
  }, [])

  //Фильтр по департаменту
  function filtrTabArr(arr, keyword) {
    const NewArray = arr.filter((item) => {
      return item.department.includes(keyword)
    })
  return NewArray
  }

  //Фильтр по поисковому слову
  function filtrSearchArr(arr, keyword) {
    const keywordSearch = keyword.toLowerCase();
    const NewArray = arr.filter((item) => {
      return item.firstName.toLowerCase().includes(keywordSearch) 
      || item.lastName.toLowerCase().includes(keywordSearch)
      || item.userTag.toLowerCase().includes(keywordSearch)
    })
  return NewArray
  }

  function handleTabClick({keyword}) {
    if(keyword) {
    const newMassiv = filtrTabArr(dataProfile, keyword);
    setFiltrMassiv(newMassiv)
    } else {
      setFiltrMassiv(dataProfile)
    }
  }

  function handleFiltrClick({keyword}) {
    
    const newMassiv = filtrSearchArr(dataProfile, keyword);
    newMassiv ? setFiltrMassiv(newMassiv)
    : 
    
  }

  return (
    <div className="page">
      <Search 
      onTab={handleTabClick}
      onSearch={handleFiltrClick}
      />
      <Switch>
        <Route exact path="/">
          <Main 
          users={filtrMassiv}/>
        </Route> 
        <Route path="/profile">
          <Profile />
        </Route> 
        <Route path="*">
          <PageErrors />
        </Route> 

      </Switch>
      <SortModal
      isOpen={modalOpen}
      />
    </div>
  );
}

export default App;
