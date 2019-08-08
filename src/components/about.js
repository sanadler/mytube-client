import React from 'react';
import Cards from './cards.js';
import './cards.css';

//about component for the landing page. tells what the app does
function About() {
	return (
		<div className="about-page">
			<div className="about-header-container">
				<h2 className="about-header">How It Works</h2>
				<hr className="short-line" />
			</div>
			<Cards />
		</div>
	);
};

export default About; 
