import { generate } from "random-words";
import React, { useState } from "react";

const GeneratingRandomWord = () => {
	const randomWords = generate(50);
	const [words, setWords] = useState(() => randomWords);
	console.log(words);
	return (
		<>
			<div className='words flex flex-wrap gap-1'>
				{/* Each Word */}
				{words.map((word, index) => (
					<span className='word' key={index}>
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
