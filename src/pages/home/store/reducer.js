
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,ININT_LIST} from './actionTypes'
const defaultState = {
	inputValue : '',
	list : []
}

//纯函数：给定固定的输入，必须有固定的输出，而且不会有任何副作用
export default (state = defaultState, action)=>{
	let newState = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case CHANGE_INPUT_VALUE:
			
				  newState.inputValue = action.value;
				 return newState;

		case ADD_TODO_ITEM:
				  newState.list.push(newState.inputValue);
				  newState.inputValue = '';
			return newState;

		case DELETE_TODO_ITEM:
					newState.list.splice(action.value,1);
			return newState;
		case ININT_LIST:
				newState.list = action.value;
		return newState;	

		default:
			
			
		 
	}

	return state;
}