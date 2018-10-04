import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {signout} from './../services/firebase'

class Header extends Component {
	constructor(){
		super();
		this.logout = this.logout.bind(this)
	}

	logout(){
		signout()
		.then(()=>{
			this.props.authenticate(false,null)
		})
	}

  render() {


    return (
		<header>
		<nav className="navbar navbar-dark navbar-fixed bg-dark">
		 <Link className="navbar-brand" to="/">MyApp</Link>
		 {
			 this.props.isAuth &&
			 <Link to="/" onClick={()=>this.logout()}>Logout</Link>

		 }

		</nav>
		</header>
    );
  }
}

export default Header;
