import React from 'react';

const TranslateButton = ({ translateWord, testFunc }) => {
	return (
		<button onClick={() => translateWord()} className="translate-button">
			<i className="fas fa-microphone"></i>
		</button>
	);
};

export default TranslateButton;
