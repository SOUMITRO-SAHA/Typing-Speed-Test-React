import { DoubleArrow } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useTestMode } from "../context/TestMode.context";

const TypingInputBox = ({ inputRef, focusInput }) => {
	const {
		wordsSpanRef,
		currWordIndex,
		currCharIndex,
		setCurrCharIndex,
		setCurrWordIndex,
		extraCharPressed,
		setExtraCharPressed,
	} = useTestMode();

	const conditionalStylingForInputBox = extraCharPressed
		? "red-blinking-effect"
		: "";

	useEffect(() => {
		focusInput();
	}, []);

	const keyPressHandler = (e) => {
		const allCurrentCharacters = wordsSpanRef[currWordIndex].current.childNodes;
		console.log(currCharIndex, allCurrentCharacters.length);
		// Logic for space
		if (e.keyCode === 32 && allCurrentCharacters.length <= currCharIndex) {
			// Remove the Cursor from the previous word and add the cursor to the current word
			allCurrentCharacters[currCharIndex - 1].classList.remove("current");

			// Add the cursor to the current words first Character
			wordsSpanRef[currWordIndex + 1].current.childNodes[0].className =
				"current";

			// Move to the Next Word
			setCurrWordIndex(currWordIndex + 1);
			setCurrCharIndex(0); // Reset the char index
			return;
		}
		// Current Word Ended and user pressing other key rather than Space.
		else if (
			e.keyCode !== 32 &&
			e.keyCode !== 8 &&
			allCurrentCharacters.length <= currCharIndex
		) {
			// Do Nothings
			// Blinking Effectt on the input box in red.
			setExtraCharPressed(true);
			return;
		}

		// Logic for Backspace
		if (e.keyCode === 8) {
			if (currCharIndex !== 0) {
				try {
					if (allCurrentCharacters.length !== currCharIndex) {
						allCurrentCharacters[currCharIndex].className = "";
					}
				} catch (error) {
					console.log(error);
				}
				allCurrentCharacters[currCharIndex - 1].className = "current";
				// Decreasing the Current character index by 1:
				setCurrCharIndex(currCharIndex - 1);
			}
			return;
		}

		if (e.key === allCurrentCharacters[currCharIndex].innerText) {
			allCurrentCharacters[currCharIndex].className = "correct";
		} else {
			allCurrentCharacters[currCharIndex].className = "incorrect";
		}

		// Wisth each key press move the cursor forward:
		if (currCharIndex + 1 === allCurrentCharacters.length) {
			allCurrentCharacters[currCharIndex].className += " current";
		} else {
			allCurrentCharacters[currCharIndex + 1].className = "current";
		}
		// If Correct Key Pressed Then increase the current character Index:
		setCurrCharIndex(currCharIndex + 1);
		setExtraCharPressed(false);
	};
	return (
		<section className='py-6 flex flex-wrap gap-5'>
			<div
				className='text-xl font-semibold w-[20%] bg-green-400 px-5 p-3 rounded-lg self-center text-center text-dark-p'
				onClick={focusInput}
			>
				Type Here <DoubleArrow />
			</div>
			<input
				type='text'
				className={`${conditionalStylingForInputBox} w-[60%] rounded-lg p-3 px-6 text-xl outline-none text-dark-p overflow-hidden bg-light-gray`}
				onKeyDown={keyPressHandler}
				ref={inputRef}
			/>
		</section>
	);
};

export default TypingInputBox;
