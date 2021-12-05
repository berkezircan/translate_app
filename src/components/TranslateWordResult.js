import React from 'react';

const TranslateWordResult = ({ result }) => {
	return (
		<div className="translate-item px-1 py-2">
			{result !== '' ? result : 'Translate Word Result'}
		</div>
	);
};

export default TranslateWordResult;
