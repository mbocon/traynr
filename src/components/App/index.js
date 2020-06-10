import React, { Component } from 'react';
import './style.css';
import Nav from '../Nav/index';
import Footer from '../Footer/index'

class App extends Component {
	render() {
		return (
			<div className='App'>
        <Nav />
          <div className="app-main">
            <div className="app-main-content">
              <h1 className='app-main-h1'>Welcome to Traynr!</h1>
              <p className='app-main-p'>An App that allows you to build your own custom workout plans.</p>
              <p className='app-main-p'>Don't have a program in mind? Select from one of our pre-built plans.</p>
              <p className='app-main-p'>Register or login to begin!</p>
            </div>
          </div>
        <Footer />
			</div>
		)
	}
}

export default App;
