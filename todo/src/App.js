import React, {useReducer, useState} from 'react';
import {initialState, reducer} from './reducers/reducer.js'
import ToDoList from './components/ToDoList.js'
import ToDoForm from './components/ToDoForm.js'
// import './App.css';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [entry, setEntry] = useState('')

  const inputChange = e =>{
    setEntry(e.target.value)
  }

  const handleSubmit = e =>{
    e.preventDefault()
    dispatch({type:'ADD_TODO', payload: entry})
  }

  const toggleComplete = (id)=>{
    dispatch({type:'TOGGLE_COMPLETE', payload:id})
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoList 
        tasks={state}
        toggleComplete={toggleComplete}
      />
      <ToDoForm
        onSubmit={handleSubmit}
        inputChange={inputChange}
        entry={entry}
      />
    </div>
  );
}

export default App;
