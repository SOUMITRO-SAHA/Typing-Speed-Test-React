import React from "react";

const UpperMenu = () => {
	const currentSpeed = 30;
	const currentAccuracy = 99.5;
	const totalScore = 4000;
	return (
		<div className='bg-light-s dark:bg-dark-s p-5 rounded-lg lg:px-10'>
			<div className='flex flex-wrap justify-between gap-5 font-semibold text-2xl'>
				<div>{`Speed: ${currentSpeed} WPM`}</div>
				<div>{`Accuracy: ${currentAccuracy} %`}</div>
				<div>{`Speed: ${totalScore} Point`}</div>
			</div>
			<div className='font-semibold text-2xl mt-6'>Daily Goal:</div>
		</div>
	);
};

export default UpperMenu;
