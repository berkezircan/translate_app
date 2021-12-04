import './styles/App.scss';

import TranslatedWord from './components/TranslatedWord';
import TranslateWordResult from './components/TranslateWordResult';

function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>Translate</h1>
				<div className="translate-container">
					<TranslatedWord />
					<TranslateWordResult />
				</div>
			</div>
		</div>
	);
}

export default App;
