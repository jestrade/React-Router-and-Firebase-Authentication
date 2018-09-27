import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {signup, create} from './../services/firebase'

class Signup extends Component {
	constructor(){
		super();
		this.state = {
			name:'',
			lastname:'',
			email:'',
			password:'',
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

		if(this.state.password===this.state.passwordConfirmation){
			let user = {
				email: this.state.email,
				password:this.state.password
			}
			let userInfo = {
				name:this.state.name,
				lastname:this.state.lastname,
				email: this.state.email
			}
			signup(user)
			.then(()=>{
				create('users',userInfo)
			})
			.catch(error=>{
				this.setState({
					message:'Verify your input'
				})
			})
		}else{
			this.setState({
				message:'Password must match'
			})
		}


	}
	handleChange(evt){
		this.setState({
			[evt.target.name]:evt.target.value
		})
	}



  render() {
    return (
		<section className="container">

			<h2>Sign Up</h2>
			<form onSubmit={this.handleSubmit}>
			{
				!!this.state.message &&
					<div className="alert alert-danger" role="alert">
					{this.state.message}
					</div>
			}
			  <div className="form-group">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					className="form-control"
					id="name"
					name="name"
					placeholder="Enter name"
					required
					onChange={this.handleChange}
				/>
			  </div>
			  <div className="form-group">
				<label htmlFor="lastname">Lastname</label>
				<input
					type="text"
					className="form-control"
					id="lastname"
					name="lastname"
					required
					placeholder="Enter lastname"
					onChange={this.handleChange}
				/>
			  </div>
			  <div className="form-group">
				<label htmlFor="email">Email address</label>
				<input
					type="email"
					className="form-control"
					id="email"
					name="email"
					aria-describedby="emailHelp"
					placeholder="Enter email"
					required
					onChange={this.handleChange}
				/>
			  </div>
			  <div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					className="form-control"
					id="password"
					name="password"
					placeholder="Password"
					required
					onChange={this.handleChange}
				/>
			  </div>
			  <div className="form-group">
				<label htmlFor="passwordConfirmation">Confirm password</label>
				<input
					type="password"
					className="form-control"
					id="passwordConfirmation"
					name="passwordConfirmation"
					placeholder="Confirm password"
					required
					onChange={this.handleChange}
				/>
			  </div>
			  <button type="submit" className="btn btn-primary">Register</button>
			  <div  className="center">
				  <Link to="/">Return to homepage</Link>
			  </div>
			</form>
		</section>
    );
  }
}

export default Signup;
