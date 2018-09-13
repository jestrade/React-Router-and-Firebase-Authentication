import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
	  	
	logout(){
		this.props.isAuth(false)		
	}
	
  render() {
	  
	  
    return (
		<header>
		<nav class="navbar navbar-dark navbar-fixed bg-dark">
		 <Link class="navbar-brand" to="/">MyApp</Link>
		 {
			 this.props.isAuth &&
			 <Link to="/" onClick={this.logout}>Logout</Link>
			 
		 }
		 
		</nav>
		</header>
    );
  }
}

export default Header;
