import React from "react";

const SideMenu = () => {
	const info = "info@TypingTest.com";
	return (
		<section className='h-screen text-dark2 border border-light2 p-5 py-10'>
			<div>Profile Icon</div>
			<div>Night Mode, Font Size</div>
			<div>Practive</div>
			<div>Profile</div>
			<div>Typing Text</div>
			<div>High Score</div>
			<div>Help Center</div>
			<ul>
				<li>{info}</li>
				<li>Privacy Policy</li>
				<li>About Author</li>
				<li>Follow Me:</li>
			</ul>
		</section>
	);
};

export default SideMenu;
