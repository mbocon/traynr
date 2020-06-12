import React, { Component } from 'react';
import './style.css';
import Nav from '../Nav/index';
import Footer from '../Footer/index';

class Register extends Component {
	render() {
		return (
			<div className='Register'>
				<Nav />
				<div className='register-main'>
					<h1 className='register-h1'>Registration</h1>
					<form onSubmit={this.handleSubmit} className='form-group register-form'>
						<label htmlFor='email'>
							<input
								className='form-control mx-sm-3 register-input'
								placeholder='Enter your Email'
								type='email'
								name='email'
								id='email'
							/>
						</label>
						<label htmlFor='password'>
							<input
								className='form-control mx-sm-3 register-input'
								placeholder='Choose a password'
								type='password'
								name='password'
								id='password'
							/>
						</label>
						<button className='styled-btn'>
                            Register
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

export default Register;
