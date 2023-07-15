import { DoubleArrow } from "@mui/icons-material";
import React from "react";

const TypingInputBox = () => {
	return (
		<section className='py-6 flex flex-wrap gap-5'>
			<div className='text-xl font-semibold w-[20%] bg-green-400 px-5 p-3 rounded-lg self-center text-center text-dark-p'>
				Type Here <DoubleArrow />
			</div>
			<input
				type='text'
				className='w-[60%] rounded-lg p-3 px-6 text-xl outline-none text-dark-p overflow-hidden bg-light-gray'
			/>
		</section>
	);
};

export default TypingInputBox;
