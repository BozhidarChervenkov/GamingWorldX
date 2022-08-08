import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import Home from "./components/Home/Home";
import Header from './components/Header/Header';
import Register from './components/Authorization/Register';
import Login from './components/Authorization/Login';
import Logout from './components/Authorization/Logout';
import Create from './components/Games/Create';
import All from './components/Games/All';
import GameById from './components/Games/GameById';
import { AuthContext } from './contexts/AuthContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { GameContext } from './contexts/GameContext';
import * as gameService from './services/gameService';

import './App.css';

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

	useEffect(() => {
		gameService.getAll()
			.then(result => {
				result = result.sort(g => g._createdOn).slice(0, 4);
				setGames(result);
			});
	}, []);

	return (
		<AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
			<div className="App">
				<Header />

				<GameContext.Provider value={{ games, gameAdd }}>
					<Routes>
						<Route path="/" element={<Home games={games} />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/logout" element={<Logout />} />
						<Route path="/create" element={<Create />} />
						<Route path="/games/:gameId" element={<GameById />} />
						<Route path="/games/all" element={<All />} />
					</Routes>
				</GameContext.Provider>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
