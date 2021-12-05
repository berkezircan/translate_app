import React from 'react';

const TranslateWordResult = ({ result }) => {
	return (
		<div className="translate-item ">
			{result !== '' ? result : 'Translate Word Result'}
		</div>
	);
};

export default TranslateWordResult;
