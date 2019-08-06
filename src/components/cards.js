import React from 'react'; 
import { IoIosVideocam, IoIosSave } from "react-icons/io";
import { MdCached } from "react-icons/md";

function Cards() {
	return (
		<div className="about-cards-container">
			<div className="about-card">
				<IoIosVideocam size={60}/>
				<h3>Explore the Videos</h3>
				<hr className="short-line cards-line" />
				<p>Ever want a place to save all your favorite videos? View our videos and save the ones you're interested in to your personal dashboard!</p>
			</div>
			<div className="about-card">
			<MdCached size={60}/>
				<h3>Update your Videos</h3>
				<hr className="short-line cards-line" />
				<p>Want to change the information about your saved videos? Update these sections at any time!</p>
			</div>
			<div className="about-card">
			<IoIosSave size={60}/>
				<h3>View your Saved Videos</h3>
				<hr className="short-line cards-line" />
				<p>Go to your saved videos at any point! This is your personal dashboard where you can view all your favorite videos. Change your mind? Remove from your dash!</p>
			</div>
		</div>
	);
};
export default Cards; 