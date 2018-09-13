import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Signin extends Component {
	constructor(){
		super();
		this.state = {
			email:'',
			password:''
		}
		
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleSubmit(evt){
		evt.preventDefault()
		this.props.authenticate(true)		
	}
	handleChange(evt){
		this.setState({
			[evt.target.name]:evt.target.value		
		})	
	}
	
	
  render() {
    return (      
		<section class="container">
		
			<h2>Sign In</h2>
			<form onSubmit={this.handleSubmit}>
			  <div class="form-group">
				<label for="email">Email address</label>
				<input 
					type="email" 
					class="form-control" 
					id="email" 
					aria-describedby="emailHelp" 
					placeholder="Enter email" 
					onChange={this.handleChange}
				/>
				<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
			  </div>
			  <div class="form-group">
				<label for="password">Password</label>
				<input 
					type="password" 
					class="form-control" 
					id="password" 
					placeholder="Password" 
					onChange={this.handleChange}
				/>
			  </div>
			  <button type="submit" class="btn btn-primary">Login</button>
			  <div class="center">
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
