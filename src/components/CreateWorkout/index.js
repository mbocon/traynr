import React, { Component } from 'react';
import './style.css';
import Nav from '../Nav/index';
import Footer from '../Footer/index';

class CreateWorkout extends Component {
	render() {
		return (
			<div className='CreateWorkout'>
				<Nav />
                <div className='create-main'>
                    <h2 className='create-h2'>Create workout</h2>
                    <div className="workout">
                        <div className="card">
                        <h4>Name of exercise</h4>
                        <h5>Sets</h5>
                        <h5>reps</h5>
                        <h5>Weight/time/distance</h5>
                        <h5>Iterations</h5>
                        </div>
                        
                    </div>
                    <form onSubmit={this.handleSubmit} className='form-group create-form'>
                    <div className="inputs">
						<label htmlFor='exercise'>Name of exercise</label>
                        <input className='form-control form-input'  id='exercise' type='text'  placeholder="squats, pushups, run..." onChange={this.handleChange} />
                    </div>
                    <div className="inputs">
						<label htmlFor='exercise'>Sets</label>
                        <input className='form-control form-input'  id='exercise' type='text'  placeholder="Enter a number" onChange={this.handleChange} />
                    </div>
                    <div className="inputs">
						<label htmlFor='exercise'>Reps</label>
                        <input className='form-control form-input'  id='exercise' type='text'  placeholder="Enter a number" onChange={this.handleChange} />
                    </div>
                    <div className="inputs">
						<label htmlFor='exercise'>Weight/Time/Distance</label>
                        <input className='form-control form-input'  id='exercise' type='text'  placeholder="Enter a number" onChange={this.handleChange} />
                    </div>
                    <div className="inputs">
						<label htmlFor='exercise'>How many iterations?</label>
                        <input className='form-control form-input'  id='exercise' type='text'  placeholder="Enter a number" onChange={this.handleChange} />
                    </div>
                    <div className="form-btn">
                    
						<button className='styled-btn save-btn'>
							Save <span className='span'></span>
							<span className='span'></span>
							<span className='span'></span>
							<span className='span'></span>
                        </button>
                        </div>
					</form>
				</div>
				<Footer />
			</div>
		);
	}
}

export default CreateWorkout;
