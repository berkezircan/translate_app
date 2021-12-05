import React from 'react';

const TranslateButton = ({ microphoneStatus, setMicrophoneStatus }) => {
	const pressToTalk = () => {
		setMicrophoneStatus(true);
	};

	return (
		<button
			onClick={() => pressToTalk()}
			className={`translate-button ${
				microphoneStatus ? 'translate-button-active' : ''
			}`}
		>
			<i className="fas fa-microphone"></i>
		</button>
	);
};

export default TranslateButton;
