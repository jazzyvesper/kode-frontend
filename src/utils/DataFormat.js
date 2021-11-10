//конвертирует дату на входе "11.11.2020" на выходе "11 нояб 2020"
export function convertData(num, ind) {
    const date = new Date(num);
    
    const month = (date.toLocaleString('default', { month: 'long' })).slice(0,3)
    const year = date.getFullYear()
    const day = date.getDate()
    const birthday = ind===1 ? `${day} ${month} ${year} `  : `${day} ${month}`
    return  birthday
  }

  //Счетчик возраста
  export function counterAge(num) {
    const date = new Date(num);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const birthdaynow = new Date(today.getFullYear(), date.getMonth(), date.getDate()); //ДР в текущем году
    let age = today.getFullYear() - date.getFullYear();
    if(today < birthdaynow){
        age = age - 1
    }
    
    return  age
  }

  export function datatime(num) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const birthday = new Date(num);
    const birthdaynow = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate()); //ДР в текущем году
    
    return birthdaynow;
  }

//Вычисляет какие день рождения до и после сегодняшнего дня
export function birthdayNow(data) {
  
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const brth2021 = []
    const brth2022 =[]
    data.forEach((i) => {
      const birthday = new Date(i.birthday);
      const birthdaynow = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate()); //ДР в текущем году
      if(today < birthdaynow){
        return brth2022.push(i)
      } else {
        return brth2021.push(i)
      }
    })
   return [brth2021 ,brth2022]
  }

  //вычисляет какой шаблон возраста подставить
  export function agetostr(age) {
	let txt;
	let count = age % 100;
	if (count >= 5 && count <= 20) {
		txt = 'лет';
	} else {
		count = count % 10;
		if (count === 1) {
			txt = 'год';
		} else if (count >= 2 && count <= 4) {
			txt = 'года';
		} else {
			txt = 'лет';
		}
	}
	return txt;
}
