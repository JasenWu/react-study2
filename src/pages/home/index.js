import React, { PureComponent } from 'react';
import 'antd/dist/antd.css'
 
 
import {getTodoList,addItemAction,deleteItemAction,getInputChangeAction} from './store/actionCreators'

import store from './store/index' 
import TodoList from './todoList';

 

class Home extends PureComponent {
	constructor(props){
		super(props);
		this.state = store.getState();
		this.handleChange = this.handleChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleAddClick = this.handleAddClick.bind(this);
		store.subscribe(this.handleStoreChange);
	}
	render() {
 
		return (
			  <TodoList
			  	 inputValue={this.state.inputValue}
				 handleChange={this.handleChange}
				 handleAddClick = {this.handleAddClick}
				 list = {this.state.list}
				 handleDelItem = {this.handleDelItem}
				 
			  />
		)
	}

	componentDidMount(){
		// axios.get('http://rd-yapi.qutoutiao.net/mock/832/hr/test').then((res)=>{
		// 	const action = initListAction(res.data.data);
		// 	store.dispatch(action);
		 
		// })
		const action = getTodoList();

		store.dispatch(action);
		 
		
	}

	handleChange(e){
		 
		const action =  getInputChangeAction(e.target.value);

		store.dispatch(action);
 
	}
	handleAddClick(){
		const action = addItemAction(this.state.inputValue)
		store.dispatch(action);
	}
	handleDelItem(index){
		const action = deleteItemAction(index);
		store.dispatch(action); 
	}

	handleStoreChange(){
		this.setState(store.getState());
	}

}

 
export default Home;
