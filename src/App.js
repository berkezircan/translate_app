import { useState } from 'react';
import translate from 'translate';
// Styles
import './styles/App.scss';
// Components
import TranslatedWord from './components/TranslatedWord';
import TranslateWordResult from './components/TranslateWordResult';
import { API_KEY, TRANSLATE_ENGINE, TRANSLATE_LANGUAGE } from './utils';
import Astronaut from './components/Astronaut';

const SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.interimResults = true;
recognition.lang = 'en-US';

function App() {
	const [word, setWord] = useState('');
	const [result, setResult] = useState('');
	const [microphoneStatus, setMicrophoneStatus] = useState(false);

	const translateWord = async (searchValue) => {
		translate.engine = TRANSLATE_ENGINE;
		translate.key = API_KEY;

		if (searchValue.trim() !== '') {
			const response = await translate(searchValue, TRANSLATE_LANGUAGE);

			setResult(response);
		}
	};

	const speechHandler = () => {
		setMicrophoneStatus(true);

		recognition.addEventListener('result', (e) => {
			const text = Array.from(e.results)
				.map((result) => result[0])
				.map((result) => result.transcript)
				.join('');

			setWord(text);

			translateWord(text);
		});

		recognition.start();

		recognition.addEventListener('end', () => {
			recognition.stop();

			setMicrophoneStatus(false);
		});
	};

	return (
		<div className="App">
			<div className="container">
				<Astronaut />
				<h1 className="display-1 title">Translate</h1>
				<div className="translate-container">
					<TranslatedWord
						word={word}
						setWord={setWord}
						translateWord={translateWord}
						microphoneStatus={microphoneStatus}
						setMicrophoneStatus={setMicrophoneStatus}
						speechHandler={speechHandler}
					/>
					<TranslateWordResult result={result} />
				</div>
			</div>
		</div>
	);
}

export default App;
