import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Header';
import Signin from './Signin';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Footer from './Footer';

class App extends Component {
	constructor(){
		super()
		this.state ={
			isAuth: false
		}
		this.authenticate = this.authenticate.bind(this)

	}

	authenticate(value){
		this.setState({
			isAuth: value
		})
	}


	render() {
	return (
	  <main>



		<BrowserRouter>
		<div>
			<Header isAuth={this.state.isAuth} authenticate={this.authenticate}  />
			{
				!this.state.isAuth ?
					<div>
						<Route exact path="/" component={()=><Signin authenticate={this.authenticate} />} />
						<Route path="/signup" component={Signup} />
					</div>
				:
					<Route exact path="/" component={Dashboard} />
			}
			<Footer />
		</div>
		</BrowserRouter>


	  </main>
	);
	}
}

export default App;
