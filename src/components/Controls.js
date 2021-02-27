import React from 'react'

const Controls = ({setView, view, todos, dispatch}) => {

  const handleDeleteCompleted = () => {

    dispatch({
      type: 'deleteCompleted',
    })

  }

  const todosLeft = () => {

    const count = todos.filter( todo => todo.done !== true )

    return count.length

  }

  return (
    <div className='todo__controls'>
      <span className='todo-count'><strong>{ todosLeft() }</strong> items left</span>
      
      <ul className='todo__controls--filters'>
        <li>
          <button
            className={ (view === 'all') ? 'selected' : '' }
            onClick={() => setView('all')}
          >All</button>
        </li>
        <li>
          <button
            className={ (view === 'active') ? 'selected' : '' }
            onClick={() => setView('active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={ (view === 'completed') ? 'selected' : '' }
            onClick={() => setView('completed')}
          >
            Completed
          </button>
        </li>
      </ul>
      
      <button 
        className='delete'
        onClick={handleDeleteCompleted}
      >
        Clear Completed
      </button>

    </div>
  )
}

export default Controls
