import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {passwordRecovery} from './../services/firebase'

class PasswordRecovery extends Component {
	constructor(){
		super();
		this.state = {
			email:'default@default.com',
			password:'default@default.com',
			message:''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleSubmit(evt){
		evt.preventDefault()
		this.setState({
			message:''
		})

		let user = {
			email:this.state.email
		}
		passwordRecovery(user)
		.then(()=>{
			this.setState({
				message:'Message send'
			})
		})
		.catch(error=>{
			this.setState({
				message:'Verify your email'
			})
		})

	}
	handleChange(evt){
		this.setState({
			[evt.target.name]:evt.target.value
		})
	}


  render() {
    return (
		<section className="container">

			<h2>Password Recovery</h2>
			<form onSubmit={this.handleSubmit}>
			{
				!!this.state.message &&
					<div className="alert alert-danger" role="alert">
					{this.state.message}
					</div>
			}
			  <div className="form-group">
				<label htmlFor="email">Email address</label>
				<input
					type="email"
					className="form-control"
					id="email"
					name="email"
					aria-describedby="emailHelp"
					required
					placeholder="Enter email"
					onChange={this.handleChange}
				/>
			  </div>
			  <button type="submit" className="btn btn-primary">Send</button>
				<div  className="center">
				  <Link to="/">Return to homepage</Link>
			  </div>
			</form>

		</section>
    );
  }
}

export default PasswordRecovery;
