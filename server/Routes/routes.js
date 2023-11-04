import express from 'express';
import { addTodo, toggleTodoDone, updateTodo,deleteTodo} from '../controller/todo-connroller.js';
import { getAllTodos } from '../controller/todo-connroller.js';
const route = express.Router();

route.post('/todos',addTodo)
route.get('/todos',getAllTodos);
route.get('/todos/:id',toggleTodoDone)
route.put('/todos/:id',updateTodo);
route.delete('/todos/:id',deleteTodo)

export default route;