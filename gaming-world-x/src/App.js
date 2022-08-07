import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from "./components/Home/Home";
import Header from './components/Header/Header';
import Register from './components/Authorization/Register';
import Login from './components/Authorization/Login';
import Logout from './components/Authorization/Logout';
import Create from './components/Games/Create';
import { AuthContext } from './contexts/AuthContext';
import { useLocalStorage } from './hooks/useLocalStorage';

import './App.css';

function App() {
	const [auth, setAuth] = useLocalStorage('auth', {});

	const userLogin = (authData) => {
		setAuth(authData);
	};

	const userLogout = () => {
		setAuth({});
	};

	return (
		<AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
			<div className="App">
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/logout" element={<Logout />} />
					<Route path="/create" element={<Create />} />
					<Route path="/catalog" element={<h1>Catalog page</h1>} />
					<Route path="/games/all" element={<h1>All games page</h1>} />
				</Routes>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
