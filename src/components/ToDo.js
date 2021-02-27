import React, { useEffect, useReducer, useState } from 'react'

import { todoReducer } from '../reducers/todoReducer'
import { filterTodos } from '../helpers/filterTodos'

import List from './List'
import Controls from './Controls'

import sun from '../assets/images/icon-sun.svg'
import moon from '../assets/images/icon-moon.svg'

const init = () => {

  return JSON.parse(localStorage.getItem('todos')) || [];

}

const ToDo = ({ darkMode, setDarkMode }) => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect( ()=> {

    localStorage.setItem('todos', JSON.stringify( todos ) );
    
  }, [todos]);

  const [ view, setView ] = useState('all');

  const [ inputValue, setInputValue ] = useState('')

  const handleInputChange = (e) => {

    setInputValue(e.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( inputValue.trim().length <= 1 ) {
      return
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: inputValue,
      done: false
    }

    dispatch({
      type: 'add',
      payload: newTodo
    })

    setInputValue('')
    
    setView('all')

  }

  return (
    <section className='todo'>
      <div className='todo__header'>
        <h1>TODO</h1>
        <button
          onClick={() => setDarkMode( !darkMode )}
        >
          {
            darkMode 
              ? <img src={sun} alt='header-icon'/>
              : <img src={moon} alt='header-icon'/>
          }
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='Create a new todo...'
          className='todo__input'
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>

      <div className='list'>

        <ul className='list__container'>
          {
            filterTodos(view, todos).map((todo) =>
              <List
                key={todo.id}
                id={todo.id}
                task={todo.desc}
                done={todo.done}
                dispatch={dispatch}
              /> )
          }
        </ul>

        <Controls
          setView={setView}
          view={view}
          todos={todos}
          dispatch={dispatch}
        />

      </div>

    </section>
  )
}

export default ToDo
