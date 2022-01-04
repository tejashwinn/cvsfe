
import './App.css';
import CreateSignUp from './components/SignUp';
import CreateLogin from './components/LogIn';
import JoinClass from './components/JoinClass'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import react from 'react';

function App() {
	return (
		<react.Fragment>
			<BrowserRouter>
				<Routes>
					<Route path="/signup" element={<CreateSignUp />} />
					<Route path="/login" element={<CreateLogin />} />
					<Route path="/joinclass" element={<JoinClass />} />
				</Routes>
			</BrowserRouter>
			
		</react.Fragment>
	);
}

export default App;
