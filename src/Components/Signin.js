import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {signin} from './../services/firebase'

class Signin extends Component {
	constructor(){
		super();
		this.state = {
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

		let user = {
			email:this.state.email,
			password:this.state.password
		}
		signin(user)
		.then(()=>{
			this.props.authenticate(true,user.email)
		})
		.catch(error=>{
			this.setState({
				message:'Verify your credentials'
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

			<h2>Sign In</h2>
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
			  <div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					className="form-control"
					id="password"
					name="password"
					required
					placeholder="Password"
					onChange={this.handleChange}
				/>
			  </div>
			  <button type="submit" className="btn btn-primary">Login</button>
			  <div className="center">
				  <Link to="/signup">SignUp</Link>
				   |
				  <Link to="/passwordRecovery">Forgot password</Link>
			  </div>
			</form>

		</section>
    );
  }
}

export default Signin;
