import React, { Component } from 'react';
import './style.css';
import logo from '../../img/traynrLogo.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
let endpoint;
if (process.env.NODE_ENV === 'development') {
	endpoint = 'http://localhost:3000/';
} else {
	endpoint = '/';
}

// DONT FORGET TO CHANGE THE WINDOW.LOCATION.HREF BELOW!!!!

class Nav extends Component {
	render() {
		if (window.location.href === 'http://localhost:3000/') {
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
										<button className='btn styled-btn'>
											Register
											<span className='span'></span>
											<span className='span'></span>
											<span className='span'></span>
											<span className='span'></span>
											<i className="fa fa-user-plus"></i>
										</button>
									</Link>
									<Link className='nav-link' to='/login' className='nav-item nav-link'>
										<button className='btn styled-btn'>
											Login
											<span className='span'></span>
											<span className='span'></span>
											<span className='span'></span>
											<span className='span'></span>
											<i className="fa fa-sign-in"></i>
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</nav>
			);
		}
		if (window.location.href === 'http://localhost:3000/register') {
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
									<Link to='/' className='nav-item nav-link'>
										<button className='btn styled-btn'>
										Home
											<span className='span'></span>
											<span className='span'></span>
											<span className='span'></span>
											<span className='span'></span>
											<i className='fa fa-home'></i>
										</button>
									</Link>
									<Link className='nav-link' to='/login' className='nav-item nav-link'>
										<button className='btn styled-btn'>
											Login
											<span className='span'></span>
											<span className='span'></span>
											<span className='span'></span>
											<span className='span'></span>
											<i className="fa fa-sign-in"></i>
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</nav>
			);
		}
		if (window.location.href === 'http://localhost:3000/login') {
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
									<Link to='/' className='nav-item nav-link'>
										<button className='btn styled-btn'>
										Home
											<span className='span'></span>
											<span className='span'></span>
											<span className='span'></span>
											<span className='span'></span>
											<i className='fa fa-home'></i>
										</button>
									</Link>
									<Link to='/register' className='nav-item nav-link'>
										<button className='btn styled-btn'>
											Register
											<span className='span'></span>
											<span className='span'></span>
											<span className='span'></span>
											<span className='span'></span>
											<i className="fa fa-user-plus"></i>
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</nav>
			);
		}
		if (window.location.href === 'http://localhost:3000/userhome' || 'http://localhost:3000/create') {
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
									<Link to='/' className='nav-item nav-link'>
										<button className='btn styled-btn'>
										Home
											<span className='span'></span>
											<span className='span'></span>
											<span className='span'></span>
											<span className='span'></span>
											<i className='fa fa-home'></i>
										</button>
									</Link>
									<Link to='/' className='nav-item nav-link'>
										<button className='btn styled-btn'>
											Logout
											<span className='span'></span>
											<span className='span'></span>
											<span className='span'></span>
											<span className='span'></span>
											<i className="fa fa-sign-out"></i>
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</nav>
			);
		}
	}
}

export default Nav;
