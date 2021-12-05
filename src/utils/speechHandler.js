export const speechHandler = (callback) => {
	const recognition =
		window.SpeechRecognition || window.webkitSpeechRecognition;

	const recognition = new SpeechRecognition();
	recognition.interimResults = true;

	recognition.addEventListener('result', (e) => {
		const text = Array.from(e.results)
			.map((result) => result[0])
			.map((result) => result.transcript)
			.join('');

		console.log(text);
	});

	recognition.start();

	recognition.addEventListener('end', () => {
		recognition.stop();
	});
};
