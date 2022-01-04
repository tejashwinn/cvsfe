
import './App.css';
import CreateSignUp from './components/SignUp';
import CreateLogin from './components/LogIn';
import JoinClass from './components/JoinClass'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateHomePage from './components/HomePage'
import react from 'react';

function App() {
	return (
		<react.Fragment>
			<BrowserRouter>
				<Routes>
					<Route path="/signup" element={<CreateSignUp />} />
					<Route path="/" element={<CreateHomePage/>} />
					<Route path="/login" element={<CreateLogin />} />
					<Route path="/joinclass" element={<JoinClass />} />
				</Routes>
			</BrowserRouter>
			{/* <CreateHomePage/> */}
			
		</react.Fragment>
	);
}

export default App;
