import React, { useCallback } from 'react';

import _ from 'lodash';

import TranslateButton from './TranslateButton';

const TranslatedWord = ({
	word,
	setWord,
	translateWord,
	microphoneStatus,
	setMicrophoneStatus,
	speechHandler,
}) => {
	const onWordChange = (event) => {
		debounce(event.target.value);
	};

	const debounce = useCallback(
		_.debounce((_searchVal) => {
			setWord(_searchVal);

			translateWord(_searchVal);
		})
	);

	return (
		<div className="translate-area">
			<textarea
				placeholder="Translate Here"
				className="translate-input translate-item"
				onChange={(e) => onWordChange(e)}
				value={word}
			/>
			<TranslateButton
				microphoneStatus={microphoneStatus}
				setMicrophoneStatus={setMicrophoneStatus}
				speechHandler={speechHandler}
			/>
		</div>
	);
};

export default TranslatedWord;
