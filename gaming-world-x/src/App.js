import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import { AuthContext } from './contexts/AuthContext';
import Header from './components/Header/Header';
import Register from './components/Authorization/Register';
import Login from './components/Authorization/Login';
import Home from "./components/Home/Home";

import './App.css';

function App() {
	const [auth, setAuth] = useState({});

	const userLogin = (authData) => {
		setAuth(authData);
	}

	return (
		<AuthContext.Provider value={{ user: auth, userLogin }}>
			<div className="App">
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/logout" element={<h1>Logout</h1>} />
					<Route path="/catalog" element={<h1>Catalog page</h1>} />
					<Route path="/games/all" element={<h1>All games page</h1>} />
				</Routes>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
