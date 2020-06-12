import React, { Component } from 'react';
import './style.css';
import Nav from '../Nav/index';
import Footer from '../Footer/index';

class Login extends Component {
	render() {
		return (
			<div className='Login'>
				<Nav />
				<div className='login-main'>
					<h1 className='login-h1'>Login</h1>
					<form onSubmit={this.handleSubmit} className='form-group login-form'>
						<label htmlFor='email'>
							<input
								className='form-control mx-sm-3 login-input'
								placeholder='Enter your Email'
								type='email'
								name='email'
								id='email'
							/>
						</label>
						<label htmlFor='password'>
							<input
								className='form-control mx-sm-3 login-input'
								placeholder='Choose a password'
								type='password'
								name='password'
								id='password'
							/>
						</label>
						<button className='styled-btn'>
                            Login
                            <span className='span'></span>
							<span className='span'></span>
                            <span className='span'></span>
                            <span className='span'></span>
						</button>
					</form>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Login;
