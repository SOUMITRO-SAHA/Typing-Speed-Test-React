import React from "react";
import CountdownTimer from "./CountdownTimer.component";
import GeneratingRandomWord from "./GeneratingRandomWord.component";
import TypingInputBox from "./TypingInputBox.component";

const TypingBox = () => {
	return (
		<section className='mt-10 mb-16'>
			<div className=''>
				<CountdownTimer />
			</div>
			<div className='w-full h-auto max-h-[200px] scroll overflow-y-auto border-spacing-2 border-2 p-6 px-10 text-2xl font-normal rounded-lg border-light-s dark:border-dark-s'>
				<GeneratingRandomWord />
			</div>

			<div>
				<TypingInputBox />
			</div>
		</section>
	);
};

export default TypingBox;
