import React, { Component } from 'react';

import Header from './Header';
import Section from './Section';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
	  	
	
	
  render() {
    return (
      <main>
		<Header />
		<Section />
		<Contact />
		<Footer />
	  
	  </main>
    );
  }
}

export default App;
