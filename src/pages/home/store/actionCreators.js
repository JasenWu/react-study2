 import {CHANGE_INPUT_VALUE , ADD_TODO_ITEM , DELETE_TODO_ITEM , ININT_LIST} from './actionTypes'
 import axios from 'axios'
export const getInputChangeAction = (value) => ({
	type:CHANGE_INPUT_VALUE,
	value
})


export const addItemAction = (value) => ({
	type:ADD_TODO_ITEM,
	value
})

export const deleteItemAction = (value) => ({
	type:DELETE_TODO_ITEM,
	value
})

export const initListAction = (value) => ({
	type:ININT_LIST,
	value
})


export const getTodoList = () => {
	return (dispatch)=>{
		axios.get('http://rd-yapi.qutoutiao.net/mock/832/hr/test').then((res)=>{
			 const data = res.data.data;
		 

			 const action = initListAction(data);
			 dispatch(action);
		})
	}
}	