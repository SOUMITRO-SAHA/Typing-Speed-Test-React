import React from "react";
import { Route, Routes } from "react-router-dom";
import SideMenu from "./components/SideMenu.component";
import HighScores from "./pages/HighScores.page";
import Home from "./pages/Home.page";
import Profile from "./pages/Profile.page";

const App = () => {
	return (
		<main className='h-screen w-screen dark:bg-dark-p dg-light-p grid grid-cols-12 gap-5 text-light-text dark:text-dark-text'>
			<section className='col-span-2'>
				<SideMenu />
			</section>

			<section className='col-span-9 p-10'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/high-scores' element={<HighScores />} />
				</Routes>
			</section>
		</main>
	);
};

export default App;
