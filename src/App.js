import react from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import CreateSignUp from './pages/SignUp';
import CreateLogin from './pages/LogIn';
import JoinClass from './pages/JoinClass';
import CreateHomePage from './pages/HomePage';
import CreateAddPost from './components/AddPost';
import DownloadFile from './pages/Download';

function App() {
	return (
		<react.Fragment>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<CreateHomePage />} />
					<Route path="/signup" element={<CreateSignUp />} />
					<Route path="/login" element={<CreateLogin />} />
					<Route path="/joinclass" element={<JoinClass />} />
					<Route path="/addpost" element={<CreateAddPost />} />
					<Route path="/download" element={<DownloadFile />} />				
				</Routes>
			</BrowserRouter>
		</react.Fragment>
	);
}

export default App;
