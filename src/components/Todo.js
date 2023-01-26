import React, {useState} from 'react'
import Form from './Form.js'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import axios from 'axios';
import { BsFlower3} from "react-icons/bs";
import { BsFillTrashFill} from "react-icons/bs";



const Todo = ({todos,completeTodo, removeTodo, updateTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        });
    };

  if (edit.id){
      return <Form edit={edit} onSubmit={submitUpdate} />;

  }

  return todos.map((todo, index) => (
      <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
        <div className='icons-i'><BsFlower3/></div>
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}     
          </div>
          <div className='icons'>
              <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text})}
              className='edit-icon' />
              <BsFillTrashFill onClick={() => removeTodo(todo.id)}
              className='delete-icon'/>

          </div>
      </div>
  ));
};

export default Todo;