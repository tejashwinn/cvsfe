import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import CreateSignUp from './components/User'
import { Route,BrowserRouter } from 'react-router-dom';


function Router() {
	return (
		<BrowserRouter>
			<Route exact path='/App' component={App} />
			{/* <Route exact ='/App' component={CreateSignUp} /> */}

		</BrowserRouter>
	)
}
ReactDOM.render(
	<React.StrictMode>   
		{/* <Router /> */}
		<App/>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
