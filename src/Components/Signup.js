import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Signup extends Component {
	  	
	
	
  render() {
    return (      
		<section class="container">
			<h2>Sign Up</h2>
			<form>
			  <div class="form-group">
				<label for="name">Name</label>
				<input type="name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter email" />
			  </div>
			  <div class="form-group">
				<label for="email">Email address</label>
				<input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
				<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
			  </div>
			  <div class="form-group">
				<label for="password">Password</label>
				<input type="password" class="form-control" id="password" placeholder="Password" />
			  </div>
			  <button type="submit" class="btn btn-primary">Register</button>
			  <div  class="center">
				  <Link to="/">Return to homepage</Link>
			  </div>
			</form>
		</section>
    );
  }
}

export default Signup;
