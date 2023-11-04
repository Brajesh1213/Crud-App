import React, { useEffect } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { deleteTodo, getAllTodos } from './redux/actions';
import Todos_Todo from './components/Todos_Todo';
import Tabs from './components/Tabs';
import { ALL_TODOES,DONE_TODOES,ACTIVE_TODOES } from './redux/actions/type';



const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state=>state.todos)
    
    useEffect(()=>{
        dispatch(getAllTodos());
    },[])

    const currentTab = useSelector(state=>state.currentTab)

    const getTodos = ()=>{
        if(currentTab=== ALL_TODOES){
            return todos;
        }
        else if(currentTab===ACTIVE_TODOES){
            return todos.filter(todo=>!todo.done)
        }
        else if(currentTab===DONE_TODOES){
            return todos.filter(todo=>todo.done)
        }
    }
    const removeDoneTodoes =()=>{
       todos.forEach(({done,_id}) => {
        if(done){
            dispatch(deleteTodo(_id));
        }
       }); 
    }

  return (

    <div>
    <article>
    <div>
     <Tabs currentTab={currentTab}/> 
     {
        todos.some(todo=>todo.done)?(
            <button 
            onClick={removeDoneTodoes}
            className='button clear'
            >Remove Done Todos</button>
        ):''
     }  
    </div>
        <ul>
            {
                getTodos().map(todo=>
                (
             <li>
                        <Todos_Todo
                        key={todo.id}
                        todo={todo}/>
                        </li>

                ))
            }
        </ul>
    </article>
    
    
    </div>
  )
}

export default Todo