import React from "react";
import KeyboardLayout from "../components/KeyboardLayout.component";
import TypingBox from "../components/TypingBox";
import UpperMenu from "../components/UpperMenu.component";

const Home = () => {
	return (
		<section>
			<UpperMenu />
			<TypingBox />
			<KeyboardLayout />
		</section>
	);
};

export default Home;
