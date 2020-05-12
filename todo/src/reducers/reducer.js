export const initialState = [
  {
    item: 'Create ToDo List using reducer function',
    completed: false,
    id: 1
  }
]


export function reducer(state, action){
  switch (action.type){
    case 'ADD_TODO':
      return[
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ]
      case 'TOGGLE_COMPLETE':
        return state.map(item => item.id === action.payload ? {...item, completed: !item.completed} : item)
      case 'CLEAR_COMPLETED':
        return state.filter(item => !item.completed)
    default:
      return state
  }
}