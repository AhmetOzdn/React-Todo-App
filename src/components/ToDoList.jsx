/* eslint-disable react/prop-types */
import "../css/ToDoList.css";
import ToDo from "./ToDo";
function ToDoList({ todos,onRemoveTodo,onUpdatedTodo }) {
  return (
    <div className="todoList-container">
      <div className="todoLsit-header-container">
        <h4 className="todoLsit-header">ToDo List</h4>
      </div>
      <div>
        {
          todos && todos.map((todo) => (
            <ToDo key={todo.id} onRemoveTodo={onRemoveTodo} UpdatedTodo={onUpdatedTodo} todo= {todo}/>
          ))
        }
      </div>
    </div>
  );
}

export default ToDoList;
