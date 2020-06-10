import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

class Footer extends Component {
	render() {
		return (
            <div className="footer fixed-bottom">
                <div className="quote">
                <blockquote cite="https://www.goodreads.com/author/quotes/17977069.David_Goggins?page=2">
                "I don't stop when I'm tired, I stop when I'm done." -David Goggins
                </blockquote>
                </div>
                <div className="contact">
                    <p>Built by Mike Bocon</p>
                    <a href='https://www.linkedin.com/in/mike-bocon/' target="_blank"><i className="fa fa-linkedin-square footer-linkedin" aria-hidden="true"></i></a>
                </div>
                <div className="quote">
                <blockquote cite="https://www.goalcast.com/2017/05/30/top-15-arnold-schwarzenegger-quotes/">
                "Failure is not an option..." -Arnold Schwarzenegger
                </blockquote>
                </div>
            </div>
		)
	}
}

export default Footer;
