import React, { useEffect } from "react";
import { useTestMode } from "../context/TestMode.context";

const GeneratingRandomWord = () => {
	const { words, wordsSpanRef } = useTestMode();

	useEffect(() => {
		wordsSpanRef[0].current.childNodes[0].className = "current";
	}, []);

	return (
		<>
			<div className='words flex flex-wrap gap-1'>
				{/* Each Word */}
				{words.map((word, index) => (
					<span className='word' key={index} ref={wordsSpanRef[index]}>
						{/* Each Characters */}
						{word.split("").map((char, idx) => (
							<span key={idx}>{char}</span>
						))}
					</span>
				))}
			</div>
		</>
	);
};

export default GeneratingRandomWord;
