import React from "react";
const Todo = ({ todo, setTodos, todos }) => {
  const deleteTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const CompleteHandler = () => {
    setTodos(
      todos.map((items) => {
        if (items.id === todo.id) {
          return {
            ...items,
            completed: !items.completed
          };
        }
        return items; 
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ''  }`}>{todo.text}</li>
      <button  onClick = {CompleteHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTodo} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
