import React, { useState } from 'react'
import { deleteTodo, toggleTodo,updateTodo } from '../redux/actions'
import { useDispatch } from 'react-redux'
 
const Todos_Todo = ({todo}) => {
const dispatch = useDispatch();
const [editing,setEditing]= useState(false);
  const [text,setText]=useState(todo.data);

const onFormSubmit = (e)=>{
  e.preventDefault();

  setEditing(prev=>!prev);

  dispatch(updateTodo(todo._id,text))


}



return (
    <li className='task'
    onClick={()=>dispatch(toggleTodo(todo._id))}
    style={{
      textDecoration:todo.done?'line-through':'',
      color:todo.done?'#bdc3c7':'#34495e'

    }}
    >

    <span style={{display:editing?'none':''}} >{todo.data}</span>
    <form
   style={{display:editing?'inline':'none'}}
    onSubmit={onFormSubmit}
    >
      <input
        type='text' value={text}
        className='edit-todo'
        onChange={(e)=>setText(e.target.value)}
      />
    </form>
    
    <span className='icon' onClick={()=>dispatch(deleteTodo(todo._id))}>
      <i className='fas fa-trash'/>
    </span>
    <span className='icon' onClick={()=>setEditing(prevstate=>!prevstate)}>
      <i className='fas fa-pen'/>
    </span>
    </li>
  )
}

export default Todos_Todo