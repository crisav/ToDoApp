import React from 'react'

import cross from '../assets/images/icon-cross.svg'
import check from '../assets/images/icon-check.svg'

const List = ({ id, task, done, dispatch }) => {

  const handleToggle = () => {

    dispatch({
      type: 'toggle',
      payload: id
    })

  }

  const handleDelete = () => {

    dispatch({
      type: 'delete',
      payload: id
    })
    
  }

  return (
    <li className='list__container--item'>
      <div className={done ? 'item__button completed' : 'item__button'}>
        <button onClick={ handleToggle }>
          { done && <img src={ check } /> }
        </button>
        <p onClick={ handleToggle }>
          { task }
        </p>
      </div>
      <button onClick={ handleDelete }>
        <img src={ cross } />
      </button>
    </li>
  )
}

export default List
