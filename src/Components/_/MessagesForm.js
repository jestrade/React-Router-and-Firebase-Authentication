import React, { Component } from 'react';
import {create,upload} from './../../services/firebase'

class MessagesForm extends Component {
	constructor(){
		super();
		this.state = {
			image:'',
			imageFile:'',
			message: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChangeFile = this.handleChangeFile.bind(this)
	}
	handleChangeFile(evt){
		evt.persist()
		let reader = new FileReader()
		reader.onloadend  = () => {
			this.setState({
				imageFile:evt.target.files[0],
				image:reader.result
			})
		}
		reader.readAsDataURL(evt.target.files[0])
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
			image:this.state.image,
			message:this.state.message
		}
		create('messages',message)
		.then(()=>{
			upload('images',this.state.imageFile)

			this.setState({
				imageFile:'',
				image:'',
				message: ''
			})
		})


	}

  render() {
    return (
			<div>
				<h3>Send message</h3>
					<form onSubmit={this.handleSubmit}>
						{
							!!this.state.image &&
								<img src={this.state.image} alt="imagen" width="200" />
						}
						<div  className="form-group">
							<input
								onChange= {this.handleChangeFile}
								type="file"
								className="form-control"
								accept="image/*"
								name="image" />
						</div>
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
