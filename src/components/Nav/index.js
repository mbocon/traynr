import React, { Component } from 'react';
import './style.css';
import logo from '../../img/traynrLogo.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return (
			<nav className='navbar navbar-expand-md navbar-dark'>
				<div className='Nav container-fluid'>
					<button type='button' className='navbar-toggler' data-toggle='collapse' data-target='#navbarCollapse'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarCollapse'>
						<div className='navbar-nav'>
							<Link to='/'>
								<img className='nav-img' src={logo} alt='logo' />
							</Link>
						</div>
						<div className='collapse navbar-collapse' id='navbarCollapse'>
							<div className='navbar-nav ml-auto'>
								<Link to='/register' className='nav-item nav-link'>
									<button className='btn'>Register</button>
								</Link>
								<Link className='nav-link' to='/login' className='nav-item nav-link'>
									<button className='btn'>Login</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

export default Nav;
