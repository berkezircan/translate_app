import { useState } from 'react';
import translate from 'translate';

// Styles
import './styles/App.scss';
// Components
import TranslatedWord from './components/TranslatedWord';
import TranslateWordResult from './components/TranslateWordResult';
import { API_KEY, TRANSLATE_ENGINE, TRANSLATE_LANGUAGE } from './utils';

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

	return (
		<div className="App">
			<div className="container">
				<h1 className="display-1 title">Translate</h1>
				<div className="translate-container">
					<TranslatedWord
						word={word}
						setWord={setWord}
						translateWord={translateWord}
						microphoneStatus={microphoneStatus}
						setMicrophoneStatus={setMicrophoneStatus}
					/>
					<TranslateWordResult result={result} />
				</div>
			</div>
		</div>
	);
}

export default App;
