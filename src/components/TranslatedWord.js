import React from 'react';

import TranslateButton from './TranslateButton';

const TranslatedWord = ({ word, setWord }) => {
	const onWordChange = (e) => {
		setWord(e.target.value);
	};

	return (
		<div className="translate-area">
			<textarea
				placeholder="Translate Here"
				className="translate-input translate-item"
				onChange={(e) => onWordChange(e)}
			/>
			<TranslateButton />
		</div>
	);
};

export default TranslatedWord;
