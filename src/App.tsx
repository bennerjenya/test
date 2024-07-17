import { useState } from 'react'
import './App.css'

interface Post {
  title: string;
  body: string;
  id: number;
}

interface AdvancedPost extends Post {
  userId: number;
}

function App() {
  const [count, setCount] = useState({
    firstName: "Lisa",
    lastName: "Doe",
  });

  function onClick() {
    const obj = {
      firstName: "Eugene",
      lastName: "Sain",
      nickname: "krez",
    };

    const nasta ={
        firstName: "Nastyua",
        lastName: "Chered",
    }
    setCount(count => ({ ...obj, ...count, ...nasta }));
    // const res = {
    //   firstName: "Lisa",
    //   lastName: "Doe",
    //   nickname: "krez",
    // };
  }
    // setCount(prev => ({ ...obj, ...prev })); при объединении 2х объектов и более, в новом объекте  не может быть одинаковых полей поэтому он перезаписывает одинаковые поля - по сути оставляет последний объект ЕСЛИ ПОЛЯ ОДИНАКОВЫЕ ТО ЕСТЬ В ЭТОМ СЛУЧАЕ в результате поля лизы /// если у нас setCount(prev => ({  ...prev, ...obj })); то будет в итоге женя сейн!!! если у нас setCount(prev => ({ ...obj, ...prev })) и у обджекта есть еще одно поле которого нет у прев то он тоже добавляется по итоуг в новый объект!!!!

  return (
      <div className="card">
          <button onClick={onClick}>
              {count.firstName} {count.lastName}
          </button>
      </div>
  )
}

export default App
