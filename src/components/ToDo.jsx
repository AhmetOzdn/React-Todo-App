
/* eslint-disable react/prop-types */
import "../css/todo.css";
import { IoIosRemoveCircle } from "react-icons/io";
import { RiFileEditFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
function ToDo({ todo , onRemoveTodo , UpdatedTodo}) {
  const { id, content } = todo; //* object distructing surekli todo.content vs gibi kullanimi onler
  const [editable , setEditable] = useState(false);
  const [newTodo , setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id); //? silinicek olan todonun id sini verdik buradaki isim sadece poprps isminden kaynakli boyle yani burada "onRemoveTodo" yerine props'ta ahmet deseydik burada ahmet olarak cagirmamaiz gerekti '{ todo , onRemoveTodo}' burada "onRemoveTodo" yerine ve bunu aldicimiz parent componettede isim olarak o sekilde gondermemiz gerekecekti.
  }

  const updateTodo = () => {
    const updatedTodoRequest = {
      id: id,
      content: newTodo
    }
    UpdatedTodo(updatedTodoRequest)
    setEditable(false);
  }


  return (
    <div className="todo-container">
      <div>
        {editable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} 
        style={{width:'400px'}}  className='todo-input' type="text" placeholder="Duzenlemek istediginiz degeri giriniz." /> : content}
        </div>
      <div>
        
        {
          editable ? <FaCheckCircle className="todo-icon" onClick={updateTodo}/> : <RiFileEditFill className="todo-icon" onClick={() => setEditable(true)} />
        } 
        <IoIosRemoveCircle className="todo-icon" onClick={removeTodo}/> 
        
      </div>
    </div>
  );
}

export default ToDo;
