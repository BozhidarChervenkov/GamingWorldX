import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header';
import Register from './components/Authorization/Register';
import Login from './components/Authorization/Login';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path="/" element={<h1>Home</h1>} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<h1>Logout</h1>} />
			</Routes>
		</div>
	);
}

export default App;
