import React from 'react';

import TranslateButton from './TranslateButton';

const TranslatedWord = ({ word, setWord, translateWord }) => {
	const onWordChange = (e) => {
		setWord(e.target.value);
	};

	return (
		<div className="translate-area">
			<textarea
				placeholder="Translate Here"
				className="translate-input translate-item"
				onChange={(e) => onWordChange(e)}
				value={word}
			/>
			<TranslateButton translateWord={translateWord} />
		</div>
	);
};

export default TranslatedWord;
