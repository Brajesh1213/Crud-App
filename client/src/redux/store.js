import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { TodoReducers } from './reducers/TodoReducers';
import { TabReducer } from './reducers/TabReducer';

const reducer = combineReducers({
  todos: TodoReducers,
  currentTab:TabReducer
});
const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
