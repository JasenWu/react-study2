import React from 'react';
import { Input , Button , List } from 'antd'

const TodoListUi = (props)=>{
    return (
         <div style={{marginTop:'10px'}}>
			 
				<Input 
					placeholder="todo info" style={{width:'300px'}} 
					onChange={props.handleChange}
					value={props.inputValue}
				/>
				<Button onClick={props.handleAddClick} type="primary">提交</Button>


				<List
					style={{width:'300px',marginTop:'10px'}}
					bordered
					dataSource={props.list}
					renderItem={(item,index) => (
						<List.Item onClick={()=>{
                            props.handleDelItem(index)

                        }}>
								{item}
						</List.Item>
					)}
				/>
			</div>
    )
}


// class TodoList extends PureComponent {
// 	constructor(props){
// 		super(props);
 
// 	}
// 	render() {
 
// 		return (
// 			<div style={{marginTop:'10px'}}>
			 
// 				<Input 
// 					placeholder="todo info" style={{width:'300px'}} 
// 					onChange={this.props.handleChange}
// 					value={this.props.inputValue}
// 				/>
// 				<Button onClick={this.props.handleAddClick} type="primary">提交</Button>


// 				<List
// 					style={{width:'300px',marginTop:'10px'}}
// 					bordered
// 					dataSource={this.props.list}
// 					renderItem={(item,index) => (
// 						<List.Item onClick={(index)=>{
//                             this.props.handleDelItem(index)

//                         }}>
// 								{item}
// 						</List.Item>
// 					)}
// 				/>
// 			</div>
// 		)
// 	}
 

// }

 
export default TodoListUi;