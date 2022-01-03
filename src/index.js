import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreateSignUp from './components/User'

ReactDOM.render(
	<React.StrictMode>
		<App />
		<body>
			<CreateSignUp />
		</body>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();



