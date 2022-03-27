import './App.css';
import Footer from './components/footer'
import Header from './components/header';
import List from './components/list';

import React, { useState, useEffect } from 'react';

 


function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'active':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

    filterHandler()
  }, [todos, status])

  
  return (
    <div>
      <section className='todoapp'>
        <Header inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos} />
        <Footer todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos} status={status} setStatus={setStatus} />
      </section>
      
    </div>
  );
}


export default App;
