
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import React, {useState, useEffect} from 'react';

// HOOKS ARE USED 

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    saveLocalTodos();
  }, [todos])


  // SAVE TO LOCAL STORAGE
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos' === null)) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodo);
    }
  }


  return (
    <div className="App">
       <header>
      <h1>WHAT'S YOUR PLAN FOR TODAY?</h1>
    </header>
    <Form  inputText = {inputText} setInputText= {setInputText} todos={todos} setTodos = {setTodos}/>
    <TodoList setTodos={setTodos} todos = {todos}/>
    </div> 
  );
  }

export default App;
