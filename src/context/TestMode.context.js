import { generate } from "random-words";
import { createContext, createRef, useContext, useMemo, useState } from "react";

const TestModeContext = createContext({
	testTime: 30,
	setTestTime: () => {},
	words: [],
	setWords: () => {},
	wordsSpanRef: [],
	currCharIndex: 0,
	currWordIndex: 0,
	setCurrCharIndex: () => {},
	setCurrWordIndex: () => {},
	extraCharPressed: false,
	setExtraCharPressed: () => {},
});

export const TestModeContextProvider = ({ children }) => {
	const [extraCharPressed, setExtraCharPressed] = useState(false);
	const [currWordIndex, setCurrWordIndex] = useState(0);
	const [currCharIndex, setCurrCharIndex] = useState(0);
	const [testTime, setTestTime] = useState(30);
	const randomWords = generate(50);
	const [words, setWords] = useState(() => randomWords);

	const wordsSpanRef = useMemo(() => {
		return Array(words.length)
			.fill(0)
			.map((i) => createRef(null));
	}, [words]);

	const value = {
		testTime,
		setTestTime,
		words,
		setWords,
		wordsSpanRef,
		currCharIndex,
		currWordIndex,
		setCurrCharIndex,
		setCurrWordIndex,
		extraCharPressed,
		setExtraCharPressed,
	};

	return (
		<TestModeContext.Provider value={value}>
			{children}
		</TestModeContext.Provider>
	);
};

export const useTestMode = () => useContext(TestModeContext);
