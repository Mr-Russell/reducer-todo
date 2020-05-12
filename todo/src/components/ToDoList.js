import React from 'react';
import Task from './Task.js';

function ToDoList(props){
  return(
    <ul>
      {props.tasks.map(item => <Task data={item} toggleComplete={props.toggleComplete}/>)}
    </ul>
  );
};

export default ToDoList;