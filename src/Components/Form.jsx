import React from "react";

export default function Form({setInputText,todos,setTodos,inputText}) {
    // const [input, setInput] = useState('');
    const inputHandler = (e) => {
        setInputText(e.target.value);
        // console.log(e.target.value);
    }
    const submitTodoHnadler = (e) => {
        e.preventDefault();
        
        setTodos([
            ...todos,{
                text: inputText, completed:false, id: Math.random()*20
            }
        ]);
        setInputText('');
        // console.log(inputText);
    }
    
  return (
    <div>
      <form>
        <input type="text" className="todo-input" onChange = {inputHandler} value = {inputText} />
        <button className="todo-button" type="submit" onClick= {submitTodoHnadler}>
          {/* <span class="material-icons-outlined"></span> */}
          <i className="fas fa-plus-square"></i>
        </button>
        {/* <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div> */}
      </form>
    </div>
  );
}
