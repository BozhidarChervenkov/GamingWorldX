import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import Home from "./components/Home/Home";
import Navigation from './components/Navigation/Navigation';
import Register from './components/Authorization/Register';
import Login from './components/Authorization/Login';
import Logout from './components/Authorization/Logout';
import GameById from './components/Games/GameById';
import All from './components/Games/All';
import Categories from './components/Games/Categories';
import GamesByCategory from './components/Games/GamesByCategory';
import Create from './components/Games/Create';
import Edit from './components/Games/Edit';

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

	const gameEdit = (gameId, gameData) => {
		setGames(state => {
			console.log(state);
			const gamesWithoutEditedOne = state.filter(g => g._id !== gameId)
			console.log(gamesWithoutEditedOne);
			const games = [
				...gamesWithoutEditedOne,
				gameData
			];

			return games;
		});
	};

	const gameRemove = (gameId) => {
		setGames(state => {
			const gamesWithoutDeleted = state.filter(g => g._id !== gameId)
			return gamesWithoutDeleted;
		});
	};

	useEffect(() => {
		gameService.getAll()
			.then(games => {
				setGames(games);
			});
	}, []);

	return (
		<AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
			<div className="App">
				<Navigation />

				<GameContext.Provider value={{ games, gameAdd, gameEdit, gameRemove }}>
					<Routes>
						<Route path="/" element={<Home games={games} />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/logout" element={<Logout />} />
						<Route path="/games/:gameId" element={<GameById />} />
						<Route path="/games/all" element={<All />} />
						<Route path="/games/categories" element={<Categories />} />
						<Route path="/games/categories/:categoryType" element={<GamesByCategory />} />
						<Route path="/create" element={<Create />} />
						<Route path="/game/edit/:gameId" element={<Edit />} />
					</Routes>
				</GameContext.Provider>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
