import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Header';
import Signin from './Signin';
import Signup from './Signup';
import PasswordRecovery from './PasswordRecovery';
import Dashboard from './Dashboard';
import Footer from './Footer';
import {isAuth} from './../services/firebase'

class App extends Component {
	constructor(){
		super()
		this.state ={
			isAuth: false,
			isLoading:true
		}
		this.authenticate = this.authenticate.bind(this)

	}

	authenticate(value){
		this.setState({
			isAuth: value
		})
	}
 componentWillMount(){
	 isAuth
	 .then(user=>{
		 this.setState({
 			isAuth: true,
			isLoading: false
 		})
	 })
	 .catch(error=>{
			this.setState({
				 isLoading: false
			})
	 })
 }

	render() {
	return (
	  <main>

		{
			this.state.isLoading ?
					<div class="loader"></div>
			:
					<BrowserRouter>
					<div>
						<Header isAuth={this.state.isAuth} authenticate={this.authenticate}  />
						{
							!this.state.isAuth ?
								<div>
									<Route exact path="/" component={()=><Signin authenticate={this.authenticate} />} />
									<Route path="/signup" component={Signup} />
									<Route path="/passwordRecovery" component={PasswordRecovery} />
								</div>
							:
								<Route exact path="/" component={Dashboard} />
						}
						<Footer />
					</div>
					</BrowserRouter>
			}

	  </main>
	);
	}
}

export default App;
