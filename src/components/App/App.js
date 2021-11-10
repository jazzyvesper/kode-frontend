import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import PageErrors from '../PageErrors/PageErrors'
import Search from '../Search/Search'
import Main from '../Main/Main'
import Preloader from '../Main/Preloader';
import SortModal from '../Modals/SortModal';
import Profile from '../Profile/Profile';
import apiProfile from '../../utils/Api'
import { birthdayNow, datatime } from '../../utils/DataFormat'


function App() {
  const [dataProfile, setDataProfile] = React.useState([]);
  const [filtrMassiv, setFiltrMassiv] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [sort, setSort] = React.useState(false);
  const [openPreloader, setOpenPreloader] =  React.useState(false);
  const [activeButton, setActiveButton] = React.useState(false);
  const [brthNextYear, setBrthNextYear] = React.useState([]);
  const getLocaldata = JSON.parse(localStorage.getItem('dataMassiv'));
  const [error, setError] = React.useState(false)
  
  React.useEffect(() => {
    setOpenPreloader(true)
    apiProfile.getData()
    .then((res) => {
      setOpenPreloader(false)
      setDataProfile(res.items)
      setFiltrMassiv(res.items)
      localStorage.setItem("dataMassiv", JSON.stringify(res.items));
    })
    .catch(err => {
      setOpenPreloader(false)
      setError(true)
      console.log(`Ошибка при загрузке профиля: ${err}`)}
    )
  }, [])

  //Фильтр по департаменту
  function filtrTabArr(arr, keyword) {
    const NewArray = arr.filter((item) => {
      return item.department.includes(keyword)
    })
    return NewArray
  }

  function handleTabClick({keyword}) {
    if(keyword) {
      const newMassiv = filtrTabArr(dataProfile, keyword);
      setFiltrMassiv(newMassiv)
      setBrthNextYear([])
      setSort(false)
    } else {
      setFiltrMassiv(dataProfile)
    }
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

  function handleFiltrClick({keyword}) {
    const newMassiv = filtrSearchArr(dataProfile, keyword);
    setFiltrMassiv(newMassiv)
  }

  //Вызов сортировки
  function handleSortUser({key}) {
    if(key=== 'birth') { 
      const birthday = birthdayNow(filtrMassiv)
      setFiltrMassiv(sortDateArr(birthday[1]))
      setBrthNextYear(sortDateArr(birthday[0])) 
      setSort(true)
    } else {
      setFiltrMassiv(sortArr(filtrMassiv))
    }
    setModalOpen(false)
    setActiveButton(false)
  }

  //Функция сортировки по алфавиту
  function sortArr(arr) {
    const NewMassiv = arr.sort(function(a, b) {
      a = a.firstName.toLowerCase();
      b = b.firstName.toLowerCase();
      if (a < b) return -1; 
      if (b < a) return 1;
      return 0;
      })
      return NewMassiv
  }

  //функция сортировки по дню рождения
  function sortDateArr(arr) {
    const NewMassiv = arr.sort(function(a, b) {
      a = datatime(a.birthday)
      b = datatime(b.birthday)
      if (a < b) return -1; 
      if (b < a) return 1;
      return 0;
    })
    return NewMassiv  
  }
  
  //Открытие модального окна
  function handleOpenModal() {
    setModalOpen(true)
    setActiveButton(true)
  }

  //Закрытие модального окна
  function handleCloseModal() {
    setModalOpen(false)
    setActiveButton(false)
  }
  
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Search 
          onTab={handleTabClick}
          onSearch={handleFiltrClick}
          handleSortClick={handleOpenModal}
          activeButton={activeButton}
          />
          {openPreloader && <Preloader isOpen={openPreloader} />}
          {(!openPreloader && !error) && 
          <Main 
          users={filtrMassiv}
          sort={sort}
          sortBirth={brthNextYear}
          />
          }
          {error &&
          <PageErrors 
          img={'error'}
          title={'Какой-то сверхразум все сломал'}
          subtitle={'Постараемся быстро починить'}
          tryAgain={'Попробовать снова'}
          />
          }
        </Route> 
        <Route path="/:id">
          <Profile 
          user={getLocaldata}
          />
        </Route> 
        <Route path="*">
          <PageErrors 
          img={'error'}
          title={'Какой-то сверхразум все сломал'}
          subtitle={'Постараемся быстро починить'}
          tryAgain={'Попробовать снова'}
          />
        </Route> 
      </Switch>
      <SortModal
      isOpen={modalOpen}
      onClose={handleCloseModal}
      onSort={handleSortUser}
      />  
    </div>
  )
}

export default App;
