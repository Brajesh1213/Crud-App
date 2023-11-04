
import * as actionType from '../actions/type'

export const TabReducer =(state=actionType.ALL_TODOES,action)=>{
switch(action.type){
    case actionType.TOGGLE_TAB:
        return action.selected
        default :
       return state;
}
}
