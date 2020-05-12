import React from 'react';
import './Task.css'

function Task(props){
  return (
    <li 
    className={props.data.completed ? 'completed' : ''}
    onClick={()=>props.toggleComplete(props.data.id)}>{props.data.item}</li>
  )
};

export default Task;