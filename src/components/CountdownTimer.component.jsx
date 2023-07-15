import React from "react";
import { useTestMode } from "../context/TestMode.context";

const CountdownTimer = () => {
	const { testTime, setTestTime } = useTestMode();

	const countDownTimerDivStyling =
		testTime <= 15 ? "bg-red-500" : "bg-text-active";

	return (
		<div className='flex flex-wrap justify-between py-3 text-lg font-semibold items-center text-center'>
			<div
				className={`px-3 py-1  rounded text-dark-p w-20 ${countDownTimerDivStyling}`}
			>
				{`${testTime} s`}
			</div>
			<div className='flex gap-1 text-dark-p '>
				<button
					className='dark:hover:bg-light-gray py-1 px-3 bg-yellow-400 rounded w-20'
					onClick={() => setTestTime(30)}
				>
					30 sec
				</button>
				<button
					className='text-center border-r-2 border-l-2 dark:hover:bg-light-gray py-1 px-3 bg-yellow-400 rounded border-dark-p w-20'
					onClick={() => setTestTime(60)}
				>
					1 min
				</button>
				<button
					className='dark:hover:bg-light-gray py-1 px-3 bg-yellow-400 rounded w-20'
					onClick={() => setTestTime(5 * 60)}
				>
					5 mins
				</button>
			</div>
		</div>
	);
};

export default CountdownTimer;
