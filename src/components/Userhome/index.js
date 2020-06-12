import React, { Component } from 'react';
import './style.css';
import Nav from '../Nav/index';
import Footer from '../Footer/index';

class Userhome extends Component {
	arr = ['workout-1', 'workout-2', 'workout-3', 'workout-4'];

	render() {
		return (
			<div className='Userhome'>
				<Nav />
				<div className='workout-main'>
					<div className='workout-list'>
						<button
							className='styled-btn'
							type='button'
							data-toggle='collapse'
							data-target='#collapseExample'
							aria-expanded='false'
							aria-controls='collapseExample'>
							Select workout
							<span className='span'></span>
							<span className='span'></span>
							<span className='span'></span>
							<span className='span'></span>
						</button>
						<ul>
							{this.arr.map(workout => {
								return (
									<li class='collapse' id='collapseExample'>
										{workout}
									</li>
								);
							})}
						</ul>
					</div>
					<div className='workout-display'>
						<h3 className='workout-h3'>Please select a workout or create a new one</h3>
						<button className='styled-btn'>
							Create
							<span className='span'></span>
							<span className='span'></span>
							<span className='span'></span>
							<span className='span'></span>
							<i className='fa fa-plus'></i>
						</button>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Userhome;
