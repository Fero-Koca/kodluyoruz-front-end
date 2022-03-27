import React from 'react'
import Todo from './todo'

function List({ todos, setTodos, filteredTodos }) {

  return (
    <section className='main'>
      <input className='toggle-all' type='checkbox' />
      <label htmlFor='toggle-all'>Mark all as complete</label>
      <ul className='todo-list'>
        {filteredTodos.map((todo) => (
          <Todo text={todo.text} id={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
      
    </section>
  )
}

export default List