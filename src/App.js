import { useState } from 'react';
import translate from 'translate';
// Styles
import './styles/App.scss';
// Components
import TranslatedWord from './components/TranslatedWord';
import TranslateWordResult from './components/TranslateWordResult';

function App() {
	const [word, setWord] = useState('');
	const [translatedWord, setTranslatedWord] = useState('');

	const translateWord = async (word) => {
		translate.engine = 'google';
		translate.key = 'AIzaSyD11ylXgBEAvMeaSYU1DFULsFZJmiRU1Dc';

		const response = await translate('asdasd', 'tr');
		console.log(1, response);
	};

	return (
		<div className="App">
			<div className="container">
				<h1 className="display-1 title">Translate</h1>
				<div className="translate-container">
					<TranslatedWord word={word} setWord={setWord} />
					<TranslateWordResult />
				</div>
			</div>
		</div>
	);
}

export default App;
