import React, { Component } from 'react';
import {list,remove} from './../../services/firebase'

class MessagesList extends Component {
	constructor(){
		super();
		this.state = {
			messages:[]
		}
	}
	removeData(messageId){
		remove('messages',messageId)
	}
	componentWillMount(){
		list('messages')
		.on('value', snapshot=>{
			let obj=[]
			let messages=snapshot.val()
			for(let message in messages){
				obj.push({
					id:message,
					email:messages[message].email,
					image:messages[message].image,
					message:messages[message].message
				})
			}
			this.setState({
				messages:obj
			})
		})
	}
  render() {
    return (

		<div>
			<h3>Message list</h3>
			{
				this.state.messages.length>0 &&
				<table className="table">
					<thead>
						<tr>
							<td>Email</td>
							<td>Message</td>
							<td>Image</td>
							<td>Options</td>
						</tr>
					</thead>
					<tbody>
					{
							this.state.messages.map(message =>{
								return(
									<tr key={message.id}>
										<td>{message.email}</td>
										<td>{message.message}</td>
										<td>{!!message.image && <img src={message.image} alt="imagen" width="64" />}</td>
										<td><button className="btn btn-danger" onClick={()=>{this.removeData(message.id)}}>Delete</button></td>
									</tr>
								)
							})
					}
					</tbody>
				</table>
			}
		</div>

    );
  }
}

export default MessagesList;
