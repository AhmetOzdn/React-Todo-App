import "./App.css";
import { useState } from "react";
import TodoCreate from "./components/TodoCreate";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  //? bu fonksiyon ile sunu yaptik bir adet use state tanimladik burada todos adinda bir array olarak ve bunu setTodos ile de girilen degeri bu array e ekledik. setTodos([...todos,newTodo]); "..." sapraite operatoru burada ilk once '...todos' bunun anlami todos arrayinin indexler halinde ac demek ve girilen newTodo'yu da array e ekle bunu dedik dagha sonra alt tarafta bir props tanimladik ve bu propsun anlami su buradaki "createTodo" fonksiyonunu todocreate componente props  ile gonder daha sonra todocreate componente gittik islmelerin devami orada

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]); // "..." sapraite operatoru
  };

  const updateTodo = (newTodo) => {

    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    });
    
    setTodos([...updatedTodos]) // "..." sapraite operatoru
  };

  console.log(todos);

  return (
    <div className="main-container">
      <div className="todo-create">
        <TodoCreate onCreateTodo={createTodo}></TodoCreate>
        <ToDoList todos={todos} onRemoveTodo={removeTodo} onUpdatedTodo={updateTodo}></ToDoList>
      </div>
    </div>
  );
}

export default App;
