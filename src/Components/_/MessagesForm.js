import React, { Component } from 'react';
import {create} from './../../services/firebase'

class MessagesForm extends Component {
	constructor(){
		super();
		this.state = {
			message: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(evt){
		this.setState({
			[evt.target.name]:evt.target.value
		})
	}
	handleSubmit(evt){
		evt.preventDefault()
		let message = {
			email:localStorage.getItem("user"),
			message:this.state.message
		}
		create('messages',message)
		.then(()=>{
			this.setState({
				message: ''
			})
		})


	}

  render() {
    return (
			<div>
				<h3>Send message</h3>
					<form onSubmit={this.handleSubmit}>
						<div  className="form-group">
							<textarea
								onChange= {this.handleChange}
								className="form-control"
								value = {this.state.message}
								name="message"
								placeholder="Message"
								rows="6">
							</textarea>
						</div>
						<div className="form-group">
							<button
								className="btn btn-primary btn-block"
								type="submit">Send Message</button>
						</div>
					</form>
			</div>

    );
  }
}

export default MessagesForm;
