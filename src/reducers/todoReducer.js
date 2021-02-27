export const todoReducer = ( state = initialState, action ) => {

  switch (action.type) {
    case 'add':
      return [ action.payload, ...state ];

    case 'delete':
      return state.filter( todo => todo.id !== action.payload );

    case 'toggle':
      return state.map( todo => {
        if ( todo.id === action.payload ) {
          return {
            ...todo,
            done: !todo.done
          }
        } else {
          return todo;
        }
      })  
  
    case 'deleteCompleted':
      return state.filter( todo => todo.done !== true );

    default: return state;
  }

}