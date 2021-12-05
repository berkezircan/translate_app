import React from 'react';

const TranslateButton = ({ microphoneStatus, speechHandler }) => {
	return (
		<button
			onClick={speechHandler}
			className={`translate-button ${
				microphoneStatus ? 'translate-button-active' : ''
			}`}
			title="Click here to use your microphone"
		>
			<i className="fas fa-microphone"></i>
		</button>
	);
};

export default TranslateButton;
