import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import Home from "./components/Home/Home";
import Header from './components/Header/Header';
import Register from './components/Authorization/Register';
import Login from './components/Authorization/Login';
import Logout from './components/Authorization/Logout';
import Create from './components/Games/Create';
import { AuthContext } from './contexts/AuthContext';
import { useLocalStorage } from './hooks/useLocalStorage';

import './App.css';
import { GameContext } from './contexts/GameContext';

function App() {
	const [games, setGames] = useState([]);
	const [auth, setAuth] = useLocalStorage('auth', {});
	const navigate = useNavigate();
	
	const userLogin = (authData) => {
		setAuth(authData);
	};

	const userLogout = () => {
		setAuth({});
	};

	const gameAdd = (gameData) => {
		setGames(state => [
			...state,
			gameData,
		]);

		navigate('/catalog');
	};

	return (
		<AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
			<div className="App">
				<Header />

				<GameContext.Provider value = {{games, gameAdd}}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/logout" element={<Logout />} />
						<Route path="/create" element={<Create />} />
						<Route path="/catalog" element={<h1>Catalog page</h1>} />
						<Route path="/games/all" element={<h1>All games page</h1>} />
					</Routes>
				</GameContext.Provider>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
