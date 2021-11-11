import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import PageErrors from '../PageErrors/PageErrors'
import Search from '../Search/Search'
import Main from '../Main/Main'
import Skeleton from '../Main/Skeleton';
import SortModal from '../Modals/SortModal';
import Profile from '../Profile/Profile';
import apiProfile from '../../utils/Api'
import { birthdayNow, datatime } from '../../utils/DataFormat'


function App() {
  const [dataProfile, setDataProfile] = React.useState([]);
  const [filtrMassiv, setFiltrMassiv] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [sort, setSort] = React.useState(false);
  const [skeleton, setSkeleton] =  React.useState(false);
  const [activeButton, setActiveButton] = React.useState(false);
  const [brthNextYear, setBrthNextYear] = React.useState([]);
  const [error, setError] = React.useState(false)
  //Получаем из Локалсторэдж отфильтрованный массив по департаментам
  let departFiltr = JSON.parse(localStorage.getItem('departMassiv'));
  //Получаем из Локалсторэдж массив для отображения профиля
  //let getLocaldata = JSON.parse(localStorage.getItem('dataMassiv'));

  React.useEffect(() => {
    setSkeleton(true)
    apiProfile.getData()
    .then((res) => {
      console.log(res.items)
      setSkeleton(false)
      setDataProfile(res.items)
      setFiltrMassiv(res.items)
      //localStorage.setItem("dataMassiv", JSON.stringify(res.items));
    })
    .catch(err => {
      setSkeleton(false)
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
      const newMassiv = filtrTabArr(dataProfile, keyword);
      localStorage.setItem("departMassiv", JSON.stringify(newMassiv));
      setFiltrMassiv(newMassiv)
      setBrthNextYear([])
      setSort(false)
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
    const newMassiv = filtrSearchArr(departFiltr, keyword);
    setBrthNextYear([])
    setSort(false)
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
      setBrthNextYear([])
      setSort(false)
      setFiltrMassiv(sortArr(departFiltr))
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

  //Функция сортировки по дню рождения
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
          {skeleton && <Skeleton isOpen={skeleton} />}
          {(!skeleton && !error) && 
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
          user={dataProfile}
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
