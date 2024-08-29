/* eslint-disable react/prop-types */

import { useState } from 'react'
import '../css/TodoCreate.css'

function TodoCreate({onCreateTodo}) {
const [ newTodo , setNewTodo] = useState('');

const clearInput = () => {
    setNewTodo('');
}

//* burada da bir adet usestate tanimladik bunun inputa gireilen deger oldugunu bildigimizden baslangic degerini bos string ifade yaptik daha sonra createTodo adinda bir fonksiyon tanimladik ve bu fonksiyon ilede kendimize bir adet request yani gelen deger icin obje olusturduk bir adet rastgele id urettik ve birde gelen degeri content ismi altinda buraya gonderdik daha sonra bunu app.jsx dosyamizdaki "ocCreateTodo" adli metoda  gonderdik props araciligi ile ve onu orada array e atarak console'da gopsterdik


const createTodo = () => {
if(!newTodo)  return
else{
  const request = {
    id:Math.floor(Math.random() * 99999999999),
    content : newTodo
  }
  onCreateTodo(request);
  clearInput();
}

}


  return (
    <div className="todo-create-container">
        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='todo-input' type="text" placeholder="ToDo giriniz" />
        <button className="todo-button" onClick={createTodo}>To Do Ekle</button>
    </div>
  )
}

export default TodoCreate