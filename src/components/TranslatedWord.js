import React from 'react';

import TranslateButton from './TranslateButton';

const TranslatedWord = () => {
	return (
		<div className="translate-area">
			<textarea
				placeholder="Translate Here"
				className="translate-input translate-item"
			/>
			<TranslateButton />
		</div>
	);
};

export default TranslatedWord;
