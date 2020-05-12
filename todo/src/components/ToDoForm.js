import React, {useState} from 'react';

function ToDoForm(props) {

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          name='task'
          type='text'
          placeholder='New Task'
          value={props.entry}
          onChange={props.inputChange}
        />
        <br />
        <input
          name='add'
          type='submit'
          value='Add To List'
        />
      </form>

      <button onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoForm;